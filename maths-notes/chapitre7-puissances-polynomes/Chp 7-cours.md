# Chapitre 7 · Puissances, polynômes et fonctions rationnelles

> Mathématiques 1 · N. Blacher · TSE
>
> **Format : méthode Cornell.** Colonne de gauche = question à se poser (cache la droite pour t'interroger), droite = réponse du cours, résumé en bas. 💡 = intuition (ajout hors slides).

## 1. Puissances

| ❓ Question | 📝 Réponse |
|---|---|
| **Racine $q$-ième ?** | Pour $a\in\mathbb R_+$, $q\in\mathbb N^*$ : l'**unique** $x\geq 0$ tel que $x^q=a$. Notée $\sqrt[q]{a}=a^{1/q}$. Ex. $16^{1/2}=4$, $125^{1/3}=5$. |
| **Puissance rationnelle ?** | $a>0$, $p\in\mathbb Z$, $q\in\mathbb N^*$ : $a^{p/q}=(a^p)^{1/q}=(a^{1/q})^p$. Ex. $125^{2/3}=5^2=25$. Ne dépend pas de l'écriture de la fraction. |
| **Puissance réelle ?** | $a>0$, $\alpha\in\mathbb R$ : $\boxed{a^\alpha=e^{\alpha\ln a}}$. Si $\alpha>0$ : $0^\alpha=0$. Donc $\ln(a^\alpha)=\alpha\ln a$ et $(e^b)^\beta=e^{b\beta}$. |
| **Règles de calcul ?** | $a,b>0$ : $a^\alpha a^\beta=a^{\alpha+\beta}$, $\frac{a^\alpha}{a^\beta}=a^{\alpha-\beta}$, $(a^\alpha)^\beta=a^{\alpha\beta}$, $(ab)^\alpha=a^\alpha b^\alpha$, $\left(\frac ab\right)^\alpha=\frac{a^\alpha}{b^\alpha}$. |
| ⚠️ **Pour quels $a$ est-ce défini ?** | Dépend de $\alpha$ : $\alpha\in\mathbb N^*$ → tout $a\in\mathbb R$ ; $\alpha\in\mathbb Z$ → $a\in\mathbb R^*$ ; $\alpha\in\mathbb R$ quelconque → $a\in\mathbb R_+^*$ (et $0^\alpha=0$ si $\alpha>0$). |
| 💡 **Pourquoi en éco ?** | Cobb-Douglas $P(K,L)=cK^\alpha L^\beta$ avec $\alpha=\frac13$ ou même $\alpha=\frac{\sqrt2}{\pi}$ : il faut donner un sens à $K^\alpha$ pour $\alpha$ réel. |

## 2. Polynômes

| ❓ Question | 📝 Réponse |
|---|---|
| **Polynôme ?** | Fonction $x\mapsto\sum_{i=0}^n a_ix^i=a_nx^n+\dots+a_1x+a_0$, coefficients réels. Ensemble noté $\mathbb R[X]$. Les coefficients sont **uniques**. Polynôme nul : tous les coefficients nuls. |
| **Degré, coefficient dominant ?** | $P\neq0$ s'écrit avec $a_n\neq0$ : $\deg P=n$, $a_n$ = coefficient dominant. Convention $\deg 0=-\infty$. $\mathbb R_n[X]$ = polynômes de degré $\leq n$. |
| **Degré d'un multiple ?** | $\lambda\neq 0$ : $\deg(\lambda P)=\deg P$ (faux si $\lambda=0$). |
| **Degré d'une somme ?** | $\deg(P+Q)\leq\max(\deg P,\deg Q)$ (inégalité : les termes dominants peuvent s'annuler). |
| **Degré d'un produit ?** | $\deg(PQ)=\deg P+\deg Q$. Coefficient de $X^i$ : $c_i=a_0b_i+a_1b_{i-1}+\dots+a_ib_0$. |
| **Dérivée ?** | $P'=\sum_{i=1}^n ia_iX^{i-1}$, encore un polynôme. $\deg P^{(k)}=\deg P-k$ si $k\leq\deg P$, $-\infty$ sinon. |
| **Division euclidienne ?** | $A,B\neq 0$ : il existe un **unique** couple $(Q,R)$ avec $A=BQ+R$ et $\deg R<\deg B$. |
| **Reste par $X-\alpha$ ?** | C'est **$P(\alpha)$** (une constante, car $\deg R<1$). |
| **Racine ?** | $\lambda$ racine de $P$ si $P(\lambda)=0$. **Théorème** : $\lambda$ racine $\iff (X-\lambda)$ divise $P$. |
| **Combien de racines ?** | $\deg P=n\geq 0$ ⇒ au plus $n$ racines distinctes (preuve par récurrence sur $n$). Réciproque fausse : $X^{10}$ n'a qu'une racine. |
| **Multiplicité ?** | Ordre $k$ de $\lambda$ : $(X-\lambda)^k$ divise $P$ mais pas $(X-\lambda)^{k+1}$. ⇔ $P(\lambda)=P'(\lambda)=\dots=P^{(k-1)}(\lambda)=0$ et $P^{(k)}(\lambda)\neq0$. Ex. $X^3-2X^2+X=X(X-1)^2$ : racines $0$ (simple) et $1$ (double). |
| **Polynôme scindé ?** | Si $P$ de degré $n$ a $n$ racines réelles comptées avec multiplicité : $P=a_n(X-\lambda_1)\cdots(X-\lambda_n)$. Degré 2 : $\Delta>0$ → $a(X-x_1)(X-x_2)$ ; $\Delta=0$ → $a(X-x_0)^2$ ; $\Delta<0$ → pas factorisable en degré 1. |
| 💡 **Trouver les racines ?** | Formules pour degré 1, 2 (3, 4 très longues), **aucune** à partir de 5. Mais **vérifier** qu'un nombre est racine est facile → on cherche une **racine évidente** ($0,\pm1,\pm2,\frac12$…) puis on divise. |

## 3. Méthode de Horner

> [!TIP]
> **But** : diviser $P=a_nX^n+\dots+a_0$ par $(X-\lambda)$ en une ligne. On écrit les coefficients, on descend $a_n$, puis **on multiplie par $\lambda$ et on ajoute au coefficient suivant**. Le dernier nombre est le reste $=P(\lambda)$, les autres sont les coefficients du quotient.

Exemple du cours : $P=3X^3+5X^2-4X+7$ par $X-2$.

| | $3$ | $5$ | $-4$ | $7$ |
|---|:-:|:-:|:-:|:-:|
| $\times 2$ | | $6$ | $22$ | $36$ |
| | **3** | **11** | **18** | **43** = reste |

→ $P=(X-2)(3X^2+11X+18)+43$, et $P(2)=43$.

⚠️ Penser aux **coefficients nuls** ($x^6+2x^5-x^2$ → `1 2 0 0 -1 …`) et à $X+1=X-(-1)$ → $\lambda=-1$.

<details>
<summary>✏️ Exemples corrigés (Ex. 16)</summary>

- $2X^4-3X^3+4X^2-5X+6$ par $X-2$ : `2 | 1 | 6 | 7 | 20` → $Q=2X^3+X^2+6X+7$, reste $20$.
- $X^3+2X^2-5X+1$ par $X+1$ ($\lambda=-1$) : `1 | 1 | -6 | 7` → $Q=X^2+X-6$, reste $7$.
</details>

## 4. Fonctions rationnelles

| ❓ Question | 📝 Réponse |
|---|---|
| **Définition ?** | $R=\frac PQ$ avec $P,Q\in\mathbb R[X]$, $Q\neq0$. $D_R=\mathbb R$ **privé des racines de $Q$** (pas de $P$ !). Ex. $\frac{X+1}{X-1}$ : $D=\mathbb R\setminus\lbrace 1\rbrace$. |
| **Polynôme = fraction rationnelle ?** | Oui ($Q=1$). |

---

## 🔁 Vrai / faux du cours

| Affirmation | | Pourquoi |
|---|:-:|---|
| $X^5$ est un polynôme | ✅ | |
| Si $P\in\mathbb R_2[X]$, $P$ a 2 racines | ❌ | $X^2+1$ n'en a aucune |
| $P\in\mathbb R_2[X]$ ⇒ au plus 2 racines distinctes | ✅ | si $P\neq 0$ (le polynôme nul a une infinité de racines) |
| Au plus 2 racines distinctes ⇒ $P\in\mathbb R_2[X]$ | ❌ | $X^3$ n'a qu'une racine |
| $\deg(\lambda P)=\deg P$ pour tout $\lambda\in\mathbb R$ | ❌ | $\lambda=0$ |
| La dérivée d'un polynôme est un polynôme | ✅ | |
| $(X-\lambda)\mid P$ ⇒ $\lambda$ racine | ✅ | |

---

> [!IMPORTANT]
> **📌 Résumé.** $a^\alpha=e^{\alpha\ln a}$ pour $a>0$ ; le domaine de $a^\alpha$ dépend de $\alpha$. Pour les polynômes : $\deg(PQ)=\deg P+\deg Q$, $\deg(P+Q)\leq\max$. **Reste de $P$ par $X-\alpha$ = $P(\alpha)$**, donc $\alpha$ racine ⇔ $(X-\alpha)\mid P$. Horner donne quotient et reste d'un coup : c'est l'outil qui sert aux limites $\frac00$ du chapitre 8.
