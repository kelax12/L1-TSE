# Chapitre 4 · Suites — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 4-cours.md](Chp%204-cours.md)
>
> Sources : TD4, cours et **annales DS2 2020-2025** ([annales-DS2.md](../annales-DS2.md)). ⭐ L'enchaînement C4.5 → C4.6 → C4.7 sur une suite $u_{n+1}=f(u_n)$ tombe à **tous** les DS2 (5/5). Coche `[x]` quand tu sais faire la compétence sans regarder.

## ✅ Suivi

- [ ] C4.1 — Trouver le terme général d'une suite arithmétique, géométrique ou arithmético-géométrique
- [ ] C4.2 — Modéliser une situation par une suite récurrente (placement, intérêts)
- [ ] C4.3 — Étudier le sens de variation par la différence $u_{n+1}-u_n$
- [ ] C4.4 — Étudier le sens de variation par le quotient $\frac{u_{n+1}}{u_n}$
- [ ] ⭐ C4.5 — Montrer qu'une suite récurrente est bien définie / bornée (récurrence)
- [ ] ⭐ C4.6 — Montrer qu'une suite récurrente $u_{n+1}=f(u_n)$ est monotone
- [ ] ⭐ C4.7 — Conclure à la convergence (limite monotone) et calculer la limite (point fixe)
- [ ] C4.8 — Calculer une limite par opérations / terme dominant
- [ ] C4.9 — Lever une forme indéterminée avec racines (quantité conjuguée)
- [ ] C4.10 — Calculer une limite par encadrement (gendarmes)
- [ ] C4.11 — Prouver une limite avec la définition en ε
- [ ] C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil (avec $\ln$)

---

## C4.1 — Trouver le terme général

**Méthode**
1. Identifier la forme : $u_{n+1}=u_n+a$ (arithm.) ; $u_{n+1}=bu_n$ (géom.) ; $u_{n+1}=au_n+b$ (AG).
2. Formules : $u_n=u_0+na$ ; $u_n=u_0b^n$ ; AG : point fixe $r=\frac b{1-a}$, puis $u_n=a^n(u_0-r)+r$.
3. Si on demande de **prouver** la formule : récurrence (C3.11).

**Tombe** : TD4 ex5b · cours ex3

<details>
<summary>✏️ Correction étape par étape — TD4 ex5 : $u_0=10\,000$, $u_{n+1}=1{,}05\,u_n+300$</summary>

**Étape 1 — Reconnaître la forme.** $u_{n+1}=au_n+b$ avec $a=1{,}05$, $b=300$ : suite **arithmético-géométrique**.

**Étape 2 — Point fixe.** On résout $r=1{,}05r+300\iff-0{,}05r=300\iff r=-6000$.

**Étape 3 — Suite auxiliaire.** $v_n=u_n-r=u_n+6000$. Alors $v_{n+1}=1{,}05u_n+300+6000=1{,}05(u_n+6000)=1{,}05\,v_n$ : géométrique de raison $1{,}05$.

**Étape 4 — Terme général de $v$.** $v_0=10\,000+6000=16\,000$, donc $v_n=16\,000\times1{,}05^n$.

**Étape 5 — Revenir à $u$.** $u_n=v_n-6000=\boxed{16\,000\times1{,}05^n-6000}$.

**Contrôle** : $u_1=16\,800-6000=10\,800=1{,}05\times10\,000+300$ ✔.
</details>

---

## C4.2 — Modéliser une situation par une suite récurrente

**Méthode** : décrire ce qui se passe **entre l'année $n$ et l'année $n+1$** : intérêts à $t\%$ → multiplier par $(1+t)$ ; versement fixe → ajouter $b$ ; respecter l'ordre indiqué (versement avant ou après les intérêts).

**Tombe** : TD4 ex5a

<details>
<summary>✏️ Correction étape par étape — placement à 5 % avec dépôt annuel de 300 €</summary>

**Étape 1 — Nommer.** $u_n$ = capital au bout de $n$ années ; $u_0=10\,000$.

**Étape 2 — Décrire une année, dans l'ordre.** Le capital $u_n$ rapporte 5 % : il devient $u_n\times1{,}05$. Puis on dépose 300 €.

**Étape 3 — Écrire la relation.** $u_{n+1}=1{,}05\,u_n+300$.

**Étape 4 — Attention à l'ordre.** Si le dépôt avait lieu **avant** les intérêts, les 300 € rapporteraient aussi : $u_{n+1}=1{,}05(u_n+300)$.
</details>

---

## C4.3 — Sens de variation par la différence

**Méthode**
1. Calculer $u_{n+1}-u_n$ et **simplifier** (même dénominateur, développer).
2. Étudier le **signe** : trinôme ($\Delta$, racines, signe de $a$ à l'extérieur), produit de facteurs.
3. Si le signe n'est constant qu'à partir d'un rang : « croissante **à partir du rang** $N$ ».

**Tombe** : TD4 ex1, ex4

<details>
<summary>✏️ Correction étape par étape — TD4 ex1</summary>

**$u_n=\frac n{n-1}$ ($n\geq 2$)**
1. Différence : $u_{n+1}-u_n=\frac{n+1}{n}-\frac{n}{n-1}$.
2. Même dénominateur $n(n-1)$ : $\frac{(n+1)(n-1)-n^2}{n(n-1)}=\frac{n^2-1-n^2}{n(n-1)}=\frac{-1}{n(n-1)}$.
3. Signe : numérateur $<0$, dénominateur $>0$ pour $n\geq2$ → différence $<0$.
4. **Strictement décroissante.** (Limite : $\frac n{n-1}=\frac1{1-1/n}\to1$.)

**$v_n=n^3-4n^2$**
1. $v_{n+1}-v_n=(n+1)^3-4(n+1)^2-n^3+4n^2=3n^2+3n+1-8n-4=3n^2-5n-3$.
2. Racines : $\frac{5\pm\sqrt{61}}6$, soit environ $-0{,}47$ et $2{,}1$.
3. Le trinôme est positif au-delà de $2{,}1$ : pour $n\geq3$.
4. **Croissante à partir du rang 3** (pas avant : $v_0=0$, $v_1=-3$, $v_2=-8$, $v_3=-9$, $v_4=0$).
</details>

---

## C4.4 — Sens de variation par le quotient

**Méthode** : seulement si $u_n>0$ pour tout $n$. Calculer $\frac{u_{n+1}}{u_n}$, simplifier (factorielles, puissances, racines), comparer à 1.

**Tombe** : TD4 ex4 · cours ex6

<details>
<summary>✏️ Correction étape par étape — TD4 ex4 et cours</summary>

**$t_n=\sqrt{\frac n{2n+1}}$ ($n\geq1$)**
1. Termes $>0$ : on peut utiliser le quotient.
2. $\frac{t_{n+1}^2}{t_n^2}=\frac{n+1}{2n+3}\times\frac{2n+1}{n}=\frac{2n^2+3n+1}{2n^2+3n}$.
3. Numérateur > dénominateur, donc rapport $>1$, et $\frac{t_{n+1}}{t_n}>1$ (racine d'un nombre $>1$).
4. **Croissante.** Limite : $\frac n{2n+1}\to\frac12$, donc $t_n\to\frac{\sqrt2}2$.

**$v_n=\frac{n!}{n^n}$ ($n\geq1$)**
1. $\frac{v_{n+1}}{v_n}=\frac{(n+1)!}{(n+1)^{n+1}}\times\frac{n^n}{n!}=\frac{(n+1)\,n^n}{(n+1)^{n+1}}=\frac{n^n}{(n+1)^n}=\left(\frac n{n+1}\right)^n$.
2. $0<\frac n{n+1}<1$, donc sa puissance aussi : rapport $<1$.
3. **Décroissante.**
</details>

---

## C4.5 — Montrer qu'une suite récurrente est bien définie / bornée

**Méthode** : récurrence sur $P(n)$ : « $a\leq u_n\leq b$ » (ou « $u_n\geq 0$ » pour que la racine/le $\ln$ ait un sens). Hérédité : partir de l'encadrement de $u_n$ et appliquer les opérations de $f$ **une par une** (en vérifiant qu'elles conservent l'ordre).

**Tombe** : TD4 ex2a, 2b

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex2.1 : $u_0=2$, $u_{n+1}=\frac{2u_n+3}{u_n+2}$, montrer $u_n>0$ et $u_n^2\geq3$</summary>

**Étape 1 — Énoncer.** $P(n)$ : « $u_n$ est bien défini, $u_n>0$ et $u_n^2\geq3$ ».

**Étape 2 — Initialisation.** $u_0=2>0$ et $u_0^2=4\geq3$ ✔.

**Étape 3 — Hérédité, partie « bien défini et positif ».** Si $u_n>0$, le dénominateur $u_n+2>0$ (donc non nul) et le numérateur $2u_n+3>0$ : $u_{n+1}$ existe et est $>0$.

**Étape 4 — Hérédité, partie « $\geq3$ ».** On calcule la différence et on met au même dénominateur :
$$u_{n+1}^2-3=\frac{(2u_n+3)^2-3(u_n+2)^2}{(u_n+2)^2}=\frac{4u_n^2+12u_n+9-3u_n^2-12u_n-12}{(u_n+2)^2}=\frac{u_n^2-3}{(u_n+2)^2}.$$

**Étape 5 — Signe.** Par $P(n)$, $u_n^2-3\geq0$, et un carré au dénominateur est $>0$ : $u_{n+1}^2\geq3$ ✔.

**Étape 6 — Conclure** par récurrence.
</details>

<details>
<summary>✏️ Correction étape par étape — TD4 ex2 : $u_0=1$, $u_{n+1}=\sqrt{2+u_n}$, montrer $0\leq u_n<2$</summary>

1. *Init* : $u_0=1\in[0,2[$ ✔.
2. *Hérédité* : de $0\leq u_n<2$, on ajoute 2 : $2\leq2+u_n<4$.
3. La racine est croissante : $\sqrt2\leq u_{n+1}<2$, donc $0\leq u_{n+1}<2$ ✔ (et la racine existe car $2+u_n\geq0$).
</details>

<details>
<summary>✏️ Annales DS2 — les autres bornes, même méthode</summary>

| Sujet | Suite | À montrer | Calcul clé de l'hérédité |
|---|---|---|---|
| DS2-25 | $u_{n+1}=\frac23u_n+\sqrt{u_n}$, $u_0=3$ | $0\leq u_n\leq9$ | $0\leq\frac23u_n\leq6$ et $0\leq\sqrt{u_n}\leq3$ ⇒ somme $\in[0,9]$ |
| DS2-22 | $u_{n+1}=\frac{u_n^2+1}{u_n+1}$, $u_0=2$ | $u_n>1$ | $u_{n+1}-1=\frac{u_n(u_n-1)}{u_n+1}>0$ |
| DS2-21 | $u_{n+1}=\sqrt{3+\frac{u_n^2}4}$, $u_0=4$ | $u_n\geq2$ | $u_n^2\geq4$ ⇒ $3+\frac{u_n^2}4\geq4$ ⇒ $u_{n+1}\geq2$ |

💡 Pour montrer $u_{n+1}\geq c$, calculer $u_{n+1}-c$ (ou $u_{n+1}^2-c^2$) et **factoriser** : le facteur $(u_n-c)$ apparaît presque toujours.
</details>

---

## C4.6 — Montrer qu'une suite récurrente est monotone

**Méthode**
1. Étudier le signe de $u_{n+1}-u_n=f(u_n)-u_n$ : c'est le signe de $g(x)=f(x)-x$ **évalué en $u_n$**.
2. Utiliser l'encadrement de C4.5 pour savoir où se trouve $u_n$.
3. Avec une racine : comparer les carrés (les deux côtés sont positifs).

**Tombe** : TD4 ex2c, 2e

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex2.2 : $(u_n)$ décroissante</summary>

**Étape 1 — Calculer la différence.** $u_{n+1}-u_n=\frac{2u_n+3}{u_n+2}-u_n$.

**Étape 2 — Même dénominateur.** $=\frac{2u_n+3-u_n^2-2u_n}{u_n+2}=\frac{3-u_n^2}{u_n+2}$.

**Étape 3 — Signe avec la borne de C4.5.** $u_n^2\geq3$ ⇒ numérateur $\leq0$ ; $u_n>0$ ⇒ dénominateur $>0$.

**Étape 4 — Conclure.** $u_{n+1}-u_n\leq0$ pour tout $n$ : **décroissante**.
</details>

<details>
<summary>✏️ Correction étape par étape — TD4 ex2c : $u_{n+1}=\sqrt{2+u_n}$ croissante</summary>

1. On compare $\sqrt{2+u_n}$ et $u_n$, deux nombres $\geq0$ : on peut comparer leurs carrés.
2. $u_{n+1}\geq u_n\iff2+u_n\geq u_n^2\iff-u_n^2+u_n+2\geq0$.
3. Factoriser : racines $2$ et $-1$, donc $-u_n^2+u_n+2=(2-u_n)(u_n+1)$.
4. Avec $0\leq u_n<2$ : $2-u_n>0$ et $u_n+1>0$ → produit $\geq0$ ✔. **Croissante.**
</details>

<details>
<summary>✏️ Annales DS2 — autres monotonies</summary>

| Sujet | $u_{n+1}-u_n$ (simplifié) | Signe grâce à | Sens |
|---|---|---|---|
| DS2-25 | $\sqrt{u_n}-\frac{u_n}3$ ; $\geq0\iff u_n\geq\frac{u_n^2}9\iff9u_n\geq u_n^2$ | $0\leq u_n\leq9$ | croissante |
| DS2-22 | $\frac{1-u_n}{u_n+1}$ | $u_n>1$ | décroissante |
| DS2-21 | on étudie $u_{n+1}^2-u_n^2=3-\frac34u_n^2$ | $u_n^2\geq4$ | décroissante |
| DS2-20 | $\frac{1-u_n^2}{2u_n}$ pour $u_{n+1}=\frac12(u_n+\frac1{u_n})$ | $u_n>1$ | décroissante |
</details>

---

## C4.7 — Conclure à la convergence et calculer la limite

**Méthode**
1. Croissante + majorée (ou décroissante + minorée) ⇒ **converge** (limite monotone). Le citer explicitement.
2. Pour trouver $\ell$ : si $f$ est continue, $\ell$ vérifie $\ell=f(\ell)$ (point fixe) ; garder la solution compatible avec l'encadrement.

**Tombe** : TD4 ex2d, 2e

<details>
<summary>✏️ Correction étape par étape — DS2-24 ex2.3-2.4 : convergence et limite</summary>

**Étape 1 — Convergence.** $(u_n)$ est décroissante (C4.6) et minorée : $u_n>0$ et $u_n^2\geq3$ donnent $u_n\geq\sqrt3$. Théorème de la limite monotone : **elle converge** vers un réel $\ell$.

**Étape 2 — Encadrer $\ell$.** On passe à la limite dans $u_n\geq\sqrt3$ : $\ell\geq\sqrt3$ (en particulier $\ell+2\neq0$).

**Étape 3 — Équation du point fixe.** On passe à la limite dans $u_{n+1}=\frac{2u_n+3}{u_n+2}$ : $\ell=\frac{2\ell+3}{\ell+2}$.

**Étape 4 — Résoudre.** $\ell^2+2\ell=2\ell+3\iff\ell^2=3\iff\ell=\pm\sqrt3$.

**Étape 5 — Choisir.** $\ell\geq\sqrt3$, donc $\boxed{\ell=\sqrt3}$.
</details>

<details>
<summary>✏️ Correction étape par étape — TD4 ex2d : $u_{n+1}=\sqrt{2+u_n}$</summary>

1. Croissante et majorée par 2 ⇒ converge vers $\ell$, avec $1\leq\ell\leq2$.
2. Point fixe : $\ell=\sqrt{2+\ell}\Rightarrow\ell^2-\ell-2=0\Rightarrow\ell\in\lbrace2,-1\rbrace$.
3. $\ell\geq1$ ⇒ $\ell=2$. (Avec $u_0=3$ : décroissante, minorée par 2, même limite.)
</details>

<details>
<summary>✏️ Annales DS2 — tableau récapitulatif</summary>

| Sujet | Argument | Équation du point fixe | Limite |
|---|---|---|:-:|
| DS2-25 | croissante, majorée par 9 | $\ell=\frac23\ell+\sqrt\ell\iff\frac\ell3=\sqrt\ell\iff\frac{\ell^2}9-\ell=0$, et $\ell\geq u_0=3$ | $9$ |
| DS2-24 | décroissante, minorée par $\sqrt3$ | $\ell=\frac{2\ell+3}{\ell+2}\iff\ell^2=3$, $\ell>0$ | $\sqrt3$ |
| DS2-22 | décroissante, minorée par 1 | $\ell=\frac{\ell^2+1}{\ell+1}\iff\ell=1$ | $1$ |
| DS2-21 | décroissante, minorée par 2 | $\ell^2=3+\frac{\ell^2}4\iff\ell^2=4$, $\ell\geq2$ | $2$ |
| DS2-20 | décroissante, minorée par 1 | $\ell=\frac12(\ell+\frac1\ell)\iff\ell^2=1$ | $1$ |

**Suite** (DS2-24, DS2-25 bonus) : $\sup$ / $\inf$ de $\lbrace u_n\rbrace$ → voir C5.6.
</details>

---

## C4.8 — Calculer une limite par opérations / terme dominant

**Méthode**
1. Essayer les **opérations** (tableaux du cours).
2. Si forme indéterminée avec polynômes / fractions : **factoriser par le terme dominant** en haut et en bas ($\frac{n^2+1}{3n^2-n}=\frac{1+1/n^2}{3-1/n}\to\frac13$).
3. Avec $\ln$ : regrouper ($\ln a-\ln b=\ln\frac ab$) puis limite de l'intérieur.
4. Repère : croissances comparées.

**Tombe** : TD4 ex1, ex4

<details>
<summary>✏️ Correction étape par étape — TD4</summary>

**$w_n=\frac{n}{n^2-2n+2}$**
1. FI $\frac\infty\infty$. Terme dominant en bas : $n^2$.
2. On divise haut et bas par $n^2$ : $w_n=\frac{1/n}{1-2/n+2/n^2}$.
3. Haut $\to0$, bas $\to1$ : $w_n\to0$.

**$z_n=\ln(2n^2-n)-\ln(3n+1)$**
1. FI $\infty-\infty$. On regroupe : $z_n=\ln\frac{2n^2-n}{3n+1}$.
2. L'intérieur : $\frac{2n^2-n}{3n+1}=n\cdot\frac{2-1/n}{3+1/n}$, avec la fraction $\to\frac23$ et $n\to+\infty$ : l'intérieur $\to+\infty$.
3. $\ln(X)\to+\infty$ quand $X\to+\infty$ : $z_n\to+\infty$.
</details>

---

## C4.9 — Lever une forme indéterminée avec racines

**Méthode** : pour $\sqrt A-B$ ($\infty-\infty$), multiplier et diviser par la **quantité conjuguée** $\sqrt A+B$ : $\sqrt A-B=\frac{A-B^2}{\sqrt A+B}$, puis terme dominant. Pour savoir si la limite est atteinte par au-dessus/dessous ($\ell^\pm$), comparer l'expression à $\ell$.

**Tombe** : cours ex23, ex24

<details>
<summary>✏️ Correction étape par étape — cours ex23 : $\lim\sqrt{n^2+2n}-n$</summary>

**Étape 1 — Identifier la FI.** $+\infty-\infty$ avec une racine.

**Étape 2 — Quantité conjuguée.** On multiplie haut et bas par $\sqrt{n^2+2n}+n$ :
$$\sqrt{n^2+2n}-n=\frac{(n^2+2n)-n^2}{\sqrt{n^2+2n}+n}=\frac{2n}{\sqrt{n^2+2n}+n}.$$

**Étape 3 — Factoriser par $n$.** $\sqrt{n^2+2n}=n\sqrt{1+\frac2n}$ (car $n>0$) : $=\frac{2n}{n\left(\sqrt{1+2/n}+1\right)}=\frac{2}{\sqrt{1+2/n}+1}$.

**Étape 4 — Limite.** $\sqrt{1+2/n}\to1$, donc la suite tend vers $\frac22=1$. Comme $\sqrt{1+2/n}>1$, la suite est $<1$ : limite $1^-$.
</details>

---

## C4.10 — Calculer une limite par encadrement (gendarmes)

**Méthode**
1. Encadrer le morceau gênant : $-1\leq(-1)^n\leq 1$, $-1\leq\cos\leq 1$, dans une somme remplacer $i$ par sa plus petite / plus grande valeur.
2. Vérifier que les deux bornes ont **la même limite**.
3. Citer le théorème des gendarmes.

**Tombe** : TD4 ex3 · cours ex15

<details>
<summary>✏️ Correction étape par étape — TD4 ex3 : $u_n=\frac{nt+(-1)^n}{n+1}$</summary>

**Étape 1 — Isoler ce qui oscille.** $(-1)^n$ n'a pas de limite, mais $-1\leq(-1)^n\leq1$.

**Étape 2 — Encadrer.** On ajoute $nt$ puis on divise par $n+1>0$ : $\frac{nt-1}{n+1}\leq u_n\leq\frac{nt+1}{n+1}$.

**Étape 3 — Limites des bornes.** $\frac{nt\pm1}{n+1}=\frac{t\pm1/n}{1+1/n}\to t$.

**Étape 4 — Gendarmes.** Les deux bornes ont la même limite $t$ : $u_n\to t$.
</details>

---

## C4.11 — Prouver une limite avec la définition en ε

**Méthode**
1. « Soit $\varepsilon>0$. »
2. Au brouillon, résoudre $|u_n-\ell|<\varepsilon$ en $n$ pour trouver une condition $n>\dots$.
3. Poser $N_\varepsilon$ = un entier au-delà de cette valeur, et vérifier que $n\geq N_\varepsilon\Rightarrow|u_n-\ell|<\varepsilon$.

**Tombe** : cours ex13 (et la négation de cette définition tombe en DS1 : DS24 ex6.1)

<details>
<summary>✏️ Correction étape par étape — $\frac1n\to0$ par la définition</summary>

**Étape 1 — Écrire ce qu'il faut montrer.** $\forall\varepsilon>0,\ \exists N,\ \forall n\geq N,\ \left|\frac1n-0\right|<\varepsilon$.

**Étape 2 — Brouillon.** $\frac1n<\varepsilon\iff n>\frac1\varepsilon$ : il faut un $N$ plus grand que $\frac1\varepsilon$.

**Étape 3 — Rédiger.** Soit $\varepsilon>0$. On pose $N=E(\frac1\varepsilon)+1$, entier $>\frac1\varepsilon$. Pour $n\geq N$ : $0<\frac1n\leq\frac1N<\varepsilon$ ✔.

**Étape 4 — Conclure.** $\frac1n\to0$.
</details>

---

## C4.12 — Trouver à partir de quel rang $u_n$ dépasse un seuil

**Méthode** : écrire l'inéquation avec le terme général, isoler $q^n$, appliquer $\ln$ (croissante) : $q^n\geq c\iff n\ln q\geq\ln c\iff n\geq\frac{\ln c}{\ln q}$ **si $q>1$** (si $0<q<1$, $\ln q<0$ : on retourne l'inégalité). Prendre le premier entier.

**Tombe** : TD4 ex5c

<details>
<summary>✏️ Correction étape par étape — TD4 ex5c : quand le capital a-t-il doublé ?</summary>

**Étape 1 — Traduire.** Doubler $10\,000$ € : $u_n\geq20\,000$, avec $u_n=16\,000\times1{,}05^n-6000$ (C4.1).

**Étape 2 — Isoler la puissance.** $16\,000\times1{,}05^n\geq26\,000\iff1{,}05^n\geq1{,}625$.

**Étape 3 — Appliquer ln** (croissante, l'inégalité est conservée) : $n\ln1{,}05\geq\ln1{,}625$.

**Étape 4 — Diviser par $\ln1{,}05>0$.** $n\geq\frac{\ln1{,}625}{\ln1{,}05}\approx9{,}95$.

**Étape 5 — Conclure en entier.** Le plus petit entier qui convient : **$n=10$ ans**.

⚠️ Si on divise par un $\ln$ **négatif** (base $<1$), le sens de l'inégalité change.
</details>
