# Maths 1 · Cours : le point fixe d'une suite récurrente

> Tombé **5 DS2 sur 5** (2020 → 2025). Ce cours explique pourquoi la méthode marche, et comment la rédiger.
> Voir aussi : [techniques-calcul-DS2.md](techniques-calcul-DS2.md) (§4) et [annales-DS2.md](annales-DS2.md).

## 1. Le cadre

On étudie une suite définie par récurrence :
$$u_0 \text{ donné}, \qquad u_{n+1} = f(u_n)$$
où $f$ est une fonction. Exemples de DS2 : $f(x)=\frac{2x}{3}+\sqrt{x}$ (2025), $f(x)=\frac{2x+3}{x+2}$ (2024), $f(x)=\frac{x^2+1}{x+1}$ (2022).

**Définition.** Un **point fixe** de $f$ est un réel $\ell$ tel que $f(\ell)=\ell$. C'est un nombre que $f$ « ne bouge pas ».

## 2. Le théorème

> **Si** $(u_n)$ converge vers $\ell$ **et si** $f$ est continue en $\ell$, **alors** $f(\ell)=\ell$.

**Pourquoi.** On passe à la limite des deux côtés de $u_{n+1}=f(u_n)$ :
- à gauche, $u_{n+1}\to\ell$ (c'est la même suite, décalée d'un rang) ;
- à droite, $f(u_n)\to f(\ell)$, par continuité de $f$.

Une limite est unique, donc $\ell=f(\ell)$.

> [!IMPORTANT]
> Le théorème dit seulement : **si la suite converge, sa limite est forcément un point fixe.** Il ne dit pas que la suite converge.

**Contre-exemple.** Avec $u_0=2$ et $u_{n+1}=u_n^2$, les points fixes sont les solutions de $\ell=\ell^2$, c'est-à-dire $0$ et $1$. Pourtant $u_n=2^{2^n}\to+\infty$. Si on oublie de prouver la convergence, on « trouve » une limite fausse.

## 3. La méthode du DS (toujours dans cet ordre)

| Étape | Ce qu'on fait | Outil |
|---|---|---|
| ① **Borner** | montrer $a\le u_n\le b$ pour tout $n$ | récurrence |
| ② **Monotonie** | signe de $u_{n+1}-u_n$ | même dénominateur, puis factoriser |
| ③ **Convergence** | croissante majorée, ou décroissante minorée | théorème de la limite monotone |
| ④ **Calcul de $\ell$** | résoudre $f(\ell)=\ell$ | algèbre |
| ⑤ **Tri** | garder la seule solution compatible avec les bornes | passage à la limite dans les inégalités |

## 4. L'idée qui relie tout : la fonction $g(x)=f(x)-x$

$$u_{n+1}-u_n = f(u_n)-u_n = g(u_n)$$

Cette fonction $g$ sert deux fois :
- ses **zéros** sont les points fixes (étape ④) ;
- son **signe** donne la monotonie (étape ②).

**Exemple DS2 2025.** $g(x)=\frac{2x}3+\sqrt x - x=\sqrt x-\frac x3$.
- $g(x)=0 \iff \sqrt x=\frac x3 \iff x=0$ ou $x=9$ : ce sont les deux points fixes.
- Entre les deux, $g>0$. Comme $u_n\in[0,9]$, on a $u_{n+1}-u_n=g(u_n)\ge0$ : la suite est croissante.

> [!TIP]
> Les bornes demandées à l'étape ① sont presque toujours **les points fixes eux-mêmes** (9 en 2025, $\sqrt3$ en 2024, 1 en 2022, 2 en 2021). Calculer les points fixes au brouillon **dès le début** permet de deviner la borne et le sens de variation avant même de rédiger.

## 5. L'étape ⑤ : éliminer les solutions parasites

L'équation $f(\ell)=\ell$ a souvent deux solutions. On garde la bonne grâce à cette règle :

> Si $a\le u_n\le b$ pour tout $n$, alors $a\le\ell\le b$.

> [!WARNING]
> Les inégalités **strictes deviennent larges** à la limite : $u_n>1$ pour tout $n$ donne seulement $\ell\ge1$ (penser à $u_n=1+\frac1n$, qui tend vers 1).

Deux autres arguments sont utiles :
- si la suite est **croissante**, alors $\ell\ge u_0$ ;
- si elle est **décroissante**, alors $\ell\le u_0$.

| DS | Équation | Solutions | Argument | $\ell$ |
|---|---|---|---|:-:|
| 2025 | $\ell^2-9\ell=0$ | $0$, $9$ | croissante, donc $\ell\ge u_0=3$ | **9** |
| 2024 | $\ell^2=3$ | $\pm\sqrt3$ | $u_n^2\ge3$ et $u_n>0$, donc $\ell\ge\sqrt3$ | **$\sqrt3$** |
| 2022 | $\ell(\ell+1)=\ell^2+1$ | $1$ | une seule solution | **1** |
| 2021 | $\ell^2=4$ | $\pm2$ | $u_n\ge2$ | **2** |
| 2020 | $\ell^2=1$ | $\pm1$ | $u_n>1$, donc $\ell\ge1$ | **1** |

## 6. Rédaction type (DS2 2024)

> La suite $(u_n)$ est décroissante et minorée par $\sqrt3$, donc elle converge vers un réel $\ell$. La fonction $f:x\mapsto\frac{2x+3}{x+2}$ est continue sur $\mathbb R_+$, donc $\ell=f(\ell)$ :
> $$\ell(\ell+2)=2\ell+3 \iff \ell^2=3 \iff \ell=\pm\sqrt3.$$
> Comme $u_n\ge\sqrt3$ pour tout $n$, on a $\ell\ge\sqrt3$ par passage à la limite. Donc $\ell=\sqrt3$.

Les quatre éléments à ne pas oublier : **convergence justifiée**, **continuité de $f$**, **résolution**, **tri**.

## 7. Exercice d'entraînement

$u_0=1$, $\;u_{n+1}=\sqrt{2+u_n}$. Montrer que $(u_n)$ converge et donner sa limite.

<details>
<summary>✏️ Corrigé</summary>

**Brouillon.** $\ell=\sqrt{2+\ell}$ donne $\ell^2-\ell-2=0$, donc $(\ell-2)(\ell+1)=0$. On peut donc deviner : la suite est bornée par 2 et sa limite vaut 2.

**① Bornes.** On montre par récurrence que $0\le u_n\le2$.
- Initialisation : $u_0=1\in[0,2]$.
- Hérédité : si $0\le u_n\le2$, alors $2\le2+u_n\le4$, donc $\sqrt2\le u_{n+1}\le2$.

**② Monotonie.** $u_{n+1}-u_n=\sqrt{2+u_n}-u_n$. Les deux termes sont positifs, donc :
$$\sqrt{2+u_n}\ge u_n \iff 2+u_n\ge u_n^2 \iff (u_n-2)(u_n+1)\le0.$$
C'est vrai car $u_n\in[0,2]$. La suite est donc croissante.

**③ Convergence.** La suite est croissante et majorée par 2, donc elle converge vers un réel $\ell$.

**④ Calcul de $\ell$.** La fonction $x\mapsto\sqrt{2+x}$ est continue sur $[0,2]$, donc $\ell=\sqrt{2+\ell}$, ce qui donne $\ell\in\lbrace-1,2\rbrace$.

**⑤ Tri.** Comme $u_n\ge0$ pour tout $n$, on a $\ell\ge0$. Donc $\ell=2$.
</details>

---

## Les 3 erreurs qui coûtent des points

1. Calculer $\ell$ sans avoir prouvé la convergence.
2. Garder une inégalité stricte à la limite.
3. Élever au carré sans vérifier que les deux membres sont positifs.
