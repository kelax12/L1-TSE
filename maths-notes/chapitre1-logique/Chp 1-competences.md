# Chapitre 1 · Logique — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 1-cours.md](Chp%201-cours.md)
>
> Coche `[x]` dans la liste quand tu sais faire la compétence **sans regarder la méthode**.

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
<summary>✏️ Entraînement — DS25 ex1 : table de $(P\Rightarrow Q)\land(P\lor\neg Q)$</summary>

| $P$ | $Q$ | $P\Rightarrow Q$ | $P\lor\neg Q$ | résultat |
|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | **V** |
| V | F | F | V | **F** |
| F | V | V | F | **F** |
| F | F | V | V | **V** |

Remarque : le résultat a la même table que $P\iff Q$.
</details>

---

## C1.2 — Montrer une tautologie ou une équivalence

**Méthode**
1. **Tautologie** : faire la table complète ; c'est une tautologie si la dernière colonne ne contient **que des V**.
2. **« $X$ a la même table que $Y$ »** : faire les deux colonnes et vérifier qu'elles sont identiques (⇔ « $X\iff Y$ est une tautologie »).
3. Alternative plus rapide : transformer avec les règles (C1.3) jusqu'à obtenir l'autre expression.

**Tombe** : DS22 ex1.2 · DS23 ex1.2 · DS24 ex1.1, ex1.2

<details>
<summary>✏️ Entraînement — DS24 ex1.1 : $\neg(P\iff Q)$ a la même table que $P\iff\neg Q$</summary>

| $P$ | $Q$ | $P\iff Q$ | $\neg(P\iff Q)$ | $\neg Q$ | $P\iff\neg Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | **F** | F | **F** |
| V | F | F | **V** | V | **V** |
| F | V | F | **V** | F | **V** |
| F | F | V | **F** | V | **F** |

Les deux colonnes en gras sont identiques. (DS24 ex1.2 : $((P\Rightarrow Q)\land(Q\Rightarrow P))\iff(P\iff Q)$ est une tautologie, c'est la définition de $\iff$.)
</details>

---

## C1.3 — Simplifier une proposition avec les règles de calcul

**Méthode** — règles à appliquer sans table :
1. $P\Rightarrow Q\ \equiv\ \neg P\lor Q$ et $\neg(P\Rightarrow Q)\equiv P\land\neg Q$.
2. De Morgan : $\neg(P\land Q)\equiv\neg P\lor\neg Q$, $\neg(P\lor Q)\equiv\neg P\land\neg Q$.
3. Distributivité, $\neg\neg P\equiv P$, contraposée $P\Rightarrow Q\equiv\neg Q\Rightarrow\neg P$.

**Tombe** : utile partout (vérifier une table, nier, contraposer) · DS22 ex1.2

<details>
<summary>✏️ Entraînement — simplifier $\neg\big(P\Rightarrow(Q\lor R)\big)$</summary>

$\neg(P\Rightarrow(Q\lor R))\equiv P\land\neg(Q\lor R)\equiv P\land\neg Q\land\neg R$.
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
<summary>✏️ Entraînement — DS25 ex3.1 et DS22 ex7.1</summary>

- « Chaque réel admet un entier qui lui est supérieur » : $\forall x\in\mathbb R,\ \exists n\in\mathbb Z,\ n\geq x$.
- « Tout réel strictement négatif est différent de son cube » : $\forall x\in\mathbb R,\ x<0\Rightarrow x\neq x^3$ (ou $\forall x\in\mathbb R_-^*,\ x\neq x^3$).
- TD2 : « Tous les réels sont positifs ou tous sont négatifs » : $(\forall x\in\mathbb R,\ x\geq0)\lor(\forall y\in\mathbb R,\ y\leq 0)$ — différent de $\forall x,\ (x\geq 0\lor x\leq 0)$.
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
<summary>✏️ Entraînement — DS25 ex3.2, DS21 ex5.1, DS24 ex6</summary>

- $\forall(x,y)\in\mathbb R^2,\ \exists M>0,\ x^2+y^2\leq M\Rightarrow(x^2\leq M\land y^2\leq M)$
  → $\exists(x,y)\in\mathbb R^2,\ \forall M>0,\ x^2+y^2\leq M\land(x^2>M\lor y^2>M)$.
- $\forall x,y\in\mathbb R,\ (xy+2x+y\leq 14\Rightarrow x\leq 3\lor y\leq 2)$
  → $\exists x,y\in\mathbb R,\ xy+2x+y\leq 14\land x>3\land y>2$.
- $\forall\varepsilon\in\mathbb R_+^*,\ \exists N\in\mathbb N,\ \frac1N<\varepsilon$ → $\exists\varepsilon\in\mathbb R_+^*,\ \forall N\in\mathbb N,\ \frac1N\geq\varepsilon$.
- « Si $m<n$ sont deux entiers positifs, il existe un rationnel strictement entre eux » → $\exists m,n\in\mathbb N,\ m<n\land\forall q\in\mathbb Q,\ (q\leq m\lor q\geq n)$.
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
<summary>✏️ Entraînement — DS20 ex5 et DS25 ex2</summary>

**DS20** — A : « On est tous des menteurs ». B : « Un et un seul d'entre nous est honnête ».
Si A était honnête, sa phrase dirait qu'il ment : contradiction. Donc **A ment** et au moins un de B, C est honnête. Si B mentait, C serait honnête, et il y aurait exactement un honnête (C) : la phrase de B serait vraie, contradiction. Donc **B honnête**, et comme il dit vrai, il est le seul : **C menteur**.

**DS25** — $W\lor J$ ; $J\Rightarrow\neg A$ ; $W\iff(J\land A)$. Si $W$ : alors $J$ et $A$, mais $J\Rightarrow\neg A$ : contradiction. Donc $\neg W$, puis $J$ (1ʳᵉ affirmation), puis $\neg A$. **Seul Joe est coupable.**

**DS24 ex5** (identique au cours ex12) : A menteur, B menteur, C honnête.
</details>
