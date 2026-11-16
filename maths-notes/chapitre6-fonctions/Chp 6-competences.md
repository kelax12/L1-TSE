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
<summary>✏️ Correction étape par étape — DS2-25 ex1a : domaine de $g(x)=\frac1{\ln(x^2-3)}$</summary>

**Étape 1 — Lister les contraintes.** Un $\ln$ : $x^2-3>0$. Un dénominateur : $\ln(x^2-3)\neq0$.

**Étape 2 — Contrainte du ln.** $x^2>3\iff x<-\sqrt3$ ou $x>\sqrt3$.

**Étape 3 — Contrainte du dénominateur.** $\ln(x^2-3)=0\iff x^2-3=1\iff x=\pm2$ : on exclut $\pm2$.

**Étape 4 — Intersection.** On retire $-2$ et $2$ de $]-\infty,-\sqrt3[\,\cup\,]\sqrt3,+\infty[$ ($2>\sqrt3\approx1{,}73$, donc ils sont bien dedans) :
$$D_g=\,]-\infty,-2[\,\cup\,]-2,-\sqrt3[\,\cup\,]\sqrt3,2[\,\cup\,]2,+\infty[.$$
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-21 ex4 : domaine de $\frac1{\sqrt{2-\lvert\ln(1+x)\rvert}}$</summary>

1. **Contraintes** : $\ln$ → $1+x>0$ ; racine au dénominateur → $2-|\ln(1+x)|>0$ (strict).
2. $1+x>0\iff x>-1$.
3. $|\ln(1+x)|<2\iff-2<\ln(1+x)<2\iff e^{-2}<1+x<e^2$ (exp croissante).
4. $\iff e^{-2}-1<x<e^2-1$, et $e^{-2}-1>-1$ donc la 1ʳᵉ contrainte est incluse.
5. $D=\,]e^{-2}-1,\ e^2-1[$.
</details>

<details>
<summary>✏️ Autres annales (même méthode)</summary>

| Fonction | Contraintes | Domaine |
|---|---|---|
| DS2-25 $\sqrt{1-\lvert x-2\rvert}$ | $\lvert x-2\rvert\leq1\iff1\leq x\leq3$ | $[1,3]$ |
| DS2-20 $\sqrt{3-\lvert x^2-1\rvert}$ | $-3\leq x^2-1\leq3\iff-2\leq x^2\leq4$ | $[-2,2]$ |
| DS2-21 $\ln(2-\sqrt{e^x-1})$ | $e^x-1\geq0$ et $\sqrt{e^x-1}<2\iff e^x<5$ | $[0,\ln5[$ |
| DS2-24 $e^{1/x^2}$ | $x\neq0$ | $\mathbb R^*$ |
| TD5 $\sqrt{\ln x}$ | $x>0$ et $\ln x\geq0$ | $[1,+\infty[$ |
| TD5 $\frac1{\ln\lvert x^2-x-1\rvert}$ | $\lvert\cdot\rvert\neq0$ et $\lvert\cdot\rvert\neq1$ | $\mathbb R\setminus\lbrace-1,\frac{1\pm\sqrt5}2,0,1,2\rbrace$ |
</details>

---

## C6.2 — Dire si un objet est une fonction

**Méthode** : vérifier que **chaque** élément de départ a **une et une seule** image dans l'ensemble d'arrivée. Échec si un élément n'a pas d'image ou en a plusieurs.

<details>
<summary>✏️ Correction étape par étape — cours ex2 (prix du baril)</summary>

**Objet 1 : année ↦ prix du baril.**
1. Prendre un élément de départ quelconque : une année $x$.
2. Combien d'images ? À une date donnée, il y a **un seul** prix.
3. C'est une **fonction**.

**Objet 2 : prix ↦ date où le baril valait ce prix.**
1. Prendre un prix, par exemple 80 \$.
2. Combien d'images ? Ce prix a pu être atteint à **plusieurs** dates, ou **jamais** (par exemple 1000 \$).
3. Ce n'est **pas une fonction** (il faut exactement une image pour chaque élément de départ).
</details>

---

## C6.3 — Image et antécédents

**Méthode** : image : calculer $f(x)$. Antécédents de $y$ : **résoudre** $f(x)=y$ avec $x$ dans l'ensemble de départ (0, 1 ou plusieurs solutions).

<details>
<summary>✏️ Correction étape par étape — DS2-22 ex6 : $f(n)$ = plus grand nombre premier $\leq n$</summary>

**Images.**
1. $f(2)$ : premiers $\leq2$ : $\lbrace2\rbrace$ → $f(2)=2$.
2. $f(39)$ : on descend depuis 39 : 39 = 3×13, 38 pair, 37 premier → $f(39)=37$.

**Antécédents de 13.** On résout $f(n)=13$ :
1. Il faut $n\geq13$ (sinon 13 n'est pas $\leq n$).
2. Il faut qu'aucun premier ne soit entre 14 et $n$ : le premier suivant est 17, donc $n\leq16$.
3. Antécédents : $\lbrace13,14,15,16\rbrace$.

**DS2-24** $f(n,m)=2^n(1+2m)$ : $f(0,3)=1\times7=7$ ; $f(1,2)=2\times5=10$.
</details>

---

## C6.4 — Injectivité

**Méthode**
- **Prouver** : « Soient $x,y\in E$ tels que $f(x)=f(y)$ » … « donc $x=y$ ».
- **Réfuter** : deux éléments **distincts** de même image.

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex5.5 : $f(n,m)=2^n(1+2m)$ est injective</summary>

**Étape 1 — Poser.** Soient $(n,m),(n',m')$ avec $2^n(1+2m)=2^{n'}(1+2m')$. À montrer : $n=n'$ et $m=m'$.

**Étape 2 — Raisonner par l'absurde sur $n$.** Supposons $n<n'$ (le cas $n>n'$ est symétrique).

**Étape 3 — Diviser par $2^n$.** $1+2m=2^{n'-n}(1+2m')$ avec $n'-n\geq1$.

**Étape 4 — Parité.** À gauche un **impair**, à droite un **pair** (multiple de 2). Contradiction. Donc $n=n'$.

**Étape 5 — Finir.** On simplifie par $2^n$ : $1+2m=1+2m'$, donc $m=m'$. $f$ est **injective**.
</details>

<details>
<summary>✏️ Correction étape par étape — réfuter : DS2-25 et DS2-22</summary>

**DS2-25** $F(x)=e^{-x^2}$ sur $\mathbb R$
1. Repérer la symétrie : $x^2$ ne change pas si on remplace $x$ par $-x$.
2. Contre-exemple : $F(1)=e^{-1}=F(-1)$ avec $1\neq-1$.
3. **Non injective.**

**DS2-22** plus grand premier $\leq n$ : $f(7)=7=f(8)$, avec $7\neq8$ → **non injective**.

**Cours** $x\mapsto x^2$ sur $\mathbb R_+$ : $x^2=y^2\Rightarrow(x-y)(x+y)=0$ ; si $x+y=0$ avec $x,y\geq0$ alors $x=y=0$ ; sinon $x=y$ → **injective**.
</details>

---

## C6.5 — Surjectivité

**Méthode**
- **Prouver** : « Soit $y\in F$. » Résoudre $f(x)=y$ et vérifier que la solution est **dans $E$**.
- **Réfuter** : un $y\in F$ sans antécédent.

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex5.6 : $f(n,m)=2^n(1+2m)$ surjective sur $\mathbb N^*$</summary>

**Étape 1 — Poser.** Soit $k\in\mathbb N^*$. On cherche $(n,m)$ avec $2^n(1+2m)=k$.

**Étape 2 — Construire $n$.** On divise $k$ par 2 tant que le résultat est pair ; soit $n$ le nombre de divisions. On obtient $k=2^n\times q$ avec $q$ **impair**.

**Étape 3 — Construire $m$.** $q$ impair s'écrit $q=1+2m$ avec $m=\frac{q-1}2\in\mathbb N$.

**Étape 4 — Vérifier.** $f(n,m)=2^n q=k$ ✔. **Surjective.** (Ex. $k=12=2^2\times3$ → $(2,1)$.)
</details>

<details>
<summary>✏️ Correction étape par étape — réfuter : DS2-25, DS2-22, DS2-20</summary>

**DS2-25** $F(x)=e^{-x^2}$, arrivée $\mathbb R$
1. Valeurs prises : une exponentielle est toujours $>0$.
2. Choisir $y=-1\in\mathbb R$ : $e^{-x^2}=-1$ n'a pas de solution.
3. **Non surjective.**

**DS2-22** : $4$ n'est pas premier, et $f$ ne prend que des valeurs premières → 4 sans antécédent.

**DS2-20** $f(x)=1+\frac1x$ sur $\mathbb R^*$ : $1+\frac1x=1\iff\frac1x=0$, impossible → 1 sans antécédent → non surjective, donc non bijective.
</details>

---

## C6.6 — Bijectivité

**Méthode** : injective + surjective, ou bien : pour tout $y\in F$, l'équation $f(x)=y$ a **exactement une** solution dans $E$. Bien lire les ensembles de départ et d'arrivée : la même formule peut être bijective ou non.

<details>
<summary>✏️ Correction étape par étape — $x\mapsto x^2$ selon les ensembles</summary>

**De $\mathbb R_+$ dans $\mathbb R_+$.**
1. Injective : $x,y\geq0$ et $x^2=y^2$ ⇒ $x=y$ (C6.4) ✔.
2. Surjective : soit $y\geq0$, $x=\sqrt y\in\mathbb R_+$ convient ✔.
3. **Bijective**, réciproque $\sqrt{\cdot}$.

**De $\mathbb R$ dans $\mathbb R_+$.** Surjective (même $x=\sqrt y$), mais $f(-1)=f(1)$ → non injective.

**De $\mathbb R_+$ dans $\mathbb R$.** Injective, mais $-1$ sans antécédent → non surjective.

**Exemple concret** : capitales → pays : chaque pays a exactement une capitale → bijective ; villes → pays : plusieurs villes par pays → surjective seulement.
</details>

---

## C6.7 — Image directe $f(A)$

**Méthode** : décrire **toutes les valeurs prises** par $f$ quand $x$ parcourt $A$ : variations de $f$ sur $A$, valeurs aux bornes, en faisant attention aux bornes atteintes ou non.

<details>
<summary>✏️ Correction étape par étape — DS2-20 ex4.1 : $f(x)=\frac1{1+x^2}$, calculer $f([-1,2])$</summary>

**Étape 1 — Variations.** $1+x^2$ décroît sur $\mathbb R_-$ et croît sur $\mathbb R_+$ ; l'inverse renverse : $f$ croît sur $[-1,0]$ et décroît sur $[0,2]$.

**Étape 2 — Maximum.** En $x=0$ : $f(0)=1$.

**Étape 3 — Valeurs aux bornes.** $f(-1)=\frac12$, $f(2)=\frac15$. Le minimum est le plus petit : $\frac15$.

**Étape 4 — Conclure** ($f$ continue, toutes les valeurs entre min et max sont prises) : $f([-1,2])=[\frac15,1]$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex2b : $F(x)=e^{-x^2}$, calculer $F(\mathbb R_+)$</summary>

1. Pour $x\geq0$ : $x^2\in[0,+\infty[$, donc $-x^2\in\,]-\infty,0]$.
2. $\exp$ est croissante, $e^0=1$ et $e^t\to0$ (sans l'atteindre) quand $t\to-\infty$.
3. Donc $e^{-x^2}\in\,]0,1]$, et toutes ces valeurs sont prises.
4. $F(\mathbb R_+)=\,]0,1]$. (Et $F(\lbrace0\rbrace)=\lbrace1\rbrace$.)
</details>

<details>
<summary>✏️ Autres annales (même méthode)</summary>

| Sujet | Fonction, ensemble | Raisonnement | Résultat |
|---|---|---|---|
| DS2-24 | $e^{1/x^2}$ sur $\mathbb R^*$ | $\frac1{x^2}\in\,]0,+\infty[$ | $]1,+\infty[$ |
| DS2-24 | $2^n(1+2m)$ sur $\lbrace(0,m)\rbrace$ / $\lbrace(n,0)\rbrace$ | $1+2m$ / $2^n$ | impairs / puissances de 2 |
| DS2-21 | $3e^{2x-1}$ sur $[-2,4[$ | croissante | $[3e^{-5},3e^7[$ |
| DS2-22 | plus grand premier $\leq n$ sur $\lbrace3,8,12,20,58\rbrace$ | une image par élément | $\lbrace3,7,11,19,53\rbrace$ |
| TD6 | $x^2-4$ sur $[-2,2]$ | min en 0, max aux bords | $[-4,0]$ |
</details>

---

## C6.8 — Image réciproque $f^{-1}(B)$

**Méthode** : résoudre $f(x)\in B$ (souvent une inéquation), avec $x$ dans l'ensemble de départ. Ne nécessite pas que $f$ soit bijective. Interpréter en phrase si l'énoncé est concret.

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex2a : $F(x)=e^{-x^2}$, calculer $F^{-1}([\frac12,+\infty[)$</summary>

**Étape 1 — Écrire l'inéquation.** $x\in F^{-1}([\frac12,+\infty[)\iff e^{-x^2}\geq\frac12$.

**Étape 2 — Appliquer ln** (croissante) : $-x^2\geq\ln\frac12=-\ln2$.

**Étape 3 — Multiplier par $-1$** (le sens change) : $x^2\leq\ln2$.

**Étape 4 — Résoudre.** $|x|\leq\sqrt{\ln2}$.

**Résultat** : $[-\sqrt{\ln2},\sqrt{\ln2}]$. Et aussi : $F^{-1}(\lbrace0\rbrace)=\varnothing$ ($e^{\cdot}>0$) ; $F^{-1}(\lbrace1\rbrace)$ : $-x^2=0$ → $\lbrace0\rbrace$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex4.3 : $f(x)=e^{1/x^2}$, calculer $f^{-1}([0,2])$</summary>

1. $0\leq e^{1/x^2}$ est toujours vrai ; reste $e^{1/x^2}\leq2$.
2. ln : $\frac1{x^2}\leq\ln2$.
3. $x^2>0$ et $\ln2>0$ : on passe aux inverses (le sens change) : $x^2\geq\frac1{\ln2}$.
4. $|x|\geq\frac1{\sqrt{\ln2}}$ → $\left]-\infty,-\frac1{\sqrt{\ln2}}\right]\cup\left[\frac1{\sqrt{\ln2}},+\infty\right[$.
</details>

<details>
<summary>✏️ Autres annales (même méthode)</summary>

| Sujet | Inéquation à résoudre | Résultat |
|---|---|---|
| DS2-21 $3e^{2x-1}\in\,]3,9]$ | $1<e^{2x-1}\leq3\iff0<2x-1\leq\ln3$ | $]\frac12,\frac{1+\ln3}2]$ |
| DS2-20 $\frac1{1+x^2}\in[0,\frac12[$ | $1+x^2>2\iff x^2>1$ | $]-\infty,-1[\cup]1,+\infty[$ |
| DS2-22 $f^{-1}(\lbrace7,17,27\rbrace)$ | antécédents de 7, de 17, de 27 (non premier) | $\lbrace7,8,9,10,17,18\rbrace$ |
| DS2-24 $f^{-1}(\lbrace12\rbrace)$ | $12=2^2\times3$ | $\lbrace(2,1)\rbrace$ |
| TD6 $x^2-4\in[-1,3]$ | $3\leq x^2\leq7$ | $[-\sqrt7,-\sqrt3]\cup[\sqrt3,\sqrt7]$ |
| Cours $C(n)=n(15-\frac n{100})\leq0$ | $n=0$ ou $15-\frac n{100}\leq0$ | $\lbrace0\rbrace\cup\lbrace n\geq1500\rbrace$ |
</details>

---

## C6.9 — Rendre une fonction injective / surjective / bijective

**Méthode**
- **Surjective** : remplacer l'arrivée par l'image $f(E)$ (variations + limites aux bornes).
- **Injective** : restreindre le départ à un intervalle où $f$ est **strictement monotone** (strictement monotone ⇒ injective).
- **Bijective** : les deux ; justifier « surjective par définition de $f(E)$, injective car strictement monotone ».

<details>
<summary>✏️ Correction étape par étape — TD6 ex1 : $g_3(r)=r^2+2r-3$ sur $\mathbb R$</summary>

**Étape 1 — Forme canonique.** $g_3(r)=(r+1)^2-4$ : parabole de sommet $(-1,-4)$.

**Étape 2 — Injective ?** Non : symétrique autour de $-1$, par exemple $g_3(0)=g_3(-2)=-3$.

**Étape 3 — Surjective ?** Non : $g_3\geq-4$, donc $-5$ n'a pas d'antécédent.

**Étape 4 — Rendre injective.** Restreindre le départ à un côté du sommet, où $g_3$ est strictement monotone : $[-1,+\infty[$ (ou $]-\infty,-1]$).

**Étape 5 — Rendre surjective.** Remplacer l'arrivée par l'image : $g_3([-1,+\infty[)=[-4,+\infty[$.

**Étape 6 — Conclure.** $\tilde g_3:[-1,+\infty[\to[-4,+\infty[$ est bijective.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex2f (bonus) et TD6 $g_4$</summary>

**DS2-25** $F(x)=e^{-x^2}$
1. Sur $\mathbb R_+$, $F$ est strictement décroissante (C8.9), donc injective.
2. Arrivée remplacée par $F(\mathbb R_+)=\,]0,1]$ (C6.7) : surjective par définition de l'image.
3. $\hat F:\mathbb R_+\to\,]0,1]$ est bijective.

**TD6** $g_4(v)=\frac{3v+7}{2v-3}$ sur $]\frac32,+\infty[$
1. Réécrire : $g_4(v)=\frac32+\frac{23}{4v-6}$.
2. $4v-6$ croît et est $>0$, donc $\frac{23}{4v-6}$ décroît : $g_4$ strictement décroissante → injective.
3. Limites : $+\infty$ en $\frac32^+$, $\frac32$ en $+\infty$ (non atteint) → image $]\frac32,+\infty[$.
</details>

---

## C6.10 — Bijection réciproque

**Méthode** : « Soit $y\in F$. » Résoudre $f(x)=y$ **en isolant $x$**, en gardant la solution qui est dans $E$ (signe !). Écrire $f^{-1}:F\to E$, $y\mapsto\dots$ avec **les ensembles**.

<details>
<summary>✏️ Correction étape par étape — DS2-21 ex7 : réciproque de $f(x)=\frac{x^2+1}{x^2+2}$, $\mathbb R_+\to[\frac12,1[$</summary>

**Étape 1 — Poser.** Soit $y\in[\frac12,1[$. On résout $f(x)=y$ avec $x\geq0$.

**Étape 2 — Chasser le dénominateur.** $x^2+1=y(x^2+2)=yx^2+2y$.

**Étape 3 — Regrouper les $x^2$.** $x^2-yx^2=2y-1\iff x^2(1-y)=2y-1$.

**Étape 4 — Isoler.** $y\neq1$, donc $x^2=\frac{2y-1}{1-y}$, quantité $\geq0$ car $2y-1\geq0$ et $1-y>0$.

**Étape 5 — Choisir le signe.** $x\geq0$ ⇒ $x=\sqrt{\frac{2y-1}{1-y}}$.

**Étape 6 — Écrire avec les ensembles.** $f^{-1}:[\frac12,1[\to\mathbb R_+$, $y\mapsto\sqrt{\frac{2y-1}{1-y}}$.

**Contrôle** : $y=\frac12$ → $x=0$, et $f(0)=\frac12$ ✔.
</details>

<details>
<summary>✏️ Correction étape par étape — DS2-25 ex2f : réciproque de $\hat F(x)=e^{-x^2}$, $\mathbb R_+\to\,]0,1]$</summary>

1. Soit $y\in\,]0,1]$ ; résoudre $e^{-x^2}=y$.
2. ln : $-x^2=\ln y$, soit $x^2=-\ln y=\ln\frac1y$ ($\geq0$ car $y\leq1$).
3. $x\geq0$ ⇒ $x=\sqrt{\ln\frac1y}$.
4. $\hat F^{-1}:\,]0,1]\to\mathbb R_+$, $y\mapsto\sqrt{\ln\frac1y}$.
</details>

---

## C6.11 — Composée

**Méthode** : $g\circ f(x)=g(f(x))$ : remplacer la variable de $g$ par l'expression de $f$. Vérifier que $f(E)\subset D_g$.

<details>
<summary>✏️ Correction étape par étape — cours ex12 : $j\circ h$ avec $h(x)=x^2$, $j(x)=\sqrt x$</summary>

**Étape 1 — Vérifier que la composée existe.** $h:\mathbb R\to\mathbb R_+$ et $j$ est définie sur $\mathbb R_+$ : les images de $h$ sont bien dans le domaine de $j$ ✔.

**Étape 2 — Ordre.** $j\circ h$ = « d'abord $h$, puis $j$ ».

**Étape 3 — Remplacer.** $(j\circ h)(x)=j(h(x))=j(x^2)=\sqrt{x^2}$.

**Étape 4 — Simplifier.** $\sqrt{x^2}=|x|$ (et non $x$ : $\sqrt{(-3)^2}=3$).

**Et dans l'autre sens** : $(h\circ j)(x)=(\sqrt x)^2=x$, mais seulement pour $x\geq0$ : $f\circ g\neq g\circ f$.
</details>

---

## C6.12 — Inéquations avec racine ou valeur absolue

**Méthode**
- $\sqrt A\leq B$ : condition $A\geq0$ ; si $B<0$ impossible ; si $B\geq0$, élever au carré : $A\leq B^2$.
- $\lvert A\rvert\leq c$ ⇔ $-c\leq A\leq c$ ; $\lvert A\rvert>B$ : distinguer $A\geq0$ et $A<0$.

<details>
<summary>✏️ Correction étape par étape — TD6 ex3 : $\sqrt{x+2}\leq2x+1$</summary>

**Étape 1 — Domaine.** $x+2\geq0\iff x\geq-2$.

**Étape 2 — Cas où le membre de droite est négatif** ($x<-\frac12$). Une racine est $\geq0$, elle ne peut pas être $\leq$ un nombre négatif : aucune solution.

**Étape 3 — Cas $x\geq-\frac12$.** Les deux membres sont $\geq0$ : on peut élever au carré sans changer le sens : $x+2\leq(2x+1)^2=4x^2+4x+1$.

**Étape 4 — Résoudre.** $4x^2+3x-1\geq0$ ; racines $\frac{-3\pm5}{8}$ : $\frac14$ et $-1$ ; positif à l'extérieur : $x\leq-1$ ou $x\geq\frac14$.

**Étape 5 — Intersecter avec $x\geq-\frac12$.** $x\geq\frac14$.

**Résultat** : $S=[\frac14,+\infty[$. Contrôle : $x=\frac14$ → $\sqrt{2{,}25}=1{,}5=2\times\frac14+1$ ✔.
</details>

<details>
<summary>✏️ Correction étape par étape — TD6 ex5 : $\lvert3x+2\rvert>2-x$</summary>

1. Point de bascule : $3x+2=0\iff x=-\frac23$.
2. Cas $x<-\frac23$ : $|3x+2|=-3x-2$ ; $-3x-2>2-x\iff-2x>4\iff x<-2$ ; compatible → $]-\infty,-2[$.
3. Cas $x\geq-\frac23$ : $3x+2>2-x\iff x>0$ ; compatible → $]0,+\infty[$.
4. $S=\,]-\infty,-2[\,\cup\,]0,+\infty[$.
</details>

