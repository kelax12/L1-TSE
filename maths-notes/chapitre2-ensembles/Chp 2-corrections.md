# Chapitre 2 · Ensembles — corrections

> Énoncés : [Chp 2-exercices.md](Chp%202-exercices.md)

---

## C2.1 — Écrire par extension

### Ex A

$k^2-k-6=(k-3)(k+2)\leq 0\iff k\in[-2,3]$. Dans $\mathbb Z$ : $E=\lbrace -2,-1,0,1,2,3\rbrace$.

### Ex B

1. $\Delta=1+48=49$, racines $\frac{-1\pm7}{4}$ : $-2$ et $\frac32$. Donc $2n^2+n-6<0\iff n\in\left]-2,\frac32\right[$ (bornes **exclues**, inégalité stricte).
   Entiers : $-1,0,1$. Pairs : $F=\lbrace 0\rbrace$.
2. $n^2+4n+4=(n+2)^2\geq 0$, donc $(n+2)^2\leq 0\iff n=-2$. Mais $-2\notin\mathbb N$ : $G=\varnothing$.
   Piège : **vérifier l'ensemble** ($\mathbb N$ et pas $\mathbb Z$) à la fin.

---

## C2.2 — Intervalles

### Ex A

1. $x^2>9\iff x<-3$ ou $x>3$ : $]-\infty,-3[\,\cup\,]3,+\infty[$.
2. $-2x+4\geq0\iff -2x\geq -4\iff x\leq 2$ (on divise par $-2$ : **le sens change**) : $]-\infty,2]$.

### Ex B

1. $x^2+\frac12>0$ toujours, donc le $\ln$ est défini. $\ln(\cdot)\leq 0\iff x^2+\frac12\leq 1\iff x^2\leq\frac12\iff x\in\left[-\frac{\sqrt2}{2},\frac{\sqrt2}{2}\right]$.
   Intersection avec $[0,+\infty[$ : $\left[0,\frac{\sqrt2}{2}\right]$.
2. $x^2>1\iff x\in]-\infty,-1[\cup]1,+\infty[$ ; $x^2\leq4\iff x\in[-2,2]$. Intersection : $[-2,-1[\,\cup\,]1,2]$.
3. $x^2-4x+3=(x-1)(x-3)<0\iff x\in]1,3[$ ; $x^2\geq4\iff x\in]-\infty,-2]\cup[2,+\infty[$. Intersection : $[2,3[$.

---

## C2.3 — Opérations sur les intervalles

### Ex A

- $I\cap J=]0,3]$
- $I\cup J=[-1,5[$
- $I\setminus J=[-1,0]$ ($0\notin J$ donc $0$ reste)
- $\mathbb R\setminus I=]-\infty,-1[\,\cup\,]3,+\infty[$ (crochets inversés)

### Ex B

$V=]-\infty,0[\,\cup\,[3,+\infty[$.

1. $U\cap V=[-4,0[\,\cup\lbrace 5\rbrace$ ($5\geq 3$ donc $5\in V$).
2. $U\cup W=[-4,4]\cup\lbrace 5\rbrace$, donc $\mathbb R\setminus(U\cup W)=]-\infty,-4[\,\cup\,]4,5[\,\cup\,]5,+\infty[$.
   Piège : le point isolé $5$ « troue » le complémentaire.
3. $V\cap W=]-2,0[\,\cup\,[3,4]$. On retire $U$ : $]-2,0[\subset U$ disparaît, $[3,4]$ n'a rien en commun avec $U$. Résultat : $[3,4]$.
4. $W\setminus(U\cap V)=]-2,4]\setminus\big([-4,0[\cup\lbrace5\rbrace\big)=[0,4]$ ($0$ reste car $0\notin[-4,0[$).

---

## C2.4 — $\mathcal P(E)$ et $E\times F$

### Ex A

$\mathcal P(E)=\lbrace\varnothing,\lbrace1\rbrace,\lbrace2\rbrace,\lbrace3\rbrace,\lbrace1,2\rbrace,\lbrace1,3\rbrace,\lbrace2,3\rbrace,\lbrace1,2,3\rbrace\rbrace$ ($2^3=8$ ✓).

$E\times F=\lbrace(1,a),(1,b),(2,a),(2,b),(3,a),(3,b)\rbrace$ ($3\times2=6$ ✓).

### Ex B

1. $X\setminus Y=\lbrace 0,7\rbrace$, donc $\mathcal P(X\setminus Y)=\lbrace\varnothing,\lbrace0\rbrace,\lbrace7\rbrace,\lbrace0,7\rbrace\rbrace$.
   $Y\setminus X=\lbrace 3,8\rbrace$, donc $(X\setminus Y)\times(Y\setminus X)=\lbrace(0,3),(0,8),(7,3),(7,8)\rbrace$.
2. $G$ a **3** éléments ($1$, $\lbrace2\rbrace$ et $\varnothing$ comptent chacun pour un), donc $2^3=8$ parties :
   $\mathcal P(G)=\lbrace\varnothing,\ \lbrace1\rbrace,\ \lbrace\lbrace2\rbrace\rbrace,\ \lbrace\varnothing\rbrace,\ \lbrace1,\lbrace2\rbrace\rbrace,\ \lbrace1,\varnothing\rbrace,\ \lbrace\lbrace2\rbrace,\varnothing\rbrace,\ G\rbrace$.
   Piège : $\varnothing$ (la partie vide) et $\lbrace\varnothing\rbrace$ (la partie qui contient l'élément $\varnothing$) sont **différents**.

---

## C2.5 — Cardinaux

### Ex A

$\mathrm{Card}(W_1\times W_2)=\mathrm{Card}W_1\times\mathrm{Card}W_2=12$ : $(1,12),(2,6),(3,4),(4,3),(6,2),(12,1)$.
$\mathcal P(Z)$ a $2^n$ éléments ; $12$ n'est pas une puissance de 2 : **impossible**.

### Ex B

1. **32** : produits $(1,32),(2,16),(4,8),(8,4),(16,2),(32,1)$ ; et $32=2^5$ donc $X=\mathcal P(Z)$ possible avec $\mathrm{Card}Z=5$.
   **17** (premier) : seulement $(1,17)$ et $(17,1)$ ; pas une puissance de 2, donc pas de $\mathcal P(Z)$.
2. Total $2^5=32$ parties, moins $\varnothing$ (1) et les singletons (5) : $32-1-5=26$.
3. $\mathrm{Card}(E\times F)=6$, donc $\mathrm{Card}\,\mathcal P(E\times F)=2^6=64$.

---

## C2.6 — Retrouver $E$

### Ex A

Singletons : $\lbrace a\rbrace,\lbrace b\rbrace$, donc $E=\lbrace a,b\rbrace$ (c'est aussi la plus grande partie). $2^2=4$ ✓.

### Ex B

1. Singletons : $\lbrace1\rbrace$, $\lbrace\lbrace1\rbrace\rbrace$, $\lbrace\varnothing\rbrace$. Donc $E=\lbrace 1,\lbrace1\rbrace,\varnothing\rbrace$ (la plus grande partie). 3 éléments, $2^3=8$ parties ✓.
2. - $\varnothing\in E$ : **vrai** ($\varnothing$ est un des 3 éléments).
   - $\lbrace1\rbrace\in E$ : **vrai** (c'est un élément).
   - $\lbrace1\rbrace\subset E$ : **vrai** (car $1\in E$).
   - $\lbrace\lbrace1\rbrace\rbrace\subset E$ : **vrai** (car $\lbrace1\rbrace\in E$).

   Règle : $X\in E$ ⇔ $X$ est **dans la liste** ; $X\subset E$ ⇔ **chaque élément** de $X$ est dans la liste.

---

## C2.7 — Quantificateurs ↔ ensembles

### Ex A

1. $A\subset B$
2. $A\setminus B\neq\varnothing$ (ou $A\not\subset B$)
3. $A=B\cup C$

### Ex B

1. $A\cap B=\varnothing$ (ou $A\subset B^c$).
2. $A^c\subset B\cap C$. Par contraposée ($x\notin B\cap C\Rightarrow x\in A$) : $B^c\cup C^c\subset A$.
3. $C=A\setminus B$.
4. $(A\setminus B)\cup(B\setminus A)$ (ou $(A\cup B)\setminus(A\cap B)$).
5. Il existe un élément de $A$ et tous les éléments de $A$ lui sont égaux : $A$ est un **singleton**.

---

## C2.8 — Sommes et « ∃! »

### Ex A

$a=1$ : $1+[0,1]=[1,2]$ ; $a=3$ : $[3,4]$. Résultat : $[1,2]\cup[3,4]$.

### Ex B

1. $0+B=]-1,1]$, $2+B=]1,3]$, $5+B=]4,6]$. Les deux premiers se **recollent** en $1$ : $]-1,3]\,\cup\,]4,6]$.
2. Nombre de $y$ tels que $y^2=x-2$ :
   - $x-2>0$ : deux solutions $\pm\sqrt{x-2}$ ;
   - $x-2=0$ : une seule, $y=0$ ;
   - $x-2<0$ : aucune.
   Exactement une seulement pour $x=2$ : $E=\lbrace 2\rbrace$.
3. Au moins une solution ⇔ $x-2\geq 0$ : $F=[2,+\infty[$. On a $E\subset F$ et $E\neq F$ : « ∃! » est beaucoup plus restrictif que « ∃ ».

---

## C2.9 — Égalité d'ensembles

### Ex A

$[0,2]\cup]1,4[=[0,4[$ (les deux se chevauchent sur $]1,2]$) : **égaux**.

### Ex B

1. $x^2<4\iff -2<x<2$ ; entiers : $-1,0,1$. **Égaux**.
2. $n^2+n=n(n+1)$ est le produit de deux entiers consécutifs, l'un est pair, donc c'est pair pour tout $n$. $B=\mathbb Z$ : **égaux**.
3. $x^2\geq x\iff x(x-1)\geq0\iff x\in]-\infty,0]\cup[1,+\infty[$. Contre-exemple : $-1\in A$ ($1\geq -1$) mais $-1\notin B$. **Différents** ($B\subset A$ seulement).
   Piège : ne pas diviser par $x$ ($x^2\geq x\Rightarrow x\geq1$ est faux si $x\leq0$).
