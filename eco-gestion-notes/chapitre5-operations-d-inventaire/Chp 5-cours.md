# Eco-gestion — Chapitre 4 : Les opérations d'inventaire

> Le support reçu commence au point V.2 (créance douteuse). Les sections I à IV et le point V.1 (principe général de la dépréciation) ne sont pas encore intégrés.

## Définitions

### Amortissements et dépréciations

- **Amortissement** : perte de valeur **irréversible** d'un actif immobilisé ; c'est une charge, toujours calculée sur le montant **HT**.
- **Dépréciation** : perte de valeur probable (réversible) d'un actif, égale à **valeur d'origine − valeur actuelle** ; elle diminue l'actif via la colonne « amortissements et dépréciations ».
- **Créance douteuse** : créance client dont le paiement est incertain parce que le client connaît des difficultés financières (compte 416 Clients douteux).
- **Créance irrécouvrable** : créance dont il est certain qu'elle ne sera jamais payée ; la perte devient définitive (compte 654 Pertes sur créances irrécouvrables).
- **DADP** (681 / 686 / 687) : dotations aux amortissements, dépréciations et provisions — charge d'exploitation / financière / exceptionnelle.
- **RADP** (781 / 786 / 787) : reprises sur amortissements, dépréciations et provisions — produit d'exploitation / financier / exceptionnel.
- **Principe de prudence** : l'entreprise doit prendre en compte dans son résultat un risque dès qu'il apparaît, sans attendre qu'il se concrétise.

### Provisions pour risques

- **Provision pour risques** : constatation d'un risque de **hausse d'un passif** (une dette probable) ; compte 151, au passif du bilan dans le poste « Provisions pour risques et charges ».
- **Provisions pour risques et charges** : troisième type de passif, entre capitaux propres et dettes ; ce sont des dettes **probables**, et non certaines.

### Régularisations

- **Principe d'indépendance des exercices** (PCG) : les charges et les produits qui concernent un exercice doivent être constatés dans cet exercice.
- **Produit constaté d'avance (PCA)** : produit enregistré en N qui concerne en partie N+1 (compte 487, passif).
- **Charge constatée d'avance (CCA)** : charge enregistrée en N qui concerne en partie N+1 (compte 486, actif).
- **Produit à recevoir** : produit de N dont la facture n'est éditée qu'en N+1 (4181 Clients – factures à établir, 44587 TVA sur factures à établir).
- **Charge à payer** : charge de N dont la facture n'est reçue qu'en N+1 (4081 Fournisseurs – factures non parvenues, 44586 TVA sur factures non parvenues).
- **Extourne (contre-passation)** : écriture passée au 1er janvier N+1 qui inverse l'écriture de régularisation du 31/12/N.

### Impôt sur les sociétés et clôture

- **Impôt sur les sociétés (IS)** : impôt dû par l'entreprise sur les bénéfices de l'année ; IS = résultat fiscal × 25 %.
- **Résultat fiscal** : résultat comptable + réintégrations (charges non déductibles) − déductions (produits non imposables).
- **Réintégration extra-comptable** : ajout au résultat d'une charge comptablement justifiée mais que le droit fiscal refuse de déduire.
- **Déduction extra-comptable** : retrait du résultat d'un produit comptable que le droit fiscal n'impose pas.
- **Résultat net comptable** : résultat après enregistrement de l'IS (« net d'IS »).
- **Écritures de regroupement** : écritures de clôture qui soldent tous les comptes de gestion (6 et 7) par le compte 12 Résultat de l'exercice (120 bénéfice, 129 perte).

## Notes perso — l'amortissement

- L'amortissement porte sur les **actifs immobilisés** et il est **irréversible**.
- L'amortissement est une **charge**.
- L'amortissement se calcule toujours sur le **HT**.

## V. Les dépréciations

### 2. Cas particulier de la créance douteuse

Comme tout actif, une créance client peut perdre de la valeur quand le client connaît des difficultés financières : il y a un risque de ne pas être payé, la créance est dite **douteuse** et elle fait l'objet d'une dépréciation. Trois remarques :

#### a. Isolement de la créance douteuse

Dès qu'une créance présente un risque de non-paiement, on la transfère dans le compte « Clients douteux » (montant TTC) :

| 31/12 | Débit | Crédit |
|---|---|---|
| 416 Clients douteux | Créance TTC | |
| 411 Clients | | Créance TTC |

#### b. Calcul de la dépréciation : toujours sur le HT

Au bilan, la créance figure TTC. Mais si le client ne paie jamais, l'État **rembourse la TVA collectée** (elle a été reversée lors de la vente, que le client paie ou non). La perte potentielle se limite donc au **HT** : on calcule **toujours la dépréciation sur le montant HT**.

Exemple : le client X doit 6 000 € TTC ; l'entreprise espère récupérer 70 %.
6 000 / 1,20 = 5 000 € HT → dépréciation = 30 % × 5 000 = **1 500 €** (ou 5 000 (Vo) − 70 % × 5 000 (Va) = 5 000 − 3 500 = 1 500).

#### c. Lorsque la créance devient irrécouvrable

Quand il est certain que le client ne paiera pas : on constate la perte définitive et on **annule (reprend) la dépréciation existante**, devenue sans objet (le risque est devenu certain).

| 31/12 — constatation de la perte définitive | Débit | Crédit |
|---|---|---|
| 654 Pertes sur créances irrécouvrables | HT | |
| 4457 TVA collectée | TVA | |
| 416 Clients douteux | | TTC |

| 31/12 — reprise de la dépréciation | Débit | Crédit |
|---|---|---|
| 491 Dépréciations des comptes de clients | X | |
| 781 RADP – exploitation | | X |

Le débit de 4457 traduit la récupération de la TVA auprès de l'État.

#### d. Application (entreprise CYERT, client MARCH)

**31/12/N** — vente à crédit le 05/05/N de 2 400 € TTC ; le client ne devrait honorer que 50 %.
HT = 2 400 / 1,20 = 2 000 ; dépréciation = 2 000 − 50 % × 2 000 = **1 000 €**.

| 31/12/N | Débit | Crédit |
|---|---|---|
| 416 Clients douteux | 2 400 | |
| 411 Clients | | 2 400 |
| 681 DADP – exploitation | 1 000 | |
| 491 Dépréciations des créances clients | | 1 000 |

Bilan : créances brut 2 400, A&D 1 000, net 1 400. Compte de résultat : DADP + 1 000 → résultat − 1 000.

**31/12/N+1** — le client ne devrait plus honorer que 40 %. Tableau de réajustement :

| Valeur d'origine HT (1) | Dépréciation existante (2) | VNC HT (3 = 1 − 2) | Valeur actuelle HT (4) | Dotation (3 − 4) | Reprise (4 − 3) |
|---|---|---|---|---|---|
| 2 000 | 1 000 | 1 000 | 800 (2 000 × 40 %) | 200 | — |

La valeur de l'actif a encore baissé : **dotation complémentaire** de 200 (681 / 491). Bilan : brut 2 400, A&D 1 200, net 1 200. Résultat − 200.

**N+2** — le 16/06/N+2, le client est liquidé judiciairement ; l'entreprise reçoit 900 € ; le solde (2 400 − 900 = 1 500 TTC) ne sera jamais payé.

| 16/06/N+2 — paiement (écriture courante) | Débit | Crédit |
|---|---|---|
| 512 Banque | 900 | |
| 416 Clients douteux | | 900 |

| 31/12/N+2 — perte définitive | Débit | Crédit |
|---|---|---|
| 654 Pertes sur créances irrécouvrables | 1 250 | |
| 4457 TVA collectée | 250 | |
| 416 Clients douteux | | 1 500 |

| 31/12/N+2 — reprise totale de la dépréciation | Débit | Crédit |
|---|---|---|
| 491 Dépréciations des créances clients | 1 200 | |
| 781 RADP – exploitation | | 1 200 |

Compte de résultat N+2 : perte sur créance 1 250, RADP 1 200 → résultat − 50.

**Lecture des trois comptes de résultat** : − 1 000 (N), − 200 (N+1), − 50 (N+2), soit 1 250 au total = la perte HT réelle (1 500 TTC / 1,20). La charge a surtout été supportée en N, **l'exercice où le risque est apparu** : c'est la manifestation du **principe de prudence**.

### 3. Cas particulier des stocks

Exemple : stock de MP déprécié de 2 000 € au 31/12/N, dépréciation de 5 000 € au 31/12/N+1.

Ce n'est probablement pas le même stock : les MP du 31/12/N ont été consommées en N+1, et la nouvelle dépréciation concerne des MP achetées en N+1. On ne passe donc **pas un simple ajustement** (+ 3 000) mais :

1. une **reprise totale** de l'ancienne dépréciation, devenue sans objet (l'actif a disparu) ;
2. une **nouvelle dotation** sur le nouveau stock.

| 31/12/N+1 | Débit | Crédit |
|---|---|---|
| 397 Dépréciations des stocks de MP | 2 000 | |
| 781 RADP – exploitation | | 2 000 |
| 681 DADP – exploitation | 5 000 | |
| 397 Dépréciations des stocks de MP | | 5 000 |

## VI. Les provisions pour risque

Le principe de prudence impose aussi de prendre en compte les risques de **hausse du passif** : litiges avec des tiers (clients, salariés → dommages et intérêts), garanties données aux clients, amendes et pénalités attendues, pertes de change sur des marchés en devises…

- La **dépréciation** prend en compte le risque de **baisse d'un actif** avant que la perte soit certaine (seule la vente fixe avec certitude la valeur d'un actif).
- La **provision pour risques** poursuit le même objectif, pour le risque de **hausse d'un passif** (une dette).

### 1. Constatation de la provision

Écriture similaire à la dépréciation, mais la provision **augmente le passif** au lieu de diminuer l'actif :

| 31/12 | Débit | Crédit |
|---|---|---|
| 681 / 686 / 687 DADP – exploitation / financière / exceptionnelle | X | |
| 151 Provision pour risques | | X |

Au bilan apparaît le poste **« Provisions pour risques et charges »**, entre les capitaux propres et les dettes : il ressemble aux dettes, mais ce sont des dettes **probables**, et non certaines.

### 2. Réévaluation ultérieure de la provision

À chaque inventaire, on réévalue le risque et on réajuste la provision :

- **risque en hausse** → dotation complémentaire = dette probable − provision existante (681 / 151) ;
- **risque en baisse ou disparu** → reprise = provision existante − dette probable (151 / 781-786-787) ;
- **risque réalisé** dans l'exercice → **reprise totale** de la provision, devenue sans objet (la dette probable est devenue certaine). Cette reprise compense la charge enregistrée au titre de l'événement (par exemple le paiement des dommages et intérêts).

### 3. Application (entreprise LORSCH)

Depuis le 1/04/N, litige avec un ancien salarié qui réclame 50 000 €. Risque estimé à 25 000 € au 31/12/N, puis à 80 % de la somme demandée en N+1. Le 6/06/N+2, condamnation à verser 35 000 €, payés comptant.

| Date | Écriture | Débit | Crédit |
|---|---|---|---|
| 31/12/N | 681 DADP / 151 Provision pour risques | 25 000 | 25 000 |
| 31/12/N+1 | 681 DADP / 151 (50 000 × 80 % − 25 000) | 15 000 | 15 000 |
| 6/06/N+2 | 648 Autres charges de personnel / 512 Banque (écriture courante) | 35 000 | 35 000 |
| 31/12/N+2 | 151 Provision pour risques / 781 RADP (reprise totale) | 40 000 | 40 000 |

- Bilan N : provision 25 000 ; résultat − 25 000.
- Bilan N+1 : provision 40 000 ; résultat − 15 000.
- N+2 : charge de personnel 35 000, RADP 40 000 → résultat **+ 5 000** ; provision ramenée à 0.

Au total, la charge nette est de 25 000 + 15 000 − 5 000 = 35 000 € (le montant réellement payé), mais elle a été anticipée dès N.

## VII. Les régularisations

### 1. Les charges et produits constatés d'avance

Le comptable enregistre les opérations **à la date du justificatif** (une facture est enregistrée à sa date d'édition). Or certaines factures éditées en N portent sur une opération qui concerne N+1 : c'est alors le résultat N qui est faussé. Le **principe d'indépendance des exercices** impose de régulariser.

**Exemple 1** — facture de vente de 12 000 € HT le 1/06/N : maintenance du 1/06/N au 31/05/N+1. Le produit ne concerne N que pour 7 000 (12 000 × 7/12) et N+1 pour 5 000 (12 000 × 5/12) : **produit constaté d'avance de 5 000**.

**Exemple 2** — facture de loyer semestriel de 21 000 € HT reçue le 1/11/N (du 1/11/N au 30/04/N+1). La charge ne concerne N que pour 7 000 (21 000 × 2/6) : **charge constatée d'avance de 14 000**.

#### a. Lorsqu'un produit a été constaté d'avance

On « transfère » le produit vers un compte de passif au 31/12/N, puis on extourne au 1/1/N+1 :

| Date | Débit | Crédit |
|---|---|---|
| 31/12/N | 7.. Produits (HT du PCA) | 487 Produits constatés d'avance |
| 1/1/N+1 | 487 Produits constatés d'avance | 7.. Produits |

#### b. Lorsqu'une charge a été constatée d'avance

On « transfère » la charge vers un compte d'actif au 31/12/N, puis on extourne au 1/1/N+1 (la charge revient sur N+1) :

| Date | Débit | Crédit |
|---|---|---|
| 31/12/N | 486 Charges constatées d'avance (HT de la CCA) | 6.. Charges |
| 1/1/N+1 | 6.. Charges | 486 Charges constatées d'avance |

**On ne régularise jamais la TVA** : seule la régularisation du résultat compte, et la TVA est neutre pour l'entreprise.

#### Incidence sur les documents de synthèse

- **Exemple 1** : 31/12/N, 706 Prestations de services / 487 PCA : 5 000 → produit N ramené de 12 000 à **7 000** ; PCA 5 000 au passif. Au 1/1/N+1, l'extourne (487 / 706) fait apparaître 5 000 de produit en N+1 (du 1/01 au 31/05/N+1), et le PCA retombe à 0.
- **Exemple 2** : 31/12/N, 486 CCA / 613 Locations : 14 000 → charge N ramenée de 21 000 à **7 000** ; CCA 14 000 à l'actif. Au 1/1/N+1, l'extourne (613 / 486) fait apparaître 14 000 de charge en N+1 (du 1/01 au 30/04/N+1).

### 2. Les charges à payer et les produits à recevoir

C'est le problème inverse : l'opération se rattache à N mais la facture n'est éditée qu'en N+1, donc comptabilisée en N+1 ; c'est le résultat N+1 qui est faussé.

- **Exemple 3** : marchandises de 7 500 € HT livrées à un client fin décembre N, facture éditée en janvier N+1 → produit à recevoir.
- **Exemple 4** : marchandises de 7 500 € HT livrées par un fournisseur fin décembre N, facture reçue en janvier N+1 → charge à payer.

#### a. Produit se rattachant à N constaté en N+1

On enregistre le produit au 31/12/N, puis on extourne au 1/1/N+1 (ce qui élimine du résultat N+1 le produit que la facture fera réapparaître) :

| 31/12/N | Débit | Crédit |
|---|---|---|
| 4181 Clients – factures à établir | TTC | |
| 44587 TVA sur factures à établir | | TVA |
| 7.. Produit correspondant | | HT |

#### b. Charge se rattachant à N constatée en N+1

| 31/12/N | Débit | Crédit |
|---|---|---|
| 6.. Charge correspondante | HT | |
| 44586 TVA sur factures non parvenues | TVA | |
| 4081 Fournisseurs – factures non parvenues | | TTC |

Puis extourne au 1/1/N+1, qui élimine la charge du résultat N+1.

Ici, contrairement aux CCA/PCA, **la TVA apparaît** dans l'écriture, puisqu'on enregistre une opération complète (comme une facture), et non une simple partie d'une opération.

#### c. Application

- **Exemple 3** : 31/12/N, 4181 (9 000) / 44587 (1 500) / 707 Ventes de marchandises (7 500) → produit de N + 7 500 ; clients + 9 000 ; TVA due + 1 500. Au 1/1/N+1, l'extourne ramène tout à 0 : la facture de janvier N+1 n'affectera donc pas le résultat N+1.
- **Exemple 4** : 31/12/N, 607 Achats de marchandises (7 500) + 44586 (1 500) / 4081 (9 000) → charge de N + 7 500 ; fournisseurs + 9 000. Au 1/1/N+1, l'extourne élimine la charge de N+1.

## VIII. L'impôt sur les sociétés

L'IS est l'impôt payé par l'entreprise sur les bénéfices de l'année. Il part du **résultat comptable**, corrigé par le droit fiscal :

- certaines charges, bien que comptablement justifiées, ne sont pas admises en déduction → **réintégrées** extra-comptablement ;
- certains produits comptables ne sont pas imposés → **déduits** extra-comptablement.

```
  Résultat comptable
+ réintégrations (charges non déductibles)
- déductions (produits non imposables)
= Résultat fiscal          → IS = résultat fiscal × 25 %
```

| Date | Écriture | Débit | Crédit |
|---|---|---|---|
| 31/12/N | 695 Impôts sur les bénéfices / 444 État, impôt sur les bénéfices | IS | IS |
| 15/05/N+1 | 444 État, impôt sur les bénéfices / 512 Banque | IS | IS |

- L'entreprise a jusqu'au **15 mai N+1** pour payer l'IS. En réalité, elle verse **4 acomptes** pendant l'année N et ne paie le 15/05 que le **solde** (IS dû − acomptes).
- L'IS est la **dernière écriture** comptable enregistrée.

**Exemple** : résultat comptable 21 000 ; charges non déductibles 10 000 ; produits non imposables 5 000.
Résultat fiscal = 21 000 + 10 000 − 5 000 = 26 000 → IS = 25 % × 26 000 = **6 500 €**.
Après enregistrement : total des charges 145 500, bénéfice **14 500** = **résultat net comptable** (net d'IS) ; au bilan, résultat 14 500 et dettes fiscales 6 500.

## IX. Édition du compte de résultat et virement du résultat au bilan

Une fois l'IS enregistré, on édite le compte de résultat. Les dernières écritures sont les **écritures de regroupement**, qui soldent les comptes de gestion :

- on **crédite** les comptes débiteurs (charges) ;
- on **débite** les comptes créditeurs (produits) ;
- en contrepartie, on utilise le compte **12 Résultat de l'exercice** : **120** (bénéfice) ou **129** (perte).

Le compte 12 se substitue ainsi à l'ensemble des comptes de gestion.

| 31/12/N — suite de l'exemple | Débit | Crédit |
|---|---|---|
| 70 + 781 Produits d'exploitation | 156 000 | |
| 76 + 786 Produits financiers | 4 000 | |
| 61 à 65 + 681 Charges d'exploitation | | 123 000 |
| 66 + 686 Charges financières | | 12 000 |
| 67 Charges exceptionnelles | | 4 000 |
| 695 Impôts sur les bénéfices | | 6 500 |
| 120 Résultat de l'exercice (bénéfice) | | 14 500 |

<!-- SOURCES INTÉGRÉES
- S14 (D) Chapitre 4 - les dépré, prov, régularisations, IS et CR ✅.pdf
- Sans nom 2 ✅.odt
-->
