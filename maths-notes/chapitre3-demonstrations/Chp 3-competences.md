# Chapitre 3 · Démonstrations — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 3-cours.md](Chp%203-cours.md)
>
> Chaque compétence = méthode + **correction étape par étape** d'exercices d'annales/TD. Coche `[x]` quand tu sais faire la compétence **sans regarder la méthode**. Les modèles de rédaction sont dans la fiche de cours.

## ✅ Suivi

**Vrai / faux et existence**
- [ ] C3.1 — Décider si une proposition quantifiée est vraie ou fausse, et le prouver
- [ ] C3.2 — Prouver un « pour tout » par la méthode directe
- [ ] C3.3 — Prouver par disjonction de cas (parité, divisibilité)
- [ ] C3.4 — Résoudre une équation / inéquation avec valeur absolue
- [ ] C3.5 — Résoudre une inéquation avec un quotient (signe du dénominateur)
- [ ] C3.6 — Construire l'élément d'un « il existe » (y compris dépendant de $x$)

**Implications et ensembles**
- [ ] C3.7 — Prouver une implication par contraposée
- [ ] C3.8 — Prouver par l'absurde
- [ ] C3.9 — Prouver une équivalence (double implication)
- [ ] C3.10 — Prouver une égalité ou une inclusion d'ensembles
- [ ] C3.15 — Vérifier qu'un élément appartient à un ensemble défini par conditions

**Récurrence et sommes**
- [ ] C3.11 — Récurrence sur une somme $\sum$
- [ ] C3.12 — Récurrence sur une divisibilité
- [ ] C3.13 — Récurrence sur une inégalité
- [ ] C3.14 — Calculer et transformer des $\sum$ / $\prod$ (télescopage, décomposition)

---

## C3.1 — Décider si une proposition quantifiée est vraie ou fausse

**Méthode**
1. **Tester** quelques valeurs au brouillon (0, 1, −1, ½, grandes valeurs) pour se faire une idée.
2. Si elle semble **fausse** : écrire la négation (C1.5) et la prouver, souvent avec **un contre-exemple**.
3. Si elle semble **vraie** : $\exists$ → exhiber un élément (C3.6) ; $\forall$ → preuve générale (C3.2).
4. Toujours conclure par une phrase : « $P$ est fausse, donc non $P$ est vraie ».

**Tombe** : DS20 ex3.2 · DS22 ex6.2, ex7.2 · DS23 ex6.1b, 6.2b · TD2 ex1, ex2, ex5, ex6

<details>
<summary>✏️ Correction étape par étape — DS22 : « Tout réel strictement négatif est différent de son cube »</summary>

**Étape 1 — Traduire.** $\forall x<0,\ x^3\neq x$.

**Étape 2 — Deviner vrai ou faux.** Chercher les réels égaux à leur cube : $x^3=x\iff x^3-x=0\iff x(x-1)(x+1)=0\iff x\in\lbrace-1,0,1\rbrace$.

**Étape 3 — Conclure.** $-1$ est strictement négatif et $(-1)^3=-1$ : c'est un **contre-exemple**. La proposition est **fausse**.

💡 Un « pour tout » faux se prouve avec **un seul** contre-exemple explicite.
</details>

<details>
<summary>✏️ Correction étape par étape — DS23, DS20, TD2</summary>

**DS23** $P : \forall x\in\mathbb R,\ 2x-1\geq 2-x^2$
1. Tester une valeur simple : $x=0$ donne $-1\geq2$, faux.
2. **Faux** (contre-exemple $x=0$). Pour comprendre : $x^2+2x-3=(x+3)(x-1)\geq0$ seulement hors de $]-3,1[$.

**DS23** $Q : \forall A\in\mathcal P(\mathbb R),\ \exists m,\ \forall x\in A,\ x\leq m$
1. Lire en français : « toute partie de $\mathbb R$ est majorée ».
2. Contre-exemple : $A=\mathbb N$ ; pour tout $m$, l'entier $E(|m|)+1$ est dans $A$ et dépasse $m$.
3. **Faux.**

**DS20** $\forall(x,y)\in\mathbb Q^2,\ x<y\Rightarrow\exists z\in\mathbb Q,\ x<z<y$
1. Intuition : entre deux rationnels, le milieu.
2. Soient $x<y$ rationnels. On pose $z=\frac{x+y}2$ : rationnel (somme et quotient de rationnels).
3. $x<\frac{x+y}2\iff 2x<x+y\iff x<y$ ✔, et de même $\frac{x+y}2<y$.
4. **Vrai.**

**TD2** $\exists x\in\mathbb R^*,\ \forall y\in\mathbb R^*,\ xy=1$
1. Lire : un même $x$ qui donnerait $xy=1$ pour **tous** les $y$ ; impossible.
2. On prouve la négation : $\forall x\neq0,\ \exists y\neq0,\ xy\neq1$. Soit $x\neq0$ ; on prend $y=\frac1x+1$ (si $y=0$, prendre $y=2/x$). Alors $xy=1+x\neq1$.
3. **Faux.**
</details>

---

## C3.2 — Prouver un « pour tout » par la méthode directe

**Méthode** : « Soit $x\in E$. » puis calcul **sans fixer de valeur**. Outils fréquents : mise sous forme canonique, signe d'un carré, $e^x>0$.

**Tombe** : DS21 ex8.2 · TD2 ex5a · cours ex2

<details>
<summary>✏️ Correction étape par étape — TD2 ex5a : $\forall x\in\mathbb R,\ \frac1{1+e^x}\leq 1$</summary>

**Étape 1 — Fixer.** « Soit $x\in\mathbb R$. »

**Étape 2 — Partir d'un fait connu.** $e^x>0$.

**Étape 3 — Enchaîner.** On ajoute 1 : $1+e^x>1>0$. La fonction inverse est décroissante sur $]0,+\infty[$ : $\frac1{1+e^x}<\frac11=1$.

**Étape 4 — Conclure.** $\frac1{1+e^x}\leq1$ pour tout $x$ réel.
</details>

<details>
<summary>✏️ Correction étape par étape — DS21 ex8.2 : si $(x,y)\in W$ alors $x^2\in\mathbb Z$</summary>

$W=\lbrace(x,y)\in]0,2]\times\mathbb R_+^* : xy\in\mathbb Z,\ \frac xy\in\mathbb Z\rbrace$.

**Étape 1 — Fixer.** « Soit $(x,y)\in W$. » On dispose de $xy\in\mathbb Z$ et $\frac xy\in\mathbb Z$.

**Étape 2 — Faire apparaître $x^2$ avec ces deux quantités.** $xy\times\frac xy=x^2$.

**Étape 3 — Conclure.** Un produit de deux entiers est un entier : $x^2\in\mathbb Z$.
</details>

---

## C3.3 — Prouver par disjonction de cas

**Méthode**
1. Choisir des cas qui **recouvrent tout** : $n$ pair / impair ($n=2k$ ou $2k+1$), reste modulo 3, $x\geq 0$ / $x<0$.
2. Traiter chaque cas jusqu'au bout.
3. Conclure : « dans tous les cas… ».

**Tombe** : TD2 ex2c, ex3a · cours ex3

<details>
<summary>✏️ Correction étape par étape — TD2 ex3a : $\forall n\in\mathbb N,\ n(n+1)$ est pair</summary>

**Étape 1 — Choisir les cas.** Parité de $n$ : $n=2k$ ou $n=2k+1$ ($k\in\mathbb N$). Les deux cas couvrent tous les entiers.

**Étape 2 — Cas $n=2k$.** $n(n+1)=2k(2k+1)=2\times[k(2k+1)]$ : pair.

**Étape 3 — Cas $n=2k+1$.** $n+1=2k+2=2(k+1)$, donc $n(n+1)=2\times[(2k+1)(k+1)]$ : pair.

**Étape 4 — Conclure.** Dans les deux cas, $n(n+1)$ est pair.
</details>

---

## C3.4 — Résoudre une équation / inéquation avec valeur absolue

**Méthode**
1. **Isoler** la valeur absolue. Si on obtient $|\dots|=\text{négatif}$ ou $|\dots|\leq\text{négatif}$ : **pas de solution** (une valeur absolue est $\geq 0$).
2. Sinon, **deux cas** selon le signe de l'intérieur : $|A|=A$ si $A\geq 0$, $|A|=-A$ si $A<0$.
3. Dans chaque cas, résoudre **et intersecter** avec la condition du cas.
4. Réunir les solutions des deux cas.
5. Raccourcis : $|A|<c\iff -c<A<c$ ; $|A|>c\iff A<-c$ ou $A>c$ (pour $c$ constant $\geq0$).

**Tombe** : DS20 ex4 · DS21 ex6 · DS22 ex5.1 · DS23 ex5.3 · DS24 ex3.3 · TD2 ex3b, ex7 → **5/6 DS1**

<details>
<summary>✏️ Correction étape par étape — DS21 : $|2x-5|>3x+1$</summary>

**Étape 1 — Point de bascule.** $2x-5=0\iff x=\frac52$.

**Étape 2 — Cas $x\geq\frac52$.** $|2x-5|=2x-5$. L'inéquation devient $2x-5>3x+1\iff x<-6$. Incompatible avec $x\geq\frac52$ : **aucune solution** dans ce cas.

**Étape 3 — Cas $x<\frac52$.** $|2x-5|=5-2x$. L'inéquation devient $5-2x>3x+1\iff4>5x\iff x<\frac45$. Avec $x<\frac52$ : $x<\frac45$.

**Étape 4 — Réunir.** $S=\,]-\infty,\frac45[$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS24, DS23, DS20, TD2</summary>

**DS24** $3x+2<|x|$
1. Cas $x\geq0$ : $3x+2<x\iff x<-1$ → incompatible.
2. Cas $x<0$ : $3x+2<-x\iff4x<-2\iff x<-\frac12$ → compatible.
3. $S=\,]-\infty,-\frac12[$.

**DS23** $3x-6<|x|$
1. Cas $x\geq0$ : $3x-6<x\iff x<3$ → $[0,3[$.
2. Cas $x<0$ : $3x-6<-x\iff x<\frac32$, toujours vrai pour $x<0$ → $]-\infty,0[$.
3. $S=\,]-\infty,3[$.

**DS20** $2|x+1|+3\leq 1$
1. Isoler la valeur absolue : $|x+1|\leq-1$.
2. Une valeur absolue est $\geq0>-1$ : **aucune solution**.

**TD2** $2|2x-3|-5=7$
1. Isoler : $|2x-3|=6$.
2. $|A|=6\iff A=6$ ou $A=-6$ : $2x=9$ ou $2x=-3$.
3. $S=\lbrace-\frac32,\frac92\rbrace$.
</details>

---

## C3.5 — Résoudre une inéquation avec un quotient

**Méthode**
1. Noter la valeur interdite (dénominateur nul).
2. **Ne jamais multiplier par une quantité de signe inconnu** : faire deux cas, dénominateur $>0$ (on garde le sens) et $<0$ (on retourne les inégalités).
3. Alternative : tout passer d'un côté, réduire au même dénominateur, tableau de signes.

**Tombe** : DS20 ex6 · TD3 ex5

<details>
<summary>✏️ Correction étape par étape — DS20 ex6 : $A=\lbrace x\neq-1 : \frac12\leq\frac{x}{1+x}\leq 2\rbrace$</summary>

**Étape 1 — Signe du dénominateur.** On ne peut multiplier par $1+x$ qu'en connaissant son signe : deux cas.

**Étape 2 — Cas $x>-1$ ($1+x>0$, le sens est conservé).**
- $\frac12\leq\frac x{1+x}\iff1+x\leq2x\iff x\geq1$.
- $\frac x{1+x}\leq2\iff x\leq2+2x\iff x\geq-2$.
- Ensemble : $x\geq1$ (et bien $>-1$).

**Étape 3 — Cas $x<-1$ ($1+x<0$, les inégalités se retournent).**
- $\frac12\leq\frac x{1+x}\iff1+x\geq2x\iff x\leq1$.
- $\frac x{1+x}\leq2\iff x\geq2+2x\iff x\leq-2$.
- Ensemble : $x\leq-2$ (et bien $<-1$).

**Étape 4 — Réunir.** $A=\,]-\infty,-2]\cup[1,+\infty[$.

**Contrôle** : $x=1$ donne $\frac12$ ✔ ; $x=-2$ donne $\frac{-2}{-1}=2$ ✔.
</details>

---

## C3.6 — Construire l'élément d'un « il existe »

**Méthode**
1. $\exists x$ seul : trouver au brouillon une valeur qui marche, puis « Posons $x=\dots$ » et vérifier.
2. $\forall x,\ \exists y$ : « Soit $x$. Posons $y=$ (formule en $x$) ». Outils classiques : $y=x+1$, $\frac{x+y}2$, $E(x)+1$ (partie entière), $\frac1{n^2+2}$.
3. Si on ne devine pas : analyse-synthèse (résoudre l'équation, puis vérifier).

**Tombe** : DS20 ex3.2 · TD2 ex1a, 1c, 1d, ex6a, 6e

<details>
<summary>✏️ Correction étape par étape — TD2 ex1</summary>

**$\exists x\in\mathbb R,\ x^2+\frac18<x$**
1. Brouillon : $x^2-x+\frac18<0$ ; le minimum de $x^2-x$ est en $x=\frac12$.
2. On propose $x=\frac12$.
3. Vérification : $\frac14+\frac18=\frac38<\frac12$ ✔.

**$\forall n\in\mathbb N,\ \exists\varepsilon>0,\ \varepsilon<\frac1{n^2+1}$**
1. « Soit $n\in\mathbb N$. » Le $\varepsilon$ peut dépendre de $n$.
2. On propose $\varepsilon=\frac1{n^2+2}$.
3. Vérification : $\varepsilon>0$, et $n^2+2>n^2+1$ donc $\frac1{n^2+2}<\frac1{n^2+1}$ ✔.

**$\forall x\in\mathbb R,\ \exists n\in\mathbb N,\ x\leq n$**
1. « Soit $x\in\mathbb R$. »
2. On propose $n=E(|x|)+1$, qui est un entier naturel.
3. Vérification : $x\leq|x|<E(|x|)+1=n$ ✔.
</details>

---

## C3.7 — Prouver une implication par contraposée

**Méthode**
1. Écrire **explicitement** la contraposée : $P\Rightarrow Q$ devient $\neg Q\Rightarrow\neg P$ (nier correctement « et/ou », C1.5).
2. Supposer $\neg Q$, déduire $\neg P$.
3. À utiliser quand $Q$ est une **négation** (« n'est pas divisible », « $\neq$ ») : la contraposée la rend positive.

**Tombe** : DS21 ex5.2 · TD3 ex2, ex5 · cours ex20

<details>
<summary>✏️ Correction étape par étape — DS21 ex5.2</summary>

À montrer : $\forall x,y\in\mathbb R,\ xy+2x+y\leq 14\Rightarrow(x\leq 3\lor y\leq 2)$.

**Étape 1 — Écrire la contraposée.** non(conclusion) ⇒ non(hypothèse) : $(x>3\land y>2)\Rightarrow xy+2x+y>14$.

**Étape 2 — Supposer l'hypothèse.** Soient $x>3$ et $y>2$.

**Étape 3 — Minorer chaque terme.** $xy>3\times2=6$ (produit de positifs), $2x>6$, $y>2$.

**Étape 4 — Additionner.** $xy+2x+y>6+6+2=14$ ✔.

**Étape 5 — Conclure.** La contraposée est vraie, donc la proposition aussi.
</details>

<details>
<summary>✏️ Correction étape par étape — TD3 ex2</summary>

À montrer : $n^2$ non divisible par 3 ⇒ $n$ non divisible par 3.
1. Contraposée : $n$ divisible par 3 ⇒ $n^2$ divisible par 3.
2. Soit $n=3k$. Alors $n^2=9k^2=3(3k^2)$, divisible par 3 ✔.
</details>

---

## C3.8 — Prouver par l'absurde

**Méthode**
1. « Supposons par l'absurde que non $P$. »
2. Dérouler jusqu'à une **contradiction** explicite ($-3=2$, un nombre pair et impair, $\sqrt2\in\mathbb Q$…).
3. Conclure « donc $P$ ». Typique pour : irrationalité, « n'existe pas », « est différent de », infinité.

**Tombe** : TD3 ex1, ex4 · TD2 ex6d · cours ex22

<details>
<summary>✏️ Correction étape par étape — TD3</summary>

**$\forall x\neq-2,\ \frac{x-3}{x+2}\neq 1$**
1. Supposons le contraire : il existe $x\neq-2$ avec $\frac{x-3}{x+2}=1$.
2. On multiplie par $x+2\neq0$ : $x-3=x+2$.
3. On simplifie : $-3=2$. **Absurde.**

**$a\in\mathbb Q$, $b\notin\mathbb Q$ ⇒ $a+b\notin\mathbb Q$**
1. Supposons $a+b\in\mathbb Q$.
2. Alors $b=(a+b)-a$ est une différence de deux rationnels, donc rationnel.
3. Contradiction avec $b\notin\mathbb Q$.

**$x^2-y^2=6$ n'a pas de solution dans $\mathbb N$**
1. Supposons $x,y\in\mathbb N$ avec $(x+y)(x-y)=6$.
2. $x+y\geq x-y$ et $x+y>0$, donc $x-y>0$ : $(x+y,x-y)\in\lbrace(6,1),(3,2)\rbrace$.
3. En additionnant : $2x=7$ ou $2x=5$, impossible pour un entier. **Absurde.**
</details>

---

## C3.9 — Prouver une équivalence

**Méthode** : soit une chaîne de $\iff$ (chaque étape réversible : pas de mise au carré ni de division par un nombre qui peut être nul sans précaution), soit (⇒) puis (⇐).

**Tombe** : TD2 ex1e, ex4 · cours ex12, ex13

<details>
<summary>✏️ Correction étape par étape — TD2 ex1e : $\forall n\in\mathbb N,\ (n<2\iff n^2=n)$</summary>

**Étape 1 — Annoncer les deux sens.** Soit $n\in\mathbb N$.

**Étape 2 — Sens ⇒.** Si $n<2$, alors $n=0$ ou $n=1$. $0^2=0$ et $1^2=1$ : $n^2=n$ ✔.

**Étape 3 — Sens ⇐.** Si $n^2=n$, alors $n(n-1)=0$, donc $n=0$ ou $n=1$, donc $n<2$ ✔.

**Étape 4 — Conclure.** Les deux implications sont vraies : équivalence.
</details>

---

## C3.10 — Prouver une égalité ou une inclusion d'ensembles

**Méthode**
1. **Inclusion** $A\subset B$ : « Soit $x\in A$ » … « donc $x\in B$ ».
2. **Égalité** : double inclusion, ou chaîne $x\in A\iff\dots\iff x\in B$ en traduisant $\cap$ → et, $\cup$ → ou, $\setminus$ → et non (C2.7), puis règles logiques (distributivité, De Morgan).
3. Dans une inclusion avec « ou », faire une **disjonction de cas**.

**Tombe** : DS25 ex5 · DS21 ex8.3 · TD2 ex4, ex8 · TD1 ex1b · cours ex14–16

<details>
<summary>✏️ Correction étape par étape — DS25 ex5 : $(A\cup B)\setminus(A\cap B)=(A\setminus B)\cup(B\setminus A)$</summary>

**Étape 1 — Inclusion ⊂.** Soit $x\in(A\cup B)\setminus(A\cap B)$ : $x\in A$ ou $x\in B$, et $x$ n'est pas dans les deux.
- Si $x\in A$ : comme il n'est pas dans les deux, $x\notin B$, donc $x\in A\setminus B$.
- Si $x\in B$ : de même $x\notin A$, donc $x\in B\setminus A$.
- Dans tous les cas $x\in(A\setminus B)\cup(B\setminus A)$.

**Étape 2 — Inclusion ⊃.** Soit $x\in(A\setminus B)\cup(B\setminus A)$.
- Si $x\in A\setminus B$ : $x\in A\subset A\cup B$, et $x\notin B$ donc $x\notin A\cap B$.
- Si $x\in B\setminus A$ : symétrique.
- Donc $x\in(A\cup B)\setminus(A\cap B)$.

**Étape 3 — Conclure** par double inclusion.
</details>

<details>
<summary>✏️ Correction étape par étape — DS21 ex8.3 : $\lbrace x\in]0,2] : x^2\in\mathbb Z\rbrace=\lbrace 1,\sqrt2,\sqrt3,2\rbrace$</summary>

**Étape 1 — ⊂.** Soit $x\in\,]0,2]$ avec $x^2\in\mathbb Z$. Alors $0<x^2\leq4$, donc $x^2\in\lbrace1,2,3,4\rbrace$. Comme $x>0$ : $x=\sqrt{x^2}\in\lbrace1,\sqrt2,\sqrt3,2\rbrace$.

**Étape 2 — ⊃.** Chacun des quatre nombres est dans $]0,2]$ ($\sqrt3\approx1{,}73$) et a un carré entier ($1,2,3,4$).

**Étape 3 — Conclure** : égalité.
</details>

---

## C3.11 — Récurrence sur une somme $\sum$

**Méthode**
1. Poser $P(n)$ : « $\sum_{k=\dots}^{n}\dots=$ formule ». Attention au **premier rang** ($n=0$ ou $n=1$).
2. **Initialisation** : calculer les deux côtés séparément.
3. **Hérédité** : $\sum_{k}^{n+1}=\underbrace{\sum_k^{n}}_{\text{H.R.}}+(\text{terme }n+1)$, remplacer par la formule, **factoriser** pour obtenir la formule en $n+1$ (calculer au brouillon la formule au rang $n+1$ pour savoir où aller).
4. Conclusion.

**Tombe** : DS20 ex7 · DS21 ex7 · TD3 ex3b, ex7b

<details>
<summary>✏️ Correction étape par étape — DS21 ex7 : $\sum_{k=1}^{n}k(k+1)=\frac13n(n+1)(n+2)$</summary>

**Étape 1 — Énoncer.** $P(n)$ : « $\sum_{k=1}^{n}k(k+1)=\frac13n(n+1)(n+2)$ », pour $n\geq1$.

**Étape 2 — Initialisation ($n=1$).** Gauche : $1\times2=2$. Droite : $\frac13\times1\times2\times3=2$ ✔.

**Étape 3 — Hérédité.** Supposons $P(n)$. On sépare le dernier terme :
$$\sum_{k=1}^{n+1}k(k+1)=\underbrace{\sum_{k=1}^{n}k(k+1)}_{=\frac13n(n+1)(n+2)\text{ par }P(n)}+(n+1)(n+2).$$

**Étape 4 — Factoriser** (ne pas développer !) par $(n+1)(n+2)$ :
$$=(n+1)(n+2)\left(\frac n3+1\right)=(n+1)(n+2)\frac{n+3}3=\frac13(n+1)(n+2)(n+3).$$
C'est $P(n+1)$ ✔.

**Étape 5 — Conclure.** Par récurrence, $P(n)$ est vraie pour tout $n\geq1$.
</details>

<details>
<summary>✏️ Correction étape par étape — DS20 : $\sum_{k=0}^n(k+1)(3k-2)=n^3+2n^2-n-2$</summary>

1. *Init* $n=0$ : gauche $1\times(-2)=-2$, droite $-2$ ✔.
2. *Hérédité* : on ajoute le terme $k=n+1$ : $(n+2)(3n+1)=3n^2+7n+2$.
3. Somme : $n^3+2n^2-n-2+3n^2+7n+2=n^3+5n^2+6n$.
4. Formule au rang $n+1$ : $(n+1)^3+2(n+1)^2-(n+1)-2=n^3+3n^2+3n+1+2n^2+4n+2-n-1-2=n^3+5n^2+6n$ ✔.
</details>

---

## C3.12 — Récurrence sur une divisibilité

**Méthode**
1. H.R. : « il existe $k\in\mathbb Z$ tel que $\text{expression}(n)=3k$ » (écrire le $k$ !).
2. Développer l'expression au rang $n+1$ et **faire apparaître l'expression au rang $n$**.
3. Le reste doit être un multiple du diviseur (factoriser par 3, 6…). Utile : $n(n+1)$ est pair.

**Tombe** : DS25 ex6 · TD3 ex3a, ex6a

<details>
<summary>✏️ Correction étape par étape — DS25 ex6 : $\forall n\in\mathbb N,\ 3\mid n^3-n$</summary>

**Étape 1 — Énoncer.** $P(n)$ : « il existe $k\in\mathbb Z$ tel que $n^3-n=3k$ ».

**Étape 2 — Initialisation.** $0^3-0=0=3\times0$ ✔.

**Étape 3 — Hérédité.** Supposons $n^3-n=3k$. On développe :
$$(n+1)^3-(n+1)=n^3+3n^2+3n+1-n-1=(n^3-n)+3n^2+3n.$$

**Étape 4 — Faire apparaître l'hypothèse.** $=3k+3(n^2+n)=3(k+n^2+n)$, multiple de 3 ✔.

**Étape 5 — Conclure** par récurrence.
</details>

<details>
<summary>✏️ Correction étape par étape — TD3 : $3\mid 4^n-1$</summary>

1. *Init* : $4^0-1=0$ ✔.
2. *Hérédité* : $4^n-1=3k$. On écrit $4^{n+1}-1=4\times4^n-1=4(4^n-1)+4-1=4(4^n-1)+3$.
3. $=4\times3k+3=3(4k+1)$ ✔.
</details>

---

## C3.13 — Récurrence sur une inégalité

**Méthode**
1. Partir du rang $n+1$ et y **faire apparaître le rang $n$** ($2^{n+1}=2\times 2^n$, $5^{n+1}=5\times 5^n$).
2. Appliquer l'H.R., puis montrer une inégalité **simple** qui conclut (souvent $n\geq 1$).

**Tombe** : DS24 ex8 · cours ex21

<details>
<summary>✏️ Correction étape par étape — DS24 ex8 : $\forall n\geq 1,\ 2^n>n$</summary>

**Étape 1 — Initialisation ($n=1$).** $2^1=2>1$ ✔.

**Étape 2 — Hérédité.** Supposons $2^n>n$ pour un $n\geq1$. On veut $2^{n+1}>n+1$.

**Étape 3 — Utiliser l'hypothèse.** $2^{n+1}=2\times2^n>2n$.

**Étape 4 — Combler l'écart.** $2n=n+n\geq n+1$ car $n\geq1$. Donc $2^{n+1}>2n\geq n+1$ ✔.

**Étape 5 — Conclure** par récurrence.

💡 Pour une inégalité, on part d'un côté, on utilise $P(n)$, puis on compare au résultat voulu (souvent grâce à $n\geq1$).
</details>

---

## C3.14 — Calculer et transformer des $\sum$ et $\prod$

**Méthode**
1. Calculer : écrire les termes un par un ; compter $N-n_0+1$ termes.
2. **Décomposition** : trouver $a,b$ avec $\frac1{k(k+1)}=\frac ak+\frac b{k+1}$ (tout mettre au même dénominateur et identifier).
3. **Télescopage** : $\sum(u_k-u_{k+1})=u_{\text{premier}}-u_{\text{dernier}+1}$ (les termes intermédiaires s'annulent).
4. Formule à connaître : $\sum_{k=1}^n k=\frac{n(n+1)}2$.

**Tombe** : TD3 ex7 · cours ex17–19

<details>
<summary>✏️ Correction étape par étape — TD3 ex7 : $\sum_{k=1}^n\frac1{k(k+1)}$</summary>

**Étape 1 — Décomposer.** On cherche $a,b$ avec $\frac1{k(k+1)}=\frac ak+\frac b{k+1}=\frac{a(k+1)+bk}{k(k+1)}=\frac{(a+b)k+a}{k(k+1)}$.

**Étape 2 — Identifier.** Numérateur égal à 1 pour tout $k$ : $a+b=0$ et $a=1$, donc $b=-1$.

**Étape 3 — Écrire la somme.** $\sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\dots+\left(\frac1n-\frac1{n+1}\right)$.

**Étape 4 — Télescoper.** Tous les termes intermédiaires s'annulent : $=1-\frac1{n+1}=\frac n{n+1}$.
</details>

---

## C3.15 — Vérifier qu'un élément appartient à un ensemble défini par conditions

**Méthode** : reprendre **chaque condition** de la définition et la vérifier une par une, puis conclure.

**Tombe** : DS21 ex8.1, 8.4

<details>
<summary>✏️ Correction étape par étape — DS21 ex8</summary>

$W=\lbrace(x,y)\in]0,2]\times\mathbb R_+^* : xy\in\mathbb Z,\ \frac xy\in\mathbb Z\rbrace$.

**Question 1 — $(\sqrt3,\frac1{\sqrt3})\in W$ ?** On vérifie **chaque condition**, une par une :
1. $\sqrt3\approx1{,}73\in\,]0,2]$ ✔.
2. $\frac1{\sqrt3}>0$ ✔.
3. $\sqrt3\times\frac1{\sqrt3}=1\in\mathbb Z$ ✔.
4. $\frac{\sqrt3}{1/\sqrt3}=\sqrt3\times\sqrt3=3\in\mathbb Z$ ✔.

Donc $(\sqrt3,\frac1{\sqrt3})\in W$.

**Question 2 — $W$ par extension.**
1. Poser $a=xy\in\mathbb Z$ et $b=\frac xy\in\mathbb Z$, tous deux $>0$. Alors $x^2=ab$ et $y^2=\frac ab$.
2. Par C3.10, $x^2\in\lbrace1,2,3,4\rbrace$.
3. Lister les factorisations $ab=x^2$ et en déduire $y=\sqrt{a/b}$ :
   - $x=1$ : $(a,b)=(1,1)$ → $y=1$.
   - $x=\sqrt2$ : $(1,2)$ → $y=\frac1{\sqrt2}$ ; $(2,1)$ → $y=\sqrt2$.
   - $x=\sqrt3$ : $(1,3)$ → $y=\frac1{\sqrt3}$ ; $(3,1)$ → $y=\sqrt3$.
   - $x=2$ : $(1,4)$ → $y=\frac12$ ; $(2,2)$ → $y=1$ ; $(4,1)$ → $y=2$.
4. **Résultat** : $W=\lbrace(1,1),(\sqrt2,\frac1{\sqrt2}),(\sqrt2,\sqrt2),(\sqrt3,\frac1{\sqrt3}),(\sqrt3,\sqrt3),(2,\frac12),(2,1),(2,2)\rbrace$.
</details>
