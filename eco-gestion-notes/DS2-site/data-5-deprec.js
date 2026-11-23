/* Bloc E — Les dépréciations (chapitre 4 : opérations d'inventaire, V) */
(function () {
  function depTable(vo, dep, va) {
    const vnc = vo - dep; const dot = va < vnc ? vnc - va : 0; const rep = va > vnc ? Math.min(va - vnc, dep) : 0;
    return { vnc, dot, rep };
  }
  const ACTIFS = [
    ["un terrain", "681", "291", "781"], ["des titres de participation", "686", "296", "786"], ["des VMP", "686", "590", "786"], ["un stock de marchandises", "681", "397", "781"], ["un fonds commercial", "681", "290", "781"]
  ];

  BLOCS.push({
    id: "E", title: "Les dépréciations", desc: "Test de dépréciation, dotation / reprise, comptes, créances douteuses et irrécouvrables, stocks.",
    skills: [
      /* ---------------- E1 ---------------- */
      {
        id: "E1", title: "Dépréciation : définition et test", tombe: "cours",
        cours: `
<div class="box ok"><b>Définition</b>Une dépréciation constate une <b>baisse de valeur probable et réversible</b> d'un actif (la perte n'est pas encore certaine : tant que l'actif n'est pas vendu, ce n'est qu'un risque). Elle applique le <b>principe de prudence</b> : on tient compte d'un risque dès qu'il apparaît.</div>
${TB(["", "Amortissement", "Dépréciation"], [["Perte", "<b>irréversible</b>", "<b>réversible</b> (probable)"], ["Concerne", "les immobilisations à durée d'utilisation limitée", "presque tous les actifs : terrains, titres, stocks, créances, VMP (et même les immobilisations amortissables)"], ["Peut être annulée ?", "non", "oui, par une <b>reprise</b>"]])}
<h3>Le test de dépréciation (à chaque inventaire)</h3>
<ul><li><b>Valeur actuelle &lt; VNC</b> → on déprécie de la différence.</li><li><b>Valeur actuelle ≥ VNC</b> → pas de dépréciation (et une reprise s'il y en avait une).</li></ul>
<p><b>Valeur actuelle</b> = la plus élevée entre la <b>valeur vénale</b> (prix de revente) et la <b>valeur d'usage</b>. <b>VNC</b> = coût d'acquisition − amortissements et dépréciations (= colonne « net »).</p>`,
        ex: [
          Q("La dépréciation constate une perte de valeur…", ["irréversible", "probable et réversible", "certaine"], 1, ""),
          Q("Un terrain acheté 100 000 vaut 92 000 au 31/12. Que faire ?", ["Rien, un terrain ne s'amortit pas", "Une dépréciation de 8 000", "Un amortissement de 8 000"], 1, "Non amortissable, mais dépréciable."),
          Q("Un terrain acheté 100 000 vaut 110 000 au 31/12 (aucune dépréciation antérieure). Que faire ?", ["Une reprise de 10 000", "Rien (prudence : on ne constate pas les plus-values latentes)", "Augmenter le brut"], 1, ""),
          M("Coche les actifs qui peuvent être dépréciés.", ["Terrain", "Stock", "Créance client", "VMP", "Machine-outil"], [0, 1, 2, 3, 4], "Tous ! La dépréciation s'applique à presque tout l'actif."),
          Q("Valeur actuelle = …", ["la plus faible entre valeur vénale et valeur d'usage", "la plus élevée entre valeur vénale et valeur d'usage", "le coût d'acquisition"], 1, "")
        ]
      },
      /* ---------------- E2 ---------------- */
      {
        id: "E2", title: "Le tableau dotation / reprise", tombe: "cours",
        cours: `
<h3>Le tableau (à refaire à chaque inventaire)</h3>
${TB(["(1) Valeur d'origine", "(2) Dépréciation existante", "(3) VNC = 1 − 2", "(4) Valeur actuelle", "Dotation = 3 − 4", "Reprise = 4 − 3"], [["…", "…", "…", "…", "si 4 &lt; 3", "si 4 &gt; 3, <b>plafonnée à (2)</b>"]])}
<p><b>Exemple du cours (terrain acheté 100 000)</b> :</p>
${TB(["Date", "VO", "Dép. existante", "VNC", "Valeur actuelle", "Dotation", "Reprise"], [["31/12/N", 100000, 0, 100000, 92000, 8000, ""], ["31/12/N+1", 100000, 8000, 92000, 90000, 2000, ""], ["31/12/N+2", 100000, 10000, 90000, 93000, "", 3000], ["31/12/N+3", 100000, 7000, 93000, 105000, "", "7 000 (plafond)"]])}
<div class="box trap"><b>Piège du plafond</b>En N+3, le terrain vaut 105 000 : 105 000 − 93 000 = 12 000, mais on ne peut reprendre que la dépréciation <b>existante</b>, soit <b>7 000</b>. On ne dépasse jamais la valeur d'origine.</div>
<div class="box">Si l'actif est <b>vendu ou a disparu</b>, la dépréciation devient sans objet → <b>reprise totale</b>.</div>`,
        ex: [
          N("Terrain : VO 100 000 ; aucune dépréciation ; valeur actuelle 92 000. Dotation ?", 8000, "100 000 − 92 000."),
          N("Terrain : VO 100 000 ; dépréciation existante 8 000 ; valeur actuelle 90 000. Dotation complémentaire ?", 2000, "VNC 92 000 − 90 000."),
          N("Terrain : VO 100 000 ; dépréciation existante 10 000 ; valeur actuelle 93 000. Reprise ?", 3000, "93 000 − 90 000."),
          N("Terrain : VO 100 000 ; dépréciation existante 7 000 ; valeur actuelle 105 000. Reprise ?", 7000, "Plafonnée à la dépréciation existante."),
          T("Complète le tableau des VMP (1 000 actions achetées 10 € ; cours : 9 € fin N, 7 € fin N+1, 8 € fin N+2, 11 € fin N+3). Mets 0 quand il n'y a rien.", ["Date", "VO", "Dép. existante", "VNC", "Va", "Dotation", "Reprise"], [
            ["31/12/N", 10000, 0, 10000, 9000, { a: 1000 }, { a: 0 }], ["31/12/N+1", 10000, 1000, { a: 9000 }, 7000, { a: 2000 }, { a: 0 }], ["31/12/N+2", 10000, 3000, { a: 7000 }, 8000, { a: 0 }, { a: 1000 }], ["31/12/N+3", 10000, 2000, { a: 8000 }, 11000, { a: 0 }, { a: 2000 }]
          ], "Exemple du cours. En N+3, reprise plafonnée à 2 000.")
        ],
        gen: [() => { const vo = rnd(10, 100) * 1000; const dep = pick([0, rnd(1, 9) * 500]); const va = rnd(Math.round(vo * 0.6 / 500), Math.round(vo * 1.15 / 500)) * 500; const r = depTable(vo, dep, va); const w = r.dot ? "dotation" : "reprise"; return N(`Actif : valeur d'origine ${fmt(vo)} ; dépréciation existante ${fmt(dep)} ; valeur actuelle ${fmt(va)}. Montant de la ${w} (0 s'il n'y a rien) ?`, r.dot || r.rep, `VNC = ${fmt(r.vnc)}. ${r.dot ? "Va < VNC → dotation " + fmt(r.dot) : "Va ≥ VNC → reprise = min(" + fmt(va - r.vnc) + " ; " + fmt(dep) + ") = " + fmt(r.rep)}.`, {}); }]
      },
      /* ---------------- E3 ---------------- */
      {
        id: "E3", title: "Les écritures de dépréciation (les bons comptes)", tombe: "cours",
        cours: `
<h3>Dotation (la valeur baisse)</h3>
${J([["681 / 686", 0, 0, "DADP – exploitation (681) ou financière (686, pour les titres)"], ["29.. / 39.. / 491 / 590", 0, 0, "Dépréciation de l'actif concerné"]])}
<h3>Reprise (la valeur remonte, ou l'actif a disparu)</h3>
${J([["29.. / 39.. / 491 / 590", 0, 0, "Dépréciation de l'actif concerné"], ["781 / 786", 0, 0, "RADP – exploitation (781) ou financière (786)"]])}
${TB(["Actif", "Compte de dépréciation", "Dotation", "Reprise"], [["Immobilisations incorporelles / corporelles", "290 / 291", "681", "781"], ["Titres de participation, autres titres immobilisés", "296 / 297", "<b>686</b>", "<b>786</b>"], ["Stocks : MP / produits finis / marchandises", "391 / 395 / 397", "681", "781"], ["Créances clients", "491", "681", "781"], ["VMP", "590", "<b>686</b>", "<b>786</b>"]])}
<div class="box"><b>Effet</b>Dotation : A&D + (actif net −), charge + (résultat −). Reprise : A&D − (actif net +), produit + (résultat +).</div>
<div class="box trap"><b>Piège</b>Titres financiers (VMP, participations) → DADP / RADP <b>financières</b> (686 / 786). Tout le reste → exploitation (681 / 781).</div>`,
        ex: [
          E("31/12/N : terrain acheté 100 000, vaut 92 000. Passe la dépréciation.", [["681", 8000, 0], ["291", 0, 8000]], ""),
          E("31/12/N+2 : la dépréciation du terrain passe de 10 000 à 7 000 (valeur actuelle 93 000). Passe l'écriture.", [["291", 3000, 0], ["781", 0, 3000]], "Reprise de 3 000."),
          E("31/12/N : 1 000 VMP achetées 10 € cotent 9 €.", [["686", 1000, 0], ["590", 0, 1000]], "Titres → DADP financière."),
          E("31/12/N+3 : les VMP (dépréciation existante 2 000) cotent 11 € (achat 10 €). Passe l'écriture.", [["590", 2000, 0], ["786", 0, 2000]], "Reprise totale (plafond)."),
          Q("Dépréciation de titres de participation : compte de dotation ?", ["681", "686", "687", "781"], 1, "")
        ],
        gen: [() => { const [nom, dc, dep, rc] = pick(ACTIFS); const m = rnd(1, 40) * 500; const up = Math.random() < .5; return E(`Au 31/12, ${up ? "reprise" : "dotation"} de ${fmt(m)} € sur la dépréciation concernant ${nom}.`, up ? [[dep, m, 0], [rc, 0, m]] : [[dc, m, 0], [dep, 0, m]], `${up ? "Reprise : " + dep + " / " + rc : "Dotation : " + dc + " / " + dep}.`); }]
      },
      /* ---------------- E4 ---------------- */
      {
        id: "E4", title: "La créance douteuse", tombe: "cours",
        cours: `
<p>Quand un client a des difficultés financières, sa créance devient <b>douteuse</b>. Deux écritures au 31/12 :</p>
<h4>a. Isoler la créance (au TTC)</h4>
${J([["416", 0, 0, "Clients douteux — <b>TTC</b>"], ["411", 0, 0, "Clients — <b>TTC</b>"]])}
<h4>b. Déprécier (sur le HT !)</h4>
<p>Si le client ne paie jamais, l'État <b>rendra la TVA</b> collectée. La perte possible se limite donc au <b>HT</b>.</p>
<div class="box ok"><b>Dépréciation = HT × % de perte</b> = HT − HT × % recouvrable</div>
<p><b>Exemple CYERT / MARCH</b> — créance 2 400 TTC, recouvrement espéré 50 % : HT = 2 000 ; dépréciation = 2 000 × 50 % = <b>1 000</b>.</p>
${J([["416", 2400, 0], ["411", 0, 2400], ["681", 1000, 0], ["491", 0, 1000]])}
<p>L'année suivante, le client ne paiera que 40 % : valeur actuelle = 2 000 × 40 % = 800 ; VNC = 2 000 − 1 000 = 1 000 → dotation complémentaire <b>200</b>.</p>
<div class="box trap"><b>Piège</b>Calculer la dépréciation sur le TTC (2 400 × 50 % = 1 200) : faux. Mais le transfert 411 → 416 se fait bien au <b>TTC</b>.</div>`,
        ex: [
          N("Créance 6 000 € TTC ; on espère récupérer 70 %. Dépréciation ?", 1500, "HT 5 000 × 30 % = 1 500."),
          E("31/12/N : le client MARCH doit 2 400 € TTC et ne paiera que 50 %. Passe les <b>deux</b> écritures (4 lignes).", [["416", 2400, 0], ["411", 0, 2400], ["681", 1000, 0], ["491", 0, 1000]], "Transfert au TTC ; dépréciation sur 2 000 HT × 50 %."),
          N("31/12/N+1 : MARCH ne paiera que 40 %. Dépréciation existante 1 000 (HT 2 000). Dotation complémentaire ?", 200, "Va 800 ; VNC 1 000 → 200."),
          E("Client DURAND : créance 3 600 € TTC, risque de perte estimé à 60 %. Passe les deux écritures du 31/12.", [["416", 3600, 0], ["411", 0, 3600], ["681", 1800, 0], ["491", 0, 1800]], "HT 3 000 × 60 % = 1 800."),
          Q("La dépréciation d'une créance se calcule sur…", ["le TTC", "le HT"], 1, "La TVA serait récupérée.")
        ],
        gen: [() => { const ht = rnd(5, 80) * 100; const ttc = ht * 1.2; const p = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.75]); const d = r2(ht * (1 - p)); return E(`Au 31/12, la créance d'un client (${fmt(ttc)} € TTC) devient douteuse ; on espère en récupérer ${fmt(p * 100)} %. Passe les deux écritures.`, [["416", ttc, 0], ["411", 0, ttc], ["681", d, 0], ["491", 0, d]], `HT = ${fmt(ht)} ; dépréciation = ${fmt(ht)} × ${fmt(r2(1 - p) * 100)} % = ${fmt(d)}.`); }]
      },
      /* ---------------- E5 ---------------- */
      {
        id: "E5", title: "La créance irrécouvrable", tombe: "cours",
        cours: `
<p>Quand il est <b>certain</b> que le client ne paiera pas (liquidation) :</p>
<h4>1. Constater la perte définitive</h4>
${J([["654", 0, 0, "Pertes sur créances irrécouvrables — <b>HT</b>"], ["4457", 0, 0, "TVA collectée (l'État nous la rend) — <b>TVA</b>"], ["416", 0, 0, "Clients douteux — <b>TTC</b> restant dû"]])}
<h4>2. Reprendre toute la dépréciation (devenue sans objet)</h4>
${J([["491", 0, 0, "Dépréciations des créances clients — <b>total existant</b>"], ["781", 0, 0, "RADP – exploitation"]])}
<p><b>Suite MARCH (N+2)</b> — le client paie 900 € puis est liquidé ; reste 2 400 − 900 = 1 500 TTC perdus (1 250 HT + 250 TVA) ; dépréciation existante 1 200.</p>
${J(["16/06 — encaissement partiel", ["512", 900, 0], ["416", 0, 900], "31/12 — perte définitive", ["654", 1250, 0], ["4457", 250, 0], ["416", 0, 1500], "31/12 — reprise totale", ["491", 1200, 0], ["781", 0, 1200]])}
<p>Impact N+2 : − 1 250 + 1 200 = − 50. Total sur 3 ans : − 1 000 − 200 − 50 = − 1 250 = perte HT réelle, mais supportée surtout en N (<b>prudence</b>).</p>`,
        ex: [
          E("16/06/N+2 : le client douteux MARCH verse <b>900 €</b> par virement.", [["512", 900, 0], ["416", 0, 900]], "Encaissement : pas de TVA."),
          E("31/12/N+2 : le solde de la créance de MARCH, <b>1 500 € TTC</b>, est définitivement perdu. Constate la perte.", [["654", 1250, 0], ["4457", 250, 0], ["416", 0, 1500]], "HT 1 250, TVA 250 récupérée."),
          E("31/12/N+2 : reprise de la dépréciation de MARCH devenue sans objet (<b>1 200 €</b>).", [["491", 1200, 0], ["781", 0, 1200]], ""),
          N("Quel est l'impact sur le résultat N+2 de ces écritures (perte 1 250, reprise 1 200) ? (signe −)", -50, "− 1 250 + 1 200 = − 50."),
          E("Client LEROY (créance douteuse de 4 800 € TTC, dépréciée de 2 000) est liquidé : rien ne sera payé. Passe les deux écritures du 31/12.", [["654", 4000, 0], ["4457", 800, 0], ["416", 0, 4800], ["491", 2000, 0], ["781", 0, 2000]], "Perte HT 4 000 ; reprise totale 2 000.")
        ]
      },
      /* ---------------- E6 ---------------- */
      {
        id: "E6", title: "La dépréciation des stocks", tombe: "cours",
        cours: `
<p>Le stock de fin N a été vendu ou consommé en N+1 : ce n'est <b>plus le même stock</b>. On ne fait donc <b>pas</b> un simple ajustement, mais :</p>
<ol class="steps"><li>une <b>reprise totale</b> de l'ancienne dépréciation ;</li><li>une <b>nouvelle dotation</b> sur le nouveau stock.</li></ol>
<p><b>Exemple</b> — marchandises : dépréciation 2 000 fin N ; dépréciation nécessaire 5 000 fin N+1.</p>
${J([["397", 2000, 0], ["781", 0, 2000], ["681", 5000, 0], ["397", 0, 5000]])}
<div class="box trap"><b>Piège</b>Passer seulement une dotation de 3 000 : 0 point. Il faut les deux écritures.</div>`,
        ex: [
          E("Stock de marchandises : dépréciation de 2 000 fin N ; dépréciation nécessaire de 5 000 fin N+1. Passe les écritures du 31/12/N+1 (4 lignes).", [["397", 2000, 0], ["781", 0, 2000], ["681", 5000, 0], ["397", 0, 5000]], "Reprise totale puis nouvelle dotation."),
          E("Stock de matières premières : dépréciation de 3 000 fin N ; dépréciation nécessaire de 1 000 fin N+1. Passe les écritures du 31/12/N+1.", [["391", 3000, 0], ["781", 0, 3000], ["681", 1000, 0], ["391", 0, 1000]], "Même logique, compte 391."),
          Q("Pourquoi ne fait-on pas un simple ajustement pour les stocks ?", ["Par simplicité", "Parce que le stock déprécié en N a disparu (vendu) : ce n'est plus le même stock", "C'est interdit par la TVA"], 1, "")
        ]
      }
    ]
  });
})();
