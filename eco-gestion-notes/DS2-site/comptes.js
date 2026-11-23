// Plan comptable simplifié (extrait de l'annexe du DS + comptes du cours)
window.ACC = {
  "101": "Capital", "106": "Réserves", "12": "Résultat de l'exercice", "120": "Résultat (bénéfice)", "129": "Résultat (perte)",
  "151": "Provisions pour risques", "16": "Emprunts", "164": "Emprunts auprès des établissements de crédit",
  "20": "Immobilisations incorporelles", "205": "Concessions, brevets, licences", "207": "Fonds commercial",
  "21": "Immobilisations corporelles", "211": "Terrains", "213": "Constructions",
  "215": "Installations techniques, matériel et outillage industriels (ITMOI)", "218": "Autres immobilisations corporelles",
  "2182": "Matériel de transport", "2183": "Matériel de bureau et informatique", "2184": "Mobilier",
  "261": "Titres de participation", "271": "Titres immobilisés",
  "28": "Amortissements des immobilisations", "280": "Amortissements des immobilisations incorporelles", "2805": "Amortissements des brevets, licences",
  "281": "Amortissements des immobilisations corporelles", "2813": "Amortissements des constructions", "2815": "Amortissements des ITMOI",
  "2818": "Amortissements des autres immobilisations corporelles", "28182": "Amortissements du matériel de transport", "28183": "Amortissements du matériel de bureau et informatique", "28184": "Amortissements du mobilier",
  "29": "Dépréciations des immobilisations", "290": "Dépréciations des immobilisations incorporelles", "291": "Dépréciations des immobilisations corporelles",
  "296": "Dépréciations des participations", "297": "Dépréciations des autres titres immobilisés",
  "31": "Stocks de matières premières", "35": "Stocks de produits finis", "37": "Stocks de marchandises",
  "391": "Dépréciations des stocks de matières premières", "395": "Dépréciations des stocks de produits finis", "397": "Dépréciations des stocks de marchandises",
  "401": "Fournisseurs", "404": "Fournisseurs d'immobilisations", "4081": "Fournisseurs – factures non parvenues",
  "411": "Clients", "416": "Clients douteux ou litigieux", "4181": "Clients – factures à établir",
  "421": "Personnel – rémunérations dues", "43": "Sécurité sociale et autres organismes sociaux", "44": "État", "444": "État – impôt sur les bénéfices",
  "4455": "TVA à décaisser", "4456": "TVA déductible", "44562": "TVA déductible sur immobilisations", "44566": "TVA déductible sur autres biens et services (ABS)",
  "44567": "Crédit de TVA à reporter", "4457": "TVA collectée", "44571": "TVA collectée",
  "462": "Créances sur cessions d'immobilisations", "486": "Charges constatées d'avance", "487": "Produits constatés d'avance",
  "491": "Dépréciations des comptes de clients",
  "50": "Valeurs mobilières de placement (VMP)", "512": "Banque", "53": "Caisse", "530": "Caisse", "590": "Dépréciations des VMP",
  "601": "Achats de matières premières", "6031": "Variation des stocks de matières premières", "6037": "Variation des stocks de marchandises",
  "604": "Achats d'études et prestations de services", "606": "Achats non stockés de matières et fournitures", "607": "Achats de marchandises",
  "609": "Rabais, remises, ristournes obtenus sur achats", "612": "Redevances de crédit-bail", "613": "Locations", "615": "Entretien et réparations",
  "616": "Primes d'assurance", "618": "Divers (documentation, colloques)", "622": "Rémunérations d'intermédiaires et honoraires",
  "623": "Publicité", "624": "Transports de biens", "625": "Déplacements, missions et réceptions", "626": "Frais postaux et de télécommunications",
  "627": "Services bancaires", "63": "Impôts, taxes et versements assimilés", "641": "Rémunérations du personnel", "645": "Charges de sécurité sociale",
  "648": "Autres charges de personnel", "654": "Pertes sur créances irrécouvrables",
  "657": "Valeur comptable des immobilisations incorporelles et corporelles cédées (VCIICC)",
  "661": "Charges d'intérêts", "665": "Escomptes accordés", "671": "Charges exceptionnelles sur opérations de gestion",
  "675": "Valeurs comptables des éléments d'actif cédés (ancienne numérotation)",
  "681": "Dotations aux amortissements, dépréciations et provisions (DADP) – exploitation", "686": "DADP – financières", "687": "DADP – exceptionnelles",
  "695": "Impôts sur les bénéfices",
  "701": "Ventes de produits finis", "706": "Prestations de services", "707": "Ventes de marchandises", "708": "Produits des activités annexes",
  "709": "Rabais, remises, ristournes accordés", "713": "Variation des stocks de produits (production stockée)", "7135": "Variation des stocks de produits finis (production stockée)",
  "72": "Production immobilisée", "752": "Revenus des immeubles",
  "757": "Produits des cessions d'immobilisations incorporelles et corporelles (PCIICC)",
  "764": "Revenus des VMP", "765": "Escomptes obtenus",
  "775": "Produits des cessions d'éléments d'actif (ancienne numérotation)",
  "781": "Reprises sur amortissements, dépréciations et provisions (RADP) – exploitation", "786": "RADP – financières", "787": "RADP – exceptionnelles"
};

// Équivalences acceptées : compte attendu -> autres numéros acceptés
window.ACC_ALIAS = {
  "44566": ["4456"], "44562": ["4456"], "4457": ["44571"], "44571": ["4457"],
  "757": ["775"], "657": ["675"], "164": ["16"], "530": ["53"],
  "2815": ["281"], "2813": ["281"], "28182": ["2818", "281"], "28183": ["2818", "281"], "28184": ["2818", "281"],
  "2805": ["280"], "6037": ["603"], "6031": ["603"], "7135": ["713"], "713": ["7135"],
  "120": ["12"], "129": ["12"]
};

window.accName = function (n) {
  n = String(n || "").trim();
  if (ACC[n]) return ACC[n];
  for (let k = n.length - 1; k >= 2; k--) { const p = n.slice(0, k); if (ACC[p]) return ACC[p] + " (détail)"; }
  return "";
};
