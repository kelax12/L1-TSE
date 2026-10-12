# Chapitre 2 · Théorie des ensembles

> Mathématiques 1 · N. Blacher · TSE
> **Format : dictionnaire de notations.** Chercher une notation dans le tableau, puis les schémas et le lien avec la logique. 💡 = intuition (ajout hors slides).

**Sommaire** : [Dictionnaire](#-dictionnaire-des-notations) · [Intuitions](#-intuitions) · [Schémas](#-schémas) · [Nombres et intervalles](#-ensembles-de-nombres-et-intervalles) · [Logique ↔ ensembles](#-logique--ensembles) · [Exemples](#️-exemples-corrigés)

---

## 📖 Dictionnaire des notations

| Notation | Se lit | Définition | Exemple / ⚠️ piège |
|---|---|---|---|
| $x\in E$ | $x$ appartient à $E$ | **Ensemble** = collection d'objets distincts, ses **éléments** | $x\notin E$ sinon |
| $\lbrace 2,3,5,7\rbrace$ | par extension | on écrit tous les éléments | $\lbrace 2,3,4\rbrace=\lbrace 3,2,4\rbrace$ : l'ordre ne compte pas |
| $\lbrace n\in\mathbb N : P(n)\rbrace$ | par compréhension | les éléments qui vérifient $P$ | nombres premiers $\leq 8$ |
| $\varnothing$ | ensemble vide | ne contient aucun élément (admis) | ⚠️ $\lbrace\varnothing\rbrace\neq\varnothing$ : 1 élément |
| $A\subset B$ | $A$ inclus dans $B$ | tout élément de $A$ est dans $B$ (**sous-ensemble**, **partie**) | $\varnothing\subset E$ et $E\subset E$ toujours |
| $\mathcal P(E)$ | parties de $E$ | $\lbrace A : A\subset E\rbrace$ | $\mathrm{Card}\,\mathcal P(E)=2^{\mathrm{Card}\,E}$ |
| $E\times F$ | produit cartésien | $\lbrace (a,b) : a\in E,\ b\in F\rbrace$ | ⚠️ $E\times F\neq F\times E$ ; $(a,b)\neq\lbrace a,b\rbrace$ |
| $\mathrm{Card}(E)$ ou #E | cardinal | nombre d'éléments (ensemble fini) | $\mathrm{Card}(E\times F)=\mathrm{Card}E\cdot\mathrm{Card}F$ |
| $A\cap B$ | intersection | éléments dans $A$ **et** dans $B$ | **disjoints** si $A\cap B=\varnothing$ |
| $A\cup B$ | union | éléments dans $A$ **ou** dans $B$ | si $A\subset B$ : $A\cap B=A$, $A\cup B=B$ |
| $A^c$, $\complement_E A$, $\bar A$ | complémentaire | éléments de $E$ hors de $A$ | $A\cap A^c=\varnothing$, $A\cup A^c=E$ |
| $A\setminus B$ | $A$ privé de $B$ | éléments de $A$ hors de $B$ | aussi noté $A-B$ |

---

## 💡 Intuitions

> [!TIP]
> **∈ ou ⊂ ?** Un ensemble est un **sac**. $x\in E$ : l'objet $x$ est dans le sac. $A\subset E$ : on compare **deux sacs**.
> Réflexe : à gauche de $\in$ un **élément**, à gauche de $\subset$ un **ensemble**. Donc $\lbrace 3\rbrace\subset E\iff 3\in E$.

> [!TIP]
> **∅ et {∅}.** $\varnothing$ = un sac vide. $\lbrace\varnothing\rbrace$ = un sac qui contient un sac vide : il a 1 élément.

> [!TIP]
> **Pourquoi $\mathrm{Card}\,\mathcal P(E)=2^n$ ?** Pour fabriquer une partie, on décide pour chaque élément : **dedans ou dehors**. $n$ choix binaires → $2^n$ parties (vide et $E$ compris).
> Ex. $E=\lbrace 1,2,a\rbrace$ : $\mathcal P(E)=\lbrace\varnothing,\lbrace 1\rbrace,\lbrace 2\rbrace,\lbrace a\rbrace,\lbrace 1,2\rbrace,\lbrace 1,a\rbrace,\lbrace 2,a\rbrace,E\rbrace$, soit $2^3=8$.

> [!TIP]
> **Produit cartésien = menu.** 3 entrées × 4 plats = 12 menus. $\mathbb R\times\mathbb R=\mathbb R^2$ est le plan : un point = un couple $(x,y)$, et $(1,2)\neq(2,1)$.

---

## 🖼 Schémas

| Opération | Ce qu'on garde |
|---|---|
| $A\cap B$ | la zone commune aux deux cercles |
| $A\cup B$ | les deux cercles entiers |
| $A^c$ | tout $E$ sauf le cercle $A$ |
| $A\setminus B$ | le cercle $A$ sans la zone commune |

---

## 🔢 Ensembles de nombres et intervalles

$$\mathbb N=\lbrace 0,1,2,\dots\rbrace\ \subset\ \mathbb Z=\lbrace\dots,-1,0,1,\dots\rbrace\ \subset\ \mathbb Q=\left\lbrace \tfrac pq : p\in\mathbb Z,\ q\in\mathbb Z^*\right\rbrace\ \subset\ \mathbb R$$

$\mathbb R$ « bouche les trous » de $\mathbb Q$ pour obtenir une ligne continue.

| Intervalle | Ensemble |
|---|---|
| $[a,b]$ | $a\leq x\leq b$ |
| $[a,b[$ | $a\leq x<b$ |
| $]a,b]$ | $a<x\leq b$ |
| $]a,b[$ | $a<x<b$ |
| $]-\infty,b]$, $]-\infty,b[$ | $x\leq b$, $x<b$ |
| $[a,+\infty[$, $]a,+\infty[$ | $x\geq a$, $x>a$ |

Crochet tourné vers l'extérieur = borne exclue. *(Coquille des slides : lire $x$ et non $y$.)*

---

## 🔗 Logique ↔ ensembles

Si $A=\lbrace x\in E : P(x)\rbrace$ et $B=\lbrace x\in E : Q(x)\rbrace$ :

| Ensembles | Logique |
|:-:|:-:|
| $A\cap B$ | $P\land Q$ |
| $A\cup B$ | $P\lor Q$ |
| $A^c$ | $\neg P$ |
| $A\subset B$ | $P\Rightarrow Q$ |

> [!IMPORTANT]
> **Théorème.** Pour $A, B, C$ parties de $E$ :
> - **Double inclusion** : $A=B\iff(A\subset B$ et $B\subset A)$
> - **Distributivité** : $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$ et $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$
> - **De Morgan** : $(A\cap B)^c=A^c\cup B^c$ et $(A\cup B)^c=A^c\cap B^c$
> - $(A^c)^c=A$

---

## ✏️ Exemples corrigés

<details>
<summary>Voir les corrigés (Ex. 3 à 12)</summary>

- **Ex. 3** : $A=B=C=D=\lbrace 2,3,4\rbrace$ ; $E$ = rationnels de $]1,5[$ ; $F=]1,5[$ ; $G=\varnothing$ → **4 ensembles différents**.
- **Ex. 4** ($E=\lbrace 1,2,3,\lbrace 3\rbrace\rbrace$) : $3\in E$ ✅ · $3\subset E$ ❌ · $\lbrace 3\rbrace\in E$ ✅ · $\lbrace 3\rbrace\subset E$ ✅
- **Ex. 5** : $\varnothing$ est le seul ensemble qui n'a qu'un sous-ensemble.
- **Ex. 8** : $\mathrm{Card}\,\varnothing=0$, $\mathrm{Card}\lbrace 0\rbrace=1$, $\mathrm{Card}\lbrace\mathbb N\rbrace=1$.
- **Ex. 10** : groupes d'au moins 2 personnes parmi 270 : $2^{270}-270-1$ (on retire le vide et les 270 singletons).
- **Ex. 11** : $[1,0]=\varnothing$, $[1,1]=\lbrace 1\rbrace$, $]1,1]=\varnothing$.
- **Ex. 12** ($a<b$) : $]a,b[\ \subset\ ]a,b]\ \subset\ ]a,+\infty[\ \subset\ [a,+\infty[$.
</details>

---

## ✅ À retenir

- $\in$ : élément ; $\subset$ : ensemble. $\lbrace\varnothing\rbrace\neq\varnothing$.
- $\mathrm{Card}\,\mathcal P(E)=2^n$ ; $\mathrm{Card}(E\times F)=\mathrm{Card}E\times\mathrm{Card}F$.
- ∩ ↔ et, ∪ ↔ ou, $^c$ ↔ non, ⊂ ↔ ⇒. De Morgan marche pareil des deux côtés.
- Prouver $A=B$ : **double inclusion**.
