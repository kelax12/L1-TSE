# Chapitre 3 · Démonstrations — compétences

> Référentiel : [README](../competences-README.md) · Cours : [Chp 3-cours.md](Chp%203-cours.md)
>
> Coche `[x]` quand tu sais faire la compétence **sans regarder la méthode**. Les modèles de rédaction sont dans la fiche de cours.

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
<summary>✏️ Entraînement — DS22, DS23, DS20</summary>

- **DS22** « Tout réel strictement négatif est différent de son cube » : **faux**. $x^3=x\iff x(x-1)(x+1)=0$, et $x=-1<0$ vérifie $(-1)^3=-1$.
- **DS23** $P : \forall x\in\mathbb R,\ 2x-1\geq 2-x^2$ : **faux**, $x=0$ donne $-1\geq 2$. (En fait $x^2+2x-3=(x+3)(x-1)\geq 0$ seulement hors de $]-3,1[$.)
- **DS23** $Q : \forall A\in\mathcal P(\mathbb R),\ \exists m,\ \forall x\in A,\ x\leq m$ (« toute partie de ℝ est majorée ») : **faux**, $A=\mathbb N$ n'est pas majorée.
- **DS20** $\forall(x,y)\in\mathbb Q^2,\ x<y\Rightarrow\exists z\in\mathbb Q,\ x<z<y$ : **vrai**, $z=\frac{x+y}2\in\mathbb Q$.
- **TD2** $\exists x\in\mathbb R^*,\ \forall y\in\mathbb R^*,\ xy=1$ : **faux** ; pour tout $x$, $y=\frac1x+1$ donne $xy=1+x\neq 1$.
</details>

---

## C3.2 — Prouver un « pour tout » par la méthode directe

**Méthode** : « Soit $x\in E$. » puis calcul **sans fixer de valeur**. Outils fréquents : mise sous forme canonique, signe d'un carré, $e^x>0$.

**Tombe** : DS21 ex8.2 · TD2 ex5a · cours ex2

<details>
<summary>✏️ Entraînement — TD2 ex5a, DS21 ex8.2</summary>

- $\forall x\in\mathbb R,\ \frac1{1+e^x}\leq 1$ : soit $x\in\mathbb R$ ; $e^x>0$ donc $1+e^x\geq 1$, donc $\frac1{1+e^x}\leq 1$.
- $W=\lbrace(x,y)\in]0,2]\times\mathbb R_+^* : xy\in\mathbb Z,\ \frac xy\in\mathbb Z\rbrace$. Soit $(x,y)\in W$ ; $x^2=xy\cdot\frac xy$ est un produit de deux entiers, donc $x^2\in\mathbb Z$.
</details>

---

## C3.3 — Prouver par disjonction de cas

**Méthode**
1. Choisir des cas qui **recouvrent tout** : $n$ pair / impair ($n=2k$ ou $2k+1$), reste modulo 3, $x\geq 0$ / $x<0$.
2. Traiter chaque cas jusqu'au bout.
3. Conclure : « dans tous les cas… ».

**Tombe** : TD2 ex2c, ex3a · cours ex3

<details>
<summary>✏️ Entraînement — TD2 ex3a</summary>

$\forall n\in\mathbb N,\ n(n+1)$ est pair. Si $n=2k$ : $n(n+1)=2k(2k+1)$, pair. Si $n=2k+1$ : $n(n+1)=(2k+1)(2k+2)=2(2k+1)(k+1)$, pair.
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
<summary>✏️ Entraînement — DS21, DS24, DS23, DS20, TD2</summary>

- **DS21** $|2x-5|>3x+1$. Cas $x\geq\frac52$ : $2x-5>3x+1\iff x<-6$, incompatible. Cas $x<\frac52$ : $5-2x>3x+1\iff x<\frac45$. Solutions : $]-\infty,\frac45[$.
- **DS24** $3x+2<|x|$. Cas $x\geq 0$ : $3x+2<x\iff x<-1$, incompatible. Cas $x<0$ : $3x+2<-x\iff x<-\frac12$. Solutions : $]-\infty,-\frac12[$.
- **DS23** $3x-6<|x|$. Cas $x\geq0$ : $x<3$ → $[0,3[$. Cas $x<0$ : $4x<6$, toujours vrai → $]-\infty,0[$. Solutions : $]-\infty,3[$.
- **DS20** $2|x+1|+3\leq 1\iff|x+1|\leq-1$ : **aucune solution**.
- **TD2** $2|2x-3|-5=7\iff|2x-3|=6\iff 2x-3=\pm 6\iff x\in\lbrace -\frac32,\frac92\rbrace$.
</details>

---

## C3.5 — Résoudre une inéquation avec un quotient

**Méthode**
1. Noter la valeur interdite (dénominateur nul).
2. **Ne jamais multiplier par une quantité de signe inconnu** : faire deux cas, dénominateur $>0$ (on garde le sens) et $<0$ (on retourne les inégalités).
3. Alternative : tout passer d'un côté, réduire au même dénominateur, tableau de signes.

**Tombe** : DS20 ex6 · TD3 ex5

<details>
<summary>✏️ Entraînement — DS20 ex6</summary>

$A=\lbrace x\neq-1 : \frac12\leq\frac{x}{1+x}\leq 2\rbrace$.
- $x>-1$ ($1+x>0$) : $\frac{1+x}2\leq x\leq 2+2x\iff x\geq 1$ et $x\geq-2$ → $x\geq 1$.
- $x<-1$ ($1+x<0$, on retourne) : $\frac{1+x}2\geq x\geq 2+2x\iff x\leq 1$ et $x\leq-2$ → $x\leq-2$.

$A=]-\infty,-2]\cup[1,+\infty[$.
</details>

---

## C3.6 — Construire l'élément d'un « il existe »

**Méthode**
1. $\exists x$ seul : trouver au brouillon une valeur qui marche, puis « Posons $x=\dots$ » et vérifier.
2. $\forall x,\ \exists y$ : « Soit $x$. Posons $y=$ (formule en $x$) ». Outils classiques : $y=x+1$, $\frac{x+y}2$, $E(x)+1$ (partie entière), $\frac1{n^2+2}$.
3. Si on ne devine pas : analyse-synthèse (résoudre l'équation, puis vérifier).

**Tombe** : DS20 ex3.2 · TD2 ex1a, 1c, 1d, ex6a, 6e

<details>
<summary>✏️ Entraînement — TD2 ex1</summary>

- $\exists x\in\mathbb R,\ x^2+\frac18<x$ : $x=\frac12$ donne $\frac38<\frac12$.
- $\forall n\in\mathbb N,\ \exists\varepsilon>0,\ \varepsilon<\frac1{n^2+1}$ : soit $n$ ; $\varepsilon=\frac1{n^2+2}$ convient.
- $\forall x\in\mathbb R,\ \exists n\in\mathbb N,\ x\leq n$ : soit $x$ ; $n=E(|x|)+1$ convient (le corrigé du TD prend $E(x)+1$).
</details>

---

## C3.7 — Prouver une implication par contraposée

**Méthode**
1. Écrire **explicitement** la contraposée : $P\Rightarrow Q$ devient $\neg Q\Rightarrow\neg P$ (nier correctement « et/ou », C1.5).
2. Supposer $\neg Q$, déduire $\neg P$.
3. À utiliser quand $Q$ est une **négation** (« n'est pas divisible », « $\neq$ ») : la contraposée la rend positive.

**Tombe** : DS21 ex5.2 · TD3 ex2, ex5 · cours ex20

<details>
<summary>✏️ Entraînement — DS21 ex5.2 et TD3 ex2</summary>

- **DS21** $\forall x,y\in\mathbb R,\ xy+2x+y\leq 14\Rightarrow(x\leq 3\lor y\leq 2)$. Contraposée : $x>3$ et $y>2$ ⇒ $xy+2x+y>14$. En effet $xy>6$, $2x>6$, $y>2$, d'où $xy+2x+y>14$.
- **TD3** $n^2$ non divisible par 3 ⇒ $n$ non divisible par 3. Contraposée : $n=3k$ ⇒ $n^2=3(3k^2)$ divisible par 3.
</details>

---

## C3.8 — Prouver par l'absurde

**Méthode**
1. « Supposons par l'absurde que non $P$. »
2. Dérouler jusqu'à une **contradiction** explicite ($-3=2$, un nombre pair et impair, $\sqrt2\in\mathbb Q$…).
3. Conclure « donc $P$ ». Typique pour : irrationalité, « n'existe pas », « est différent de », infinité.

**Tombe** : TD3 ex1, ex4 · TD2 ex6d · cours ex22

<details>
<summary>✏️ Entraînement — TD3</summary>

- $\forall x\neq-2,\ \frac{x-3}{x+2}\neq 1$ : si $\frac{x-3}{x+2}=1$, alors $x-3=x+2$, soit $-3=2$ : absurde.
- $a\in\mathbb Q$, $b\notin\mathbb Q$ ⇒ $a+b\notin\mathbb Q$ : sinon $b=(a+b)-a\in\mathbb Q$, absurde.
- $x^2-y^2=6$ n'a pas de solution entière positive : $(x+y)(x-y)=6$, donc $\lbrace x+y,x-y\rbrace$ vaut $\lbrace 6,1\rbrace$ ou $\lbrace 3,2\rbrace$, ce qui donne $2x=7$ ou $2x=5$ : absurde.
</details>

---

## C3.9 — Prouver une équivalence

**Méthode** : soit une chaîne de $\iff$ (chaque étape réversible : pas de mise au carré ni de division par un nombre qui peut être nul sans précaution), soit (⇒) puis (⇐).

**Tombe** : TD2 ex1e, ex4 · cours ex12, ex13

<details>
<summary>✏️ Entraînement — TD2 ex1e</summary>

$\forall n\in\mathbb N,\ (n<2\iff n^2=n)$. (⇒) $n=0$ ou $1$, et $0^2=0$, $1^2=1$. (⇐) $n^2=n\iff n(n-1)=0\iff n\in\lbrace 0,1\rbrace$, donc $n<2$.
</details>

---

## C3.10 — Prouver une égalité ou une inclusion d'ensembles

**Méthode**
1. **Inclusion** $A\subset B$ : « Soit $x\in A$ » … « donc $x\in B$ ».
2. **Égalité** : double inclusion, ou chaîne $x\in A\iff\dots\iff x\in B$ en traduisant $\cap$ → et, $\cup$ → ou, $\setminus$ → et non (C2.7), puis règles logiques (distributivité, De Morgan).
3. Dans une inclusion avec « ou », faire une **disjonction de cas**.

**Tombe** : DS25 ex5 · DS21 ex8.3 · TD2 ex4, ex8 · TD1 ex1b · cours ex14–16

<details>
<summary>✏️ Entraînement — DS25 ex5 et DS21 ex8.3</summary>

**DS25** $(A\cup B)\setminus(A\cap B)=(A\setminus B)\cup(B\setminus A)$.
⊂ : soit $x\in(A\cup B)\setminus(A\cap B)$. Si $x\in A$, alors $x\notin B$ (sinon $x\in A\cap B$), donc $x\in A\setminus B$. Si $x\in B$, de même $x\in B\setminus A$.
⊃ : soit $x\in A\setminus B$ : $x\in A\subset A\cup B$ et $x\notin B$ donc $x\notin A\cap B$. Idem pour $B\setminus A$.

**DS21** $\lbrace x\in]0,2] : x^2\in\mathbb Z\rbrace=\lbrace 1,\sqrt2,\sqrt3,2\rbrace$.
⊂ : $x^2\in]0,4]\cap\mathbb Z=\lbrace 1,2,3,4\rbrace$ et $x>0$, donc $x\in\lbrace 1,\sqrt2,\sqrt3,2\rbrace$. ⊃ : ces quatre nombres sont dans $]0,2]$ et leurs carrés $1,2,3,4$ sont entiers.
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
<summary>✏️ Entraînement — DS21 ex7</summary>

$\forall n\geq 1,\ \sum_{k=1}^{n}k(k+1)=\frac13n(n+1)(n+2)$.
Init : $n=1$ : $1\times 2=2=\frac13\cdot 1\cdot 2\cdot 3$.
Hérédité : $\sum_{k=1}^{n+1}k(k+1)=\frac13n(n+1)(n+2)+(n+1)(n+2)=(n+1)(n+2)\left(\frac n3+1\right)=\frac13(n+1)(n+2)(n+3)$.

**DS20** (même méthode) : $\sum_{k=0}^n(k+1)(3k-2)=n^3+2n^2-n-2$ ; hérédité : $n^3+2n^2-n-2+(n+2)(3n+1)=n^3+5n^2+6n$, qui est bien la formule au rang $n+1$.
</details>

---

## C3.12 — Récurrence sur une divisibilité

**Méthode**
1. H.R. : « il existe $k\in\mathbb Z$ tel que $\text{expression}(n)=3k$ » (écrire le $k$ !).
2. Développer l'expression au rang $n+1$ et **faire apparaître l'expression au rang $n$**.
3. Le reste doit être un multiple du diviseur (factoriser par 3, 6…). Utile : $n(n+1)$ est pair.

**Tombe** : DS25 ex6 · TD3 ex3a, ex6a

<details>
<summary>✏️ Entraînement — DS25 ex6</summary>

$\forall n\in\mathbb N,\ 3\mid n^3-n$. Init : $0=3\times 0$. Hérédité : $n^3-n=3k$ et
$(n+1)^3-(n+1)=n^3+3n^2+3n+1-n-1=(n^3-n)+3(n^2+n)=3(k+n^2+n)$.

**TD3** $3\mid 4^n-1$ : $4^{n+1}-1=4(4^n-1)+3=3(4k+1)$.
</details>

---

## C3.13 — Récurrence sur une inégalité

**Méthode**
1. Partir du rang $n+1$ et y **faire apparaître le rang $n$** ($2^{n+1}=2\times 2^n$, $5^{n+1}=5\times 5^n$).
2. Appliquer l'H.R., puis montrer une inégalité **simple** qui conclut (souvent $n\geq 1$).

**Tombe** : DS24 ex8 · cours ex21

<details>
<summary>✏️ Entraînement — DS24 ex8</summary>

$\forall n\geq 1,\ 2^n>n$. Init : $2>1$. Hérédité : $2^{n+1}=2\cdot 2^n>2n=n+n\geq n+1$ (car $n\geq 1$).
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
<summary>✏️ Entraînement — TD3 ex7</summary>

$\frac1{k(k+1)}=\frac ak+\frac b{k+1}=\frac{(a+b)k+a}{k(k+1)}$, donc $a=1$, $b=-1$. Puis
$\sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)=1-\frac1{n+1}$ (télescopage), à confirmer par récurrence si demandé.
</details>

---

## C3.15 — Vérifier qu'un élément appartient à un ensemble défini par conditions

**Méthode** : reprendre **chaque condition** de la définition et la vérifier une par une, puis conclure.

**Tombe** : DS21 ex8.1, 8.4

<details>
<summary>✏️ Entraînement — DS21 ex8</summary>

$W=\lbrace(x,y)\in]0,2]\times\mathbb R_+^* : xy\in\mathbb Z,\ \frac xy\in\mathbb Z\rbrace$ et $(\sqrt3,\frac1{\sqrt3})$ :
$\sqrt3\in]0,2]$, $\frac1{\sqrt3}>0$, $\sqrt3\cdot\frac1{\sqrt3}=1\in\mathbb Z$, $\frac{\sqrt3}{1/\sqrt3}=3\in\mathbb Z$. Donc $(\sqrt3,\frac1{\sqrt3})\in W$.
Par extension : $W=\lbrace(1,1),(\sqrt2,\frac1{\sqrt2}),(\sqrt2,\sqrt2),(\sqrt3,\frac1{\sqrt3}),(\sqrt3,\sqrt3),(2,\frac12),(2,1),(2,2)\rbrace$.
</details>
