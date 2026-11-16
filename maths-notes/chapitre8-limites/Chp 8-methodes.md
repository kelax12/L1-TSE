# Chapitre 8 · Limites de fonctions — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 8-competences.md](Chp%208-competences.md) · [README](../competences-README.md)

## Sommaire

- C8.1 — Terme dominant à l'infini
- C8.2 — Dénominateur nul, numérateur non nul
- C8.3 — FI $\frac00$ : factoriser par $(x-a)$ ⭐
- C8.4 — Quantité conjuguée
- C8.5 — Croissances comparées
- C8.6 — Composition, changement de variable
- C8.7 — Montrer qu'une limite n'existe pas
- C8.8 — Encadrement, minoration, majoration
- C8.9 — Monotonie par la définition
- C8.10 — Continuité, prolongement
- C8.11 — Théorème des valeurs intermédiaires

---

## C8.1 — Terme dominant à l'infini

**Méthode** : factoriser numérateur et dénominateur par leur **plus haute puissance**, ou directement $\lim\frac{a_nx^n}{b_mx^m}=\lim\frac{a_n}{b_m}x^{n-m}$. Rédaction : « $=x^{n-m}\cdot\frac{a_n+\dots}{b_m+\dots}$ avec la fraction $\to\frac{a_n}{b_m}$ ».

---

## C8.2 — Dénominateur nul, numérateur non nul

**Méthode** : $P_1(a)\neq0$, $P_2(a)=0$ → la limite est infinie. Étudier le **signe du dénominateur** à gauche et à droite de $a$ ($0^-$ ou $0^+$), puis la règle des signes. Si les deux côtés diffèrent → pas de limite en $a$.

---

## C8.3 — FI $\frac00$ : factoriser par $(x-a)$ ⭐

> [!WARNING]
> Tombe **à chaque DS2** (2020, 2021, 2024), souvent avec la mention « **sans utiliser la règle de l'Hôpital** ».

**Méthode**
1. Vérifier $P_1(a)=0$ **et** $P_2(a)=0$ → « $a$ racine des deux, donc $(x-a)$ divise $P_1$ et $P_2$ ».
2. Diviser par Horner (ou identification) : $P_i=(x-a)Q_i$.
3. Simplifier : $\frac{P_1}{P_2}=\frac{Q_1}{Q_2}$ pour $x\neq a$, et calculer $\frac{Q_1(a)}{Q_2(a)}$.
4. Si encore $\frac00$ (racine double) : rediviser. Si $Q_2(a)=0$ mais $Q_1(a)\neq0$ → C8.2.

---

## C8.4 — Quantité conjuguée

**Méthode** : $\sqrt A-\sqrt B=\frac{A-B}{\sqrt A+\sqrt B}$ (multiplier haut et bas par le conjugué). Le numérateur se simplifie, le dénominateur n'est plus une FI.

---

## C8.5 — Croissances comparées

**Méthode** : repérer le « plus fort » : $e^{ax}\gg x^b\gg(\ln x)^a$. Mettre le terme le plus fort en facteur, ou écrire sous une forme du cours ($\frac{e^{ax}}{x^b}$, $\frac{(\ln x)^a}{x^b}$, $x^b|\ln x|^a$).

---

## C8.6 — Composition, changement de variable

**Méthode** : calculer la limite de l'intérieur $y=u(x)\to L$, puis $\lim_{y\to L}g(y)$. Bien suivre les **signes** ($0^+$ / $0^-$) pour $\frac1y$, $e^{1/y}$, $\ln y$.

---

## C8.7 — Montrer qu'une limite n'existe pas

**Méthode** : calculer $\lim_{a^-}$ et $\lim_{a^+}$ séparément ; si elles diffèrent → pas de limite. Si $a\in D_f$, comparer aussi à $f(a)$. Autre méthode : deux suites $u_n,v_n\to a$ avec $f(u_n)$, $f(v_n)$ de limites différentes.

---

## C8.8 — Encadrement, minoration, majoration

**Méthode** : établir une inégalité valable **pour $x$ assez grand** (ou près de $a$) :
- $m\leq f\leq M$, $m,M\to\ell$ ⇒ $f\to\ell$ (gendarmes) ;
- $f\geq g\to+\infty$ ⇒ $f\to+\infty$ ; $f\leq h\to-\infty$ ⇒ $f\to-\infty$.

Outil fréquent : partie entière $E(x)\leq x<E(x)+1$.

---

## C8.9 — Monotonie par la définition

**Méthode** : « Soient $x,y\in I$ tels que $x<y$. » Puis enchaîner des fonctions dont on connaît le sens : carré (croissant sur $\mathbb R_+$), opposé (renverse), inverse (renverse sur $\mathbb R_+^*$), exp et ln (conservent). Conclure $f(x)>f(y)$ ou $f(x)<f(y)$. **Interdit** souvent d'utiliser la dérivée.

---

## C8.10 — Continuité, prolongement

**Méthode** : en un point de raccord $a$, calculer $\lim_{a^-}f$, $\lim_{a^+}f$ et $f(a)$ : continue ⇔ les trois sont égales. Prolongement : si $\lim_a f=\ell$ finie, poser $f(a)=\ell$.

---

## C8.11 — Théorème des valeurs intermédiaires

**Méthode** : se ramener à $g(x)=0$, vérifier $g$ **continue sur $[a,b]$**, et $g(a)$, $g(b)$ de **signes opposés** (ou la valeur cible entre $g(a)$ et $g(b)$) ⇒ « d'après le TVI, il existe $c\in[a,b]$ tel que… ».
