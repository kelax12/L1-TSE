# Chapitre 3 · Techniques de démonstration

> Mathématiques 1 · N. Blacher · TSE
> **Format : fiches méthode « Je veux montrer… ».** Pour chaque forme d'énoncé : la méthode, un exemple, et le **squelette de rédaction à recopier**. 💡 = intuition (ajout hors slides).

Une démonstration est une succession d'implications qui aboutit à un nouveau résultat, en partant d'axiomes ou de résultats déjà prouvés.

> [!TIP]
> 💡 **Comment choisir la méthode : regarde le premier symbole de l'énoncé.**
>
> | L'énoncé commence par… | Première ligne de la copie | Fiche |
> |---|---|---|
> | $\forall x\in E$ | « Soit $x\in E$. » | 1, 2 |
> | $\exists x\in E$ | « Posons $x=\dots$ » ou analyse-synthèse | 3, 4 |
> | $\exists!$ | existence puis unicité | 5 |
> | « … est fausse » | contre-exemple | 6 |
> | $\forall x,\ \exists y$ | « Soit $x$. Posons $y=f(x)$. » | 7 |
> | $P\Rightarrow Q$ | « Supposons $P$. » | 8 |
> | $P\iff Q$ | deux sens | 9 |
> | $A\subset B$, $A=B$ | « Soit $x\in A$. » | 10 |
> | $\forall n\geq n_0$ (lien $n\to n+1$) | récurrence | 11 |
> | énoncé négatif (irrationnel, n'existe pas…) | absurde / contraposée | 12 |

---

### 1 · $\forall x\in E,\ P(x)$ — méthode directe

On prend un élément **générique** (sans rien supposer d'autre) et on prouve $P(x)$.
*Ex.* $\forall x\in\mathbb R,\ x^2+4x+8\geq 3$ : $x^2+4x+8=(x+2)^2+4\geq 4\geq 3$.

```text
Soit x ∈ E.
… (calculs)
Donc P(x). Comme x est quelconque, ∀x ∈ E, P(x).
```

### 2 · $\forall x\in E,\ P(x)$ — disjonction de cas

Si $E=F\cup G$, on traite séparément $x\in F$ et $x\in G$.
*Ex.* $n(n+1)(n+2)$ est multiple de 6 : cas selon le reste de $n$ modulo 2, puis modulo 3.

```text
Soit x ∈ E.
Cas 1 : x ∈ F. … donc P(x).
Cas 2 : x ∈ G. … donc P(x).
Dans tous les cas, P(x).
```

### 3 · $\exists x\in E,\ P(x)$ — exemple explicite

On **exhibe** un élément qui marche. *Ex.* $x=\frac12$ vérifie $x^2<x$.

```text
Posons x = … ∈ E.
Alors … donc P(x).
```

### 4 · $\exists x\in E,\ P(x)$ — analyse-synthèse

- **Analyse** : on suppose $P(a)$ vrai et on en déduit des conditions sur $a$, jusqu'à quelques candidats.
- **Synthèse** : on vérifie chaque candidat. Un seul candidat → on a aussi l'**unicité**.

*Ex.* $\sqrt{x+3}=x$ ⇒ $x\geq 0$ et $x^2-x-3=0$ ⇒ $x=\frac{1+\sqrt{13}}2$ (l'autre racine est négative), qui convient.

```text
Analyse. Supposons a ∈ E tel que P(a). Alors … donc a ∈ {candidats}.
Synthèse. Pour a = …, on vérifie P(a).
Conclusion.
```

### 5 · $\exists!\,x\in E,\ P(x)$ — existence + unicité

Existence par une méthode ci-dessus. Unicité : on suppose deux éléments qui vérifient $P$ et on montre qu'ils sont égaux.
*Ex.* Tout entier naturel a une unique décomposition en produit de nombres premiers.

```text
Existence : …
Unicité : soient x, x' ∈ E tels que P(x) et P(x'). … donc x = x'.
```

### 6 · Montrer qu'une proposition est fausse

On montre sa négation : pour réfuter $\forall x,\ P(x)$, un **contre-exemple** ; pour réfuter $\exists x,\ P(x)$, on prouve $\forall x,\ \neg P(x)$.
*Ex.* « $\forall n\in\mathbb N^*,\ \ln n+\ln(n+1)+\ln(n+2)=\ln(3n+3)$ » : vrai pour $n=1$, mais $n=2$ donne $\ln 24\neq\ln 9$.

```text
Pour x = …, on a non P(x). Donc « ∀x ∈ E, P(x) » est fausse.
```

### 7 · $\forall x,\ \exists y,\ P(x,y)$

Le $y$ **dépend de $x$** : on fixe $x$ d'abord, puis on construit $y$ en fonction de $x$.
*Ex.* $\forall x\in\mathbb Z,\ \exists y\in\mathbb Z,\ x<y$ : $y=x+1$.

```text
Soit x ∈ E. Posons y = (expression en x). Alors y ∈ F et P(x, y).
```

### 8 · Implication $P\Rightarrow Q$

- **Directe** : on suppose $P$, on déduit $Q$. *Ex.* 4 divise $n$ ⇒ $n=4k=2(2k)$ est pair.
- **Contraposée** : on montre $\neg Q\Rightarrow\neg P$. *Ex.* $n^2$ pair ⇒ $n$ pair. Si $n=2k+1$, $n^2=2(2k^2+2k)+1$ est impair.

```text
Supposons P. … Donc Q.
— ou —
Montrons la contraposée. Supposons non Q. … Donc non P.
```

### 9 · Équivalence $P\iff Q$

Chaîne d'équivalences (chaque étape doit être réversible) **ou** double implication.
*Ex.* $x^2=9\iff x=3$ ou $x=-3$ ; $|x+y|=|x|+|y|\iff xy\geq 0$.

```text
(⇒) Supposons P. … donc Q.
(⇐) Supposons Q. … donc P.
```

### 10 · Inclusion et égalité d'ensembles

Inclusion : tout $x\in A$ est dans $B$. Égalité : chaîne $x\in A\iff\dots\iff x\in B$, ou **double inclusion**.
*Ex.* De Morgan : $(A\cap B)^c=A^c\cup B^c$.

```text
Soit x ∈ A. … donc x ∈ B. D'où A ⊂ B.
Réciproquement, soit x ∈ B. … donc x ∈ A. Ainsi A = B.
```

### 11 · Récurrence

Repose sur : $\big(P(n_0)$ et $\forall n\geq n_0,\ P(n)\Rightarrow P(n+1)\big)\Longrightarrow \forall n\geq n_0,\ P(n)$.
*Ex.* $\forall n\geq 3,\ 5^n>4^n+3^n$.

```text
Initialisation : P(n₀) est vraie car …
Hérédité : soit n ≥ n₀ tel que P(n). Alors … (on utilise P(n)) … donc P(n+1).
Conclusion : ∀n ≥ n₀, P(n).
```

> [!TIP]
> 💡 **Les dominos.** L'initialisation fait tomber le premier ; l'hérédité garantit que chaque domino fait tomber le suivant. Sans l'un des deux, rien ne marche. Dans l'hérédité, il **faut utiliser** $P(n)$.

### 12 · Raisonnement par l'absurde

On suppose $\neg P$ et on aboutit à une contradiction.
*Ex.* $\sqrt2\notin\mathbb Q$ : si $\sqrt2=\frac pq$ irréductible, alors $p^2=2q^2$, donc $p$ pair, $p=2k$, donc $q^2=2k^2$ et $q$ pair : contradiction.

```text
Supposons par l'absurde que non P. … contradiction. Donc P.
```

---

> [!CAUTION]
> 🟥 **Pièges classiques**
> - Un exemple ne prouve **jamais** un $\forall$ (mais un contre-exemple suffit à le réfuter).
> - Après « Soit $x$ », ne choisis pas une valeur particulière.
> - En analyse-synthèse, ne saute pas la synthèse : élever au carré crée de fausses solutions.
> - Une chaîne de $\iff$ n'est valable que si chaque étape se lit dans les deux sens.

---

## Notations Σ et Π

$$\sum_{i=n_0}^{N}a_i=a_{n_0}+a_{n_0+1}+\dots+a_N \qquad\qquad \prod_{i=n_0}^{N}a_i=a_{n_0}\times a_{n_0+1}\times\dots\times a_N$$

| Exemple | Valeur | Exemple | Valeur |
|---|---|---|---|
| $\sum_{i=2}^{7} i$ | 27 | $\prod_{i=2}^{5} i$ | 120 |
| $\sum_{j=1}^{5} j^2$ | 55 | $\prod_{j=1}^{3} j^2$ | 36 |
| $\sum_{k=-1}^{3}(2k+1)$ | 15 | $\prod_{m=0}^{2} 6$ | 216 |
| $\sum_{m=0}^{2} 6$ | 18 | | |

> [!TIP]
> 💡 Un Σ est une boucle « pour $i$ de $n_0$ à $N$, ajouter $a_i$ » : il y a $N-n_0+1$ termes. L'indice est muet ($\sum_i a_i=\sum_k a_k$). Si le terme ne dépend pas de l'indice, on ajoute la même valeur $N-n_0+1$ fois.
>
> **À connaître** : $\displaystyle\sum_{i=1}^{n} i=\frac{n(n+1)}{2}$ (utile au ch. 4) et $\displaystyle\prod_{i=1}^{n} i=n!$

---

## ✅ À retenir

- Le premier symbole de l'énoncé dicte la première ligne de la copie.
- $\forall$ : « Soit… » ; $\exists$ : « Posons… » ; $\iff$ : deux sens ; $=$ d'ensembles : double inclusion.
- Récurrence = initialisation + hérédité (en utilisant $P(n)$) + conclusion.
