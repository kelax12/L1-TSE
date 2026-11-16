# Chapitre 5 · Sous-ensembles de ℝ — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 5-cours.md](Chp%205-cours.md)
>
> Sources : cours, **TD5**, annales DS2 2020-2025 ([annales-DS2.md](../annales-DS2.md)). Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C5.1 — Déterminer si un ensemble est majoré / minoré, et trouver ses max / min
- [ ] C5.2 — Trouver le sup / inf d'un ensemble défini par une suite ou une fonction
- [ ] C5.3 — Prouver que $U=\sup E$ par la définition ou la caractérisation ε
- [ ] C5.4 — Prouver que $U=\sup E$ par une suite (caractérisation séquentielle)
- [ ] C5.5 — Répondre à un vrai/faux sur max, sup, majorants (contre-exemple)
- [ ] C5.6 — Relier la limite d'une suite monotone à un sup / inf

---

## C5.1 — Majoré / minoré, max / min

**Méthode**
1. Décrire l'ensemble (intervalle, valeurs d'une suite, image d'une fonction : étudier les variations).
2. Majorant : trouver $M$ avec $x\leq M$ pour tout $x\in E$. **Non majoré** : montrer que $\forall M,\ \exists x\in E,\ x>M$.
3. Max : le majorant doit **appartenir** à $E$ (valeur atteinte).

<details>
<summary>✏️ Correction étape par étape — $E=\lbrace\frac5{n+1} : n\in\mathbb N\rbrace$</summary>

**Étape 1 — Lister quelques éléments.** $5,\ \frac52,\ \frac53,\ \frac54,\dots$ : ils décroissent.

**Étape 2 — Majorant et max.** Le plus grand est le premier : $5$, atteint pour $n=0$. Donc $E$ est majoré et $\max E=5$.

**Étape 3 — Minorant.** Tous les éléments sont $>0$ : $0$ minore $E$.

**Étape 4 — Min ?** Un minimum serait le plus petit élément, mais pour tout $n$, $\frac5{n+2}<\frac5{n+1}$ : il y a toujours plus petit. **Pas de minimum.**

**Bonus — $\mathbb N$ non majoré.** Soit $M\in\mathbb R$ ; l'entier $n=E(|M|)+1$ vérifie $n>M$. Aucun réel ne majore $\mathbb N$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD5 ex1 (ligne par ligne)</summary>

1. **$[e,\pi[$** : $e$ est dedans et c'est le plus petit → $\min=\inf=e$. $\pi$ majore, n'est pas dedans, mais on s'en approche → $\sup=\pi$, pas de max.
2. **$\mathbb N$** : $\min=\inf=0$ ; non majoré → ni sup ni max.
3. **$]-3,+\infty[$** : $\inf=-3$ (non atteint, pas de min) ; non majoré.
4. **$\lbrace\frac n{n+1}\rbrace$** : $0,\frac12,\frac23,\dots$ croissante → $\min=0$ ; tend vers 1 sans l'atteindre → $\sup=1$, pas de max.
5. **$[2,4[\setminus\lbrace3\rbrace\cup\lbrace\frac32,\frac92\rbrace$** : les points isolés dépassent l'intervalle des deux côtés → $\min=\frac32$, $\max=\frac92$.
6. **$\lbrace(-1)^n\rbrace=\lbrace-1,1\rbrace$** : $\min=-1$, $\max=1$.
7. **$\lbrace q\in\mathbb Q_+ : q^2\leq3\rbrace$** : $\min=0$ ; $\sup=\sqrt3$, non atteint ($\sqrt3\notin\mathbb Q$).
8. **$\mathbb Z$** : ni majoré ni minoré.
</details>

---

## C5.2 — Trouver le sup / inf

**Méthode**
1. Si l'ensemble est $\lbrace u_n\rbrace$ avec $(u_n)$ monotone : le sup (ou inf) est soit le premier terme, soit la **limite**.
2. Si c'est l'image d'une fonction : variations + limites aux bornes.
3. Vérifier ensuite par C5.3 ou C5.4.

<details>
<summary>✏️ Correction étape par étape — cours ex4 : $\sup\lbrace -e^{-x} : x\in\mathbb R\rbrace$</summary>

**Étape 1 — Étudier la fonction.** $x\mapsto-e^{-x}$ : $e^{-x}$ décroît, donc $-e^{-x}$ croît.

**Étape 2 — Candidat.** Quand $x\to+\infty$, $e^{-x}\to0$, donc $-e^{-x}\to0$ : candidat $\sup=0$.

**Étape 3 — Majorant.** $e^{-x}>0$ donc $-e^{-x}<0$ : 0 majore l'ensemble.

**Étape 4 — Plus petit majorant.** Les valeurs s'approchent de 0 autant qu'on veut : aucun nombre $<0$ ne majore. $\sup=0$, **non atteint** (pas de max). L'ensemble n'est pas minoré ($-e^{-x}\to-\infty$ en $-\infty$).
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-20 ex2 : $E=\lbrace x\in\mathbb Q_+: x^2\leq3x+1\rbrace$</summary>

1. **Résoudre l'inéquation dans $\mathbb R$** : $x^2-3x-1\leq0$, $\Delta=13$, racines $\frac{3\pm\sqrt{13}}2\approx-0{,}30$ et $3{,}30$ ; négatif entre les racines.
2. **Ajouter $x\geq0$** : $E=\mathbb Q\cap\left[0,\frac{3+\sqrt{13}}2\right]$.
3. **inf** : $0\in E$ et minore tout → $\inf E=\min E=0$.
4. **sup** : $\frac{3+\sqrt{13}}2$ majore $E$ ; il y a des rationnels aussi proches qu'on veut en dessous → c'est le sup.
5. **Appartenance** : $\sqrt{13}$ est irrationnel, donc $\frac{3+\sqrt{13}}2\notin\mathbb Q$ : $\sup E\notin E$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-22 ex5 (QCM)</summary>

1. **A** $=\lbrace1-\frac1n\rbrace\cup\lbrace1+\frac1n\rbrace$, $n\geq1$ : $1-\frac1n<1<1+\frac1n$, donc $1\notin A$. Le plus grand élément est $1+\frac11=2$ → **A admet un max** ✅.
2. **B** : $-n^2-n+3>0\iff n^2+n-3<0$, racines $\frac{-1\pm\sqrt{13}}2\approx-2{,}30$ et $1{,}30$ → $B=\lbrace-2,-1,0,1\rbrace$. $\mathrm{Card}B=4$ (pas 5) ; $\sup B=1$ (pas 2) ; **$\inf B=-2$** ✅.
3. **C** : $x^2>4$ et $|x|\leq3$ → $[-3,-2[\,\cup\,]2,3]$ : **$\min C=-3$** ✅, $C$ est bornée.
4. **$B\cap C$** : les éléments de $B$ vérifient $|n|\leq2$, ceux de $C$ $|x|>2$ → **vide** ✅.
</details>

---

## C5.3 — Prouver $U=\sup E$ (définition ou ε)

**Méthode**
1. **(1)** Montrer que $U$ majore $E$ : « Soit $x\in E$, … $x\leq U$ ».
2. **(2)** « Soit $\varepsilon>0$ ». Trouver $a_\varepsilon\in E$ avec $U-\varepsilon<a_\varepsilon$ (résoudre en $n$ ou $x$, comme C4.11).
3. Pour $\inf$ : minorant + $a_\varepsilon<L+\varepsilon$.

<details>
<summary>✏️ Correction étape par étape — cours ex5 : $\inf\lbrace\frac1n : n\geq 1\rbrace=0$</summary>

**Étape 1 — 0 est un minorant.** Pour tout $n\geq1$, $\frac1n>0$.

**Étape 2 — C'est le plus grand (caractérisation ε).** Soit $\varepsilon>0$. Il faut un élément de $A$ dans $[0,\varepsilon[$.

**Étape 3 — Construire l'élément.** On prend un entier $n>\frac1\varepsilon$ (possible, $\mathbb N$ non majoré). Alors $\frac1n<\varepsilon$, et $\frac1n\in A$.

**Étape 4 — Conclure.** Aucun $\varepsilon>0$ ne minore $A$ : $\inf A=0$.
</details>

---

## C5.4 — Prouver $U=\sup E$ par une suite

**Méthode** : (1) $U$ majore $E$ ; (2) exhiber une suite $(a_n)$ **d'éléments de $E$** qui tend vers $U$.

<details>
<summary>✏️ Correction étape par étape — $\sup[0,1[=1$ par une suite</summary>

**Étape 1 — Majorant.** Tout $x\in[0,1[$ vérifie $x<1$ : 1 majore.

**Étape 2 — Suite d'éléments de l'ensemble.** $a_n=1-\frac1{n+1}$ : $0\leq a_n<1$, donc $a_n\in[0,1[$.

**Étape 3 — Limite.** $a_n\to1$.

**Étape 4 — Conclure.** Un majorant limite d'une suite d'éléments de l'ensemble est le sup : $\sup[0,1[=1$ (non atteint, pas de max).
</details>

---

## C5.5 — Vrai/faux sur max, sup, majorants

**Méthode** : contre-exemples types à avoir en tête : $[0,1[$ (sup non atteint), $]0,1]$ (pas de min), $\mathbb N$ (non majoré), $\varnothing$ (ni sup ni inf), un singleton ($\sup=\inf$), $\frac{(-1)^n}{n+1}$.

<details>
<summary>✏️ Correction étape par étape — trois vrai/faux classiques</summary>

**« Tout ensemble non vide et majoré admet un maximum. »**
1. Penser au contre-exemple type : $[0,1[$.
2. Il est majoré par 1, mais $1\notin[0,1[$ et tout $x<1$ est dépassé par $\frac{x+1}2\in[0,1[$.
3. **Faux.**

**« Si $E$ a un maximum, alors $\sup E=\max E$. »**
1. $\max E$ majore $E$.
2. Tout majorant $M$ vérifie $M\geq\max E$ (car $\max E\in E$).
3. Donc $\max E$ est le plus petit majorant. **Vrai.**

**« Si $\sup E\in E$, alors $E$ a un max. »** C'est la définition du max : **vrai**.

Plus d'exemples : [fiche de cours](Chp%205-cours.md#-vrai--faux).
</details>

---

## C5.6 — Limite d'une suite monotone et sup / inf

**Méthode** : croissante majorée ⇒ $\lim u_n=\sup\lbrace u_n\rbrace$ ; décroissante minorée ⇒ $\lim=\inf\lbrace u_n\rbrace$. Sert dans les deux sens : calculer un sup via une limite, ou une limite via un sup.

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex3d (bonus) : $\sup$ et $\inf$ de $A=\lbrace u_n\rbrace$</summary>

Rappel : $u_0=3$, $u_n$ croissante, $0\leq u_n\leq9$, $u_n\to9$.

**Étape 1 — Borné.** $3=u_0\leq u_n\leq9$ : $A\subset[3,9]$, donc borné et non vide.

**Étape 2 — inf.** La suite croît, donc $u_0=3$ est le plus petit élément : $\inf A=\min A=3$.

**Étape 3 — sup.** 9 majore $A$, et $u_n\in A$ tend vers 9 : par caractérisation séquentielle, $\sup A=9$.

**Étape 4 — Atteint ?** Ici $u_n<9$ pour tout $n$ (sinon la suite serait constante à 9 dès ce rang, impossible en partant de 3 : $u_{n+1}=9\Rightarrow u_n=9$), donc pas de max.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex2.5 et un cas simple</summary>

**DS2-24** : $u_n$ décroissante, $u_0=2$, $u_n\to\sqrt3$.
1. Décroissante → le premier terme est le plus grand : $\sup=\max=2$.
2. Minorée par $\sqrt3$ et tend vers $\sqrt3$ → $\inf=\sqrt3$ (non atteint : $\sqrt3$ irrationnel alors que les $u_n$ sont rationnels).

**$u_n=1-\frac1{n+1}$** : croissante, majorée par 1, tend vers 1 → $\sup=1$ ; $\min=\inf=u_0=0$.
</details>

