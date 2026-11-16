# Chapitre 3 · Démonstrations — méthodes

> Toutes les méthodes du chapitre, compétence par compétence, sans les exercices. Exercices corrigés : [Chp 3-competences.md](Chp%203-competences.md) · [README](../competences-README.md)

## Sommaire

- C3.1 — Décider si une proposition quantifiée est vraie ou fausse
- C3.2 — Prouver un « pour tout » par la méthode directe
- C3.3 — Prouver par disjonction de cas
- C3.4 — Résoudre une équation / inéquation avec valeur absolue
- C3.5 — Résoudre une inéquation avec un quotient
- C3.6 — Construire l'élément d'un « il existe »
- C3.7 — Prouver une implication par contraposée
- C3.8 — Prouver par l'absurde
- C3.9 — Prouver une équivalence
- C3.10 — Prouver une égalité ou une inclusion d'ensembles
- C3.11 — Récurrence sur une somme $\sum$
- C3.12 — Récurrence sur une divisibilité
- C3.13 — Récurrence sur une inégalité
- C3.14 — Calculer et transformer des $\sum$ et $\prod$
- C3.15 — Vérifier qu'un élément appartient à un ensemble défini par conditions

---

## C3.1 — Décider si une proposition quantifiée est vraie ou fausse

**Méthode**
1. **Tester** quelques valeurs au brouillon (0, 1, −1, ½, grandes valeurs) pour se faire une idée.
2. Si elle semble **fausse** : écrire la négation (C1.5) et la prouver, souvent avec **un contre-exemple**.
3. Si elle semble **vraie** : $\exists$ → exhiber un élément (C3.6) ; $\forall$ → preuve générale (C3.2).
4. Toujours conclure par une phrase : « $P$ est fausse, donc non $P$ est vraie ».

---

## C3.2 — Prouver un « pour tout » par la méthode directe

**Méthode** : « Soit $x\in E$. » puis calcul **sans fixer de valeur**. Outils fréquents : mise sous forme canonique, signe d'un carré, $e^x>0$.

---

## C3.3 — Prouver par disjonction de cas

**Méthode**
1. Choisir des cas qui **recouvrent tout** : $n$ pair / impair ($n=2k$ ou $2k+1$), reste modulo 3, $x\geq 0$ / $x<0$.
2. Traiter chaque cas jusqu'au bout.
3. Conclure : « dans tous les cas… ».

---

## C3.4 — Résoudre une équation / inéquation avec valeur absolue

**Méthode**
1. **Isoler** la valeur absolue. Si on obtient $|\dots|=\text{négatif}$ ou $|\dots|\leq\text{négatif}$ : **pas de solution** (une valeur absolue est $\geq 0$).
2. Sinon, **deux cas** selon le signe de l'intérieur : $|A|=A$ si $A\geq 0$, $|A|=-A$ si $A<0$.
3. Dans chaque cas, résoudre **et intersecter** avec la condition du cas.
4. Réunir les solutions des deux cas.
5. Raccourcis : $|A|<c\iff -c<A<c$ ; $|A|>c\iff A<-c$ ou $A>c$ (pour $c$ constant $\geq0$).

---

## C3.5 — Résoudre une inéquation avec un quotient

**Méthode**
1. Noter la valeur interdite (dénominateur nul).
2. **Ne jamais multiplier par une quantité de signe inconnu** : faire deux cas, dénominateur $>0$ (on garde le sens) et $<0$ (on retourne les inégalités).
3. Alternative : tout passer d'un côté, réduire au même dénominateur, tableau de signes.

---

## C3.6 — Construire l'élément d'un « il existe »

**Méthode**
1. $\exists x$ seul : trouver au brouillon une valeur qui marche, puis « Posons $x=\dots$ » et vérifier.
2. $\forall x,\ \exists y$ : « Soit $x$. Posons $y=$ (formule en $x$) ». Outils classiques : $y=x+1$, $\frac{x+y}2$, $E(x)+1$ (partie entière), $\frac1{n^2+2}$.
3. Si on ne devine pas : analyse-synthèse (résoudre l'équation, puis vérifier).

---

## C3.7 — Prouver une implication par contraposée

**Méthode**
1. Écrire **explicitement** la contraposée : $P\Rightarrow Q$ devient $\neg Q\Rightarrow\neg P$ (nier correctement « et/ou », C1.5).
2. Supposer $\neg Q$, déduire $\neg P$.
3. À utiliser quand $Q$ est une **négation** (« n'est pas divisible », « $\neq$ ») : la contraposée la rend positive.

---

## C3.8 — Prouver par l'absurde

**Méthode**
1. « Supposons par l'absurde que non $P$. »
2. Dérouler jusqu'à une **contradiction** explicite ($-3=2$, un nombre pair et impair, $\sqrt2\in\mathbb Q$…).
3. Conclure « donc $P$ ». Typique pour : irrationalité, « n'existe pas », « est différent de », infinité.

---

## C3.9 — Prouver une équivalence

**Méthode** : soit une chaîne de $\iff$ (chaque étape réversible : pas de mise au carré ni de division par un nombre qui peut être nul sans précaution), soit (⇒) puis (⇐).

---

## C3.10 — Prouver une égalité ou une inclusion d'ensembles

**Méthode**
1. **Inclusion** $A\subset B$ : « Soit $x\in A$ » … « donc $x\in B$ ».
2. **Égalité** : double inclusion, ou chaîne $x\in A\iff\dots\iff x\in B$ en traduisant $\cap$ → et, $\cup$ → ou, $\setminus$ → et non (C2.7), puis règles logiques (distributivité, De Morgan).
3. Dans une inclusion avec « ou », faire une **disjonction de cas**.

---

## C3.11 — Récurrence sur une somme $\sum$

**Méthode**
1. Poser $P(n)$ : « $\sum_{k=\dots}^{n}\dots=$ formule ». Attention au **premier rang** ($n=0$ ou $n=1$).
2. **Initialisation** : calculer les deux côtés séparément.
3. **Hérédité** : $\sum_{k}^{n+1}=\underbrace{\sum_k^{n}}_{\text{H.R.}}+(\text{terme }n+1)$, remplacer par la formule, **factoriser** pour obtenir la formule en $n+1$ (calculer au brouillon la formule au rang $n+1$ pour savoir où aller).
4. Conclusion.

---

## C3.12 — Récurrence sur une divisibilité

**Méthode**
1. H.R. : « il existe $k\in\mathbb Z$ tel que $\text{expression}(n)=3k$ » (écrire le $k$ !).
2. Développer l'expression au rang $n+1$ et **faire apparaître l'expression au rang $n$**.
3. Le reste doit être un multiple du diviseur (factoriser par 3, 6…). Utile : $n(n+1)$ est pair.

---

## C3.13 — Récurrence sur une inégalité

**Méthode**
1. Partir du rang $n+1$ et y **faire apparaître le rang $n$** ($2^{n+1}=2\times 2^n$, $5^{n+1}=5\times 5^n$).
2. Appliquer l'H.R., puis montrer une inégalité **simple** qui conclut (souvent $n\geq 1$).

---

## C3.14 — Calculer et transformer des $\sum$ et $\prod$

**Méthode**
1. Calculer : écrire les termes un par un ; compter $N-n_0+1$ termes.
2. **Décomposition** : trouver $a,b$ avec $\frac1{k(k+1)}=\frac ak+\frac b{k+1}$ (tout mettre au même dénominateur et identifier).
3. **Télescopage** : $\sum(u_k-u_{k+1})=u_{\text{premier}}-u_{\text{dernier}+1}$ (les termes intermédiaires s'annulent).
4. Formule à connaître : $\sum_{k=1}^n k=\frac{n(n+1)}2$.

---

## C3.15 — Vérifier qu'un élément appartient à un ensemble défini par conditions

**Méthode** : reprendre **chaque condition** de la définition et la vérifier une par une, puis conclure.
