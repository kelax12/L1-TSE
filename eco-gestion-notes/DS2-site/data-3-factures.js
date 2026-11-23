/* Bloc C — Créer et enregistrer des factures (réductions de prix) */
(function () {
  function cascade(brut, reds, esc) {
    // reds : liste de taux commerciaux successifs ; esc : taux d'escompte (ou 0)
    let base = brut; const lignes = [];
    reds.forEach(([nom, t]) => { const m = r2(base * t); lignes.push([nom, t, m]); base = r2(base - m); });
    const nc = base; const e = r2(nc * esc); const nf = r2(nc - e); const tva = r2(nf * 0.2); const nap = r2(nf + tva);
    return { lignes, nc, e, nf, tva, nap };
  }
  function factureTable(brut, reds, esc) {
    const c = cascade(brut, reds, esc);
    const rows = [["Montant brut HT", brut]];
    c.lignes.forEach(([nom, t, m], i) => { rows.push([`${nom} ${fmt(t * 100)} %`, { a: m }]); if (i < c.lignes.length - 1) rows.push(["= Sous-total", { a: r2(brut - c.lignes.slice(0, i + 1).reduce((s, l) => s + l[2], 0)) }]); });
    rows.push(["= <b>Net commercial</b>", { a: c.nc }]);
    if (esc) { rows.push([`Escompte ${fmt(esc * 100)} %`, { a: c.e }]); rows.push(["= <b>Net financier</b>", { a: c.nf }]); }
    rows.push(["TVA 20 %", { a: c.tva }]); rows.push(["= <b>Net à payer TTC</b>", { a: c.nap }]);
    return { rows, c };
  }
  const RED_NOMS = ["Remise", "Rabais", "Remise supplémentaire"];

  BLOCS.push({
    id: "C", title: "Créer et enregistrer des factures", desc: "Facture de doit / d'avoir, remise, rabais, ristourne, escompte : construire la facture puis l'enregistrer des deux côtés.",
    skills: [
      /* ---------------- C1 ---------------- */
      {
        id: "C1", title: "La facture : doit, avoir, mentions", tombe: "cours",
        cours: `
<ul>
<li>La facture est un document <b>obligatoire</b> et réglementé, <b>toujours émis par le VENDEUR</b> (le fournisseur), jamais par l'acheteur.</li>
<li><b>Mentions obligatoires</b> : identité du vendeur et du client, <b>numéro de TVA</b> du vendeur, <b>date</b>, <b>numéro</b> (chronologique, sans trou), désignation des biens/services, prix unitaires, réductions, montants <b>HT</b>, <b>TVA</b>, <b>TTC</b>.</li>
<li>Sans facture, l'acheteur ne peut déduire <b>ni la charge ni la TVA</b>.</li>
</ul>
${TB(["Type", "Émise par", "Constate que…", "Cas"], [["<b>Facture de doit</b>", "le vendeur", "le <b>client doit</b> une somme au vendeur", "la vente normale"], ["<b>Facture d'avoir</b>", "le vendeur", "le <b>vendeur doit</b> une somme au client", "retour de marchandises, réduction accordée après coup, escompte pour paiement anticipé"]])}
<div class="box"><b>Facture électronique</b>Un PDF envoyé par mail n'est <b>pas</b> une facture électronique : c'est un fichier structuré généré par un logiciel et transmis via une plateforme. Obligatoire vers l'administration depuis 2020, et progressivement pour les entreprises depuis le 1er septembre 2026. But de l'État : suivre l'activité en temps réel et <b>lutter contre la fraude à la TVA</b>.</div>
<div class="box ok"><b>La règle comptable qui découle de tout ça</b>Une facture d'avoir s'enregistre comme la facture de doit <b>à l'envers</b> (contrepassation) : ce qui était au débit passe au crédit et inversement.</div>`,
        ex: [
          Q("Qui émet une facture d'avoir ?", ["Le client", "Le vendeur (fournisseur)", "L'État", "La banque"], 1, "Toute facture, doit ou avoir, est émise par le vendeur."),
          Q("Une facture d'avoir constate que…", ["le client doit de l'argent au vendeur", "le vendeur doit de l'argent au client (ou réduit sa créance)", "l'État doit de la TVA"], 1, ""),
          M("Coche les mentions obligatoires d'une facture.", ["Numéro de TVA du vendeur", "Date et numéro chronologique", "Montants HT, TVA, TTC", "Le chiffre d'affaires annuel du client", "Identité du vendeur et du client"], [0, 1, 2, 4], ""),
          Q("Un PDF de facture envoyé par mail est-il une facture électronique ?", ["Oui", "Non : il faut un format structuré transmis via une plateforme"], 1, ""),
          Q("Comment enregistre-t-on une facture d'avoir pour retour total ?", ["Comme une nouvelle vente", "En contrepassant (inversant) l'écriture de la facture de doit", "On ne l'enregistre pas"], 1, "")
        ]
      },
      /* ---------------- C2 ---------------- */
      {
        id: "C2", title: "Remise, rabais, ristourne, escompte", tombe: "cours",
        cours: `
${TB(["Réduction", "Nature", "Pourquoi ?", "Mémo"], [
          ["<b>Remise</b>", "commerciale", "importance ou qualité du <b>client</b> (gros client, professionnel)", "« re<b>mi</b>se = clie<b>nt</b> »"],
          ["<b>Rabais</b>", "commerciale", "défaut de <b>qualité</b>, fin de série, <b>incident</b> (casse, retard)", "« rabais = défaut »"],
          ["<b>Ristourne</b>", "commerciale", "en <b>fin de période</b>, selon le chiffre d'affaires réalisé (fidélité)", "« ristourne = fin d'année »"],
          ["<b>Escompte</b>", "<b>financière</b>", "le client <b>paie en avance</b>", "« escompte = paiement comptant »"]
        ])}
<h3>Ce que ça change en comptabilité</h3>
<div class="box ok"><b>Sur la facture de doit</b>Réductions <b>commerciales</b> : <b>on ne les enregistre pas</b>, on comptabilise directement le <b>net commercial</b>.<br>Escompte : <b>toujours enregistré</b> → <b>665 Escompte accordé</b> (charge financière du vendeur) / <b>765 Escompte obtenu</b> (produit financier de l'acheteur).</div>
<div class="box ok"><b>Sur une facture d'avoir (après coup)</b>Réductions commerciales → <b>709</b> RRR accordés (vendeur) / <b>609</b> RRR obtenus (acheteur). Escompte → toujours 665 / 765.</div>
<p>Pourquoi l'escompte est-il financier ? Le client qui paie en avance « prête » sa trésorerie au vendeur : le vendeur paie une sorte d'intérêt (charge financière), le client en reçoit un (produit financier).</p>`,
        ex: [
          Q("Réduction accordée parce que les marchandises sont arrivées abîmées :", ["Remise", "Rabais", "Ristourne", "Escompte"], 1, "Incident / défaut → rabais."),
          Q("Réduction de 2 % accordée en fin d'année car le client a dépassé 1 M€ de CA :", ["Remise", "Rabais", "Ristourne", "Escompte"], 2, "Fin de période + chiffre d'affaires → ristourne."),
          Q("Réduction de 10 % car le client est un professionnel qui achète en grosse quantité :", ["Remise", "Rabais", "Ristourne", "Escompte"], 0, "Qualité / importance du client → remise."),
          Q("Réduction de 2 % pour paiement sous 8 jours :", ["Remise", "Rabais", "Ristourne", "Escompte"], 3, "Paiement anticipé → escompte."),
          Q("Chez le vendeur, l'escompte accordé est enregistré au…", ["709", "665", "765", "609"], 1, "Charge financière 665."),
          Q("Chez l'acheteur, l'escompte obtenu est enregistré au…", ["609", "665", "765", "709"], 2, "Produit financier 765."),
          Q("Une remise figurant sur la facture de doit s'enregistre…", ["au 709", "au 609", "nulle part : on enregistre le net commercial", "au 665"], 2, "Les réductions commerciales de la facture initiale n'apparaissent pas dans l'écriture.")
        ]
      },
      /* ---------------- C3 ---------------- */
      {
        id: "C3", title: "Construire une facture (calcul en cascade)", tombe: "« créer la facture »",
        cours: `
<h3>L'ordre est TOUJOURS le même</h3>
<ol class="steps">
<li><b>Montant brut HT</b> = quantité × prix unitaire.</li>
<li>Réductions <b>commerciales</b> (remise, rabais, ristourne), <b>en cascade</b> : chacune s'applique au montant <b>restant</b>, pas au brut.</li>
<li>= <b>Net commercial</b>.</li>
<li>Escompte (s'il y en a un), calculé sur le <b>net commercial</b>.</li>
<li>= <b>Net financier</b>.</li>
<li><b>TVA</b> = net financier × 20 %.</li>
<li>= <b>Net à payer TTC</b> = net financier + TVA.</li>
</ol>
<p><b>Exemple du cours</b> :</p>
${TB(["", "Montant"], [["Marchandises (brut)", 20000], ["Remise 10 %", "− 2 000"], ["= Sous-total", 18000], ["Rabais 30 % (sur 18 000 !)", "− 5 400"], ["= <b>Net commercial</b>", 12600], ["Escompte 2 %", "− 252"], ["= <b>Net financier</b>", 12348], ["TVA 20 %", "2 469,60"], ["= <b>Net à payer</b>", "14 817,60"]])}
<div class="box trap"><b>Pièges</b>
• Additionner les taux (10 % + 30 % = 40 % du brut → 8 000) : <b>faux</b>, c'est 2 000 + 5 400 = 7 400.<br>
• Calculer la TVA sur le brut ou sur le net commercial alors qu'il y a un escompte : la TVA se calcule sur le <b>net financier</b>.</div>`,
        ex: [
          N("Brut 20 000 €, remise 10 % puis rabais 30 %. Montant du rabais ?", 5400, "Remise 2 000 → reste 18 000 ; rabais 30 % × 18 000 = 5 400."),
          N("Même facture : net commercial ?", 12600, "18 000 − 5 400 = 12 600."),
          N("Net commercial 12 600, escompte 2 %. Net financier ?", 12348, "Escompte 252 → 12 348."),
          N("Net financier 12 348. Net à payer TTC (TVA 20 %) ?", 14817.6, "TVA 2 469,60 → 14 817,60."),
          T("Crée la facture : 100 articles à 50 € HT ; remise 5 % ; escompte 1 % ; TVA 20 %.", ["Ligne", "Montant"], factureTable(5000, [["Remise", 0.05]], 0.01).rows, "Brut 5 000 ; remise 250 ; NC 4 750 ; escompte 47,50 ; NF 4 702,50 ; TVA 940,50 ; net à payer 5 643."),
          T("Crée la facture : brut 12 000 € HT ; remise 10 % ; remise supplémentaire 5 % ; escompte 2 % ; TVA 20 %.", ["Ligne", "Montant"], factureTable(12000, [["Remise", 0.1], ["Remise supplémentaire", 0.05]], 0.02).rows, "1 200 → 10 800 ; 540 → 10 260 ; escompte 205,20 → 10 054,80 ; TVA 2 010,96 ; net à payer 12 065,76."),
          T("Crée la facture : brut 8 000 € HT ; rabais 15 % (fin de série) ; pas d'escompte ; TVA 20 %.", ["Ligne", "Montant"], factureTable(8000, [["Rabais", 0.15]], 0).rows, "Rabais 1 200 ; NC 6 800 ; TVA 1 360 ; net à payer 8 160.")
        ],
        gen: [() => {
          const brut = rnd(10, 200) * 100; const n = rnd(1, 2); const reds = [];
          for (let i = 0; i < n; i++) reds.push([RED_NOMS[i], pick([0.05, 0.1, 0.15, 0.2])]);
          const esc = pick([0, 0.01, 0.02]);
          const ft = factureTable(brut, reds, esc);
          return T(`Crée la facture : brut ${fmt(brut)} € HT ; ${reds.map(r => r[0].toLowerCase() + " " + fmt(r[1] * 100) + " %").join(" puis ")}${esc ? " ; escompte " + fmt(esc * 100) + " %" : " ; pas d'escompte"} ; TVA 20 %.`, ["Ligne", "Montant"], ft.rows, "Cascade : chaque réduction s'applique au montant restant ; TVA sur le net financier.");
        }]
      },
      /* ---------------- C4 ---------------- */
      {
        id: "C4", title: "Enregistrer la facture chez le VENDEUR", tombe: "écriture de vente avec réductions",
        cours: `
<h3>Modèle</h3>
${J([["411", 0, 0, "Clients — <b>net à payer TTC</b>"], ["665", 0, 0, "Escompte accordé — <b>montant de l'escompte</b>"], ["707 / 701 / 706", 0, 0, "Ventes — <b>net commercial</b>"], ["4457", 0, 0, "TVA collectée — <b>TVA</b>"]])}
<p><b>Exemple du cours</b> (facture de C3 : NC 12 600, escompte 252, TVA 2 469,60, NAP 14 817,60) :</p>
${J([["411", 14817.6, 0], ["665", 252, 0], ["707", 0, 12600], ["4457", 0, 2469.6]])}
<div class="box ok"><b>Pourquoi ça s'équilibre ?</b>Débit : 14 817,60 + 252 = 15 069,60. Crédit : 12 600 + 2 469,60 = 15 069,60. La vente est enregistrée au net commercial ; l'escompte est une charge à part.</div>
<div class="box trap"><b>Pièges</b>Mettre la remise ou le rabais dans l'écriture (non, ils ont déjà été déduits). Mettre l'escompte au crédit (non, c'est une <b>charge</b> pour le vendeur → débit).</div>`,
        ex: [
          E("Enregistre chez le <b>vendeur</b> la facture de marchandises : net commercial 12 600 ; escompte 252 ; TVA 2 469,60 ; net à payer 14 817,60.", [["411", 14817.6, 0], ["665", 252, 0], ["707", 0, 12600], ["4457", 0, 2469.6]], ""),
          E("Enregistre chez le <b>vendeur</b> : 100 articles (marchandises) à 50 € HT ; remise 5 % ; escompte 1 % ; TVA 20 % ; vente à crédit.", [["411", 5643, 0], ["665", 47.5, 0], ["707", 0, 4750], ["4457", 0, 940.5]], "NC 4 750 ; escompte 47,50 ; NF 4 702,50 ; TVA 940,50 ; NAP 5 643."),
          E("Enregistre chez le <b>vendeur</b> (fabricant) : produits finis brut 8 000 € HT ; rabais 15 % ; pas d'escompte ; TVA 20 % ; à crédit.", [["411", 8160, 0], ["701", 0, 6800], ["4457", 0, 1360]], "Pas d'escompte → pas de 665. NC 6 800."),
          Q("Chez le vendeur, la vente est enregistrée pour…", ["le brut", "le net commercial", "le net financier", "le TTC"], 1, "")
        ],
        gen: [() => { const brut = rnd(10, 150) * 100; const t = pick([0.05, 0.1, 0.2]); const esc = pick([0.01, 0.02]); const c = cascade(brut, [["Remise", t]], esc); return E(`Enregistre chez le <b>vendeur</b> : marchandises brut ${fmt(brut)} € HT ; remise ${fmt(t * 100)} % ; escompte ${fmt(esc * 100)} % ; TVA 20 % ; à crédit.`, [["411", c.nap, 0], ["665", c.e, 0], ["707", 0, c.nc], ["4457", 0, c.tva]], `NC ${fmt(c.nc)} ; escompte ${fmt(c.e)} ; NF ${fmt(c.nf)} ; TVA ${fmt(c.tva)} ; NAP ${fmt(c.nap)}.`); }]
      },
      /* ---------------- C5 ---------------- */
      {
        id: "C5", title: "Enregistrer la facture chez l'ACHETEUR", tombe: "écriture d'achat avec réductions",
        cours: `
<h3>Modèle (miroir du vendeur)</h3>
${J([["607 / 601…", 0, 0, "Achats — <b>net commercial</b>"], ["44566", 0, 0, "TVA déductible — <b>TVA</b>"], ["765", 0, 0, "Escompte obtenu — <b>escompte</b>"], ["401", 0, 0, "Fournisseurs — <b>net à payer TTC</b>"]])}
<p><b>Même facture, côté client</b> :</p>
${J([["607", 12600, 0], ["44566", 2469.6, 0], ["765", 0, 252], ["401", 0, 14817.6]])}
<div class="box ok"><b>Astuce miroir</b>${TB(["Vendeur", "Acheteur"], [["411 (débit)", "401 (crédit)"], ["665 (débit)", "765 (crédit)"], ["707 (crédit)", "607 (débit)"], ["4457 (crédit)", "44566 (débit)"]])}</div>`,
        ex: [
          E("Enregistre chez l'<b>acheteur</b> : marchandises, net commercial 12 600 ; escompte 252 ; TVA 2 469,60 ; net à payer 14 817,60.", [["607", 12600, 0], ["44566", 2469.6, 0], ["765", 0, 252], ["401", 0, 14817.6]], ""),
          E("Enregistre chez l'<b>acheteur</b> : 100 articles (marchandises) à 50 € HT ; remise 5 % ; escompte 1 % ; TVA 20 % ; à crédit.", [["607", 4750, 0], ["44566", 940.5, 0], ["765", 0, 47.5], ["401", 0, 5643]], ""),
          E("Enregistre chez l'<b>acheteur</b> : matières premières brut 20 000 € HT ; remise 10 % ; escompte 2 % ; TVA 20 % ; à crédit.", [["601", 18000, 0], ["44566", 3528, 0], ["765", 0, 360], ["401", 0, 21168]], "NC 18 000 ; escompte 360 ; NF 17 640 ; TVA 3 528 ; NAP 21 168."),
          Q("L'escompte obtenu chez l'acheteur est…", ["une charge au débit", "un produit financier au crédit", "une réduction du 607"], 1, "")
        ],
        gen: [() => { const brut = rnd(10, 150) * 100; const t = pick([0.05, 0.1, 0.2]); const esc = pick([0.01, 0.02]); const c = cascade(brut, [["Remise", t]], esc); return E(`Enregistre chez l'<b>acheteur</b> : marchandises brut ${fmt(brut)} € HT ; remise ${fmt(t * 100)} % ; escompte ${fmt(esc * 100)} % ; TVA 20 % ; à crédit.`, [["607", c.nc, 0], ["44566", c.tva, 0], ["765", 0, c.e], ["401", 0, c.nap]], `NC ${fmt(c.nc)} ; escompte ${fmt(c.e)} ; TVA ${fmt(c.tva)} ; NAP ${fmt(c.nap)}.`); }]
      },
      /* ---------------- C6 ---------------- */
      {
        id: "C6", title: "Facture d'avoir : retour de marchandises", tombe: "contrepassation",
        cours: `
<p>Un retour = annulation (totale ou partielle) de la vente. Le vendeur émet une <b>facture d'avoir</b>, et chacun <b>contrepasse</b> (inverse) l'écriture d'origine, pour le montant retourné.</p>
<p><b>Exemple</b> — vente à crédit de 100 unités à 10 € (1 000 HT, 200 TVA, 1 200 TTC), puis retour total :</p>
${TB(["Chez le vendeur", "Chez le client"], [[J(["Facture de doit", ["411", 1200, 0], ["707", 0, 1000], ["4457", 0, 200], "Facture d'avoir (retour)", ["707", 1000, 0], ["4457", 200, 0], ["411", 0, 1200]]), J(["Facture de doit", ["607", 1000, 0], ["44566", 200, 0], ["401", 0, 1200], "Facture d'avoir (retour)", ["401", 1200, 0], ["607", 0, 1000], ["44566", 0, 200]])]])}
<div class="box"><b>Pour un retour, on utilise les comptes 707 et 607</b> (pas 709 / 609, réservés aux rabais, remises et ristournes).</div>`,
        ex: [
          E("<b>Chez le vendeur</b> : le client retourne la totalité d'une livraison de marchandises de 1 000 € HT (TVA 20 %) vendue à crédit. Enregistre la facture d'avoir.", [["707", 1000, 0], ["4457", 200, 0], ["411", 0, 1200]], "Contrepassation de la vente."),
          E("<b>Chez le client</b> : même retour (1 000 € HT). Enregistre la facture d'avoir reçue.", [["401", 1200, 0], ["607", 0, 1000], ["44566", 0, 200]], "Contrepassation de l'achat."),
          E("<b>Chez le vendeur</b> : sur 100 unités vendues à 10 € HT, le client en retourne 30 (TVA 20 %).", [["707", 300, 0], ["4457", 60, 0], ["411", 0, 360]], "Retour partiel : 30 × 10 = 300 HT."),
          E("<b>Chez le client</b> : retour de matières premières défectueuses pour 2 400 € TTC (TVA 20 %).", [["401", 2400, 0], ["601", 0, 2000], ["44566", 0, 400]], "HT 2 000.")
        ]
      },
      /* ---------------- C7 ---------------- */
      {
        id: "C7", title: "Facture d'avoir : réduction commerciale après coup (709 / 609)", tombe: "rabais, ristourne",
        cours: `
<p>Quand la réduction commerciale est accordée <b>après</b> la facture (casse constatée à la livraison, ristourne de fin d'année), elle passe par une <b>facture d'avoir</b> et on l'enregistre dans des comptes dédiés :</p>
<ul><li>Vendeur : <b>709 Rabais, remises, ristournes accordés</b> (à la place du 707).</li><li>Acheteur : <b>609 RRR obtenus</b> (à la place du 607).</li></ul>
<p><b>Exemple</b> — marchandises abîmées : rabais de 15 % sur 1 000 € HT → 150 HT, 30 TVA, 180 TTC.</p>
${TB(["Vendeur", "Acheteur"], [[J([["709", 150, 0], ["4457", 30, 0], ["411", 0, 180]]), J([["401", 180, 0], ["609", 0, 150], ["44566", 0, 30]])]])}
<div class="box trap"><b>Piège</b>Ne pas oublier la TVA : la réduction diminue aussi la TVA collectée (vendeur) et déductible (acheteur).</div>`,
        ex: [
          E("<b>Vendeur</b> : rabais de 15 % accordé par facture d'avoir sur une vente de marchandises de 1 000 € HT (TVA 20 %), le client garde la marchandise abîmée.", [["709", 150, 0], ["4457", 30, 0], ["411", 0, 180]], ""),
          E("<b>Acheteur</b> : même rabais reçu (15 % de 1 000 € HT).", [["401", 180, 0], ["609", 0, 150], ["44566", 0, 30]], ""),
          E("<b>Vendeur</b> : ristourne de fin d'année de 2 % sur un chiffre d'affaires de 50 000 € HT réalisé avec le client (TVA 20 %).", [["709", 1000, 0], ["4457", 200, 0], ["411", 0, 1200]], "2 % × 50 000 = 1 000 HT."),
          E("<b>Acheteur</b> : même ristourne (2 % de 50 000 € HT).", [["401", 1200, 0], ["609", 0, 1000], ["44566", 0, 200]], ""),
          Q("Une remise figurant <b>directement</b> sur la facture de doit s'enregistre au 709 ?", ["Oui", "Non : seulement celles accordées après coup, par avoir"], 1, "")
        ]
      },
      /* ---------------- C8 ---------------- */
      {
        id: "C8", title: "Escompte conditionnel : règlement + avoir", tombe: "cas complet",
        cours: `
<p>Souvent la facture <b>mentionne</b> seulement l'escompte (« 2 % si paiement sous 8 jours ») sans le déduire. Si le client paie à temps, il déduit l'escompte, puis le vendeur émet une <b>facture d'avoir</b>.</p>
<p><b>Exemple du cours</b> — 5/06 : vente 1 000 € HT (1 200 TTC), escompte 2 % pour paiement sous huitaine. 10/06 : le client paie en déduisant l'escompte.</p>
<ol class="steps"><li>Escompte TTC = 2 % × 1 200 = <b>24</b> → HT = 24 ÷ 1,2 = <b>20</b> ; TVA = <b>4</b>.</li><li>Le client paie 1 200 − 24 = <b>1 176</b>.</li></ol>
${TB(["Vendeur", "Client"], [[J(["10/06 — encaissement", ["512", 1176, 0], ["411", 0, 1176], "11/06 — facture d'avoir", ["665", 20, 0], ["4457", 4, 0], ["411", 0, 24]]), J(["10/06 — paiement", ["401", 1176, 0], ["512", 0, 1176], "11/06 — avoir reçu", ["401", 24, 0], ["765", 0, 20], ["44566", 0, 4]])]])}
<div class="box">Après l'avoir, le 411 (vendeur) et le 401 (client) sont <b>soldés</b> : 1 176 + 24 = 1 200.</div>`,
        ex: [
          N("Facture 1 200 € TTC, escompte 2 % si paiement sous 8 jours. Combien le client paie-t-il ?", 1176, "1 200 × 0,98 = 1 176."),
          E("<b>Vendeur</b> : le client a payé 1 176 € par virement (facture de 1 200 TTC, escompte 2 %). Enregistre l'<b>encaissement</b>.", [["512", 1176, 0], ["411", 0, 1176]], ""),
          E("<b>Vendeur</b> : enregistre la <b>facture d'avoir</b> correspondant à l'escompte de 24 € TTC (TVA 20 %).", [["665", 20, 0], ["4457", 4, 0], ["411", 0, 24]], "24 ÷ 1,2 = 20 HT."),
          E("<b>Client</b> : enregistre l'<b>avoir reçu</b> pour l'escompte de 24 € TTC.", [["401", 24, 0], ["765", 0, 20], ["44566", 0, 4]], ""),
          E("<b>Vendeur</b> : vente de 5 000 € HT (6 000 TTC) avec escompte de 1 % pour paiement anticipé ; le client a payé à temps. Enregistre la facture d'avoir.", [["665", 50, 0], ["4457", 10, 0], ["411", 0, 60]], "1 % × 6 000 = 60 TTC → 50 HT + 10 TVA.")
        ]
      }
    ]
  });
})();
