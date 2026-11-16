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
<summary>✏️ Entraînement — cours ex2-3</summary>

$125^{2/3}=(125^{1/3})^2=25$. $\ln(x^{\sqrt2})=\sqrt2\ln x$ ($x>0$). $x\mapsto x^{1/3}$ (au sens du cours) est défini sur $\mathbb R_+$.
</details>

---

## C7.2 — Degré et coefficients

**Méthode** : somme → additionner les coefficients de même degré, $\deg\leq\max$. Produit → $\deg(PQ)=\deg P+\deg Q$, coefficient dominant = produit des dominants ; coefficient de $X^k$ = somme des $a_ib_j$ avec $i+j=k$.

<details>
<summary>✏️ Entraînement — cours ex7-8</summary>

$P=\frac{X^4}{2}-X^3+5X-2$, $Q=X^2-3X^4+2X+1$.
- $6P+Q$ : coefficient de $X^4$ : $3-3=0$ → le degré **baisse** ; coefficient de $X^3$ : $-6$ → $\deg=3$, dominant $-6$.
- $6P\times Q$, coefficient de $X^5$ : paires de degrés $(4,1),(3,2),(1,4)$ dans $6P=3X^4-6X^3+30X-12$ : $3\cdot2+(-6)\cdot1+30\cdot(-3)=-90$.
</details>

---

## C7.3 — Horner

**Méthode** : ligne des coefficients (**sans oublier les 0**), on descend le premier, puis « × λ, + coefficient suivant ». Dernier nombre = reste $=P(\lambda)$ ; s'il vaut 0, $\lambda$ est racine et on a $P=(X-\lambda)Q$.

<details>
<summary>✏️ Entraînement — TD8 ex2 / DS2-21 ex2</summary>

$x^3-x^2-x-2$ par $x-2$ : `1 | 1 | 1 | 0` → $(x-2)(x^2+x+1)$.

$x^6+2x^5+0x^4+0x^3-x^2+5x+14$ par $x+2$ ($\lambda=-2$) : `1 | 0 | 0 | 0 | -1 | 7 | 0` → $(x+2)(x^5-x+7)$.
</details>

---

## C7.4 — Racine évidente et factorisation

**Méthode**
1. Tester $0,\pm1,\pm2,\pm\frac12$ (ou le point $a$ imposé par la limite).
2. Diviser par $(X-\lambda)$ : Horner, **identification** ($P=(X-\lambda)(aX^2+bX+c)$, développer, égaler les coefficients) ou regroupement astucieux.
3. Recommencer sur le quotient (degré 2 : $\Delta$).

<details>
<summary>✏️ Entraînement — DS2-20 ex1 (énoncé + corrigé)</summary>

$P=x^4-4x^2+3x+6$, $Q=-2x^3-3x^2+x-2$. **Justifier** $P=(x+2)U$, $Q=(x+2)V$ : $P(-2)=16-16-6+6=0$ et $Q(-2)=16-12-2-2=0$, donc $-2$ racine des deux, donc $(x+2)$ divise $P$ et $Q$.

Horner ($\lambda=-2$) : $P$ : `1 | -2 | 0 | 3 | 0` → $U=x^3-2x^2+3$. $Q$ : `-2 | 1 | -1 | 0` → $V=-2x^2+x-1$.
</details>

<details>
<summary>✏️ Entraînement — TD7 ex4.2 (regroupement)</summary>

$x^3-3x^2+x-3=x^2(x-3)+(x-3)=(x-3)(x^2+1)$.
</details>

---

## C7.5 — Multiplicité

**Méthode** : diviser par $(X-\lambda)$ tant que le reste est nul ; ou calculer $P(\lambda),P'(\lambda),\dots$ jusqu'au premier non nul.

<details>
<summary>✏️ Entraînement — cours ex13 / DS2-24 ex3</summary>

$X^2-1$ : 1 simple. $X^2-2X+1=(X-1)^2$ : double. $X^3-2X^2+X=X(X-1)^2$ : double.

$x^3-12x+16$ en 2 : $P(2)=0$, $P'=3x^2-12$, $P'(2)=0$, $P''=6x$, $P''(2)=12\neq0$ → racine **double** : $(x-2)^2(x+4)$.
</details>

---

## C7.6 — Domaine d'une fraction rationnelle

**Méthode** : $D=\mathbb R\setminus\lbrace$racines du **dénominateur**$\rbrace$. Ne pas simplifier avant de donner le domaine.

<details>
<summary>✏️ Entraînement — cours ex17</summary>

$\frac{X+1}{X-1}$ : $D=\mathbb R\setminus\lbrace1\rbrace$ (et non $\setminus\lbrace -1,1\rbrace$). $\frac{x^2-4}{x^2-3x+2}$ : $D=\mathbb R\setminus\lbrace 1,2\rbrace$, même si la fraction se simplifie en $\frac{x+2}{x-1}$.
</details>
