# Eco-gestion — Chapitre 3 : TVA et réductions de prix

## Définitions

### Fiscalité et TVA

- **Impôt sur le revenu / impôt sur les sociétés** : impôts qui frappent le fait d'obtenir un revenu, pour les personnes physiques / pour les personnes morales.
- **Impôts sur le patrimoine** : impôts qui frappent le fait d'être propriétaire, que le bien génère ou non des revenus (taxe foncière, IFI — impôt sur la fortune immobilière, ex-ISF).
- **TVA (taxe sur la valeur ajoutée)** : impôt indirect sur la consommation, supporté par le consommateur final et collecté par les entreprises, qui le reversent à l'État.
- **Impôt indirect** : impôt payé par une personne (l'entreprise) mais supporté par une autre (le consommateur final).
- **Valeur ajoutée** : valeur qu'une entreprise ajoute à ce qu'elle a acheté à des tiers (ses consommations intermédiaires).
- **Assujetti** : personne physique ou morale qui exerce une activité économique de manière habituelle et indépendante (en son nom et pour son compte) ; équivalent fiscal de l'entreprise.
- **Opération imposable** : livraison de bien ou prestation de service effectuée à titre onéreux par un assujetti agissant en tant que tel (art. 256-I du CGI).
- **Opération imposable mais exonérée** : opération qui remplit les trois critères mais qu'un texte spécifique dispense de TVA.
- **Lien de subordination** : lien qui unit le salarié à son employeur et l'empêche d'être un assujetti.
- **TVA collectée** : TVA facturée par l'entreprise à ses clients sur ses ventes ; c'est une dette envers l'État (compte 4457).
- **TVA déductible** : TVA payée par l'entreprise sur ses achats et que l'État doit lui rembourser ; c'est une créance sur l'État (comptes 44562 sur immobilisations, 44566 sur autres biens et services).
- **Liquidation de la TVA** : calcul mensuel de la TVA due (TVA collectée − TVA déductible) et écriture qui solde les comptes de TVA.
- **TVA à décaisser** : dette de TVA nette envers l'État après liquidation (compte 4455).
- **Crédit de TVA** : créance nette sur l'État lorsque la TVA déductible dépasse la TVA collectée (compte 44567).
- **HT / TTC** : hors taxe / toutes taxes comprises (HT + TVA).

### Factures et réductions de prix

- **Facture** : document écrit obligatoire, toujours émis par le fournisseur (vendeur), qui détaille les biens ou prestations vendus et comporte des mentions obligatoires.
- **Facture de doit** : facture constatant que le client doit une somme au fournisseur (cas le plus fréquent).
- **Facture d'avoir** : facture, émise elle aussi par le fournisseur, constatant que le fournisseur doit une somme à son client (retour de produits, réduction accordée après coup).
- **Facture électronique** : facture générée par un logiciel dans un format informatique structuré et transmise via une plateforme ; ce n'est pas un simple PDF envoyé par courriel.
- **Contrepassation** : écriture qui inverse une écriture antérieure (les débits passent au crédit et inversement).
- **Réductions commerciales** : réductions liées à la relation commerciale : remise, rabais, ristourne.
- **Remise** : réduction accordée en raison de l'importance ou de la qualité du client (tarif professionnel).
- **Rabais** : réduction accordée en raison de la nature du produit (fin de série) ou d'un incident lors de la vente (casse au transport).
- **Ristourne** : réduction accordée en fin de période (généralement l'année) selon le chiffre d'affaires réalisé par le client ; elle récompense sa fidélité.
- **Escompte** : réduction financière accordée au client qui paie de manière anticipée ; charge financière pour le fournisseur (665 Escompte accordé), produit financier pour le client (765 Escompte obtenu).
- **Escompte conditionnel** : escompte mentionné sur la facture, dont le client ne bénéficie que s'il paie dans le délai indiqué.
- **Net commercial / net financier** : montant hors taxe après déduction des réductions commerciales / puis de l'escompte.

## I. La TVA

### A. Le mécanisme de la TVA

La fiscalité comprend trois grandes catégories d'impôts :

```
Impôts
├── sur le revenu : impôt sur le revenu (personnes physiques), impôt sur les sociétés (personnes morales)
├── sur le patrimoine : taxe foncière, IFI (ex-ISF) — dus même si le bien ne rapporte rien
└── sur la consommation : la TVA
```

La **TVA** est un **impôt indirect** :

- c'est le **consommateur final** (le particulier) qui en supporte le coût : il la paie avec le prix d'achat ;
- les entreprises la **collectent** sur leurs ventes et la reversent à l'administration fiscale.

Les entreprises paient elles aussi de la TVA sur leurs achats, mais, contrairement aux particuliers, elles peuvent **la récupérer** : c'est la **TVA déductible**. La TVA est donc **neutre** pour l'entreprise : elle ne s'enrichit pas et ne s'appauvrit pas ; elle n'est qu'un **intermédiaire** entre le consommateur (redevable effectif) et l'État.

**L'exemple du bûcheron** : le bûcheron coupe son bois en forêt sans rien acheter à personne : en le vendant 120 € HT à une scierie, il crée toute la valeur ajoutée (120). La scierie le transforme en planches et les revend à un magasin de bricolage, qui les revend à un particulier pour 250 € HT. À chaque étape, l'entreprise :

- **collecte** la TVA sur sa vente ;
- **déduit** la TVA payée sur son achat ;
- reverse **la différence** à l'État, c'est-à-dire la TVA correspondant à **sa propre valeur ajoutée**.

```
Bûcheron (VA 120) → Scierie (VA = son prix de vente − 120) → Magasin (VA = 250 − son prix d'achat) → Particulier
Somme des TVA reversées à chaque étape = TVA sur 250 €, entièrement supportée par le particulier
```

La TVA est donc une taxe qui frappe la **valeur ajoutée** créée à chaque étape.

**Neutre ne veut pas dire sans effet sur la trésorerie** : l'entreprise encaisse la TVA de ses clients puis la reverse presque aussitôt ; elle paie la TVA à ses fournisseurs puis se la fait rembourser. Plutôt que de verser toute la TVA collectée et de se faire rembourser la TVA déductible, on **compense** chaque mois et on ne reverse que la différence.

$$\text{TVA due} = \text{TVA collectée} - \text{TVA déductible}$$

Normalement, une entreprise en bonne santé a **plus de TVA collectée que de TVA déductible** : sinon, elle achète plus qu'elle ne vend, a plus de charges que de produits et ne crée pas de valeur ajoutée. Cela peut arriver ponctuellement (un gros investissement), pas durablement.

**Exclusions du droit à déduction** : certains achats ne permettent pas de déduire la TVA, par exemple les **moyens de transport de personnes** (voitures de tourisme, bicyclettes, bateaux), à la différence des **véhicules utilitaires** (transport de marchandises). Dans ce cas, comme un particulier, l'entreprise supporte le coût de la TVA.

### B. Les opérations imposables (champ d'application de la TVA)

**Article 256-I du CGI** : sont soumises à la TVA les livraisons de biens et les prestations de services effectuées **à titre onéreux** par un **assujetti** agissant en tant que tel. Trois critères :

**1. Une opération réalisée par un assujetti.** Le droit fiscal ne définit pas l'entreprise mais l'**assujetti** : une personne physique ou morale qui exerce une activité économique :

- **de manière habituelle** : il y a réitération de l'acte. Vendre une fois son vélo sur Le Bon Coin n'est pas imposable ; acheter des vélos pour les revendre régulièrement (ou vendre dix véhicules) fait de vous un assujetti, même non déclaré, avec un risque de **redressement** fiscal ;
- **de manière indépendante**, c'est-à-dire en son nom et pour son compte. C'est ce qui distingue le **salarié** (un vendeur de concession automobile) d'un prestataire indépendant : seul le **lien de subordination** les sépare. C'est pourquoi les **salaires** ne sont pas soumis à la TVA.

Il n'est pas nécessaire de poursuivre un but lucratif. Ce n'est pas non plus la déclaration comme entreprise qui compte : sinon, il suffirait de ne pas se déclarer pour échapper à la TVA.

**2. Une livraison de bien ou une prestation de service.** Notion très large : environ 99 % des opérations d'une entreprise (vente de matériel informatique, prestation informatique…). Ne sont **pas** concernés :

- la **cession d'actions** (titres de propriété d'une autre société : ni un bien ni un service au sens de la TVA) ;
- les **flux financiers** : remboursement d'un emprunt, encaissement d'une créance, paiement d'une dette, sommes d'argent.

Seuls les **flux réels** (biens et services) sont imposés, pas les flux financiers.

**3. À titre onéreux** : il faut une **contrepartie** à la livraison ou à la prestation, avec un **lien direct** entre la contrepartie et la prestation. Les opérations gratuites ne sont pas imposables (rare en pratique, l'entreprise visant un but lucratif).

**Cas du musicien de rue** : il fournit bien une prestation de service, de manière habituelle et indépendante. Mais le juge a estimé qu'il n'y avait **pas de lien direct** entre les sommes données par les passants (libres de donner beaucoup, peu ou rien) et la prestation : le **caractère onéreux manque**, l'opération n'est pas imposable. S'il loue une salle et fait payer l'entrée, le prix est déterminé : il y a un lien direct et l'opération devient imposable (comme les places de concert).

**Remarques** :

- La TVA est collectée uniquement sur les **flux réels sortants** (les ventes) ; sur les flux réels entrants (les achats), c'est le fournisseur qui facture la TVA, que l'entreprise déduira.
- Le caractère imposable s'apprécie **toujours du côté du vendeur** : peu importe que l'acheteur soit un particulier, une entreprise ou une administration. L'acheteur se pose seulement la question de savoir s'il peut **déduire** la TVA.
- Ne pas faire de facture ne permet pas d'échapper à la TVA.

**Conclusion** : dans la grande majorité des cas, l'entreprise doit facturer de la TVA à son client, qu'il soit une entreprise ou un particulier.

### C. Les opérations imposables mais exonérées

Certaines opérations remplissent les **trois critères** mais sont **expressément exonérées** par un texte spécifique :

- les **activités médicales et paramédicales** (pour les êtres humains ; les soins vétérinaires, eux, sont soumis à la TVA) — pour ne pas renchérir le coût de la santé ;
- les **locations d'immeubles nus** (et meublés) **à usage d'habitation** — pour ne pas renchérir le coût du logement ;
- les **activités d'enseignement** (y compris les cours particuliers) ;
- les **activités bancaires et financières**.

Exemple : un médecin libéral est un assujetti (activité médicale habituelle, en son nom et pour son compte, facturée), sa prestation est imposable, mais elle est exonérée par un texte. S'il est salarié, c'est son salaire qui échappe à la TVA (absence d'indépendance).

**Non imposable ≠ exonérée** : dans les deux cas il n'y a pas de TVA, mais la justification diffère :

- **non imposable** : l'un des trois critères manque ;
- **imposable mais exonérée** : les trois critères sont réunis, mais un texte écarte la TVA.

La distinction a des conséquences pratiques qu'on ne voit pas en première année.

### D. Les taux et le calcul de la TVA

| Taux | Nom | Exemples |
|---|---|---|
| **20 %** | normal | la plupart des opérations (s'applique sauf texte spécifique) ; alcool, sodas, caviar, alimentation animale |
| **10 %** | intermédiaire | restauration (pour favoriser l'activité touristique), hôtellerie, certains travaux dans la maison |
| **5,5 %** | réduit | la plupart des produits alimentaires (produits de première nécessité ; certains chocolats), les spectacles |
| **2,1 %** | super réduit | les médicaments |

L'alimentation humaine n'est pas exonérée : elle bénéficie d'un **taux réduit**. Il y a des exceptions (caviar, alcool, sodas, certains chocolats à 20 %). Il n'est pas demandé de connaître les taux opération par opération.

**Le calcul** : la TVA se calcule **toujours sur le montant HT**.

- À partir d'un montant **HT** : $\text{TVA} = \text{HT} \times t$ (1 000 € HT à 20 % → 200 € de TVA, 1 200 € TTC).
- À partir d'un montant **TTC** : on retrouve d'abord le HT en **divisant** par $(1 + t)$, puis on calcule la TVA :

$$\text{HT} = \frac{\text{TTC}}{1 + t} \qquad \text{TVA} = \text{HT} \times t$$

Exemple : 1 470 € TTC à 20 % → HT = 1 470 / 1,20 = 1 225 € → TVA = 1 225 × 20 % = 245 €. On divise par 1,20 (20 %), 1,10 (10 %), 1,055 (5,5 %).

**Erreur fréquente** : multiplier le TTC par 0,80 (1 − t) ou appliquer le taux directement au TTC. Cela ne donne pas le bon résultat.

### E. L'enregistrement comptable

La TVA s'ajoute aux deux premières des **quatre catégories d'opérations courantes** (achats et ventes). Les deux autres (encaissements de créances clients, remboursements de dettes) sont des **flux financiers** : **jamais de TVA**.

**Logique patrimoniale** :

- la **TVA déductible** est une **créance** sur l'État (actif circulant, créances fiscales) : un compte d'actif qui augmente se **débite** ;
- la **TVA collectée** est une **dette** envers l'État (passif, dettes fiscales et sociales) : un compte de passif qui augmente se **crédite**.

**Achat d'un bien ou d'un service** :

| Débit | Crédit |
|---|---|
| Compte 6 (charge) ou 2 (immobilisation) — **HT** | 512 Banque, 530 Caisse, 401 Fournisseurs ou 404 Fournisseurs d'immobilisations — **TTC** |
| 44566 TVA déductible sur autres biens et services, ou 44562 TVA déductible sur immobilisations — **TVA** | |

(L'achat de valeurs mobilières de placement, actifs financiers, ne donne pas lieu à TVA.)

**Vente d'un bien ou d'un service** :

| Débit | Crédit |
|---|---|
| 411 Clients, 512 Banque ou 530 Caisse — **TTC** | 701 Ventes de produits finis, 706 Prestations de services ou 707 Ventes de marchandises — **HT** |
| | 4457 (44571) TVA collectée — **TVA** |

Rappel : les **produits finis** sont fabriqués par l'entreprise à partir de matières premières (industriel) ; les **marchandises** sont revendues sans transformation (commerçant, distributeur).

Conseil : comprendre la logique, puis **apprendre par cœur** la structure des écritures pour ne pas mélanger débit et crédit le jour de l'examen.

#### La liquidation de la TVA

Tout au long du mois, chaque opération imposable mouvemente un compte de TVA déductible (débit) ou de TVA collectée (crédit). **Exemple — grand livre au 31 mars** :

| Compte | Opérations | Solde |
|---|---|---|
| 44562 TVA déductible sur immobilisations | achat d'un utilitaire (06/03) : 2 000 | débiteur 2 000 |
| 44566 TVA déductible sur ABS | marchandises 500, loyer du siège 1 100, honoraires comptables 800 | débiteur 2 400 |
| 4457 TVA collectée | ventes de marchandises 1 300, de produits finis 1 800, prestations 2 300 | créditeur 5 400 |

Au 31 mars, l'entreprise doit 5 400 € et l'État lui doit 4 400 € : après compensation, elle doit **verser 1 000 €**.

**L'écriture de liquidation** **solde** (remet à zéro) les comptes de TVA, pour repartir de zéro le mois suivant, et fait apparaître la dette nette :

| Compte | Débit | Crédit |
|---|---|---|
| 4457 TVA collectée | 5 400 | |
| 44566 TVA déductible sur ABS | | 2 400 |
| 44562 TVA déductible sur immobilisations | | 2 000 |
| 4455 TVA à décaisser | | 1 000 |

Au bilan, il ne reste que la dette de **1 000 € de TVA à décaisser**. Le mois suivant, l'entreprise la paie : **débit 4455 TVA à décaisser / crédit 512 Banque** (1 000) — une dette qui disparaît se débite, la banque qui diminue se crédite.

#### Le crédit de TVA

Si la TVA déductible dépasse la TVA collectée, c'est l'**État qui doit** de la TVA à l'entreprise : c'est un **crédit de TVA**. Exemple : avec un achat supplémentaire de machine-outil (TVA 1 500), la TVA déductible atteint 3 500 + 2 400 = 5 900 € pour 5 400 € collectés : l'État doit **500 €**.

L'écriture de liquidation est presque identique, mais le compte **44567 Crédit de TVA** est **débité** (créance) au lieu du 4455 crédité :

| Compte | Débit | Crédit |
|---|---|---|
| 4457 TVA collectée | 5 400 | |
| 44567 Crédit de TVA | 500 | |
| 44566 TVA déductible sur ABS | | 2 400 |
| 44562 TVA déductible sur immobilisations | | 3 500 |

Le crédit de TVA est en général **reporté** sur le mois suivant (déduit de la TVA due) ; l'entreprise peut aussi en demander le **remboursement immédiat** s'il atteint au moins **760 €** (seuil mensuel ; il diminue en fin d'année).

## II. Les opérations avec réductions de prix

### A. La facture

La **facture** est un document **obligatoire et réglementé**, **toujours émis par le vendeur** (jamais par l'acheteur : c'est à lui qu'il faut la demander). Ses **mentions obligatoires** : identité du fournisseur et du client, numéro de TVA du vendeur (pour savoir s'il collecte la TVA), date, numéro (les numéros doivent se suivre chronologiquement), désignation et prix des biens ou prestations, montants HT, TVA et TTC…

Sans facture, l'entreprise ne peut déduire ni la **charge** ni la **TVA**.

| Type | Émise par | Constate que… | Cas |
|---|---|---|---|
| **Facture de doit** | le fournisseur | le **client doit** une somme au fournisseur | cas normal (la grande majorité) |
| **Facture d'avoir** | le fournisseur | le **fournisseur doit** une somme au client | retour de produits (rétractation d'un achat en ligne, reprise acceptée), réduction de prix accordée après la facturation (défaut, retard de livraison) |

**La facture électronique** :

- historiquement, les factures étaient envoyées par la poste puis par courriel (un PDF par courriel n'est **pas** une facture électronique) ;
- depuis **2020**, les factures adressées à une **administration publique** doivent être électroniques, via une plateforme ;
- depuis le **1er septembre 2026**, l'obligation s'étend aux entreprises (d'abord les plus grandes ; les plus petites disposent d'un délai supplémentaire). La facture est générée par un logiciel dans un format structuré et transite par une plateforme agréée (un prestataire).
- Intérêt pour l'État : connaître en temps réel l'activité facturée dans le pays et **lutter contre la fraude à la TVA**. C'est, avec l'IA, l'un des grands sujets actuels des cabinets d'expertise comptable.

### B. Le retour de produits au fournisseur

Un retour de biens s'analyse comme l'**annulation totale ou partielle** du contrat : il se traduit en comptabilité par la **contrepassation** de la facture de doit.

**Exemple** : un fournisseur vend à crédit 100 unités à 10 € (1 000 € HT, 200 € de TVA, 1 200 € TTC).

| Chez le fournisseur | Débit | Crédit | | Chez le client | Débit | Crédit |
|---|---|---|---|---|---|---|
| 411 Clients | 1 200 | | | 607 Achats de marchandises | 1 000 | |
| 707 Ventes de marchandises | | 1 000 | | 44566 TVA déductible | 200 | |
| 44571 TVA collectée | | 200 | | 401 Fournisseurs | | 1 200 |

Le client rapporte toute la marchandise, le fournisseur l'accepte (entre professionnels, il n'y a pas de droit de rétractation automatique) et émet une **facture d'avoir** : on **inverse** les écritures — chez le fournisseur, débit 707 (1 000) et 44571 (200), crédit 411 (1 200) ; chez le client, débit 401 (1 200), crédit 607 (1 000) et 44566 (200).

### C. Les réductions de prix

```
Réductions de prix
├── Commerciales : remise, rabais, ristourne
│   ├── sur la facture de doit (dès le départ) → aucun enregistrement : on comptabilise le net commercial
│   └── sur facture d'avoir (après coup) → comptes 709 RRR accordés / 609 RRR obtenus
└── Financières : escompte → toujours enregistré : 665 Escompte accordé / 765 Escompte obtenu
```

**Les réductions commerciales** :

- **remise** : selon l'importance ou la qualité du client (les professionnels ont souvent des prix inférieurs à ceux des particuliers) ;
- **rabais** : selon la nature du produit (fin de série) ou un incident lors de la vente (casse lors de la livraison) ;
- **ristourne** : en fin de période (généralement l'année), selon le chiffre d'affaires réalisé avec le client (par exemple 2 % si le client atteint 1 million de chiffre d'affaires) ; elle récompense la fidélité.

**La réduction financière : l'escompte**, accordé quand le client **paie de manière anticipée**. Le client se comporte un peu comme une banque : il avance de la trésorerie à son fournisseur. D'où :

- chez le **fournisseur** : une **charge financière** (il paie indirectement des intérêts) → **665 Escompte accordé** ;
- chez le **client** : un **produit financier** → **765 Escompte obtenu**.

#### 1. Réductions sur la facture de doit

Exemple de facture :

| | Montant |
|---|---|
| Marchandises (brut) | 20 000,00 |
| Remise 10 % | − 2 000,00 |
| | 18 000,00 |
| Rabais 30 % | − 5 400,00 |
| **Net commercial** | **12 600,00** |
| Escompte 2 % | − 252,00 |
| **Net financier** | **12 348,00** |
| TVA 20 % | 2 469,60 |
| **Net à payer** | **14 817,60** |

Les réductions successives se calculent **en cascade** (le rabais de 30 % s'applique aux 18 000 restants). Les réductions **commerciales n'apparaissent pas** dans l'écriture : on enregistre directement le **net commercial**. L'**escompte apparaît toujours**.

| Chez le fournisseur | Débit | Crédit | | Chez le client | Débit | Crédit |
|---|---|---|---|---|---|---|
| 411 Clients | 14 817,60 | | | 607 Achats de marchandises | 12 600,00 | |
| 665 Escompte accordé | 252,00 | | | 44566 TVA déductible | 2 469,60 | |
| 707 Ventes de marchandises | | 12 600,00 | | 765 Escompte obtenu | | 252,00 |
| 44571 TVA collectée | | 2 469,60 | | 401 Fournisseurs | | 14 817,60 |

#### 2. Réductions sur facture d'avoir (après coup)

**a. Les réductions commerciales** : on utilise les comptes **709 Rabais, remises, ristournes accordés** (fournisseur) et **609 RRR obtenus** (client). L'écriture a la même structure que la contrepassation d'un retour, mais pour le seul montant de la réduction, en remplaçant 707 par 709 et 607 par 609.

Exemple (suite de la vente de 1 000 € HT) : la marchandise est abîmée pendant le transport ; le client la garde et le fournisseur accorde un **rabais de 15 %** : 150 € HT, 30 € de TVA, 180 € TTC.

- Chez le fournisseur : débit 709 RRR accordés (150) et 44571 TVA collectée (30), crédit 411 Clients (180).
- Chez le client : débit 401 Fournisseurs (180), crédit 609 RRR obtenus (150) et 44566 TVA déductible (30).

**b. Les réductions financières : l'escompte conditionnel.** En pratique, l'escompte n'est souvent pas inclus dans la facture initiale, car on ne sait pas si le client paiera en avance : la facture **mentionne** seulement l'escompte dont il bénéficiera s'il paie dans le délai. S'il en profite, le fournisseur émet ensuite une **facture d'avoir**.

Exemple : le **5/06**, le fournisseur X vend 1 000 € HT de marchandises (1 200 € TTC), payables à 30 jours, avec un **escompte de 2 % pour paiement sous huitaine**. Écriture classique de vente (fournisseur) et d'achat (client) le 5/06.

Le **10/06**, le client paie en déduisant l'escompte : 1 200 × 2 % = 24 € TTC, soit 20 € HT (24 / 1,20) et 4 € de TVA ; il paie donc **1 176 €**. Le **11/06**, le fournisseur émet la facture d'avoir.

| Chez le fournisseur | Débit | Crédit |
|---|---|---|
| 10/06 — 512 Banque | 1 176 | |
| 10/06 — 411 Clients | | 1 176 |
| 11/06 — 665 Escompte accordé | 20 | |
| 11/06 — 44571 TVA collectée | 4 | |
| 11/06 — 411 Clients | | 24 |

| Chez le client | Débit | Crédit |
|---|---|---|
| 10/06 — 401 Fournisseurs | 1 176 | |
| 10/06 — 512 Banque | | 1 176 |
| 11/06 — 401 Fournisseurs | 24 | |
| 11/06 — 765 Escompte obtenu | | 20 |
| 11/06 — 44566 TVA déductible | | 4 |

Remarques :

- Chez le fournisseur, on aurait pu débiter un compte de TVA déductible ; en pratique on débite la **TVA collectée** (le flux est inversé) : dans les deux cas, la dette de TVA envers l'État diminue. Symétriquement, le client crédite la TVA déductible.
- Dans le **grand livre**, le paiement de 1 176 laisse un solde de 24 (le client semble encore devoir 24 €) ; c'est l'écriture de la facture d'avoir qui **solde** le compte 411 chez le fournisseur et le compte 401 chez le client.

<!-- SOURCES INTÉGRÉES
- Eco gestion 4-transcript-DRAFT ✅.txt
- Eco gestion maison 5-transcript-DRAFT ✅.txt
- S10 (D) Chapitre 3 - TVA et réduction ✅.pptx
-->
