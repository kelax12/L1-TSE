# Eco-gestion — Chapitre 2 : Le système d'information comptable

## Définitions

- **Système d'information comptable** : système d'information qui classe, stocke et restitue les informations financières d'une entité. Chaque poste du bilan et du compte de résultat y est identifié par une **adresse** (un numéro de compte et un intitulé).
- **Adresse d'un compte** : numéro de compte accompagné d'un intitulé. Le numéro rattache le compte à une catégorie du bilan (actif, dette, capitaux propres) ou du compte de résultat (charge, produit) ; l'intitulé caractérise la nature de l'opération.
- **Classe de comptes** : premier chiffre du numéro de compte, qui détermine la grande catégorie à laquelle il appartient (capitaux, immobilisations, stocks, tiers, financiers, charges, produits — voir plan des classes ci-dessous).
- **Compte en T** : représentation schématique d'un compte comptable, avec le débit à gauche et le crédit à droite — quel que soit le compte considéré.
- **Débit / Crédit** : les deux colonnes d'un compte en T ; le débit est toujours à gauche, le crédit toujours à droite, quel que soit le numéro de compte.
- **Principe de la partie double** : principe selon lequel toute écriture comptable mouvemente au moins deux comptes, de sorte que le total débité de l'écriture soit toujours égal au total crédité.
- **Flux réel** : échange de biens ou de services entre l'entreprise et un tiers.
- **Flux financier** : échange d'une somme d'argent, ou d'une dette/créance — une dette (ou une créance) est elle aussi un flux financier, car elle correspond à une somme d'argent dont le versement est décalé dans le temps.
- **Emploi (destination)** : ce que l'entreprise obtient dans une opération économique (le flux entrant) ; répond à la question « qu'a-t-on obtenu ? » ; toujours débité.
- **Ressource (origine)** : ce grâce à quoi l'entreprise a obtenu l'emploi (le flux sortant) ; répond à la question « grâce à quoi ? » ; toujours créditée.
- **Approche par les flux** : méthode de comptabilisation d'une opération économique fondée sur l'identification du flux entrant (débité) et du flux sortant (crédité).
- **Approche patrimoniale** : méthode de comptabilisation fondée sur l'effet de l'opération sur le patrimoine (le bilan) : un compte d'actif qui augmente est débité, qui diminue est crédité ; un compte de passif qui augmente est crédité, qui diminue est débité. C'est l'approche qui explique fondamentalement le fonctionnement du système d'information comptable (l'approche par les flux n'en est qu'une simplification pratique).
- **Substitution du poste résultat par un compte 6 ou 7** : règle propre à l'approche patrimoniale — lorsqu'une opération devrait mouvementer le poste 12 (résultat), on le remplace par un compte de charge (classe 6) s'il diminue, ou de produit (classe 7) s'il augmente, afin d'alimenter le compte de résultat plutôt que de se contenter de modifier le bilan.
- **Pièce comptable** : document justificatif à l'origine de tout enregistrement comptable (facture d'achat, facture de vente, talon de chèque, bulletin de salaire...). Une facture est toujours émise par le vendeur, jamais par l'acheteur.
- **Livre journal** : document comptable qui enregistre chronologiquement toutes les opérations, sous forme de lignes indiquant la date, le(s) compte(s) débité(s) (toujours indiqué en premier, par convention), le(s) compte(s) crédité(s), les intitulés et les montants.
- **Grand livre** : état comptable intermédiaire qui reprend, pour chaque compte, le détail chronologique de tous ses mouvements (débits et crédits) et son solde.
- **Balance** : état comptable intermédiaire qui reprend, pour chaque compte classé par ordre croissant, le total des mouvements débiteurs, le total des mouvements créditeurs et le solde correspondant, sans le détail de chaque opération.
- **Solde débiteur / créditeur** : différence entre le total débit et le total crédit d'un compte. Par convention, il est présenté dans la colonne opposée à celle où il est le plus important (un solde créditeur s'inscrit en colonne débit, et inversement), de sorte que le total débit affiché soit toujours égal au total crédit affiché.
- **Avant inventaire / après inventaire** : état des comptes selon que les écritures d'inventaire (opérations de fin d'exercice, comme les dotations aux amortissements et dépréciations) ont déjà été comptabilisées ou non. Après inventaire, ces opérations sont comptabilisées dans un livre d'inventaire (même fonctionnement que le livre journal, seul le terme change).
- **Non-mouvementation des stocks** : pratique comptable consistant à ne pas faire formellement entrer/sortir les stocks (matières premières, marchandises, produits finis) lors de chaque achat ou vente, par souci de simplicité — l'achat est directement comptabilisé en charge et la vente en produit, quitte à corriger en fin de période.
- **Régularisation des stocks** : écriture de fin de période qui corrige l'effet de la non-mouvementation des stocks, en augmentant le poste stock à l'actif et en corrigeant le résultat, pour refléter la valeur réelle des stocks restants et le bénéfice réellement généré.

## I. Structure du système d'information comptable

Jusqu'ici, chaque opération économique était appréhendée en reconstituant, à chaque fois, un bilan et un compte de résultat complets. En pratique, ce n'est pas tenable : le processus serait beaucoup trop lourd, et il faudrait comparer les documents de synthèse avant et après chaque opération pour savoir ce qui s'est passé.

Le système d'information comptable résout ce problème : c'est un système qui classe, stocke et restitue les informations financières d'une entité. Chaque poste du bilan et du compte de résultat est identifié par une **adresse**, composée d'un **numéro de compte** et d'un **intitulé**. Le numéro rattache le compte à une catégorie (actif, dette, capitaux propres, charge ou produit), l'intitulé précise la nature de l'opération. Une liste des comptes comptables (fournie en annexe aux examens) recense l'ensemble des adresses disponibles.

### Les classes de comptes

```
Comptes comptables
├── Comptes de bilan (comptes de situation)
│   ├── Classe 1 — Capitaux                    → toujours au passif
│   ├── Classe 2 — Immobilisations              → actif
│   ├── Classe 3 — Stocks                       → actif
│   ├── Classe 4 — Comptes de tiers             → actif (créances) ou passif (dettes)
│   └── Classe 5 — Comptes financiers           → généralement actif (parfois passif)
└── Comptes de gestion (compte de résultat)
    ├── Classe 6 — Charges
    └── Classe 7 — Produits
```

**Attention à ne pas confondre « capitaux » et « capitaux propres »** : la classe 1 (« capitaux »), toujours au passif, désigne toutes les dettes à long terme apportées à l'entreprise — aussi bien par les actionnaires (capitaux propres) que par des prêteurs (banques, créanciers obligataires, etc.). Les capitaux propres ne sont donc qu'une partie de la classe 1.

#### Détail des adresses de compte

| Classe | Postes | Numéros |
|---|---|---|
| 1 — Capitaux | Capital ; Réserves ; Résultat (capitaux propres) ; Emprunts (dettes financières) | 101 ; 106 ; 12 ; 16 |
| 2 — Immobilisations | Incorporelles ; Corporelles ; Financières | 20 ; 21 ; 26-27 |
| 3 — Stocks | Matières premières ; Produits finis ; Marchandises | 31 ; 35 ; 37 |
| 4 — Tiers | Fournisseurs (dette) ; Dettes envers le personnel ; Organismes de sécurité sociale ; État ; Clients (créance) | 401 ; 42 ; 43 ; 44 ; 411 |
| 5 — Financiers | Valeurs mobilières de placement (VMP) ; Banque ; Caisse | 50 ; 512 ; 530 |

**VMP vs immobilisations financières** : la distinction se fait uniquement sur l'horizon de détention. Des actions conservées durablement (au-delà d'un an) sont des immobilisations financières (26-27) ; des actions destinées à être revendues à court terme, pour réaliser une plus-value rapide, sont des valeurs mobilières de placement (50).

Pour le compte de résultat, la logique de construction des numéros est parallèle entre charges (classe 6) et produits (classe 7) :

| Nature | Charges | Produits |
|---|---|---|
| Achats / ventes de marchandises | 607 | 707 |
| Variation de stock de marchandises | 6037 (= compte d'achat + « 3 » en 3ᵉ position) | — |
| Achats de matières premières | 601 | — |
| Variation de stock de matières premières | 6031 | — |
| Production vendue (produits finis / prestations de services) | — | 701 / 706 |
| Production stockée | — | 713 |
| Production immobilisée | — | 72 |
| Autres achats et charges externes | 61, 62 | — |
| Impôts, taxes et versements assimilés | 63 | — |
| Charges de personnel | 64 | — |
| Dotations aux amortissements et dépréciations (DADP) d'exploitation | 681 | 781 (RADP, reprises) |
| Autres charges / produits | 65 | 75 |
| Charges / produits financiers | 66 | 76 |
| Charges / produits exceptionnels | 67 | 77 |

On retrouve ici une logique de construction : le chiffre en deuxième position (6 pour le financier, 7 pour l'exceptionnel) est le même côté charges et côté produits, seul le premier chiffre (6 ou 7) distingue une charge d'un produit.

### Le compte en T

Un compte comptable peut être représenté schématiquement par un **T** : le **débit** est toujours à gauche, le **crédit** toujours à droite, quel que soit le compte concerné. L'enregistrement d'une opération économique consiste à débiter et/ou créditer au moins deux comptes, de sorte que le débit total de l'écriture soit toujours égal au crédit total — c'est le **principe de la partie double**.

*Exemple introductif* : le paiement par virement d'une dette fournisseur mouvemente deux comptes — au débit, le 401 fournisseurs (la dette diminue) ; au crédit, le 512 banques (les disponibilités diminuent). Toute la difficulté de la comptabilisation consiste à déterminer, pour chaque opération, quels comptes utiliser et dans quel sens (débit ou crédit) — le sens n'est jamais indifférent : créditer un compte plutôt que le débiter change complètement le sens de l'écriture.

Deux méthodes permettent de déterminer les comptes à utiliser et le sens de l'écriture : **l'approche par les flux** et **l'approche patrimoniale**. Ce ne sont pas deux manières concurrentes de comptabiliser, mais deux manières différentes d'expliquer la même réalité — elles aboutissent toujours à l'écriture identique. L'approche par les flux a le mérite de la simplicité et de la rapidité, mais elle explique moins bien le fonctionnement profond du système d'information comptable. L'approche patrimoniale est plus longue à mettre en œuvre, mais c'est elle qui explique réellement pourquoi le système a été construit ainsi — le système d'information comptable est en effet historiquement fondé sur l'approche patrimoniale.

## II. Les deux approches de comptabilisation

### A. L'approche par les flux (méthode de l'emploi et de la ressource)

Une entreprise échange en permanence des **flux** avec des tiers. Deux natures de flux existent :

- les **flux réels** : biens, marchandises, matières premières, services ;
- les **flux financiers** : sommes d'argent, mais aussi **dettes** et **créances**. Une dette est un flux financier différé dans le temps : au lieu de verser une somme d'argent immédiatement, l'entreprise s'engage à la verser plus tard. Symétriquement, une créance client est un flux financier différé dans l'autre sens (l'entreprise recevra la somme plus tard).

Deux types d'échanges sont donc possibles : flux réel contre flux financier (le plus courant), ou flux financier contre flux financier (par exemple un emprunt, ou l'encaissement d'une créance). L'échange flux réel contre flux réel (le troc) existe mais reste rare en pratique.

Chaque opération comporte :

- un **emploi** (ou destination) : ce que l'entreprise **obtient** — le flux entrant, toujours **débité** ;
- une **ressource** (ou origine) : **grâce à quoi** elle l'a obtenu — le flux sortant, toujours **créditée**.

**Règle de l'approche par les flux : « On obtient quoi ? On débite. Grâce à quoi ? On crédite. »**

Pour trouver le bon numéro de compte, la question clé est : le bien ou service qui entre est-il destiné à être **consommé** durant l'exercice (auquel cas c'est une **charge**, compte 6) ou à être **conservé durablement** (auquel cas c'est une **immobilisation**, compte 2, ou un titre financier, compte 5) ?

#### Exemples fondateurs (approche par les flux)

| Date | Opération | Emploi (débit) | Ressource (crédit) |
|---|---|---|---|
| 2 janvier | Achat au comptant par virement de 1 000 € de marchandises | 607 Achat de marchandises — 1 000 | 512 Banques — 1 000 |
| 5 janvier | Vente à crédit à un client de produits finis pour 2 000 € | 411 Clients — 2 000 | 701 Vente de produits finis — 2 000 |
| 8 janvier | Achat à crédit de matières premières pour 500 € | 601 Achat de matières premières — 500 | 401 Fournisseurs — 500 |
| 12 janvier | Emprunt de 30 000 € auprès de la banque | 512 Banques — 30 000 | 164 Emprunts auprès des établissements de crédit — 30 000 |
| 20 janvier | Paiement de la dette fournisseur du 8 janvier (500 €) | 401 Fournisseurs — 500 | 512 Banques — 500 |
| 22 janvier | Le client règle sa créance du 5 janvier (2 000 €) | 512 Banques — 2 000 | 411 Clients — 2 000 |
| 31 janvier | Remboursement de 10 000 € de l'emprunt | 164 Emprunts — 10 000 | 512 Banques — 10 000 |

Point de vigilance sur le compte 16 : le 164 (emprunts auprès des établissements de crédit) représente la dette envers la banque en tant que tiers créancier ; le 512 (banque) est toujours le compte représentant les disponibilités de l'entreprise elle-même — les deux ne doivent jamais être confondus.

D'autres exemples, construits sur le même principe : l'achat au comptant d'un élévateur (immobilisation) pour 20 000 € donne 215 ITMOI au débit (compte 21, immobilisations corporelles — matériel industriel, à ne pas confondre avec le matériel de transport, réservé aux véhicules circulant sur route) contre 512 Banques au crédit. Le paiement par chèque d'un loyer trimestriel de 1 000 € donne 613 Location (un service consommé, donc une charge) au débit, contre 512 Banques au crédit.

### B. L'approche patrimoniale

L'approche patrimoniale part du bilan : pour chaque opération, on se demande comment elle affecte le patrimoine de l'entité (l'actif et le passif), exactement comme lors de l'analyse des opérations économiques vue précédemment.

**Les quatre règles de l'approche patrimoniale :**

| | Le compte **augmente** | Le compte **diminue** |
|---|---|---|
| Compte d'**actif** | Débit | Crédit |
| Compte de **passif** | Crédit | Débit |

**Cinquième règle (cas particulier du résultat)** : lorsque l'opération devrait mouvementer le poste 12 (résultat, un compte de passif), on ne l'utilise jamais directement — sinon le compte de résultat n'existerait pas et on perdrait l'explication du « comment » du résultat. On le remplace donc :

- par un **compte 6** (charge) s'il aurait dû être **débité** (le résultat diminue) ;
- par un **compte 7** (produit) s'il aurait dû être **crédité** (le résultat augmente).

Comme un crédit d'un compte 6 revient au même qu'un crédit d'un compte 7 (les deux augmentent le résultat, l'un en diminuant les charges, l'autre en augmentant les produits), ce mécanisme conserve toujours l'égalité entre le bilan et le compte de résultat.

#### Exemples travaillés (les deux approches, côte à côte)

**Apport des actionnaires de 50 000 € en numéraire, à la constitution.**

- Actif : les disponibilités (banque) augmentent de 50 000 € → compte actif qui augmente → **débit** du 512 Banques.
- Passif : le capital (capitaux propres) augmente de 50 000 € → compte passif qui augmente → **crédit** du 101 Capital.
- Aucun impact sur le résultat (le capital n'est pas un enrichissement, c'est un apport initial).
- Les deux approches aboutissent à la même écriture : 512 Banques au débit / 101 Capital au crédit.

**Achat au comptant d'un élévateur pour 20 000 €.**

- Actif : les immobilisations corporelles augmentent de 20 000 € (compte actif qui augmente → débit du 215 ITMOI) ; les disponibilités diminuent de 20 000 € (compte actif qui diminue → crédit du 512 Banques).
- Aucun impact sur le résultat : il s'agit d'un simple échange d'un actif (argent) contre un autre actif (immobilisation) de valeur équivalente, donc ni enrichissement ni appauvrissement.

**Paiement d'un loyer trimestriel de 1 000 € par chèque.**

- Actif : les disponibilités diminuent de 1 000 € → crédit du 512 Banques.
- Passif : les capitaux propres diminuent de 1 000 € (aucune dette n'est affectée), donc c'est le poste résultat qui diminue → normalement un débit du poste 12, remplacé par un **débit du compte 613 Location** (charge).
- Écriture obtenue : 613 Location au débit / 512 Banques au crédit — identique à celle obtenue par l'approche par les flux.

**Achat à crédit de marchandises pour 10 000 €.**

- Actif : en toute rigueur, le stock de marchandises devrait augmenter de 10 000 €. Mais en pratique, le comptable **ne mouvemente pas les stocks** (voir partie IV) : rien n'est constaté à l'actif au moment de l'achat.
- Passif : les dettes fournisseurs augmentent de 10 000 € → crédit du 401 Fournisseurs.
- Pour rééquilibrer, le résultat diminue de 10 000 € (poste 12, remplacé par un **débit du compte 607 Achat de marchandises**).
- Écriture : 607 Achat de marchandises au débit / 401 Fournisseurs au crédit — la marchandise achetée est traitée comme si elle était déjà consommée.

**Vente à crédit de marchandises pour 7 000 € (coût d'achat : 3 000 €).**

- Actif : les créances clients augmentent de 7 000 € → débit du 411 Clients.
- Passif : le résultat augmente de 7 000 € (poste 12, remplacé par un **crédit du compte 707 Vente de marchandises**).
- Écriture : 411 Clients au débit / 707 Vente de marchandises au crédit.

## III. Du compte en T au livre journal, au grand livre et à la balance

En pratique, les comptes en T ne sont qu'un outil pédagogique : les opérations sont réellement enregistrées dans un **livre journal**, sous forme de tableau chronologique avec, pour chaque ligne : la date, le numéro de compte débité (toujours indiqué en premier, par convention), le numéro de compte crédité (en second), les intitulés, puis les colonnes débit et crédit (une seule des deux est renseignée par compte).

Le passage du compte en T au livre journal, sur les sept exemples fondateurs vus en II.A :

| Date | Compte débité | Montant | Compte crédité | Montant |
|---|---|---|---|---|
| 02/01 | 607 Achat de marchandises | 1 000 | 512 Banques | 1 000 |
| 05/01 | 411 Clients | 2 000 | 701 Vente de produits finis | 2 000 |
| 08/01 | 601 Achat de matières premières | 500 | 401 Fournisseurs | 500 |
| 12/01 | 512 Banques | 30 000 | 164 Emprunts | 30 000 |
| 20/01 | 401 Fournisseurs | 500 | 512 Banques | 500 |
| 22/01 | 512 Banques | 2 000 | 411 Clients | 2 000 |
| 31/01 | 164 Emprunts | 10 000 | 512 Banques | 10 000 |

### De l'opération économique aux documents de synthèse

```
Opération économique
        ↓
Pièce comptable (facture d'achat/de vente, talon de chèque, bulletin de salaire...)
        ↓
Livre journal (débit / crédit, par ordre chronologique)
        ↓
── avant inventaire ──────────────────────────
        ↓  (comptabilisation des écritures d'inventaire : amortissements, dépréciations...)
── après inventaire ───────────────────────────
        ↓
Grand livre + Balance (états comptables intermédiaires)
        ↓
Bilan + Compte de résultat (documents de synthèse)
```

Une facture est toujours émise par le vendeur, jamais par l'acheteur. Les opérations d'inventaire (dotations aux amortissements et dépréciations, par exemple) sont des opérations particulières, comptabilisées une seule fois en fin d'exercice, dans un livre d'inventaire qui fonctionne exactement comme le livre journal — seul le terme change.

### Le grand livre

Le grand livre reprend, compte par compte, le détail chronologique de tous les mouvements (débits et crédits), avec le solde final. Sur l'exemple des sept opérations ci-dessus, au 31 janvier :

- **164 Emprunts** : débité de rien, crédité de 30 000 (12/01), débité de 10 000 (31/01) → solde **créditeur** de 20 000 (présenté par convention en colonne débit, pour que les deux colonnes totalisent 30 000 de part et d'autre).
- **401 Fournisseurs** : crédité de 500 (08/01), débité de 500 (20/01) → solde nul.
- **411 Clients** : débité de 2 000 (05/01), crédité de 2 000 (22/01) → solde nul.
- **512 Banques** : le compte le plus mouvementé (il intervient dans presque toutes les opérations). Total débit = 32 000 (emprunt 30 000 + encaissement client 2 000) ; total crédit = 11 500 (achat marchandises 1 000 + paiement fournisseur 500 + remboursement emprunt 10 000) → solde **débiteur** de 20 500 (présenté par convention en colonne crédit).

### La balance

La balance reprend l'ensemble des comptes, classés par ordre croissant de numéro, mais sans le détail des mouvements : seulement le total débit, le total crédit et le solde de chaque compte.

| Compte | Total débit | Total crédit | Solde |
|---|---|---|---|
| 164 Emprunts | 10 000 | 30 000 | 20 000 (créditeur) |
| 401 Fournisseurs | 500 | 500 | 0 |
| 411 Clients | 2 000 | 2 000 | 0 |
| 512 Banques | 32 000 | 11 500 | 20 500 (débiteur) |
| 601 Achat de matières premières | 500 | — | 500 (débiteur) |
| 607 Achat de marchandises | 1 000 | — | 1 000 (débiteur) |
| 701 Vente de produits finis | — | 2 000 | 2 000 (créditeur) |

Conséquence du principe de la partie double : le total général des débits de la balance est toujours égal au total général des crédits.

## IV. La problématique des stocks : non-mouvementation et régularisation

En toute rigueur, un achat de marchandises (ou de matières premières) devrait faire entrer le bien dans le stock à l'actif, et une vente devrait l'en faire sortir. En pratique, **le comptable ne mouvemente jamais les comptes de stock** au moment de chaque achat ou vente : comme la marchandise sera revendue (ou la matière première consommée) rapidement, on la considère directement comme consommée — l'achat est comptabilisé en charge (compte 6xx) et la vente en produit (compte 7xx), sans jamais transiter par le compte de stock.

Ce raccourci a une conséquence : le résultat affiché en cours de période est **faux**, car il ne tient pas compte de la valeur des stocks réellement restants.

**Exemple.** Une entreprise achète 10 000 € de marchandises à crédit (comptabilisées entièrement en charge, compte 607), puis en revend une partie — dont le coût d'achat était de 3 000 € — pour 7 000 € à crédit (comptabilisé entièrement en produit, compte 707).

- Sans régularisation, le résultat apparaît comme : − 10 000 (charge d'achat) + 7 000 (produit de vente) = **− 3 000 €**, auxquels s'ajoute le loyer de 1 000 € déjà payé, soit une perte affichée de **4 000 €**.
- Or le bénéfice réel de l'opération de négoce est : 7 000 (prix de vente) − 3 000 (coût d'achat de ce qui a été effectivement vendu) = **+ 4 000 €**, dont il faut déduire le loyer de 1 000 €, soit un bénéfice réel de **3 000 €**.
- L'écart s'explique entièrement par le stock non mouvementé : sur les 10 000 € de marchandises achetées, seules 3 000 € ont été vendues ; il reste donc **7 000 € de marchandises en stock**, qui ne sont constatées nulle part au bilan puisque les stocks ne sont pas mouvementés.

### L'écriture de régularisation des stocks

Pour corriger cet écart en fin de période, il faut :

- **augmenter le poste stock** à l'actif, de la valeur du stock final restant (ici 7 000 €) — un compte d'actif qui augmente se **débite** → débit du compte 37 (stock de marchandises) ;
- **augmenter le résultat** d'autant (poste 12, un compte de passif qui augmente se crédite — mais, comme toujours, on le remplace par un compte 6 ou 7). Créditer un compte 7 (produit) ou créditer un compte 6 (ce qui revient à diminuer les charges) ont exactement le même effet sur le résultat ; en pratique on utilise ici un compte 6.

Une fois l'écriture de régularisation passée, le bilan reflète un stock de 7 000 € supplémentaire à l'actif, et le compte de résultat passe d'une perte de 4 000 € à un bénéfice de 3 000 € — conforme au bénéfice réellement généré par les opérations de la période.

Cette écriture est reprise et approfondie l'année suivante dans le chapitre consacré à la variation de stock (voir le chapitre « Le bilan » pour les formules de calcul du stock final et de la variation de stock).

## V. Synthèse des quatre catégories d'opérations courantes

Environ 99 % des opérations économiques courantes d'une entreprise se ramènent à quatre catégories, toujours construites de la même manière :

| Catégorie | Compte au débit | Compte au crédit |
|---|---|---|
| **1. Achat d'un bien ou service** (comptant ou à crédit) | 6 (bien/service consommé), 2 (immobilisation) ou 5 (titre financier) | 512/530 (comptant) ou 401/404 (à crédit — 401 fournisseur de biens/services, 404 fournisseur d'immobilisation) |
| **2. Vente d'un bien ou service** (comptant ou à crédit) | 512/530 (comptant) ou 411 (à crédit, client) | 701 (produits finis), 706 (prestations de services) ou 707 (marchandises) |
| **3. Encaissement d'une créance client** | 512/530 | 411 Clients |
| **4. Paiement d'une dette** | 401, 404, 43 (organismes sociaux), 44 (État) ou 16 (emprunts) | 512/530 |

Critère de choix entre compte 6 (charge) et compte 2 (immobilisation) lors d'un achat : le bien ou service est-il destiné à être **consommé durant l'exercice** (charge, compte 6) ou **utilisé au-delà de l'exercice** (immobilisation, compte 2) ? Un service peut, dans certains cas particuliers, être lui aussi immobilisé plutôt que consommé — mais il ne peut jamais être stocké (à la différence d'un bien).

Les catégories 3 et 4 sont symétriques l'une de l'autre (encaisser une créance / payer une dette), tout comme les catégories 1 et 2 (acheter / vendre) — ce qui explique la construction miroir des numéros de compte entre charges et produits, et entre créances et dettes.

<!-- SOURCES INTÉGRÉES
- eco gestion maison 3-transcript ✅.txt
- eco-gestion 3-transcript ✅.txt
-->
