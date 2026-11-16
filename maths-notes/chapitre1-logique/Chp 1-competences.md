# Chapitre 1 · Logique — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 1-cours.md](Chp%201-cours.md) · Méthodes seules : [Chp 1-methodes.md](Chp%201-methodes.md)
>
> Chaque compétence = méthode + **correction étape par étape** d'un exercice d'annale. Coche `[x]` dans la liste quand tu sais faire la compétence **sans regarder la méthode**.

## ✅ Suivi

- [ ] C1.1 — Dresser la table de vérité d'une proposition composée (2 ou 3 variables)
- [ ] C1.2 — Montrer qu'une proposition est une tautologie / que deux propositions sont équivalentes
- [ ] C1.3 — Simplifier une proposition avec les règles de calcul
- [ ] C1.4 — Traduire une phrase française en formule quantifiée
- [ ] C1.5 — Écrire la négation d'une proposition quantifiée
- [ ] C1.6 — Résoudre une énigme logique (menteurs, coupables, QCM)

---

## C1.1 — Dresser la table de vérité d'une proposition composée

**Méthode**
1. Repérer les variables ($P$, $Q$, éventuellement $R$) : 2 variables → 4 lignes, 3 variables → 8 lignes. Ordre des lignes : VV, VF, FV, FF (pour 3 : VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF).
2. **Découper** la proposition en sous-formules, de l'intérieur vers l'extérieur ; une colonne par sous-formule. Nommer les gros morceaux ($A$, $B$) pour alléger.
3. Remplir colonne par colonne avec la table de référence. Pièges : $P\Rightarrow Q$ est faux **seulement** pour V⇒F ; $\iff$ est vrai quand les deux colonnes sont **égales**.

**Tombe** : DS20 ex1 · DS21 ex1 · DS22 ex1.1 · DS23 ex1.1, ex1.3 (3 variables) · DS24 ex1.2 · DS25 ex1 → **6/6 DS1**

<details>
<summary>✏️ Correction étape par étape — DS25 ex1 : table de $(P\Rightarrow Q)\land(P\lor\neg Q)$</summary>

**Étape 1 — Variables et lignes.** Deux variables $P$ et $Q$ → 4 lignes : VV, VF, FV, FF.

**Étape 2 — Découpage.** La formule est un « et » entre deux morceaux : $A=P\Rightarrow Q$ et $B=P\lor\neg Q$. Pour $B$ il faut d'abord $\neg Q$. Colonnes : $P$, $Q$, $\neg Q$, $A$, $B$, $A\land B$.

**Étape 3 — Remplir colonne par colonne.**
- $\neg Q$ : on inverse la colonne $Q$ → F, V, F, V.
- $A=P\Rightarrow Q$ : faux **uniquement** à la ligne V⇒F (ligne 2) → V, F, V, V.
- $B=P\lor\neg Q$ : vrai dès qu'un des deux est vrai ; seule la ligne 3 ($P$ faux, $\neg Q$ faux) est fausse → V, V, F, V.
- $A\land B$ : vrai seulement si les deux sont vrais → V, F, F, V.

| $P$ | $Q$ | $\neg Q$ | $P\Rightarrow Q$ | $P\lor\neg Q$ | résultat |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | F | V | V | **V** |
| V | F | V | F | V | **F** |
| F | V | F | V | F | **F** |
| F | F | V | V | V | **V** |

**Étape 4 — Lire le résultat.** La colonne finale (V, F, F, V) est celle de $P\iff Q$ : la proposition est vraie exactement quand $P$ et $Q$ ont la même valeur.
</details>

---

## C1.2 — Montrer une tautologie ou une équivalence

**Méthode**
1. **Tautologie** : faire la table complète ; c'est une tautologie si la dernière colonne ne contient **que des V**.
2. **« $X$ a la même table que $Y$ »** : faire les deux colonnes et vérifier qu'elles sont identiques (⇔ « $X\iff Y$ est une tautologie »).
3. Alternative plus rapide : transformer avec les règles (C1.3) jusqu'à obtenir l'autre expression.

**Tombe** : DS22 ex1.2 · DS23 ex1.2 · DS24 ex1.1, ex1.2

<details>
<summary>✏️ Correction étape par étape — DS24 ex1.1 : $\neg(P\iff Q)$ a la même table que $P\iff\neg Q$</summary>

**Étape 1 — Colonnes nécessaires.** Pour $\neg(P\iff Q)$ : $P\iff Q$ puis sa négation. Pour $P\iff\neg Q$ : $\neg Q$ puis l'équivalence.

**Étape 2 — Première expression.**
- $P\iff Q$ vrai quand $P$ et $Q$ sont égaux → V, F, F, V.
- On nie → **F, V, V, F**.

**Étape 3 — Deuxième expression.**
- $\neg Q$ → F, V, F, V.
- $P\iff\neg Q$ vrai quand $P$ et $\neg Q$ sont égaux : ligne 1 (V/F) non, ligne 2 (V/V) oui, ligne 3 (F/F) oui, ligne 4 (F/V) non → **F, V, V, F**.

| $P$ | $Q$ | $P\iff Q$ | $\neg(P\iff Q)$ | $\neg Q$ | $P\iff\neg Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | **F** | F | **F** |
| V | F | F | **V** | V | **V** |
| F | V | F | **V** | F | **V** |
| F | F | V | **F** | V | **F** |

**Étape 4 — Conclure.** Les deux colonnes en gras sont identiques, donc les deux propositions sont équivalentes.

**Variante DS24 ex1.2** : $((P\Rightarrow Q)\land(Q\Rightarrow P))\iff(P\iff Q)$. La colonne de gauche vaut V, F, F, V (une des deux implications est fausse dès que $P\neq Q$), comme $P\iff Q$ ; l'équivalence de deux colonnes égales donne V partout : c'est une **tautologie**.
</details>

---

## C1.3 — Simplifier une proposition avec les règles de calcul

**Méthode** — règles à appliquer sans table :
1. $P\Rightarrow Q\ \equiv\ \neg P\lor Q$ et $\neg(P\Rightarrow Q)\equiv P\land\neg Q$.
2. De Morgan : $\neg(P\land Q)\equiv\neg P\lor\neg Q$, $\neg(P\lor Q)\equiv\neg P\land\neg Q$.
3. Distributivité, $\neg\neg P\equiv P$, contraposée $P\Rightarrow Q\equiv\neg Q\Rightarrow\neg P$.

**Tombe** : utile partout (vérifier une table, nier, contraposer) · DS22 ex1.2

<details>
<summary>✏️ Correction étape par étape — simplifier $\neg\big(P\Rightarrow(Q\lor R)\big)$</summary>

**Étape 1 — Repérer l'opérateur principal.** C'est la négation d'une **implication** $P\Rightarrow S$ avec $S=Q\lor R$.

**Étape 2 — Nier l'implication.** $\neg(P\Rightarrow S)\equiv P\land\neg S$, donc on obtient $P\land\neg(Q\lor R)$.

**Étape 3 — De Morgan sur le « ou ».** $\neg(Q\lor R)\equiv\neg Q\land\neg R$.

**Étape 4 — Résultat.** $\boxed{P\land\neg Q\land\neg R}$ : « $P$ est vrai, et ni $Q$ ni $R$ ».

**Contrôle** : l'implication de départ n'est fausse que si $P$ est vrai et la conclusion $Q\lor R$ fausse, c'est bien ce qu'on trouve.
</details>

---

## C1.4 — Traduire une phrase française en formule quantifiée

**Méthode**
1. Repérer **l'ensemble** de chaque objet (réel → $\mathbb R$, entier → $\mathbb Z$ ou $\mathbb N$, « strictement négatif » → $\mathbb R_-^*$ ou $x<0$).
2. « tout / chaque / aucun » → $\forall$ ; « il existe / certains / au moins un » → $\exists$. « Aucun $x$ n'est $P$ » = $\forall x,\ \neg P(x)$.
3. Placer les quantificateurs **dans l'ordre de dépendance** : ce qui dépend d'une variable vient après elle.
4. « Si… alors » → $\Rightarrow$.

**Tombe** : DS25 ex3.1 · DS22 ex7.1 · DS24 ex6.2 · TD2 ex2, ex6

<details>
<summary>✏️ Correction étape par étape — DS25 ex3.1 et DS22 ex7.1</summary>

**Phrase 1 : « Chaque réel admet un entier qui lui est supérieur ».**
1. *Objets et ensembles* : un réel $x\in\mathbb R$, un entier $n\in\mathbb Z$.
2. *Quantificateurs* : « chaque réel » → $\forall x$ ; « admet un entier » → $\exists n$.
3. *Ordre* : l'entier dépend du réel choisi, donc $\forall x$ d'abord, puis $\exists n$.
4. *Propriété* : « supérieur » → $n\geq x$.
5. **Résultat** : $\forall x\in\mathbb R,\ \exists n\in\mathbb Z,\ n\geq x$.

**Phrase 2 : « Tout réel strictement négatif est différent de son cube ».**
1. *Objet* : un réel $x$, avec la condition $x<0$.
2. *Quantificateur* : « tout » → $\forall$.
3. *Condition* : on la met soit dans l'ensemble ($x\in\mathbb R_-^*$), soit en hypothèse d'une implication.
4. **Résultat** : $\forall x\in\mathbb R,\ (x<0\Rightarrow x\neq x^3)$, ou $\forall x\in\mathbb R_-^*,\ x\neq x^3$.

**Phrase 3 (TD2) : « Tous les réels sont positifs ou tous sont négatifs ».**
1. Le « ou » relie **deux phrases complètes**, chacune avec son « tous ».
2. **Résultat** : $(\forall x\in\mathbb R,\ x\geq0)\lor(\forall y\in\mathbb R,\ y\leq 0)$ (fausse).
3. ⚠️ À ne pas confondre avec $\forall x,\ (x\geq 0\lor x\leq 0)$ (« chaque réel est positif ou négatif », vraie).
</details>

---

## C1.5 — Écrire la négation d'une proposition quantifiée

**Méthode**
1. Lire de gauche à droite : chaque $\forall$ devient $\exists$, chaque $\exists$ devient $\forall$. **Les ensembles ne changent pas** ($\forall M>0$ devient $\exists M>0$).
2. Nier la partie finale : $<$ ↔ $\geq$, $\leq$ ↔ $>$, $=$ ↔ $\neq$, « et » ↔ « ou ».
3. **Implication** : $\neg(A\Rightarrow B)\equiv A\land\neg B$ (jamais une implication).
4. Phrase en français : d'abord la traduire (C1.4), puis nier.

**Tombe** : DS20 ex3.1 · DS21 ex5.1 · DS22 ex6.1 · DS23 ex6.1a, 6.2a · DS24 ex6 · DS25 ex3.2 → **6/6 DS1**

<details>
<summary>✏️ Correction étape par étape — DS25 ex3.2</summary>

Proposition : $\forall(x,y)\in\mathbb R^2,\ \exists M>0,\ x^2+y^2\leq M\Rightarrow(x^2\leq M\land y^2\leq M)$.

**Étape 1 — Quantificateurs.** $\forall(x,y)$ → $\exists(x,y)$ ; $\exists M>0$ → $\forall M>0$. Les ensembles $\mathbb R^2$ et $M>0$ restent.

**Étape 2 — Nier l'implication.** $\neg(A\Rightarrow B)\equiv A\land\neg B$ avec $A$ : $x^2+y^2\leq M$, $B$ : $x^2\leq M\land y^2\leq M$.

**Étape 3 — Nier $B$ (De Morgan).** $\neg B$ : $x^2>M\lor y^2>M$ (le « et » devient « ou », $\leq$ devient $>$).

**Étape 4 — Assembler.**
$$\exists(x,y)\in\mathbb R^2,\ \forall M>0,\ x^2+y^2\leq M\land(x^2>M\lor y^2>M).$$
</details>

<details>
<summary>✏️ Correction étape par étape — DS21 ex5.1, DS24 ex6</summary>

**DS21** : $\forall x,y\in\mathbb R,\ (xy+2x+y\leq 14\Rightarrow x\leq 3\lor y\leq 2)$.
1. $\forall x,y$ → $\exists x,y$.
2. L'implication devient « hypothèse **et** non-conclusion » : $xy+2x+y\leq14\land\neg(x\leq3\lor y\leq2)$.
3. De Morgan : $\neg(x\leq3\lor y\leq2)\equiv x>3\land y>2$.
4. **Résultat** : $\exists x,y\in\mathbb R,\ xy+2x+y\leq 14\land x>3\land y>2$.

**DS24** : $\forall\varepsilon\in\mathbb R_+^*,\ \exists N\in\mathbb N,\ \frac1N<\varepsilon$.
1. $\forall\varepsilon$ → $\exists\varepsilon$ (toujours dans $\mathbb R_+^*$) ; $\exists N$ → $\forall N$.
2. $<$ devient $\geq$.
3. **Résultat** : $\exists\varepsilon\in\mathbb R_+^*,\ \forall N\in\mathbb N,\ \frac1N\geq\varepsilon$.

**Phrase française** : « Si $m<n$ sont deux entiers positifs, il existe un rationnel strictement entre eux ».
1. Traduire : $\forall m,n\in\mathbb N,\ m<n\Rightarrow\exists q\in\mathbb Q,\ m<q<n$.
2. Nier : $\exists m,n\in\mathbb N,\ m<n\land\neg(\exists q,\ m<q<n)$.
3. $\neg(\exists q,\ m<q\land q<n)$ = $\forall q,\ (q\leq m\lor q\geq n)$.
4. **Résultat** : $\exists m,n\in\mathbb N,\ m<n\land\forall q\in\mathbb Q,\ (q\leq m\lor q\geq n)$.
</details>

---

## C1.6 — Résoudre une énigme logique

**Méthode**
1. Une proposition par personne : $A$ = « A est honnête » (ou « A est coupable »).
2. Traduire chaque déclaration : si A dit $D$, alors **$A\iff D$** (honnête ⇔ ce qu'il dit est vrai).
3. Résoudre : soit **table de vérité** (sûr, 8 lignes pour 3 personnes), soit **hypothèse + contradiction** (plus rapide : « supposons A honnête… contradiction, donc A ment »).
4. Vérifier la solution trouvée dans **toutes** les déclarations.

**Tombe** : DS20 ex5 · DS22 ex4 · DS23 ex4 · DS24 ex5 · DS25 ex2 · cours ex12

<details>
<summary>✏️ Correction étape par étape — DS20 ex5 (menteurs)</summary>

A : « On est tous des menteurs ». B : « Un et un seul d'entre nous est honnête ». (C ne dit rien.)

**Étape 1 — Propositions.** $A$, $B$, $C$ = « A (B, C) est honnête ».

**Étape 2 — Tester A.** Supposons A honnête : sa phrase est vraie, donc tout le monde ment, y compris A. Contradiction. **A ment.**

**Étape 3 — Conséquence.** La phrase de A est fausse, donc « tous menteurs » est faux : au moins un de B, C est honnête.

**Étape 4 — Tester B.** Supposons B menteur. Alors (étape 3) C est honnête, et c'est le seul honnête : la phrase de B (« un seul honnête ») est vraie. Mais un menteur ne dit pas vrai : contradiction. **B est honnête.**

**Étape 5 — Finir.** B dit vrai : il y a un seul honnête, c'est B. **C ment.**

**Étape 6 — Vérification.** A ment (faux que tous mentent, B est honnête) ✔ ; B dit vrai (un seul honnête) ✔.
</details>

<details>
<summary>✏️ Correction étape par étape — DS25 ex2 (coupables)</summary>

Données : (1) $W\lor J$ ; (2) $J\Rightarrow\neg A$ ; (3) $W\iff(J\land A)$.

**Étape 1 — Hypothèse sur W.** Supposons $W$ vrai. Par (3), $J$ et $A$ sont vrais. Par (2), $J$ donne $\neg A$ : contradiction avec $A$. Donc **$W$ est faux**.

**Étape 2 — Utiliser (1).** $W\lor J$ avec $W$ faux ⇒ **$J$ vrai**.

**Étape 3 — Utiliser (2).** $J$ vrai ⇒ **$A$ faux**.

**Étape 4 — Vérifier (3).** $W$ faux et $J\land A$ faux : l'équivalence F⇔F est vraie ✔.

**Conclusion** : seul **Joe** est coupable. (DS24 ex5, identique au cours ex12 : A menteur, B menteur, C honnête.)
</details>
