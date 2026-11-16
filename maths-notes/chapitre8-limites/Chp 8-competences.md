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
<summary>✏️ Correction étape par étape — TD7 ex2.2 : $\lim_{-\infty}\frac{2x^6-5x^3+7x}{-9x^5-2x^8+7x^3-1}$</summary>

**Étape 1 — FI.** Haut et bas tendent vers l'infini : forme $\frac\infty\infty$.

**Étape 2 — Termes dominants.** En haut $2x^6$, en bas $-2x^8$ (plus haute puissance, même si elle n'est pas écrite en premier !).

**Étape 3 — Factoriser.** $\frac{x^6(2-\frac5{x^3}+\frac7{x^5})}{x^8(-2-\frac9{x^3}+\frac7{x^5}-\frac1{x^8})}=\frac1{x^2}\cdot\frac{2-\dots}{-2-\dots}$.

**Étape 4 — Limites des morceaux.** La fraction tend vers $\frac2{-2}=-1$, et $\frac1{x^2}\to0$.

**Résultat** : $0$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-21 ex1 : $\lim_{-\infty}\frac{x^6+2x^5-x^2+5x+14}{-3x^3+6x^2+45x+42}$</summary>

1. Rapport des termes dominants : $\frac{x^6}{-3x^3}=-\frac{x^3}{3}$.
2. En $-\infty$ : $x^3\to-\infty$, donc $-\frac{x^3}3\to+\infty$.
3. **Résultat** : $+\infty$. (Autres : TD7 $\frac{x^3-x+1}{x^2-x+2}\sim x\to+\infty$ ; $\frac{3x^3+2x-8}{-4x^2+3x-4}\sim-\frac34x\to+\infty$ en $-\infty$.)
</details>

---

## C8.2 — Dénominateur nul, numérateur non nul

**Méthode** : $P_1(a)\neq0$, $P_2(a)=0$ → la limite est infinie. Étudier le **signe du dénominateur** à gauche et à droite de $a$ ($0^-$ ou $0^+$), puis la règle des signes. Si les deux côtés diffèrent → pas de limite en $a$.

<details>
<summary>✏️ Correction étape par étape — TD7 ex3.3 : $\lim_{x\to3}\left(\frac2{x-3}+\frac35\right)$</summary>

**Étape 1 — Diagnostic.** Le numérateur vaut $2\neq0$, le dénominateur tend vers 0 : limite infinie, signe à déterminer.

**Étape 2 — À droite ($x>3$).** $x-3\to0^+$, donc $\frac2{x-3}\to+\infty$ et la somme $\to+\infty$.

**Étape 3 — À gauche ($x<3$).** $x-3\to0^-$, donc $\frac2{x-3}\to-\infty$.

**Étape 4 — Conclure.** Limites à gauche et à droite différentes : **pas de limite** en 3.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex4.4 : $\lim_{x\to0}e^{1/x^2}$</summary>

1. Intérieur : $x^2\to0$ et $x^2>0$, donc $x^2\to0^+$.
2. $\frac1{x^2}\to+\infty$ (des deux côtés, car $x^2$ est toujours positif).
3. $e^Y\to+\infty$ quand $Y\to+\infty$.
4. **Résultat** : $+\infty$.
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
<summary>✏️ Correction étape par étape — DS2-24 ex3 (3 pts) : $\lim_{x\to2}\frac{x^3-12x+16}{x^3-5x^2+8x-4}$ sans L'Hôpital</summary>

**Étape 1 — Remplacer.** Numérateur : $8-24+16=0$. Dénominateur : $8-20+16-4=0$. FI $\frac00$.

**Étape 2 — Justifier la factorisation.** 2 est racine des deux polynômes, donc $(x-2)$ divise chacun.

**Étape 3 — Horner sur le numérateur** (`1 0 -12 16`, $\lambda=2$) : `1 | 2 | -8 | 0` → $(x-2)(x^2+2x-8)$.

**Étape 4 — Horner sur le dénominateur** (`1 -5 8 -4`) : `1 | -3 | 2 | 0` → $(x-2)(x^2-3x+2)$.

**Étape 5 — Simplifier.** Pour $x\neq2$ : $\frac{x^2+2x-8}{x^2-3x+2}$. En 2 : $\frac{0}{0}$ **encore** !

**Étape 6 — Rediviser par $(x-2)$.** $x^2+2x-8=(x-2)(x+4)$ ; $x^2-3x+2=(x-2)(x-1)$. Pour $x\neq2$ : $\frac{x+4}{x-1}$.

**Étape 7 — Conclure.** $\frac{x+4}{x-1}\xrightarrow[x\to2]{}\frac61=\boxed{6}$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-21 ex2 : même fraction qu'en C8.1, en $-2$</summary>

1. Num en $-2$ : $64-64-4-10+14=0$ ; dén : $24+24-90+42=0$ → FI.
2. Horner num (`1 2 0 0 -1 5 14`, $\lambda=-2$) → $(x+2)(x^5-x+7)$ (détail en C7.3).
3. Horner dén (`-3 6 45 42`) : $-3$ ; $6+6=12$ ; $-24+45=21$ ; $-42+42=0$ → $(x+2)(-3x^2+12x+21)$.
4. Simplifier puis remplacer : $\frac{-32+2+7}{-12-24+21}=\frac{-23}{-15}=\boxed{\frac{23}{15}}$.
</details>

<details>
<summary>✏️ Autres annales et TD (même méthode)</summary>

| Source | Limite | Factorisation | Résultat |
|---|---|---|:-:|
| DS2-20 | $\frac{x^4-4x^2+3x+6}{-2x^3-3x^2+x-2}$ en $-2$ | $\frac{(x+2)(x^3-2x^2+3)}{(x+2)(-2x^2+x-1)}$ | $\frac{13}{11}$ |
| TD7 2.3 | $\frac{4x^3+24x^2-27x+7}{x^3+x^2/2+x/2-1/2}$ en $\frac12$ | $\frac{(x-\frac12)(4x^2+26x-14)}{(x-\frac12)(x^2+x+1)}$ | $0$ |
| TD7 4.2 | $\frac{x^2-x-6}{x^3-3x^2+x-3}$ en 3 | $\frac{(x-3)(x+2)}{(x-3)(x^2+1)}$ | $\frac12$ |
| TD7 4.3 | $\frac{-4x^4-4x^3-x^2-2x-1}{2x^3+3x^2-1}$ en $-1$ | $\frac{(x+1)(-4x^3-x-1)}{(x+1)^2(2x-1)}$ : num → 4, dén → 0 | pas de limite ($\mp\infty$) |
</details>

---

## C8.4 — Quantité conjuguée

**Méthode** : $\sqrt A-\sqrt B=\frac{A-B}{\sqrt A+\sqrt B}$ (multiplier haut et bas par le conjugué). Le numérateur se simplifie, le dénominateur n'est plus une FI.

<details>
<summary>✏️ Correction étape par étape — TD7 ex1.4 : $\lim_{x\to2}\frac{x-2}{\sqrt{2x}-2}$</summary>

**Étape 1 — FI.** En 2 : $\frac{0}{\sqrt4-2}=\frac00$.

**Étape 2 — Conjuguée du terme avec racine.** On multiplie haut et bas par $\sqrt{2x}+2$.

**Étape 3 — Simplifier le bas.** $(\sqrt{2x}-2)(\sqrt{2x}+2)=2x-4=2(x-2)$.

**Étape 4 — Simplifier par $(x-2)$.** $\frac{(x-2)(\sqrt{2x}+2)}{2(x-2)}=\frac{\sqrt{2x}+2}{2}$.

**Étape 5 — Remplacer.** $\frac{2+2}{2}=\boxed{2}$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-22 ex3.2 : $\lim\left(\sqrt{e^n+n}-\sqrt{e^n-n}\right)$</summary>

1. FI $\infty-\infty$. Conjuguée : $\frac{(e^n+n)-(e^n-n)}{\sqrt{e^n+n}+\sqrt{e^n-n}}=\frac{2n}{\sqrt{e^n+n}+\sqrt{e^n-n}}$.
2. Minorer le dénominateur : $\sqrt{e^n+n}\geq\sqrt{e^n}=e^{n/2}$ et $\sqrt{e^n-n}\geq0$.
3. Encadrer : $0\leq\frac{2n}{\dots}\leq\frac{2n}{e^{n/2}}$.
4. Croissances comparées : $\frac{2n}{e^{n/2}}\to0$.
5. Gendarmes : la limite vaut **0**.
</details>

---

## C8.5 — Croissances comparées

**Méthode** : repérer le « plus fort » : $e^{ax}\gg x^b\gg(\ln x)^a$. Mettre le terme le plus fort en facteur, ou écrire sous une forme du cours ($\frac{e^{ax}}{x^b}$, $\frac{(\ln x)^a}{x^b}$, $x^b|\ln x|^a$).

<details>
<summary>✏️ Correction étape par étape — DS2-22 ex3.1 : $\lim\frac{n^3+e^{-n}}{(\ln n)^2}$</summary>

**Étape 1 — Simplifier ce qui est simple.** $e^{-n}\to0$ : il ne gêne pas.

**Étape 2 — Séparer.** $\frac{n^3}{(\ln n)^2}+\frac{e^{-n}}{(\ln n)^2}$.

**Étape 3 — Second terme.** $\to\frac{0}{+\infty}=0$ (pas une FI).

**Étape 4 — Premier terme.** FI $\frac\infty\infty$ ; la puissance l'emporte sur le $\ln$ : $\frac{(\ln n)^2}{n^3}\to0^+$, donc son inverse $\to+\infty$.

**Résultat** : $+\infty$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD7 ex3.6 : $\lim_{x\to0^+}x^2\ln x$</summary>

1. FI $0\times(-\infty)$.
2. Changement de variable $X=\frac1x\to+\infty$ : $x^2\ln x=\frac1{X^2}\ln\frac1X=-\frac{\ln X}{X^2}$.
3. Croissances comparées : $\frac{\ln X}{X^2}\to0$.
4. **Résultat** : $0$ (c'est aussi directement le théorème $x^b|\ln x|^a\to0$ en $0^+$).
</details>

---

## C8.6 — Composition, changement de variable

**Méthode** : calculer la limite de l'intérieur $y=u(x)\to L$, puis $\lim_{y\to L}g(y)$. Bien suivre les **signes** ($0^+$ / $0^-$) pour $\frac1y$, $e^{1/y}$, $\ln y$.

<details>
<summary>✏️ Correction étape par étape — TD7 ex1.6 : $\lim_{x\to0}\frac2{1+e^{-1/x}}$</summary>

**Étape 1 — Repérer l'intérieur.** $Y=-\frac1x$, dont le signe dépend du côté.

**Étape 2 — À droite.** $x\to0^+$ : $\frac1x\to+\infty$, $Y\to-\infty$, $e^Y\to0$, la fraction $\to\frac2{1+0}=2$.

**Étape 3 — À gauche.** $x\to0^-$ : $\frac1x\to-\infty$, $Y\to+\infty$, $e^Y\to+\infty$, la fraction $\to0$.

**Étape 4 — Conclure.** $2\neq0$ : **pas de limite** en 0.
</details>

<details>
<summary>✏️ Correction étape par étape — TD7 ex3.1 : $\lim_{-\infty}\ln(-x)+3$</summary>

1. Intérieur : $Y=-x\to+\infty$.
2. $\ln Y\to+\infty$.
3. **Résultat** : $+\infty$.
</details>

---

## C8.7 — Montrer qu'une limite n'existe pas

**Méthode** : calculer $\lim_{a^-}$ et $\lim_{a^+}$ séparément ; si elles diffèrent → pas de limite. Si $a\in D_f$, comparer aussi à $f(a)$. Autre méthode : deux suites $u_n,v_n\to a$ avec $f(u_n)$, $f(v_n)$ de limites différentes.

<details>
<summary>✏️ Correction étape par étape — cours ex7 : $f(x)=\frac1{|x|}$ si $x\neq0$, $f(0)=5$</summary>

**Étape 1 — Limite à gauche.** $|x|\to0^+$, donc $\frac1{|x|}\to+\infty$.

**Étape 2 — Limite à droite.** Même calcul : $+\infty$.

**Étape 3 — Comparer à $f(0)$.** $0\in D_f$, donc pour que la limite en 0 existe il faut que gauche = droite = $f(0)$. Or $f(0)=5\neq+\infty$.

**Étape 4 — Conclure.** Les limites à gauche et à droite existent ($+\infty$), mais **pas la limite en 0**.

Autres exemples : $\frac2{x-3}$ en 3 (C8.2), $\frac2{1+e^{-1/x}}$ en 0 (C8.6).
</details>

---

## C8.8 — Encadrement, minoration, majoration

**Méthode** : établir une inégalité valable **pour $x$ assez grand** (ou près de $a$) :
- $m\leq f\leq M$, $m,M\to\ell$ ⇒ $f\to\ell$ (gendarmes) ;
- $f\geq g\to+\infty$ ⇒ $f\to+\infty$ ; $f\leq h\to-\infty$ ⇒ $f\to-\infty$.

Outil fréquent : partie entière $E(x)\leq x<E(x)+1$.

<details>
<summary>✏️ Correction étape par étape — DS2-21 ex5 (4 pts) : $\lim_{+\infty}\ln(1+x^2)-2x$</summary>

**Question 1 — Montrer $\ln(1+x^2)\leq\ln2+2\ln x$ pour $x\geq1$.**
1. Partir de $x\geq1$ : $x^2\geq1$.
2. Ajouter $x^2$ : $1+x^2\leq x^2+x^2=2x^2$.
3. $\ln$ est croissante : $\ln(1+x^2)\leq\ln(2x^2)=\ln2+2\ln x$ ✔.

**Question 2 — La limite.**
1. Par Q1 : $\ln(1+x^2)-2x\leq\ln2+2\ln x-2x$.
2. Majorant : on factorise par $x$ : $\ln2-2x\left(1-\frac{\ln x}{x}\right)$.
3. $\frac{\ln x}x\to0$ (croissances comparées), donc la parenthèse $\to1$ et le majorant $\to-\infty$.
4. **Théorème de majoration** : une fonction plus petite qu'une fonction qui tend vers $-\infty$ tend vers $-\infty$.
5. **Résultat** : $-\infty$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD8 ex1 : $f(x)=\frac{x^2-E(x^2)}{x}$</summary>

1. Relation fondamentale : $E(x^2)\leq x^2<E(x^2)+1$, donc $0\leq x^2-E(x^2)<1$.
2. **En $+\infty$** ($x>0$) : on divise par $x$ : $0\leq f(x)<\frac1x$. Les deux bornes $\to0$ : gendarmes → $0$.
3. **En $-\infty$** ($x<0$) : diviser par $x<0$ renverse : $\frac1x<f(x)\leq0$ → $0$ aussi.
4. **En $0$** : pour $|x|<1$, $x^2\in[0,1[$ donc $E(x^2)=0$ et $f(x)=\frac{x^2}x=x\to0$.
</details>

---

## C8.9 — Monotonie par la définition

**Méthode** : « Soient $x,y\in I$ tels que $x<y$. » Puis enchaîner des fonctions dont on connaît le sens : carré (croissant sur $\mathbb R_+$), opposé (renverse), inverse (renverse sur $\mathbb R_+^*$), exp et ln (conservent). Conclure $f(x)>f(y)$ ou $f(x)<f(y)$. **Interdit** souvent d'utiliser la dérivée.

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex2e : $F(x)=e^{-x^2}$ strictement décroissante sur $\mathbb R_+$</summary>

**Étape 1 — Poser.** Soient $x,y\in\mathbb R_+$ avec $x<y$.

**Étape 2 — Carré** (croissant sur $\mathbb R_+$, d'où l'importance de $x,y\geq0$) : $x^2<y^2$.

**Étape 3 — Opposé** (renverse) : $-x^2>-y^2$.

**Étape 4 — Exponentielle** (strictement croissante, conserve) : $e^{-x^2}>e^{-y^2}$.

**Étape 5 — Conclure.** $x<y\Rightarrow F(x)>F(y)$ : **strictement décroissante**.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-20 ex3 : $f(x)=1+\frac1x$</summary>

**Monotonie sur $\mathbb R_+^*$.**
1. Soient $0<x<y$.
2. Inverse (décroissante sur $\mathbb R_+^*$) : $\frac1x>\frac1y$.
3. On ajoute 1 : $1+\frac1x>1+\frac1y$. **Strictement décroissante.**

**Non bijective (de $\mathbb R^*$ dans $\mathbb R$).**
1. Chercher une valeur jamais atteinte : $1+\frac1x=1\iff\frac1x=0$, impossible.
2. 1 n'a pas d'antécédent : non surjective, donc non bijective.
</details>

---

## C8.10 — Continuité, prolongement

**Méthode** : en un point de raccord $a$, calculer $\lim_{a^-}f$, $\lim_{a^+}f$ et $f(a)$ : continue ⇔ les trois sont égales. Prolongement : si $\lim_a f=\ell$ finie, poser $f(a)=\ell$.

<details>
<summary>✏️ Correction étape par étape — TD8 ex2 : fonction définie par morceaux</summary>

$f(x)=\frac{-x^2+5x-6}{x^3-x^2-x-2}$ si $x<2$ ; $f(2)=\frac15$ ; $f(x)=\frac1{7e^{x-2}}$ si $x>2$.

**Étape 1 — Domaine.** $x^3-x^2-x-2=(x-2)(x^2+x+1)$ (Horner, C7.3) ne s'annule qu'en 2, qui n'est pas dans la zone $x<2$. L'exponentielle ne s'annule jamais. $D_f=\mathbb R$.

**Étape 2 — Limite à droite de 2.** $\frac1{7e^{x-2}}\to\frac1{7e^0}=\frac17$.

**Étape 3 — Comparer.** $\frac17\neq f(2)=\frac15$ : **non continue** en 2.

**Étape 4 — Limite à gauche de 2.** FI $\frac00$ ; $-x^2+5x-6=(x-2)(3-x)$, donc $f(x)=\frac{3-x}{x^2+x+1}\to\frac17$.

**Étape 5 — Réparer.** Gauche = droite = $\frac17$ : en posant $f(2)=\frac17$, $f$ devient continue sur $\mathbb R$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD8 ex5 : prolonger $f(x)=\frac1xe^{-1/x}+(1-x)\ln(1-x)$ sur $[0,1]$</summary>

1. **En $0^+$, 1ᵉʳ terme** : poser $y=-\frac1x\to-\infty$ ; $\frac1xe^{-1/x}=-ye^y\to0$ (croissances comparées).
2. **En $0^+$, 2ᵉ terme** : $(1-x)\ln(1-x)\to1\times\ln1=0$.
3. Donc $\lim_{0^+}f=0$.
4. **En $1^-$, 1ᵉʳ terme** : $\frac11e^{-1}=e^{-1}$.
5. **En $1^-$, 2ᵉ terme** : $Y=1-x\to0^+$, $Y\ln Y\to0$.
6. Donc $\lim_{1^-}f=e^{-1}$.
7. **Conclusion** : limites finies, on prolonge avec $f(0)=0$ et $f(1)=e^{-1}$.
</details>

---

## C8.11 — Théorème des valeurs intermédiaires

**Méthode** : se ramener à $g(x)=0$, vérifier $g$ **continue sur $[a,b]$**, et $g(a)$, $g(b)$ de **signes opposés** (ou la valeur cible entre $g(a)$ et $g(b)$) ⇒ « d'après le TVI, il existe $c\in[a,b]$ tel que… ».

<details>
<summary>✏️ Correction étape par étape — TD8 ex6 : $x^5=1-x^2$ a une solution dans $[0,1]$</summary>

**Étape 1 — Se ramener à « = 0 ».** $x^5=1-x^2\iff x^5+x^2-1=0$. On pose $g(x)=x^5+x^2-1$.

**Étape 2 — Continuité.** $g$ est un polynôme, donc continue sur $[0,1]$.

**Étape 3 — Valeurs aux bornes.** $g(0)=-1<0$ ; $g(1)=1+1-1=1>0$.

**Étape 4 — TVI.** $0$ est entre $g(0)$ et $g(1)$, donc il existe $c\in[0,1]$ avec $g(c)=0$.

**Étape 5 — Conclure.** $c$ est solution de $x^5=1-x^2$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD8 ex3 : $f(c)=(1-\lambda)f(a)+\lambda f(b)$</summary>

1. Supposons $f(a)\leq f(b)$ (l'autre cas est symétrique).
2. Minorer : $(1-\lambda)f(a)+\lambda f(b)\geq(1-\lambda)f(a)+\lambda f(a)=f(a)$ (car $\lambda\geq0$).
3. Majorer : $\leq(1-\lambda)f(b)+\lambda f(b)=f(b)$ (car $1-\lambda\geq0$).
4. La valeur visée est entre $f(a)$ et $f(b)$, et $f$ est continue sur $[a,b]$.
5. TVI : il existe $c\in[a,b]$ qui convient.
</details>
