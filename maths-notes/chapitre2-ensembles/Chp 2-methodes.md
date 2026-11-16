# Chapitre 2 · Ensembles — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 2-competences.md](Chp%202-competences.md) · [README](../competences-README.md)

## Sommaire

- C2.1 — Écrire par extension un ensemble défini en compréhension
- C2.2 — Écrire un ensemble de réels comme intervalle ou union d'intervalles
- C2.3 — Calculer ∩, ∪, \, complémentaire d'intervalles
- C2.4 — Écrire $\mathcal P(E)$ et $E\times F$ par extension
- C2.5 — Raisonner sur les cardinaux
- C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$
- C2.7 — Traduire entre quantificateurs et langage ensembliste
- C2.8 — Déterminer un ensemble défini par des sommes, des couples ou « ∃! »
- C2.9 — Dire si deux ensembles de nombres sont égaux

---

## C2.1 — Écrire par extension un ensemble défini en compréhension

**Méthode**
1. Résoudre la condition **comme une (in)équation dans $\mathbb R$** (trinôme : factoriser ou calculer $\Delta$ et les racines).
2. Garder les solutions **qui sont dans l'ensemble indiqué** ($\mathbb Z$, $\mathbb N$…) et qui vérifient les autres conditions (divisibilité…).
3. Penser au cas **ensemble vide** (carré parfait $\geq 0$, $\Delta<0$).

---

## C2.2 — Écrire un ensemble de réels comme intervalle ou union d'intervalles

**Méthode**
1. Transformer la condition par **équivalences** (attention au sens des inégalités : multiplier par un négatif retourne, $\ln$ et $\exp$ sont croissantes, la racine carrée demande des deux côtés positifs).
2. Pour $x^2\leq a$ ($a\geq0$) : $-\sqrt a\leq x\leq\sqrt a$ ; pour $x^2>a$ : $x<-\sqrt a$ ou $x>\sqrt a$.
3. Plusieurs conditions « et » → **intersection** : placer les bornes sur une droite.
4. Valeur absolue → voir C3.4.

---

## C2.3 — Calculer ∩, ∪, \, complémentaire d'intervalles

**Méthode**
1. **Dessiner une droite** et y placer chaque ensemble (crochets ouverts/fermés, points isolés comme $\lbrace 3\rbrace$).
2. $\mathbb R\setminus[a,b[=]-\infty,a[\cup[b,+\infty[$ : le complémentaire **inverse les crochets**.
3. Calculer **de l'intérieur des parenthèses vers l'extérieur**, un résultat intermédiaire à la fois.
4. Vérifier les bornes une par une : « $a$ est-il dedans ? ».

---

## C2.4 — Écrire $\mathcal P(E)$ et $E\times F$ par extension

**Méthode**
1. **$\mathcal P(E)$** : lister par taille : $\varnothing$, les singletons, les paires, …, $E$. Total attendu : $2^{\mathrm{Card}E}$ (vérification).
2. **$E\times F$** : pour chaque élément de $E$ (dans l'ordre), l'associer à chaque élément de $F$. Total : $\mathrm{Card}E\times\mathrm{Card}F$.
3. Attention aux éléments qui sont eux-mêmes des ensembles : $\lbrace a\rbrace$, $\varnothing$ comptent comme **un** élément.
4. $E\setminus F$ d'abord si demandé ($\mathcal P(X\setminus Y)$).

---

## C2.5 — Raisonner sur les cardinaux

**Méthode**
1. $\mathrm{Card}(E\times F)=\mathrm{Card}E\times\mathrm{Card}F$ → chercher les **décompositions en produit**.
2. $\mathrm{Card}\,\mathcal P(Z)=2^{\mathrm{Card}Z}$ → le cardinal doit être une **puissance de 2**.
3. Compter des groupes : toutes les parties ($2^n$) moins celles qu'on exclut.

---

## C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$

**Méthode** : les éléments de $E$ sont ceux qui apparaissent dans les **singletons** de $\mathcal P(E)$ ; $E$ lui-même est la plus grande partie. Vérifier que $\mathrm{Card}\,\mathcal P(E)=2^{\mathrm{Card}E}$.

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

---

## C2.8 — Déterminer un ensemble défini par des sommes, des couples ou « ∃! »

**Méthode**
1. Lire la condition comme une **question** : « pour quels $x$ existe-t-il… ? ».
2. **Somme** $\lbrace a+b : a\in A,\ b\in B\rbrace$ : pour chaque $a$ fixé, $a+B$ est un translaté de $B$ ; faire l'union.
3. **∃!** : compter les solutions selon $x$ ; garder les $x$ qui donnent exactement une solution.
4. **Couples** : traiter une coordonnée, puis l'autre (C3.15).

---

## C2.9 — Dire si deux ensembles de nombres sont égaux

**Méthode**
1. Écrire chaque ensemble le plus simplement possible (extension ou intervalle).
2. **Pas égaux** : trouver un élément dans l'un et pas dans l'autre.
3. **Égaux** : double inclusion (C3.10), ou mêmes listes.
