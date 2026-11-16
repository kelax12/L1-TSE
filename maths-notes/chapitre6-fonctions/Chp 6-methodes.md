# Chapitre 6 · Fonctions — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 6-competences.md](Chp%206-competences.md) · [README](../competences-README.md)

## Sommaire

- C6.1 — Domaine de définition
- C6.2 — Dire si un objet est une fonction
- C6.3 — Image et antécédents
- C6.4 — Injectivité
- C6.5 — Surjectivité
- C6.6 — Bijectivité
- C6.7 — Image directe $f(A)$
- C6.8 — Image réciproque $f^{-1}(B)$
- C6.9 — Rendre une fonction injective / surjective / bijective
- C6.10 — Bijection réciproque
- C6.11 — Composée
- C6.12 — Inéquations avec racine ou valeur absolue

---

## C6.1 — Domaine de définition

**Méthode** : lister les contraintes et les résoudre : dénominateur $\neq 0$ ; $\sqrt{\cdot}$ : intérieur $\geq 0$ ; $\ln$ : intérieur $>0$ ; puis intersecter (C2.2).

---

## C6.2 — Dire si un objet est une fonction

**Méthode** : vérifier que **chaque** élément de départ a **une et une seule** image dans l'ensemble d'arrivée. Échec si un élément n'a pas d'image ou en a plusieurs.

---

## C6.3 — Image et antécédents

**Méthode** : image : calculer $f(x)$. Antécédents de $y$ : **résoudre** $f(x)=y$ avec $x$ dans l'ensemble de départ (0, 1 ou plusieurs solutions).

---

## C6.4 — Injectivité

**Méthode**
- **Prouver** : « Soient $x,y\in E$ tels que $f(x)=f(y)$ » … « donc $x=y$ ».
- **Réfuter** : deux éléments **distincts** de même image.

---

## C6.5 — Surjectivité

**Méthode**
- **Prouver** : « Soit $y\in F$. » Résoudre $f(x)=y$ et vérifier que la solution est **dans $E$**.
- **Réfuter** : un $y\in F$ sans antécédent.

---

## C6.6 — Bijectivité

**Méthode** : injective + surjective, ou bien : pour tout $y\in F$, l'équation $f(x)=y$ a **exactement une** solution dans $E$. Bien lire les ensembles de départ et d'arrivée : la même formule peut être bijective ou non.

---

## C6.7 — Image directe $f(A)$

**Méthode** : décrire **toutes les valeurs prises** par $f$ quand $x$ parcourt $A$ : variations de $f$ sur $A$, valeurs aux bornes, en faisant attention aux bornes atteintes ou non.

---

## C6.8 — Image réciproque $f^{-1}(B)$

**Méthode** : résoudre $f(x)\in B$ (souvent une inéquation), avec $x$ dans l'ensemble de départ. Ne nécessite pas que $f$ soit bijective. Interpréter en phrase si l'énoncé est concret.

---

## C6.9 — Rendre une fonction injective / surjective / bijective

**Méthode**
- **Surjective** : remplacer l'arrivée par l'image $f(E)$ (variations + limites aux bornes).
- **Injective** : restreindre le départ à un intervalle où $f$ est **strictement monotone** (strictement monotone ⇒ injective).
- **Bijective** : les deux ; justifier « surjective par définition de $f(E)$, injective car strictement monotone ».

---

## C6.10 — Bijection réciproque

**Méthode** : « Soit $y\in F$. » Résoudre $f(x)=y$ **en isolant $x$**, en gardant la solution qui est dans $E$ (signe !). Écrire $f^{-1}:F\to E$, $y\mapsto\dots$ avec **les ensembles**.

---

## C6.11 — Composée

**Méthode** : $g\circ f(x)=g(f(x))$ : remplacer la variable de $g$ par l'expression de $f$. Vérifier que $f(E)\subset D_g$.

---

## C6.12 — Inéquations avec racine ou valeur absolue

**Méthode**
- $\sqrt A\leq B$ : condition $A\geq0$ ; si $B<0$ impossible ; si $B\geq0$, élever au carré : $A\leq B^2$.
- $\lvert A\rvert\leq c$ ⇔ $-c\leq A\leq c$ ; $\lvert A\rvert>B$ : distinguer $A\geq0$ et $A<0$.
