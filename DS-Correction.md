# Correction — DS de Mathématiques PTSI
**Lycée Déodat de Séverac**

---

## Exercice 1 — Logique, ensembles

### 1. Implications : vraies ou fausses ? Contraposées.

**(a) $x \geq 1 \Rightarrow x > 1$**

**Fausse.** Contre-exemple : $x = 1$. On a bien $1 \geq 1$, mais $1 > 1$ est faux.

Contraposée : $x \leq 1 \Rightarrow x < 1$ (également fausse, une implication et sa contraposée ont toujours la même valeur de vérité).

**(b) $x = 3 \Rightarrow x^2 = 3x$**

**Vraie.** Si $x=3$, alors $x^2 = 9 = 3 \times 3 = 3x$. ✓

Contraposée : $x^2 \neq 3x \Rightarrow x \neq 3$.

**(c)** $\forall (a,b) \in \mathbb{R}^2,\ a+b \geq 0 \Rightarrow$

$$\begin{cases} a \geq 0 \\ b \geq 0 \end{cases}$$

**Fausse.** Contre-exemple : $a=-1,\ b=2$. On a $a+b=1\geq 0$ mais $a<0$.

Contraposée : $(a<0 \text{ ou } b<0) \Rightarrow a+b<0$ (fausse aussi, cohérent avec (c)). On obtient la contraposée en niant l'expression $a\geq0$ et $b\geq0$, ce qui donne $a<0$ ou $b<0$ (loi de De Morgan), et en niant $a+b\geq0$.

**(d) $\forall (a,b)\in\mathbb{R}^2,\ ab \leq 0 \Rightarrow (a\leq 0 \text{ ou } b \leq 0)$**

**Vraie.** Raisonnons par contraposée : si $a>0$ et $b>0$, alors $ab>0$. Donc par contraposition, $ab\leq 0 \Rightarrow (a\leq0 \text{ ou } b\leq 0)$.

Contraposée : $(a>0 \text{ et } b>0) \Rightarrow ab>0$.

---

### 2. Assertions : vraies ou fausses ? Négations.

**(a) $\forall x \in \mathbb{R}_+^\ast,\ \exists n \in \mathbb{Z}^\ast,\ x^n \geq 1$**

**Vraie.** Pour $x\geq 1$, on prend $n=1$. Pour $0<x<1$, on prend $n=-1$ : alors $x^{-1}=\frac{1}{x}\geq 1$.

Négation : $\exists x \in \mathbb{R}_+^\ast,\ \forall n \in \mathbb{Z}^\ast,\ x^n < 1$.

**(b) $\exists n \in \mathbb{Z}^\ast,\ \forall x \in \mathbb{R}_+^\ast,\ x^n \geq 1$**

**Fausse.** Pour tout $n>0$ fixé, en faisant tendre $x\to 0^+$, on a $x^n \to 0 <1$. Pour tout $n<0$ fixé, en faisant tendre $x\to +\infty$, on a $x^n \to 0 < 1$. Aucun $n$ ne convient pour tous les $x$.

Négation : $\forall n \in \mathbb{Z}^\ast,\ \exists x \in \mathbb{R}_+^\ast,\ x^n < 1$.

---

### 3. Inclusion d'ensembles

On veut montrer $\displaystyle\bigcup_{t\in\mathbb{R}^\ast} \{(t;\tfrac{1}{t})\} \subset \{(x;y)\in\mathbb{R}^2 \mid xy=1\}$.

Soit $(x,y)$ un élément du membre de gauche. Il existe $t\in\mathbb{R}^\ast$ tel que $(x,y)=(t,\tfrac1t)$. Alors $xy = t \times \tfrac{1}{t} = 1$, donc $(x,y)$ appartient à l'ensemble de droite. **L'inclusion est donc vraie.**

**Réciproque :** soit $(x,y)$ tel que $xy=1$. Comme $xy=1\neq 0$, on a nécessairement $x\neq 0$, donc $x\in\mathbb{R}^\ast$, et $y=\dfrac1x$. Ainsi $(x,y)=(x,\tfrac1x)$ est bien de la forme $(t,\tfrac1t)$ avec $t=x\in\mathbb{R}^\ast$.

**La réciproque est donc également vraie : il y a en fait égalité des deux ensembles.**

---

## Exercice 2 — Équations, inéquations

### (a) $\sqrt{x+2} = x+1$

**Domaine :** il faut $x+2\geq 0$ (soit $x\geq -2$) **et** $x+1\geq 0$ (soit $x\geq -1$), car une racine carrée est toujours $\geq 0$.

En élevant au carré (équivalence sur ce domaine, car les deux membres sont positifs) :
$$x+2 = (x+1)^2 = x^2+2x+1 \iff x^2+x-1=0$$

Discriminant : $\Delta = 1+4 = 5$. Racines : $x = \dfrac{-1\pm\sqrt5}{2}$.

- $x_1=\dfrac{-1+\sqrt5}{2}\approx 0{,}618$ : vérifie $x\geq -1$. **Solution valide.**
- $x_2=\dfrac{-1-\sqrt5}{2}\approx -1{,}618$ : ne vérifie pas $x\geq -1$. **Rejetée.**

**Solution unique :** $x = \dfrac{-1+\sqrt5}{2}$.

### (b) $\ln(3x^3-x) = \ln(4x^2+6)$

**Domaine :** $3x^3-x>0$ ; on remarque que $4x^2+6\geq 6>0$ toujours.

Par injectivité du logarithme, l'équation équivaut (sur le domaine) à :
$$3x^3-x = 4x^2+6 \iff 3x^3-4x^2-x-6=0$$

On teste $x=2$ : $3(8)-4(4)-2-6 = 24-16-2-6=0$. C'est une racine ! On factorise :
$$3x^3-4x^2-x-6 = (x-2)(3x^2+2x+3)$$

Le discriminant de $3x^2+2x+3$ vaut $4-36=-32<0$ : pas d'autre racine réelle.

**Vérification du domaine** pour $x=2$ : $3x^3-x = 24-2=22>0$. ✓

**Solution unique :** $x=2$.

### (c) $9^x - 3\times 3^x + 2 = 0$

On pose $u=3^x>0$. L'équation devient $u^2-3u+2=0 \iff (u-1)(u-2)=0$, donc $u=1$ ou $u=2$.

- $u=1 \Rightarrow 3^x=1 \Rightarrow x=0$.
- $u=2 \Rightarrow 3^x=2 \Rightarrow x = \dfrac{\ln 2}{\ln 3} = \log_3(2)$.

**Solutions :** $x=0$ ou $x=\log_3(2)$.

### (d) $|x^2-3|\geq 1$

$$|x^2-3|\geq 1 \iff x^2-3\geq 1 \text{ ou } x^2-3\leq -1 \iff x^2\geq 4 \text{ ou } x^2\leq 2$$

- $x^2\geq 4 \iff x\leq -2$ ou $x\geq 2$.
- $x^2\leq 2 \iff -\sqrt2 \leq x \leq \sqrt2$.

**Solution :** $x \in\ ]-\infty;-2] \cup [-\sqrt2;\sqrt2] \cup [2;+\infty[$.

### (e) $\dfrac{e^x-2}{e^x-3}\leq 2$

**Domaine :** $e^x\neq 3$, soit $x\neq \ln3$. On pose $t=e^x>0$.

$$\frac{t-2}{t-3}\leq 2 \iff \frac{t-2}{t-3}-2\leq 0 \iff \frac{(t-2)-2(t-3)}{t-3}\leq 0 \iff \frac{4-t}{t-3}\leq 0 \iff \frac{t-4}{t-3}\geq 0$$

Tableau de signes (racines $t=3$ exclue, $t=4$ incluse) :

- $t<3$ : signe positif → vrai.
- $3<t<4$ : signe négatif → faux.
- $t\geq 4$ : signe positif (nul en $t=4$) → vrai.

Donc $t\in\ ]0;3[\ \cup\ [4;+\infty[$ (rappel : $t=e^x>0$).

**Retour à $x$ :** $e^x<3 \iff x<\ln3$ ; $\quad e^x\geq 4 \iff x\geq \ln4 = 2\ln2$.

**Solution :** $x \in\ ]-\infty;\ln3[\ \cup\ [\ln4;+\infty[$.

### (f) $\sqrt{x^2+x+1} > x+2$

Le discriminant de $x^2+x+1$ vaut $1-4=-3<0$, donc $x^2+x+1>0$ pour tout $x$ : **le domaine est $\mathbb{R}$.**

**Cas 1 : $x+2<0$ (soit $x<-2$).** Le membre de gauche est $\geq 0$, donc toujours strictement supérieur à un nombre négatif : **tous ces $x$ sont solutions.**

**Cas 2 : $x+2\geq 0$ (soit $x\geq -2$).** Les deux membres sont positifs, on peut élever au carré (équivalence) :
$$x^2+x+1 > (x+2)^2 = x^2+4x+4 \iff x+1>4x+4 \iff -3x>3 \iff x<-1$$
Combiné à $x\geq -2$ : $-2\leq x<-1$.

**Réunion des deux cas :** $x<-2$ ou $-2\leq x<-1$, soit finalement :

**Solution :** $x \in\ ]-\infty;-1[$.

---

## Exercice 3 — Avec des paramètres

### (a) $(m-1)x^2+x-m=0$

**Cas $m=1$ :** l'équation devient $x-1=0$, soit $x=1$ (équation linéaire, une seule solution).

**Cas $m\neq 1$ :** équation du second degré. Discriminant :
$$\Delta = 1^2-4(m-1)(-m) = 1+4m(m-1) = 4m^2-4m+1 = (2m-1)^2$$

Le discriminant est **toujours un carré parfait**, donc toujours positif ou nul : il y a toujours des solutions réelles.

$$x = \frac{-1\pm(2m-1)}{2(m-1)}$$

- $x_1 = \dfrac{-1+(2m-1)}{2(m-1)} = \dfrac{2m-2}{2(m-1)} = 1$
- $x_2 = \dfrac{-1-(2m-1)}{2(m-1)} = \dfrac{-2m}{2(m-1)} = \dfrac{m}{1-m}$

**Bilan :**
- Si $m=1$ : solution unique $x=1$.
- Si $m=\dfrac12$ : $\Delta=0$, racine double $x=1$ (on vérifie $x_2=\frac{0.5}{0.5}=1$).
- Si $m\neq 1$ et $m\neq \dfrac12$ : deux solutions distinctes $x=1$ et $x=\dfrac{m}{1-m}$.

### (b)

$$\begin{cases} mx+y=1 \\ 3x-2y=6 \end{cases}$$

De la première équation : $y=1-mx$. On substitue dans la seconde :
$$3x-2(1-mx)=6 \iff 3x-2+2mx=6 \iff x(3+2m)=8$$

**Cas $m\neq -\dfrac32$ :** $x = \dfrac{8}{3+2m}$, puis
$$y = 1-mx = \frac{(3+2m)-8m}{3+2m} = \frac{3-6m}{3+2m}$$

**Solution unique :** $\left(x,y\right) = \left(\dfrac{8}{3+2m},\ \dfrac{3-6m}{3+2m}\right)$.

**Cas $m=-\dfrac32$ :** l'équation devient $0\times x = 8$, ce qui est **impossible**.

*(Vérification : le système devient $-\frac32 x+y=1$ et $3x-2y=6$ ; en multipliant la première par $2$ on obtient $-3x+2y=2$, qui, ajoutée à la seconde, donne $0=8$ : le système est incompatible, les deux droites sont strictement parallèles.)*

**Bilan :** système de Cramer (solution unique) si $m\neq -\dfrac32$ ; **aucune solution** si $m=-\dfrac32$.

---

## Exercice 4 — Inégalités

### 1. Montrer que $\forall (a,b)\in(\mathbb{R}_+^\ast)^2,\ \dfrac{3a-b}{4}\leq \dfrac{a^2}{a+b}$

On étudie le signe de la différence, en réduisant au même dénominateur $4(a+b)>0$ :
$$\frac{a^2}{a+b}-\frac{3a-b}{4} = \frac{4a^2-(3a-b)(a+b)}{4(a+b)}$$

On développe $(3a-b)(a+b) = 3a^2+3ab-ab-b^2 = 3a^2+2ab-b^2$, donc :
$$4a^2-(3a^2+2ab-b^2) = a^2-2ab+b^2 = (a-b)^2$$

Ainsi :
$$\frac{a^2}{a+b}-\frac{3a-b}{4} = \frac{(a-b)^2}{4(a+b)} \geq 0$$

car $(a-b)^2\geq 0$ et $a+b>0$. **L'inégalité est démontrée**, avec égalité si et seulement si $a=b$.

### 2. En déduire l'inégalité pour trois variables

On applique le résultat de la question 1 trois fois, avec les couples $(a,b)$, $(b,c)$, $(c,a)$ :
$$\frac{3a-b}{4}\leq \frac{a^2}{a+b}, \qquad \frac{3b-c}{4}\leq \frac{b^2}{b+c}, \qquad \frac{3c-a}{4}\leq \frac{c^2}{c+a}$$

En sommant les trois inégalités :
$$\frac{(3a-b)+(3b-c)+(3c-a)}{4} \leq \frac{a^2}{a+b}+\frac{b^2}{b+c}+\frac{c^2}{c+a}$$

Le numérateur de gauche se simplifie : $(3a-b)+(3b-c)+(3c-a) = 2a+2b+2c = 2(a+b+c)$.

D'où :
$$\frac{a+b+c}{2} \leq \frac{a^2}{a+b}+\frac{b^2}{b+c}+\frac{c^2}{c+a}$$

**CQFD.**

### 3. Montrer que $\forall(a,b,c)\in(\mathbb{R}_+^\ast)^3,\ \dfrac{a^2}{a+b}+\dfrac{b^2}{b+c}+\dfrac{c^2}{c+a} < a+b+c$

On remarque que pour tout terme, on peut écrire :
$$\frac{a^2}{a+b} = \frac{a(a+b)-ab}{a+b} = a - \frac{ab}{a+b}$$

Comme $a,b>0$, on a $\dfrac{ab}{a+b}>0$, donc $\dfrac{a^2}{a+b} < a$.

De même : $\dfrac{b^2}{b+c} < b$ et $\dfrac{c^2}{c+a} < c$.

En sommant ces trois inégalités strictes :
$$\frac{a^2}{a+b}+\frac{b^2}{b+c}+\frac{c^2}{c+a} < a+b+c$$

**CQFD.**

*(Remarque : les questions 2 et 3 encadrent donc la même somme entre $\frac{a+b+c}{2}$ et $a+b+c$.)*

---

## Exercice 5 — Équation fonctionnelle

On cherche les fonctions $f$ telles que : $\forall x\in\mathbb{R}^\ast,\ f(x)+2xf\left(\dfrac1x\right)=1$. *(E)*

### 1. Montrer que si $f$ vérifie (E), alors $\forall x \in \mathbb{R}^\ast,\ 2f(x)+xf\left(\dfrac1x\right)=x$

L'équation (E) est valable pour **tout** réel non nul, donc en particulier pour $\dfrac1x$ (qui est bien non nul si $x\neq0$). On remplace $x$ par $\dfrac1x$ dans (E) :
$$f\left(\frac1x\right) + 2\cdot\frac1x\cdot f(x) = 1$$

En multipliant les deux membres par $x$ (non nul) :
$$x f\left(\frac1x\right) + 2f(x) = x$$

C'est exactement l'égalité demandée : $2f(x)+xf\left(\dfrac1x\right)=x$. **CQFD.**

### 2. Conclure

On dispose maintenant de deux équations, en posant $A=f(x)$ et $B=f\left(\dfrac1x\right)$ :
$$\text{(E)} : A+2xB=1 \qquad \text{(E')} : 2A+xB=x$$

De (E'), on tire $xB = x-2A$. On reporte dans (E) : $A+2(x-2A)=1$, c'est-à-dire :
$$A+2x-4A=1 \iff -3A = 1-2x \iff A = \frac{2x-1}{3}$$

Donc **si une fonction $f$ vérifie (E), elle est nécessairement donnée par** :
$$f(x) = \frac{2x-1}{3}, \qquad x\in\mathbb{R}^\ast$$

**Réciproque (vérification) :** calculons $f\left(\dfrac1x\right) = \dfrac{\frac2x-1}{3} = \dfrac{2-x}{3x}$, puis :
$$f(x)+2xf\left(\frac1x\right) = \frac{2x-1}{3} + 2x\cdot\frac{2-x}{3x} = \frac{2x-1}{3}+\frac{2(2-x)}{3} = \frac{(2x-1)+(4-2x)}{3} = \frac{3}{3} = 1 \checkmark$$

La fonction proposée vérifie bien (E).

**Conclusion :** il existe une **unique** fonction $f$ vérifiant (E), donnée par $f(x)=\dfrac{2x-1}{3}$.
