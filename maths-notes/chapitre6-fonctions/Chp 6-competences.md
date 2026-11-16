# Chapitre 6 · Fonctions — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 6-cours.md](Chp%206-cours.md)
>
> Sources : cours, TD5, TD6, annales DS2 2020-2025 ([annales-DS2.md](../annales-DS2.md)). ⭐ = tombe à presque tous les DS2. Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C6.1 — Déterminer le domaine de définition d'une fonction — ⭐ *DS2-20, 21, 24, 25, TD5*
- [ ] C6.2 — Dire si un objet est une fonction, et identifier départ / arrivée — *TD5 ex2*
- [ ] C6.3 — Trouver l'image d'un élément et les antécédents d'un élément — *DS2-22, DS2-24*
- [ ] C6.4 — Prouver ou réfuter l'injectivité — ⭐ *DS2-22, 24, 25, TD6*
- [ ] C6.5 — Prouver ou réfuter la surjectivité — ⭐ *DS2-20, 22, 24, 25, TD6*
- [ ] C6.6 — Décider si une fonction est bijective (selon les ensembles choisis) — *TD6*
- [ ] C6.7 — Calculer une image directe $f(A)$ — ⭐ *DS2-20, 21, 22, 24, 25, TD6*
- [ ] C6.8 — Calculer une image réciproque $f^{-1}(B)$ et l'interpréter — ⭐ *DS2-20, 21, 22, 24, 25, TD6*
- [ ] C6.9 — Changer départ / arrivée pour rendre une fonction injective / surjective / bijective — *TD6, DS2-25*
- [ ] C6.10 — Calculer la bijection réciproque — *DS2-21, DS2-25, TD6*
- [ ] C6.11 — Calculer une composée $g\circ f$ — *cours*
- [ ] C6.12 — Résoudre une inéquation avec $\sqrt{\cdot}$ ou $\lvert\cdot\rvert$ — *TD6, DS2-20*

---

## C6.1 — Domaine de définition

**Méthode** : lister les contraintes et les résoudre : dénominateur $\neq 0$ ; $\sqrt{\cdot}$ : intérieur $\geq 0$ ; $\ln$ : intérieur $>0$ ; puis intersecter (C2.2).

<details>
<summary>✏️ Entraînement — cours ex6</summary>

$\exp(2x)$ : $\mathbb R$. $\ln x$ : $]0,+\infty[$. $\frac1{\sqrt{x^2}}$ : $x^2>0\iff x\neq0$ → $\mathbb R^*$. $\sqrt{-x}$ : $]-\infty,0]$.
</details>

<details>
<summary>✏️ Annales — DS2-25, DS2-20, DS2-21, TD5</summary>

- **DS2-25** $g(x)=\frac1{\ln(x^2-3)}$ : $x^2>3$ et $x^2-3\neq1$ ⇒ $D=]-\infty,-2[\cup]-2,-\sqrt3[\cup]\sqrt3,2[\cup]2,+\infty[$.
- **DS2-25** $h(x)=\sqrt{1-\lvert x-2\rvert}$ : $\lvert x-2\rvert\leq1$ ⇒ $D=[1,3]$.
- **DS2-20** $u(x)=\sqrt{3-\lvert x^2-1\rvert}$ : $\lvert x^2-1\rvert\leq3\iff-2\leq x^2\leq4\iff x\in[-2,2]$.
- **DS2-21** $\ln\left(2-\sqrt{e^x-1}\right)$ : $e^x\geq1$ et $\sqrt{e^x-1}<2\iff 0\leq x<\ln5$ → $[0,\ln5[$.
- **DS2-21** $\frac1{\sqrt{2-\lvert\ln(1+x)\rvert}}$ : $x>-1$ et $\lvert\ln(1+x)\rvert<2\iff e^{-2}<1+x<e^2$ → $]e^{-2}-1,e^2-1[$.
- **DS2-24** $e^{1/x^2}$ : $\mathbb R^*$.
- **TD5** $\sqrt{\ln x}$ : $[1,+\infty[$. $\frac1{\ln\lvert x^2-x-1\rvert}$ : $\mathbb R\setminus\lbrace -1,\frac{1-\sqrt5}2,0,1,\frac{1+\sqrt5}2,2\rbrace$ (exclure $\lvert\cdot\rvert=0$ et $\lvert\cdot\rvert=1$).
</details>

---

## C6.2 — Dire si un objet est une fonction

**Méthode** : vérifier que **chaque** élément de départ a **une et une seule** image dans l'ensemble d'arrivée. Échec si un élément n'a pas d'image ou en a plusieurs.

<details>
<summary>✏️ Entraînement — cours ex2</summary>

« Année ↦ prix du baril » est une fonction. « Prix ↦ moment où le baril valait ce prix » n'en est pas une : un prix peut être atteint à plusieurs dates (ou jamais).
</details>

---

## C6.3 — Image et antécédents

**Méthode** : image : calculer $f(x)$. Antécédents de $y$ : **résoudre** $f(x)=y$ avec $x$ dans l'ensemble de départ (0, 1 ou plusieurs solutions).

<details>
<summary>✏️ Entraînement</summary>

$f:\mathbb R\to\mathbb R$, $x\mapsto x^2$ : image de $-3$ : $9$. Antécédents de 4 : $\pm 2$ ; de $-1$ : aucun.
</details>

<details>
<summary>✏️ Annales — DS2-22 ex6, DS2-24 ex5</summary>

- **DS2-22** $f(n)=$ plus grand premier $\leq n$ ($n\geq2$) : $f(2)=2$, $f(39)=37$. Antécédents de 13 : $\lbrace13,14,15,16\rbrace$.
- **DS2-24** $f(n,m)=2^n(1+2m)$ : $f(0,3)=7$, $f(1,2)=10$.
</details>

---

## C6.4 — Injectivité

**Méthode**
- **Prouver** : « Soient $x,y\in E$ tels que $f(x)=f(y)$ » … « donc $x=y$ ».
- **Réfuter** : deux éléments **distincts** de même image.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ sur $\mathbb R_+$ : $x^2=y^2$ et $x,y\geq 0$ ⇒ $x=y$ → injective. Sur $\mathbb R$ : $f(-1)=f(1)$ → non injective. $x\mapsto x^3$ sur $\mathbb Z$ : $x^3=y^3\Rightarrow x=y$ → injective.
</details>

<details>
<summary>✏️ Annales — DS2-25, DS2-22, DS2-24</summary>

- **DS2-25** $F(x)=e^{-x^2}$ sur $\mathbb R$ : $F(1)=F(-1)=e^{-1}$ avec $1\neq-1$ → **non injective**.
- **DS2-22** $f(7)=f(8)=7$ → non injective.
- **DS2-24** $f(n,m)=2^n(1+2m)$ **injective** : si $2^n(1+2m)=2^{n'}(1+2m')$ avec $n<n'$, on divise par $2^n$ : $1+2m=2^{n'-n}(1+2m')$, impair = pair, absurde. Donc $n=n'$, puis $m=m'$.
</details>

---

## C6.5 — Surjectivité

**Méthode**
- **Prouver** : « Soit $y\in F$. » Résoudre $f(x)=y$ et vérifier que la solution est **dans $E$**.
- **Réfuter** : un $y\in F$ sans antécédent.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ de $\mathbb R$ dans $\mathbb R_+$ : soit $y\geq 0$, $x=\sqrt y$ convient → surjective. $x\mapsto\frac1x$ de $\mathbb R^*$ dans $\mathbb R$ : $0$ n'a pas d'antécédent → non surjective. $x\mapsto x^3$ sur $\mathbb Z$ : $2$ n'est pas un cube → non surjective.
</details>

<details>
<summary>✏️ Annales — DS2-25, DS2-22, DS2-24, DS2-20</summary>

- **DS2-25** $e^{-x^2}>0$ : $-1$ n'a pas d'antécédent → non surjective sur $\mathbb R$.
- **DS2-22** $4$ n'est pas premier, donc n'est l'image de personne → non surjective.
- **DS2-24** **surjective** sur $\mathbb N^*$ : tout $k\geq1$ s'écrit $2^n\times$(impair) en divisant par 2 tant que c'est possible ; l'impair est $1+2m$.
- **DS2-20** $1+\frac1x$ : $1$ n'a pas d'antécédent → non surjective donc non bijective.
</details>

---

## C6.6 — Bijectivité

**Méthode** : injective + surjective, ou bien : pour tout $y\in F$, l'équation $f(x)=y$ a **exactement une** solution dans $E$. Bien lire les ensembles de départ et d'arrivée : la même formule peut être bijective ou non.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ : de $\mathbb R_+$ dans $\mathbb R_+$ → bijective ; de $\mathbb R$ dans $\mathbb R_+$ → surjective seulement ; de $\mathbb R_+$ dans $\mathbb R$ → injective seulement. Capitales → pays : bijective ; villes → pays : surjective seulement.
</details>

---

## C6.7 — Image directe $f(A)$

**Méthode** : décrire **toutes les valeurs prises** par $f$ quand $x$ parcourt $A$ : variations de $f$ sur $A$, valeurs aux bornes, en faisant attention aux bornes atteintes ou non.

<details>
<summary>✏️ Entraînement</summary>

$f(x)=x^2$ : $f([-1,2])=[0,4]$ (minimum 0 en 0, maximum 4 en 2). $f(]1,3[)=]1,9[$.
</details>

<details>
<summary>✏️ Annales — images directes</summary>

- **DS2-25** $F=e^{-x^2}$ : $F(\lbrace0\rbrace)=\lbrace1\rbrace$, $F(\mathbb R_+)=]0,1]$.
- **DS2-24** $f=e^{1/x^2}$ : $f(\mathbb R^*)=]1,+\infty[$. $f(n,m)=2^n(1+2m)$ : $f(\lbrace(0,m)\rbrace)$ = entiers **impairs** ; $f(\lbrace(n,0)\rbrace)=\lbrace2^n\rbrace$.
- **DS2-21** $3e^{2x-1}$ : $f([-2,4[)=[3e^{-5},3e^7[$ (croissante).
- **DS2-20** $\frac1{1+x^2}$ : $f([-1,2])=[\frac15,1]$ (max en 0, min en 2).
- **DS2-22** $f(\lbrace3,8,12,20,58\rbrace)=\lbrace3,7,11,19,53\rbrace$.
- **TD6** $x^2-4$ : $f([-1,+\infty[)=[-4,+\infty[$, $f([-2,2])=[-4,0]$.
</details>

---

## C6.8 — Image réciproque $f^{-1}(B)$

**Méthode** : résoudre $f(x)\in B$ (souvent une inéquation), avec $x$ dans l'ensemble de départ. Ne nécessite pas que $f$ soit bijective. Interpréter en phrase si l'énoncé est concret.

<details>
<summary>✏️ Entraînement — cours ex10 (pizzeria)</summary>

$C(n)=n\left(15-\frac n{100}\right)$, $n\in\mathbb N$. $C^{-1}(\mathbb R_-)$ : $C(n)\leq 0\iff n=0$ ou $n\geq 1500$ → les quantités qui ne rapportent rien. $f(x)=x^2$ : $f^{-1}([1,4])=[-2,-1]\cup[1,2]$.
</details>

<details>
<summary>✏️ Annales — images réciproques</summary>

- **DS2-25** $F=e^{-x^2}$ : $F^{-1}(\lbrace0\rbrace)=\varnothing$ ; $F^{-1}([\frac12,+\infty[)$ : $-x^2\geq-\ln2\iff\lvert x\rvert\leq\sqrt{\ln2}$ → $[-\sqrt{\ln2},\sqrt{\ln2}]$ ; $F^{-1}(\lbrace1\rbrace)=\lbrace0\rbrace$.
- **DS2-24** $e^{1/x^2}\leq2\iff\frac1{x^2}\leq\ln2\iff x^2\geq\frac1{\ln2}$ → $f^{-1}([0,2])=]-\infty,-\frac1{\sqrt{\ln2}}]\cup[\frac1{\sqrt{\ln2}},+\infty[$. $f^{-1}(\lbrace1\rbrace)=\lbrace(0,0)\rbrace$, $f^{-1}(\lbrace12\rbrace)=\lbrace(2,1)\rbrace$ pour $2^n(1+2m)$.
- **DS2-21** $3<3e^{2x-1}\leq9\iff0<2x-1\leq\ln3$ → $]\frac12,\frac{1+\ln3}2]$.
- **DS2-20** $\frac1{1+x^2}<\frac12\iff x^2>1$ → $]-\infty,-1[\cup]1,+\infty[$ (et $\geq0$ toujours vrai).
- **DS2-22** $f^{-1}(\lbrace7,17,27\rbrace)=\lbrace7,8,9,10,17,18\rbrace$ (27 n'est pas premier).
- **TD6** $x^2-4$ : $f^{-1}(\mathbb R_+)=]-\infty,-2]\cup[2,+\infty[$, $f^{-1}([-1,3])=[-\sqrt7,-\sqrt3]\cup[\sqrt3,\sqrt7]$.
</details>

---

## C6.9 — Rendre une fonction injective / surjective / bijective

**Méthode**
- **Surjective** : remplacer l'arrivée par l'image $f(E)$ (variations + limites aux bornes).
- **Injective** : restreindre le départ à un intervalle où $f$ est **strictement monotone** (strictement monotone ⇒ injective).
- **Bijective** : les deux ; justifier « surjective par définition de $f(E)$, injective car strictement monotone ».

<details>
<summary>✏️ Entraînement — TD6 ex1</summary>

- $g_1=x^2-1$, $\mathbb R_+\to\mathbb R$ : strictement croissante → injective ; $g_1(\mathbb R_+)=[-1,+\infty[$ → bijective sur $\mathbb R_+\to[-1,+\infty[$.
- $g_3=r^2+2r-3=(r+1)^2-4$ sur $\mathbb R$ : ni injective ni surjective. Bijective de $[-1,+\infty[$ (ou $]-\infty,-1]$) dans $[-4,+\infty[$.
- $g_4=\frac{3v+7}{2v-3}=\frac32+\frac{23}{4v-6}$ sur $]\frac32,+\infty[$ : strictement décroissante, image $]\frac32,+\infty[$.
</details>

<details>
<summary>✏️ DS2-25 ex2f (bonus)</summary>

$F_{\vert\mathbb R_+}$ est strictement décroissante (C8.9) donc injective ; avec l'arrivée $F(\mathbb R_+)=]0,1]$ elle devient surjective : $\hat F:\mathbb R_+\to]0,1]$ est **bijective**.
</details>

---

## C6.10 — Bijection réciproque

**Méthode** : « Soit $y\in F$. » Résoudre $f(x)=y$ **en isolant $x$**, en gardant la solution qui est dans $E$ (signe !). Écrire $f^{-1}:F\to E$, $y\mapsto\dots$ avec **les ensembles**.

<details>
<summary>✏️ DS2-25 ex2f — $\hat F(x)=e^{-x^2}$, $\mathbb R_+\to]0,1]$</summary>

$e^{-x^2}=y\iff x^2=-\ln y=\ln\frac1y\iff x=\sqrt{\ln\frac1y}$ (car $x\geq0$, et $\ln\frac1y\geq0$ pour $y\in]0,1]$). $\hat F^{-1}:]0,1]\to\mathbb R_+$, $y\mapsto\sqrt{\ln\frac1y}$.
</details>

<details>
<summary>✏️ DS2-21 ex7 — $f(x)=\frac{x^2+1}{x^2+2}$, $\mathbb R_+\to[\frac12,1[$</summary>

$y(x^2+2)=x^2+1\iff x^2(y-1)=1-2y\iff x^2=\frac{2y-1}{1-y}$ ($y\neq1$, et $\geq0$ car $y\in[\frac12,1[$). $x\geq0$ ⇒ $f^{-1}(y)=\sqrt{\frac{2y-1}{1-y}}$.
</details>

---

## C6.11 — Composée

**Méthode** : $g\circ f(x)=g(f(x))$ : remplacer la variable de $g$ par l'expression de $f$. Vérifier que $f(E)\subset D_g$.

<details>
<summary>✏️ Entraînement — cours ex12</summary>

$h=x^2$ ($\mathbb R\to\mathbb R_+$), $j=\sqrt x$ : $(j\circ h)(x)=\sqrt{x^2}=\lvert x\rvert$. Réciproque de $g\circ f$ : $f^{-1}\circ g^{-1}$.
</details>

---

## C6.12 — Inéquations avec racine ou valeur absolue

**Méthode**
- $\sqrt A\leq B$ : condition $A\geq0$ ; si $B<0$ impossible ; si $B\geq0$, élever au carré : $A\leq B^2$.
- $\lvert A\rvert\leq c$ ⇔ $-c\leq A\leq c$ ; $\lvert A\rvert>B$ : distinguer $A\geq0$ et $A<0$.

<details>
<summary>✏️ Entraînement — TD6 ex3, ex5</summary>

- $\sqrt{x+2}\leq2x+1$ : $x\geq-2$ ; si $x<-\frac12$, faux ; sinon $x+2\leq(2x+1)^2\iff4x^2+3x-1\geq0\iff x\leq-1$ ou $x\geq\frac14$ → $S=[\frac14,+\infty[$.
- $\lvert3x+2\rvert>2-x$ : si $3x+2<0$, $-3x-2>2-x\iff x<-2$ ; sinon $3x+2>2-x\iff x>0$ → $S=]-\infty,-2[\cup]0,+\infty[$.
</details>

