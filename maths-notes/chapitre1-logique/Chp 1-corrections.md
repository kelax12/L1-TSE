# Chapitre 1 · Logique — corrections

> Énoncés : [Chp 1-exercices.md](Chp%201-exercices.md)

---

## C1.1 — Table de vérité

### Ex A

| $P$ | $Q$ | $\neg P$ | $P\land Q$ | $\neg P\lor(P\land Q)$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | F | V | **V** |
| V | F | F | F | **F** |
| F | V | V | F | **V** |
| F | F | V | F | **V** |

Faux seulement en V/F : c'est la table de $P\Rightarrow Q$.

### Ex B

On pose $A = P\Rightarrow Q$ et $B = R\land\neg P$.

| $P$ | $Q$ | $R$ | $A$ | $\neg P$ | $B$ | $A\Rightarrow B$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | F | F | **F** |
| V | V | F | V | F | F | **F** |
| V | F | V | F | F | F | **V** |
| V | F | F | F | F | F | **V** |
| F | V | V | V | V | V | **V** |
| F | V | F | V | V | F | **F** |
| F | F | V | V | V | V | **V** |
| F | F | F | V | V | F | **F** |

Pièges : l'ordre des 8 lignes, et $A\Rightarrow B$ est **vrai** dès que $A$ est faux (lignes 3-4).

---

## C1.2 — Tautologie / équivalence

### Ex A

| $P$ | $Q$ | $P\Rightarrow Q$ | $P\land(P\Rightarrow Q)$ | $\ldots\Rightarrow Q$ |
|:-:|:-:|:-:|:-:|:-:|
| V | V | V | V | **V** |
| V | F | F | F | **V** |
| F | V | V | F | **V** |
| F | F | V | F | **V** |

Que des V : tautologie.

### Ex B

1. Par les règles (plus rapide qu'une table à 8 lignes) :
$P\Rightarrow(Q\Rightarrow R)\equiv\neg P\lor(\neg Q\lor R)\equiv(\neg P\lor\neg Q)\lor R\equiv\neg(P\land Q)\lor R\equiv(P\land Q)\Rightarrow R$.
(Par table : les deux ne sont fausses que sur la ligne $P$=V, $Q$=V, $R$=F.)

2. **Non.** Contre-exemple : $P,Q,R$ tous faux. Alors $P\Rightarrow Q$ est V, donc $(P\Rightarrow Q)\Rightarrow R$ = V ⇒ F = **F**, alors que $P\Rightarrow(Q\Rightarrow R)$ = **V** (car $P$ faux).
→ Pour montrer que deux propositions **ne sont pas** équivalentes, **une seule ligne** suffit.

---

## C1.3 — Simplifier avec les règles

### Ex A

De Morgan : $\neg(P\land\neg Q)\equiv\neg P\lor\neg\neg Q\equiv\neg P\lor Q\equiv P\Rightarrow Q$.

### Ex B

1. $(\neg P\lor Q)\land(\neg P\lor R)\equiv\neg P\lor(Q\land R)$ (distributivité de $\lor$ sur $\land$) $\equiv P\Rightarrow(Q\land R)$.
2. $\neg(A\Rightarrow B)\equiv A\land\neg B$ :
$(P\lor Q)\land\neg(P\land R)\equiv(P\lor Q)\land(\neg P\lor\neg R)$.

---

## C1.4 — Traduire en formule quantifiée

### Ex A

1. $\forall n\in\mathbb N,\ \exists m\in\mathbb N,\ m>n$.
2. $\forall x\in\mathbb R,\ x^2\geq 0$ (« aucun » = « pour tout, non… »).

### Ex B

1. $\forall y\in\mathbb R_+,\ \exists x\in\mathbb R,\ x^2=y$ — **vrai** ($x=\sqrt y$).
2. $\exists M\in\mathbb R,\ \forall x\in\mathbb R,\ \sin x\leq M$ — **vrai** ($M=1$). Ici $M$ ne dépend pas de $x$ → $\exists$ **avant** $\forall$.
3. $\forall x\in\mathbb R,\ x>0\Rightarrow x\leq x^2$ (ou $\forall x\in\mathbb R_+^*,\ x\leq x^2$) — **faux** : $x=\tfrac12$ donne $\tfrac12>\tfrac14$.
4. La 1ʳᵉ est vraie (le $x$ dépend de $y$) ; la 2ᵉ est **fausse** (un seul $x$ dont le carré vaudrait tous les $y$ à la fois : impossible, ex. $y=0$ et $y=1$). **L'ordre des quantificateurs change le sens.**

---

## C1.5 — Négation d'une proposition quantifiée

### Ex A

1. $\exists x\in\mathbb R,\ \forall y\in\mathbb R,\ x+y\leq 0$.
2. $\forall n\in\mathbb N,\ \exists m\in\mathbb N,\ m>n$.

### Ex B

1. $\exists x,y\in\mathbb R,\ x+y>4\land x\leq 2\land y\leq 2$.
   La proposition de départ est **vraie** : si $x\leq2$ et $y\leq2$ alors $x+y\leq4$ (c'est la contraposée).
2. $\exists\varepsilon>0,\ \forall N\in\mathbb N,\ \exists n\in\mathbb N,\ n\geq N\land|u_n-\ell|\geq\varepsilon$.
   Pièges : $\varepsilon>0$ **reste** $\varepsilon>0$ ; l'implication devient un **et** ; $<$ devient $\geq$.
3. Traduction : $\forall x\in\mathbb R_+^*,\ \exists y\in\mathbb R,\ y^2=x$.
   Négation : $\exists x\in\mathbb R_+^*,\ \forall y\in\mathbb R,\ y^2\neq x$.

---

## C1.6 — Énigme logique

### Ex A

Traduction : $A\iff\neg B$ et $B\iff(A\iff B)$.
Supposons $B$ honnête : alors $A\iff B$ est vrai donc $A$ honnête ; mais $A$ dit que $B$ ment : contradiction. Donc **B menteur**. Sa phrase est fausse : A et B sont de types différents, donc **A honnête**.
Vérification : A dit « B menteur » → vrai ✓ ; B dit « même type » → faux ✓.

### Ex B

Traduction : $A\iff\neg B$ ; $B\iff(A\iff C)$ ; $C\iff A$.
- La 3ᵉ donne $C$ et $A$ toujours de même valeur, donc $A\iff C$ est **vrai**, donc (2ᵉ) **B honnête**.
- Alors (1ʳᵉ) A dit une chose fausse : **A menteur**.
- Puis $C\iff A$ : **C menteur**.

Vérification : A « B menteur » → faux, A ment ✓. B « A et C même type » → les deux menteurs, vrai, B honnête ✓. C « A honnête » → faux, C ment ✓.

Réflexe DS : chercher d'abord la déclaration qui donne une info **directe** (ici celle de C, qui lie C à A), au lieu de tester les 8 cas.
