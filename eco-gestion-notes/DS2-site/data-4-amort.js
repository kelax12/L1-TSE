/* Bloc D — Amortissements et cessions d'immobilisations (chapitre 4 : opérations d'inventaire, III et IV) */
(function () {
  const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  function joursRestants(j, m) { return (30 - j + 1) + (12 - m) * 30; } // m : 1..12, mois de 30 j
  function planLineaire(base, duree, j, m) {
    const a = base / duree; const jN = joursRestants(j, m); const rows = []; let cum = 0;
    const n = jN === 360 ? duree : duree + 1;
    for (let k = 0; k < n; k++) {
      let an = a; if (jN !== 360 && k === 0) an = r2(a * jN / 360); if (jN !== 360 && k === n - 1) an = r2(base - cum);
      cum = r2(cum + an); rows.push([k === 0 ? "N" : "N+" + k, base, { a: an }, { a: cum }, { a: r2(base - cum) }]);
    }
    return rows;
  }
  const IMMOS = [["une machine-outil", "215", "2815"], ["un camion", "2182", "28182"], ["du matériel informatique", "2183", "28183"], ["un brevet", "205", "2805"], ["du mobilier", "2184", "28184"]];

  BLOCS.push({
    id: "D", title: "Amortissements et cessions", desc: "Définition, plan d'amortissement linéaire et prorata temporis, unités d'œuvre, écriture de dotation, bilan, cession.",
    skills: [
      /* ---------------- D1 ---------------- */
      {
        id: "D1", title: "Définir l'amortissement ; amortissable ou non ?", tombe: "2024 : « définir la notion d'amortissement »",
        cours: `
<div class="box ok"><b>Définition (à réciter)</b>L'amortissement est la <b>répartition du coût d'une immobilisation sur sa durée d'utilisation prévue</b>. Il traduit sa <b>perte de valeur inéluctable et irréversible</b> due à l'<b>usure physique</b> (moteur d'un camion), à l'<b>obsolescence</b> (ordinateur) ou à un <b>droit limité dans le temps</b> (brevet, 20 ans). C'est une <b>charge</b> (compte 681), calculée sur le montant <b>HT</b>. Il commence à la <b>date de mise en service</b>.</div>
<h3>Amortissable ou pas ?</h3>
${TB(["Bien", "Amortissable ?", "Pourquoi"], [["Machine-outil, bâtiment, véhicule", "Oui", "usure"], ["Ordinateur", "Oui", "usure + surtout obsolescence"], ["Brevet", "Oui", "droit limité dans le temps (20 ans)"], ["<b>Terrain</b>", "<b>Non</b>", "durée d'utilisation illimitée"], ["<b>Titres de participation</b>", "<b>Non</b>", "pas d'usure"], ["Fournitures, marchandises", "Non (ce sont des charges)", "consommés dans l'exercice"]])}
<h3>Où se place l'amortissement ?</h3>
<p>Dans le grand processus comptable, l'amortissement est une <b>opération d'inventaire</b> : passée <b>une fois par an, au 31/12</b>, dans le livre d'inventaire. L'inventaire sert à respecter le <b>principe de prudence</b> et de <b>séparation des exercices</b> : variation de stocks, amortissements, dépréciations, provisions, régularisations.</p>
<div class="box trap"><b>Amortissement ≠ dépréciation</b>Amortissement = perte <b>irréversible</b>, seulement sur certaines immobilisations. Dépréciation = perte <b>probable, réversible</b>, sur presque tous les actifs (bloc E).</div>`,
        ex: [
          F("Définir la notion d'amortissement. <i>(Annale 2024 — 0,5 par remarque pertinente)</i>", "Répartition du <b>coût d'une immobilisation</b> sur sa <b>durée d'utilisation</b> prévue ; constate une <b>perte de valeur irréversible</b> (usure, obsolescence, droit limité dans le temps) ; c'est une <b>charge</b> (681 DADP), calculée sur le <b>HT</b>, enregistrée à l'<b>inventaire</b> (31/12) ; il commence à la <b>mise en service</b> ; il fait baisser la valeur nette de l'actif (colonne A&D, compte 28)."),
          M("Coche les biens <b>amortissables</b>.", ["Un terrain", "Une machine-outil", "Un brevet", "Des titres de participation", "Un ordinateur", "Un bâtiment"], [1, 2, 4, 5], "Terrain et titres de participation ne s'usent pas."),
          Q("L'amortissement est…", ["une perte de valeur réversible", "une perte de valeur irréversible", "une dette", "un produit"], 1, ""),
          Q("L'amortissement se calcule sur…", ["le TTC", "le HT", "le prix de revente"], 1, "La TVA a été récupérée, elle ne fait pas partie du coût."),
          Q("L'amortissement commence…", ["à la date de commande", "à la date de mise en service", "toujours au 1er janvier", "au paiement"], 1, "")
        ]
      },
      /* ---------------- D2 ---------------- */
      {
        id: "D2", title: "Plan d'amortissement linéaire (année pleine)", tombe: "base de tous les calculs",
        cours: `
<div class="box ok"><b>Formules</b>Annuité = <b>base amortissable ÷ durée</b> (= base × taux, avec taux = 1 / durée)<br>Amortissements cumulés = somme des annuités<br><b>VNC</b> (valeur nette comptable) = base − amortissements cumulés</div>
<p>La <b>base amortissable</b> = coût d'acquisition <b>HT</b>.</p>
<p><b>Exemple</b> — machine 30 000 € HT, 3 ans, mise en service le 1er janvier N :</p>
${TB(["Année", "Base", "Annuité", "Cumul", "VNC"], [["N", 30000, 10000, 10000, 20000], ["N+1", 30000, 10000, 20000, 10000], ["N+2", 30000, 10000, 30000, 0]])}
<p>Nombre de lignes = <b>durée</b> (quand on commence un 1er janvier). Taux = 1/3 = 33,33 %. À la fin, la VNC vaut <b>0</b>.</p>
<div class="box"><b>Contrôle</b>Cumul + VNC = base, à chaque ligne.</div>`,
        ex: [
          N("Machine 30 000 € HT amortie sur 3 ans. Annuité ?", 10000, "30 000 ÷ 3."),
          N("Matériel 12 000 € HT, 5 ans. Taux d'amortissement (en %) ?", 20, "1 ÷ 5 = 20 %.", { u: "%" }),
          N("Matériel 12 000 € HT, 5 ans, acquis le 1/1/N. VNC au 31/12/N+1 ?", 7200, "Annuité 2 400 ; cumul fin N+1 = 4 800 ; VNC = 7 200."),
          T("Complète le plan : ordinateur 12 000 € HT, 5 ans, mis en service le 1/1/N.", ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(12000, 5, 1, 1), "Annuité 2 400 chaque année."),
          T("Complète le plan : véhicule 20 000 € HT, 4 ans, mis en service le 1/1/N.", ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(20000, 4, 1, 1), "Annuité 5 000.")
        ],
        gen: [() => { const d = pick([3, 4, 5, 8, 10]); const b = rnd(2, 40) * d * 500; return T(`Plan d'amortissement : bien de ${fmt(b)} € HT, ${d} ans, mis en service le 1/1/N.`, ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(b, d, 1, 1), `Annuité = ${fmt(b)} ÷ ${d} = ${fmt(b / d)}.`); }]
      },
      /* ---------------- D3 ---------------- */
      {
        id: "D3", title: "Le prorata temporis", tombe: "2025 : brevet acquis le 1er décembre (0,5 pt)",
        cours: `
<p>Quand le bien est mis en service <b>en cours d'année</b>, la première annuité (et la dernière) est calculée <b>au prorata du temps d'utilisation</b>.</p>
<div class="box ok"><b>Règle de calcul</b>On compte des <b>mois de 30 jours</b> et une <b>année de 360 jours</b>.<br>1ʳᵉ annuité = annuité pleine × (nombre de jours d'utilisation en N ÷ 360) = annuité × (mois ÷ 12).</div>
<h3>Compter les mois / jours</h3>
<ul><li>Mise en service le <b>1/04</b> → avril à décembre = <b>9 mois</b> = 270 jours.</li>
<li>Le <b>1/12</b> → <b>1 mois</b>.</li>
<li>Le <b>16/09</b> → 15 jours en septembre + 3 mois = 15 + 90 = <b>105 jours</b>.</li></ul>
<p><b>Exemple du cours</b> — machine 30 000 € HT, 3 ans, mise en service le 1/04/N. Annuité pleine 10 000.</p>
${TB(["Année", "Base", "Annuité", "Cumul", "VNC"], [["N", 30000, "7 500 (10 000 × 9/12)", 7500, 22500], ["N+1", 30000, 10000, 17500, 12500], ["N+2", 30000, 10000, 27500, 2500], ["N+3", 30000, "2 500 (10 000 × 3/12)", 30000, 0]])}
<div class="box">Avec un prorata, le tableau a <b>durée + 1 lignes</b> : la dernière annuité complète ce qui manque (ici 3 mois).</div>
<p><b>Annale 2025</b> — brevet 180 000 € HT, durée restante 15 ans, acquis le 1er décembre N : 180 000 ÷ 15 × 1/12 = <b>1 000</b>.</p>
<div class="box trap"><b>Piège</b>Oublier le prorata et mettre l'annuité pleine (12 000 pour le brevet) : 0 point.</div>`,
        ex: [
          N("Brevet 180 000 € HT, 15 ans, acquis le 1er décembre N. Dotation de N ? <i>(Annale 2025)</i>", 1000, "180 000 ÷ 15 = 12 000 par an ; × 1/12 = 1 000."),
          N("Machine 30 000 € HT, 3 ans, mise en service le 1/04/N. Dotation de N ?", 7500, "10 000 × 9/12."),
          N("Combien de jours d'utilisation en N pour une mise en service le 16/09/N ?", 105, "15 jours (16 au 30) + 3 mois × 30.", { u: "jours" }),
          N("Matériel 36 000 € HT, 5 ans, mis en service le 16/09/N. Dotation de N ?", 2100, "7 200 × 105/360 = 2 100."),
          T("Complète le plan : machine 24 000 € HT, 4 ans, mise en service le 1/07/N.", ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(24000, 4, 1, 7), "Annuité pleine 6 000 ; N : 6 mois → 3 000 ; dernière année : 3 000."),
          T("Complète le plan : machine 30 000 € HT, 3 ans, mise en service le 1/04/N.", ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(30000, 3, 1, 4), "7 500 ; 10 000 ; 10 000 ; 2 500.")
        ],
        gen: [() => { const d = pick([3, 4, 5, 10]); const b = rnd(2, 40) * d * 1200; const m = rnd(2, 12); const j = pick([1, 1, 1, 16]); const jr = joursRestants(j, m); const an = r2(b / d * jr / 360); return N(`Bien de ${fmt(b)} € HT amorti sur ${d} ans, mis en service le ${j} ${MOIS[m - 1]} N. Dotation de l'exercice N ?`, an, `Annuité pleine ${fmt(b / d)} ; jours en N = ${jr} ; ${fmt(b / d)} × ${jr}/360 = ${fmt(an)}.`); },
        () => { const d = pick([3, 4, 5]); const b = rnd(2, 30) * d * 1200; const m = rnd(2, 12); return T(`Plan : bien de ${fmt(b)} € HT, ${d} ans, mis en service le 1er ${MOIS[m - 1]} N.`, ["Année", "Base", "Annuité", "Cumul", "VNC"], planLineaire(b, d, 1, m), "Prorata la 1ʳᵉ année, complément la dernière."); }]
      },
      /* ---------------- D4 ---------------- */
      {
        id: "D4", title: "L'amortissement en unités d'œuvre", tombe: "cours",
        cours: `
<p>Quand l'usure dépend de l'utilisation (pièces produites, kilomètres…), on amortit au <b>rythme des unités d'œuvre (UO)</b> :</p>
<div class="box ok"><b>Annuité = base × (UO de l'exercice ÷ UO totales)</b>Jamais de prorata temporis dans ce cas.</div>
<p><b>Exemple du cours</b> — machine 30 000 € HT, mise en service le 1/04/N, produira 100 000 pièces : 50 000 en N, 30 000 en N+1, 20 000 en N+2.</p>
${TB(["Année", "Calcul", "Annuité", "Cumul", "VNC"], [["N", "50 000/100 000 × 30 000", 15000, 15000, 15000], ["N+1", "30 000/100 000 × 30 000", 9000, 24000, 6000], ["N+2", "20 000/100 000 × 30 000", 6000, 30000, 0]])}`,
        ex: [
          N("Machine 30 000 € HT ; 100 000 pièces au total dont 50 000 en N. Annuité de N ?", 15000, "50 % × 30 000."),
          N("Camion 60 000 € HT amorti sur 300 000 km ; 45 000 km parcourus en N. Annuité de N ?", 9000, "45 000/300 000 × 60 000 = 9 000."),
          Q("La machine est mise en service le 1/04/N, amortie en unités d'œuvre. Faut-il un prorata temporis ?", ["Oui, 9/12", "Non, jamais en unités d'œuvre"], 1, ""),
          T("Plan en unités d'œuvre : machine 40 000 € HT ; 200 000 pièces : 80 000 (N), 70 000 (N+1), 50 000 (N+2).", ["Année", "Annuité", "Cumul", "VNC"], [["N", { a: 16000 }, { a: 16000 }, { a: 24000 }], ["N+1", { a: 14000 }, { a: 30000 }, { a: 10000 }], ["N+2", { a: 10000 }, { a: 40000 }, { a: 0 }]], "40 % ; 35 % ; 25 % de 40 000.")
        ]
      },
      /* ---------------- D5 ---------------- */
      {
        id: "D5", title: "L'écriture de dotation aux amortissements", tombe: "2024 et 2025 (0,5 à 1 pt)",
        cours: `
<p>L'amortissement fait baisser l'actif (via la colonne A&D) et le résultat (charge). Écriture au <b>31/12</b> :</p>
${J([["681", 0, 0, "DADP – exploitation — <b>annuité</b>"], ["28..", 0, 0, "Amortissements de l'immobilisation (280 incorporelles, 281 corporelles) — <b>annuité</b>"]])}
<h3>Construire le numéro du compte 28</h3>
<p>On insère un <b>8</b> en 2ᵉ position du compte d'immobilisation :</p>
${TB(["Immobilisation", "Amortissement"], [["205 Brevets", "<b>2805</b>"], ["213 Constructions", "<b>2813</b>"], ["215 ITMOI", "<b>2815</b>"], ["2182 Matériel de transport", "<b>28182</b>"], ["2183 Matériel informatique", "<b>28183</b>"]])}
<p><b>Annale 2025</b> — dotation du brevet en N :</p>
${J([["681", 1000, 0], ["2805", 0, 1000]])}
<div class="box trap"><b>Pièges</b>Pas de TVA dans une dotation (ce n'est pas un achat). Le compte 2… de l'immobilisation n'est <b>jamais</b> touché : on garde la valeur brute, on augmente le 28.</div>`,
        ex: [
          E("Dotation de N du brevet : <b>1 000 €</b>. <i>(Annale 2025, 0,5 pt)</i>", [["681", 1000, 0], ["2805", 0, 1000]], ""),
          E("Dotation de N d'une machine-outil (ITMOI) : <b>2 100 €</b>. <i>(Annale 2024)</i>", [["681", 2100, 0], ["2815", 0, 2100]], ""),
          E("Camion 20 000 € HT, 4 ans, acquis le 1/1/N. Dotation au 31/12/N.", [["681", 5000, 0], ["28182", 0, 5000]], "20 000 ÷ 4 = 5 000."),
          E("Ordinateurs 3 600 € HT, 3 ans, mis en service le 1/10/N. Dotation au 31/12/N.", [["681", 300, 0], ["28183", 0, 300]], "1 200 × 3/12 = 300."),
          Q("Une dotation aux amortissements comporte-t-elle de la TVA ?", ["Oui, 20 %", "Non, jamais"], 1, "")
        ],
        gen: [() => { const [nom, im, am] = pick(IMMOS); const d = pick([3, 4, 5, 10]); const b = rnd(2, 30) * d * 1200; const m = rnd(1, 12); const an = r2(b / d * joursRestants(1, m) / 360); return E(`${nom[0].toUpperCase() + nom.slice(1)} acquis(e) ${fmt(b)} € HT le 1er ${MOIS[m - 1]} N, amorti(e) en linéaire sur ${d} ans. Passe la dotation au 31/12/N.`, [["681", an, 0], [am, 0, an]], `Annuité ${fmt(b / d)} × ${13 - m}/12 = ${fmt(an)}.`); }]
      },
      /* ---------------- D6 ---------------- */
      {
        id: "D6", title: "Acquisition + dotation : effet sur le bilan", tombe: "2025 : 2 pts",
        cours: `
<h3>Les trois colonnes de l'actif</h3>
<p><b>Brut</b> (valeur d'origine, comptes 2) − <b>A&D</b> (amortissements et dépréciations cumulés, comptes 28/29) = <b>Net</b>.</p>
<h3>Annale 2025 (entreprise E) — corrigé pas à pas</h3>
<p>Avant : actif immobilisé brut 300 000, A&D 55 000, net 245 000 ; actif circulant 460 000 ; capital et réserves 214 000 ; résultat 30 000 ; dettes 461 000 ; total 705 000.</p>
<p>Écritures : achat du brevet (205 180 000 + 44562 36 000 / 512 216 000) puis dotation (681 / 2805 : 1 000).</p>
<ol class="steps">
<li>205 + 180 000 → AI brut = <b>480 000</b>.</li>
<li>2805 + 1 000 → A&D = <b>56 000</b> → AI net = 424 000.</li>
<li>44562 + 36 000 et 512 − 216 000 → AC = 460 000 + 36 000 − 216 000 = <b>280 000</b>.</li>
<li>681 = charge de 1 000 → résultat = <b>29 000</b>.</li>
<li>Dettes inchangées (payé comptant) : 461 000.</li>
<li>Contrôle : 424 000 + 280 000 = <b>704 000</b> = 214 000 + 29 000 + 461 000. ✓</li>
</ol>
<div class="box trap"><b>Piège</b>Oublier la TVA déductible (+36 000) dans l'actif circulant, ou retirer seulement le HT de la banque. La banque baisse du <b>TTC</b>.</div>`,
        ex: [
          T("<b>Annale 2025 (2 pts)</b> — avant : AI brut 300 000, A&D 55 000 ; AC 460 000 ; capital et réserves 214 000 ; résultat 30 000 ; dettes 461 000. Écritures : brevet 180 000 HT payé comptant (TVA 20 %), dotation de 1 000. Complète le bilan après.", ["Poste", "Après"], [["AI brut", { a: 480000 }], ["AI A&D", { a: 56000 }], ["AI net", { a: 424000 }], ["Actif circulant", { a: 280000 }], ["Résultat", { a: 29000 }], ["Total actif net", { a: 704000 }]], "Voir le cours : AC = 460 000 + 36 000 − 216 000."),
          T("Avant : AI brut 100 000, A&D 20 000 ; AC 50 000 ; capitaux propres hors résultat 70 000 ; résultat 10 000 ; dettes 50 000. Écritures : achat <b>à crédit</b> d'une machine 30 000 HT (TVA 20 %) le 1/1/N, amortie sur 5 ans ; dotation de N. Complète après.", ["Poste", "Après"], [["AI brut", { a: 130000 }], ["AI A&D", { a: 26000 }], ["Actif circulant", { a: 56000 }], ["Résultat", { a: 4000 }], ["Dettes", { a: 86000 }], ["Total actif net", { a: 160000 }]], "215 + 30 000 ; 2815 + 6 000 ; 44562 + 6 000 → AC 56 000 ; 404 + 36 000 → dettes 86 000 ; résultat 10 000 − 6 000 = 4 000 ; contrôle : 104 000 + 56 000 = 160 000 = 70 000 + 4 000 + 86 000."),
          Q("La dotation aux amortissements modifie…", ["la colonne brut de l'actif", "la colonne A&D de l'actif et le résultat", "les dettes", "la trésorerie"], 1, "Pas de sortie d'argent : c'est une charge « calculée ».")
        ]
      },
      /* ---------------- D7 ---------------- */
      {
        id: "D7", title: "Cession d'une immobilisation (3 écritures)", tombe: "2024 : 7,5 pts ! ; 2025 : 1,5 pt",
        cours: `
<h3>Les 3 écritures, dans l'ordre</h3>
<h4>① Le jour de la cession : la vente (écriture courante)</h4>
${J([["512 / 462", 0, 0, "Banque, ou Créances sur cessions d'immobilisations si à crédit — <b>TTC</b>"], ["757", 0, 0, "Produits des cessions d'immobilisations (PCIICC) — <b>prix HT</b>"], ["4457", 0, 0, "TVA collectée — <b>TVA</b>"]])}
<h4>② Au 31/12 : le complément de dotation (du 1/1 à la date de cession, prorata)</h4>
${J([["681", 0, 0, "DADP – exploitation"], ["28..", 0, 0, "Amortissements"]])}
<h4>③ Au 31/12 : la sortie du bilan</h4>
${J([["28..", 0, 0, "Amortissements — <b>cumul total</b> (années précédentes + complément)"], ["657", 0, 0, "Valeur comptable des immobilisations cédées (VCIICC) — <b>VNC</b>"], ["2..", 0, 0, "Immobilisation — <b>valeur brute</b>"]])}
<div class="box ok"><b>Résultat de cession</b> = prix de cession HT (757) − VNC (657). Positif = plus-value, négatif = moins-value.</div>
<h3>Annale 2024 (7,5 pts) — corrigé</h3>
<p>Fin mars N, cession de matériel industriel 15 600 € HT par virement ; valeur brute 24 000 ; amortissements 8 300 pour les années antérieures et 2 100 pour N.</p>
${J(["① Cession", ["512", 18720, 0], ["757", 0, 15600], ["4457", 0, 3120], "② Complément de dotation N", ["681", 2100, 0], ["2815", 0, 2100], "③ Sortie du bilan", ["2815", 10400, 0], ["657", 13600, 0], ["215", 0, 24000]])}
<p>Cumul = 8 300 + 2 100 = 10 400 ; VNC = 24 000 − 10 400 = 13 600 ; plus-value = 15 600 − 13 600 = <b>+ 2 000</b>.</p>
<div class="box warn"><b>Numéros de comptes</b>Les diapos 2025-2026 utilisent <b>757 / 657</b>. L'annale 2024 utilisait <b>775 / 675</b> (ancienne numérotation). Le jour J, prends ceux du plan comptable en annexe : le site accepte les deux.</div>
<div class="box trap"><b>Pièges</b>Créance d'une cession à crédit = <b>462</b> (pas 411). Dans ③, le 28 est débité du <b>cumul total</b>, complément compris. La cession porte de la TVA (vente d'un bien par un assujetti).</div>`,
        ex: [
          E("Cession <b>à crédit</b> d'un véhicule de transport pour <b>16 000 € HT</b>. TVA 20 %. <i>(Annale 2025, 1,5 pt)</i>", [["462", 19200, 0], ["757", 0, 16000], ["4457", 0, 3200]], "À crédit → 462. TTC 19 200."),
          E("<b>① Annale 2024</b> : fin mars N, cession de matériel industriel pour <b>15 600 € HT</b>, payé par virement. TVA 20 %.", [["512", 18720, 0], ["757", 0, 15600], ["4457", 0, 3120]], ""),
          E("<b>② Annale 2024</b> : complément de dotation de N pour ce matériel : <b>2 100 €</b>.", [["681", 2100, 0], ["2815", 0, 2100]], ""),
          E("<b>③ Annale 2024</b> : sortie du patrimoine. Valeur brute 24 000 ; amortissements : 8 300 pour les années antérieures et 2 100 pour N.", [["2815", 10400, 0], ["657", 13600, 0], ["215", 0, 24000]], "Cumul 10 400 ; VNC 13 600."),
          N("Annale 2024 : résultat de la cession (prix 15 600 HT, VNC 13 600) ?", 2000, "15 600 − 13 600 = + 2 000 (plus-value)."),
          N("Véhicule 20 000 € HT acquis le 1/1/N, 4 ans, cédé le 30/06/N+2. Complément de dotation N+2 ?", 2500, "5 000 × 6/12 = 2 500."),
          E("Ce véhicule (20 000 HT, amortissements 5 000 en N, 5 000 en N+1, 2 500 en N+2) est sorti du bilan au 31/12/N+2.", [["28182", 12500, 0], ["657", 7500, 0], ["2182", 0, 20000]], "Cumul 12 500 ; VNC 7 500."),
          N("Ce véhicule a été vendu 6 000 € HT. Résultat de cession (signe − si moins-value) ?", -1500, "6 000 − 7 500 = − 1 500 (moins-value).")
        ],
        gen: [() => {
          const d = pick([4, 5, 10]); const b = rnd(4, 30) * d * 1200; const a = b / d; const yrs = rnd(1, d - 2); const m = rnd(1, 11);
          const comp = r2(a * m / 12); const cum = r2(a * yrs + comp); const vnc = r2(b - cum);
          return E(`Matériel industriel acquis ${fmt(b)} € HT le 1/1/N−${yrs}, amorti sur ${d} ans, cédé fin ${MOIS[m - 1]} N. Passe la <b>sortie du bilan</b> au 31/12/N (le complément de dotation de N est déjà passé).`, [["2815", cum, 0], ["657", vnc, 0], ["215", 0, b]], `Annuité ${fmt(a)} ; cumul = ${yrs} × ${fmt(a)} + ${fmt(comp)} (${m} mois) = ${fmt(cum)} ; VNC = ${fmt(vnc)}.`);
        }, () => { const p = rnd(5, 80) * 200; const cr = Math.random() < .5; return E(`Cession ${cr ? "à crédit" : "par virement"} d'un ${pick(["véhicule de transport", "matériel industriel", "ordinateur"])} pour ${fmt(p)} € HT. TVA 20 %.`, [[cr ? "462" : "512", p * 1.2, 0], ["757", 0, p], ["4457", 0, p * 0.2]], "Écriture de vente avec 757 et 462/512."); }]
      }
    ]
  });
})();
