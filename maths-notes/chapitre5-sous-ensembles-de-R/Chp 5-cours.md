# Chapitre 5 · Sous-ensembles de ℝ

> Mathématiques 1 · N. Blacher · TSE
> **Format : échelle de concepts.** Les notions s'emboîtent (majorant → maximum → borne sup) : on les compare côte à côte, puis caractérisations et vrai/faux. 💡 = intuition (ajout hors slides). $E$ désigne une partie de $\mathbb R$.

---

## La droite réelle

```text
   minorants          E                 majorants
 ◄━━━━━━━━━━━━┫▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓┣━━━━━━━━━━━━━━━━►
              inf E               sup E
```

Les majorants de $E$ forment $[\sup E,+\infty[$ ; les minorants forment $]-\infty,\inf E]$.

---

## L'échelle : ① majorant → ② maximum → ③ borne sup

| | ① Majorant | ② Maximum | ③ Borne supérieure |
|---|---|---|---|
| **Définition** | $M$ tel que $\forall x\in E,\ x\leq M$ | majorant **qui appartient à $E$** | **plus petit des majorants** |
| **Notation** | — | $\max E$ | $\sup E$ |
| **Existe ?** | si $E$ est majorée | pas toujours | **ssi $E\neq\varnothing$ et majorée** |
| **Unique ?** | non | oui | oui |
| **Dans $E$ ?** | pas forcément | oui | pas forcément ; si oui, $\sup E=\max E$ |
| **Ex. $E=[0,1[$** | $1$, $2$, $\pi$… | n'existe pas | $1$ |

Symétriquement : **minorant**, **minimum** ($\min E$), **borne inférieure** ($\inf E$ = plus grand des minorants). $E$ est **bornée** si elle est majorée et minorée.

> [!TIP]
> 💡 **sup = le plafond le plus bas.** Les majorants sont tous les plafonds possibles au-dessus de $E$ ; le $\sup$ est celui qui « touche » $E$. Si on le descend d'un petit $\varepsilon$, il passe sous un élément de $E$ : ce n'est plus un majorant. On peut s'approcher du $\sup$ par des éléments de $E$ sans forcément l'atteindre.

> [!TIP]
> 💡 **Pourquoi ℝ et pas ℚ.** Dans $\mathbb Q$, $\lbrace x\in\mathbb Q : x^2<2\rbrace$ est majoré mais n'a pas de plus petit majorant rationnel (ce serait $\sqrt2\notin\mathbb Q$). L'existence du $\sup$ dans $\mathbb R$ traduit le fait que $\mathbb R$ n'a pas de trous.

---

## Trois façons de prouver $U=\sup E$

Dans les trois cas, la condition **(1)** est la même : $\forall x\in E,\ x\leq U$ ($U$ est un majorant).

| Méthode | Condition (2) : « c'est le plus petit » |
|---|---|
| **Définition** | tout majorant $M$ de $E$ vérifie $M\geq U$ |
| **Caractérisation ε** | $\forall\varepsilon>0,\ \exists a_\varepsilon\in E,\ U-\varepsilon<a_\varepsilon\leq U$ |
| **Caractérisation séquentielle** | il existe une suite $(a_n)$ d'éléments de $E$ avec $a_n\to U$ |

Pour $\inf$ : même chose avec « minorant », $\geq$, et $L\leq a_\varepsilon<L+\varepsilon$.
*(Coquille des slides : « $m$ **minore** $E$ », pas « majore ».)*

> [!IMPORTANT]
> **Limite monotone (version complète).**
> - Croissante **majorée** ⇒ converge et $\lim u_n=\sup\lbrace u_n : n\in\mathbb N\rbrace$ ; non majorée ⇒ $+\infty$.
> - Décroissante **minorée** ⇒ converge et $\lim v_n=\inf\lbrace v_n : n\in\mathbb N\rbrace$ ; non minorée ⇒ $-\infty$.

> [!NOTE]
> **Récapitulatif** ($E\neq\varnothing$) : $E$ majoré $\iff\sup E$ existe ; $E$ minoré $\iff\inf E$ existe ; $\sup$ et $\inf$ sont uniques ; si $\max E$ existe, $\max E=\sup E$ ; si $\min E$ existe, $\min E=\inf E$.

<details>
<summary>✏️ Exemples corrigés (Ex. 4, 5, 7)</summary>

- **Ex. 4** : $\inf\left\lbrace\frac{5}{n+1} : n\in\mathbb N\right\rbrace=0$ (0 minore, et $\frac5{n+1}\to 0$). $\sup\lbrace -e^{-x} : x\in\mathbb R\rbrace=0$ (jamais atteint).
- **Ex. 5** : $A=\left\lbrace\frac1n : n\geq 1\right\rbrace$, $\inf A=0$. 0 minore $A$ ; pour $\varepsilon>0$, on prend $n>\frac1\varepsilon$ : $0\leq\frac1n<\varepsilon$.
- **Ex. 7** : $\varnothing$ est majoré et minoré par tout réel, mais n'a ni $\sup$ ni $\inf$.
</details>

---

## 🃏 Vrai / faux

| Affirmation | Réponse |
|---|---|
| Tout ensemble borné est fini. | ❌ $[0,1]$ |
| Si $A$ est majoré, un de ses majorants est dans $A$. | ❌ $[0,1[$ |
| Si $A\subset B$ et $B$ est majoré, $A$ est majoré. | ✅ même majorant |
| $A\cup B$ minoré $\iff$ $A$ et $B$ minorés. | ✅ prendre le plus petit des deux minorants |
| Tout ensemble minoré a un minimum. | ❌ $]0,1]$ |
| Tout ensemble qui a un maximum est majoré. | ✅ |
| Si $A\subset B$ et $B$ a un max, $A$ a un max. | ❌ $[0,1[\subset[0,1]$ |
| Si $E$ est bornée, $\inf E=-\sup E$. | ❌ $E=[1,2]$ |
| Il existe $E$ avec $\sup E=\inf E$. | ✅ un singleton $\lbrace a\rbrace$ |
| Une suite convergente a pour limite son sup ou son inf. | ❌ $\frac{(-1)^n}{n+1}\to 0$, sup $1$, inf $-\frac12$ |

---

## ✅ À retenir

- $\sup E$ = plus petit majorant ; existe dès que $E$ est non vide et majorée.
- $\max E$ existe ⇒ $\max E=\sup E$, mais le $\sup$ peut ne pas être atteint.
- Prouver $U=\sup E$ : (1) majorant + (2) le plus petit (définition, ε, ou suite).
