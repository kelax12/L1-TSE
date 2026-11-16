# Maths 1 · Entraînement DS2 — 25 exercices corrigés

> 5 exercices sur chacun des 5 thèmes qui reviennent le plus dans les DS2 (voir [annales-DS2.md](annales-DS2.md)). Cherche d'abord, puis ouvre la correction. Les difficultés vont croissant dans chaque partie.

| Partie | Thème | Fréquence en DS2 | Compétences |
|---|---|:-:|---|
| A | Suite récurrente : borne, monotonie, limite | 5/5 | C4.5 – C4.7 |
| B | Images directes et réciproques | 5/5 | C6.7, C6.8 |
| C | Injectivité / surjectivité | 4/5 | C6.4 – C6.6, C6.10 |
| D | Domaines de définition | 4/5 | C6.1, C6.12 |
| E | Limite $\frac00$ sans L'Hôpital | 3/5 | C7.3, C7.4, C8.3 |

---

## A · Suites récurrentes

> [!TIP]
> **Le plan qui marche à chaque fois**
> 1. **Borne** par récurrence : calculer $u_{n+1}-c$ et factoriser, le facteur $(u_n-c)$ apparaît presque toujours.
> 2. **Monotonie** : signe de $u_{n+1}-u_n$, en utilisant la borne de la question 1.
> 3. **Convergence** : croissante + majorée, ou décroissante + minorée ⇒ converge (théorème de la limite monotone).
> 4. **Limite** : passer à la limite dans $u_{n+1}=f(u_n)$ ⇒ $\ell=f(\ell)$, puis choisir la bonne solution grâce à la borne ou à $u_0$.

### A1. $u_0=1$, $u_{n+1}=\sqrt{2+u_n}$

1. Montrer que $\forall n$, $0\leq u_n\leq 2$. 2. Montrer que $(u_n)$ est croissante. 3. En déduire qu'elle converge et calculer sa limite.

<details>
<summary>✅ Correction</summary>

**1. Récurrence.** $P(n)$ : « $u_n$ est bien défini et $0\leq u_n\leq2$ ».
- *Initialisation* : $u_0=1\in[0,2]$.
- *Hérédité* : si $0\leq u_n\leq2$, alors $2\leq 2+u_n\leq4$. La racine est croissante, donc $\sqrt2\leq u_{n+1}\leq2$. En particulier $u_{n+1}$ est bien défini (on prend la racine d'un nombre positif) et $0\leq u_{n+1}\leq2$.
- *Conclusion* : $P(n)$ est vraie pour tout $n$.

**2. Monotonie.** On multiplie par la quantité conjuguée :
$$u_{n+1}-u_n=\sqrt{2+u_n}-u_n=\frac{2+u_n-u_n^2}{\sqrt{2+u_n}+u_n}=\frac{(2-u_n)(1+u_n)}{\sqrt{2+u_n}+u_n}.$$
Comme $0\leq u_n\leq2$ : $2-u_n\geq0$, $1+u_n>0$ et le dénominateur est $>0$. Donc $u_{n+1}-u_n\geq0$ : la suite est **croissante**.

💡 Pour factoriser $-u^2+u+2$ : ses racines sont $2$ et $-1$, d'où $-(u-2)(u+1)=(2-u)(1+u)$.

**3. Limite.** Croissante et majorée par 2 ⇒ converge vers un $\ell$. La fonction $\sqrt{2+x}$ est continue, donc $\ell=\sqrt{2+\ell}$, d'où $\ell^2=\ell+2$, $(\ell-2)(\ell+1)=0$. Comme $u_n\geq u_0=1$, on a $\ell\geq1$, donc $\boxed{\ell=2}$.
</details>

### A2. $u_0=3$, $u_{n+1}=\dfrac{u_n^2+4}{2u_n}$

1. Montrer que $\forall n$, $u_n\geq2$. 2. Montrer que $(u_n)$ est décroissante. 3. Converge-t-elle ? Vers quoi ?

<details>
<summary>✅ Correction</summary>

**1.** Récurrence sur « $u_n$ bien défini et $u_n\geq2$ ». Initialisation : $u_0=3\geq2$. Hérédité : si $u_n\geq2$, alors $u_n\neq0$ donc $u_{n+1}$ est bien défini, et
$$u_{n+1}-2=\frac{u_n^2+4-4u_n}{2u_n}=\frac{(u_n-2)^2}{2u_n}\geq0$$
(un carré au-dessus, $2u_n>0$ au-dessous). Donc $u_{n+1}\geq2$.

**2.** $u_{n+1}-u_n=\dfrac{u_n^2+4-2u_n^2}{2u_n}=\dfrac{4-u_n^2}{2u_n}$. Or $u_n\geq2$ ⇒ $u_n^2\geq4$ ⇒ numérateur $\leq0$, dénominateur $>0$. Donc la suite est **décroissante**.

**3.** Décroissante et minorée par 2 ⇒ converge vers $\ell\geq2$. En passant à la limite : $\ell=\frac{\ell^2+4}{2\ell}$ ⇔ $2\ell^2=\ell^2+4$ ⇔ $\ell^2=4$. Comme $\ell\geq2$ : $\boxed{\ell=2}$.

💡 Cette suite est la méthode de Newton pour approcher $\sqrt4$.
</details>

### A3. $u_0=0$, $u_{n+1}=\dfrac{u_n^2+2}{3}$

1. Montrer que $\forall n$, $0\leq u_n\leq1$. 2. Étudier la monotonie. 3. Montrer que la suite converge et trouver sa limite.

<details>
<summary>✅ Correction</summary>

**1.** Initialisation : $u_0=0\in[0,1]$. Hérédité : si $0\leq u_n\leq1$, alors $0\leq u_n^2\leq1$, donc $2\leq u_n^2+2\leq3$, donc $\frac23\leq u_{n+1}\leq1$. En particulier $0\leq u_{n+1}\leq1$.

**2.** $u_{n+1}-u_n=\dfrac{u_n^2-3u_n+2}{3}=\dfrac{(u_n-1)(u_n-2)}{3}$. Pour $u_n\leq1$ : $u_n-1\leq0$ et $u_n-2<0$, donc le produit est $\geq0$. La suite est **croissante**.

**3.** Croissante et majorée par 1 ⇒ converge. Point fixe : $3\ell=\ell^2+2$ ⇔ $(\ell-1)(\ell-2)=0$ ⇔ $\ell\in\lbrace1,2\rbrace$. Comme $u_n\leq1$ pour tout $n$, on a $\ell\leq1$ (passage à la limite dans une inégalité large). Donc $\boxed{\ell=1}$.

⚠️ **Piège classique** : l'équation du point fixe a **deux** solutions. C'est la borne de la question 1 qui permet de choisir.
</details>

### A4. $u_0=2$, $u_{n+1}=\dfrac{u_n}{1+u_n}$

1. Montrer que $\forall n$, $u_n>0$. 2. Montrer que $(u_n)$ est décroissante. 3. Trouver la limite. 4. Donner $\sup$ et $\inf$ de $A=\lbrace u_n : n\in\mathbb N\rbrace$.

<details>
<summary>✅ Correction</summary>

**1.** $u_0=2>0$ ; si $u_n>0$, alors $1+u_n>0$ et $u_{n+1}$ est un quotient de deux nombres $>0$, donc $u_{n+1}>0$.

**2.** $u_{n+1}-u_n=\dfrac{u_n-u_n(1+u_n)}{1+u_n}=\dfrac{-u_n^2}{1+u_n}<0$. La suite est **strictement décroissante**.

**3.** Décroissante, minorée par 0 ⇒ converge vers $\ell\geq0$. Point fixe : $\ell(1+\ell)=\ell$ ⇔ $\ell^2=0$ ⇔ $\boxed{\ell=0}$.

**4.** La suite décroît, donc son plus grand terme est le premier : $\max A=\sup A=u_0=2$. Tous les termes sont $>0$, donc 0 minore $A$, et $u_n\to0$ : on trouve des éléments de $A$ aussi proches de 0 qu'on veut. Donc $\inf A=0$, **non atteint** (car $u_n>0$), ce qui veut dire que $A$ n'a pas de minimum.

💡 Pour aller plus loin : $\frac1{u_{n+1}}=\frac1{u_n}+1$, donc $u_n=\frac{2}{1+2n}$.
</details>

### A5. $u_0=5$, $u_{n+1}=\dfrac{3u_n+4}{u_n+3}$ (type DS2-2024)

1. Montrer que $\forall n$, $u_n\geq2$. 2. Montrer que $(u_n)$ est décroissante. 3. Montrer qu'elle converge et calculer sa limite. 4. Donner $\sup$ et $\inf$ de $\lbrace u_n\rbrace$.

<details>
<summary>✅ Correction</summary>

**1.** $u_0=5\geq2$. Si $u_n\geq2$, alors $u_n+3>0$ (le terme est bien défini) et
$$u_{n+1}-2=\frac{3u_n+4-2u_n-6}{u_n+3}=\frac{u_n-2}{u_n+3}\geq0.$$

**2.** $u_{n+1}-u_n=\dfrac{3u_n+4-u_n^2-3u_n}{u_n+3}=\dfrac{4-u_n^2}{u_n+3}\leq0$ car $u_n^2\geq4$. La suite est **décroissante**.

**3.** Décroissante et minorée par 2 ⇒ converge vers $\ell\geq2$. Point fixe : $\ell(\ell+3)=3\ell+4$ ⇔ $\ell^2=4$, et $\ell\geq2$, donc $\boxed{\ell=2}$.

**4.** $\sup=\max=u_0=5$ (la suite décroît) ; $\inf=\lim u_n=2$.
</details>

---

## B · Images directes et réciproques

> [!TIP]
> - **Image directe $f(A)$** = toutes les valeurs prises par $f$ quand $x$ parcourt $A$. Trace l'allure de $f$ sur $A$ (sens de variation, valeurs aux bornes, extremum) et vérifie si chaque borne est **atteinte**.
> - **Image réciproque $f^{-1}(B)$** = $\lbrace x\in E : f(x)\in B\rbrace$. On **résout l'inéquation** $f(x)\in B$. Elle existe même si $f$ n'est pas bijective, et peut être vide.
> - Avec $\exp$ et $\ln$ : ces fonctions sont **strictement croissantes**, on peut les appliquer de chaque côté d'une inégalité sans changer son sens.

### B1. $f:\mathbb R\to\mathbb R$, $f(x)=x^2-2x$

Déterminer $f([0,3])$, $f(]1,+\infty[)$ et $f^{-1}([0,3])$.

<details>
<summary>✅ Correction</summary>

Forme canonique : $f(x)=(x-1)^2-1$. Le graphe est une parabole de sommet $(1,-1)$ : $f$ décroît sur $]-\infty,1]$ et croît sur $[1,+\infty[$.

- **$f([0,3])$** : le minimum est atteint en $1\in[0,3]$ et vaut $-1$. On a $f(0)=0$ et $f(3)=3$, et le plus grand des deux est 3. Donc $f([0,3])=[-1,3]$.
- **$f(]1,+\infty[)$** : $f$ est strictement croissante sur cet intervalle, $f(x)\to-1$ quand $x\to1^+$ sans jamais valoir $-1$, et $f(x)\to+\infty$. Donc $]-1,+\infty[$.
- **$f^{-1}([0,3])$** : on cherche $0\leq x^2-2x\leq3$.
  - $x^2-2x\geq0$ ⇔ $x(x-2)\geq0$ ⇔ $x\leq0$ ou $x\geq2$ ;
  - $x^2-2x-3\leq0$ ⇔ $(x-3)(x+1)\leq0$ ⇔ $-1\leq x\leq3$.
  - Les deux conditions ensemble : $\boxed{[-1,0]\cup[2,3]}$.
</details>

### B2. $f:\mathbb R\to\mathbb R$, $f(x)=e^{2-x}$

Déterminer $f([0,2])$, $f(\mathbb R)$, $f^{-1}(]1,e])$ et $f^{-1}(]-\infty,0])$.

<details>
<summary>✅ Correction</summary>

$x\mapsto2-x$ est décroissante et $\exp$ est croissante, donc $f$ est **strictement décroissante**.

- **$f([0,2])$** : comme $f$ est décroissante, l'image va de $f(2)=e^0=1$ à $f(0)=e^2$, soit $[1,e^2]$.
- **$f(\mathbb R)$** : $2-x$ parcourt tout $\mathbb R$, donc $e^{2-x}$ parcourt $]0,+\infty[$.
- **$f^{-1}(]1,e])$** : $1<e^{2-x}\leq e$ ⇔ (on applique $\ln$, croissante) $0<2-x\leq1$ ⇔ $1\leq x<2$. Donc $[1,2[$.
- **$f^{-1}(]-\infty,0])$** : une exponentielle est toujours $>0$, donc $\varnothing$.
</details>

### B3. $f:\mathbb R\to\mathbb R$, $f(x)=\ln(1+x^2)$

Déterminer $f([-1,2])$, $f(\mathbb R)$, $f^{-1}(\lbrace\ln2\rbrace)$ et $f^{-1}([0,\ln10[)$.

<details>
<summary>✅ Correction</summary>

$f$ est paire, décroissante sur $\mathbb R_-$ et croissante sur $\mathbb R_+$ (car $x^2$ l'est et $\ln$ est croissante). Son minimum est $f(0)=0$.

- **$f([-1,2])$** : le minimum $0$ est atteint en $0\in[-1,2]$. On a $f(-1)=\ln2$ et $f(2)=\ln5$, le maximum est $\ln5$. Donc $[0,\ln5]$.
- **$f(\mathbb R)$** : $1+x^2$ parcourt $[1,+\infty[$, donc $f(\mathbb R)=[0,+\infty[$.
- **$f^{-1}(\lbrace\ln2\rbrace)$** : $\ln(1+x^2)=\ln2$ ⇔ $x^2=1$ ⇔ $x=\pm1$. Donc $\lbrace-1,1\rbrace$ : deux antécédents, ce qui montre au passage que $f$ n'est **pas injective**.
- **$f^{-1}([0,\ln10[)$** : $0\leq\ln(1+x^2)$ est toujours vrai ; $\ln(1+x^2)<\ln10$ ⇔ $x^2<9$ ⇔ $\lvert x\rvert<3$. Donc $]-3,3[$.
</details>

### B4. $f:\mathbb R\to\mathbb R$, $f(x)=\lvert x-1\rvert$

Déterminer $f([-1,2])$, $f^{-1}([0,1])$ et $f^{-1}(]2,+\infty[)$.

<details>
<summary>✅ Correction</summary>

$\lvert x-1\rvert$ est la **distance** entre $x$ et $1$.

- **$f([-1,2])$** : sur $[-1,2]$, la distance à 1 vaut au minimum 0 (en $x=1$) et au maximum 2 (en $x=-1$). Donc $[0,2]$.
- **$f^{-1}([0,1])$** : $\lvert x-1\rvert\leq1$ ⇔ $-1\leq x-1\leq1$ ⇔ $x\in[0,2]$.
- **$f^{-1}(]2,+\infty[)$** : $\lvert x-1\rvert>2$ ⇔ $x-1>2$ ou $x-1<-2$ ⇔ $x\in\,]-\infty,-1[\cup]3,+\infty[$.
</details>

### B5. $f:\mathbb Z\to\mathbb Z$, $f(n)=n^2$ (ensembles discrets, type DS2-2022/2024)

Déterminer $f(\lbrace-2,-1,0,1,2\rbrace)$, $f^{-1}(\lbrace4,5\rbrace)$, $f^{-1}(\lbrace0,1,\dots,10\rbrace)$ et $f(\mathbb Z)$.

<details>
<summary>✅ Correction</summary>

- $f(\lbrace-2,\dots,2\rbrace)=\lbrace4,1,0,1,4\rbrace=\lbrace0,1,4\rbrace$ (on n'écrit pas les doublons).
- $f^{-1}(\lbrace4,5\rbrace)$ : $n^2=4$ ⇔ $n=\pm2$ ; $n^2=5$ n'a pas de solution entière. Donc $\lbrace-2,2\rbrace$.
- $f^{-1}(\lbrace0,\dots,10\rbrace)$ : $n^2\leq10$ ⇔ $\lvert n\rvert\leq3$. Donc $\lbrace-3,-2,-1,0,1,2,3\rbrace$.
- $f(\mathbb Z)$ = l'ensemble des **carrés parfaits** $\lbrace0,1,4,9,16,\dots\rbrace$.

💡 Avec des ensembles discrets, on **liste** les éléments, on ne trace pas de courbe.
</details>

---

## C · Injectivité / surjectivité

> [!TIP]
> | | Pour **prouver** | Pour **réfuter** |
> |---|---|---|
> | **Injective** | « Soient $x,y$ tels que $f(x)=f(y)$ », puis montrer $x=y$. Ou bien : $f$ strictement monotone | deux points **distincts** de même image |
> | **Surjective** | « Soit $y\in F$ », résoudre $f(x)=y$ et vérifier que $x\in E$ | un $y\in F$ **sans antécédent** |
>
> ⚠️ Tout dépend des ensembles de **départ et d'arrivée**. Réponds toujours par une justification, pas seulement « oui » ou « non ».

### C1. $f:\mathbb R\to\mathbb R$, $f(x)=3x-5$

Est-elle injective, surjective ? Si elle est bijective, donner $f^{-1}$.

<details>
<summary>✅ Correction</summary>

- **Injective** : si $3x-5=3y-5$, alors $3x=3y$, donc $x=y$. ✔
- **Surjective** : soit $y\in\mathbb R$. On résout $3x-5=y$ ⇔ $x=\frac{y+5}3$, qui est bien un réel. ✔
- Donc $f$ est **bijective**, et $f^{-1}:\mathbb R\to\mathbb R$, $y\mapsto\frac{y+5}{3}$.
</details>

### C2. $f:\mathbb R\to\mathbb R$, $f(x)=x^2+2x$

1. Injective ? Surjective ? 2. Restreindre le départ et l'arrivée pour obtenir une bijection, puis donner sa réciproque.

<details>
<summary>✅ Correction</summary>

Forme canonique : $f(x)=(x+1)^2-1$.

1. **Non injective** : $f(-2)=4-4=0=f(0)$ alors que $-2\neq0$. **Non surjective** : $(x+1)^2\geq0$, donc $f(x)\geq-1$ pour tout $x$, et $-2$ n'a pas d'antécédent.
2. Sur $[-1,+\infty[$, $f$ est strictement croissante, donc injective, et elle prend toutes les valeurs de $[-1,+\infty[$. La fonction $\tilde f:[-1,+\infty[\to[-1,+\infty[$ est donc bijective. Réciproque : $(x+1)^2-1=y$ ⇔ $(x+1)^2=y+1$ ⇔ $x+1=\sqrt{y+1}$ (on prend la racine positive car $x+1\geq0$). Donc $\tilde f^{-1}(y)=-1+\sqrt{y+1}$.
</details>

### C3. $f:\mathbb R\to\mathbb R$, $f(x)=e^x+1$

1. Injective ? Surjective ? 2. Trouver un ensemble d'arrivée qui la rend bijective, puis donner sa réciproque.

<details>
<summary>✅ Correction</summary>

1. **Injective** : $f$ est strictement croissante (car $\exp$ l'est), donc si $x<y$ alors $f(x)<f(y)$. Deux points distincts ont donc des images distinctes. **Non surjective** : $e^x>0$ donne $f(x)>1$, donc $0$ (par exemple) n'a pas d'antécédent.
2. $f(\mathbb R)=]1,+\infty[$. Avec cet ensemble d'arrivée, $f$ est surjective, et elle reste injective : elle est bijective. Réciproque : $e^x+1=y$ ⇔ $e^x=y-1$ ⇔ $x=\ln(y-1)$, ce qui a un sens car $y>1$. Donc $f^{-1}:]1,+\infty[\to\mathbb R$, $y\mapsto\ln(y-1)$.
</details>

### C4. Deux fonctions $\mathbb N\to\mathbb N$ : $f(n)=n+1$ et $g(n)=\lfloor n/2\rfloor$ (partie entière de $n/2$)

Pour chacune : injective ? surjective ?

<details>
<summary>✅ Correction</summary>

- **$f$** : $n+1=m+1$ ⇒ $n=m$, donc $f$ est **injective**. Elle n'est **pas surjective** : $0$ n'a pas d'antécédent dans $\mathbb N$, car il faudrait $n=-1$.
- **$g$** : $g(0)=g(1)=0$, donc $g$ n'est **pas injective**. Elle est **surjective** : pour tout $k\in\mathbb N$, $g(2k)=k$.

💡 Ces deux fonctions montrent que, sur un ensemble infini, une fonction de $E$ dans $E$ peut être injective sans être surjective, et inversement. C'est impossible sur un ensemble fini.
</details>

### C5. $f:\mathbb R\setminus\lbrace1\rbrace\to\mathbb R$, $f(x)=\dfrac{2x+1}{x-1}$

1. Montrer que $f$ est injective. 2. Est-elle surjective ? 3. En déduire une bijection et sa réciproque.

<details>
<summary>✅ Correction</summary>

1. Soient $x,y\neq1$ tels que $f(x)=f(y)$. On fait le produit en croix : $(2x+1)(y-1)=(2y+1)(x-1)$, soit $2xy-2x+y-1=2xy-2y+x-1$, d'où $-3x=-3y$ et $x=y$. ✔
2. Soit $y\in\mathbb R$. On résout $\frac{2x+1}{x-1}=y$ ⇔ $2x+1=yx-y$ ⇔ $x(2-y)=-y-1$ ⇔ $x(y-2)=y+1$.
   - Si $y\neq2$ : $x=\frac{y+1}{y-2}$. Il faut vérifier que $x\neq1$ : $\frac{y+1}{y-2}=1$ donnerait $y+1=y-2$, ce qui est impossible. ✔
   - Si $y=2$ : l'équation devient $0=3$, impossible. **$2$ n'a pas d'antécédent**, donc $f$ n'est **pas surjective**.
3. $f:\mathbb R\setminus\lbrace1\rbrace\to\mathbb R\setminus\lbrace2\rbrace$ est bijective, de réciproque $y\mapsto\dfrac{y+1}{y-2}$.

💡 Plus rapide : $f(x)=2+\frac{3}{x-1}$. Comme $\frac3{x-1}$ ne s'annule jamais, $f$ ne vaut jamais 2.
</details>

---

## D · Domaines de définition

> [!TIP]
> On liste **toutes** les contraintes, on résout chacune, puis on prend l'**intersection** :
> - dénominateur $\neq0$ ;
> - $\sqrt{A}$ : $A\geq0$ ;
> - $\ln(A)$ : $A>0$ ;
> - $\frac1{\ln A}$ : $A>0$ **et** $A\neq1$ (car $\ln1=0$) ;
> - $\lvert A\rvert\leq c$ ⇔ $-c\leq A\leq c$.

### D1. $f(x)=\sqrt{x^2-5x+6}$

<details>
<summary>✅ Correction</summary>

Il faut $x^2-5x+6\geq0$. On factorise : $(x-2)(x-3)\geq0$. Un trinôme du second degré avec $a>0$ est positif **à l'extérieur** de ses racines. Donc $D_f=\,]-\infty,2]\cup[3,+\infty[$.
</details>

### D2. $f(x)=\dfrac{\ln(4-x^2)}{x-1}$

<details>
<summary>✅ Correction</summary>

- $\ln$ : $4-x^2>0$ ⇔ $x^2<4$ ⇔ $-2<x<2$.
- Dénominateur : $x\neq1$.

Donc $D_f=\,]-2,1[\cup]1,2[$.
</details>

### D3. $f(x)=\dfrac{1}{\ln(x+3)}$

<details>
<summary>✅ Correction</summary>

- $\ln$ : $x+3>0$ ⇔ $x>-3$.
- Dénominateur : $\ln(x+3)\neq0$ ⇔ $x+3\neq1$ ⇔ $x\neq-2$.

Donc $D_f=\,]-3,-2[\cup]-2,+\infty[$. ⚠️ On oublie très souvent la condition « $\neq1$ » (elle était dans le DS2-2025).
</details>

### D4. $f(x)=\sqrt{2-\lvert x+1\rvert}$

<details>
<summary>✅ Correction</summary>

Il faut $2-\lvert x+1\rvert\geq0$ ⇔ $\lvert x+1\rvert\leq2$ ⇔ $-2\leq x+1\leq2$ ⇔ $-3\leq x\leq1$. Donc $D_f=[-3,1]$.

💡 Lecture géométrique : les $x$ à distance au plus 2 de $-1$.
</details>

### D5. $f(x)=\dfrac{\ln(e^x-2)}{\sqrt{3-x}}$

<details>
<summary>✅ Correction</summary>

- $\ln$ : $e^x-2>0$ ⇔ $e^x>2$ ⇔ $x>\ln2$ (on applique $\ln$, qui est croissante).
- La racine est au **dénominateur**, donc il faut $3-x>0$ **strictement** : $x<3$.

Donc $D_f=\,]\ln2,3[$. On a bien $\ln2\approx0{,}69<3$, donc l'intervalle n'est pas vide.
</details>

---

## E · Limites $\frac00$ sans L'Hôpital

> [!TIP]
> **Méthode (3 lignes de rédaction suffisent)**
> 1. « $P_1(a)=0$ et $P_2(a)=0$ : forme indéterminée. $a$ est racine des deux, donc $(x-a)$ divise $P_1$ et $P_2$. »
> 2. Factoriser par **Horner** : on écrit les coefficients sans oublier les 0, on descend le premier, puis on fait « × $a$ + coefficient suivant ».
> 3. Pour $x\neq a$, simplifier par $(x-a)$, puis remplacer $x$ par $a$. Si on retombe sur $\frac00$, on recommence. Si seul le dénominateur s'annule, on étudie le signe à gauche et à droite.

### E1. $\displaystyle\lim_{x\to2}\frac{x^2-5x+6}{x^2-4}$

<details>
<summary>✅ Correction</summary>

En 2 : numérateur $4-10+6=0$ et dénominateur $4-4=0$, c'est une FI. On factorise : $x^2-5x+6=(x-2)(x-3)$ et $x^2-4=(x-2)(x+2)$. Pour $x\neq2$ :
$$\frac{(x-2)(x-3)}{(x-2)(x+2)}=\frac{x-3}{x+2}\xrightarrow[x\to2]{}\frac{-1}{4}.$$
La limite vaut $\boxed{-\frac14}$.
</details>

### E2. $\displaystyle\lim_{x\to1}\frac{x^3-1}{x^2-1}$

<details>
<summary>✅ Correction</summary>

En 1, on a bien $\frac00$. Horner pour $x^3+0x^2+0x-1$ par $x-1$ : les coefficients `1 0 0 -1` donnent `1 | 1 | 1 | 0`, donc $x^3-1=(x-1)(x^2+x+1)$. De plus $x^2-1=(x-1)(x+1)$.
$$\lim_{x\to1}\frac{x^2+x+1}{x+1}=\frac32.$$
⚠️ Les deux zéros (coefficients de $x^2$ et de $x$) sont indispensables dans le tableau de Horner.
</details>

### E3. $\displaystyle\lim_{x\to-1}\frac{x^3+x^2-x-1}{x^2+2x+1}$

<details>
<summary>✅ Correction</summary>

En $-1$ : numérateur $-1+1+1-1=0$ et dénominateur $1-2+1=0$, c'est une FI.

On factorise le numérateur en regroupant : $x^2(x+1)-(x+1)=(x+1)(x^2-1)=(x+1)^2(x-1)$. Le dénominateur est $(x+1)^2$.

Pour $x\neq-1$, la fraction vaut $x-1$, qui tend vers $\boxed{-2}$.

💡 Ici $-1$ est racine **double** des deux polynômes. Si on ne divise qu'une fois par $(x+1)$, on retombe sur $\frac00$ et il faut diviser une seconde fois.
</details>

### E4. $\displaystyle\lim_{x\to3}\frac{2x^3-3x^2-11x+6}{x^2-x-6}$

<details>
<summary>✅ Correction</summary>

En 3 : numérateur $54-27-33+6=0$ et dénominateur $9-3-6=0$, c'est une FI.

Horner pour le numérateur avec $a=3$ :

| | $2$ | $-3$ | $-11$ | $6$ |
|---|:-:|:-:|:-:|:-:|
| $\times3$ | | $6$ | $9$ | $-6$ |
| | **2** | **3** | **−2** | **0** |

On obtient $(x-3)(2x^2+3x-2)$. Le dénominateur vaut $(x-3)(x+2)$ (racines $3$ et $-2$).

Pour $x\neq3$, la fraction vaut $\dfrac{2x^2+3x-2}{x+2}$, qui tend vers $\dfrac{18+9-2}{5}=\boxed{5}$.
</details>

### E5. $\displaystyle\lim_{x\to2}\frac{x^2-x-2}{x^3-3x^2+4}$ (piège)

<details>
<summary>✅ Correction</summary>

En 2 : numérateur $4-2-2=0$ et dénominateur $8-12+4=0$, c'est une FI.

- Numérateur : $(x-2)(x+1)$.
- Dénominateur, Horner avec `1 -3 0 4` et $a=2$ : `1 | -1 | -2 | 0`, donc $(x-2)(x^2-x-2)=(x-2)^2(x+1)$.

Pour $x\neq2$ et $x\neq-1$ :
$$\frac{(x-2)(x+1)}{(x-2)^2(x+1)}=\frac{1}{x-2}.$$
Le numérateur vaut 1 et le dénominateur tend vers 0 :
- quand $x\to2^+$, $x-2\to0^+$, donc la fraction tend vers $+\infty$ ;
- quand $x\to2^-$, $x-2\to0^-$, donc la fraction tend vers $-\infty$.

Les limites à gauche et à droite sont différentes : **la limite en 2 n'existe pas**.

⚠️ Une FI $\frac00$ ne donne pas forcément une limite finie. Après simplification, il faut encore regarder le signe de ce qui tend vers 0.
</details>
