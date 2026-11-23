/* Moteur du site d'entraînement DS2 Gestion */
window.BLOCS = [];

/* ---------- utilitaires ---------- */
function fmt(n) {
  if (n === null || n === undefined || n === "") return "";
  const r = Math.round(n * 100) / 100;
  return r.toLocaleString("fr-FR", { minimumFractionDigits: (r % 1 ? 2 : 0), maximumFractionDigits: 2 }).replace(/ /g, " ");
}
function parseNum(s) {
  if (s === null || s === undefined) return NaN;
  s = String(s).replace(/[\s  €%]/g, "").replace(/−/g, "-").replace(",", ".");
  if (s === "" || s === "-") return NaN;
  return Number(s);
}
function rnd(a, b, step) { step = step || 1; const k = Math.floor(Math.random() * (Math.floor((b - a) / step) + 1)); return a + k * step; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function r2(x) { return Math.round(x * 100) / 100; }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function el(tag, attrs, html) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) { if (k === "class") e.className = attrs[k]; else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); }
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- constructeurs d'exercices (utilisés dans les fichiers data) ---------- */
// QCM : une seule bonne réponse
function Q(q, c, a, e, h) { return { t: "qcm", q, c, a, e, h }; }
// Plusieurs bonnes réponses (cases à cocher)
function M(q, c, a, e, h) { return { t: "multi", q, c, a, e, h }; }
// Réponse numérique
function N(q, a, e, o) { o = o || {}; return { t: "num", q, a, e, u: o.u === undefined ? "€" : o.u, tol: o.tol || 0.011, h: o.h }; }
// Écriture au journal : rows = [[compte, débit, crédit], ...]
function E(q, rows, e, o) { o = o || {}; return { t: "entry", q, rows, e, h: o.h, hideCount: o.hideCount }; }
// Tableau à compléter : cellules = texte, ou {a: nombre} pour une case à remplir
function T(q, head, rows, e, h) { return { t: "table", q, head, rows, e, h }; }
// Flashcard de cours
function F(q, a) { return { t: "flash", q, a }; }

// Bloc HTML d'écriture pour le cours / les corrections
function J(rows, title) {
  let td = 0, tc = 0;
  let h = '<div class="tw"><table><thead><tr><th>N° compte</th><th>Intitulé</th><th class="n">Débit</th><th class="n">Crédit</th></tr></thead><tbody>';
  rows.forEach(r => {
    if (typeof r === "string") { h += `<tr><td colspan="4" style="font-weight:600;background:var(--code)">${r}</td></tr>`; return; }
    const [acc, d, c, lbl] = r; td += d || 0; tc += c || 0;
    h += `<tr><td class="mono">${acc}</td><td${c ? ' style="padding-left:28px"' : ""}>${lbl || accName(acc)}</td><td class="n">${d ? fmt(d) : ""}</td><td class="n">${c ? fmt(c) : ""}</td></tr>`;
  });
  h += "</tbody>" + (td || tc ? `<tfoot><tr><td colspan="2">Total</td><td class="n">${fmt(td)}</td><td class="n">${fmt(tc)}</td></tr></tfoot>` : "") + "</table></div>";
  return (title ? `<div class="small" style="margin-top:6px">${title}</div>` : "") + h;
}
// Petit tableau HTML générique
function TB(head, rows) {
  let h = '<div class="tw"><table><thead><tr>' + head.map(x => `<th>${x}</th>`).join("") + "</tr></thead><tbody>";
  rows.forEach(r => { h += "<tr>" + r.map(x => typeof x === "number" ? `<td class="n">${fmt(x)}</td>` : `<td>${x}</td>`).join("") + "</tr>"; });
  return h + "</tbody></table></div>";
}

/* ---------- stockage de la progression ---------- */
const STORE = {
  get(k) { try { return localStorage.getItem("ds2g:" + k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem("ds2g:" + k, v); } catch (e) { } },
  del(k) { try { localStorage.removeItem("ds2g:" + k); } catch (e) { } }
};
const solvedMem = {};
function isSolved(key) { return solvedMem[key] || STORE.get("s:" + key) === "1"; }
function markSolved(key) { solvedMem[key] = true; STORE.set("s:" + key, "1"); refreshProgress(); }

function allSkills() { const out = []; BLOCS.forEach(b => b.skills.forEach(s => out.push(s))); return out; }
function skillStat(s) { const n = s.ex.length; let k = 0; s.ex.forEach((_, i) => { if (isSolved(s.id + ":" + i)) k++; }); return { n, k }; }

/* ---------- correspondance des comptes ---------- */
function accMatch(user, exp) {
  user = String(user).trim(); exp = String(exp).trim();
  if (!user) return false;
  if (user === exp) return true;
  if ((ACC_ALIAS[exp] || []).includes(user)) return true;
  if (user.startsWith(exp) && user.length > exp.length) return true; // plus détaillé : accepté
  return false;
}

/* ---------- rendu des exercices ---------- */
function renderExercise(ex, key, idxLabel) {
  const box = el("div", { class: "ex" + (key && isSolved(key) ? " solved" : "") });
  const head = el("div", { class: "exhead" }, `<b>${idxLabel}</b><span>${{ qcm: "QCM", multi: "Plusieurs réponses", num: "Calcul", entry: "Écriture au journal", table: "Tableau à compléter", flash: "Question de cours" }[ex.t]}</span>` + (key && isSolved(key) ? '<span style="color:var(--ok);font-weight:700">✓ réussi</span>' : ""));
  box.appendChild(head);
  box.appendChild(el("div", { class: "q" }, ex.q));
  const fb = el("div");
  const corr = el("div");
  const ok = () => { if (key) { markSolved(key); box.classList.add("solved"); } };
  const showCorr = () => {
    let h = '<div class="corr"><h5>Correction</h5>';
    if (ex.t === "entry") h += J(ex.rows);
    if (ex.t === "num") h += `<p><b>Réponse : ${fmt(ex.a)}${ex.u ? " " + ex.u : ""}</b></p>`;
    if (ex.t === "table") h += tableCorrection(ex);
    if (ex.e) h += `<div>${ex.e}</div>`;
    corr.innerHTML = h + "</div>";
  };
  const actions = el("div", { class: "row-actions" });
  const addHint = () => { if (ex.h) { const hb = el("button", { class: "btn small" }, "💡 Indice"); hb.onclick = () => { hb.replaceWith(el("span", { class: "small" }, "💡 " + ex.h)); }; actions.appendChild(hb); } };
  const addCorrBtn = () => { const cb = el("button", { class: "btn small" }, "Voir la correction"); cb.onclick = showCorr; actions.appendChild(cb); };

  if (ex.t === "qcm") {
    const ch = el("div", { class: "choices" });
    ex.c.forEach((c, i) => {
      const b = el("button", { class: "choice" }, c);
      b.onclick = () => {
        if (i === ex.a) { b.classList.add("good"); fb.innerHTML = '<div class="fb ok">✔ Exact.</div>'; ok(); showCorr(); }
        else { b.classList.add("bad"); fb.innerHTML = '<div class="fb ko">✘ Non. Réessaie (ou regarde la correction).</div>'; }
      };
      ch.appendChild(b);
    });
    box.appendChild(ch); addHint(); addCorrBtn();
  }
  if (ex.t === "multi") {
    const ch = el("div", { class: "choices" }); const sel = new Set();
    const btns = ex.c.map((c, i) => { const b = el("button", { class: "choice" }, "☐ " + c); b.onclick = () => { if (sel.has(i)) { sel.delete(i); b.classList.remove("sel"); b.innerHTML = "☐ " + c; } else { sel.add(i); b.classList.add("sel"); b.innerHTML = "☑ " + c; } }; ch.appendChild(b); return b; });
    box.appendChild(ch);
    const vb = el("button", { class: "btn primary small" }, "Vérifier");
    vb.onclick = () => {
      const good = ex.a.length === sel.size && ex.a.every(i => sel.has(i));
      btns.forEach((b, i) => { b.classList.remove("good", "bad"); if (sel.has(i)) b.classList.add(ex.a.includes(i) ? "good" : "bad"); });
      if (good) { fb.innerHTML = '<div class="fb ok">✔ Tout juste.</div>'; ok(); showCorr(); }
      else fb.innerHTML = `<div class="fb ko">✘ Pas encore : ${ex.a.filter(i => !sel.has(i)).length} bonne(s) réponse(s) oubliée(s), ${[...sel].filter(i => !ex.a.includes(i)).length} en trop.</div>`;
    };
    actions.appendChild(vb); addHint(); addCorrBtn();
  }
  if (ex.t === "num") {
    const w = el("div", { class: "numwrap" });
    const inp = el("input", { class: "in num", inputmode: "decimal", placeholder: "ta réponse" });
    w.appendChild(inp); if (ex.u) w.appendChild(el("span", null, ex.u));
    box.appendChild(w);
    const vb = el("button", { class: "btn primary small" }, "Vérifier");
    const check = () => {
      const v = parseNum(inp.value);
      if (isNaN(v)) { fb.innerHTML = '<div class="fb ko">Écris un nombre (ex : 1 200 ou 1200,50).</div>'; return; }
      if (Math.abs(v - ex.a) <= ex.tol) { inp.className = "in num good"; fb.innerHTML = '<div class="fb ok">✔ Exact.</div>'; ok(); showCorr(); }
      else { inp.className = "in num bad"; fb.innerHTML = '<div class="fb ko">✘ Ce n\'est pas ça. Reprends la méthode étape par étape.</div>'; }
    };
    vb.onclick = check; inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    actions.appendChild(vb); addHint(); addCorrBtn();
  }
  if (ex.t === "entry") { renderEntry(ex, box, actions, fb, ok, showCorr); addHint(); addCorrBtn(); }
  if (ex.t === "table") { renderTable(ex, box, actions, fb, ok, showCorr); addHint(); addCorrBtn(); }
  if (ex.t === "flash") {
    const a = el("div", { class: "flash-a corr" }, ex.a);
    const sb = el("button", { class: "btn primary small" }, "Voir la réponse");
    sb.onclick = () => {
      a.classList.add("show"); sb.remove();
      const y = el("button", { class: "btn small" }, "✔ Je savais"); y.onclick = () => { ok(); fb.innerHTML = '<div class="fb ok">Noté comme su.</div>'; };
      const n = el("button", { class: "btn small" }, "✘ À revoir"); n.onclick = () => { fb.innerHTML = '<div class="fb ko">Relis la réponse, recopie-la de mémoire sur une feuille, puis reviens.</div>'; };
      actions.appendChild(y); actions.appendChild(n);
    };
    box.appendChild(a); actions.appendChild(sb);
  }
  box.appendChild(actions); box.appendChild(fb); box.appendChild(corr);
  return box;
}

function renderEntry(ex, box, actions, fb, ok, showCorr) {
  const wrap = el("div", { class: "tw" });
  const t = el("table", { class: "journal" });
  t.innerHTML = '<thead><tr><th>N° compte</th><th>Intitulé (auto)</th><th class="n">Débit</th><th class="n">Crédit</th><th></th></tr></thead>';
  const tb = el("tbody"); const tf = el("tfoot");
  t.appendChild(tb); t.appendChild(tf); wrap.appendChild(t); box.appendChild(wrap);
  const rows = [];
  const updTot = () => {
    let d = 0, c = 0; rows.forEach(r => { d += parseNum(r.d.value) || 0; c += parseNum(r.c.value) || 0; });
    tf.innerHTML = `<tr><td colspan="2">Total ${Math.abs(d - c) > 0.005 ? '<span class="unbal">(déséquilibré : débit ≠ crédit)</span>' : "✓ équilibré"}</td><td class="n">${fmt(d)}</td><td class="n">${fmt(c)}</td><td></td></tr>`;
  };
  const addRow = () => {
    const tr = el("tr");
    const a = el("input", { class: "in acc mono", placeholder: "ex. 607", inputmode: "numeric" });
    const l = el("td", { class: "lbl" });
    const d = el("input", { class: "in num amt", inputmode: "decimal" });
    const c = el("input", { class: "in num amt", inputmode: "decimal" });
    const x = el("button", { class: "btn small", title: "Supprimer la ligne" }, "✕");
    const td1 = el("td"); td1.appendChild(a); tr.appendChild(td1); tr.appendChild(l);
    const td3 = el("td"); td3.appendChild(d); tr.appendChild(td3);
    const td4 = el("td"); td4.appendChild(c); tr.appendChild(td4);
    const td5 = el("td", { class: "del" }); td5.appendChild(x); tr.appendChild(td5);
    const r = { tr, a, d, c, l };
    a.addEventListener("input", () => { l.textContent = accName(a.value); });
    d.addEventListener("input", updTot); c.addEventListener("input", updTot);
    x.onclick = () => { rows.splice(rows.indexOf(r), 1); tr.remove(); updTot(); };
    rows.push(r); tb.appendChild(tr);
  };
  const n0 = ex.hideCount ? 2 : ex.rows.length;
  for (let i = 0; i < n0; i++) addRow();
  updTot();
  const plus = el("button", { class: "btn small" }, "+ ligne"); plus.onclick = addRow;
  const vb = el("button", { class: "btn primary small" }, "Vérifier");
  vb.onclick = () => {
    const user = rows.filter(r => r.a.value.trim() || r.d.value.trim() || r.c.value.trim());
    const used = new Array(ex.rows.length).fill(false);
    const msgs = []; let allGood = true;
    user.forEach(r => {
      r.a.className = "in acc mono"; r.d.className = "in num amt"; r.c.className = "in num amt";
      const ua = r.a.value.trim(), ud = parseNum(r.d.value) || 0, uc = parseNum(r.c.value) || 0;
      let j = ex.rows.findIndex((er, k) => !used[k] && accMatch(ua, er[0]) && Math.abs(ud - (er[1] || 0)) < 0.011 && Math.abs(uc - (er[2] || 0)) < 0.011);
      if (j < 0) j = ex.rows.findIndex((er, k) => !used[k] && accMatch(ua, er[0]));
      if (j < 0) {
        allGood = false; r.a.classList.add("bad");
        msgs.push(ua ? `Le compte <b>${esc(ua)}</b> n'a rien à faire dans cette écriture (ou il est en double).` : "Une ligne a des montants mais pas de numéro de compte.");
        return;
      }
      used[j] = true; r.a.classList.add("good");
      const [acc, ed, ec] = ex.rows[j];
      const eD = ed || 0, eC = ec || 0;
      const dOk = Math.abs(ud - eD) < 0.011, cOk = Math.abs(uc - eC) < 0.011;
      if (dOk && cOk) { if (eD) r.d.classList.add("good"); if (eC) r.c.classList.add("good"); }
      else {
        allGood = false;
        if (Math.abs(ud - eC) < 0.011 && Math.abs(uc - eD) < 0.011) { r.d.classList.add("bad"); r.c.classList.add("bad"); msgs.push(`Compte <b>${esc(ua)}</b> : bon montant mais <b>mauvais côté</b> (débit ↔ crédit inversé).`); }
        else { if (!dOk) r.d.classList.add("bad"); if (!cOk) r.c.classList.add("bad"); msgs.push(`Compte <b>${esc(ua)}</b> : bon compte, <b>montant faux</b>.`); }
      }
    });
    const miss = used.filter(u => !u).length;
    if (miss) { allGood = false; msgs.push(`Il manque <b>${miss}</b> compte(s) dans ton écriture.`); }
    if (allGood && user.length) { fb.innerHTML = '<div class="fb ok">✔ Écriture parfaite : tous les comptes, tous les montants, du bon côté.</div>'; ok(); showCorr(); }
    else fb.innerHTML = `<div class="fb ko">✘ À corriger :<ul>${msgs.map(m => "<li>" + m + "</li>").join("")}</ul></div>`;
  };
  actions.appendChild(vb); actions.appendChild(plus);
}

function renderTable(ex, box, actions, fb, ok, showCorr) {
  const wrap = el("div", { class: "tw" });
  const t = el("table", { class: "tblex" });
  t.innerHTML = "<thead><tr>" + ex.head.map(h => `<th>${h}</th>`).join("") + "</tr></thead>";
  const tb = el("tbody"); t.appendChild(tb); wrap.appendChild(t); box.appendChild(wrap);
  const inputs = [];
  ex.rows.forEach(r => {
    const tr = el("tr");
    r.forEach(cell => {
      if (cell && typeof cell === "object" && "a" in cell) {
        const td = el("td", { class: "inp" }); const i = el("input", { class: "in num", inputmode: "decimal" });
        td.appendChild(i); tr.appendChild(td); inputs.push({ i, a: cell.a, tol: cell.tol || 0.011 });
      } else if (typeof cell === "number") tr.appendChild(el("td", { class: "n" }, fmt(cell)));
      else tr.appendChild(el("td", null, cell === undefined || cell === null ? "" : cell));
    });
    tb.appendChild(tr);
  });
  const vb = el("button", { class: "btn primary small" }, "Vérifier");
  vb.onclick = () => {
    let bad = 0, empty = 0;
    inputs.forEach(o => {
      const v = parseNum(o.i.value);
      if (isNaN(v)) { empty++; o.i.className = "in num bad"; return; }
      if (Math.abs(v - o.a) <= o.tol) o.i.className = "in num good"; else { bad++; o.i.className = "in num bad"; }
    });
    if (!bad && !empty) { fb.innerHTML = '<div class="fb ok">✔ Tableau entièrement juste.</div>'; ok(); showCorr(); }
    else fb.innerHTML = `<div class="fb ko">✘ ${bad} case(s) fausse(s)${empty ? ", " + empty + " case(s) vide(s)" : ""}. Les cases en rouge sont à revoir.</div>`;
  };
  actions.appendChild(vb);
}
function tableCorrection(ex) {
  let h = '<div class="tw"><table><thead><tr>' + ex.head.map(x => `<th>${x}</th>`).join("") + "</tr></thead><tbody>";
  ex.rows.forEach(r => { h += "<tr>" + r.map(c => (c && typeof c === "object" && "a" in c) ? `<td class="n"><b>${fmt(c.a)}</b></td>` : typeof c === "number" ? `<td class="n">${fmt(c)}</td>` : `<td>${c === undefined || c === null ? "" : c}</td>`).join("") + "</tr>"; });
  return h + "</tbody></table></div>";
}

/* ---------- pages ---------- */
function refreshProgress() {
  let n = 0, k = 0; allSkills().forEach(s => { const st = skillStat(s); n += st.n; k += st.k; });
  const g = document.getElementById("gbar"); if (g) g.style.width = (n ? 100 * k / n : 0) + "%";
  const gt = document.getElementById("gtxt"); if (gt) gt.textContent = `${k}/${n}`;
  document.querySelectorAll("nav a[data-id]").forEach(a => {
    const s = allSkills().find(x => x.id === a.dataset.id); if (!s) return;
    const st = skillStat(s); a.querySelector(".st").textContent = st.k === st.n ? "✓" : `${st.k}/${st.n}`;
  });
}
function renderNav() {
  const nav = document.getElementById("nav"); nav.innerHTML = "";
  const home = el("a", { href: "#" }, '<span class="id">⌂</span><span>Accueil & mode d\'emploi</span><span class="st"></span>'); nav.appendChild(home);
  BLOCS.forEach(b => {
    nav.appendChild(el("h3", null, `${b.id} · ${b.title}`));
    b.skills.forEach(s => nav.appendChild(el("a", { href: "#" + s.id, "data-id": s.id }, `<span class="id">${s.id}</span><span>${s.title}</span><span class="st"></span>`)));
  });
  refreshProgress();
}
function setActive(id) { document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", (a.dataset.id || "") === (id || "") && (id || a.getAttribute("href") === "#"))); }

function renderHome() {
  const m = document.getElementById("main"); m.innerHTML = "";
  m.appendChild(el("div", { class: "card" }, `
  <h2>Objectif : 20/20 au DS2 d'introduction à la gestion</h2>
  <p>Le DS dure <b>1 h</b>, sans document, calculatrice collège. Le <b>plan comptable est fourni en annexe</b> (bouton 📒 en haut). Barème des deux dernières années :</p>
  <ul>
    <li><b>3 pts de cours</b> : définir l'amortissement, la régularisation des stocks (2024) ; les 3 conditions d'imposition à la TVA, deux opérations non imposées (2025).</li>
    <li><b>17 pts d'exercices</b> : des <b>écritures au journal avec TVA</b> (0,5 pt par compte + 0,5 pt par montant), des <b>bilans / comptes de résultat après une écriture</b>, un <b>amortissement</b> (calcul + écriture + bilan), une <b>cession d'immobilisation</b>, et un exercice de <b>lecture</b> (balance → bilan + CR, ou grand livre → TVA due).</li>
  </ul>
  <div class="box ok"><b>Mode d'emploi (à suivre à la lettre)</b>
  <ol class="steps">
    <li>Prends les compétences <b>dans l'ordre</b> (A1 → F3). Chacune s'appuie sur les précédentes.</li>
    <li>Lis le cours de la compétence, <b>en entier</b>, avec une feuille à côté.</li>
    <li>Fais les exercices <b>sans regarder la correction</b>. Le bouton « Vérifier » te dit exactement ce qui cloche (compte inattendu, montant faux, mauvais côté).</li>
    <li>Une compétence est acquise quand tous ses exercices sont ✓. Utilise ensuite <b>🎲 Exercice aléatoire</b> jusqu'à en réussir 3 d'affilée sans erreur.</li>
    <li>La veille du DS : F2 (flash cours) + F3 (DS blanc chronométré).</li>
  </ol></div>
  <p class="small">Ta progression est enregistrée dans ce navigateur. <a href="#" id="resetLink">Tout remettre à zéro</a></p>`));
  const g = el("div", { class: "grid" });
  BLOCS.forEach(b => {
    let n = 0, k = 0; b.skills.forEach(s => { const st = skillStat(s); n += st.n; k += st.k; });
    g.appendChild(el("div", { class: "bloc-card" }, `<h3>${b.id} · ${b.title}</h3><p class="small">${b.desc || ""}</p><div class="pbar" style="max-width:none"><div style="width:${n ? 100 * k / n : 0}%"></div></div><p class="small">${k}/${n} exercices · <a href="#${b.skills[0].id}">commencer → ${b.skills[0].id}</a></p>`));
  });
  m.appendChild(g);
  document.getElementById("resetLink").onclick = (e) => {
    e.preventDefault();
    if (!confirm("Effacer toute ta progression ?")) return;
    allSkills().forEach(s => s.ex.forEach((_, i) => { STORE.del("s:" + s.id + ":" + i); delete solvedMem[s.id + ":" + i]; }));
    renderHome(); refreshProgress();
  };
  setActive(""); window.scrollTo(0, 0);
}

let timerInt = null;
function renderSkill(id) {
  const list = allSkills(); const i = list.findIndex(s => s.id === id);
  if (i < 0) return renderHome();
  const s = list[i]; const m = document.getElementById("main"); m.innerHTML = "";
  if (timerInt) { clearInterval(timerInt); timerInt = null; }
  const bloc = BLOCS.find(b => b.skills.includes(s));
  m.appendChild(el("div", null, `<span class="tag">${bloc.id} · ${bloc.title}</span>${s.tombe ? `<span class="tag" style="background:var(--warn-soft);color:var(--warn)">🎯 ${s.tombe}</span>` : ""}<h1 class="skill-title">${s.id} — ${s.title}</h1>`));
  if (s.timer) {
    const tw = el("div", { class: "card" }, `<b>⏱ Conditions réelles :</b> ${s.timer} minutes. <span class="timer" id="tmr">${s.timer}:00</span> `);
    const tb = el("button", { class: "btn small primary" }, "Démarrer le chrono");
    tb.onclick = () => {
      let left = s.timer * 60; tb.remove();
      timerInt = setInterval(() => { left--; const t = document.getElementById("tmr"); if (!t) { clearInterval(timerInt); return; } t.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`; if (left <= 0) { clearInterval(timerInt); t.textContent = "Temps écoulé ! Pose le stylo."; } }, 1000);
    };
    tw.appendChild(tb); m.appendChild(tw);
  }
  const st = skillStat(s);
  const det = el("details", { class: "card cours" });
  if (st.k < st.n || !s.ex.length) det.open = true;
  det.innerHTML = `<summary>📖 Cours ${st.k === st.n && st.n ? "(acquis — clique pour relire)" : ""}</summary>${s.cours}`;
  m.appendChild(det);
  const exCard = el("div", { class: "card" }, `<h2>✍️ Exercices (${s.ex.length}) — du plus facile au plus dur</h2>`);
  s.ex.forEach((ex, k) => exCard.appendChild(renderExercise(ex, s.id + ":" + k, `Exercice ${k + 1}`)));
  m.appendChild(exCard);
  if (s.gen && s.gen.length) {
    const gc = el("div", { class: "card" }, `<h2>🎲 Entraînement illimité</h2><p class="small">Des exercices générés au hasard sur cette compétence. Objectif : 3 réussis d'affilée.</p>`);
    const zone = el("div"); let cnt = 0;
    const gb = el("button", { class: "btn primary" }, "🎲 Exercice aléatoire");
    gb.onclick = () => { cnt++; const ex = pick(s.gen)(); const node = renderExercise(ex, null, `Aléatoire n°${cnt}`); zone.prepend(node); node.scrollIntoView({ behavior: "smooth", block: "start" }); };
    gc.appendChild(gb); gc.appendChild(zone); m.appendChild(gc);
  }
  const nb = el("div", { class: "navbtns" });
  nb.appendChild(i > 0 ? el("a", { class: "btn", href: "#" + list[i - 1].id }, "← " + list[i - 1].id + " " + list[i - 1].title) : el("span"));
  nb.appendChild(i < list.length - 1 ? el("a", { class: "btn primary", href: "#" + list[i + 1].id }, list[i + 1].id + " " + list[i + 1].title + " →") : el("span"));
  m.appendChild(nb);
  setActive(id); window.scrollTo(0, 0);
  document.getElementById("nav").classList.remove("open");
}

function route() { const h = decodeURIComponent(location.hash.slice(1)); if (h) renderSkill(h); else renderHome(); }

function renderPlan(filter) {
  filter = (filter || "").toLowerCase();
  const rows = Object.keys(ACC).filter(k => !filter || k.startsWith(filter) || ACC[k].toLowerCase().includes(filter)).sort();
  document.getElementById("planList").innerHTML = "<table>" + rows.map(k => `<tr><td>${k}</td><td>${ACC[k]}</td></tr>`).join("") + "</table>";
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav(); route();
  window.addEventListener("hashchange", route);
  document.getElementById("menuBtn").onclick = () => document.getElementById("nav").classList.toggle("open");
  const pm = document.getElementById("planModal");
  document.getElementById("planBtn").onclick = () => { pm.classList.add("open"); renderPlan(""); document.getElementById("planSearch").value = ""; document.getElementById("planSearch").focus(); };
  document.getElementById("planClose").onclick = () => pm.classList.remove("open");
  pm.addEventListener("click", e => { if (e.target === pm) pm.classList.remove("open"); });
  document.getElementById("planSearch").addEventListener("input", e => renderPlan(e.target.value));
  const saved = STORE.get("theme"); if (saved) document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("themeBtn").onclick = () => {
    const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const nx = cur === "dark" ? "light" : "dark"; document.documentElement.setAttribute("data-theme", nx); STORE.set("theme", nx);
  };
});
