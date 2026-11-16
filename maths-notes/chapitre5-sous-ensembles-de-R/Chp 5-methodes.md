# Chapitre 5 · Sous-ensembles de ℝ — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 5-competences.md](Chp%205-competences.md) · [README](../competences-README.md)

## Sommaire

- C5.1 — Majoré / minoré, max / min
- C5.2 — Trouver le sup / inf
- C5.3 — Prouver $U=\sup E$ (définition ou ε)
- C5.4 — Prouver $U=\sup E$ par une suite
- C5.5 — Vrai/faux sur max, sup, majorants
- C5.6 — Limite d'une suite monotone et sup / inf

---

## C5.1 — Majoré / minoré, max / min

**Méthode**
1. Décrire l'ensemble (intervalle, valeurs d'une suite, image d'une fonction : étudier les variations).
2. Majorant : trouver $M$ avec $x\leq M$ pour tout $x\in E$. **Non majoré** : montrer que $\forall M,\ \exists x\in E,\ x>M$.
3. Max : le majorant doit **appartenir** à $E$ (valeur atteinte).

---

## C5.2 — Trouver le sup / inf

**Méthode**
1. Si l'ensemble est $\lbrace u_n\rbrace$ avec $(u_n)$ monotone : le sup (ou inf) est soit le premier terme, soit la **limite**.
2. Si c'est l'image d'une fonction : variations + limites aux bornes.
3. Vérifier ensuite par C5.3 ou C5.4.

---

## C5.3 — Prouver $U=\sup E$ (définition ou ε)

**Méthode**
1. **(1)** Montrer que $U$ majore $E$ : « Soit $x\in E$, … $x\leq U$ ».
2. **(2)** « Soit $\varepsilon>0$ ». Trouver $a_\varepsilon\in E$ avec $U-\varepsilon<a_\varepsilon$ (résoudre en $n$ ou $x$, comme C4.11).
3. Pour $\inf$ : minorant + $a_\varepsilon<L+\varepsilon$.

---

## C5.4 — Prouver $U=\sup E$ par une suite

**Méthode** : (1) $U$ majore $E$ ; (2) exhiber une suite $(a_n)$ **d'éléments de $E$** qui tend vers $U$.

---

## C5.5 — Vrai/faux sur max, sup, majorants

**Méthode** : contre-exemples types à avoir en tête : $[0,1[$ (sup non atteint), $]0,1]$ (pas de min), $\mathbb N$ (non majoré), $\varnothing$ (ni sup ni inf), un singleton ($\sup=\inf$), $\frac{(-1)^n}{n+1}$.

---

## C5.6 — Limite d'une suite monotone et sup / inf

**Méthode** : croissante majorée ⇒ $\lim u_n=\sup\lbrace u_n\rbrace$ ; décroissante minorée ⇒ $\lim=\inf\lbrace u_n\rbrace$. Sert dans les deux sens : calculer un sup via une limite, ou une limite via un sup.
