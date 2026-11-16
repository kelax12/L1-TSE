# Chapitre 1 · Logique — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 1-competences.md](Chp%201-competences.md) · [README](../competences-README.md)

## Sommaire

- C1.1 — Dresser la table de vérité d'une proposition composée
- C1.2 — Montrer une tautologie ou une équivalence
- C1.3 — Simplifier une proposition avec les règles de calcul
- C1.4 — Traduire une phrase française en formule quantifiée
- C1.5 — Écrire la négation d'une proposition quantifiée
- C1.6 — Résoudre une énigme logique

---

## C1.1 — Dresser la table de vérité d'une proposition composée

**Méthode**
1. Repérer les variables ($P$, $Q$, éventuellement $R$) : 2 variables → 4 lignes, 3 variables → 8 lignes. Ordre des lignes : VV, VF, FV, FF (pour 3 : VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF).
2. **Découper** la proposition en sous-formules, de l'intérieur vers l'extérieur ; une colonne par sous-formule. Nommer les gros morceaux ($A$, $B$) pour alléger.
3. Remplir colonne par colonne avec la table de référence. Pièges : $P\Rightarrow Q$ est faux **seulement** pour V⇒F ; $\iff$ est vrai quand les deux colonnes sont **égales**.

---

## C1.2 — Montrer une tautologie ou une équivalence

**Méthode**
1. **Tautologie** : faire la table complète ; c'est une tautologie si la dernière colonne ne contient **que des V**.
2. **« $X$ a la même table que $Y$ »** : faire les deux colonnes et vérifier qu'elles sont identiques (⇔ « $X\iff Y$ est une tautologie »).
3. Alternative plus rapide : transformer avec les règles (C1.3) jusqu'à obtenir l'autre expression.

---

## C1.3 — Simplifier une proposition avec les règles de calcul

**Méthode** — règles à appliquer sans table :
1. $P\Rightarrow Q\ \equiv\ \neg P\lor Q$ et $\neg(P\Rightarrow Q)\equiv P\land\neg Q$.
2. De Morgan : $\neg(P\land Q)\equiv\neg P\lor\neg Q$, $\neg(P\lor Q)\equiv\neg P\land\neg Q$.
3. Distributivité, $\neg\neg P\equiv P$, contraposée $P\Rightarrow Q\equiv\neg Q\Rightarrow\neg P$.

---

## C1.4 — Traduire une phrase française en formule quantifiée

**Méthode**
1. Repérer **l'ensemble** de chaque objet (réel → $\mathbb R$, entier → $\mathbb Z$ ou $\mathbb N$, « strictement négatif » → $\mathbb R_-^*$ ou $x<0$).
2. « tout / chaque / aucun » → $\forall$ ; « il existe / certains / au moins un » → $\exists$. « Aucun $x$ n'est $P$ » = $\forall x,\ \neg P(x)$.
3. Placer les quantificateurs **dans l'ordre de dépendance** : ce qui dépend d'une variable vient après elle.
4. « Si… alors » → $\Rightarrow$.

---

## C1.5 — Écrire la négation d'une proposition quantifiée

**Méthode**
1. Lire de gauche à droite : chaque $\forall$ devient $\exists$, chaque $\exists$ devient $\forall$. **Les ensembles ne changent pas** ($\forall M>0$ devient $\exists M>0$).
2. Nier la partie finale : $<$ ↔ $\geq$, $\leq$ ↔ $>$, $=$ ↔ $\neq$, « et » ↔ « ou ».
3. **Implication** : $\neg(A\Rightarrow B)\equiv A\land\neg B$ (jamais une implication).
4. Phrase en français : d'abord la traduire (C1.4), puis nier.

---

## C1.6 — Résoudre une énigme logique

**Méthode**
1. Une proposition par personne : $A$ = « A est honnête » (ou « A est coupable »).
2. Traduire chaque déclaration : si A dit $D$, alors **$A\iff D$** (honnête ⇔ ce qu'il dit est vrai).
3. Résoudre : soit **table de vérité** (sûr, 8 lignes pour 3 personnes), soit **hypothèse + contradiction** (plus rapide : « supposons A honnête… contradiction, donc A ment »).
4. Vérifier la solution trouvée dans **toutes** les déclarations.
