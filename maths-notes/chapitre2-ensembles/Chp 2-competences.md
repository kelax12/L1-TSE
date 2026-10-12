# Chapitre 2 · Ensembles — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 2-cours.md](Chp%202-cours.md)
>
> Coche `[x]` quand tu sais faire la compétence **sans regarder la méthode**.

## ✅ Suivi

- [ ] C2.1 — Écrire par extension un ensemble défini en compréhension (dans $\mathbb Z$ ou $\mathbb N$)
- [ ] C2.2 — Écrire un ensemble de réels défini par une inégalité comme intervalle / union d'intervalles
- [ ] C2.3 — Calculer ∩, ∪, \, complémentaire d'intervalles
- [ ] C2.4 — Écrire $\mathcal P(E)$ et $E\times F$ par extension
- [ ] C2.5 — Raisonner sur les cardinaux
- [ ] C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$
- [ ] C2.7 — Traduire entre quantificateurs et langage ensembliste
- [ ] C2.8 — Déterminer un ensemble défini par des sommes, des couples ou « ∃! »
- [ ] C2.9 — Dire si deux ensembles de nombres sont égaux

---

## C2.1 — Écrire par extension un ensemble défini en compréhension

**Méthode**
1. Résoudre la condition **comme une (in)équation dans $\mathbb R$** (trinôme : factoriser ou calculer $\Delta$ et les racines).
2. Garder les solutions **qui sont dans l'ensemble indiqué** ($\mathbb Z$, $\mathbb N$…) et qui vérifient les autres conditions (divisibilité…).
3. Penser au cas **ensemble vide** (carré parfait $\geq 0$, $\Delta<0$).

**Tombe** : DS20 ex2.1 · DS23 ex5.1, 5.2 · DS24 ex3.2 · DS25 ex4.1 · TD1 ex1a

<details>
<summary>✏️ Entraînement — DS20, DS23, DS25</summary>

- **DS20** $E=\lbrace k\in\mathbb Z : k^2\leq 3k+4\text{ et }3\mid k\rbrace$ : $k^2-3k-4=(k-4)(k+1)\leq 0\iff k\in[-1,4]$. Multiples de 3 : $E=\lbrace 0,3\rbrace$.
- **DS23** $\lbrace x\in\mathbb Z : 2x^2-x-10<5\rbrace$ : $2x^2-x-15<0$, racines $-\frac52$ et $3$, donc $x\in]-\frac52,3[$ → $\lbrace -2,-1,0,1,2\rbrace$.
- **DS25** $\lbrace n\in\mathbb Z : n^2-2n<-1\rbrace=\varnothing$ car $n^2-2n+1=(n-1)^2\geq 0$.
- **DS24** $\lbrace x\in\mathbb R : x^2+2x+3=0\rbrace=\varnothing$ ($\Delta=-8<0$).
</details>

---

## C2.2 — Écrire un ensemble de réels comme intervalle ou union d'intervalles

**Méthode**
1. Transformer la condition par **équivalences** (attention au sens des inégalités : multiplier par un négatif retourne, $\ln$ et $\exp$ sont croissantes, la racine carrée demande des deux côtés positifs).
2. Pour $x^2\leq a$ ($a\geq0$) : $-\sqrt a\leq x\leq\sqrt a$ ; pour $x^2>a$ : $x<-\sqrt a$ ou $x>\sqrt a$.
3. Plusieurs conditions « et » → **intersection** : placer les bornes sur une droite.
4. Valeur absolue → voir C3.4.

**Tombe** : DS22 ex5.1, 5.2 · DS25 ex4.2 · TD1 ex2a, 2b, ex4

<details>
<summary>✏️ Entraînement — DS25 ex4.2 et DS22 ex5</summary>

- **DS25** $\lbrace x : \ln(x^2+\frac34)\leq 0\rbrace\cap]-\infty,0]$ : $\ln(\cdot)\leq 0\iff x^2+\frac34\leq 1\iff x^2\leq\frac14\iff x\in[-\frac12,\frac12]$. Intersection : $[-\frac12,0]$.
- **DS22** $\lbrace x : |x^2-4|<1\rbrace$ : $-1<x^2-4<1\iff 3<x^2<5$ → $]-\sqrt5,-\sqrt3[\ \cup\ ]\sqrt3,\sqrt5[$.
- **DS22** $\lbrace x : x^2\geq 2\text{ et }-x^2+2x<-1\rbrace$ : $x^2-2x-1>0\iff x<1-\sqrt2$ ou $x>1+\sqrt2$ ; avec $x\leq-\sqrt2$ ou $x\geq\sqrt2$ : $]-\infty,-\sqrt2]\cup]1+\sqrt2,+\infty[$.
</details>

---

## C2.3 — Calculer ∩, ∪, \, complémentaire d'intervalles

**Méthode**
1. **Dessiner une droite** et y placer chaque ensemble (crochets ouverts/fermés, points isolés comme $\lbrace 3\rbrace$).
2. $\mathbb R\setminus[a,b[=]-\infty,a[\cup[b,+\infty[$ : le complémentaire **inverse les crochets**.
3. Calculer **de l'intérieur des parenthèses vers l'extérieur**, un résultat intermédiaire à la fois.
4. Vérifier les bornes une par une : « $a$ est-il dedans ? ».

**Tombe** : DS21 ex3 · DS22 ex8 · DS23 ex7 · DS24 ex7 · TD1 ex2c, ex5 → **5/6 DS1**

<details>
<summary>✏️ Entraînement — DS24 ex7 et DS23 ex7</summary>

- **DS24** $I=[0,2[\cup\lbrace 4\rbrace$, $J=]-1,3]$, $K=\mathbb R\setminus[1,3[=]-\infty,1[\cup[3,+\infty[$.
  $J\cap K=]-1,1[\cup\lbrace 3\rbrace$, donc $I\cup(J\cap K)=]-1,2[\cup\lbrace 3,4\rbrace$.
- **DS23** $U=[-3,3[\setminus[-1,1[=[-3,-1[\cup[1,3[$, $V=]-\infty,0[\cup\lbrace 2,3\rbrace$, $W=]-2,0[\cup]0,2]$.
  $V\cap U=[-3,-1[\cup\lbrace 2\rbrace$ ; $(V\cap U)\cup W=[-3,0[\cup]0,2]$.
  $V\cap W=]-2,0[\cup\lbrace 2\rbrace$ ; $V\setminus U=]-\infty,-3[\cup[-1,0[\cup\lbrace 3\rbrace$ ; $(V\cap W)\setminus(V\setminus U)=]-2,-1[\cup\lbrace 2\rbrace$.
- **DS21** $U=]-\infty,-2]$, $V=\mathbb R\setminus[1,3[$, $W=]5,+\infty[$ : $U\cap V=]-\infty,-2]$ ; $\mathbb R\setminus(U\cup W)=]-2,5]$ ; $V\cap(\mathbb R\setminus(U\cup W))=]-2,1[\cup[3,5]$.
</details>

---

## C2.4 — Écrire $\mathcal P(E)$ et $E\times F$ par extension

**Méthode**
1. **$\mathcal P(E)$** : lister par taille : $\varnothing$, les singletons, les paires, …, $E$. Total attendu : $2^{\mathrm{Card}E}$ (vérification).
2. **$E\times F$** : pour chaque élément de $E$ (dans l'ordre), l'associer à chaque élément de $F$. Total : $\mathrm{Card}E\times\mathrm{Card}F$.
3. Attention aux éléments qui sont eux-mêmes des ensembles : $\lbrace a\rbrace$, $\varnothing$ comptent comme **un** élément.
4. $E\setminus F$ d'abord si demandé ($\mathcal P(X\setminus Y)$).

**Tombe** : DS20 ex2.2 · DS21 ex2 · DS23 ex3 · TD1 ex6

<details>
<summary>✏️ Entraînement — DS23 ex3 et DS21 ex2</summary>

- **DS23** $X=\lbrace 0,1,3,5\rbrace$, $Y=\lbrace 1,2,3,4,6\rbrace$ : $X\setminus Y=\lbrace 0,5\rbrace$ ; $\mathcal P(X\setminus Y)=\lbrace\varnothing,\lbrace 0\rbrace,\lbrace 5\rbrace,\lbrace 0,5\rbrace\rbrace$ ; $Y\setminus X=\lbrace 2,4,6\rbrace$ et $(X\setminus Y)\times(Y\setminus X)=\lbrace(0,2),(0,4),(0,6),(5,2),(5,4),(5,6)\rbrace$.
- **DS21** $\lbrace 1,2,a\rbrace\times\lbrace 1\rbrace=\lbrace(1,1),(2,1),(a,1)\rbrace$, donc $\mathcal P$ de cet ensemble a $2^3=8$ éléments : $\varnothing$, 3 singletons, 3 paires, l'ensemble entier.
- **DS20** $F=\lbrace 1,\pi,\lbrace a\rbrace\rbrace$ : $\mathcal P(F)$ a 8 éléments, dont $\lbrace\lbrace a\rbrace\rbrace$ et $\lbrace 1,\lbrace a\rbrace\rbrace$.
</details>

---

## C2.5 — Raisonner sur les cardinaux

**Méthode**
1. $\mathrm{Card}(E\times F)=\mathrm{Card}E\times\mathrm{Card}F$ → chercher les **décompositions en produit**.
2. $\mathrm{Card}\,\mathcal P(Z)=2^{\mathrm{Card}Z}$ → le cardinal doit être une **puissance de 2**.
3. Compter des groupes : toutes les parties ($2^n$) moins celles qu'on exclut.

**Tombe** : DS22 ex3 · cours ex10

<details>
<summary>✏️ Entraînement — DS22 ex3</summary>

- $X$ a 16 éléments. $X=W_1\times W_2$ possible : $(\mathrm{Card}W_1,\mathrm{Card}W_2)\in\lbrace(1,16),(2,8),(4,4),(8,2),(16,1)\rbrace$. $X=\mathcal P(Z)$ possible avec $\mathrm{Card}Z=4$ ($2^4=16$).
- $X$ a 23 éléments : produit seulement $(1,23)$ ou $(23,1)$ (23 premier) ; pas de $\mathcal P(Z)$ (23 n'est pas une puissance de 2).
</details>

---

## C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$

**Méthode** : les éléments de $E$ sont ceux qui apparaissent dans les **singletons** de $\mathcal P(E)$ ; $E$ lui-même est la plus grande partie. Vérifier que $\mathrm{Card}\,\mathcal P(E)=2^{\mathrm{Card}E}$.

**Tombe** : DS21 ex4 (exercice hors barème, énoncé erroné)

<details>
<summary>✏️ Entraînement</summary>

Si $\mathcal P(E)$ contient les singletons $\lbrace\lbrace 0\rbrace\rbrace$, $\lbrace 1\rbrace$, $\lbrace\lbrace 0,1\rbrace\rbrace$, alors $E=\lbrace\lbrace 0\rbrace,1,\lbrace 0,1\rbrace\rbrace$ et $\mathcal P(E)$ doit avoir 8 éléments.
</details>

---

## C2.7 — Traduire entre quantificateurs et langage ensembliste

**Méthode** — dictionnaire :

| Formule | Ensembliste |
|---|---|
| $\forall x\in A,\ x\in B$ | $A\subset B$ |
| $x\in A$ et $x\in B$ | $x\in A\cap B$ |
| $x\in A$ ou $x\in B$ | $x\in A\cup B$ |
| $x\notin A$ | $x\in A^c$ |
| $x\in A$ et $x\notin B$ | $x\in A\setminus B$ |
| $\exists x,\ x\in A$ | $A\neq\varnothing$ |
| $\forall x\in E,\ (x\in A\iff\dots)$ | $A=\dots$ |
| « aucun élément n'est à la fois dans… » | intersection vide |

Astuce : $\forall x,\ (P(x)\Rightarrow x\notin A)$ peut aussi se lire par contraposée.

**Tombe** : DS22 ex2 · DS23 ex2 · DS24 ex4 · TD1 ex3

<details>
<summary>✏️ Entraînement — DS22 ex2, DS23 ex2, DS24 ex4</summary>

- **DS22** : (1) $A=B\setminus C$ ; (2) $B\cup C^c\subset A^c$, soit $A\subset B^c\cap C$ ; (3) $C\subset A\setminus B$ ; (4) $A^c\cap B^c\subset C^c$, soit $C\subset A\cup B$.
- **DS23** : (1) $A\subset B\cap C$ ; (2) $A\cup C\neq\varnothing$ ; (3) $\exists x\in A$, tout $y\neq x$ est hors de $A$ : $A$ est un **singleton** ; (4) $A\cap B\cap C=\varnothing$.
- **DS24** : aucun de $A,B,C$ : $E\setminus(A\cup B\cup C)$. Exactement un : $(A\setminus(B\cup C))\cup(B\setminus(A\cup C))\cup(C\setminus(A\cup B))$. Exactement deux : $((A\cap B)\setminus C)\cup((A\cap C)\setminus B)\cup((B\cap C)\setminus A)$.
- **TD1 (bibliothèque)** : « tous mes romans sont en poche » : $R\subset P$ ; « aucun livre étranger en poche » : $F^c\cap P=\varnothing$, soit $P\subset F$ ; donc $R\subset F$.
</details>

---

## C2.8 — Déterminer un ensemble défini par des sommes, des couples ou « ∃! »

**Méthode**
1. Lire la condition comme une **question** : « pour quels $x$ existe-t-il… ? ».
2. **Somme** $\lbrace a+b : a\in A,\ b\in B\rbrace$ : pour chaque $a$ fixé, $a+B$ est un translaté de $B$ ; faire l'union.
3. **∃!** : compter les solutions selon $x$ ; garder les $x$ qui donnent exactement une solution.
4. **Couples** : traiter une coordonnée, puis l'autre (C3.15).

**Tombe** : DS24 ex2.2, ex3.1 · DS21 ex8.4

<details>
<summary>✏️ Entraînement — DS24</summary>

- $A=\lbrace 2,4,6\rbrace$, $B=]1,2]$ : $C=\lbrace a+b\rbrace=]3,4]\cup]5,6]\cup]7,8]$ ; $A\setminus B=\lbrace 4,6\rbrace$.
- $E_1=\lbrace x\in\mathbb R : \exists!\,y,\ |y|=x+1\rbrace$ : si $x+1>0$ deux solutions $\pm(x+1)$, si $x+1<0$ aucune, si $x+1=0$ une seule ($y=0$). $E_1=\lbrace -1\rbrace$.
</details>

---

## C2.9 — Dire si deux ensembles de nombres sont égaux

**Méthode**
1. Écrire chaque ensemble le plus simplement possible (extension ou intervalle).
2. **Pas égaux** : trouver un élément dans l'un et pas dans l'autre.
3. **Égaux** : double inclusion (C3.10), ou mêmes listes.

**Tombe** : TD1 ex1, ex4

<details>
<summary>✏️ Entraînement — TD1</summary>

- $A=]-3,\pi]\cup[-9,0[$ et $B=]-3,0[$ : $B\subset A$ mais $\pi\in A$, $\pi\notin B$ → **différents**.
- $A=\mathbb Z$ et $B=\lbrace x\in\mathbb Z : x^2-x\text{ pair}\rbrace$ : $x^2-x=x(x-1)$ est un produit d'entiers consécutifs, donc pair : **égaux**.
- $]-\infty,0]$ et $\lbrace x : x^2\leq 0\rbrace=\lbrace 0\rbrace$ : **différents**.
</details>
