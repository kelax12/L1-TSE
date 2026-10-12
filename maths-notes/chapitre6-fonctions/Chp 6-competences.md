# Chapitre 6 · Fonctions — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 6-cours.md](Chp%206-cours.md)
>
> ⚠️ Ni TD ni annale sur ce chapitre pour l'instant : compétences tirées du **cours** (partie 1). Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C6.1 — Déterminer le domaine de définition d'une fonction
- [ ] C6.2 — Dire si un objet est une fonction, et identifier départ / arrivée
- [ ] C6.3 — Trouver l'image d'un élément et les antécédents d'un élément
- [ ] C6.4 — Prouver ou réfuter l'injectivité
- [ ] C6.5 — Prouver ou réfuter la surjectivité
- [ ] C6.6 — Décider si une fonction est bijective (selon les ensembles choisis)
- [ ] C6.7 — Calculer une image directe $f(A)$
- [ ] C6.8 — Calculer une image réciproque $f^{-1}(B)$ et l'interpréter

---

## C6.1 — Domaine de définition

**Méthode** : lister les contraintes et les résoudre : dénominateur $\neq 0$ ; $\sqrt{\cdot}$ : intérieur $\geq 0$ ; $\ln$ : intérieur $>0$ ; puis intersecter (C2.2).

<details>
<summary>✏️ Entraînement — cours ex6</summary>

$\exp(2x)$ : $\mathbb R$. $\ln x$ : $]0,+\infty[$. $\frac1{\sqrt{x^2}}$ : $x^2>0\iff x\neq0$ → $\mathbb R^*$. $\sqrt{-x}$ : $]-\infty,0]$.
</details>

---

## C6.2 — Dire si un objet est une fonction

**Méthode** : vérifier que **chaque** élément de départ a **une et une seule** image dans l'ensemble d'arrivée. Échec si un élément n'a pas d'image ou en a plusieurs.

<details>
<summary>✏️ Entraînement — cours ex2</summary>

« Année ↦ prix du baril » est une fonction. « Prix ↦ moment où le baril valait ce prix » n'en est pas une : un prix peut être atteint à plusieurs dates (ou jamais).
</details>

---

## C6.3 — Image et antécédents

**Méthode** : image : calculer $f(x)$. Antécédents de $y$ : **résoudre** $f(x)=y$ avec $x$ dans l'ensemble de départ (0, 1 ou plusieurs solutions).

<details>
<summary>✏️ Entraînement</summary>

$f:\mathbb R\to\mathbb R$, $x\mapsto x^2$ : image de $-3$ : $9$. Antécédents de 4 : $\pm 2$ ; de $-1$ : aucun.
</details>

---

## C6.4 — Injectivité

**Méthode**
- **Prouver** : « Soient $x,y\in E$ tels que $f(x)=f(y)$ » … « donc $x=y$ ».
- **Réfuter** : deux éléments **distincts** de même image.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ sur $\mathbb R_+$ : $x^2=y^2$ et $x,y\geq 0$ ⇒ $x=y$ → injective. Sur $\mathbb R$ : $f(-1)=f(1)$ → non injective. $x\mapsto x^3$ sur $\mathbb Z$ : $x^3=y^3\Rightarrow x=y$ → injective.
</details>

---

## C6.5 — Surjectivité

**Méthode**
- **Prouver** : « Soit $y\in F$. » Résoudre $f(x)=y$ et vérifier que la solution est **dans $E$**.
- **Réfuter** : un $y\in F$ sans antécédent.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ de $\mathbb R$ dans $\mathbb R_+$ : soit $y\geq 0$, $x=\sqrt y$ convient → surjective. $x\mapsto\frac1x$ de $\mathbb R^*$ dans $\mathbb R$ : $0$ n'a pas d'antécédent → non surjective. $x\mapsto x^3$ sur $\mathbb Z$ : $2$ n'est pas un cube → non surjective.
</details>

---

## C6.6 — Bijectivité

**Méthode** : injective + surjective, ou bien : pour tout $y\in F$, l'équation $f(x)=y$ a **exactement une** solution dans $E$. Bien lire les ensembles de départ et d'arrivée : la même formule peut être bijective ou non.

<details>
<summary>✏️ Entraînement</summary>

$x\mapsto x^2$ : de $\mathbb R_+$ dans $\mathbb R_+$ → bijective ; de $\mathbb R$ dans $\mathbb R_+$ → surjective seulement ; de $\mathbb R_+$ dans $\mathbb R$ → injective seulement. Capitales → pays : bijective ; villes → pays : surjective seulement.
</details>

---

## C6.7 — Image directe $f(A)$

**Méthode** : décrire **toutes les valeurs prises** par $f$ quand $x$ parcourt $A$ : variations de $f$ sur $A$, valeurs aux bornes, en faisant attention aux bornes atteintes ou non.

<details>
<summary>✏️ Entraînement</summary>

$f(x)=x^2$ : $f([-1,2])=[0,4]$ (minimum 0 en 0, maximum 4 en 2). $f(]1,3[)=]1,9[$.
</details>

---

## C6.8 — Image réciproque $f^{-1}(B)$

**Méthode** : résoudre $f(x)\in B$ (souvent une inéquation), avec $x$ dans l'ensemble de départ. Ne nécessite pas que $f$ soit bijective. Interpréter en phrase si l'énoncé est concret.

<details>
<summary>✏️ Entraînement — cours ex10 (pizzeria)</summary>

$C(n)=n\left(15-\frac n{100}\right)$, $n\in\mathbb N$. $C^{-1}(\mathbb R_-)$ : $C(n)\leq 0\iff n=0$ ou $n\geq 1500$ → les quantités qui ne rapportent rien. $f(x)=x^2$ : $f^{-1}([1,4])=[-2,-1]\cup[1,2]$.
</details>
