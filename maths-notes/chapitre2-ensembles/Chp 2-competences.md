# Chapitre 2 · Ensembles — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 2-cours.md](Chp%202-cours.md)
>
> Chaque compétence = méthode + **correction étape par étape** d'exercices d'annales/TD. Coche `[x]` quand tu sais faire la compétence **sans regarder la méthode**.

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
<summary>✏️ Correction étape par étape — DS20 ex2.1 : $E=\lbrace k\in\mathbb Z : k^2\leq 3k+4\text{ et }3\mid k\rbrace$</summary>

**Étape 1 — Tout passer à gauche.** $k^2\leq3k+4\iff k^2-3k-4\leq0$.

**Étape 2 — Racines du trinôme.** $\Delta=9+16=25$, racines $\frac{3\pm5}{2}$ : $4$ et $-1$. Donc $k^2-3k-4=(k-4)(k+1)$.

**Étape 3 — Signe.** Un trinôme avec $a>0$ est négatif **entre** ses racines : $k\in[-1,4]$.

**Étape 4 — Garder les entiers.** $k\in\lbrace-1,0,1,2,3,4\rbrace$.

**Étape 5 — Condition « $3\mid k$ ».** Parmi eux, les multiples de 3 : $0$ et $3$.

**Résultat** : $E=\lbrace0,3\rbrace$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS23, DS25, DS24 (autres cas)</summary>

**DS23** $\lbrace x\in\mathbb Z : 2x^2-x-10<5\rbrace$
1. $2x^2-x-15<0$.
2. $\Delta=1+120=121$, racines $\frac{1\pm11}{4}$ : $3$ et $-\frac52$.
3. Négatif strictement entre les racines : $x\in\,]-\frac52,3[$.
4. Entiers de cet intervalle : $\lbrace-2,-1,0,1,2\rbrace$ ($3$ exclu car l'inégalité est stricte).

**DS25** $\lbrace n\in\mathbb Z : n^2-2n<-1\rbrace$
1. $n^2-2n+1<0$, soit $(n-1)^2<0$.
2. Un carré est toujours $\geq0$ : aucune solution. **Ensemble vide.**

**DS24** $\lbrace x\in\mathbb R : x^2+2x+3=0\rbrace$
1. $\Delta=4-12=-8<0$ : pas de racine réelle. **Ensemble vide.**
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
<summary>✏️ Correction étape par étape — DS25 ex4.2 : $\lbrace x : \ln(x^2+\frac34)\leq 0\rbrace\cap\,]-\infty,0]$</summary>

**Étape 1 — Domaine.** $x^2+\frac34>0$ toujours : le $\ln$ est défini sur $\mathbb R$.

**Étape 2 — Enlever le ln.** $\ln u\leq0\iff u\leq1$ (car $\ln1=0$ et $\ln$ croissante) : $x^2+\frac34\leq1$.

**Étape 3 — Résoudre.** $x^2\leq\frac14\iff-\frac12\leq x\leq\frac12$.

**Étape 4 — Intersection.** $[-\frac12,\frac12]\cap\,]-\infty,0]=[-\frac12,0]$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS22 ex5</summary>

**$\lbrace x : |x^2-4|<1\rbrace$**
1. $|A|<1\iff-1<A<1$ : $-1<x^2-4<1$.
2. On ajoute 4 : $3<x^2<5$.
3. $x^2>3$ : $x<-\sqrt3$ ou $x>\sqrt3$. $x^2<5$ : $-\sqrt5<x<\sqrt5$.
4. Intersection : $]-\sqrt5,-\sqrt3[\,\cup\,]\sqrt3,\sqrt5[$.

**$\lbrace x : x^2\geq 2\text{ et }-x^2+2x<-1\rbrace$**
1. 1ʳᵉ condition : $x\leq-\sqrt2$ ou $x\geq\sqrt2$.
2. 2ᵉ condition : on multiplie par $-1$ (le sens change) : $x^2-2x-1>0$. $\Delta=8$, racines $1\pm\sqrt2$. Positif à l'extérieur : $x<1-\sqrt2$ ou $x>1+\sqrt2$.
3. Ordonner les bornes : $-\sqrt2\approx-1{,}41<1-\sqrt2\approx-0{,}41<\sqrt2\approx1{,}41<1+\sqrt2\approx2{,}41$.
4. Intersection : à gauche $x\leq-\sqrt2$ (inclus dans $x<1-\sqrt2$) ; à droite $x>1+\sqrt2$ (inclus dans $x\geq\sqrt2$).
5. **Résultat** : $]-\infty,-\sqrt2]\cup\,]1+\sqrt2,+\infty[$.
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
<summary>✏️ Correction étape par étape — DS24 ex7 : $I\cup(J\cap K)$</summary>

Données : $I=[0,2[\cup\lbrace 4\rbrace$, $J=]-1,3]$, $K=\mathbb R\setminus[1,3[$.

**Étape 1 — Simplifier K.** Le complémentaire inverse les crochets : $K=\,]-\infty,1[\,\cup[3,+\infty[$.

**Étape 2 — $J\cap K$.** On garde dans $]-1,3]$ ce qui est hors de $[1,3[$ :
- la partie $]-1,1[$ ;
- le point $3$ (dans $J$ car crochet fermé, dans $K$ car $[3,+\infty[$).

Donc $J\cap K=\,]-1,1[\,\cup\lbrace3\rbrace$.

**Étape 3 — Union avec I.** $]-1,1[\,\cup[0,2[=\,]-1,2[$, puis on ajoute les points isolés $3$ et $4$.

**Résultat** : $I\cup(J\cap K)=\,]-1,2[\,\cup\lbrace3,4\rbrace$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS23 ex7</summary>

Données : $U=[-3,3[\setminus[-1,1[$, $V=\,]-\infty,0[\,\cup\lbrace2,3\rbrace$, $W=\,]-2,0[\,\cup\,]0,2]$.

1. **Simplifier U** : on retire $[-1,1[$ de $[-3,3[$ → $U=[-3,-1[\,\cup[1,3[$.
2. **$V\cap U$** : partie négative de $U$ : $[-3,-1[$ ; parmi $\lbrace2,3\rbrace$, seul $2\in U$ ($3$ exclu). → $[-3,-1[\,\cup\lbrace2\rbrace$.
3. **$(V\cap U)\cup W$** : $[-3,-1[\,\cup\,]-2,0[=[-3,0[$ ; $\lbrace2\rbrace$ est déjà dans $]0,2]$. → $[-3,0[\,\cup\,]0,2]$.
4. **$V\cap W$** : $]-2,0[$ et le point $2$ ($\in W$). → $]-2,0[\,\cup\lbrace2\rbrace$.
5. **$V\setminus U$** : dans $]-\infty,0[$, on retire $[-3,-1[$ → $]-\infty,-3[\,\cup[-1,0[$ ; $2\in U$ est retiré, $3\notin U$ reste. → $]-\infty,-3[\,\cup[-1,0[\,\cup\lbrace3\rbrace$.
6. **$(V\cap W)\setminus(V\setminus U)$** : dans $]-2,0[$, on retire $[-1,0[$ → $]-2,-1[$ ; le point $2$ reste. → $]-2,-1[\,\cup\lbrace2\rbrace$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS21 ex3</summary>

$U=\,]-\infty,-2]$, $V=\mathbb R\setminus[1,3[=\,]-\infty,1[\,\cup[3,+\infty[$, $W=\,]5,+\infty[$.
1. $U\cap V$ : $U$ est entièrement dans $]-\infty,1[$ → $]-\infty,-2]$.
2. $U\cup W=\,]-\infty,-2]\cup\,]5,+\infty[$, son complémentaire inverse les crochets : $]-2,5]$.
3. $V\cap\,]-2,5]$ : on retire $[1,3[$ de $]-2,5]$ → $]-2,1[\,\cup[3,5]$.
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
<summary>✏️ Correction étape par étape — DS23 ex3</summary>

$X=\lbrace 0,1,3,5\rbrace$, $Y=\lbrace 1,2,3,4,6\rbrace$.

**Étape 1 — $X\setminus Y$.** On garde les éléments de $X$ absents de $Y$ : $1$ et $3$ sont dans $Y$ → $X\setminus Y=\lbrace0,5\rbrace$.

**Étape 2 — $\mathcal P(X\setminus Y)$ par taille.** Taille 0 : $\varnothing$. Taille 1 : $\lbrace0\rbrace$, $\lbrace5\rbrace$. Taille 2 : $\lbrace0,5\rbrace$. Contrôle : $2^2=4$ éléments ✔.
$$\mathcal P(X\setminus Y)=\lbrace\varnothing,\lbrace 0\rbrace,\lbrace 5\rbrace,\lbrace 0,5\rbrace\rbrace.$$

**Étape 3 — $Y\setminus X$.** $\lbrace2,4,6\rbrace$.

**Étape 4 — Produit cartésien.** On prend $0$ avec chacun de $2,4,6$, puis $5$ avec chacun. Contrôle : $2\times3=6$ couples ✔.
$$\lbrace(0,2),(0,4),(0,6),(5,2),(5,4),(5,6)\rbrace.$$
</details>

<details>
<summary>✏️ Correction étape par étape — DS21 ex2 et DS20 ex2.2</summary>

**DS21** $\mathcal P(\lbrace 1,2,a\rbrace\times\lbrace 1\rbrace)$
1. Produit : $\lbrace(1,1),(2,1),(a,1)\rbrace$ → 3 éléments.
2. Parties : $\varnothing$ ; 3 singletons $\lbrace(1,1)\rbrace$… ; 3 paires $\lbrace(1,1),(2,1)\rbrace$… ; l'ensemble entier. Total $2^3=8$.

**DS20** $F=\lbrace 1,\pi,\lbrace a\rbrace\rbrace$
1. $F$ a **3** éléments : $1$, $\pi$ et l'ensemble $\lbrace a\rbrace$ (compte pour un seul élément).
2. $\mathcal P(F)$ : $\varnothing$, $\lbrace1\rbrace$, $\lbrace\pi\rbrace$, $\lbrace\lbrace a\rbrace\rbrace$, $\lbrace1,\pi\rbrace$, $\lbrace1,\lbrace a\rbrace\rbrace$, $\lbrace\pi,\lbrace a\rbrace\rbrace$, $F$. Total 8 ✔.
3. ⚠️ On écrit $\lbrace\lbrace a\rbrace\rbrace$ (la partie qui contient l'élément $\lbrace a\rbrace$), pas $\lbrace a\rbrace$.
</details>

---

## C2.5 — Raisonner sur les cardinaux

**Méthode**
1. $\mathrm{Card}(E\times F)=\mathrm{Card}E\times\mathrm{Card}F$ → chercher les **décompositions en produit**.
2. $\mathrm{Card}\,\mathcal P(Z)=2^{\mathrm{Card}Z}$ → le cardinal doit être une **puissance de 2**.
3. Compter des groupes : toutes les parties ($2^n$) moins celles qu'on exclut.

**Tombe** : DS22 ex3 · cours ex10

<details>
<summary>✏️ Correction étape par étape — DS22 ex3</summary>

**Cas $\mathrm{Card}X=16$.**
1. *Produit $W_1\times W_2$* : il faut $\mathrm{Card}W_1\times\mathrm{Card}W_2=16$. Diviseurs de 16 : $1,2,4,8,16$. Couples possibles : $(1,16),(2,8),(4,4),(8,2),(16,1)$ → **possible**.
2. *$X=\mathcal P(Z)$* : il faut $2^{\mathrm{Card}Z}=16=2^4$ → $\mathrm{Card}Z=4$ → **possible**.

**Cas $\mathrm{Card}X=23$.**
1. *Produit* : 23 est premier, seules décompositions $1\times23$ et $23\times1$ → possible, mais seulement avec un ensemble à 1 élément.
2. *$\mathcal P(Z)$* : $2^n$ vaut $16$ ou $32$, jamais $23$ → **impossible**.
</details>

---

## C2.6 — Retrouver $E$ à partir de $\mathcal P(E)$

**Méthode** : les éléments de $E$ sont ceux qui apparaissent dans les **singletons** de $\mathcal P(E)$ ; $E$ lui-même est la plus grande partie. Vérifier que $\mathrm{Card}\,\mathcal P(E)=2^{\mathrm{Card}E}$.

**Tombe** : DS21 ex4 (exercice hors barème, énoncé erroné)

<details>
<summary>✏️ Correction étape par étape</summary>

On sait que $\mathcal P(E)$ contient les singletons $\lbrace\lbrace 0\rbrace\rbrace$, $\lbrace 1\rbrace$, $\lbrace\lbrace 0,1\rbrace\rbrace$ (et aucun autre).

**Étape 1 — Lire les singletons.** Un singleton de $\mathcal P(E)$ est de la forme $\lbrace e\rbrace$ avec $e\in E$. On « enlève une paire d'accolades » : les éléments sont $\lbrace0\rbrace$, $1$, $\lbrace0,1\rbrace$.

**Étape 2 — Écrire E.** $E=\lbrace\lbrace 0\rbrace,1,\lbrace 0,1\rbrace\rbrace$, 3 éléments.

**Étape 3 — Contrôle.** $\mathcal P(E)$ doit avoir $2^3=8$ éléments : si l'énoncé en liste un autre nombre, il y a une erreur (c'était le cas au DS21, exercice retiré du barème).
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
<summary>✏️ Correction étape par étape — DS23 ex2</summary>

**(1) $\forall x\in A,\ (x\in B\land x\in C)$**
1. « Pour tout $x$ de $A$, $x$ est dans… » = inclusion.
2. « dans $B$ et dans $C$ » = dans $B\cap C$.
3. **$A\subset B\cap C$.**

**(2) $\exists x,\ (x\in A\lor x\in C)$**
1. « $x\in A$ ou $x\in C$ » = $x\in A\cup C$.
2. « il existe un tel $x$ » = l'ensemble n'est pas vide.
3. **$A\cup C\neq\varnothing$.**

**(3) $\exists x\in A,\ \forall y\neq x,\ y\notin A$**
1. Il y a un élément $x$ dans $A$, et tout autre élément est hors de $A$.
2. **$A$ est un singleton** ($A=\lbrace x\rbrace$).

**(4) $\forall x,\ \neg(x\in A\land x\in B\land x\in C)$**
1. Aucun $x$ n'est à la fois dans les trois.
2. **$A\cap B\cap C=\varnothing$.**
</details>

<details>
<summary>✏️ Correction étape par étape — DS22 ex2 et DS24 ex4</summary>

**DS22**
1. $\forall x,\ (x\in A\iff x\in B\land x\notin C)$ → « $A$ = les éléments de $B$ hors de $C$ » → $A=B\setminus C$.
2. $\forall x,\ (x\in B\lor x\notin C)\Rightarrow x\notin A$ → $B\cup C^c\subset A^c$. Par contraposée : $x\in A\Rightarrow x\notin B\land x\in C$ → $A\subset B^c\cap C$.
3. $\forall x\in C,\ x\in A\land x\notin B$ → $C\subset A\setminus B$.
4. $\forall x,\ (x\notin A\land x\notin B)\Rightarrow x\notin C$ → $A^c\cap B^c\subset C^c$. Contraposée : $x\in C\Rightarrow x\in A\lor x\in B$ → $C\subset A\cup B$.

**DS24** (régions d'un diagramme de Venn)
1. *Aucun* : hors de $A\cup B\cup C$ → $E\setminus(A\cup B\cup C)$.
2. *Exactement un* : « dans $A$ seulement », etc. → $(A\setminus(B\cup C))\cup(B\setminus(A\cup C))\cup(C\setminus(A\cup B))$.
3. *Exactement deux* : dans deux, pas dans le troisième → $((A\cap B)\setminus C)\cup((A\cap C)\setminus B)\cup((B\cap C)\setminus A)$.

**TD1 (bibliothèque)**
1. « Tous mes romans sont en poche » : $R\subset P$.
2. « Aucun livre étranger n'est en poche », avec $F$ = livres français (donc $F^c$ = étrangers) : $F^c\cap P=\varnothing$, soit $P\subset F$.
3. Transitivité : $R\subset P\subset F$, donc $R\subset F$.
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
<summary>✏️ Correction étape par étape — DS24 ex2.2 : $C=\lbrace a+b : a\in A,\ b\in B\rbrace$</summary>

$A=\lbrace 2,4,6\rbrace$, $B=\,]1,2]$.

**Étape 1 — Fixer $a$.** Pour $a$ fixé, $a+b$ parcourt $]a+1,a+2]$ quand $b$ parcourt $]1,2]$.

**Étape 2 — Les trois translatés.** $a=2$ : $]3,4]$ ; $a=4$ : $]5,6]$ ; $a=6$ : $]7,8]$.

**Étape 3 — Union.** $C=\,]3,4]\cup\,]5,6]\cup\,]7,8]$.

**Bonus** : $A\setminus B$ : $2\in\,]1,2]$ est retiré → $\lbrace4,6\rbrace$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS24 ex3.1 : $E_1=\lbrace x\in\mathbb R : \exists!\,y,\ |y|=x+1\rbrace$</summary>

**Étape 1 — Lire comme une question.** Pour quels $x$ l'équation $|y|=x+1$ (inconnue $y$) a-t-elle **exactement une** solution ?

**Étape 2 — Discuter selon le signe de $x+1$.**
- $x+1>0$ : $y=x+1$ ou $y=-(x+1)$, deux solutions distinctes → non.
- $x+1<0$ : une valeur absolue n'est jamais négative, aucune solution → non.
- $x+1=0$ : $|y|=0$, une seule solution $y=0$ → oui.

**Étape 3 — Conclure.** $E_1=\lbrace-1\rbrace$.
</details>

---

## C2.9 — Dire si deux ensembles de nombres sont égaux

**Méthode**
1. Écrire chaque ensemble le plus simplement possible (extension ou intervalle).
2. **Pas égaux** : trouver un élément dans l'un et pas dans l'autre.
3. **Égaux** : double inclusion (C3.10), ou mêmes listes.

**Tombe** : TD1 ex1, ex4

<details>
<summary>✏️ Correction étape par étape — TD1</summary>

**$A=]-3,\pi]\cup[-9,0[$ et $B=]-3,0[$**
1. Simplifier $A$ : $[-9,0[\,\cup\,]-3,\pi]=[-9,\pi]$.
2. Chercher un élément de l'un hors de l'autre : $\pi\in A$ mais $\pi\notin B$.
3. **Différents** (on a seulement $B\subset A$).

**$A=\mathbb Z$ et $B=\lbrace x\in\mathbb Z : x^2-x\text{ pair}\rbrace$**
1. $B\subset A$ par définition.
2. Pour $A\subset B$ : soit $x\in\mathbb Z$. $x^2-x=x(x-1)$, produit de deux entiers consécutifs, dont l'un est pair : produit pair. Donc $x\in B$.
3. Double inclusion : **égaux**.

**$]-\infty,0]$ et $\lbrace x : x^2\leq 0\rbrace$**
1. $x^2\leq0$ et $x^2\geq0$ donnent $x^2=0$, donc le second ensemble est $\lbrace0\rbrace$.
2. $-1$ est dans le premier, pas dans le second : **différents**.
</details>
