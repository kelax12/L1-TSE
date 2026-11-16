# Chapitre 8 · Limites de fonctions — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 8-cours.md](Chp%208-cours.md) · Annales : [annales-DS2.md](../annales-DS2.md)
>
> Sources : TD7, TD8, annales DS2 (2020 à 2025). Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C8.1 — Limite d'un polynôme / d'une fraction rationnelle en $\pm\infty$ (terme dominant) — *TD7*
- [ ] C8.2 — Limite d'une fraction en $a$ quand seul le dénominateur s'annule (gauche / droite) — *TD7, DS2-24*
- [ ] C8.3 — Lever une FI $\frac00$ en $a$ en factorisant par $(x-a)$ — ⭐ *DS2-20, DS2-21, DS2-24, TD7, TD8*
- [ ] C8.4 — Lever une FI avec une racine (quantité conjuguée) — *TD7, DS2-22*
- [ ] C8.5 — Utiliser les croissances comparées — *TD7, DS2-21, DS2-22*
- [ ] C8.6 — Composer / changer de variable (exp, ln, $\frac1x$) — *TD7, DS2-24*
- [ ] C8.7 — Montrer qu'une limite n'existe pas (gauche ≠ droite) — *TD7*
- [ ] C8.8 — Limite par encadrement / minoration / majoration — *TD8, DS2-21*
- [ ] C8.9 — Montrer la monotonie d'une fonction par la définition — *DS2-20, DS2-25*
- [ ] C8.10 — Étudier la continuité, prolonger par continuité — *TD8*
- [ ] C8.11 — Appliquer le théorème des valeurs intermédiaires — *TD8*

---

## C8.1 — Terme dominant à l'infini

**Méthode** : factoriser numérateur et dénominateur par leur **plus haute puissance**, ou directement $\lim\frac{a_nx^n}{b_mx^m}=\lim\frac{a_n}{b_m}x^{n-m}$. Rédaction : « $=x^{n-m}\cdot\frac{a_n+\dots}{b_m+\dots}$ avec la fraction $\to\frac{a_n}{b_m}$ ».

<details>
<summary>✏️ Entraînement — TD7 ex2, ex4 / DS2-21 ex1</summary>

- $\lim_{+\infty}\frac{x^3-x+1}{x^2-x+2}=\lim x=+\infty$.
- $\lim_{-\infty}\frac{2x^6-5x^3+7x}{-9x^5-2x^8+7x^3-1}=\lim\frac{2x^6}{-2x^8}=\lim-\frac1{x^2}=0$.
- $\lim_{-\infty}\frac{3x^3+2x-8}{-4x^2+3x-4}=\lim-\frac34x=+\infty$.
- **DS2-21** $\lim_{-\infty}\frac{x^6+2x^5-x^2+5x+14}{-3x^3+6x^2+45x+42}=\lim-\frac{x^3}{3}=+\infty$.
</details>

---

## C8.2 — Dénominateur nul, numérateur non nul

**Méthode** : $P_1(a)\neq0$, $P_2(a)=0$ → la limite est infinie. Étudier le **signe du dénominateur** à gauche et à droite de $a$ ($0^-$ ou $0^+$), puis la règle des signes. Si les deux côtés diffèrent → pas de limite en $a$.

<details>
<summary>✏️ Entraînement — TD7 ex3.3</summary>

$\frac2{x-3}+\frac35$ : $x-3\to0^+$ à droite → $+\infty$ ; $0^-$ à gauche → $-\infty$. **Pas de limite** en 3.
</details>

<details>
<summary>✏️ Entraînement — DS2-24 ex4.4</summary>

$\lim_{x\to0}e^{1/x^2}$ : $x^2\to0^+$ donc $\frac1{x^2}\to+\infty$, puis $e^y\to+\infty$ → $+\infty$ (des deux côtés, car $x^2>0$).
</details>

---

## C8.3 — FI $\frac00$ : factoriser par $(x-a)$ ⭐

> [!WARNING]
> Tombe **à chaque DS2** (2020, 2021, 2024), souvent avec la mention « **sans utiliser la règle de l'Hôpital** ».

**Méthode**
1. Vérifier $P_1(a)=0$ **et** $P_2(a)=0$ → « $a$ racine des deux, donc $(x-a)$ divise $P_1$ et $P_2$ ».
2. Diviser par Horner (ou identification) : $P_i=(x-a)Q_i$.
3. Simplifier : $\frac{P_1}{P_2}=\frac{Q_1}{Q_2}$ pour $x\neq a$, et calculer $\frac{Q_1(a)}{Q_2(a)}$.
4. Si encore $\frac00$ (racine double) : rediviser. Si $Q_2(a)=0$ mais $Q_1(a)\neq0$ → C8.2.

<details>
<summary>✏️ DS2-24 ex3 (3 pts) — $\lim_{x\to2}\frac{x^3-12x+16}{x^3-5x^2+8x-4}$</summary>

Numérateur en 2 : $8-24+16=0$. Dénominateur : $8-20+16-4=0$. FI.

Horner par $x-2$ : num `1 | 2 | -8 | 0` → $(x-2)(x^2+2x-8)=(x-2)^2(x+4)$. Dén `1 | -3 | 2 | 0` → $(x-2)(x^2-3x+2)=(x-2)^2(x-1)$.

Pour $x\neq2$ : $\frac{(x-2)^2(x+4)}{(x-2)^2(x-1)}=\frac{x+4}{x-1}\xrightarrow[x\to2]{}\frac61=\boxed{6}$.
</details>

<details>
<summary>✏️ DS2-21 ex2 (3 pts) — $\lim_{x\to-2}\frac{x^6+2x^5-x^2+5x+14}{-3x^3+6x^2+45x+42}$</summary>

Num en $-2$ : $64-64-4-10+14=0$. Dén : $24+24-90+42=0$. FI.

Horner ($\lambda=-2$) : num `1 | 0 | 0 | 0 | -1 | 7 | 0` → $(x+2)(x^5-x+7)$. Dén `-3 | 12 | 21 | 0` → $(x+2)(-3x^2+12x+21)$.

$\lim=\frac{-32+2+7}{-12-24+21}=\frac{-23}{-15}=\boxed{\frac{23}{15}}$.
</details>

<details>
<summary>✏️ DS2-20 ex1.3 — $\lim_{x\to-2}\frac{x^4-4x^2+3x+6}{-2x^3-3x^2+x-2}$</summary>

Avec $U=x^3-2x^2+3$, $V=-2x^2+x-1$ (voir C7.4) : $\lim=\frac{U(-2)}{V(-2)}=\frac{-8-8+3}{-8-2-1}=\boxed{\frac{13}{11}}$.
</details>

<details>
<summary>✏️ TD7 ex2.3, ex4.2-4.3</summary>

- $\lim_{1/2}\frac{4x^3+24x^2-27x+7}{x^3+\frac{x^2}2+\frac x2-\frac12}=\lim\frac{4x^2+26x-14}{x^2+x+1}=\frac{1+13-14}{7/4}=0$.
- $\lim_3\frac{x^2-x-6}{x^3-3x^2+x-3}=\lim\frac{(x-3)(x+2)}{(x-3)(x^2+1)}=\frac5{10}=\frac12$.
- $\lim_{-1}\frac{-4x^4-4x^3-x^2-2x-1}{2x^3+3x^2-1}=\lim\frac{-4x^3-x-1}{(x+1)(2x-1)}$ : num → $4\neq0$, dén → $0$ : à droite $(x+1)>0$, $(2x-1)<0$ → $0^-$ → $-\infty$ ; à gauche → $+\infty$. **Pas de limite**.
</details>

---

## C8.4 — Quantité conjuguée

**Méthode** : $\sqrt A-\sqrt B=\frac{A-B}{\sqrt A+\sqrt B}$ (multiplier haut et bas par le conjugué). Le numérateur se simplifie, le dénominateur n'est plus une FI.

<details>
<summary>✏️ Entraînement — TD7 ex1.4</summary>

$\frac{x-2}{\sqrt{2x}-2}=\frac{(x-2)(\sqrt{2x}+2)}{2x-4}=\frac{\sqrt{2x}+2}{2}\xrightarrow[x\to2]{}2$.
</details>

<details>
<summary>✏️ DS2-22 ex3.2 — $\lim_{n\to+\infty}\left(\sqrt{e^n+n}-\sqrt{e^n-n}\right)$</summary>

$=\frac{(e^n+n)-(e^n-n)}{\sqrt{e^n+n}+\sqrt{e^n-n}}=\frac{2n}{\sqrt{e^n+n}+\sqrt{e^n-n}}\leq\frac{2n}{\sqrt{e^n}}=2ne^{-n/2}\to0$ (croissances comparées), et la quantité est $\geq0$ → limite **0** (gendarmes).
</details>

---

## C8.5 — Croissances comparées

**Méthode** : repérer le « plus fort » : $e^{ax}\gg x^b\gg(\ln x)^a$. Mettre le terme le plus fort en facteur, ou écrire sous une forme du cours ($\frac{e^{ax}}{x^b}$, $\frac{(\ln x)^a}{x^b}$, $x^b|\ln x|^a$).

<details>
<summary>✏️ Entraînement — TD7 ex1.5, ex3.5-3.6</summary>

- $\frac{e^{-x}}{x^3}=\frac1{x^3e^x}\to0$ en $+\infty$ (pas même une FI).
- $\frac{\ln x}{x^3}\to0$ en $+\infty$.
- $x^2\ln x\to0$ en $0^+$ (poser $X=\frac1x$ : $-\frac{\ln X}{X^2}\to0$).
</details>

<details>
<summary>✏️ DS2-22 ex3.1 — $\lim\frac{n^3+e^{-n}}{(\ln n)^2}$</summary>

$e^{-n}\to0$, donc numérateur $\sim n^3$ ; $\frac{n^3}{(\ln n)^2}\to+\infty$ (la puissance l'emporte sur ln). Limite $+\infty$.
</details>

---

## C8.6 — Composition, changement de variable

**Méthode** : calculer la limite de l'intérieur $y=u(x)\to L$, puis $\lim_{y\to L}g(y)$. Bien suivre les **signes** ($0^+$ / $0^-$) pour $\frac1y$, $e^{1/y}$, $\ln y$.

<details>
<summary>✏️ Entraînement — TD7 ex1.6, ex3.1</summary>

- $\ln(-x)+3\to+\infty$ en $-\infty$ ($y=-x\to+\infty$).
- $\frac2{1+e^{-1/x}}$ : en $0^+$, $-\frac1x\to-\infty$, $e^{\dots}\to0$ → $2$ ; en $0^-$, $-\frac1x\to+\infty$ → $0$. Pas de limite en 0.
</details>

---

## C8.7 — Montrer qu'une limite n'existe pas

**Méthode** : calculer $\lim_{a^-}$ et $\lim_{a^+}$ séparément ; si elles diffèrent → pas de limite. Si $a\in D_f$, comparer aussi à $f(a)$. Autre méthode : deux suites $u_n,v_n\to a$ avec $f(u_n)$, $f(v_n)$ de limites différentes.

<details>
<summary>✏️ Entraînement</summary>

Voir C8.6 ($\frac2{1+e^{-1/x}}$), C8.2 ($\frac2{x-3}$), C8.3 (TD7 4.3).
</details>

---

## C8.8 — Encadrement, minoration, majoration

**Méthode** : établir une inégalité valable **pour $x$ assez grand** (ou près de $a$) :
- $m\leq f\leq M$, $m,M\to\ell$ ⇒ $f\to\ell$ (gendarmes) ;
- $f\geq g\to+\infty$ ⇒ $f\to+\infty$ ; $f\leq h\to-\infty$ ⇒ $f\to-\infty$.

Outil fréquent : partie entière $E(x)\leq x<E(x)+1$.

<details>
<summary>✏️ TD8 ex1 — $f(x)=\frac{x^2-E(x^2)}{x}$</summary>

$0\leq x^2-E(x^2)<1$, donc pour $x>0$ : $0\leq f(x)<\frac1x\to0$ → $\lim_{+\infty}f=0$. En $-\infty$ : on divise par $x<0$, les inégalités se renversent, même limite 0. En $0^\pm$ : pour $|x|<1$, $E(x^2)=0$ donc $f(x)=x\to0$.
</details>

<details>
<summary>✏️ DS2-21 ex5 (4 pts) — $\ln(1+x^2)-2x$</summary>

1. Pour $x\geq1$ : $1\leq x^2$ ⇒ $1+x^2\leq2x^2$ ⇒ (ln croissante) $\ln(1+x^2)\leq\ln2+2\ln x$.
2. Donc $\ln(1+x^2)-2x\leq\ln2+2\ln x-2x=\ln2-2x\left(1-\frac{\ln x}{x}\right)$. Or $\frac{\ln x}x\to0$ (croissances comparées), donc le majorant $\to-\infty$. **Majoration** ⇒ $\lim_{+\infty}(\ln(1+x^2)-2x)=-\infty$.
</details>

---

## C8.9 — Monotonie par la définition

**Méthode** : « Soient $x,y\in I$ tels que $x<y$. » Puis enchaîner des fonctions dont on connaît le sens : carré (croissant sur $\mathbb R_+$), opposé (renverse), inverse (renverse sur $\mathbb R_+^*$), exp et ln (conservent). Conclure $f(x)>f(y)$ ou $f(x)<f(y)$. **Interdit** souvent d'utiliser la dérivée.

<details>
<summary>✏️ DS2-25 ex2e — $x\mapsto e^{-x^2}$ strictement décroissante sur $\mathbb R_+$</summary>

Soient $0\leq x<y$. Alors $x^2<y^2$ ⇒ $-x^2>-y^2$ ⇒ $e^{-x^2}>e^{-y^2}$ (exp strictement croissante). Donc $F(x)>F(y)$.
</details>

<details>
<summary>✏️ DS2-20 ex3 — $f(x)=1+\frac1x$ sur $\mathbb R_+^*$</summary>

Soient $0<x<y$. Alors $\frac1x>\frac1y$ (inverse décroissante sur $\mathbb R_+^*$), donc $1+\frac1x>1+\frac1y$ : $f$ strictement décroissante. **Non bijective** sur $\mathbb R^*\to\mathbb R$ : $1$ n'a pas d'antécédent ($\frac1x=0$ impossible), donc pas surjective.
</details>

---

## C8.10 — Continuité, prolongement

**Méthode** : en un point de raccord $a$, calculer $\lim_{a^-}f$, $\lim_{a^+}f$ et $f(a)$ : continue ⇔ les trois sont égales. Prolongement : si $\lim_a f=\ell$ finie, poser $f(a)=\ell$.

<details>
<summary>✏️ TD8 ex2</summary>

$f=\frac{-x^2+5x-6}{x^3-x^2-x-2}$ ($x<2$), $\frac15$ ($x=2$), $\frac{1}{7e^{x-2}}$ ($x>2$). $D_f=\mathbb R$ car $x^3-x^2-x-2=(x-2)(x^2+x+1)$ ne s'annule pas sur $]-\infty,2[$.
$\lim_{2^+}=\frac17\neq f(2)=\frac15$ → non continue. $\lim_{2^-}=\lim\frac{(x-2)(3-x)}{(x-2)(x^2+x+1)}=\frac17$. En posant $f(2)=\frac17$, $f$ devient continue.
</details>

<details>
<summary>✏️ TD8 ex5</summary>

$f(x)=\frac1xe^{-1/x}+(1-x)\ln(1-x)$ sur $]0,1[$ : en $0^+$, $y=-\frac1x\to-\infty$, $-ye^y\to0$, et $(1-x)\ln(1-x)\to0$ → 0. En $1^-$ : $e^{-1}+0$. Prolongeable avec $f(0)=0$, $f(1)=e^{-1}$.
</details>

---

## C8.11 — Théorème des valeurs intermédiaires

**Méthode** : se ramener à $g(x)=0$, vérifier $g$ **continue sur $[a,b]$**, et $g(a)$, $g(b)$ de **signes opposés** (ou la valeur cible entre $g(a)$ et $g(b)$) ⇒ « d'après le TVI, il existe $c\in[a,b]$ tel que… ».

<details>
<summary>✏️ TD8 ex6 et ex3</summary>

$x^5=1-x^2$ ⇔ $g(x)=x^5+x^2-1=0$ ; $g$ continue, $g(0)=-1<0$, $g(1)=1>0$ ⇒ une solution dans $[0,1]$.

$(1-\lambda)f(a)+\lambda f(b)$ est entre $f(a)$ et $f(b)$ (moyenne pondérée, $\lambda\in[0,1]$) ⇒ atteint par $f$ continue sur $[a,b]$.
</details>
