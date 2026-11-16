# Chapitre 7 · Puissances et polynômes — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 7-competences.md](Chp%207-competences.md) · [README](../competences-README.md)

## Sommaire

- C7.1 — Puissances réelles
- C7.2 — Degré et coefficients
- C7.3 — Horner
- C7.4 — Racine évidente et factorisation
- C7.5 — Multiplicité
- C7.6 — Domaine d'une fraction rationnelle

---

## C7.1 — Puissances réelles

**Méthode** : tout réécrire en $a^\alpha=e^{\alpha\ln a}$ ($a>0$), puis utiliser les règles ($a^\alpha a^\beta=a^{\alpha+\beta}$, $(a^\alpha)^\beta=a^{\alpha\beta}$…). Domaine : $\alpha\in\mathbb N^*$ → $\mathbb R$ ; $\alpha\in\mathbb Z$ → $\mathbb R^*$ ; sinon → $\mathbb R_+^*$.

---

## C7.2 — Degré et coefficients

**Méthode** : somme → additionner les coefficients de même degré, $\deg\leq\max$. Produit → $\deg(PQ)=\deg P+\deg Q$, coefficient dominant = produit des dominants ; coefficient de $X^k$ = somme des $a_ib_j$ avec $i+j=k$.

---

## C7.3 — Horner

**Méthode** : ligne des coefficients (**sans oublier les 0**), on descend le premier, puis « × λ, + coefficient suivant ». Dernier nombre = reste $=P(\lambda)$ ; s'il vaut 0, $\lambda$ est racine et on a $P=(X-\lambda)Q$.

---

## C7.4 — Racine évidente et factorisation

**Méthode**
1. Tester $0,\pm1,\pm2,\pm\frac12$ (ou le point $a$ imposé par la limite).
2. Diviser par $(X-\lambda)$ : Horner, **identification** ($P=(X-\lambda)(aX^2+bX+c)$, développer, égaler les coefficients) ou regroupement astucieux.
3. Recommencer sur le quotient (degré 2 : $\Delta$).

---

## C7.5 — Multiplicité

**Méthode** : diviser par $(X-\lambda)$ tant que le reste est nul ; ou calculer $P(\lambda),P'(\lambda),\dots$ jusqu'au premier non nul.

---

## C7.6 — Domaine d'une fraction rationnelle

**Méthode** : $D=\mathbb R\setminus\lbrace$racines du **dénominateur**$\rbrace$. Ne pas simplifier avant de donner le domaine.
