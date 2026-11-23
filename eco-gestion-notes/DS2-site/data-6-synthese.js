/* Bloc F — Synthèse type DS */
(function () {
  BLOCS.push({
    id: "F", title: "Synthèse type DS", desc: "Balance → bilan et compte de résultat, flash cours, DS blanc chronométré.",
    skills: [
      /* ---------------- F1 ---------------- */
      {
        id: "F1", title: "Bilan et compte de résultat à partir d'une balance", tombe: "2024 : exercice 2 (6 pts)",
        cours: `
<h3>Méthode : on range chaque solde dans sa case</h3>
${TB(["Compte (solde)", "Case"], [
          ["101, 106", "Capitaux propres : capital, réserves"], ["Résultat", "= produits − charges (à calculer !)"], ["164", "Dettes : emprunts"], ["401, 404", "Dettes fournisseurs"], ["43, 44 (créditeurs)", "Dettes fiscales et sociales"],
          ["20… / 280…", "Immobilisations incorporelles : brut / A&D"], ["21… / 281…", "Immobilisations corporelles : brut / A&D (additionner 215 + 2183…)"],
          ["3…", "Stocks"], ["411", "Créances clients"], ["50 / 590", "VMP : brut / A&D"], ["512 + 530", "Disponibilités"],
          ["607, 6037, 61-62, 641, 661, 681, 686, 657", "Charges (par nature)"], ["707, 781, 757", "Produits"]
        ])}
<h3>Annale 2024 (entreprise B, en milliers) — corrigé</h3>
<p><b>Bilan</b> — Actif : immob. incorporelles 5 / 2 / 3 ; immob. corporelles 80 (40 + 40) / 10 / 70 ; stock 18 ; clients 28 ; VMP 5 / 2 / 3 ; disponibilités 43 (41 + 2). Total brut 179, A&D 14, net <b>165</b>.<br>
Passif : capital 60 ; réserves 20 ; résultat <b>− 10</b> ; emprunt 70 ; fournisseurs 19 ; dettes fiscales et sociales 6 (2 + 4). Total <b>165</b>.</p>
<p><b>Compte de résultat</b> — Charges : achats de marchandises 100 ; variation de stock 12 ; autres achats et charges externes 47 (20 + 21 + 6) ; personnel 35 ; DADP exploitation 11 ; intérêts 4 ; DADP financières 2 ; VCEA 3 → <b>214</b>. Produits : ventes 200 ; RADP 2 ; produits de cession 2 → 204 ; <b>perte 10</b>.</p>
<div class="box trap"><b>Pièges</b>Additionner les comptes de même nature (215 + 2183 ; 616 + 622 + 625 ; 512 + 530). Les comptes 28 et 590 vont dans la colonne A&D, pas au passif. Le résultat doit être le même au bilan et au CR.</div>`,
        ex: [
          T("<b>Annale 2024 — bilan</b> (en milliers). Balance : 101 = 60 C ; 106 = 20 C ; 164 = 70 C ; 205 = 5 D ; 215 = 40 D ; 2183 = 40 D ; 280 = 2 C ; 281 = 10 C ; 37 = 18 D ; 401 = 19 C ; 411 = 28 D ; 43 = 2 C ; 44 = 4 C ; 50 = 5 D ; 512 = 41 D ; 530 = 2 D ; 590 = 2 C. Le résultat est une perte de 10.", ["Poste", "Brut", "A&D", "Net"], [
            ["Immobilisations incorporelles", { a: 5 }, { a: 2 }, { a: 3 }], ["Immobilisations corporelles", { a: 80 }, { a: 10 }, { a: 70 }], ["Stock", { a: 18 }, "", { a: 18 }], ["Créances clients", { a: 28 }, "", { a: 28 }], ["VMP", { a: 5 }, { a: 2 }, { a: 3 }], ["Disponibilités", { a: 43 }, "", { a: 43 }], ["Total actif", { a: 179 }, { a: 14 }, { a: 165 }]
          ], "Corporelles = 215 + 2183 ; disponibilités = 512 + 530."),
          T("<b>Annale 2024 — passif</b> (même balance).", ["Poste", "Montant"], [["Capital", { a: 60 }], ["Réserves", { a: 20 }], ["Résultat (signe −)", { a: -10 }], ["Emprunts", { a: 70 }], ["Dettes fournisseurs", { a: 19 }], ["Dettes fiscales et sociales", { a: 6 }], ["Total passif", { a: 165 }]], "Dettes fiscales et sociales = 43 + 44."),
          T("<b>Annale 2024 — compte de résultat</b>. Soldes : 6037 = 12 D ; 607 = 100 D ; 616 = 20 D ; 622 = 21 D ; 625 = 6 D ; 641 = 35 D ; 661 = 4 D ; 675 (VCEA) = 3 D ; 681 = 11 D ; 686 = 2 D ; 707 = 200 C ; 775 (PCEA) = 2 C ; 781 = 2 C.", ["Poste", "Montant"], [
            ["Achats de marchandises", { a: 100 }], ["Variation de stock de marchandises", { a: 12 }], ["Autres achats et charges externes", { a: 47 }], ["Charges de personnel", { a: 35 }], ["DADP exploitation", { a: 11 }], ["Charges d'intérêts", { a: 4 }], ["DADP financières", { a: 2 }], ["VCEA (charges exceptionnelles)", { a: 3 }], ["Total charges", { a: 214 }], ["Total produits", { a: 204 }], ["Perte", { a: 10 }]
          ], "Autres achats et charges externes = 616 + 622 + 625 = 47.")
        ]
      },
      /* ---------------- F2 ---------------- */
      {
        id: "F2", title: "Questions de cours en flash", tombe: "3 pts garantis",
        cours: `<p>La partie cours vaut 3 points et se prépare <b>par cœur</b>. Pour chaque carte : réponds à voix haute ou par écrit, puis compare. Barème : 0,5 par idée pertinente — <b>donne toujours 3 idées</b>.</p>`,
        ex: [
          F("Définir l'amortissement.", "Répartition du coût d'une immobilisation sur sa durée d'utilisation ; perte de valeur <b>irréversible</b> (usure, obsolescence, droit limité) ; charge (681) sur le HT ; à l'inventaire ; commence à la mise en service."),
          F("Définir la dépréciation. Différence avec l'amortissement ?", "Perte de valeur <b>probable et réversible</b> d'un actif (valeur actuelle &lt; VNC) ; principe de prudence ; peut être reprise (781/786) ; concerne presque tous les actifs. L'amortissement, lui, est irréversible et ne concerne que les immobilisations à durée limitée."),
          F("Expliquer l'écriture de régularisation des stocks.", "Les stocks ne sont pas mouvementés pendant l'exercice → soldes faux en fin d'année → on annule le stock initial (603x / 3x) et on constate le stock final (3x / 603x) ; 7135 pour les produits finis."),
          F("Les 3 conditions d'imposition à la TVA.", "Art. 256-I CGI : livraison de bien ou prestation de service ; à titre onéreux ; par un assujetti (activité habituelle et indépendante)."),
          F("Deux opérations non imposées à la TVA.", "Non imposable : musicien de rue (pas de lien direct), particulier, emprunt. Imposable mais exonérée : prestation médicale, location d'immeuble nu à usage d'habitation, enseignement."),
          F("Pourquoi la TVA est-elle neutre pour l'entreprise ?", "Elle collecte la TVA sur ses ventes et déduit celle de ses achats : elle ne reverse que la différence ; c'est le consommateur final qui supporte l'impôt ; la TVA n'est ni une charge ni un produit."),
          F("TVA collectée / TVA déductible : définitions et comptes.", "Collectée : facturée aux clients, dette envers l'État, 4457. Déductible : payée aux fournisseurs, créance sur l'État, 44566 (ABS) ou 44562 (immobilisations)."),
          F("Différence remise / rabais / ristourne / escompte.", "Remise : importance du client. Rabais : défaut / incident. Ristourne : fin de période selon CA. (Toutes commerciales.) Escompte : paiement anticipé, réduction financière (665 / 765)."),
          F("Qu'est-ce qu'une facture d'avoir ?", "Facture émise par le vendeur constatant qu'il doit une somme au client (retour, réduction après coup, escompte) ; enregistrée en contrepassation de la facture de doit."),
          F("Qu'est-ce que le principe de prudence ?", "Prendre en compte un risque (perte probable) dès qu'il apparaît, sans attendre qu'il se réalise ; les plus-values latentes ne sont pas constatées. → dépréciations, provisions."),
          F("Qu'est-ce que la VNC ?", "Valeur nette comptable = valeur brute (coût d'acquisition HT) − amortissements et dépréciations cumulés."),
          F("Qu'est-ce que la partie double ?", "Toute écriture mouvemente au moins deux comptes ; le total des débits est toujours égal au total des crédits.")
        ]
      },
      /* ---------------- F3 ---------------- */
      {
        id: "F3", title: "DS blanc (1 h, format officiel)", tombe: "conditions réelles", timer: 60,
        cours: `<p>Sujet inédit au format des annales 2024-2025 : 3 points de cours, puis des écritures avec TVA (taux normal 20 %), un amortissement, une cession, une facture, une liquidation de TVA et un bilan après opérations. Lance le chrono, ouvre le 📒 plan comptable comme le jour J, et ne regarde aucune correction avant la fin.</p>
<div class="box warn"><b>Rappel de barème</b>0,5 pt par compte juste + 0,5 pt par montant juste. Un document de synthèse ne rapporte ses points que s'il est <b>entièrement</b> juste.</div>`,
        ex: [
          F("<b>Cours (1,5 pt)</b> — Définir la dépréciation et la distinguer de l'amortissement.", "Perte de valeur probable et réversible (Va &lt; VNC), prudence, reprise possible, concerne presque tout l'actif ; l'amortissement est irréversible et propre aux immobilisations à durée d'utilisation limitée."),
          F("<b>Cours (1,5 pt)</b> — Distinguer une opération non imposable d'une opération exonérée, avec un exemple chacune.", "Non imposable : une des 3 conditions de l'art. 256-I manque (ex. musicien de rue). Exonérée : les 3 conditions sont réunies mais un texte écarte la TVA (ex. consultation médicale)."),
          E("<b>Op. 1</b> — Vente de marchandises pour 15 000 € HT. 40 % sont payés au comptant par virement, le solde à crédit.", [["411", 10800, 0], ["512", 7200, 0], ["707", 0, 15000], ["4457", 0, 3000]], "TTC 18 000 ; 40 % = 7 200 ; solde 10 800.", { hideCount: true }),
          E("<b>Op. 2</b> — Facture de téléphone de 540 € TTC, payée par virement.", [["626", 450, 0], ["44566", 90, 0], ["512", 0, 540]], "540 ÷ 1,2 = 450.", { hideCount: true }),
          E("<b>Op. 3</b> — Le 1er octobre N, achat à crédit d'une machine-outil pour 48 000 € HT, amortissable en linéaire sur 8 ans. Comptabilise l'acquisition.", [["215", 48000, 0], ["44562", 9600, 0], ["404", 0, 57600]], "Immobilisation → 44562 et 404.", { hideCount: true }),
          N("<b>Op. 3 (suite)</b> — Dotation aux amortissements de N ?", 1500, "48 000 ÷ 8 = 6 000 ; × 3/12 = 1 500."),
          E("<b>Op. 3 (suite)</b> — Comptabilise la dotation de N.", [["681", 1500, 0], ["2815", 0, 1500]], "", { hideCount: true }),
          E("<b>Op. 4</b> — Chez le vendeur : facture de marchandises, brut 10 000 € HT, remise 10 %, escompte 2 %, à crédit.", [["411", 10584, 0], ["665", 180, 0], ["707", 0, 9000], ["4457", 0, 1764]], "NC 9 000 ; escompte 180 ; NF 8 820 ; TVA 1 764 ; NAP 10 584.", { hideCount: true }),
          E("<b>Op. 5 ①</b> — Un camion acquis 40 000 € HT le 1/1/N−2 (amorti sur 5 ans) est cédé à crédit le 30/09/N pour 22 000 € HT. Comptabilise la cession.", [["462", 26400, 0], ["757", 0, 22000], ["4457", 0, 4400]], "À crédit → 462.", { hideCount: true }),
          E("<b>Op. 5 ②</b> — Complément de dotation de N.", [["681", 6000, 0], ["28182", 0, 6000]], "8 000 × 9/12 = 6 000.", { hideCount: true }),
          E("<b>Op. 5 ③</b> — Sortie du bilan au 31/12/N.", [["28182", 22000, 0], ["657", 18000, 0], ["2182", 0, 40000]], "Cumul 8 000 × 2 + 6 000 = 22 000 ; VNC 18 000.", { hideCount: true }),
          N("<b>Op. 5</b> — Résultat de la cession ?", 4000, "22 000 − 18 000 = + 4 000 (plus-value)."),
          E("<b>Op. 6</b> — Liquidation de la TVA : 4457 solde 9 200 ; 44566 solde 3 100 ; 44562 solde 9 600.", [["4457", 9200, 0], ["44567", 3500, 0], ["44566", 0, 3100], ["44562", 0, 9600]], "Déductible 12 700 > collectée 9 200 → crédit de TVA 3 500.", { hideCount: true }),
          E("<b>Op. 7</b> — Au 31/12/N, la créance d'un client (7 200 € TTC) devient douteuse ; on n'espère en récupérer que 25 %. Passe les écritures.", [["416", 7200, 0], ["411", 0, 7200], ["681", 4500, 0], ["491", 0, 4500]], "HT 6 000 × 75 % = 4 500.", { hideCount: true }),
          T("<b>Op. 8 (2 pts)</b> — Bilan avant les écritures de l'op. 3 : AI brut 200 000, A&D 40 000 ; AC 90 000 ; capitaux propres hors résultat 120 000 ; résultat 15 000 ; dettes 115 000. Présente le bilan après l'acquisition de la machine et sa dotation.", ["Poste", "Après"], [["AI brut", { a: 248000 }], ["AI A&D", { a: 41500 }], ["Actif circulant", { a: 99600 }], ["Résultat", { a: 13500 }], ["Dettes", { a: 172600 }], ["Total actif net", { a: 306100 }]], "Brut + 48 000 ; A&D + 1 500 ; AC + 9 600 (44562) ; dettes + 57 600 (404) ; résultat − 1 500. Contrôle : 206 500 + 99 600 = 306 100 = 120 000 + 13 500 + 172 600.")
        ]
      }
    ]
  });
})();
