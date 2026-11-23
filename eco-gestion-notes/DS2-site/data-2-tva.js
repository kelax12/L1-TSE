/* Bloc B — La TVA (chapitre 4, point 1 : TVA) */
(function () {
  const ACHATS = [
    ["des marchandises", "607"], ["des matières premières", "601"], ["une facture d'honoraires d'avocat", "622"], ["une facture d'entretien", "615"],
    ["une campagne de publicité", "623"], ["des fournitures de bureau", "606"], ["le loyer du local commercial", "613"], ["des frais de transport de marchandises", "624"]
  ];
  const VENTES = [["de marchandises", "707"], ["de produits finis", "701"], ["de prestations de services", "706"]];
  const FRACS = [[0.6, "60 % sont payés au comptant par virement, le solde à crédit"], [0.5, "la moitié est payée au comptant par virement, le solde à crédit"], [1 / 3, "un tiers est payé au comptant par virement, le solde à crédit"], [0.25, "un quart est payé au comptant par virement, le reste à crédit"]];

  BLOCS.push({
    id: "B", title: "La TVA", desc: "Mécanisme, champ d'application, calculs HT/TTC, écritures d'achat et de vente, liquidation.",
    skills: [
      /* ---------------- B1 ---------------- */
      {
        id: "B1", title: "Le mécanisme de la TVA", tombe: "base du cours",
        cours: `
<h3>Ce qu'il faut comprendre</h3>
<ul>
<li>La TVA est un <b>impôt indirect sur la consommation</b> : c'est le <b>consommateur final</b> (le particulier) qui la <b>supporte</b>, mais ce sont les <b>entreprises</b> qui la <b>collectent</b> et la reversent à l'État.</li>
<li>Sur ses <b>ventes</b>, l'entreprise facture de la TVA à ses clients : c'est la <b>TVA collectée</b> → elle la <b>doit</b> à l'État → <b>dette</b> → compte <b>4457</b> (passif).</li>
<li>Sur ses <b>achats</b>, l'entreprise paie de la TVA à ses fournisseurs, mais elle peut la récupérer : c'est la <b>TVA déductible</b> → l'État la lui <b>doit</b> → <b>créance</b> → comptes <b>44566</b> (biens et services) ou <b>44562</b> (immobilisations) (actif).</li>
<li>Chaque mois, l'entreprise ne verse que la différence :</li>
</ul>
<div class="box ok"><b>TVA due = TVA collectée − TVA déductible</b>Elle ne paie donc que la TVA sur <b>sa propre valeur ajoutée</b> (d'où le nom).</div>
<div class="box"><b>La TVA est NEUTRE pour l'entreprise</b>Elle ne s'enrichit pas, ne s'appauvrit pas : elle est un simple intermédiaire. Conséquence pratique : <b>la TVA n'est jamais une charge ni un produit</b>. Les charges et les produits s'enregistrent toujours <b>HT</b>.</div>
<p><b>L'exemple du bûcheron</b> : le bûcheron vend du bois 120 € HT à une scierie (il collecte 24 € de TVA). La scierie vend des planches 200 € HT au magasin (elle collecte 40, déduit 24, verse 16). Le magasin vend 250 € HT au particulier (collecte 50, déduit 40, verse 10). Total versé à l'État : 24 + 16 + 10 = <b>50 € = 20 % × 250</b>, entièrement payé par le particulier.</p>
<div class="box trap"><b>Exception : la TVA non déductible</b>Les achats de <b>véhicules de tourisme</b> (transport de personnes) ne permettent pas de récupérer la TVA : l'entreprise la supporte comme un particulier → le véhicule est enregistré <b>TTC</b>. Les véhicules <b>utilitaires</b> (transport de marchandises), eux, ouvrent droit à déduction.</div>`,
        ex: [
          Q("Qui <b>supporte</b> finalement le coût de la TVA ?", ["L'entreprise qui vend", "Le consommateur final", "Le fournisseur", "L'État"], 1, "Impôt indirect : payé (collecté) par les entreprises, supporté par le consommateur final."),
          Q("La TVA collectée sur les ventes est, pour l'entreprise…", ["un produit", "une dette envers l'État", "une créance sur l'État", "une charge"], 1, "Elle doit la reverser → dette (4457)."),
          Q("La TVA payée sur un achat de marchandises est…", ["une charge (compte 607)", "une créance sur l'État (44566)", "une dette (4457)", "un produit"], 1, "TVA déductible → l'État nous la rend → créance."),
          Q("Une entreprise a collecté 5 400 € et payé 4 400 € de TVA déductible. Elle doit verser…", ["9 800 €", "5 400 €", "1 000 €", "rien"], 2, "5 400 − 4 400 = 1 000 €."),
          Q("Une vente de 1 000 € HT + 200 € de TVA augmente le résultat de…", ["1 200 €", "1 000 €", "200 €"], 1, "La TVA est neutre : le produit est le montant <b>HT</b>."),
          Q("Pourquoi dit-on que la TVA « frappe la valeur ajoutée » ?", ["Parce qu'elle est calculée sur le bénéfice", "Parce que chaque entreprise reverse la TVA correspondant à la différence entre ses ventes et ses achats", "Parce qu'elle ne concerne que les industriels"], 1, "TVA collectée − TVA déductible = taux × (ventes − achats) = taux × valeur ajoutée.")
        ]
      },
      /* ---------------- B2 ---------------- */
      {
        id: "B2", title: "Les 3 conditions d'imposition (art. 256-I CGI)", tombe: "2025 : question de cours (1,5 pt)",
        cours: `
<h3>Article 256-I du Code général des impôts</h3>
<p>« Sont soumises à la TVA les livraisons de biens et les prestations de services effectuées <b>à titre onéreux</b> par un <b>assujetti</b> agissant en tant que tel. »</p>
<div class="box ok"><b>Les 3 conditions (0,5 pt chacune)</b>
1. Une <b>livraison de bien ou une prestation de service</b> (une vente).<br>
2. Effectuée <b>à titre onéreux</b> (il y a une contrepartie, avec un lien direct).<br>
3. Par un <b>assujetti</b> (= une entreprise, au sens fiscal).</div>
<h3>Détail de chaque condition</h3>
<h4>1. Une livraison de bien ou une prestation de service</h4>
<p>99 % des opérations. Mais <b>pas</b> : la cession d'actions, les flux financiers (prêt, emprunt, remboursement, encaissement d'une créance, paiement d'une dette). Seuls les <b>flux réels</b> sont imposés.</p>
<h4>2. À titre onéreux</h4>
<p>Il faut une <b>contrepartie</b> et un <b>lien direct</b> entre le prix et la prestation. <b>Le musicien de rue</b> : les passants donnent ce qu'ils veulent (ou rien) → pas de lien direct → pas imposable. S'il loue une salle et vend des billets → prix déterminé → imposable.</p>
<h4>3. Par un assujetti</h4>
<p>Assujetti = personne (physique ou morale) qui exerce une activité économique :</p>
<ul><li><b>de manière habituelle</b> (répétition) : vendre une fois son vélo sur Le Bon Coin → non ; acheter des vélos pour les revendre régulièrement → oui ;</li>
<li><b>de manière indépendante</b> (en son nom et pour son compte) : le <b>salarié</b> est lié par un <b>lien de subordination</b> → pas assujetti → les salaires ne sont pas soumis à la TVA.</li></ul>
<p>Pas besoin de but lucratif, pas besoin d'être déclaré (sinon il suffirait de ne pas se déclarer…).</p>
<div class="box"><b>Remarque</b>L'imposition s'apprécie <b>toujours du côté du vendeur</b> : peu importe que l'acheteur soit un particulier ou une entreprise.</div>`,
        ex: [
          F("Identifier les 3 conditions pour qu'une opération soit imposable à la TVA. <i>(Annale 2025, 1,5 pt)</i>", "Article 256-I du CGI : 1) une <b>livraison de bien ou une prestation de service</b> ; 2) effectuée <b>à titre onéreux</b> (contrepartie avec un lien direct) ; 3) par un <b>assujetti</b> agissant en tant que tel (activité économique exercée de manière habituelle et indépendante)."),
          Q("Un particulier vend une fois sa voiture d'occasion. TVA ?", ["Oui, 20 %", "Non : il n'est pas assujetti (pas d'habitude)", "Non : c'est exonéré"], 1, "Opération occasionnelle d'un particulier → pas assujetti → non imposable."),
          Q("Un musicien de rue reçoit des pièces des passants. TVA ?", ["Oui", "Non : pas de caractère onéreux (pas de lien direct entre la prestation et les sommes)", "Non : la musique est exonérée"], 1, "Le juge a retenu l'absence de lien direct → pas onéreux → non imposable."),
          Q("Un salarié vendeur dans une concession automobile. Son salaire est-il soumis à la TVA ?", ["Oui", "Non : il n'est pas indépendant (lien de subordination)"], 1, "Le lien de subordination l'empêche d'être assujetti."),
          Q("Une entreprise rembourse un emprunt à sa banque. TVA ?", ["Oui, sur le capital", "Non : ce n'est ni un bien ni un service, c'est un flux financier", "Oui, sur les intérêts uniquement"], 1, "Flux financier → hors champ."),
          M("Coche les conditions de l'article 256-I.", ["Livraison de bien ou prestation de service", "But lucratif", "À titre onéreux", "Entreprise déclarée au registre du commerce", "Par un assujetti"], [0, 2, 4], "Le but lucratif et la déclaration ne sont <b>pas</b> exigés.")
        ]
      },
      /* ---------------- B3 ---------------- */
      {
        id: "B3", title: "Non imposable ou exonérée ?", tombe: "2025 : « proposer deux opérations non imposées » (1,5 pt)",
        cours: `
<h3>Deux façons de ne pas avoir de TVA</h3>
${TB(["", "Non imposable", "Imposable mais exonérée"], [
          ["Les 3 conditions sont-elles réunies ?", "<b>Non</b> : il en manque au moins une", "<b>Oui</b>, toutes"], ["Pourquoi pas de TVA ?", "L'opération est hors du champ de l'art. 256-I", "Un <b>texte spécifique</b> l'exonère"],
          ["Exemples", "Vendeur particulier (non assujetti) ; musicien de rue (pas onéreux) ; salaire (pas indépendant) ; prêt, emprunt, cession d'actions (pas un bien ni un service)", "Activités <b>médicales et paramédicales</b> (humains) ; <b>location d'immeuble nu à usage d'habitation</b> ; <b>enseignement</b> (y compris cours particuliers) ; activités <b>bancaires et financières</b>"]
        ])}
<div class="box ok"><b>Réponse modèle « deux opérations non imposées » (barème 2025)</b>
Une opération <b>non imposable</b> : vente par un <b>particulier</b> non assujetti (0,5) ; le <b>musicien de rue</b> (pas de lien direct → pas onéreux) (0,5) ; un <b>prêt/emprunt</b> (pas un bien ni un service) (0,5).<br>
Une opération <b>imposable mais exonérée</b> : une <b>prestation médicale</b> (0,5) ; une <b>location d'immeuble nu à usage d'habitation</b> (0,5).<br>
→ Donne-en <b>deux bien justifiées</b>, idéalement une de chaque type.</div>
<div class="box trap"><b>Piège</b>Les soins <b>vétérinaires</b> ne sont pas exonérés (seulement la santé humaine). L'alimentation n'est pas exonérée : elle a un <b>taux réduit</b> (5,5 %).</div>`,
        ex: [
          F("Proposer deux opérations qui ne sont pas imposées à la TVA. <i>(Annale 2025, 1,5 pt)</i>", "Ex. 1 — <b>opération non imposable</b> : le musicien de rue (pas de lien direct entre la prestation et les sommes perçues → pas de caractère onéreux) ; ou une vente par un particulier (non assujetti) ; ou un emprunt (ni un bien ni un service).<br>Ex. 2 — <b>opération imposable mais exonérée</b> : une prestation médicale, ou la location d'un immeuble nu à usage d'habitation (un texte écarte la TVA alors que les 3 conditions sont réunies)."),
          Q("Une consultation chez un médecin libéral :", ["Non imposable", "Imposable mais exonérée", "Imposable au taux réduit"], 1, "Le médecin est assujetti, sa prestation est onéreuse : imposable, mais un texte l'exonère."),
          Q("Le loyer d'un appartement loué vide à un étudiant :", ["Imposable à 20 %", "Imposable mais exonéré", "Non imposable"], 1, "Location d'immeuble nu à usage d'habitation → exonérée."),
          Q("Une cession d'actions :", ["Non imposable (ni bien ni service)", "Exonérée", "Imposable à 20 %"], 0, "Les titres financiers ne sont pas des biens au sens de la TVA → hors champ."),
          Q("Des soins vétérinaires pour un chien :", ["Exonérés (santé)", "Imposables", "Non imposables"], 1, "Seule la santé humaine est exonérée."),
          M("Coche les opérations <b>imposables mais exonérées</b>.", ["Cours particuliers de maths", "Musicien de rue", "Prestation d'un kinésithérapeute", "Vente de son vélo par un particulier", "Opération bancaire", "Repas au restaurant"], [0, 2, 4], "Enseignement, paramédical, bancaire = exonérés. Musicien et particulier = non imposables. Restaurant = imposable à 10 %.")
        ]
      },
      /* ---------------- B4 ---------------- */
      {
        id: "B4", title: "Les taux de TVA", tombe: "« TVA au taux normal » dans chaque énoncé",
        cours: `
${TB(["Taux", "Nom", "Exemples"], [["<b>20 %</b>", "normal", "la plupart des opérations (par défaut) ; alcool, sodas, caviar"], ["<b>10 %</b>", "intermédiaire", "restauration, hôtellerie, certains travaux dans le logement"], ["<b>5,5 %</b>", "réduit", "la plupart des produits alimentaires, spectacles"], ["<b>2,1 %</b>", "super réduit", "médicaments remboursables"]])}
<div class="box ok"><b>Au DS</b>L'énoncé dit presque toujours « <b>la TVA est au taux normal</b> » → <b>20 %</b>. On ne te demandera pas les taux opération par opération, mais on peut te demander de <b>retrouver un taux</b> à partir d'un grand livre (voir B7).</div>
<p>Coefficients à connaître : 20 % → <b>1,20</b> ; 10 % → <b>1,10</b> ; 5,5 % → <b>1,055</b> ; 2,1 % → <b>1,021</b>.</p>`,
        ex: [
          Q("« La TVA est au taux normal » signifie…", ["5,5 %", "10 %", "20 %", "19,6 %"], 2, "Taux normal = 20 %."),
          Q("Un repas au restaurant :", ["20 %", "10 %", "5,5 %", "exonéré"], 1, "Restauration = taux intermédiaire 10 %."),
          Q("Un paquet de pâtes au supermarché :", ["20 %", "10 %", "5,5 %", "exonéré"], 2, "Alimentation = taux réduit 5,5 % (pas exonérée !)."),
          Q("Pour passer du HT au TTC à 10 %, on multiplie par…", ["0,10", "1,10", "0,90", "1,01"], 1, "TTC = HT × (1 + 10 %) = HT × 1,10.")
        ]
      },
      /* ---------------- B5 ---------------- */
      {
        id: "B5", title: "Calcul HT → TVA → TTC", tombe: "toutes les écritures",
        cours: `
<div class="box ok"><b>La TVA se calcule TOUJOURS sur le HT</b>TVA = HT × taux &nbsp;&nbsp;|&nbsp;&nbsp; TTC = HT + TVA = HT × (1 + taux)</div>
<p><b>Exemple</b> : 8 000 € HT à 20 % → TVA = 8 000 × 0,20 = <b>1 600</b> → TTC = <b>9 600</b>.</p>
<h3>Paiement partiel (tombé en 2024 et 2025)</h3>
<p>« 60 % sont payés au comptant, le solde à crédit » : le pourcentage s'applique au <b>TTC</b> (c'est ce que le client paie).</p>
<ol class="steps"><li>TTC = 8 000 × 1,20 = 9 600.</li><li>Comptant = 60 % × 9 600 = <b>5 760</b> (banque).</li><li>Crédit = 9 600 − 5 760 = <b>3 840</b> (client).</li></ol>
<div class="box trap"><b>Piège</b>Ne pas appliquer les 60 % au HT. La banque reçoit de l'argent TTC.</div>`,
        ex: [
          N("Marchandises 8 000 € HT, TVA 20 %. Montant de la TVA ?", 1600, "8 000 × 0,20 = 1 600."),
          N("Marchandises 8 000 € HT, TVA 20 %. Montant TTC ?", 9600, "8 000 × 1,20 = 9 600."),
          N("Prestation 2 000 € HT à 10 %. TTC ?", 2200, "2 000 × 1,10 = 2 200."),
          N("Vente 8 000 € HT (TVA 20 %) ; 60 % payés au comptant. Combien encaisse la banque ?", 5760, "TTC 9 600 × 60 % = 5 760. <i>(Annale 2024)</i>"),
          N("Vente 12 000 € HT (TVA 20 %) ; un tiers payé au comptant, le solde à crédit. Combien reste dû par le client ?", 9600, "TTC 14 400 ; comptant 4 800 ; crédit 14 400 − 4 800 = 9 600. <i>(Annale 2025)</i>"),
          T("Complète (TVA 20 %).", ["HT", "TVA", "TTC"], [[3000, { a: 600 }, { a: 3600 }], [12500, { a: 2500 }, { a: 15000 }], [180000, { a: 36000 }, { a: 216000 }], [1250, { a: 250 }, { a: 1500 }]], "TVA = HT × 0,2 ; TTC = HT × 1,2.")
        ],
        gen: [() => { const ht = rnd(5, 400) * 50; const t = pick([0.2, 0.2, 0.2, 0.1, 0.055]); const w = pick(["tva", "ttc"]); const tva = r2(ht * t); return N(`${fmt(ht)} € HT, TVA à ${fmt(t * 100)} %. Montant ${w === "tva" ? "de la TVA" : "TTC"} ?`, w === "tva" ? tva : r2(ht + tva), `TVA = ${fmt(ht)} × ${fmt(t)} = ${fmt(tva)} ; TTC = ${fmt(r2(ht + tva))}.`); },
        () => { const [fr, txt] = pick(FRACS); const ht = rnd(2, 60) * 300; const ttc = ht * 1.2; const cpt = r2(ttc * fr); return N(`Vente de ${fmt(ht)} € HT (TVA 20 %) : ${txt}. Combien encaisse la banque ?`, cpt, `TTC = ${fmt(ttc)} ; comptant = ${fmt(ttc)} × ${fmt(r2(fr))} = ${fmt(cpt)}.`); }]
      },
      /* ---------------- B6 ---------------- */
      {
        id: "B6", title: "Calcul TTC → HT (le piège n°1)", tombe: "2024 : honoraires 4 140 TTC ; 2025 : MP 6 000 TTC",
        cours: `
<div class="box ok"><b>Du TTC au HT : on DIVISE par (1 + taux)</b>HT = TTC ÷ 1,20 &nbsp;&nbsp;puis&nbsp;&nbsp; TVA = TTC − HT (ou HT × 0,20)</div>
<p><b>Annale 2024</b> : honoraires 4 140 € TTC → HT = 4 140 ÷ 1,20 = <b>3 450</b> → TVA = 4 140 − 3 450 = <b>690</b>.</p>
<p><b>Annale 2025</b> : matières premières 6 000 € TTC → HT = 6 000 ÷ 1,20 = <b>5 000</b> → TVA = <b>1 000</b>.</p>
<div class="box trap"><b>L'erreur à ne JAMAIS faire</b>TTC × 0,80 ou TTC × 0,20. Exemple : 6 000 × 0,80 = 4 800 ≠ 5 000. La TVA est un pourcentage du <b>HT</b>, pas du TTC : TVA = TTC × 20/120 = TTC ÷ 6 (à 20 %).</div>
<div class="box"><b>Astuce de vérification</b>Une fois le HT trouvé, refais HT × 1,20 : tu dois retomber exactement sur le TTC.</div>`,
        ex: [
          N("Honoraires 4 140 € TTC (TVA 20 %). Montant HT ? <i>(Annale 2024)</i>", 3450, "4 140 ÷ 1,20 = 3 450."),
          N("Honoraires 4 140 € TTC (TVA 20 %). Montant de la TVA ?", 690, "4 140 − 3 450 = 690."),
          N("Matières premières 6 000 € TTC (20 %). HT ?", 5000, "6 000 ÷ 1,2 = 5 000 (et pas 4 800 !)."),
          N("Repas d'affaires 1 650 € TTC (TVA 10 %). HT ?", 1500, "1 650 ÷ 1,10 = 1 500."),
          Q("Un élève calcule le HT de 1 200 € TTC comme 1 200 × 0,8 = 960. Le vrai HT est…", ["960", "1 000", "1 440", "1 080"], 1, "1 200 ÷ 1,2 = 1 000. Vérification : 1 000 × 1,2 = 1 200 ✓ (960 × 1,2 = 1 152 ✗)."),
          N("Escompte de 24 € TTC (TVA 20 %). Montant HT de l'escompte ?", 20, "24 ÷ 1,2 = 20 (TVA 4)."),
          T("Complète (TVA 20 %).", ["TTC", "HT", "TVA"], [[1470, { a: 1225 }, { a: 245 }], [19200, { a: 16000 }, { a: 3200 }], [2400, { a: 2000 }, { a: 400 }], [180, { a: 150 }, { a: 30 }]], "HT = TTC ÷ 1,2.")
        ],
        gen: [() => { const ht = rnd(5, 500) * 30; const ttc = r2(ht * 1.2); const w = pick(["HT", "TVA"]); return N(`${fmt(ttc)} € TTC, TVA 20 %. Montant ${w} ?`, w === "HT" ? ht : r2(ttc - ht), `HT = ${fmt(ttc)} ÷ 1,2 = ${fmt(ht)} ; TVA = ${fmt(r2(ttc - ht))}.`); }]
      },
      /* ---------------- B7 ---------------- */
      {
        id: "B7", title: "Retrouver un taux, un HT, une TVA due dans un grand livre", tombe: "2025 : exercice 2 (3,5 pts)",
        cours: `
<h3>Les formules à l'envers</h3>
<ul><li><b>Taux</b> = TVA ÷ HT. Ex. : 200 ÷ 2 000 = <b>10 %</b>.</li>
<li><b>HT</b> à partir de la TVA = TVA ÷ taux. Ex. : 500 ÷ 0,10 = 5 000.</li>
<li><b>TVA due du mois</b> = solde du 4457 (collectée) − soldes des 4456x (déductible).</li></ul>
<h3>Annale 2025 (entreprise Z), extrait du grand livre au 31/01</h3>
${TB(["Compte", "Mouvements", "Solde"], [["401 MARTIN", "05/01 facture F2024 : crédit 3 600 ; 10/01 virement : débit 3 600", "0"], ["411 DUPONT", "12/01 C100 : débit 2 200 ; 15/01 C102 : débit 5 500 ; 20/01 encaissement : crédit 4 950", "2 750 D"], ["44566", "05/01 F2024 : débit 600", "600 D"], ["4457", "12/01 C100 : crédit 200 ; 15/01 C102 : crédit 500", "700 C"], ["607", "05/01 F2024 : débit 3 000", "3 000 D"], ["706", "C100 : crédit 2 000 ; C102 : crédit 5 000", "7 000 C"]])}
<ol class="steps">
<li><b>Reconstituer l'achat</b> : on cherche tout ce qui porte la référence F2024 → 607 débit 3 000, 44566 débit 600, 401 crédit 3 600.</li>
<li><b>Taux sur DUPONT</b> : 200 ÷ 2 000 = 500 ÷ 5 000 = <b>10 %</b>.</li>
<li><b>HT du 15 janvier</b> : on lit le 706 → <b>5 000</b>.</li>
<li><b>TVA due au 31/01</b> : 700 − 600 = <b>100 €</b>.</li>
<li><b>Dû par DUPONT</b> : solde du 411 = <b>2 750 €</b>.</li>
</ol>
<div class="box"><b>Astuce</b>Une même facture apparaît dans plusieurs comptes avec la <b>même référence</b> (F2024, C102…) : regroupe-les pour reconstituer l'écriture.</div>`,
        ex: [
          E("Grand livre de Z : la facture F2024 du 05/01 apparaît au 607 (débit 3 000), au 44566 (débit 600) et au 401 (crédit 3 600). Reconstitue l'écriture d'achat. <i>(Annale 2025, 1,5 pt)</i>", [["607", 3000, 0], ["44566", 600, 0], ["401", 0, 3600]], "On regroupe les lignes portant la référence F2024."),
          N("Facture C100 : 706 crédité de 2 000, 4457 crédité de 200. Taux de TVA (en %) ?", 10, "200 ÷ 2 000 = 0,10 = 10 %.", { u: "%" }),
          N("4457 crédité de 500 pour la facture C102, au taux de 10 %. Montant HT ?", 5000, "500 ÷ 0,10 = 5 000."),
          N("Au 31/01 : 4457 solde créditeur 700 ; 44566 solde débiteur 600. TVA nette due ?", 100, "700 − 600 = 100 €."),
          N("Facture C102 : HT 5 000, TVA 500. Montant TTC porté au débit du 411 ?", 5500, "5 000 + 500 = 5 500."),
          N("Une facture de vente porte 3 200 € de TVA au taux normal. HT ?", 16000, "3 200 ÷ 0,20 = 16 000.")
        ]
      },
      /* ---------------- B8 ---------------- */
      {
        id: "B8", title: "Écriture d'achat de biens ou services avec TVA", tombe: "2024 : 3 pts ; 2025 : 1,5 + 1,5 pts",
        cours: `
<h3>Le modèle (à apprendre par cœur)</h3>
${J([["6..", 0, 0, "Charge (607, 601, 613, 615, 622…) — montant <b>HT</b>"], ["44566", 0, 0, "TVA déductible sur ABS — montant de la <b>TVA</b>"], ["512 / 530 / 401", 0, 0, "Banque, caisse (comptant) ou fournisseur (crédit) — montant <b>TTC</b>"]])}
<p class="small">(Les montants sont à remplacer : débit HT + débit TVA = crédit TTC.)</p>
<h3>Méthode en 5 étapes</h3>
<ol class="steps">
<li>Calcule HT, TVA, TTC (si on te donne le TTC, <b>divise par 1,2</b>).</li>
<li>Débit : le compte de <b>charge</b> pour le <b>HT</b>.</li>
<li>Débit : <b>44566</b> pour la <b>TVA</b> (créance sur l'État).</li>
<li>Crédit : <b>512</b> si payé maintenant, <b>401</b> si payé plus tard, pour le <b>TTC</b>.</li>
<li>Vérifie : HT + TVA = TTC.</li>
</ol>
<p><b>Annale 2025 (A)</b> — achat de matières premières à crédit pour 6 000 € TTC :</p>
${J([["601", 5000, 0], ["44566", 1000, 0], ["401", 0, 6000]])}
<p><b>Annale 2024</b> — honoraires 4 140 € TTC payés par virement :</p>
${J([["622", 3450, 0], ["44566", 690, 0], ["512", 0, 4140]])}
<div class="box trap"><b>Pièges</b>
• Mettre le TTC dans la charge → faux, la charge est <b>HT</b>.<br>
• Mettre la TVA au 4457 → non, sur un <b>achat</b> la TVA est <b>déductible</b> (44566).<br>
• « Payable dans 2 mois » = à crédit → <b>401</b>.</div>`,
        ex: [
          E("Achat de matières premières à crédit pour <b>6 000 € TTC</b>. TVA 20 %. <i>(Annale 2025)</i>", [["601", 5000, 0], ["44566", 1000, 0], ["401", 0, 6000]], "HT = 6 000 ÷ 1,2 = 5 000 ; TVA 1 000."),
          E("Facture d'honoraires comptables pour <b>4 140 € TTC</b>, payée par virement. TVA 20 %. <i>(Annale 2024, 3 pts)</i>", [["622", 3450, 0], ["44566", 690, 0], ["512", 0, 4140]], "HT = 4 140 ÷ 1,2 = 3 450 ; TVA 690."),
          E("Facture d'entretien pour <b>10 000 € HT</b>, paiement dans 2 mois. TVA 20 %. <i>(Annale 2025)</i>", [["615", 10000, 0], ["44566", 2000, 0], ["401", 0, 12000]], "Paiement différé → 401."),
          E("Achat de marchandises à crédit : <b>3 000 € HT</b>, TVA 20 %.", [["607", 3000, 0], ["44566", 600, 0], ["401", 0, 3600]], ""),
          E("Paiement par chèque du loyer du mois : <b>5 500 € HT</b>, TVA 20 %.", [["613", 5500, 0], ["44566", 1100, 0], ["512", 0, 6600]], "Le loyer d'un local commercial est soumis à la TVA (seule la location de logement nu est exonérée)."),
          E("Facture de publicité de <b>2 880 € TTC</b> payée en espèces. TVA 20 %.", [["623", 2400, 0], ["44566", 480, 0], ["530", 0, 2880]], "Espèces → caisse 530. HT = 2 880 ÷ 1,2 = 2 400.")
        ],
        gen: [() => {
          const [txt, acc] = pick(ACHATS); const ht = rnd(4, 200) * 50; const tva = ht * 0.2; const ttc = ht + tva;
          const pay = pick([["par virement", "512"], ["à crédit", "401"], ["payable à 30 jours", "401"], ["en espèces", "530"]]);
          const givenTTC = Math.random() < 0.5;
          return E(`Achat ${pay[0]} : ${txt} pour ${givenTTC ? fmt(ttc) + " € TTC" : fmt(ht) + " € HT"}. TVA 20 %.`, [[acc, ht, 0], ["44566", tva, 0], [pay[1], 0, ttc]], `HT ${fmt(ht)}, TVA ${fmt(tva)}, TTC ${fmt(ttc)}.`);
        }]
      },
      /* ---------------- B9 ---------------- */
      {
        id: "B9", title: "Écriture d'achat d'immobilisation avec TVA", tombe: "2025 : brevet 180 000 HT (1,5 pt)",
        cours: `
<h3>Le modèle</h3>
${J([["2..", 0, 0, "Immobilisation (205, 211, 213, 215, 2182, 2183…) — <b>HT</b>"], ["44562", 0, 0, "TVA déductible sur <b>immobilisations</b> — <b>TVA</b>"], ["512 / 404", 0, 0, "Banque (comptant) ou fournisseur d'<b>immobilisations</b> (crédit) — <b>TTC</b>"]])}
<p><b>Annale 2025 (E)</b> — brevet acquis 180 000 € HT au comptant :</p>
${J([["205", 180000, 0], ["44562", 36000, 0], ["512", 0, 216000]])}
<div class="box trap"><b>Les 3 différences avec un achat courant</b>
1. Compte <b>2</b> au lieu de 6.<br>
2. <b>44562</b> au lieu de 44566.<br>
3. À crédit : <b>404</b> au lieu de 401.</div>
<div class="box warn"><b>Cas particulier : la voiture de tourisme</b>TVA <b>non déductible</b> → on immobilise le <b>TTC</b>, sans ligne de TVA. Ex. : voiture pour le gérant 25 000 € HT → 2182 30 000 / 512 30 000. (Un véhicule <b>utilitaire</b>, lui, suit le modèle normal.)</div>
<div class="box"><b>Terrain</b>Les terrains se vendent généralement sans TVA en pratique ; au DS, suis l'énoncé : s'il dit « TVA au taux normal », applique-la.</div>`,
        ex: [
          E("Le 1er décembre N, acquisition d'un brevet pour <b>180 000 € HT</b> au comptant. TVA 20 %. <i>(Annale 2025, 1,5 pt)</i>", [["205", 180000, 0], ["44562", 36000, 0], ["512", 0, 216000]], "Immobilisation incorporelle 205, TVA sur immobilisations 44562."),
          E("Achat à crédit d'une machine-outil : <b>30 000 € HT</b>, TVA 20 %.", [["215", 30000, 0], ["44562", 6000, 0], ["404", 0, 36000]], "Fournisseur d'immobilisations → 404."),
          E("Achat par virement d'ordinateurs : <b>4 800 € TTC</b>, TVA 20 %.", [["2183", 4000, 0], ["44562", 800, 0], ["512", 0, 4800]], "HT = 4 800 ÷ 1,2 = 4 000."),
          E("Achat à crédit d'une camionnette de livraison (utilitaire) : <b>20 000 € HT</b>, TVA 20 %.", [["2182", 20000, 0], ["44562", 4000, 0], ["404", 0, 24000]], "Utilitaire → TVA déductible."),
          E("Achat par virement d'une voiture de tourisme pour le dirigeant : <b>25 000 € HT</b>, TVA 20 % <b>non récupérable</b>.", [["2182", 30000, 0], ["512", 0, 30000]], "TVA non déductible : elle fait partie du coût → immobilisation au TTC (30 000).", { hideCount: true }),
          Q("Achat d'une machine à crédit. Laquelle de ces écritures est juste ?", ["601 / 44566 / 401", "215 / 44562 / 404", "215 / 4457 / 404", "215 / 44566 / 512"], 1, "Immobilisation + TVA sur immobilisations + fournisseur d'immobilisations.")
        ],
        gen: [() => {
          const it = pick([["une machine-outil", "215"], ["un camion de livraison", "2182"], ["du matériel informatique", "2183"], ["un brevet", "205"], ["du mobilier de bureau", "2184"]]);
          const ht = rnd(2, 90) * 1000; const cr = Math.random() < 0.5;
          return E(`Acquisition ${cr ? "à crédit" : "par virement"} de ${it[0]} pour ${fmt(ht)} € HT. TVA 20 %.`, [[it[1], ht, 0], ["44562", ht * 0.2, 0], [cr ? "404" : "512", 0, ht * 1.2]], "Immobilisation HT, 44562, puis 404 ou 512 au TTC.");
        }]
      },
      /* ---------------- B10 ---------------- */
      {
        id: "B10", title: "Écriture de vente avec TVA (et paiement mixte)", tombe: "2024 : 4 pts ; 2025 : 2 pts",
        cours: `
<h3>Le modèle</h3>
${J([["411 / 512 / 530", 0, 0, "Client (crédit), banque ou caisse (comptant) — <b>TTC</b>"], ["701 / 706 / 707", 0, 0, "Vente de produits finis / services / marchandises — <b>HT</b>"], ["4457", 0, 0, "TVA collectée — <b>TVA</b>"]])}
<p>C'est l'<b>exact miroir</b> de l'achat : le client est au débit (il nous doit), la vente et la TVA collectée au crédit.</p>
<h3>Paiement mixte</h3>
<p><b>Annale 2024</b> — vente de marchandises 8 000 € HT, 60 % payés au comptant par virement, le solde à crédit :</p>
<ol class="steps"><li>TVA = 1 600 ; TTC = 9 600.</li><li>Banque = 60 % × 9 600 = 5 760 ; client = 9 600 − 5 760 = 3 840.</li></ol>
${J([["411", 3840, 0], ["512", 5760, 0], ["707", 0, 8000], ["4457", 0, 1600]])}
<p><b>Annale 2025 (B)</b> — produits finis 12 000 € HT, un tiers comptant, le solde à crédit :</p>
${J([["411", 9600, 0], ["512", 4800, 0], ["701", 0, 12000], ["4457", 0, 2400]])}
<div class="box trap"><b>Pièges</b>
• 701 (produits <b>fabriqués</b>) vs 707 (<b>marchandises</b>) vs 706 (<b>services</b>) : lis bien l'énoncé.<br>
• Vente → TVA <b>collectée</b> 4457, jamais 44566.<br>
• Le paiement partiel se calcule sur le <b>TTC</b>.</div>`,
        ex: [
          E("Vente de marchandises pour <b>8 000 € HT</b>. 60 % sont payés au comptant par virement et le solde à crédit. TVA 20 %. <i>(Annale 2024, 4 pts)</i>", [["411", 3840, 0], ["512", 5760, 0], ["707", 0, 8000], ["4457", 0, 1600]], "TTC 9 600 ; banque 5 760 ; client 3 840."),
          E("Vente de produits finis pour <b>12 000 € HT</b>. Un tiers a été payé au comptant, le solde à crédit. TVA 20 %. <i>(Annale 2025, 2 pts)</i>", [["411", 9600, 0], ["512", 4800, 0], ["701", 0, 12000], ["4457", 0, 2400]], "TTC 14 400 ; 1/3 = 4 800 ; solde 9 600."),
          E("Prestation de maintenance facturée à crédit : <b>2 000 € HT</b>, TVA 10 %.", [["411", 2200, 0], ["706", 0, 2000], ["4457", 0, 200]], "Service → 706. TVA 10 % → 200."),
          E("Vente au comptant (espèces) de marchandises : <b>1 800 € TTC</b>, TVA 20 %.", [["530", 1800, 0], ["707", 0, 1500], ["4457", 0, 300]], "HT = 1 800 ÷ 1,2 = 1 500."),
          E("Vente à crédit de produits finis : <b>25 000 € HT</b>, TVA 20 %.", [["411", 30000, 0], ["701", 0, 25000], ["4457", 0, 5000]], ""),
          Q("Dans une vente, la TVA va…", ["au débit du 44566", "au crédit du 4457", "au débit du 4457", "au crédit du 44566"], 1, "TVA collectée = dette qui augmente → crédit 4457.")
        ],
        gen: [() => {
          const [txt, acc] = pick(VENTES); const mode = rnd(0, 2);
          if (mode === 2) { const [fr, ftxt] = pick(FRACS); const ht = rnd(2, 60) * 300; const ttc = ht * 1.2; const cpt = r2(ttc * fr); return E(`Vente ${txt} pour ${fmt(ht)} € HT : ${ftxt}. TVA 20 %.`, [["411", r2(ttc - cpt), 0], ["512", cpt, 0], [acc, 0, ht], ["4457", 0, ht * 0.2]], `TTC ${fmt(ttc)} ; banque ${fmt(cpt)} ; client ${fmt(r2(ttc - cpt))}.`); }
          const ht = rnd(4, 300) * 50; const cpt = mode === 1;
          return E(`Vente ${txt} ${cpt ? "au comptant par virement" : "à crédit"} : ${fmt(ht)} € HT, TVA 20 %.`, [[cpt ? "512" : "411", ht * 1.2, 0], [acc, 0, ht], ["4457", 0, ht * 0.2]], `HT ${fmt(ht)}, TVA ${fmt(ht * 0.2)}, TTC ${fmt(ht * 1.2)}.`);
        }]
      },
      /* ---------------- B11 ---------------- */
      {
        id: "B11", title: "La liquidation de la TVA (TVA à décaisser)", tombe: "cours + 2025 « TVA due »",
        cours: `
<h3>Le principe</h3>
<p>En fin de mois, on <b>solde</b> (remet à zéro) tous les comptes de TVA et on fait apparaître la différence dans un seul compte :</p>
<ul><li>si collectée &gt; déductible → l'entreprise doit de l'argent → <b>4455 TVA à décaisser</b> (dette, au crédit) ;</li>
<li>si déductible &gt; collectée → l'État nous doit → <b>44567 Crédit de TVA</b> (créance, au débit) → voir B12.</li></ul>
<h3>Comment solder un compte ?</h3>
<p>On le passe <b>du côté opposé à son solde</b> : le 4457 a un solde créditeur → on le <b>débite</b> ; les 44566/44562 ont un solde débiteur → on les <b>créditent</b>.</p>
<p><b>Exemple du cours</b> — au 31 mars : 4457 = 5 400 ; 44566 = 2 400 ; 44562 = 2 000. Dû : 5 400 − 4 400 = 1 000.</p>
${J([["4457", 5400, 0], ["44566", 0, 2400], ["44562", 0, 2000], ["4455", 0, 1000]])}
<p>Le mois suivant, on paie :</p>
${J([["4455", 1000, 0], ["512", 0, 1000]])}
<div class="box trap"><b>Pièges</b>Inverser les côtés (mettre 4457 au crédit). Oublier un des comptes de TVA déductible. Payer la TVA par le 4457 au lieu du 4455.</div>`,
        ex: [
          N("31/03 : TVA collectée 5 400 ; TVA déductible sur ABS 2 400 ; sur immobilisations 2 000. TVA à décaisser ?", 1000, "5 400 − (2 400 + 2 000) = 1 000."),
          E("Liquide la TVA au 31/03 : 4457 solde 5 400 ; 44566 solde 2 400 ; 44562 solde 2 000.", [["4457", 5400, 0], ["44566", 0, 2400], ["44562", 0, 2000], ["4455", 0, 1000]], "On solde chaque compte du côté opposé, la différence va au 4455 (crédit)."),
          E("Le 15 avril, paiement par virement de la TVA à décaisser de <b>1 000 €</b>.", [["4455", 1000, 0], ["512", 0, 1000]], "Une dette disparaît → débit ; banque → crédit. Pas de TVA sur un paiement !"),
          E("Liquide la TVA de janvier de l'entreprise Z : 4457 solde 700 ; 44566 solde 600. <i>(D'après l'annale 2025)</i>", [["4457", 700, 0], ["44566", 0, 600], ["4455", 0, 100]], "700 − 600 = 100 à décaisser."),
          Q("Pour solder un compte 4457 au solde créditeur de 3 000, on…", ["le crédite de 3 000", "le débite de 3 000"], 1, "On le passe du côté opposé à son solde.")
        ],
        gen: [() => { const d1 = rnd(5, 40) * 100, d2 = rnd(0, 20) * 100; const c = d1 + d2 + rnd(1, 60) * 100; const due = c - d1 - d2; return E(`Liquide la TVA du mois : 4457 solde ${fmt(c)} ; 44566 solde ${fmt(d1)}${d2 ? " ; 44562 solde " + fmt(d2) : ""}.`, [["4457", c, 0], ["44566", 0, d1], ...(d2 ? [["44562", 0, d2]] : []), ["4455", 0, due]], `TVA due = ${fmt(c)} − ${fmt(d1 + d2)} = ${fmt(due)}.`); }]
      },
      /* ---------------- B12 ---------------- */
      {
        id: "B12", title: "Le crédit de TVA", tombe: "cours",
        cours: `
<p>Si la TVA déductible dépasse la TVA collectée (gros investissement du mois), c'est l'<b>État</b> qui doit de l'argent à l'entreprise : <b>crédit de TVA</b>, compte <b>44567</b> (créance → <b>débit</b>).</p>
<p><b>Exemple du cours</b> : 4457 = 5 400 ; 44566 = 2 400 ; 44562 = 3 500 (achat d'une machine) → déductible 5 900 &gt; 5 400 → crédit de 500.</p>
${J([["4457", 5400, 0], ["44567", 500, 0], ["44566", 0, 2400], ["44562", 0, 3500]])}
<ul><li>Le crédit est généralement <b>reporté</b> sur le mois suivant (il viendra diminuer la TVA due).</li>
<li>On peut en demander le <b>remboursement</b> s'il atteint au moins <b>760 €</b>.</li></ul>
<div class="box ok"><b>Réflexe</b>Calcule d'abord collectée − déductible. Positif → 4455 au crédit. Négatif → 44567 au débit.</div>`,
        ex: [
          N("4457 = 5 400 ; 44566 = 2 400 ; 44562 = 3 500. Montant du crédit de TVA ?", 500, "5 900 − 5 400 = 500."),
          E("Liquide la TVA : 4457 solde 5 400 ; 44566 solde 2 400 ; 44562 solde 3 500.", [["4457", 5400, 0], ["44567", 500, 0], ["44566", 0, 2400], ["44562", 0, 3500]], "Crédit de TVA au débit du 44567."),
          Q("Un crédit de TVA est pour l'entreprise…", ["une dette", "une créance sur l'État", "un produit"], 1, "L'État lui doit de l'argent."),
          E("Liquide la TVA : 4457 solde 2 000 ; 44566 solde 800 ; 44562 solde 4 000.", [["4457", 2000, 0], ["44567", 2800, 0], ["44566", 0, 800], ["44562", 0, 4000]], "Déductible 4 800 − collectée 2 000 = crédit de 2 800.")
        ]
      }
    ]
  });
})();
