# Maths 1 · Entraînement DS2 (suite) — 25 exercices corrigés

> Les thèmes **secondaires** des DS2 (voir [annales-DS2.md](annales-DS2.md)), 5 exercices chacun, du plus simple au plus difficile. Les thèmes principaux sont dans [entrainement-DS2.md](entrainement-DS2.md).

| Partie | Thème | Fréquence en DS2 | Compétences |
|---|---|:-:|---|
| F | Absurde, contraposée, récurrence | 3/5 | C3.7, C3.8, C3.11 |
| G | Sup / inf d'un ensemble | 4/5 | C5.1 – C5.6 |
| H | Monotonie d'une fonction par la définition | 2/5 | C8.9 |
| I | Bijection réciproque | 2/5 | C6.9, C6.10 |
| J | Croissances comparées, quantité conjuguée, encadrement | 2/5 | C8.4, C8.5, C8.8 |

---

## F · Absurde, contraposée, récurrence

> [!TIP]
> - **Contraposée** : pour montrer $P\Rightarrow Q$, on montre $\text{non }Q\Rightarrow\text{non }P$. Attention, la négation de « ou » est « et » (et inversement).
> - **Absurde** : on suppose le contraire de ce qu'on veut, et on arrive à une contradiction (un résultat impossible).
> - **Récurrence** : initialisation, puis hérédité (« supposons $P(n)$, montrons $P(n+1)$ »), puis conclusion. Dans l'hérédité, il faut **utiliser** $P(n)$.

### F1. Montrer par contraposée : si $n^2$ est pair, alors $n$ est pair ($n\in\mathbb Z$).

<details>
<summary>✅ Correction</summary>

La contraposée est : « si $n$ est impair, alors $n^2$ est impair ».

Soit $n$ impair : $n=2k+1$ avec $k\in\mathbb Z$. Alors $n^2=4k^2+4k+1=2(2k^2+2k)+1$, avec $2k^2+2k\in\mathbb Z$, donc $n^2$ est impair.

La contraposée est vraie, donc l'implication de départ aussi.

💡 La preuve directe (« $n^2$ pair ⇒ … ») ne mène nulle part : on ne sait pas « prendre la racine » d'un nombre pair. La contraposée part d'une hypothèse facile à exploiter.
</details>

### F2. Montrer par contraposée : pour $x\in\mathbb R$, si $\forall\varepsilon>0,\ \lvert x\rvert\leq\varepsilon$, alors $x=0$.

<details>
<summary>✅ Correction</summary>

La contraposée est : « si $x\neq0$, alors $\exists\varepsilon>0,\ \lvert x\rvert>\varepsilon$ ».

Soit $x\neq0$. On prend $\varepsilon=\frac{\lvert x\rvert}2$. Il est bien $>0$ car $x\neq0$, et $\lvert x\rvert>\frac{\lvert x\rvert}2=\varepsilon$. ✔

⚠️ La négation de « $\forall\varepsilon>0,\ \lvert x\rvert\leq\varepsilon$ » est « $\exists\varepsilon>0,\ \lvert x\rvert>\varepsilon$ » : le quantificateur change **et** l'inégalité devient stricte.
</details>

### F3. On admet que $\sqrt3$ est irrationnel. Montrer par l'absurde : si $a,b\in\mathbb Z$ vérifient $a+b\sqrt3=0$, alors $a=b=0$.

<details>
<summary>✅ Correction</summary>

Supposons $b\neq0$. Alors $\sqrt3=-\frac ab$, qui est un quotient de deux entiers, donc un rationnel. C'est **absurde**, puisque $\sqrt3$ est irrationnel. Donc $b=0$.

Il reste $a+0=0$, donc $a=0$.

💡 C'est exactement le DS2-2024 (exercice 1.1), avec $\sqrt2$ à la place de $\sqrt3$.
</details>

### F4. Montrer par l'absurde qu'il n'existe pas d'entiers $a,b$ tels que $a^2-b^2=2$.

<details>
<summary>✅ Correction</summary>

Supposons qu'il existe $a,b\in\mathbb Z$ avec $(a-b)(a+b)=2$.

Les deux facteurs ont **la même parité**, car leur différence $(a+b)-(a-b)=2b$ est paire. Deux cas :
- les deux sont **pairs** : leur produit est divisible par $2\times2=4$, et $4$ ne divise pas $2$ ;
- les deux sont **impairs** : leur produit est impair, et $2$ est pair.

Les deux cas sont impossibles : contradiction. Il n'existe donc pas de tels entiers.

💡 Même idée que le DS2-2025 (exercice 4) : on factorise $a^2-b^2$, puis on raisonne sur des produits d'entiers.
</details>

### F5. Montrer par récurrence : $\forall n\geq1$, $\displaystyle\sum_{k=1}^n\frac{1}{k(k+1)}=\frac{n}{n+1}$.

<details>
<summary>✅ Correction</summary>

$P(n)$ : « $\sum_{k=1}^n\frac1{k(k+1)}=\frac n{n+1}$ ».

- **Initialisation** ($n=1$) : à gauche $\frac1{1\times2}=\frac12$, à droite $\frac12$. ✔
- **Hérédité** : supposons $P(n)$. On isole le dernier terme de la somme au rang $n+1$, puis on applique $P(n)$ :
$$\sum_{k=1}^{n+1}\frac1{k(k+1)}=\frac n{n+1}+\frac1{(n+1)(n+2)}=\frac{n(n+2)+1}{(n+1)(n+2)}=\frac{(n+1)^2}{(n+1)(n+2)}=\frac{n+1}{n+2}.$$
C'est bien $P(n+1)$.
- **Conclusion** : $P(n)$ est vraie pour tout $n\geq1$.

💡 Vérification sans récurrence : $\frac1{k(k+1)}=\frac1k-\frac1{k+1}$, donc la somme se télescope et vaut $1-\frac1{n+1}$.
</details>

---

## G · Sup / inf

> [!TIP]
> - **Max** : un majorant qui **appartient** à l'ensemble. **Sup** : le **plus petit** des majorants. Il existe dès que l'ensemble est non vide et majoré, mais il n'appartient pas toujours à l'ensemble.
> - Pour **prouver** $\sup A=M$ : (1) $M$ majore $A$ ; (2) pour tout $\varepsilon>0$, il existe $a\in A$ avec $a>M-\varepsilon$. On peut aussi exhiber une suite d'éléments de $A$ qui tend vers $M$.
> - Pour un ensemble $\lbrace u_n\rbrace$ : si la suite est monotone, une des bornes est $u_0$ et l'autre est la limite.

### G1. $A=\,]-1,3]\cup\lbrace5\rbrace$ : max, min, sup, inf ?

<details>
<summary>✅ Correction</summary>

- $\max A=\sup A=5$, car $5\in A$ et majore tout le reste.
- $\inf A=-1$, mais $-1\notin A$ : **pas de minimum**.

⚠️ Le sup est 5, pas 3 : c'est le point isolé qui compte.
</details>

### G2. $B=\left\lbrace\frac1n : n\in\mathbb N^*\right\rbrace$. Déterminer max et sup, puis **démontrer** que $\inf B=0$.

<details>
<summary>✅ Correction</summary>

$\frac1n$ décroît, donc $\max B=\sup B=1$, atteint pour $n=1$.

**Preuve de $\inf B=0$** :
1. $0$ minore $B$, car $\frac1n>0$.
2. Soit $\varepsilon>0$. On prend un entier $n>\frac1\varepsilon$, ce qui est possible car $\mathbb N$ n'est pas majoré. Alors $\frac1n<\varepsilon=0+\varepsilon$.

Aucun nombre $>0$ ne minore donc $B$, et $\inf B=0$. Comme $0\notin B$, $B$ n'a pas de minimum.
</details>

### G3. $C=\left\lbrace\dfrac{n-1}{n+1} : n\in\mathbb N\right\rbrace$

<details>
<summary>✅ Correction</summary>

On réécrit le terme : $\frac{n-1}{n+1}=1-\frac2{n+1}$. Il est **croissant** en $n$ (on retire une quantité de plus en plus petite) et tend vers $1$.

- $\min C=\inf C=-1$, atteint pour $n=0$.
- $\sup C=1$ : $1$ majore $C$ car $\frac2{n+1}>0$, et la suite des éléments tend vers 1. Il n'est **pas atteint** ($\frac{2}{n+1}\neq0$), donc pas de maximum.
</details>

### G4. $D=\lbrace x\in\mathbb Q : x^2<2\rbrace$

<details>
<summary>✅ Correction</summary>

On a $D=\mathbb Q\cap\,]-\sqrt2,\sqrt2[$.

- $D$ est borné, avec $\sup D=\sqrt2$ et $\inf D=-\sqrt2$. Il y a des rationnels aussi proches qu'on veut de $\sqrt2$ (les décimaux $1{,}4$ ; $1{,}41$ ; $1{,}414$…).
- Ni max ni min : $\pm\sqrt2$ sont irrationnels, donc pas dans $D$.

💡 C'est l'exemple type d'un ensemble de $\mathbb Q$ dont le sup n'est pas dans $\mathbb Q$ (même idée que le DS2-2020, exercice 2).
</details>

### G5. $E=\left\lbrace(-1)^n+\frac1{n+1} : n\in\mathbb N\right\rbrace$

<details>
<summary>✅ Correction</summary>

On sépare les rangs pairs et impairs.
- **$n$ pair** : $1+\frac1{n+1}$ prend les valeurs $2,\ \frac43,\ \frac65,\dots$, qui décroissent vers 1.
- **$n$ impair** : $-1+\frac1{n+1}$ prend les valeurs $-\frac12,\ -\frac34,\dots$, qui décroissent vers $-1$.

Donc :
- $\max E=\sup E=2$, atteint pour $n=0$ ;
- $\inf E=-1$ : $-1$ minore $E$ (car $\frac1{n+1}>0$) et les termes impairs tendent vers $-1$. Il n'est pas atteint, donc pas de minimum.
</details>

---

## H · Monotonie par la définition (sans dérivée)

> [!TIP]
> « Soient $x,y\in I$ tels que $x<y$. » Puis on applique les fonctions **une par une**, en suivant le sens de l'inégalité :
> - ne changent pas le sens : $+c$, $\times c$ avec $c>0$, $\sqrt{\cdot}$, $\exp$, $\ln$, le carré sur $\mathbb R_+$ ;
> - renversent le sens : $\times c$ avec $c<0$, l'opposé, l'inverse sur $\mathbb R_+^*$.
>
> On conclut par « $f(x)<f(y)$ » (croissante) ou « $f(x)>f(y)$ » (décroissante).

### H1. $f(x)=2-3x$ sur $\mathbb R$

<details>
<summary>✅ Correction</summary>

Soient $x<y$. Alors $-3x>-3y$ (on multiplie par $-3<0$, le sens change), puis $2-3x>2-3y$. Donc $f(x)>f(y)$ : $f$ est **strictement décroissante**.
</details>

### H2. $f(x)=\sqrt{x+1}$ sur $[-1,+\infty[$

<details>
<summary>✅ Correction</summary>

Soient $-1\leq x<y$. Alors $0\leq x+1<y+1$, et la racine est strictement croissante sur $\mathbb R_+$, donc $\sqrt{x+1}<\sqrt{y+1}$. $f$ est **strictement croissante**.
</details>

### H3. $f(x)=\dfrac1{x^2+1}$ sur $\mathbb R_+$

<details>
<summary>✅ Correction</summary>

Soient $0\leq x<y$.
- Le carré est croissant sur $\mathbb R_+$ : $x^2<y^2$.
- Donc $0<x^2+1<y^2+1$.
- L'inverse est décroissante sur $\mathbb R_+^*$ : $\frac1{x^2+1}>\frac1{y^2+1}$.

$f$ est **strictement décroissante** sur $\mathbb R_+$. ⚠️ Il faut bien dire que $x,y\geq0$ : sur $\mathbb R$ entier, le carré n'est pas monotone.
</details>

### H4. $f(x)=\ln(1+e^x)$ sur $\mathbb R$

<details>
<summary>✅ Correction</summary>

Soient $x<y$.
- $\exp$ est strictement croissante : $e^x<e^y$.
- Donc $1+e^x<1+e^y$, et ces deux nombres sont $>0$.
- $\ln$ est strictement croissante : $\ln(1+e^x)<\ln(1+e^y)$.

$f$ est **strictement croissante**.
</details>

### H5. $f(x)=x+\dfrac1x$ sur $[1,+\infty[$ (plus difficile)

<details>
<summary>✅ Correction</summary>

Ici les deux termes varient en sens contraire ($x$ croît, $\frac1x$ décroît), donc on ne peut pas enchaîner les fonctions. On étudie le **signe de la différence**.

Soient $1\leq x<y$ :
$$f(y)-f(x)=(y-x)+\frac1y-\frac1x=(y-x)+\frac{x-y}{xy}=(y-x)\left(1-\frac1{xy}\right).$$
- $y-x>0$ ;
- $x\geq1$ et $y>1$ donnent $xy>1$, donc $1-\frac1{xy}>0$.

Le produit est $>0$, donc $f(x)<f(y)$ : $f$ est **strictement croissante** sur $[1,+\infty[$.

💡 Sur $]0,1]$, on aurait $xy<1$, et $f$ y est décroissante.
</details>

---

## I · Bijection réciproque

> [!TIP]
> 1. Vérifier que $f$ est bijective entre les ensembles **donnés** : injective (souvent parce que strictement monotone) et surjective (on résout l'équation).
> 2. « Soit $y\in F$ ». Résoudre $f(x)=y$ **en isolant $x$**, et garder la solution qui est dans l'ensemble de départ $E$.
> 3. Écrire $f^{-1}:F\to E$, $y\mapsto\dots$, **avec les ensembles**.

### I1. $f:\mathbb R\to\,]0,+\infty[$, $f(x)=e^{3x-1}$

<details>
<summary>✅ Correction</summary>

Soit $y>0$. $e^{3x-1}=y$ ⇔ $3x-1=\ln y$ ⇔ $x=\frac{\ln y+1}3$. Pour chaque $y$, il y a une solution et une seule, donc $f$ est bijective. Sa réciproque est
$$f^{-1}:]0,+\infty[\to\mathbb R,\quad y\mapsto\frac{1+\ln y}{3}.$$
</details>

### I2. $f:[0,+\infty[\to[1,+\infty[$, $f(x)=x^2+1$

<details>
<summary>✅ Correction</summary>

Soit $y\geq1$. $x^2+1=y$ ⇔ $x^2=y-1$ (et $y-1\geq0$). Les solutions sont $x=\pm\sqrt{y-1}$, mais on cherche $x\geq0$ : il reste **une seule** solution, $x=\sqrt{y-1}$. Donc
$$f^{-1}:[1,+\infty[\to[0,+\infty[,\quad y\mapsto\sqrt{y-1}.$$
⚠️ C'est l'ensemble de départ $[0,+\infty[$ qui fait choisir $+\sqrt{\ }$. Sur $\mathbb R$ entier, $f$ ne serait pas injective.
</details>

### I3. $f:\,]-1,+\infty[\to\mathbb R$, $f(x)=\ln(x+1)-2$

<details>
<summary>✅ Correction</summary>

Soit $y\in\mathbb R$. $\ln(x+1)-2=y$ ⇔ $x+1=e^{y+2}$ ⇔ $x=e^{y+2}-1$. On vérifie que $x>-1$ : c'est vrai car $e^{y+2}>0$. Donc
$$f^{-1}:\mathbb R\to\,]-1,+\infty[,\quad y\mapsto e^{y+2}-1.$$
</details>

### I4. $f:\mathbb R\setminus\lbrace-2\rbrace\to\mathbb R\setminus\lbrace3\rbrace$, $f(x)=\dfrac{3x-1}{x+2}$

<details>
<summary>✅ Correction</summary>

Soit $y\neq3$. On résout :
$$\frac{3x-1}{x+2}=y\iff3x-1=yx+2y\iff x(3-y)=1+2y\iff x=\frac{1+2y}{3-y},$$
ce qui a un sens car $y\neq3$.

On vérifie que $x\neq-2$ : $\frac{1+2y}{3-y}=-2$ donnerait $1+2y=-6+2y$, soit $1=-6$, impossible. ✔

Chaque $y$ a exactement un antécédent, donc $f$ est bijective, et
$$f^{-1}(y)=\frac{1+2y}{3-y}.$$
💡 On retrouve l'exclusion de l'arrivée en écrivant $f(x)=3-\frac{7}{x+2}$ : cette fonction ne vaut jamais 3.
</details>

### I5. $f:\mathbb R_+\to[0,1[$, $f(x)=\dfrac{x^2}{x^2+1}$ (type DS2-2021, exercice 7)

Montrer que $f$ est bijective et donner sa réciproque.

<details>
<summary>✅ Correction</summary>

**Bijectivité.** On réécrit $f(x)=1-\frac1{x^2+1}$.
- Sur $\mathbb R_+$, $\frac1{x^2+1}$ est strictement décroissante (exercice H3), donc $f$ est **strictement croissante**, donc injective.
- $f(0)=0$ et $f(x)\to1$ en $+\infty$ sans jamais valoir 1, donc l'image est $[0,1[$ : $f$ est surjective.

**Réciproque.** Soit $y\in[0,1[$.
$$y(x^2+1)=x^2\iff x^2(1-y)=y\iff x^2=\frac{y}{1-y}.$$
Cette quantité est $\geq0$ car $0\leq y<1$. Comme $x\geq0$ :
$$f^{-1}:[0,1[\to\mathbb R_+,\quad y\mapsto\sqrt{\frac{y}{1-y}}.$$
</details>

---

## J · Croissances comparées, quantité conjuguée, encadrement

> [!TIP]
> - **Croissances comparées** : $e^x$ l'emporte sur $x^b$, qui l'emporte sur $(\ln x)^a$. On met le terme le plus fort en facteur, ou on se ramène à $\frac{e^x}{x^b}$, $\frac{\ln x}{x^b}$, $x^b\ln x$.
> - **$\sqrt A-\sqrt B$ ou $\sqrt A-x$** (forme $\infty-\infty$) : on multiplie en haut et en bas par la quantité conjuguée.
> - **Fonctions qui oscillent ($\sin$, $\cos$) ou partie entière** : on encadre (gendarmes) ou on minore.

### J1. $\displaystyle\lim_{x\to+\infty}\frac{x^2+\ln x}{e^x}$

<details>
<summary>✅ Correction</summary>

On sépare en deux termes : $\frac{x^2}{e^x}+\frac{\ln x}{e^x}$.
- $\frac{x^2}{e^x}\to0$ par croissances comparées.
- $\frac{\ln x}{e^x}=\frac{\ln x}{x}\cdot\frac{x}{e^x}$ : produit de deux termes qui tendent vers 0, donc il tend vers 0.

La limite vaut **$0$**.
</details>

### J2. $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$

<details>
<summary>✅ Correction</summary>

C'est une forme $\infty-\infty$. On multiplie par la quantité conjuguée $\sqrt{x^2+x}+x$ :
$$\sqrt{x^2+x}-x=\frac{x^2+x-x^2}{\sqrt{x^2+x}+x}=\frac{x}{x\sqrt{1+\frac1x}+x}=\frac{1}{\sqrt{1+\frac1x}+1}\xrightarrow[x\to+\infty]{}\frac12.$$
Pour sortir $x$ de la racine, on utilise $\sqrt{x^2}=x$, valable car $x>0$.

⚠️ Le résultat n'est **pas 0** : il faut faire le calcul.
</details>

### J3. $\displaystyle\lim_{x\to0^+}x\,e^{1/x}$

<details>
<summary>✅ Correction</summary>

C'est une forme $0\times\infty$. On change de variable : $X=\frac1x$, qui tend vers $+\infty$ quand $x\to0^+$. Alors
$$x\,e^{1/x}=\frac{e^X}{X}\xrightarrow[X\to+\infty]{}+\infty$$
par croissances comparées. La limite vaut **$+\infty$**.
</details>

### J4. $\displaystyle\lim_{x\to+\infty}(x+\sin x)$

<details>
<summary>✅ Correction</summary>

$\sin x$ n'a pas de limite en $+\infty$, donc on ne peut pas utiliser la règle de la somme. On **minore** : $\sin x\geq-1$, donc $x+\sin x\geq x-1$. Comme $x-1\to+\infty$, le théorème de minoration donne $\lim(x+\sin x)=+\infty$.
</details>

### J5. $\displaystyle\lim_{x\to+\infty}\frac{E(x)}{x}$, où $E$ est la partie entière

<details>
<summary>✅ Correction</summary>

La propriété de base est $E(x)\leq x<E(x)+1$, d'où $x-1<E(x)\leq x$.

Pour $x>0$, on divise par $x$ :
$$1-\frac1x<\frac{E(x)}x\leq1.$$
Les deux bornes tendent vers 1. Par le théorème des gendarmes, la limite vaut **$1$**.

💡 Même outil que le TD8, exercice 1.
</details>
