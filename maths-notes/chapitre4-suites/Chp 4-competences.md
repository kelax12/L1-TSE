# Chapitre 4 · Suites — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 4-cours.md](Chp%204-cours.md)
>
> ⚠️ Pas encore d'annale de DS2 / examen : compétences tirées du **TD4** et du **cours**. Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C4.1 — Trouver le terme général d'une suite arithmétique, géométrique ou arithmético-géométrique
- [ ] C4.2 — Modéliser une situation par une suite récurrente (placement, intérêts)
- [ ] C4.3 — Étudier le sens de variation par la différence $u_{n+1}-u_n$
- [ ] C4.4 — Étudier le sens de variation par le quotient $\frac{u_{n+1}}{u_n}$
- [ ] C4.5 — Montrer qu'une suite récurrente est bien définie / bornée (récurrence)
- [ ] C4.6 — Montrer qu'une suite récurrente $u_{n+1}=f(u_n)$ est monotone
- [ ] C4.7 — Conclure à la convergence (limite monotone) et calculer la limite (point fixe)
- [ ] C4.8 — Calculer une limite par opérations / terme dominant
- [ ] C4.9 — Lever une forme indéterminée avec racines (quantité conjuguée)
- [ ] C4.10 — Calculer une limite par encadrement (gendarmes)
- [ ] C4.11 — Prouver une limite avec la définition en ε
- [ ] C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil (avec $\ln$)

---

## C4.1 — Trouver le terme général

**Méthode**
1. Identifier la forme : $u_{n+1}=u_n+a$ (arithm.) ; $u_{n+1}=bu_n$ (géom.) ; $u_{n+1}=au_n+b$ (AG).
2. Formules : $u_n=u_0+na$ ; $u_n=u_0b^n$ ; AG : point fixe $r=\frac b{1-a}$, puis $u_n=a^n(u_0-r)+r$.
3. Si on demande de **prouver** la formule : récurrence (C3.11).

**Tombe** : TD4 ex5b · cours ex3

<details>
<summary>✏️ Entraînement — TD4 ex5</summary>

$u_0=10\,000$, $u_{n+1}=1{,}05\,u_n+300$. Point fixe : $r=\frac{300}{1-1{,}05}=-6000$. Donc $u_n=1{,}05^n(10\,000+6000)-6000=16\,000\times 1{,}05^n-6000$ (forme du TD : $(1+t)^n(u_0+\frac bt)-\frac bt$).
</details>

---

## C4.2 — Modéliser une situation par une suite récurrente

**Méthode** : décrire ce qui se passe **entre l'année $n$ et l'année $n+1$** : intérêts à $t\%$ → multiplier par $(1+t)$ ; versement fixe → ajouter $b$ ; respecter l'ordre indiqué (versement avant ou après les intérêts).

**Tombe** : TD4 ex5a

<details>
<summary>✏️ Entraînement</summary>

Intérêts de 5 % puis dépôt de 300 € : $u_{n+1}=1{,}05\,u_n+300$. (Si le dépôt avait lieu avant les intérêts : $u_{n+1}=1{,}05(u_n+300)$.)
</details>

---

## C4.3 — Sens de variation par la différence

**Méthode**
1. Calculer $u_{n+1}-u_n$ et **simplifier** (même dénominateur, développer).
2. Étudier le **signe** : trinôme ($\Delta$, racines, signe de $a$ à l'extérieur), produit de facteurs.
3. Si le signe n'est constant qu'à partir d'un rang : « croissante **à partir du rang** $N$ ».

**Tombe** : TD4 ex1, ex4

<details>
<summary>✏️ Entraînement — TD4 ex1</summary>

- $u_n=\frac n{n-1}$ ($n\geq 2$) : $u_{n+1}-u_n=\frac{n+1}{n}-\frac n{n-1}=\frac{-1}{n(n-1)}<0$ → strictement décroissante, limite $1$.
- $v_n=n^3-4n^2$ : $v_{n+1}-v_n=3n^2-5n-3$, racines $\frac{5\pm\sqrt{61}}6$ ; positif pour $n\geq\frac{5+\sqrt{61}}6\approx 2{,}1$ → croissante à partir de $n=3$, limite $+\infty$.
</details>

---

## C4.4 — Sens de variation par le quotient

**Méthode** : seulement si $u_n>0$ pour tout $n$. Calculer $\frac{u_{n+1}}{u_n}$, simplifier (factorielles, puissances, racines), comparer à 1.

**Tombe** : TD4 ex4 · cours ex6

<details>
<summary>✏️ Entraînement — TD4 ex4 et cours</summary>

- $t_n=\sqrt{\frac n{2n+1}}$ : $\frac{t_{n+1}}{t_n}=\sqrt{\frac{2n^2+3n+1}{2n^2+3n}}>1$ → croissante ; limite $\sqrt{\frac12}=\frac{\sqrt2}2$.
- $v_n=\frac{n!}{n^n}$ : $\frac{v_{n+1}}{v_n}=\left(\frac n{n+1}\right)^n<1$ → décroissante.
</details>

---

## C4.5 — Montrer qu'une suite récurrente est bien définie / bornée

**Méthode** : récurrence sur $P(n)$ : « $a\leq u_n\leq b$ » (ou « $u_n\geq 0$ » pour que la racine/le $\ln$ ait un sens). Hérédité : partir de l'encadrement de $u_n$ et appliquer les opérations de $f$ **une par une** (en vérifiant qu'elles conservent l'ordre).

**Tombe** : TD4 ex2a, 2b

<details>
<summary>✏️ Entraînement — TD4 ex2</summary>

$u_0=1$, $u_{n+1}=\sqrt{2+u_n}$. $P(n)$ : $0\leq u_n<2$. Init : $u_0=1$. Hérédité : $0\leq u_n<2\Rightarrow 2\leq 2+u_n<4\Rightarrow\sqrt2\leq u_{n+1}<2$.
</details>

---

## C4.6 — Montrer qu'une suite récurrente est monotone

**Méthode**
1. Étudier le signe de $u_{n+1}-u_n=f(u_n)-u_n$ : c'est le signe de $g(x)=f(x)-x$ **évalué en $u_n$**.
2. Utiliser l'encadrement de C4.5 pour savoir où se trouve $u_n$.
3. Avec une racine : comparer les carrés (les deux côtés sont positifs).

**Tombe** : TD4 ex2c, 2e

<details>
<summary>✏️ Entraînement — TD4 ex2c</summary>

$u_{n+1}\geq u_n\iff\sqrt{2+u_n}\geq u_n\iff 2+u_n\geq u_n^2$ (car $u_n\geq 0$) $\iff -u_n^2+u_n+2\geq 0\iff(2-u_n)(u_n+1)\geq 0$, vrai car $0\leq u_n<2$. Donc croissante.
</details>

---

## C4.7 — Conclure à la convergence et calculer la limite

**Méthode**
1. Croissante + majorée (ou décroissante + minorée) ⇒ **converge** (limite monotone). Le citer explicitement.
2. Pour trouver $\ell$ : si $f$ est continue, $\ell$ vérifie $\ell=f(\ell)$ (point fixe) ; garder la solution compatible avec l'encadrement.

**Tombe** : TD4 ex2d, 2e

<details>
<summary>✏️ Entraînement — TD4 ex2d</summary>

$(u_n)$ croissante et majorée par 2 : elle converge. $\ell=\sqrt{2+\ell}\Rightarrow\ell^2-\ell-2=0\Rightarrow\ell\in\lbrace 2,-1\rbrace$ ; $\ell\geq 0$ donc $\ell=2$. Avec $u_0=3$ : décroissante, minorée par 2, limite 2 aussi.
</details>

---

## C4.8 — Calculer une limite par opérations / terme dominant

**Méthode**
1. Essayer les **opérations** (tableaux du cours).
2. Si forme indéterminée avec polynômes / fractions : **factoriser par le terme dominant** en haut et en bas ($\frac{n^2+1}{3n^2-n}=\frac{1+1/n^2}{3-1/n}\to\frac13$).
3. Avec $\ln$ : regrouper ($\ln a-\ln b=\ln\frac ab$) puis limite de l'intérieur.
4. Repère : croissances comparées.

**Tombe** : TD4 ex1, ex4

<details>
<summary>✏️ Entraînement — TD4</summary>

- $w_n=\frac{n}{n^2-2n+2}=\frac{1/n}{1-2/n+2/n^2}\to 0$.
- $z_n=\ln(2n^2-n)-\ln(3n+1)=\ln\frac{2n^2-n}{3n+1}$ ; l'intérieur $\sim\frac{2n}3\to+\infty$, donc $z_n\to+\infty$.
</details>

---

## C4.9 — Lever une forme indéterminée avec racines

**Méthode** : pour $\sqrt A-B$ ($\infty-\infty$), multiplier et diviser par la **quantité conjuguée** $\sqrt A+B$ : $\sqrt A-B=\frac{A-B^2}{\sqrt A+B}$, puis terme dominant. Pour savoir si la limite est atteinte par au-dessus/dessous ($\ell^\pm$), comparer l'expression à $\ell$.

**Tombe** : cours ex23, ex24

<details>
<summary>✏️ Entraînement — cours ex23</summary>

$\sqrt{n^2+2n}-n=\frac{2n}{\sqrt{n^2+2n}+n}=\frac2{\sqrt{1+2/n}+1}\to 1$, et $<1$ car $\sqrt{1+2/n}>1$ : limite $1^-$.
</details>

---

## C4.10 — Calculer une limite par encadrement (gendarmes)

**Méthode**
1. Encadrer le morceau gênant : $-1\leq(-1)^n\leq 1$, $-1\leq\cos\leq 1$, dans une somme remplacer $i$ par sa plus petite / plus grande valeur.
2. Vérifier que les deux bornes ont **la même limite**.
3. Citer le théorème des gendarmes.

**Tombe** : TD4 ex3 · cours ex15

<details>
<summary>✏️ Entraînement — TD4 ex3</summary>

$u_n=\frac{nt+(-1)^n}{n+1}$ : $\frac{nt-1}{n+1}\leq u_n\leq\frac{nt+1}{n+1}$ et les deux bornes tendent vers $t$, donc $u_n\to t$.
</details>

---

## C4.11 — Prouver une limite avec la définition en ε

**Méthode**
1. « Soit $\varepsilon>0$. »
2. Au brouillon, résoudre $|u_n-\ell|<\varepsilon$ en $n$ pour trouver une condition $n>\dots$.
3. Poser $N_\varepsilon$ = un entier au-delà de cette valeur, et vérifier que $n\geq N_\varepsilon\Rightarrow|u_n-\ell|<\varepsilon$.

**Tombe** : cours ex13 (et la négation de cette définition tombe en DS1 : DS24 ex6.1)

<details>
<summary>✏️ Entraînement</summary>

$\frac1n\to 0$ : soit $\varepsilon>0$, $N_\varepsilon=E(\frac1\varepsilon)+1$ ; pour $n\geq N_\varepsilon$, $0<\frac1n\leq\frac1{N_\varepsilon}<\varepsilon$.
</details>

---

## C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil

**Méthode** : écrire l'inéquation avec le terme général, isoler $q^n$, appliquer $\ln$ (croissante) : $q^n\geq c\iff n\ln q\geq\ln c\iff n\geq\frac{\ln c}{\ln q}$ **si $q>1$** (si $0<q<1$, $\ln q<0$ : on retourne l'inégalité). Prendre le premier entier.

**Tombe** : TD4 ex5c

<details>
<summary>✏️ Entraînement — TD4 ex5c</summary>

Capital doublé : $16\,000\times 1{,}05^n-6000\geq 20\,000\iff 1{,}05^n\geq 1{,}625\iff n\geq\frac{\ln 1{,}625}{\ln 1{,}05}\approx 9{,}95$. Donc **10 ans**.
</details>
