# Chapitre 2 · Ensembles — exercices d'entraînement (style annales DS1)

> Compétences : [Chp 2-competences.md](Chp%202-competences.md) · Corrections : [Chp 2-corrections.md](Chp%202-corrections.md)
>
> Pour chaque compétence : **Ex A** = basique (appliquer la méthode), **Ex B** = vérification (le piège typique des annales).
> Fais l'exercice sur papier **avant** de regarder la correction. Si tu réussis l'Ex B sans regarder → coche la compétence.

---

## C2.1 — Écrire par extension un ensemble défini en compréhension

**Ex A.** Écrire par extension $E=\lbrace k\in\mathbb Z : k^2-k-6\leq 0\rbrace$.

**Ex B.** Écrire par extension :
1. $F=\lbrace n\in\mathbb Z : 2n^2+n-6<0\ \text{et}\ n\ \text{pair}\rbrace$
2. $G=\lbrace n\in\mathbb N : n^2+4n+4\leq 0\rbrace$

---

## C2.2 — Ensemble de réels → intervalle ou union d'intervalles

**Ex A.** Écrire comme intervalle ou union d'intervalles :
1. $\lbrace x\in\mathbb R : x^2>9\rbrace$
2. $\lbrace x\in\mathbb R : -2x+4\geq 0\rbrace$

**Ex B.** Même question :
1. $\lbrace x\in\mathbb R : \ln\!\big(x^2+\tfrac12\big)\leq 0\rbrace\cap[0,+\infty[$
2. $\lbrace x\in\mathbb R : 1<x^2\leq 4\rbrace$
3. $\lbrace x\in\mathbb R : x^2\geq 4\ \text{et}\ x^2-4x+3<0\rbrace$

---

## C2.3 — ∩, ∪, \, complémentaire d'intervalles

**Ex A.** Soit $I=[-1,3]$ et $J=]0,5[$. Calculer $I\cap J$, $I\cup J$, $I\setminus J$ et $\mathbb R\setminus I$.

**Ex B.** Soit $U=[-4,2[\,\cup\lbrace 5\rbrace$, $V=\mathbb R\setminus[0,3[$ et $W=]-2,4]$. Calculer :
1. $U\cap V$
2. $\mathbb R\setminus(U\cup W)$
3. $(V\cap W)\setminus U$
4. $W\setminus(U\cap V)$

---

## C2.4 — Écrire $\mathcal P(E)$ et $E\times F$ par extension

**Ex A.** Soit $E=\lbrace 1,2,3\rbrace$ et $F=\lbrace a,b\rbrace$. Écrire $\mathcal P(E)$ et $E\times F$.

**Ex B.**
1. Soit $X=\lbrace 0,2,4,7\rbrace$ et $Y=\lbrace 2,3,4,8\rbrace$. Écrire $\mathcal P(X\setminus Y)$ et $(X\setminus Y)\times(Y\setminus X)$.
2. Soit $G=\lbrace 1,\lbrace 2\rbrace,\varnothing\rbrace$. Combien d'éléments a $\mathcal P(G)$ ? L'écrire par extension.

---

## C2.5 — Raisonner sur les cardinaux

**Ex A.** Un ensemble $X$ a 12 éléments. Peut-on écrire $X=W_1\times W_2$ ? Avec quels cardinaux ? Peut-on écrire $X=\mathcal P(Z)$ ?

**Ex B.**
1. Même question avec $X$ à 32 éléments, puis à 17 éléments.
2. $E$ a 5 éléments. Combien de parties de $E$ ont **au moins 2** éléments ?
3. $\mathrm{Card}\,E=2$, $\mathrm{Card}\,F=3$. Combien vaut $\mathrm{Card}\,\mathcal P(E\times F)$ ?

---

## C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$

**Ex A.** $\mathcal P(E)=\lbrace\varnothing,\lbrace a\rbrace,\lbrace b\rbrace,\lbrace a,b\rbrace\rbrace$. Que vaut $E$ ?

**Ex B.** $\mathcal P(E)=\lbrace\varnothing,\ \lbrace 1\rbrace,\ \lbrace\lbrace 1\rbrace\rbrace,\ \lbrace\varnothing\rbrace,\ \lbrace 1,\lbrace 1\rbrace\rbrace,\ \lbrace 1,\varnothing\rbrace,\ \lbrace\lbrace 1\rbrace,\varnothing\rbrace,\ \lbrace 1,\lbrace 1\rbrace,\varnothing\rbrace\rbrace$.
1. Que vaut $E$ ? Vérifier avec le cardinal.
2. Vrai ou faux : $\varnothing\in E$ ; $\lbrace 1\rbrace\in E$ ; $\lbrace 1\rbrace\subset E$ ; $\lbrace\lbrace 1\rbrace\rbrace\subset E$.

---

## C2.7 — Quantificateurs ↔ langage ensembliste

$A,B,C$ sont des parties d'un ensemble $E$.

**Ex A.** Traduire en langage ensembliste :
1. $\forall x\in E,\ (x\in A\Rightarrow x\in B)$
2. $\exists x\in E,\ (x\in A\ \text{et}\ x\notin B)$
3. $\forall x\in E,\ \big(x\in A\iff(x\in B\ \text{ou}\ x\in C)\big)$

**Ex B.** Traduire en langage ensembliste :
1. $\forall x\in E,\ (x\in A\Rightarrow x\notin B)$
2. $\forall x\in E,\ (x\notin A\Rightarrow x\in B\cap C)$ (donner deux écritures)
3. $\forall x\in E,\ \big(x\in C\iff(x\in A\ \text{et}\ x\notin B)\big)$
4. L'ensemble des éléments de $E$ qui sont dans **exactement un** des deux ensembles $A$, $B$.
5. $\exists x\in A,\ \forall y\in A,\ y=x$

---

## C2.8 — Ensembles définis par des sommes ou « ∃! »

**Ex A.** $A=\lbrace 1,3\rbrace$, $B=[0,1]$. Déterminer $\lbrace a+b : a\in A,\ b\in B\rbrace$.

**Ex B.**
1. $A=\lbrace 0,2,5\rbrace$, $B=]-1,1]$. Déterminer $\lbrace a+b : a\in A,\ b\in B\rbrace$ (le plus simplement possible).
2. Déterminer $E=\lbrace x\in\mathbb R : \exists!\,y\in\mathbb R,\ y^2=x-2\rbrace$.
3. Déterminer $F=\lbrace x\in\mathbb R : \exists\,y\in\mathbb R,\ y^2=x-2\rbrace$. Comparer avec $E$.

---

## C2.9 — Deux ensembles de nombres sont-ils égaux ?

**Ex A.** $A=[0,2]\cup]1,4[$ et $B=[0,4[$. Sont-ils égaux ?

**Ex B.** Dire si $A=B$ (justifier) :
1. $A=\lbrace x\in\mathbb Z : x^2<4\rbrace$ et $B=\lbrace -1,0,1\rbrace$
2. $A=\mathbb Z$ et $B=\lbrace n\in\mathbb Z : n^2+n\ \text{pair}\rbrace$
3. $A=\lbrace x\in\mathbb R : x^2\geq x\rbrace$ et $B=[1,+\infty[$
