# Chapitre 5 · Sous-ensembles de ℝ — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 5-cours.md](Chp%205-cours.md)
>
> ⚠️ Ni TD ni annale sur ce chapitre pour l'instant : compétences tirées du **cours**. Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C5.1 — Déterminer si un ensemble est majoré / minoré, et trouver ses max / min
- [ ] C5.2 — Trouver le sup / inf d'un ensemble défini par une suite ou une fonction
- [ ] C5.3 — Prouver que $U=\sup E$ par la définition ou la caractérisation ε
- [ ] C5.4 — Prouver que $U=\sup E$ par une suite (caractérisation séquentielle)
- [ ] C5.5 — Répondre à un vrai/faux sur max, sup, majorants (contre-exemple)
- [ ] C5.6 — Relier la limite d'une suite monotone à un sup / inf

---

## C5.1 — Majoré / minoré, max / min

**Méthode**
1. Décrire l'ensemble (intervalle, valeurs d'une suite, image d'une fonction : étudier les variations).
2. Majorant : trouver $M$ avec $x\leq M$ pour tout $x\in E$. **Non majoré** : montrer que $\forall M,\ \exists x\in E,\ x>M$.
3. Max : le majorant doit **appartenir** à $E$ (valeur atteinte).

<details>
<summary>✏️ Entraînement</summary>

$E=\lbrace\frac5{n+1} : n\in\mathbb N\rbrace$ : la suite décroît, donc $\max E=5$ ($n=0$), minorée par 0, pas de minimum ($\frac5{n+1}>0$ ne vaut jamais 0). $\mathbb N$ n'est pas majoré : pour tout $M$, $n=E(|M|)+1>M$.
</details>

---

## C5.2 — Trouver le sup / inf

**Méthode**
1. Si l'ensemble est $\lbrace u_n\rbrace$ avec $(u_n)$ monotone : le sup (ou inf) est soit le premier terme, soit la **limite**.
2. Si c'est l'image d'une fonction : variations + limites aux bornes.
3. Vérifier ensuite par C5.3 ou C5.4.

<details>
<summary>✏️ Entraînement — cours ex4</summary>

$\inf\lbrace\frac5{n+1}\rbrace=0$ (limite, non atteinte). $\sup\lbrace -e^{-x} : x\in\mathbb R\rbrace=0$ : $-e^{-x}<0$ et $-e^{-x}\to 0$ quand $x\to+\infty$.
</details>

---

## C5.3 — Prouver $U=\sup E$ (définition ou ε)

**Méthode**
1. **(1)** Montrer que $U$ majore $E$ : « Soit $x\in E$, … $x\leq U$ ».
2. **(2)** « Soit $\varepsilon>0$ ». Trouver $a_\varepsilon\in E$ avec $U-\varepsilon<a_\varepsilon$ (résoudre en $n$ ou $x$, comme C4.11).
3. Pour $\inf$ : minorant + $a_\varepsilon<L+\varepsilon$.

<details>
<summary>✏️ Entraînement — cours ex5</summary>

$A=\lbrace\frac1n : n\geq 1\rbrace$, $\inf A=0$. (1) $\frac1n>0$. (2) Soit $\varepsilon>0$ ; $n>\frac1\varepsilon$ donne $a_\varepsilon=\frac1n\in A$ avec $0\leq a_\varepsilon<\varepsilon$.
</details>

---

## C5.4 — Prouver $U=\sup E$ par une suite

**Méthode** : (1) $U$ majore $E$ ; (2) exhiber une suite $(a_n)$ **d'éléments de $E$** qui tend vers $U$.

<details>
<summary>✏️ Entraînement</summary>

$\sup[0,1[=1$ : 1 majore $[0,1[$, et $a_n=1-\frac1{n+1}\in[0,1[$ tend vers 1.
</details>

---

## C5.5 — Vrai/faux sur max, sup, majorants

**Méthode** : contre-exemples types à avoir en tête : $[0,1[$ (sup non atteint), $]0,1]$ (pas de min), $\mathbb N$ (non majoré), $\varnothing$ (ni sup ni inf), un singleton ($\sup=\inf$), $\frac{(-1)^n}{n+1}$.

<details>
<summary>✏️ Entraînement</summary>

Voir le tableau vrai/faux de la [fiche de cours](Chp%205-cours.md#-vrai--faux).
</details>

---

## C5.6 — Limite d'une suite monotone et sup / inf

**Méthode** : croissante majorée ⇒ $\lim u_n=\sup\lbrace u_n\rbrace$ ; décroissante minorée ⇒ $\lim=\inf\lbrace u_n\rbrace$. Sert dans les deux sens : calculer un sup via une limite, ou une limite via un sup.

<details>
<summary>✏️ Entraînement</summary>

$u_n=1-\frac1{n+1}$ est croissante, majorée par 1, donc $\sup\lbrace u_n\rbrace=\lim u_n=1$.
</details>
