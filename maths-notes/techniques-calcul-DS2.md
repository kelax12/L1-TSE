# Maths 1 · DS2 : les techniques de calcul qui reviennent

> Analyse **transversale** des 5 DS2 (2020, 2021, 2022, 2024, 2025). On ne compte pas ici les *exercices*, mais les **gestes de calcul** utilisés pour les résoudre. Un même exercice mobilise souvent 2 ou 3 techniques.
> Détail exercice par exercice : [annales-DS2.md](annales-DS2.md).

## Classement

| # | Technique | Sujets | Où elle sert |
|:-:|---|:-:|---|
| 1 | **Signe d'une différence** : même dénominateur, puis factoriser le numérateur | **5/5** | récurrence, monotonie de suite, somme télescopique |
| 2 | **Chaîne d'inégalités avec des fonctions monotones** (carré, inverse, exp, ln, √) | **5/5** | image directe, borne par récurrence, monotonie par la définition |
| 3 | **Valeur absolue ↔ encadrement** ($x^2\le a \iff \lvert x\rvert\le\sqrt a$) | **5/5** | domaines, images réciproques |
| 4 | **Point fixe** : passer à la limite, résoudre $\ell=f(\ell)$, éliminer la racine parasite | **5/5** | limite de suite récurrente |
| 5 | **Factoriser un polynôme** (racine évidente, $(x-a)$, trinôme / discriminant) | **5/5** | limite $\frac00$, hérédité, sup/inf, point fixe |
| 6 | **Passer à exp / ln** dans une (in)équation | **4/5** | images réciproques, domaines, réciproque |
| 7 | **Empiler les conditions d'un domaine** (dénominateur ≠ 0, ln > 0, √ ≥ 0) | **4/5** | domaines de définition |
| 8 | **Élever au carré / travailler sur $u_n^2$** pour se débarrasser d'une racine | **3/5** | suites avec √, réciproque |
| 9 | **Identité $a^2-b^2=(a-b)(a+b)$** (dont quantité conjuguée) | **3/5** | absurde dans $\mathbb Z$, limites, simplification |
| 10 | **Limites hors $\frac00$** : terme dominant, croissances comparées, majoration | **3/5** | limites en $\pm\infty$ |
| 11 | **Isoler $x$ dans $y=f(x)$** (produit en croix, puis choisir le bon signe) | **2/5** (+ bonus) | bijection réciproque |

> [!TIP]
> Les 5 premières techniques sont présentes **chaque année**. Avec elles, tu couvres environ 70 % des points d'un DS2. Ce sont des **gestes de calcul**, pas des cours : il faut les avoir faits à la main plusieurs fois.

---

## 1. Signe d'une différence : même dénominateur → factoriser (5/5)

**Gabarit.** Pour montrer $A\ge B$, on calcule $A-B$, on met au même dénominateur et on factorise le numérateur jusqu'à lire son signe.

| Sujet | Calcul |
|---|---|
| 2020 | $u_{n+1}-u_n=\frac12\left(\frac1{u_n}-u_n\right)=\frac{1-u_n^2}{2u_n}<0$ |
| 2021 | $u_{n+1}^2-4=\frac{u_n^2-4}{4}$ ; $\;u_{n+1}^2-u_n^2=\frac{3(4-u_n^2)}4$ |
| 2022 | $u_{n+1}-1=\frac{u_n(u_n-1)}{u_n+1}$ ; $\;u_{n+1}-u_n=\frac{1-u_n}{u_n+1}$ ; hérédité : $\frac{2n^2+7n+3}{(2n+1)(2n+3)}$ |
| 2024 | $u_{n+1}^2-3=\frac{(2u_n+3)^2-3(u_n+2)^2}{(u_n+2)^2}=\frac{u_n^2-3}{(u_n+2)^2}$ ; $\;u_{n+1}-u_n=\frac{3-u_n^2}{u_n+2}$ |
| 2025 | $u_{n+1}-u_n=\sqrt{u_n}-\frac{u_n}3$ |

> [!IMPORTANT]
> **Le pattern n°1 du DS2.** Le numérateur fait presque toujours réapparaître l'hypothèse de récurrence ($u_n^2-3$, $u_n-1$, $4-u_n^2$…). Si ce n'est pas le cas après calcul, c'est probablement une erreur de développement.

**Pièges.** Le signe du dénominateur doit être justifié (en général $u_n>0$, prouvé avant). Ne jamais « simplifier » une inégalité en multipliant par une quantité dont on ignore le signe.

---

## 2. Chaîne d'inégalités avec des fonctions monotones (5/5)

**Gabarit.** On part de $x\in I$ et on applique les fonctions **une par une**, en notant à chaque étape si le sens est conservé ou inversé.

| Fonction | Effet sur $a<b$ |
|---|---|
| $t\mapsto t^2$ sur $\mathbb R_+$, $e^t$, $\ln t$, $\sqrt t$, $t\mapsto kt$ ($k>0$) | **conserve** |
| $t\mapsto -t$, $t\mapsto\frac1t$ (même signe), $t\mapsto kt$ ($k<0$) | **inverse** |
| $t\mapsto t^2$ sur $\mathbb R$ | ⚠ pas monotone : passer par $\lvert t\rvert$ |

| Sujet | Chaîne |
|---|---|
| 2025 | $x\ge0 \Rightarrow x^2\ge0 \Rightarrow -x^2\le0 \Rightarrow 0<e^{-x^2}\le1$, donc $F(\mathbb R_+)=]0,1]$ ; même chaîne avec $x<y$ pour la décroissance |
| 2025 | récurrence : $0\le u_n\le9 \Rightarrow \frac{2u_n}3\le6$ et $\sqrt{u_n}\le3 \Rightarrow u_{n+1}\le9$ |
| 2024 | $x\neq0 \Rightarrow x^2>0 \Rightarrow \frac1{x^2}>0 \Rightarrow e^{1/x^2}>1$ |
| 2021 | $-2\le x<4 \Rightarrow -5\le2x-1<7 \Rightarrow 3e^{-5}\le3e^{2x-1}<3e^7$ |
| 2020 | $x\in[-1,2] \Rightarrow x^2\in[0,4] \Rightarrow 1+x^2\in[1,5] \Rightarrow \frac1{1+x^2}\in[\frac15,1]$ ; $\;0<x<y\Rightarrow\frac1x>\frac1y$ |

**Piège classique (2020).** $x\in[-1,2]$ donne $x^2\in[0,4]$ et non $[1,4]$ : le carré n'est pas monotone sur un intervalle qui contient 0.

---

## 3. Valeur absolue ↔ encadrement (5/5)

**Les deux équivalences à connaître par cœur :**
$$\lvert X\rvert\le a \iff -a\le X\le a \qquad\qquad \lvert X\rvert\ge a \iff X\le-a \text{ ou } X\ge a$$
$$x^2\le a \iff \lvert x\rvert\le\sqrt a \qquad\qquad x^2\ge a \iff \lvert x\rvert\ge\sqrt a$$

| Sujet | Utilisation |
|---|---|
| 2025 | $1-\lvert x-2\rvert\ge0 \iff -1\le x-2\le1 \iff x\in[1,3]$ ; $\;x^2\le\ln2\iff\lvert x\rvert\le\sqrt{\ln2}$ |
| 2024 | $\frac1{x^2}\le\ln2 \iff x^2\ge\frac1{\ln2}\iff\lvert x\rvert\ge\frac1{\sqrt{\ln2}}$ |
| 2021 | $2-\lvert\ln(1+x)\rvert>0\iff-2<\ln(1+x)<2$ |
| 2020 | $\lvert x^2-1\rvert\le3 \iff -2\le x^2\le4 \iff x\in[-2,2]$ ; $\;x^2>1\iff\lvert x\rvert>1$ |

**Piège.** Écrire $x^2\le a\Rightarrow x\le\sqrt a$ fait perdre la moitié négative de la solution. C'est l'erreur la plus fréquente sur les images réciproques.

---

## 4. Point fixe d'une suite récurrente (5/5)

> Cours complet : [cours-point-fixe.md](cours-point-fixe.md).

**Gabarit en 3 temps :**
1. Justifier la **convergence** d'abord (monotone + bornée), sinon le passage à la limite n'est pas permis.
2. Passer à la limite dans $u_{n+1}=f(u_n)$ : $\ell=f(\ell)$.
3. Résoudre, puis **éliminer** les solutions incompatibles avec la borne (ou avec $\ell\ge u_0$ si la suite croît, $\ell\le u_0$ si elle décroît).

| Sujet | Équation | Tri |
|---|---|---|
| 2020 | $\ell=\frac12(\ell+\frac1\ell)\iff\ell^2=1$ | $\ell\ge1\Rightarrow\ell=1$ |
| 2021 | $\ell^2=3+\frac{\ell^2}4\iff\ell^2=4$ | $\ell\ge2\Rightarrow\ell=2$ |
| 2022 | $\ell(\ell+1)=\ell^2+1\iff\ell=1$ | — |
| 2024 | $\ell(\ell+2)=2\ell+3\iff\ell^2=3$ | $\ell>0\Rightarrow\ell=\sqrt3$ |
| 2025 | $\frac\ell3=\sqrt\ell\Rightarrow\ell^2-9\ell=0$ | $\ell\ge3\Rightarrow\ell=9$ |

> [!TIP]
> Le résultat sert aussi pour la question bonus sup/inf de $\lbrace u_n\rbrace$ : pour une suite croissante, $\inf=\min=u_0$ et $\sup=\ell$ ; pour une suite décroissante, c'est l'inverse.

---

## 5. Factoriser un polynôme (5/5)

**Gabarit pour une limite $\frac00$ en $a$ (sans L'Hôpital) :**
1. Vérifier $P(a)=Q(a)=0$ : alors $(x-a)$ divise les deux.
2. Diviser (Horner ou identification) : $P=(x-a)U$, $Q=(x-a)V$.
3. Si $U(a)=V(a)=0$, **recommencer** (2024 : facteur $(x-2)^2$).
4. Simplifier puis remplacer $x$ par $a$.

| Sujet | Factorisation |
|---|---|
| 2020 | $x^4-4x^2+3x+6=(x+2)(x^3-2x^2+3)$, $\;-2x^3-3x^2+x-2=(x+2)(-2x^2+x-1)$ → $\frac{13}{11}$ |
| 2021 | même méthode en $-2$ → $\frac{23}{15}$ |
| 2024 | $\frac{(x-2)^2(x+4)}{(x-2)^2(x-1)}\to6$ |
| 2022 | $2n^2+7n+3=(2n+1)(n+3)$ (hérédité) |
| 2020 | $x^2-3x-1\le0$ : discriminant $13$, racines $\frac{3\pm\sqrt{13}}2$ (sup de $E$) |
| 2025 | $\ell^2-9\ell=\ell(\ell-9)$ |

**Astuce.** Pour factoriser un trinôme dont on connaît déjà une racine $r$, l'autre racine est $\frac{c}{a\,r}$ (produit des racines). C'est plus rapide que le discriminant.

---

## 6. Passer à exp / ln dans une (in)équation (4/5)

$$e^{A}\ge b \iff A\ge\ln b\ (b>0) \qquad \ln A< b\iff 0<A<e^b \qquad e^A=0 \text{ impossible}$$

| Sujet | Utilisation |
|---|---|
| 2025 | $e^{-x^2}=0$ : aucune solution → $\varnothing$ ; $\;e^{-x^2}\ge\frac12\iff x^2\le\ln2$ ; $\;\ln(x^2-3)\neq0\iff x^2\neq4$ |
| 2024 | $e^{1/x^2}\le2\iff\frac1{x^2}\le\ln2$ |
| 2021 | $3<3e^{2x-1}\le9\iff0<2x-1\le\ln3$ ; $\;-2<\ln(1+x)<2\iff e^{-2}<1+x<e^2$ ; $\;\sqrt{e^x-1}<2\iff e^x<5$ |

**Pièges.** $\ln\frac12=-\ln2$ (le signe change). Si $b\le0$, l'inéquation $e^A\ge b$ est toujours vraie et $e^A\le b$ n'a jamais de solution.

---

## 7. Empiler les conditions d'un domaine (4/5)

**Méthode.** On écrit **toutes** les conditions de l'intérieur vers l'extérieur, puis on les intersecte.

| Forme | Condition |
|---|---|
| $\frac1{A}$ | $A\neq0$ |
| $\ln A$ | $A>0$ |
| $\sqrt A$ | $A\ge0$ |
| $\frac1{\sqrt A}$ | $A>0$ |
| $\frac1{\ln A}$ | $A>0$ **et** $A\neq1$ |

- **2025** $\frac1{\ln(x^2-3)}$ : $x^2>3$ et $x^2\neq4$, ce qui donne un domaine en 4 morceaux.
- **2021** $\ln(2-\sqrt{e^x-1})$ : $e^x\ge1$ **et** $\sqrt{e^x-1}<2$, donc $[0,\ln5[$.
- **2021** $\frac1{\sqrt{2-\lvert\ln(1+x)\rvert}}$ : $1+x>0$ **et** $\lvert\ln(1+x)\rvert<2$.
- **2024** $e^{1/x^2}$ : $x\neq0$.

**Piège n°1.** Oublier une condition interne, par exemple le $1+x>0$ sous le ln, ou le $\neq1$ de $\frac1{\ln}$.

---

## 8. Élever au carré / travailler sur $u_n^2$ (3/5)

Dès qu'une racine apparaît, on passe au carré, en vérifiant que **les deux membres sont positifs** (sinon l'équivalence est fausse).

- **2025** : $\sqrt{u_n}\ge\frac{u_n}3 \iff u_n\ge\frac{u_n^2}9\iff9u_n\ge u_n^2$ (les deux membres sont positifs).
- **2021** : $u_{n+1}=\sqrt{3+\frac{u_n^2}4}$. On étudie $u_n^2$ (indication du sujet), puis on revient à $u_n$ car $u_n\ge0$.
- **2024** : la propriété à prouver est déjà sur $u_n^2\ge3$.

---

## 9. Identité $a^2-b^2=(a-b)(a+b)$ (3/5)

- **2025** (absurde) : $4a^2-b^2=(2a-b)(2a+b)=1$ avec deux entiers, donc ils valent tous les deux $1$ ou tous les deux $-1$.
- **2022** (quantité conjuguée) : $\sqrt{e^n+n}-\sqrt{e^n-n}=\frac{2n}{\sqrt{e^n+n}+\sqrt{e^n-n}}\to0$.
- **2024** : le numérateur $(2u+3)^2-3(u+2)^2$ se simplifie en $u^2-3$.

---

## 10. Limites hors $\frac00$ (3/5)

| Situation | Technique | Sujet |
|---|---|---|
| Fraction rationnelle en $\pm\infty$ | quotient des **termes dominants** : $\frac{x^6}{-3x^3}=-\frac{x^3}3\to+\infty$ en $-\infty$ | 2021 |
| $n^a$ contre $(\ln n)^b$ | **croissances comparées** : la puissance l'emporte | 2022 |
| Différence de deux racines | **quantité conjuguée** | 2022 |
| Forme $\infty-\infty$ avec ln | **majorer** : $1+x^2\le2x^2$, donc $\ln(1+x^2)-2x\le\ln2+2(\ln x-x)\to-\infty$ | 2021 |
| Composée | limite de l'intérieur puis de l'extérieur : $\frac1{x^2}\to+\infty$, puis $e^{\cdot}\to+\infty$ | 2024 |

---

## 11. Isoler $x$ dans $y=f(x)$ (2/5 + bonus)

**Gabarit.** On résout en $x$, puis on **choisit la branche** compatible avec l'ensemble de départ (en général $x\ge0$, d'où la racine positive).

- **2021** : $y=\frac{x^2+1}{x^2+2}\iff y(x^2+2)=x^2+1\iff x^2=\frac{2y-1}{1-y}$, donc $f^{-1}(y)=\sqrt{\frac{2y-1}{1-y}}$.
- **2025** (bonus) : $y=e^{-x^2}\iff x^2=\ln\frac1y$, donc $\hat F^{-1}(y)=\sqrt{\ln\frac1y}$.

Les **images réciproques de singletons** ($F^{-1}(\lbrace1\rbrace)$, $f^{-1}(\lbrace12\rbrace)$) se traitent avec le même geste.

---

## Hors calcul mais systématique

- **Non injective** : exhiber $f(a)=f(b)$ avec $a\neq b$. La parité ($f(1)=f(-1)$) suffit dans 3 sujets sur 5.
- **Non surjective** : exhiber une valeur hors de l'image, par exemple un négatif pour une exponentielle.
- **Absurde dans $\mathbb Z$ / $\mathbb Q$** : $\sqrt2\notin\mathbb Q$, parité, produit d'entiers égal à 1.

## Plan d'entraînement

1. Refaire **à la main** les 5 calculs du §1 et les 5 points fixes du §4 (environ 30 min).
2. Écrire les chaînes du §2 pour $e^{-x^2}$, $e^{1/x^2}$, $\frac1{1+x^2}$, $3e^{2x-1}$ sur un intervalle contenant 0.
3. Une limite $\frac00$ avec facteur double, comme en 2024.
4. Les 4 domaines du §7, en écrivant chaque condition avant d'intersecter.
