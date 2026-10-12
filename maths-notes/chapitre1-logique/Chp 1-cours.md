# Chapitre 1 · Logique formelle

> Mathématiques 1 · N. Blacher · TSE
>
> **Format : fiche à blocs.** 🟦 définition · 🟩 théorème/règle · 🟥 piège · 💡 intuition (ajout hors slides) · ✏️ exemple corrigé (à déplier)

**Sommaire** : [1. Propositions](#1-propositions-et-prédicats) · [2. Quantificateurs](#2-quantificateurs) · [3. Connecteurs](#3-connecteurs-et-table-de-vérité) · [4. Règles de calcul](#4-règles-de-calcul) · [À retenir](#-à-retenir)

---

## 1. Propositions et prédicats

> [!NOTE]
> 🟦 **Proposition** : énoncé qui est soit vrai, soit faux, jamais les deux à la fois.
> Les vérités posées au départ sont les **axiomes** ; tout **théorème** en est déduit par les règles de la logique.

> [!IMPORTANT]
> 🟩 **Tiers exclu** : une proposition qui n'est pas vraie est fausse (et inversement).
> 🟩 **Non-contradiction** : une proposition n'est jamais vraie et fausse à la fois.

> [!NOTE]
> 🟦 **Prédicat** : énoncé qui dépend de variables ; il est vrai ou faux selon leurs valeurs.
> Ex. $(x+y)^2=x^2+y^2$ est vrai pour $x=0$, faux pour $x=999,\ y=1000$.

> [!CAUTION]
> 🟥 Les phrases qui parlent d'elles-mêmes (« Cette phrase est fausse ») ne sont pas des propositions.

---

## 2. Quantificateurs

| Symbole | Lecture | Le prédicat est vrai… |
|:-:|---|---|
| $\forall$ | pour tout | pour chaque valeur de l'ensemble |
| $\exists$ | il existe | pour au moins une valeur |
| $\exists!$ | il existe un unique | pour exactement une valeur |

> [!IMPORTANT]
> 🟩 **Négation des quantificateurs**
>
> $$\neg\big(\exists x\in A,\ Q(x)\big)\iff \forall x\in A,\ \neg Q(x)$$
>
> $$\neg\big(\forall x\in A,\ Q(x)\big)\iff \exists x\in A,\ \neg Q(x)$$
>
> On échange $\forall \leftrightarrow \exists$ et on nie le prédicat.

> [!CAUTION]
> 🟥 **L'ordre des quantificateurs compte.** « Pour tout étudiant, il existe quelqu'un qui lui doit de l'argent » ≠ « Il existe quelqu'un qui doit de l'argent à tous les étudiants ».

> [!TIP]
> 💡 **∀ et ∃ comme un jeu.** $\forall$ = l'adversaire choisit (tu dois gagner quel que soit son choix) ; $\exists$ = tu choisis.
> Dans « $\forall x,\ \exists y$ », l'adversaire choisit $x$ d'abord, puis tu choisis $y$ **en le connaissant** : $y$ peut dépendre de $x$.
> Dans « $\exists y,\ \forall x$ », tu choisis $y$ **avant** : un seul $y$ doit marcher pour tous.
> - $\forall x\in\mathbb Z,\ \exists y\in\mathbb Z,\ y>x$ : **vrai** ($y=x+1$).
> - $\exists y\in\mathbb Z,\ \forall x\in\mathbb Z,\ y>x$ : **faux** (pas de plus grand entier).

> [!TIP]
> 💡 **Nier mécaniquement.** On lit de gauche à droite : chaque $\forall$ devient $\exists$ (et inversement), **sans changer l'ensemble**, puis on nie la fin : $<$ devient $\geq$, « et » devient « ou », $P\Rightarrow Q$ devient $P\land\neg Q$.
>
> $$\neg\big(\forall\varepsilon>0,\ \exists N,\ \forall n\geq N,\ |u_n-\ell|<\varepsilon\big)\iff \exists\varepsilon>0,\ \forall N,\ \exists n\geq N,\ |u_n-\ell|\geq\varepsilon$$

<details>
<summary>✏️ Ex. 5 — compléter avec ∀, ∃ ou ∃!</summary>

- $\exists x\in\mathbb Z,\ x^2\leq 1$ (trois solutions : $-1, 0, 1$)
- $\forall x\in\mathbb Z,\ x^2\geq 0$
- $\exists!\,x\in\mathbb Z,\ x^2\leq 0$ (seulement $x=0$)
</details>

<details>
<summary>✏️ Ex. 7 — trouver la négation</summary>

- « Quelqu'un dans la salle mesure plus de 2 m » → « Tout le monde mesure 2 m ou moins ».
- $\exists x\in\mathbb Z,\ x^3\geq 1$ → $\forall x\in\mathbb Z,\ x^3<1$.
- $\forall x\in\mathbb R,\ x^2\geq 1$ → $\exists x\in\mathbb R,\ x^2<1$.
</details>

---

## 3. Connecteurs et table de vérité

| $P$ | $Q$ | $\neg P$ | $P\lor Q$ | $P\land Q$ | $P\Rightarrow Q$ | $P\iff Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| V | V | F | V | V | **V** | V |
| V | F | F | V | F | **F** | F |
| F | V | V | V | F | **V** | F |
| F | F | V | F | F | **V** | V |

> [!NOTE]
> 🟦 **Vocabulaire.** Si $P\Rightarrow Q$ : $P$ est une **condition suffisante** pour $Q$, et $Q$ une **condition nécessaire** pour $P$.
> $P\iff Q$ se lit « $P$ si et seulement si $Q$ ».
> Une **tautologie** est toujours vraie, quelles que soient les valeurs de ses composants (ex. $(A\lor B)\lor\neg A$).

> [!CAUTION]
> 🟥 Le « ou » mathématique est **inclusif** : thé, café, ou les deux.
>
> 🟥 $P\Rightarrow Q$ est **vraie dès que $P$ est fausse**. « S'il a plu, le sol est mouillé » reste vraie s'il n'a pas plu.

> [!TIP]
> 💡 **L'implication est une promesse.** « S'il pleut, je prends mon parapluie. » La promesse n'est rompue que dans un cas : il pleut et je ne le prends pas (V ⇒ F). S'il ne pleut pas, je n'ai rien promis : la promesse est tenue. D'où les trois « V ».

> [!TIP]
> 💡 **Nécessaire / suffisant.** « Être à Toulouse ⇒ être en France. » Être à Toulouse **suffit** pour être en France ; être en France est **nécessaire** mais ne suffit pas.

---

## 4. Règles de calcul

> [!IMPORTANT]
> 🟩 **Propriétés de ∧ et ∨**
> - Commutativité : $P\land Q\iff Q\land P$ (idem pour $\lor$)
> - Associativité : $(P\land Q)\land R\iff P\land(Q\land R)$ (idem pour $\lor$)
> - Distributivité : $P\land(Q\lor R)\iff(P\land Q)\lor(P\land R)$ et $P\lor(Q\land R)\iff(P\lor Q)\land(P\lor R)$

> [!IMPORTANT]
> 🟩 **Lois de De Morgan** (preuve : table de vérité)
>
> $$\neg(P\land Q)\iff \neg P\lor\neg Q \qquad\qquad \neg(P\lor Q)\iff\neg P\land\neg Q$$

> [!IMPORTANT]
> 🟩 **Implication — à connaître par cœur**
> - $(P\Rightarrow Q)\iff(\neg P\lor Q)$
> - $\neg(P\Rightarrow Q)\iff P\land\neg Q$
> - $(P\iff Q)\iff\big((P\Rightarrow Q)\land(Q\Rightarrow P)\big)$
> - Transitivité : $\big((P\Rightarrow Q)\land(Q\Rightarrow R)\big)\Rightarrow(P\Rightarrow R)$
> - **Contraposée** : $(P\Rightarrow Q)\iff(\neg Q\Rightarrow\neg P)$

> [!CAUTION]
> 🟥 La négation de « $P\Rightarrow Q$ » n'est **pas** une implication : c'est « $P$ **et** non $Q$ » (il a plu **et** le sol est sec).

> [!TIP]
> 💡 **De Morgan** : nier un « et » / « ou », c'est nier chaque morceau **et échanger le connecteur**. « Pas (riche et célèbre) » = « pas riche **ou** pas célèbre ». Même logique pour ∩/∪ (ch. 2) et ∀/∃.
>
> 💡 **Contraposée ≠ réciproque.** Contraposée de « Toulouse ⇒ France » : « pas en France ⇒ pas à Toulouse » (même sens, vrai). Réciproque : « France ⇒ Toulouse » (autre phrase, faux).

<details>
<summary>✏️ Ex. 9 — la porte d'Alice, Bob et Carole</summary>

Ouverture si $P\lor(Q\land\neg R)$.
- Carole a la clef : $P$ faux (Alice n'est pas la seule), $R$ faux, $Q$ faux → **fermée**.
- Bob retrouve le code : $Q$ vrai et $\neg R$ vrai → **ouverte**.
</details>

<details>
<summary>✏️ Ex. 12 — l'île des menteurs</summary>

Si Alice était honnête, Carole mentirait ; alors la phrase de Bob (« Carole et moi sommes pareils ») serait contradictoire, qu'il soit honnête ou menteur. Donc **Alice ment** → Carole dit vrai → l'implication d'Alice est fausse : Carole honnête **et** Bob menteur. On vérifie : Bob (menteur) dit qu'il est pareil que Carole (honnête), c'est bien faux.
**Seule Carole est honnête.**
</details>

---

## ✅ À retenir

- Une seule ligne fausse pour $\Rightarrow$ : **V ⇒ F**.
- $\neg(P\Rightarrow Q)\iff P\land\neg Q$ ; contraposée $\neg Q\Rightarrow\neg P$ équivalente ; réciproque non.
- Négation : $\forall\leftrightarrow\exists$, ensembles inchangés, on nie la fin.
- L'ordre $\forall/\exists$ compte : dans $\forall x\ \exists y$, $y$ dépend de $x$.
