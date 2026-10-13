# Chapitre 1 · Logique — exercices d'entraînement (style annales DS1)

> Compétences : [Chp 1-competences.md](Chp%201-competences.md)
>
> Pour chaque compétence : **Ex A** = basique (appliquer la méthode), **Ex B** = vérification (le piège typique des annales).
> Corrections : [Chp 1-corrections.md](Chp%201-corrections.md). Fais l'exercice sur papier **avant** de regarder la correction. Si tu réussis les deux B sans regarder → coche la compétence.

---

## C1.1 — Table de vérité

**Ex A.** Dresser la table de vérité de $\neg P\lor(P\land Q)$. À quelle proposition simple est-elle équivalente ?

**Ex B (3 variables, comme DS23 ex1.3).** Dresser la table de vérité de $(P\Rightarrow Q)\Rightarrow(R\land\neg P)$.

---

## C1.2 — Tautologie / équivalence

**Ex A.** Montrer que $\big(P\land(P\Rightarrow Q)\big)\Rightarrow Q$ est une tautologie.

**Ex B.**
1. Montrer que $P\Rightarrow(Q\Rightarrow R)$ a la même table de vérité que $(P\land Q)\Rightarrow R$.
2. Est-ce que $(P\Rightarrow Q)\Rightarrow R$ a aussi la même table ? Justifier.

---

## C1.3 — Simplifier avec les règles

**Ex A.** Simplifier $\neg(P\land\neg Q)$ et reconnaître une implication.

**Ex B.**
1. Montrer sans table que $(P\Rightarrow Q)\land(P\Rightarrow R)\equiv P\Rightarrow(Q\land R)$.
2. Écrire la négation de $(P\lor Q)\Rightarrow(P\land R)$ sans le symbole $\Rightarrow$, avec des $\neg$ uniquement devant les lettres.

---

## C1.4 — Traduire en formule quantifiée

**Ex A.** Traduire :
1. « Tout entier naturel admet un entier naturel strictement plus grand. »
2. « Aucun réel n'a un carré strictement négatif. »

**Ex B.** Traduire, puis dire si c'est vrai :
1. « Tout réel positif est le carré d'un réel. »
2. « Il existe un réel supérieur ou égal à tous les sinus. »
3. « Tout réel strictement positif est inférieur à son carré. »
4. Comparer $\forall y\in\mathbb R_+,\ \exists x\in\mathbb R,\ x^2=y$ et $\exists x\in\mathbb R,\ \forall y\in\mathbb R_+,\ x^2=y$.

---

## C1.5 — Négation d'une proposition quantifiée

**Ex A.** Écrire la négation de :
1. $\forall x\in\mathbb R,\ \exists y\in\mathbb R,\ x+y>0$
2. $\exists n\in\mathbb N,\ \forall m\in\mathbb N,\ m\leq n$

**Ex B.** Écrire la négation de :
1. $\forall x,y\in\mathbb R,\ \big(x+y>4\Rightarrow(x>2\lor y>2)\big)$. Laquelle des deux (la proposition ou sa négation) est vraie ?
2. $\forall\varepsilon>0,\ \exists N\in\mathbb N,\ \forall n\in\mathbb N,\ \big(n\geq N\Rightarrow|u_n-\ell|<\varepsilon\big)$
3. La phrase : « Tout réel strictement positif possède une racine carrée réelle. » (traduire d'abord)

---

## C1.6 — Énigme logique

**Ex A.** Sur une île, chacun est soit honnête (dit toujours vrai), soit menteur (ment toujours).
A dit : « B est un menteur. » B dit : « A et moi sommes du même type. » Qui est quoi ?

**Ex B.** Même île, trois habitants.
A dit : « B est un menteur. »
B dit : « A et C sont du même type. »
C dit : « A est honnête. »
Déterminer la nature de chacun (justifier par hypothèse + contradiction, puis vérifier).

