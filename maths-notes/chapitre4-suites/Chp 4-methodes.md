# Chapitre 4 · Suites — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 4-competences.md](Chp%204-competences.md) · [README](../competences-README.md)

## Sommaire

- C4.1 — Trouver le terme général
- C4.2 — Modéliser une situation par une suite récurrente
- C4.3 — Sens de variation par la différence
- C4.4 — Sens de variation par le quotient
- C4.5 — Montrer qu'une suite récurrente est bien définie / bornée
- C4.6 — Montrer qu'une suite récurrente est monotone
- C4.7 — Conclure à la convergence et calculer la limite
- C4.8 — Calculer une limite par opérations / terme dominant
- C4.9 — Lever une forme indéterminée avec racines
- C4.10 — Calculer une limite par encadrement (gendarmes)
- C4.11 — Prouver une limite avec la définition en ε
- C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil

---

## C4.1 — Trouver le terme général

**Méthode**
1. Identifier la forme : $u_{n+1}=u_n+a$ (arithm.) ; $u_{n+1}=bu_n$ (géom.) ; $u_{n+1}=au_n+b$ (AG).
2. Formules : $u_n=u_0+na$ ; $u_n=u_0b^n$ ; AG : point fixe $r=\frac b{1-a}$, puis $u_n=a^n(u_0-r)+r$.
3. Si on demande de **prouver** la formule : récurrence (C3.11).

---

## C4.2 — Modéliser une situation par une suite récurrente

**Méthode** : décrire ce qui se passe **entre l'année $n$ et l'année $n+1$** : intérêts à $t\%$ → multiplier par $(1+t)$ ; versement fixe → ajouter $b$ ; respecter l'ordre indiqué (versement avant ou après les intérêts).

---

## C4.3 — Sens de variation par la différence

**Méthode**
1. Calculer $u_{n+1}-u_n$ et **simplifier** (même dénominateur, développer).
2. Étudier le **signe** : trinôme ($\Delta$, racines, signe de $a$ à l'extérieur), produit de facteurs.
3. Si le signe n'est constant qu'à partir d'un rang : « croissante **à partir du rang** $N$ ».

---

## C4.4 — Sens de variation par le quotient

**Méthode** : seulement si $u_n>0$ pour tout $n$. Calculer $\frac{u_{n+1}}{u_n}$, simplifier (factorielles, puissances, racines), comparer à 1.

---

## C4.5 — Montrer qu'une suite récurrente est bien définie / bornée

**Méthode** : récurrence sur $P(n)$ : « $a\leq u_n\leq b$ » (ou « $u_n\geq 0$ » pour que la racine/le $\ln$ ait un sens). Hérédité : partir de l'encadrement de $u_n$ et appliquer les opérations de $f$ **une par une** (en vérifiant qu'elles conservent l'ordre).

---

## C4.6 — Montrer qu'une suite récurrente est monotone

**Méthode**
1. Étudier le signe de $u_{n+1}-u_n=f(u_n)-u_n$ : c'est le signe de $g(x)=f(x)-x$ **évalué en $u_n$**.
2. Utiliser l'encadrement de C4.5 pour savoir où se trouve $u_n$.
3. Avec une racine : comparer les carrés (les deux côtés sont positifs).

---

## C4.7 — Conclure à la convergence et calculer la limite

**Méthode**
1. Croissante + majorée (ou décroissante + minorée) ⇒ **converge** (limite monotone). Le citer explicitement.
2. Pour trouver $\ell$ : si $f$ est continue, $\ell$ vérifie $\ell=f(\ell)$ (point fixe) ; garder la solution compatible avec l'encadrement.

---

## C4.8 — Calculer une limite par opérations / terme dominant

**Méthode**
1. Essayer les **opérations** (tableaux du cours).
2. Si forme indéterminée avec polynômes / fractions : **factoriser par le terme dominant** en haut et en bas ($\frac{n^2+1}{3n^2-n}=\frac{1+1/n^2}{3-1/n}\to\frac13$).
3. Avec $\ln$ : regrouper ($\ln a-\ln b=\ln\frac ab$) puis limite de l'intérieur.
4. Repère : croissances comparées.

---

## C4.9 — Lever une forme indéterminée avec racines

**Méthode** : pour $\sqrt A-B$ ($\infty-\infty$), multiplier et diviser par la **quantité conjuguée** $\sqrt A+B$ : $\sqrt A-B=\frac{A-B^2}{\sqrt A+B}$, puis terme dominant. Pour savoir si la limite est atteinte par au-dessus/dessous ($\ell^\pm$), comparer l'expression à $\ell$.

---

## C4.10 — Calculer une limite par encadrement (gendarmes)

**Méthode**
1. Encadrer le morceau gênant : $-1\leq(-1)^n\leq 1$, $-1\leq\cos\leq 1$, dans une somme remplacer $i$ par sa plus petite / plus grande valeur.
2. Vérifier que les deux bornes ont **la même limite**.
3. Citer le théorème des gendarmes.

---

## C4.11 — Prouver une limite avec la définition en ε

**Méthode**
1. « Soit $\varepsilon>0$. »
2. Au brouillon, résoudre $|u_n-\ell|<\varepsilon$ en $n$ pour trouver une condition $n>\dots$.
3. Poser $N_\varepsilon$ = un entier au-delà de cette valeur, et vérifier que $n\geq N_\varepsilon\Rightarrow|u_n-\ell|<\varepsilon$.

---

## C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil

**Méthode** : écrire l'inéquation avec le terme général, isoler $q^n$, appliquer $\ln$ (croissante) : $q^n\geq c\iff n\ln q\geq\ln c\iff n\geq\frac{\ln c}{\ln q}$ **si $q>1$** (si $0<q<1$, $\ln q<0$ : on retourne l'inégalité). Prendre le premier entier.
