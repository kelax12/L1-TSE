# Chapitre 7 · Puissances et polynômes — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 7-cours.md](Chp%207-cours.md) · Annales : [annales-DS2.md](../annales-DS2.md)
>
> Pas de TD dédié : le chapitre sert surtout d'**outil** pour les limites (factoriser par $x-a$). Sources : cours, TD7-8, DS2. Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C7.1 — Calculer avec des puissances réelles et donner leur domaine
- [ ] C7.2 — Trouver degré et coefficient d'un $X^k$ dans une somme / un produit
- [ ] C7.3 — Diviser par $X-\lambda$ avec Horner (quotient + reste)
- [ ] C7.4 — Trouver une racine évidente et factoriser un polynôme
- [ ] C7.5 — Déterminer l'ordre de multiplicité d'une racine
- [ ] C7.6 — Domaine de définition d'une fraction rationnelle

---

## C7.1 — Puissances réelles

**Méthode** : tout réécrire en $a^\alpha=e^{\alpha\ln a}$ ($a>0$), puis utiliser les règles ($a^\alpha a^\beta=a^{\alpha+\beta}$, $(a^\alpha)^\beta=a^{\alpha\beta}$…). Domaine : $\alpha\in\mathbb N^*$ → $\mathbb R$ ; $\alpha\in\mathbb Z$ → $\mathbb R^*$ ; sinon → $\mathbb R_+^*$.

<details>
<summary>✏️ Correction étape par étape — cours ex2-3</summary>

**$125^{2/3}$**
1. Décomposer l'exposant : $a^{p/q}=(a^{1/q})^p$.
2. Racine cubique : $125=5^3$, donc $125^{1/3}=5$.
3. Puissance : $5^2=25$.

**Simplifier $\frac{x^{1/2}\times x^{3/2}}{x}$ pour $x>0$**
1. Produit : on additionne les exposants : $x^{1/2+3/2}=x^2$.
2. Quotient : on soustrait : $x^{2-1}=x$.

**Domaine de $x\mapsto x^{\sqrt2}$**
1. L'exposant $\sqrt2$ n'est ni entier ni rationnel : on utilise $x^{\sqrt2}=e^{\sqrt2\ln x}$.
2. $\ln x$ demande $x>0$ (et $0^{\sqrt2}=0$ par convention car $\sqrt2>0$).
3. Domaine : $\mathbb R_+$.
</details>

---

## C7.2 — Degré et coefficients

**Méthode** : somme → additionner les coefficients de même degré, $\deg\leq\max$. Produit → $\deg(PQ)=\deg P+\deg Q$, coefficient dominant = produit des dominants ; coefficient de $X^k$ = somme des $a_ib_j$ avec $i+j=k$.

<details>
<summary>✏️ Correction étape par étape — cours ex7-8</summary>

$P=\frac{X^4}{2}-X^3+5X-2$, $Q=X^2-3X^4+2X+1$.

**$6P+Q$ : degré et coefficient dominant**
1. $6P=3X^4-6X^3+30X-12$.
2. On additionne degré par degré : $X^4$ : $3-3=0$ ; $X^3$ : $-6$ ; $X^2$ : $1$ ; $X$ : $30+2=32$ ; constante : $-12+1=-11$.
3. $6P+Q=-6X^3+X^2+32X-11$ : **degré 3** (et non 4 : les termes dominants se sont annulés), dominant $-6$.

**Coefficient de $X^5$ dans $6P\times Q$**
1. Couples de degrés dont la somme fait 5 : $(4,1)$, $(3,2)$, $(1,4)$ (il n'y a pas de $X^2$ dans $6P$ ni de $X^3$ dans $Q$).
2. Produits des coefficients : $3\times2=6$ ; $(-6)\times1=-6$ ; $30\times(-3)=-90$.
3. Somme : $-90$.
4. Bonus : $\deg(6PQ)=4+4=8$, dominant $3\times(-3)=-9$.
</details>

---

## C7.3 — Horner

**Méthode** : ligne des coefficients (**sans oublier les 0**), on descend le premier, puis « × λ, + coefficient suivant ». Dernier nombre = reste $=P(\lambda)$ ; s'il vaut 0, $\lambda$ est racine et on a $P=(X-\lambda)Q$.

<details>
<summary>✏️ Correction étape par étape — DS2-21 : diviser $x^6+2x^5-x^2+5x+14$ par $x+2$</summary>

**Étape 1 — λ.** $x+2=x-(-2)$ : $\lambda=-2$.

**Étape 2 — Coefficients, sans oublier les zéros.** Degrés 6 à 0 : `1  2  0  0  -1  5  14`.

**Étape 3 — Horner.** On descend le 1, puis à chaque fois « × (−2), + coefficient suivant » :

| | 1 | 2 | 0 | 0 | −1 | 5 | 14 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| ×(−2) | | −2 | 0 | 0 | 0 | 2 | −14 |
| | **1** | **0** | **0** | **0** | **−1** | **7** | **0** |

**Étape 4 — Lire.** Reste $0$ : $-2$ est racine. Quotient (degré 5) : $x^5+0x^4+0x^3+0x^2-x+7$.

**Résultat** : $x^6+2x^5-x^2+5x+14=(x+2)(x^5-x+7)$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD8 ex2 : $x^3-x^2-x-2$ par $x-2$</summary>

1. $\lambda=2$, coefficients `1 -1 -1 -2`.
2. Horner : $1$ ; $1\times2-1=1$ ; $1\times2-1=1$ ; $1\times2-2=0$.
3. $x^3-x^2-x-2=(x-2)(x^2+x+1)$, et $x^2+x+1$ n'a pas de racine ($\Delta=-3$).
</details>

---

## C7.4 — Racine évidente et factorisation

**Méthode**
1. Tester $0,\pm1,\pm2,\pm\frac12$ (ou le point $a$ imposé par la limite).
2. Diviser par $(X-\lambda)$ : Horner, **identification** ($P=(X-\lambda)(aX^2+bX+c)$, développer, égaler les coefficients) ou regroupement astucieux.
3. Recommencer sur le quotient (degré 2 : $\Delta$).

<details>
<summary>✏️ Correction étape par étape — DS2-20 ex1 : $P=x^4-4x^2+3x+6$, $Q=-2x^3-3x^2+x-2$</summary>

**Étape 1 — Justifier la factorisation par $x+2$.**
- $P(-2)=16-16-6+6=0$ ;
- $Q(-2)=-2(-8)-3(4)+(-2)-2=16-12-2-2=0$.
- $-2$ est racine des deux, donc $(x+2)$ divise $P$ et $Q$ (théorème du cours).

**Étape 2 — Horner sur P** (coefficients `1 0 -4 3 6`, $\lambda=-2$) : $1$ ; $-2$ ; $4-4=0$ ; $0+3=3$ ; $-6+6=0$ → $U=x^3-2x^2+3$.

**Étape 3 — Horner sur Q** (coefficients `-2 -3 1 -2`) : $-2$ ; $4-3=1$ ; $-2+1=-1$ ; $2-2=0$ → $V=-2x^2+x-1$.

**Étape 4 — Contrôle** en développant un coefficient : $(x+2)(-2x^2+x-1)$, terme constant $2\times(-1)=-2$ ✔.
</details>

<details>
<summary>✏️ Correction étape par étape — TD7 ex4.2 (regroupement)</summary>

$x^3-3x^2+x-3$
1. Grouper par paires : $(x^3-3x^2)+(x-3)$.
2. Factoriser chaque paire : $x^2(x-3)+1(x-3)$.
3. Facteur commun : $(x-3)(x^2+1)$.
</details>

---

## C7.5 — Multiplicité

**Méthode** : diviser par $(X-\lambda)$ tant que le reste est nul ; ou calculer $P(\lambda),P'(\lambda),\dots$ jusqu'au premier non nul.

<details>
<summary>✏️ Correction étape par étape — DS2-24 : multiplicité de 2 dans $x^3-12x+16$</summary>

**Méthode 1 — dérivées.**
1. $P(2)=8-24+16=0$ : racine.
2. $P'(x)=3x^2-12$, $P'(2)=0$ : au moins double.
3. $P''(x)=6x$, $P''(2)=12\neq0$ : exactement **double**.

**Méthode 2 — divisions successives.**
1. Horner par $x-2$ (`1 0 -12 16`) : `1 | 2 | -8 | 0` → $(x-2)(x^2+2x-8)$.
2. $x^2+2x-8$ en 2 : $4+4-8=0$, on redivise : $(x-2)(x+4)$.
3. $P=(x-2)^2(x+4)$, et $x+4$ ne s'annule pas en 2 → double.
</details>

<details>
<summary>✏️ Correction étape par étape — cours ex13</summary>

1. $X^2-1=(X-1)(X+1)$ : 1 apparaît une fois → **simple**.
2. $X^2-2X+1=(X-1)^2$ → **double**.
3. $X^3-2X^2+X=X(X^2-2X+1)=X(X-1)^2$ → 1 est **double** (et 0 simple).
</details>

---

## C7.6 — Domaine d'une fraction rationnelle

**Méthode** : $D=\mathbb R\setminus\lbrace$racines du **dénominateur**$\rbrace$. Ne pas simplifier avant de donner le domaine.

<details>
<summary>✏️ Correction étape par étape — $\frac{x^2-4}{x^2-3x+2}$</summary>

**Étape 1 — Ne regarder que le dénominateur.** $x^2-3x+2=0$.

**Étape 2 — Racines.** $\Delta=1$, racines $1$ et $2$.

**Étape 3 — Domaine.** $D=\mathbb R\setminus\lbrace1,2\rbrace$.

**Étape 4 — Piège.** On peut simplifier en $\frac{x+2}{x-1}$, mais **seulement pour $x\neq2$** : le domaine reste $\mathbb R\setminus\lbrace1,2\rbrace$. (Cours ex17 : $\frac{X+1}{X-1}$ a pour domaine $\mathbb R\setminus\lbrace1\rbrace$, le numérateur ne compte pas.)
</details>
