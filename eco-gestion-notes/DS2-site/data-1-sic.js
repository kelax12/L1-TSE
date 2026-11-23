/* Bloc A — Le système d'information comptable (chapitre 3 du dossier : « système d'information comptable ») */
(function () {
  const CLASSES = [
    ["101", 1, "bilan", "passif (capitaux propres)"], ["106", 1, "bilan", "passif (capitaux propres)"], ["164", 1, "bilan", "passif (dette)"],
    ["205", 2, "bilan", "actif immobilisé"], ["215", 2, "bilan", "actif immobilisé"], ["2183", 2, "bilan", "actif immobilisé"], ["2815", 2, "bilan", "actif (en moins, colonne A&D)"],
    ["37", 3, "bilan", "actif circulant"], ["31", 3, "bilan", "actif circulant"], ["401", 4, "bilan", "passif (dette)"], ["411", 4, "bilan", "actif circulant (créance)"],
    ["4457", 4, "bilan", "passif (dette)"], ["44566", 4, "bilan", "actif circulant (créance)"], ["512", 5, "bilan", "actif circulant"], ["530", 5, "bilan", "actif circulant"],
    ["607", 6, "compte de résultat", "charge"], ["613", 6, "compte de résultat", "charge"], ["661", 6, "compte de résultat", "charge"], ["681", 6, "compte de résultat", "charge"],
    ["701", 7, "compte de résultat", "produit"], ["707", 7, "compte de résultat", "produit"], ["765", 7, "compte de résultat", "produit"], ["781", 7, "compte de résultat", "produit"]
  ];
  const NATURE = [
    ["une facture d'honoraires d'avocat ou d'expert-comptable", "622"], ["le loyer des locaux", "613"], ["une prime d'assurance", "616"],
    ["une facture d'entretien / de réparation", "615"], ["une campagne de publicité", "623"], ["les salaires bruts", "641"],
    ["un billet de train pour un commercial", "625"], ["la facture de téléphone / d'affranchissement", "626"], ["des commissions bancaires", "627"],
    ["des intérêts d'emprunt", "661"], ["des marchandises achetées pour être revendues telles quelles", "607"], ["des matières premières achetées pour fabriquer", "601"],
    ["un ordinateur pour le bureau (utilisé 4 ans)", "2183"], ["un camion de livraison", "2182"], ["une machine-outil pour l'usine", "215"],
    ["un brevet", "205"], ["un terrain", "211"], ["un bâtiment", "213"], ["des fournitures de bureau (ramettes, stylos)", "606"],
    ["la vente de produits fabriqués par l'entreprise", "701"], ["la vente de marchandises", "707"], ["une prestation de services facturée (conseil, maintenance…)", "706"],
    ["la dette envers le vendeur d'une machine (achat à crédit)", "404"], ["la dette envers le fournisseur de marchandises (achat à crédit)", "401"], ["la créance sur un client", "411"]
  ];

  BLOCS.push({
    id: "A", title: "Le système comptable", desc: "Classes de comptes, débit/crédit, journal, grand livre, stocks, bilan après opération.",
    skills: [
      /* ---------------- A1 ---------------- */
      {
        id: "A1", title: "Les 7 classes de comptes", tombe: "base de toutes les questions",
        cours: `
<h3>L'idée</h3>
<p>Chaque poste du bilan et du compte de résultat a une <b>adresse</b> : un <b>numéro de compte</b> + un <b>intitulé</b>. Le <b>premier chiffre</b> du numéro = la <b>classe</b>. Il suffit de lire ce premier chiffre pour savoir <b>où va le compte</b>.</p>
${TB(["Classe", "Nom", "Où ?", "Exemples"], [
          ["<b>1</b>", "Capitaux", "<b>Passif</b> (capitaux propres OU dettes à long terme)", "101 Capital, 106 Réserves, 12 Résultat, 164 Emprunts"],
          ["<b>2</b>", "Immobilisations", "<b>Actif immobilisé</b>", "205 Brevets, 211 Terrains, 215 ITMOI, 2182 Transport, 2183 Informatique ; 28 Amortissements, 29 Dépréciations (en moins)"],
          ["<b>3</b>", "Stocks", "<b>Actif circulant</b>", "31 MP, 35 Produits finis, 37 Marchandises"],
          ["<b>4</b>", "Tiers", "<b>Actif</b> (créances) ou <b>passif</b> (dettes)", "411 Clients (créance), 401 Fournisseurs (dette), 4457 TVA collectée (dette), 44566 TVA déductible (créance)"],
          ["<b>5</b>", "Financiers", "<b>Actif circulant</b>", "50 VMP, 512 Banque, 530 Caisse"],
          ["<b>6</b>", "Charges", "<b>Compte de résultat</b> (gauche)", "607 Achats de marchandises, 613 Locations, 641 Salaires, 681 DADP"],
          ["<b>7</b>", "Produits", "<b>Compte de résultat</b> (droite)", "701, 706, 707 Ventes, 765 Escompte obtenu, 781 Reprises"]
        ])}
<div class="box"><b>Moyen mnémotechnique</b>Classes 1 à 5 = <b>bilan</b> (comptes de situation). Classes 6 et 7 = <b>compte de résultat</b> (comptes de gestion). « 6 = je dépense, 7 = je gagne ».</div>
<div class="box trap"><b>Piège n°1 : « capitaux » ≠ « capitaux propres »</b>La classe 1 contient aussi les <b>emprunts (164)</b>, qui sont des <b>dettes</b>. Au bilan, l'emprunt va dans « Dettes », pas dans « Capitaux propres ».</div>
<div class="box trap"><b>Piège n°2 : la classe 4 va des deux côtés</b>Il faut lire l'intitulé : <b>client</b> = il me doit de l'argent = <b>créance = actif</b> ; <b>fournisseur</b>, <b>État TVA collectée</b>, <b>sécurité sociale</b> = je dois de l'argent = <b>dette = passif</b>. La TVA <b>déductible</b>, c'est l'État qui me la doit : <b>créance = actif</b>.</div>
<div class="box trap"><b>Piège n°3 : les comptes 28 et 29</b>Ils sont en classe 2 mais ce ne sont pas des immobilisations : ce sont les <b>amortissements et dépréciations</b>, qui viennent <b>en diminution</b> de l'actif (colonne « A&D » du bilan).</div>`,
        ex: [
          Q("Le compte <code>607 Achats de marchandises</code> appartient à quelle classe ?", ["Classe 3 (stocks)", "Classe 6 (charges)", "Classe 7 (produits)", "Classe 4 (tiers)"], 1, "Premier chiffre = 6 → charge. (Même si on achète des marchandises, on ne passe <b>pas</b> par le stock 37 pendant l'année : on les met directement en charge.)"),
          Q("Le compte <code>411 Clients</code> se trouve…", ["au passif, dans les dettes", "à l'actif, dans l'actif circulant (créances)", "dans le compte de résultat", "à l'actif immobilisé"], 1, "Le client me doit de l'argent → c'est une <b>créance</b> → actif circulant."),
          Q("Le compte <code>401 Fournisseurs</code> se trouve…", ["à l'actif circulant", "au passif, dans les dettes", "dans les capitaux propres", "dans les charges"], 1, "Je dois de l'argent au fournisseur → <b>dette</b> → passif."),
          Q("Le compte <code>164 Emprunts auprès des établissements de crédit</code> va…", ["dans les capitaux propres (c'est la classe 1)", "dans les dettes au passif", "à l'actif (c'est de l'argent reçu)", "dans les produits"], 1, "Classe 1 = « capitaux » au sens large. L'emprunt est une <b>dette</b> envers la banque. L'argent reçu, lui, est dans le 512 (actif)."),
          M("Coche <b>tous</b> les comptes qui apparaissent au <b>bilan</b>.", ["101 Capital", "215 ITMOI", "607 Achats de marchandises", "411 Clients", "707 Ventes de marchandises", "512 Banque", "681 DADP"], [0, 1, 3, 5], "Classes 1 à 5 = bilan : 101, 215, 411, 512. Les classes 6 et 7 (607, 707, 681) vont au compte de résultat."),
          Q("La <code>44566 TVA déductible</code> est…", ["une dette envers l'État (passif)", "une créance sur l'État (actif)", "une charge", "un produit"], 1, "TVA <b>déductible</b> = TVA que j'ai payée à mes fournisseurs et que l'État doit me rendre → <b>créance</b> → actif."),
          Q("La <code>4457 TVA collectée</code> est…", ["une dette envers l'État (passif)", "une créance sur l'État (actif)", "un produit (c'est de l'argent encaissé)", "une charge"], 0, "TVA <b>collectée</b> = TVA encaissée chez mes clients que je dois reverser à l'État → <b>dette</b>. Ce n'est <b>jamais</b> un produit : la TVA est neutre pour l'entreprise."),
          Q("Le compte <code>2815 Amortissements des ITMOI</code>…", ["est une immobilisation qu'on ajoute à l'actif", "vient en diminution de l'actif (colonne A&D)", "est une charge", "est une dette"], 1, "Les comptes 28 (et 29) sont des « comptes correcteurs » d'actif : ils se soustraient du brut pour obtenir le net.")
        ],
        gen: [() => {
          const [n, cl, ou, nat] = pick(CLASSES);
          const opts = ["actif immobilisé", "actif circulant", "actif circulant (créance)", "passif (capitaux propres)", "passif (dette)", "charge", "produit", "actif (en moins, colonne A&D)"];
          const choices = [nat]; while (choices.length < 4) { const o = pick(opts); if (!choices.includes(o)) choices.push(o); }
          choices.sort(() => Math.random() - .5);
          return Q(`Le compte <code>${n} ${ACC[n]}</code> (classe ${cl}) va où ?`, choices, choices.indexOf(nat), `Classe ${cl} → ${ou} → <b>${nat}</b>.`);
        }]
      },
      /* ---------------- A2 ---------------- */
      {
        id: "A2", title: "Trouver le bon compte", tombe: "0,5 pt par compte juste",
        cours: `
<h3>L'idée</h3>
<p>Le jour du DS, le plan comptable est donné. Mais il y a 200 lignes : il faut savoir <b>dans quelle zone chercher</b>. On se pose 3 questions dans l'ordre :</p>
<ol class="steps">
<li><b>Qu'est-ce qui entre ou sort ?</b> Un bien/service (flux réel) ou de l'argent / une dette / une créance (flux financier) ?</li>
<li><b>Si c'est un bien ou service acheté :</b> il est <b>consommé</b> dans l'année → <b>charge (6)</b> ; il sert <b>plusieurs années</b> → <b>immobilisation (2)</b>.</li>
<li><b>Si c'est vendu :</b> produits finis fabriqués → <b>701</b> ; marchandises revendues telles quelles → <b>707</b> ; services → <b>706</b> ; une immobilisation qu'on revend → <b>757</b>.</li>
</ol>
<h3>Les comptes à connaître « de vue » (ils reviennent tout le temps)</h3>
${TB(["Situation", "Compte"], [
          ["Achat de marchandises / de matières premières", "<b>607</b> / <b>601</b>"], ["Loyer", "<b>613</b> Locations"], ["Entretien, réparations", "<b>615</b>"], ["Assurance", "<b>616</b>"],
          ["Honoraires (avocat, comptable)", "<b>622</b>"], ["Publicité", "<b>623</b>"], ["Déplacements, réceptions", "<b>625</b>"], ["Téléphone, timbres", "<b>626</b>"], ["Frais bancaires", "<b>627</b>"],
          ["Salaires", "<b>641</b>"], ["Intérêts d'emprunt", "<b>661</b>"], ["Dotations aux amortissements / dépréciations", "<b>681</b> (686 si financier)"],
          ["Brevet / Terrain / Construction", "<b>205</b> / <b>211</b> / <b>213</b>"], ["Machine industrielle", "<b>215</b> ITMOI"], ["Véhicule (sur route)", "<b>2182</b>"], ["Ordinateur, mobilier de bureau", "<b>2183</b> / 2184"],
          ["Fournisseur de biens/services courants", "<b>401</b>"], ["Fournisseur d'<b>immobilisation</b>", "<b>404</b>"], ["Client", "<b>411</b>"], ["Acheteur d'une immobilisation qu'on vend à crédit", "<b>462</b>"],
          ["Banque / Caisse", "<b>512</b> / <b>530</b>"], ["Emprunt", "<b>164</b>"]
        ])}
<div class="box trap"><b>Pièges classiques</b>
« Matériel de transport » (2182) = uniquement les véhicules <b>sur route</b>. Un chariot élévateur d'usine = <b>215</b> ITMOI.<br>
Acheter une machine à crédit : la dette va en <b>404</b> (fournisseur d'immobilisations), pas en 401.<br>
Vendre une machine à crédit : la créance va en <b>462</b>, pas en 411.<br>
Le <b>512</b> (mon argent à la banque) ≠ le <b>164</b> (ma dette envers la banque).</div>`,
        ex: [
          Q("Facture de l'expert-comptable :", ["613", "622", "641", "627"], 1, "Honoraires = rémunérations d'intermédiaires et honoraires = <b>622</b>."),
          Q("Achat d'un ordinateur portable qui servira 3 ans :", ["606 Fournitures", "607 Achats", "2183 Matériel de bureau et informatique", "215 ITMOI"], 2, "Il sert plusieurs années → immobilisation, matériel informatique → <b>2183</b>."),
          Q("Achat d'un chariot élévateur pour l'entrepôt :", ["2182 Matériel de transport", "215 ITMOI", "607 Achats", "2184 Mobilier"], 1, "Ne circule pas sur la route → ce n'est pas du matériel de transport → <b>215</b>."),
          Q("Une entreprise industrielle vend les tables qu'elle fabrique :", ["707", "706", "701", "757"], 2, "Produits <b>fabriqués</b> = produits finis → <b>701</b>."),
          Q("Un supermarché vend des boîtes de conserve achetées à un grossiste :", ["701", "707", "706", "601"], 1, "Revendues sans transformation = marchandises → <b>707</b>."),
          Q("On achète une machine payable dans 3 mois. Le compte de dette est :", ["401 Fournisseurs", "404 Fournisseurs d'immobilisations", "164 Emprunts", "462"], 1, "Dette liée à l'achat d'une <b>immobilisation</b> → <b>404</b>."),
          Q("Un cabinet de conseil facture une mission à un client :", ["701", "706", "707", "622"], 1, "Vente d'un service → <b>706</b> Prestations de services. (622, c'est chez le client qui reçoit la facture d'honoraires !)"),
          Q("Paiement des intérêts de l'emprunt :", ["164", "661", "627", "512"], 1, "Les intérêts sont une charge financière → <b>661</b>. Le 164 ne concerne que le <b>capital</b> remboursé.")
        ],
        gen: [() => {
          const [txt, acc] = pick(NATURE);
          const pool = NATURE.map(x => x[1]).filter(x => x !== acc);
          const ch = [acc]; while (ch.length < 4) { const o = pick(pool); if (!ch.includes(o)) ch.push(o); }
          ch.sort(() => Math.random() - .5);
          return Q(`Quel compte pour : <b>${txt}</b> ?`, ch.map(c => `${c} ${ACC[c]}`), ch.indexOf(acc), `→ <b>${acc} ${ACC[acc]}</b>.`);
        }]
      },
      /* ---------------- A3 ---------------- */
      {
        id: "A3", title: "Débit ou crédit ? (emploi / ressource)", tombe: "toutes les écritures",
        cours: `
<h3>La règle d'or</h3>
<div class="box ok"><b>« On obtient quoi ? → on DÉBITE. Grâce à quoi ? → on CRÉDITE. »</b>Débit = colonne de <b>gauche</b>, crédit = colonne de <b>droite</b>, pour <b>tous</b> les comptes. Total débit = total crédit (<b>partie double</b>).</div>
<h3>Méthode en 4 étapes (à faire pour CHAQUE écriture)</h3>
<ol class="steps">
<li>Écris la question <b>« Qu'est-ce que l'entreprise obtient ? »</b> → c'est l'<b>emploi</b> → compte au <b>débit</b>.</li>
<li>Écris <b>« Grâce à quoi ? »</b> (elle a payé ? elle doit ? elle a donné un bien ?) → c'est la <b>ressource</b> → compte au <b>crédit</b>.</li>
<li>Cherche les numéros dans le plan comptable.</li>
<li>Vérifie : total débit = total crédit.</li>
</ol>
<h3>Les 7 exemples fondateurs (à savoir refaire les yeux fermés)</h3>
${TB(["Opération", "On obtient (débit)", "Grâce à (crédit)"], [
          ["Achat de marchandises payé par virement, 1 000", "607 Achats de marchandises", "512 Banque"],
          ["Vente de produits finis à crédit, 2 000", "411 Clients (une créance)", "701 Ventes de produits finis (j'ai donné des produits)"],
          ["Achat de MP à crédit, 500", "601 Achats de MP", "401 Fournisseurs (je m'endette)"],
          ["Emprunt de 30 000 à la banque", "512 Banque (de l'argent)", "164 Emprunts (je m'endette)"],
          ["Paiement du fournisseur, 500", "401 Fournisseurs (ma dette disparaît)", "512 Banque"],
          ["Le client paie sa dette, 2 000", "512 Banque", "411 Clients (sa dette disparaît)"],
          ["Remboursement de 10 000 d'emprunt", "164 Emprunts (ma dette diminue)", "512 Banque"]
        ])}
<p><b>Exemple rédigé</b> — achat de matières premières à crédit pour 500 € (on oublie la TVA pour l'instant) :</p>
${J([["601", 500, 0], ["401", 0, 500]])}
<div class="box trap"><b>Piège</b>Quand une dette <b>disparaît</b> (je paie), elle passe au <b>débit</b> : « j'obtiens la disparition de ma dette ». Quand une créance disparaît (le client paie), elle passe au <b>crédit</b>.</div>
<div class="box warn"><b>Ici, pas de TVA</b>Dans cette compétence on travaille sans TVA pour apprendre le mécanisme. La TVA arrive au bloc B.</div>`,
        ex: [
          Q("Achat de marchandises payé par chèque. Le 607 va…", ["au débit", "au crédit"], 0, "On obtient des marchandises → <b>débit</b> 607. Grâce à l'argent de la banque → crédit 512."),
          Q("Vente de marchandises à crédit. Le 411 Clients va…", ["au débit", "au crédit"], 0, "On obtient une <b>créance</b> sur le client → <b>débit</b> 411."),
          Q("Paiement d'un fournisseur par virement. Le 401 va…", ["au débit", "au crédit"], 0, "On obtient la <b>disparition de la dette</b> → <b>débit</b> 401 ; grâce à la banque → crédit 512."),
          E("Achat de marchandises payé par virement : <b>1 000 €</b> (sans TVA).", [["607", 1000, 0], ["512", 0, 1000]], "On obtient des marchandises (607, débit) grâce à l'argent en banque (512, crédit)."),
          E("Vente à crédit de produits finis : <b>2 000 €</b> (sans TVA).", [["411", 2000, 0], ["701", 0, 2000]], "On obtient une créance sur le client (411, débit) grâce aux produits vendus (701, crédit)."),
          E("L'entreprise obtient un emprunt de <b>30 000 €</b> versé sur son compte bancaire.", [["512", 30000, 0], ["164", 0, 30000]], "On obtient de l'argent (512) grâce à une dette envers la banque (164)."),
          E("Le client du 5 janvier règle sa dette de <b>2 000 €</b> par virement.", [["512", 2000, 0], ["411", 0, 2000]], "Encaissement d'une créance : 512 au débit, 411 au crédit. <b>Aucun compte 6 ou 7</b> : ce n'est ni une charge ni un produit, juste de l'argent qui arrive."),
          E("Remboursement de <b>10 000 €</b> du capital de l'emprunt par virement.", [["164", 10000, 0], ["512", 0, 10000]], "La dette diminue (164 au débit) grâce à la banque (512 au crédit).")
        ],
        gen: [() => {
          const m = rnd(5, 90) * 100;
          const ops = [
            [`Achat au comptant (virement) de marchandises pour ${fmt(m)} € (sans TVA).`, [["607", m, 0], ["512", 0, m]]],
            [`Achat à crédit de matières premières pour ${fmt(m)} € (sans TVA).`, [["601", m, 0], ["401", 0, m]]],
            [`Vente à crédit de marchandises pour ${fmt(m)} € (sans TVA).`, [["411", m, 0], ["707", 0, m]]],
            [`Vente au comptant (virement) de produits finis pour ${fmt(m)} € (sans TVA).`, [["512", m, 0], ["701", 0, m]]],
            [`Paiement d'une dette fournisseur de ${fmt(m)} € par virement.`, [["401", m, 0], ["512", 0, m]]],
            [`Encaissement par virement d'une créance client de ${fmt(m)} €.`, [["512", m, 0], ["411", 0, m]]],
            [`Paiement du loyer par chèque : ${fmt(m)} € (sans TVA).`, [["613", m, 0], ["512", 0, m]]]
          ];
          const [q, rows] = pick(ops); return E(q, rows, "Emploi au débit, ressource au crédit.");
        }]
      },
      /* ---------------- A4 ---------------- */
      {
        id: "A4", title: "L'approche patrimoniale (vérifier le sens)", tombe: "comprendre pourquoi",
        cours: `
<h3>Les 4 règles + la 5ᵉ</h3>
${TB(["", "Le compte AUGMENTE", "Le compte DIMINUE"], [["Compte d'<b>ACTIF</b> (2, 3, 411, 44566, 5)", "<b>Débit</b>", "Crédit"], ["Compte de <b>PASSIF</b> (1, 401, 4457, 164…)", "<b>Crédit</b>", "Débit"]])}
<div class="box"><b>5ᵉ règle : le résultat</b>Si l'opération fait <b>baisser le résultat</b> (on s'appauvrit) → on <b>débite un compte 6</b> (charge). Si elle fait <b>monter le résultat</b> (on s'enrichit) → on <b>crédite un compte 7</b> (produit). On n'écrit jamais directement dans le 12 Résultat en cours d'année.</div>
<h3>Méthode</h3>
<ol class="steps">
<li>Liste ce qui change à l'actif (augmente / diminue).</li>
<li>Liste ce qui change au passif (dettes, capital).</li>
<li>S'il y a un écart (on s'est enrichi ou appauvri), c'est le résultat → compte 6 ou 7.</li>
<li>Applique le tableau.</li>
</ol>
<p><b>Exemple</b> — loyer payé par chèque, 1 000 € : la banque (actif) <b>diminue</b> → crédit 512. Aucune dette ne change, donc on s'est <b>appauvri</b> → le résultat baisse → <b>débit</b> d'un compte 6 : 613 Locations.</p>
${J([["613", 1000, 0], ["512", 0, 1000]])}
<p><b>Exemple</b> — apport en capital de 50 000 € sur le compte bancaire : banque (actif) <b>augmente</b> → débit 512 ; capital (passif) <b>augmente</b> → crédit 101. Pas d'enrichissement : le capital n'est pas un produit.</p>
${J([["512", 50000, 0], ["101", 0, 50000]])}
<div class="box ok"><b>À quoi ça sert au DS ?</b>Les deux approches donnent <b>toujours la même écriture</b>. Utilise l'approche patrimoniale pour <b>vérifier</b> quand tu hésites sur le sens, et pour les exercices « bilan après l'opération » (A9).</div>`,
        ex: [
          Q("Un compte d'actif qui augmente se…", ["débite", "crédite"], 0, "Actif ↑ = débit."),
          Q("Un compte de passif qui augmente se…", ["débite", "crédite"], 1, "Passif ↑ = crédit."),
          Q("Une dette qui diminue (on la rembourse) se…", ["débite", "crédite"], 0, "Passif ↓ = débit."),
          Q("Une opération fait baisser le résultat. On utilise…", ["un compte 6 au débit", "un compte 7 au crédit", "le compte 12 au débit", "un compte 6 au crédit"], 0, "Résultat ↓ → charge → compte 6 au <b>débit</b>."),
          Q("L'achat d'une machine au comptant modifie-t-il le résultat ?", ["Oui, il le diminue", "Non : on échange de l'argent contre une machine de même valeur", "Oui, il l'augmente"], 1, "Actif immobilisé +, banque − du même montant : ni enrichissement ni appauvrissement → pas de compte 6/7."),
          E("Les associés apportent <b>50 000 €</b> en numéraire, versés en banque, lors de la création.", [["512", 50000, 0], ["101", 0, 50000]], "Banque (actif) ↑ → débit ; capital (passif) ↑ → crédit."),
          E("Paiement par chèque d'un loyer trimestriel de <b>1 000 €</b> (sans TVA).", [["613", 1000, 0], ["512", 0, 1000]], "Banque ↓ → crédit 512 ; on s'appauvrit → charge 613 au débit.")
        ]
      },
      /* ---------------- A5 ---------------- */
      {
        id: "A5", title: "Charge (6) ou immobilisation (2) ?", tombe: "2025 : brevet, entretien",
        cours: `
<h3>Le critère unique</h3>
<div class="box ok"><b>Consommé dans l'exercice → CHARGE (6). Utilisé sur plusieurs exercices → IMMOBILISATION (2).</b></div>
${TB(["Achat", "Classement", "Pourquoi"], [
          ["Ramettes de papier, stylos", "606 (charge)", "consommés vite"], ["Réparation d'une machine", "615 (charge)", "service consommé, ne crée pas un nouveau bien"],
          ["Ordinateur", "2183 (immobilisation)", "utilisé plusieurs années"], ["Brevet", "205 (immobilisation incorporelle)", "droit protégé ~20 ans"],
          ["Camionnette de livraison", "2182 (immobilisation)", "plusieurs années"], ["Marchandises", "607 (charge)", "revendues rapidement : on les considère consommées"]
        ])}
<div class="box trap"><b>Conséquence pour la TVA (bloc B)</b>Immobilisation → TVA déductible sur <b>immobilisations 44562</b> et fournisseur <b>404</b>. Charge → TVA déductible sur <b>ABS 44566</b> et fournisseur <b>401</b>.</div>
<div class="box"><b>Conséquence sur le bilan</b>Une charge fait baisser le résultat <b>tout de suite</b>. Une immobilisation ne touche pas le résultat à l'achat : elle le touchera petit à petit par les <b>amortissements</b> (bloc D).</div>`,
        ex: [
          Q("Achat de 50 ramettes de papier :", ["Charge (606)", "Immobilisation (2183)"], 0, "Consommées dans l'année."),
          Q("Achat d'un brevet :", ["Charge (622)", "Immobilisation incorporelle (205)"], 1, "Droit utilisable sur plusieurs années."),
          Q("Facture d'entretien des locaux :", ["Charge (615)", "Immobilisation (213)"], 0, "Un entretien est consommé, il ne crée pas d'actif."),
          M("Coche les <b>immobilisations</b>.", ["Un camion", "Le loyer de janvier", "Un logiciel acheté pour 5 ans", "Des marchandises", "Une machine-outil", "Une prime d'assurance"], [0, 2, 4], "Camion (2182), logiciel (205), machine (215) servent plusieurs années. Loyer, marchandises, assurance = charges."),
          Q("Achat d'une machine à crédit : quel compte de TVA et quel fournisseur ?", ["44566 et 401", "44562 et 404", "44562 et 401", "4457 et 404"], 1, "Immobilisation → <b>44562</b> TVA déductible sur immobilisations + <b>404</b> fournisseurs d'immobilisations.")
        ]
      },
      /* ---------------- A6 ---------------- */
      {
        id: "A6", title: "Opérations sans TVA : encaissements, paiements, emprunts", tombe: "2024 : annuité d'emprunt (3 pts)",
        cours: `
<h3>Les flux financiers n'ont jamais de TVA</h3>
<p>La TVA ne frappe que les <b>ventes de biens et services</b>. Tout ce qui n'est que <b>mouvement d'argent, de dette ou de créance</b> se passe de TVA :</p>
<ul><li>encaisser une créance client ; payer un fournisseur ; payer la TVA à l'État ; payer les organismes sociaux ;</li>
<li>recevoir un emprunt, rembourser un emprunt, payer des intérêts ; les salaires.</li></ul>
<h3>L'annuité d'emprunt (tombé en 2024)</h3>
<p>Une annuité = <b>capital remboursé</b> + <b>intérêts</b>. Le capital fait baisser la <b>dette</b> (164 au débit) ; les intérêts sont une <b>charge financière</b> (661 au débit). On paie le tout par la banque.</p>
<p><b>Annale 2024</b> — capital remboursé 1 100 €, intérêts 250 € :</p>
${J([["661", 250, 0], ["164", 1100, 0], ["512", 0, 1350]])}
<div class="box trap"><b>Piège</b>Mettre l'annuité entière (1 350) au débit du 164. Non : seul le <b>capital</b> réduit la dette. Les intérêts sont une charge.</div>
<h3>Emprunt avec frais de dossier</h3>
<p>Emprunt de 20 000 €, la banque retient 300 € de frais de dossier et verse le reste :</p>
${J([["512", 19700, 0], ["627", 300, 0], ["164", 0, 20000]])}
<p>La dette est de 20 000 (on remboursera tout), mais on ne reçoit que 19 700 ; les 300 sont une charge (services bancaires).</p>`,
        ex: [
          Q("Le client règle 3 600 € TTC par virement. Faut-il une ligne de TVA ?", ["Oui, 600 € de TVA collectée", "Non : c'est un encaissement, un flux financier", "Oui, de la TVA déductible"], 1, "La TVA a été comptée au moment de la <b>facture</b>. L'encaissement solde seulement la créance : 512 / 411 pour 3 600."),
          E("Paiement d'une annuité d'emprunt par virement : capital remboursé <b>1 100 €</b>, intérêts <b>250 €</b>. <i>(Annale 2024, 3 pts)</i>", [["661", 250, 0], ["164", 1100, 0], ["512", 0, 1350]], "0,5 par compte, 0,5 par montant. Intérêts → 661 ; capital → 164 ; total payé → 512."),
          E("Paiement par virement d'une dette fournisseur de <b>3 600 €</b>.", [["401", 3600, 0], ["512", 0, 3600]], "Flux financier : pas de TVA."),
          E("Encaissement par chèque d'une créance client de <b>4 950 €</b>.", [["512", 4950, 0], ["411", 0, 4950]], "Flux financier : pas de TVA."),
          E("La banque accorde un emprunt de <b>20 000 €</b> ; elle retient <b>300 €</b> de frais de dossier et vire le solde.", [["512", 19700, 0], ["627", 300, 0], ["164", 0, 20000]], "Dette = 20 000 ; argent reçu = 19 700 ; frais = charge 627."),
          N("Annuité : capital remboursé 4 000 €, intérêts 620 €. Combien sort de la banque ?", 4620, "Capital + intérêts = 4 000 + 620 = 4 620 €.")
        ],
        gen: [() => {
          const cap = rnd(8, 60) * 100, it = rnd(5, 40) * 10;
          return E(`Paiement d'une annuité d'emprunt par virement : capital remboursé ${fmt(cap)} €, intérêts ${fmt(it)} €.`, [["661", it, 0], ["164", cap, 0], ["512", 0, cap + it]], `661 = intérêts ; 164 = capital ; 512 = ${fmt(cap)} + ${fmt(it)} = ${fmt(cap + it)}.`);
        }]
      },
      /* ---------------- A7 ---------------- */
      {
        id: "A7", title: "Grand livre et balance : calculer un solde", tombe: "2025 : lire un grand livre (3,5 pts)",
        cours: `
<h3>Les trois documents</h3>
<ul><li><b>Livre journal</b> : toutes les écritures dans l'ordre chronologique.</li>
<li><b>Grand livre</b> : compte par compte, tous les mouvements + le solde.</li>
<li><b>Balance</b> : pour chaque compte, total débit, total crédit, solde (sans le détail).</li></ul>
<h3>Calculer un solde</h3>
<div class="box ok"><b>Solde = total débit − total crédit</b>Si le débit l'emporte → solde <b>débiteur</b>. Si le crédit l'emporte → solde <b>créditeur</b>.</div>
<p>Normalement : actif et charges → solde <b>débiteur</b> ; passif et produits → solde <b>créditeur</b>.</p>
<p><b>Exemple (annale 2025)</b> — compte 411 Clients DUPONT :</p>
${TB(["Date", "Libellé", "Débit", "Crédit", "Solde"], [["12/01", "Facture C100", 2200, "", "2 200 D"], ["15/01", "Facture C102", 5500, "", "7 700 D"], ["20/01", "Encaissement", "", 4950, "2 750 D"]])}
<p>DUPONT doit encore <b>2 750 €</b> au 31 janvier (2 200 + 5 500 − 4 950).</p>
<p><b>Exemple</b> — compte 512 Banque : débits 30 000 + 2 000 = 32 000 ; crédits 1 000 + 500 + 10 000 = 11 500 → solde <b>débiteur de 20 500</b> (il reste 20 500 € en banque).</p>
<div class="box"><b>Balance</b>Total de tous les débits = total de tous les crédits (partie double). Pareil pour les soldes débiteurs et créditeurs.</div>`,
        ex: [
          N("Compte 512 : débits 30 000 et 2 000 ; crédits 1 000, 500 et 10 000. Quel est le solde ?", 20500, "32 000 − 11 500 = 20 500, solde <b>débiteur</b>."),
          Q("Le solde précédent (512) est…", ["débiteur", "créditeur"], 0, "Débit > crédit → débiteur. Normal pour un compte d'actif."),
          N("Compte 411 DUPONT : factures de 2 200 et 5 500 au débit, encaissement de 4 950 au crédit. Combien DUPONT doit-il encore ? <i>(Annale 2025)</i>", 2750, "2 200 + 5 500 − 4 950 = 2 750 € (solde débiteur)."),
          N("Compte 164 Emprunts : crédit 30 000 (emprunt), débit 10 000 (remboursement). Solde ?", 20000, "Crédit 30 000 − débit 10 000 = 20 000 <b>créditeur</b> : il reste 20 000 à rembourser."),
          Q("Un compte 4457 TVA collectée a normalement un solde…", ["débiteur", "créditeur"], 1, "C'est une dette (passif) → créditeur."),
          T("Complète la balance (soldes).", ["Compte", "Total débit", "Total crédit", "Solde débiteur", "Solde créditeur"], [
            ["401 Fournisseurs", 4000, 23000, "", { a: 19000 }], ["411 Clients", 61000, 33000, { a: 28000 }, ""], ["512 Banque", 91000, 50000, { a: 41000 }, ""], ["164 Emprunts", 10000, 80000, "", { a: 70000 }]
          ], "Solde = |débit − crédit|, du côté le plus gros. (Chiffres de l'annale 2024, en milliers.)")
        ]
      },
      /* ---------------- A8 ---------------- */
      {
        id: "A8", title: "La régularisation des stocks", tombe: "2024 : question de cours (1,5 pt) + écritures (3 pts)",
        cours: `
<h3>Pourquoi ?</h3>
<p>Pendant l'année, le comptable <b>ne mouvemente pas les stocks</b> : un achat de marchandises va directement en charge (607), une vente directement en produit (707). C'est plus simple… mais à la fin de l'année, <b>le stock au bilan est faux</b> (c'est encore celui du début d'année) et <b>le résultat est faux</b> (on a mis en charge des marchandises encore en rayon).</p>
<h3>L'écriture (à savoir par cœur), en 2 temps</h3>
<ol class="steps"><li><b>Annuler le stock initial (SI)</b> : on le sort du bilan.</li><li><b>Constater le stock final (SF)</b> : on met au bilan ce qui reste réellement.</li></ol>
${J(["31/12 — Annulation du stock initial", ["6037", 5400, 0], ["37", 0, 5400], "31/12 — Constatation du stock final", ["37", 7400, 0], ["6037", 0, 7400]])}
<p class="small">(Annale 2024 : SI = 5 400, SF = 7 400.)</p>
${TB(["Stock de…", "Compte de stock", "Compte de variation"], [["Marchandises", "37", "6037 (charge)"], ["Matières premières", "31", "6031 (charge)"], ["Produits finis", "35", "7135 production stockée (produit)"]])}
<h3>Effet sur les documents</h3>
<ul><li><b>Bilan</b> : le stock passe de SI à SF → actif circulant + (SF − SI).</li>
<li><b>Charges (6037/6031)</b> : variation = <b>SI − SF</b> (ici 5 400 − 7 400 = −2 000 → les charges <b>baissent</b> de 2 000).</li>
<li><b>Résultat</b> : + (SF − SI) = + 2 000.</li>
<li>Produits finis : production stockée = <b>SF − SI</b> (dans les produits).</li></ul>
<div class="box ok"><b>Question de cours type (corrigé 2024, 1,5 pt)</b>« Durant l'exercice, les comptes de stock ne sont pas mouvementés (0,5) de telle sorte qu'à la fin de l'exercice les soldes sont faux (0,5). L'écriture consiste à annuler le stock initial (0,5) et à constater le stock final (0,5). »</div>
<div class="box trap"><b>Pièges</b>Variation de stock de marchandises = <b>SI − SF</b> (et pas SF − SI). Production stockée des produits finis = <b>SF − SI</b>. Le compte de variation est <b>6037</b>, pas 607.</div>`,
        ex: [
          F("Expliquer en quoi consiste l'écriture de régularisation des stocks. <i>(Annale 2024, 1,5 pt)</i>", "Durant l'exercice, les comptes de stock <b>ne sont pas mouvementés</b> (achats directement en charge, ventes en produit), de telle sorte qu'à la fin de l'exercice <b>les soldes sont faux</b> (stock au bilan et résultat). L'écriture consiste à <b>annuler le stock initial</b> (débit 603x / crédit 3x) et à <b>constater le stock final</b> (débit 3x / crédit 603x). Pour les produits finis on utilise 7135 production stockée."),
          E("Stock initial de marchandises : <b>5 400 €</b>. Passe l'écriture d'<b>annulation du stock initial</b>.", [["6037", 5400, 0], ["37", 0, 5400]], "On sort le SI du bilan : crédit 37 ; contrepartie : débit 6037."),
          E("Stock final de marchandises : <b>7 400 €</b>. Passe l'écriture de <b>constatation du stock final</b>.", [["37", 7400, 0], ["6037", 0, 7400]], "On met le SF au bilan : débit 37 ; contrepartie : crédit 6037."),
          E("Matières premières : SI = <b>8 000</b>, SF = <b>2 000</b>. Passe les deux écritures (4 lignes).", [["6031", 8000, 0], ["31", 0, 8000], ["31", 2000, 0], ["6031", 0, 2000]], "Annulation du SI (6031/31 : 8 000) puis constatation du SF (31/6031 : 2 000). Variation = 8 000 − 2 000 = +6 000 de charge (déstockage)."),
          E("Produits finis : SI = <b>3 000</b>, SF = <b>4 500</b>. Passe les deux écritures (4 lignes).", [["7135", 3000, 0], ["35", 0, 3000], ["35", 4500, 0], ["7135", 0, 4500]], "Pour les produits finis, le compte de variation est un <b>produit</b> : 7135. Production stockée = 4 500 − 3 000 = +1 500."),
          N("Marchandises : SI = 5 400, SF = 7 400. De combien le <b>résultat</b> augmente-t-il après régularisation ?", 2000, "SF − SI = 7 400 − 5 400 = 2 000. (Variation 6037 = SI − SF = −2 000 : les charges baissent de 2 000.)"),
          T("Annale 2024 — bilan avant inventaire : actif immobilisé brut 20 000, A&D 5 000 ; actif circulant 21 000 ; capital et réserves 14 000 ; résultat 4 000 ; dettes 18 000. Charges d'exploitation 11 000 ; produits d'exploitation 15 000. Régularisation des stocks : SI 5 400, SF 7 400. Complète <b>après</b> les écritures.", ["Poste", "Après"], [
            ["Actif circulant (brut = net)", { a: 23000 }], ["Total actif net", { a: 38000 }], ["Résultat", { a: 6000 }], ["Total passif", { a: 38000 }], ["Charges d'exploitation", { a: 9000 }]
          ], "Stock +2 000 → AC 21 000 + 2 000 = 23 000 ; total net 15 000 + 23 000 = 38 000. Charges 11 000 − 2 000 = 9 000 ; résultat 15 000 − 9 000 = 6 000 ; passif 14 000 + 6 000 + 18 000 = 38 000.")
        ],
        gen: [() => {
          const si = rnd(10, 90) * 100, sf = rnd(10, 90) * 100;
          const t = pick([["marchandises", "37", "6037"], ["matières premières", "31", "6031"], ["produits finis", "35", "7135"]]);
          return E(`Stock de ${t[0]} : SI = ${fmt(si)} €, SF = ${fmt(sf)} €. Passe les écritures de régularisation (4 lignes).`, [[t[2], si, 0], [t[1], 0, si], [t[1], sf, 0], [t[2], 0, sf]], `Annulation du SI : ${t[2]} / ${t[1]} ; constatation du SF : ${t[1]} / ${t[2]}.`);
        }]
      },
      /* ---------------- A9 ---------------- */
      {
        id: "A9", title: "Bilan et compte de résultat après une écriture", tombe: "2024 et 2025 : 1,5 à 2,5 pts, « entièrement juste » exigé",
        cours: `
<h3>La méthode infaillible</h3>
<p>Pour chaque <b>ligne</b> de l'écriture, demande-toi dans quelle case du bilan / CR elle tombe, et si elle l'augmente ou la diminue :</p>
${TB(["Compte", "Case touchée", "Débit fait…", "Crédit fait…"], [
          ["2… (immobilisation)", "Actif immobilisé – <b>brut</b>", "+", "−"], ["28… / 29… (amort., dépréc.)", "Actif immobilisé – <b>A&D</b>", "− (A&D baissent)", "+ (A&D montent)"],
          ["3…, 411, 44566, 44562, 512, 530", "Actif circulant", "+", "−"], ["401, 404, 4457, 164, 43…", "Dettes", "−", "+"],
          ["6… (charge)", "Charges → résultat", "charges + → résultat −", "charges − → résultat +"], ["7… (produit)", "Produits → résultat", "produits − → résultat −", "produits + → résultat +"]
        ])}
<h3>Exemple corrigé (annale 2025, entreprise D)</h3>
<p>Avant : actif immobilisé 120 000 brut / 15 000 A&D / 105 000 net ; actif circulant 91 000 ; capital et réserves 59 000 ; résultat 3 000 ; dettes 134 000 ; total 196 000. Charges 338 000 ; produits 341 000 ; bénéfice 3 000.</p>
<p>Opération : facture d'entretien 10 000 € HT, payable dans 2 mois.</p>
${J([["615", 10000, 0], ["44566", 2000, 0], ["401", 0, 12000]])}
<ol class="steps">
<li>615 au débit : charges + 10 000 → <b>348 000</b> ; résultat 3 000 − 10 000 = <b>− 7 000</b> (perte 7 000, à mettre côté produits du CR).</li>
<li>44566 au débit : une créance sur l'État → actif circulant + 2 000 → <b>93 000</b>.</li>
<li>401 au crédit : dettes + 12 000 → <b>146 000</b>.</li>
<li>Contrôle : actif net 105 000 + 93 000 = <b>198 000</b> ; passif 59 000 − 7 000 + 146 000 = <b>198 000</b>. ✓</li>
</ol>
<div class="box trap"><b>Les 3 erreurs qui coûtent tous les points</b>
1) Oublier que la <b>TVA déductible</b> augmente l'actif circulant (créance).<br>
2) Oublier que la <b>TVA collectée</b> augmente les dettes.<br>
3) Un résultat négatif s'écrit <b>− 7 000</b> au passif, et la perte se place du côté <b>produits</b> du compte de résultat pour équilibrer.</div>
<div class="box ok"><b>Toujours finir par le contrôle</b>Total actif net = total passif. Total charges + bénéfice = total produits (ou charges = produits + perte).</div>`,
        ex: [
          Q("Une facture d'entretien de 10 000 € HT à payer plus tard : l'actif circulant…", ["ne change pas", "augmente de 2 000 (TVA déductible)", "diminue de 12 000", "augmente de 12 000"], 1, "Rien n'est payé, mais l'État nous doit 2 000 de TVA → créance → AC + 2 000."),
          Q("Le paiement d'une dette fournisseur de 6 000 € modifie le résultat de…", ["− 6 000", "0", "+ 6 000"], 1, "Banque − 6 000, dettes − 6 000 : aucune charge, aucun produit."),
          T("<b>Annale 2025 (entreprise D, 2,5 pts)</b>. Avant : AI brut 120 000, A&D 15 000 ; AC 91 000 ; capital et réserves 59 000 ; résultat 3 000 ; dettes 134 000. Charges 338 000, produits 341 000. Opération : facture d'entretien 10 000 € HT, payable dans 2 mois. Complète après l'opération (résultat négatif → mets le signe −).", ["Poste", "Après"], [
            ["Actif circulant", { a: 93000 }], ["Total actif net", { a: 198000 }], ["Résultat", { a: -7000 }], ["Dettes", { a: 146000 }], ["Total des charges", { a: 348000 }], ["Perte", { a: 7000 }]
          ], "AC + 2 000 (TVA déductible) ; dettes + 12 000 ; charges + 10 000 ; résultat 3 000 − 10 000 = −7 000 ; total 105 000 + 93 000 = 198 000 = 59 000 − 7 000 + 146 000."),
          T("Avant : AI brut 50 000, A&D 10 000 ; AC 30 000 ; capital 45 000 ; résultat 5 000 ; dettes 20 000 (total 70 000). Charges 95 000, produits 100 000. Opération : <b>vente de marchandises à crédit, 10 000 € HT</b> (TVA 20 %). Complète après.", ["Poste", "Après"], [
            ["Actif circulant", { a: 42000 }], ["Dettes", { a: 22000 }], ["Résultat", { a: 15000 }], ["Total produits", { a: 110000 }], ["Total actif net", { a: 82000 }]
          ], "Écriture : 411 12 000 / 707 10 000 + 4457 2 000. AC + 12 000 (créance TTC) ; dettes + 2 000 (TVA collectée) ; produits + 10 000 ; résultat + 10 000. Contrôle : 40 000 + 42 000 = 82 000 = 45 000 + 15 000 + 22 000."),
          T("Avant : AI brut 50 000, A&D 10 000 ; AC 30 000 ; capital 45 000 ; résultat 5 000 ; dettes 20 000. Opération : <b>achat au comptant d'un ordinateur 3 000 € HT</b> (TVA 20 %, payé par virement). Complète après.", ["Poste", "Après"], [
            ["Actif immobilisé brut", { a: 53000 }], ["Actif circulant", { a: 27000 }], ["Résultat", { a: 5000 }], ["Total actif net", { a: 70000 }]
          ], "2183 + 3 000 (brut 53 000) ; 44562 + 600 et 512 − 3 600 → AC 30 000 + 600 − 3 600 = 27 000 ; aucun compte 6/7 → résultat inchangé ; total 43 000 + 27 000 = 70 000 (inchangé).")
        ]
      }
    ]
  });
})();
