# Maths 1 · Annales DS2 (2020 → 2025)

> 5 sujets de DS2 (1 h, sans document) analysés exercice par exercice. Chaque ligne renvoie à la **compétence** qui permet de la traiter ; les corrigés détaillés sont dans les fichiers de compétences.
>
> Sources : `maths/ds2/` (sujets 2020, 2021, 2022, 2024 sans corrigé : solutions rédigées ici ; 2025 avec corrigé officiel).

## Codes

| Code | Sujet | Fichier | Corrigé |
|---|---|---|---|
| **DS2-20** | DS2 du 14/11/2020 | `DS2_correction.pdf` | ✍️ rédigé ici |
| **DS2-21** | DS2 du 17/11/2021 | `DS2_eco_correction.pdf` | ✍️ rédigé ici (texte du PDF mal extrait : énoncés ex3, ex4, ex8 reconstitués) |
| **DS2-22** | DS du 26/10/2022 | `DS2_eco_22-23_correction.pdf` | ✍️ rédigé ici |
| **DS2-24** | DS2 du 13/11/2024 | `DS2_barème.pdf` | ✍️ rédigé ici |
| **DS2-25** | DS2 2025-2026 | `DS2.pdf` | ✅ officiel |

## 🎯 Ce qui tombe au DS2

| Thème | Fréquence | Compétences |
|---|:-:|---|
| **Suite récurrente** : borne par récurrence → monotonie → convergence + limite | **5/5** | C4.5, C4.6, C4.7 |
| **Image directe / réciproque** d'un ensemble par une fonction (souvent avec exp) | **5/5** | C6.7, C6.8 |
| **Injective ? surjective ?** avec justification | **4/5** | C6.4, C6.5 |
| **Domaine de définition** (ln, √, valeur absolue) | **4/5** | C6.1, C6.12 |
| **Limite FI $\frac00$** d'une fraction rationnelle, sans L'Hôpital | **3/5** | C7.4, C8.3 |
| Raisonnement par **l'absurde / contraposée / récurrence** | 3/5 | C3.7, C3.8, C3.11 |
| **Sup / inf** d'un ensemble (dont $\lbrace u_n\rbrace$) | 4/5 | C5.2, C5.3, C5.6 |
| Monotonie d'une fonction **par la définition** | 2/5 | C8.9 |
| Bijection réciproque | 2/5 | C6.9, C6.10 |
| Croissances comparées / quantité conjuguée / majoration | 2/5 | C8.4, C8.5, C8.8 |

> [!TIP]
> **Plan de révision express** : (1) refaire les 5 suites récurrentes, (2) savoir calculer $f(A)$ et $f^{-1}(B)$ pour $e^{-x^2}$, $e^{1/x^2}$, $\frac1{1+x^2}$, $3e^{2x-1}$, (3) une limite $\frac00$ par Horner, (4) les domaines avec $\ln$ et $\lvert\cdot\rvert$.

---

## DS2-2025

| Ex. | Pts | Question | Réponse | Compétence |
|---|:-:|---|---|---|
| 1a | 1 | $D$ de $\frac1{\ln(x^2-3)}$ | $]-\infty,-2[\cup]-2,-\sqrt3[\cup]\sqrt3,2[\cup]2,+\infty[$ | C6.1 |
| 1b | 1 | $D$ de $\sqrt{1-\lvert x-2\rvert}$ | $[1,3]$ | C6.1 |
| 2a | 3 | $F=e^{-x^2}$ : $F^{-1}(\lbrace0\rbrace)$, $F^{-1}([\frac12,+\infty[)$, $F^{-1}(\lbrace1\rbrace)$ | $\varnothing$ ; $[-\sqrt{\ln2},\sqrt{\ln2}]$ ; $\lbrace0\rbrace$ | C6.8 |
| 2b | 2 | $F(\lbrace0\rbrace)$, $F(\mathbb R_+)$ | $\lbrace1\rbrace$ ; $]0,1]$ | C6.7 |
| 2c | 2 | $F$ injective ? | Non : $F(1)=F(-1)$ | C6.4 |
| 2d | 2 | $F$ surjective ? | Non : $-1$ sans antécédent ($e^{\cdot}>0$) | C6.5 |
| 2e | 1 | $F_{\vert\mathbb R_+}$ strictement décroissante | $x<y$ ⇒ $-x^2>-y^2$ ⇒ $e^{-x^2}>e^{-y^2}$ | C8.9 |
| 2f | bonus | Bijection + réciproque | $\hat F:\mathbb R_+\to]0,1]$, $\hat F^{-1}(y)=\sqrt{\ln\frac1y}$ | C6.9, C6.10 |
| 3a | 2 | $u_0=3$, $u_{n+1}=\frac23u_n+\sqrt{u_n}$ : $0\leq u_n\leq9$ | récurrence | C4.5 |
| 3b | 2 | croissante | $\sqrt{u_n}-\frac{u_n}3\geq0\iff 9u_n\geq u_n^2$ | C4.6 |
| 3c | 2 | convergence, limite | croissante majorée ; $\frac{\ell^2}9-\ell=0$, $\ell\geq3$ ⇒ $\ell=9$ | C4.7 |
| 3d | bonus | $\sup$, $\inf$ de $\lbrace u_n\rbrace$ | $\inf=\min=3$, $\sup=9$ | C5.6 |
| 4 | 2 | $\forall a,b\in\mathbb Z$, $4a^2-b^2\neq1$ (absurde) | voir ci-dessous | C3.8 |

<details>
<summary>✏️ Ex. 4 — corrigé</summary>

Supposons $4a^2-b^2=1$, i.e. $(2a-b)(2a+b)=1$ avec deux **entiers**. Un produit d'entiers vaut 1 ssi les deux valent $1$ ou les deux valent $-1$ : donc $2a-b=2a+b$, d'où $b=0$, puis $4a^2=1$, $a=\pm\frac12\notin\mathbb Z$. Absurde.
</details>

---

## DS2-2024 (13/11/2024)

| Ex. | Pts | Question | Réponse | Compétence |
|---|:-:|---|---|---|
| 1.1 | 2 | $a,b\in\mathbb Z$, $a+b\sqrt2=0$ ⇒ $a=b=0$ (absurde) | si $b\neq0$, $\sqrt2=-\frac ab\in\mathbb Q$ : absurde ; donc $b=0$ puis $a=0$ | C3.8 |
| 1.2 | 2 | $x+y+z<2024$ ⇒ ($x<1000$ ou $y<1000$ ou $z<24$) (contraposée) | si $x\geq1000$, $y\geq1000$, $z\geq24$, la somme $\geq2024$ | C3.7 |
| 2.1 | 2 | $u_0=2$, $u_n=\frac{2u_{n-1}+3}{u_{n-1}+2}$ : $u_n^2\geq3$ | $u_{n+1}^2-3=\frac{u_n^2-3}{(u_n+2)^2}$ (+ $u_n>0$) | C4.5 |
| 2.2 | 2 | décroissante | $u_{n+1}-u_n=\frac{3-u_n^2}{u_n+2}\leq0$ | C4.6 |
| 2.3-2.4 | 3 | convergence, limite | décroissante minorée par $\sqrt3$ ; $\ell^2=3$, $\ell>0$ ⇒ $\sqrt3$ | C4.7 |
| 2.5 | 1 | sup, inf de $\lbrace u_n\rbrace$ | $\sup=2$, $\inf=\sqrt3$ | C5.6 |
| 3 | 3 | $\lim_{x\to2}\frac{x^3-12x+16}{x^3-5x^2+8x-4}$ sans L'Hôpital | $\frac{(x-2)^2(x+4)}{(x-2)^2(x-1)}\to6$ | C8.3 |
| 4.1 | 1 | $D$ de $e^{1/x^2}$ | $\mathbb R^*$ | C6.1 |
| 4.2 | 1 | $f(D_f)$ | $]1,+\infty[$ | C6.7 |
| 4.3 | 1,5 | $f^{-1}([0,2])$ | $\lvert x\rvert\geq\frac1{\sqrt{\ln2}}$ | C6.8 |
| 4.4 | 1,5 | $\lim_0 f$ | $+\infty$ | C8.6 |
| 5.1-5.2 | 1 | $f(n,m)=2^n(1+2m)$ : $f(0,3)$, $f(1,2)$, $f^{-1}(\lbrace1\rbrace)$, $f^{-1}(\lbrace12\rbrace)$ | $7$, $10$, $\lbrace(0,0)\rbrace$, $\lbrace(2,1)\rbrace$ | C6.3, C6.8 |
| 5.3-5.4 | 2 | $f(\lbrace(0,m)\rbrace)$, $f(\lbrace(n,0)\rbrace)$ | impairs ; puissances de 2 | C6.7 |
| 5.5 | 3 | injective ? | **oui** (impair = pair absurde) | C6.4 |
| 5.6 | 3 | surjective ? | **oui** ($k=2^n\times$impair) | C6.5 |

---

## DS2-2022 (26/10/2022)

| Ex. | Pts | Question | Réponse | Compétence |
|---|:-:|---|---|---|
| 1 | 2 | $x^2+y^2=1$ ⇒ $x^2\leq1$ (contraposée) | $x^2>1$ ⇒ $x^2+y^2>1$ ⇒ $\neq1$ | C3.7 |
| 2.1 | 2 | $u_0=2$, $u_{n+1}=\frac{u_n^2+1}{u_n+1}$ : $u_n>1$ | $u_{n+1}-1=\frac{u_n(u_n-1)}{u_n+1}>0$ | C4.5 |
| 2.2-2.3 | 3 | monotonie, convergence | $u_{n+1}-u_n=\frac{1-u_n}{u_n+1}<0$ ; décroissante minorée ($\ell=1$) | C4.6, C4.7 |
| 3.1 | 2 | $\lim\frac{n^3+e^{-n}}{(\ln n)^2}$ | $+\infty$ | C8.5 |
| 3.2 | 2 | $\lim\sqrt{e^n+n}-\sqrt{e^n-n}$ | $0$ (conjuguée) | C8.4 |
| 4 | 3 | $\sum_{k=0}^n\frac{-3}{(2k-1)(2k+1)}=1+\frac{n+2}{2n+1}$ | récurrence, voir ci-dessous | C3.11 |
| 5 | 2 | QCM sup/inf/max/min | voir C5.3 | C5.1–C5.3 |
| 6.1-6.4 | 3 | $f(n)$ = plus grand premier $\leq n$ : images, antécédents | $f(2)=2$, $f(39)=37$ ; $\lbrace3,7,11,19,53\rbrace$ ; $\lbrace13,\dots,16\rbrace$ ; $\lbrace7,8,9,10,17,18\rbrace$ | C6.3, C6.7, C6.8 |
| 6.5-6.6 | 4 | injective ? surjective ? | non ($f(7)=f(8)$) ; non (4) | C6.4, C6.5 |

<details>
<summary>✏️ Ex. 4 — hérédité</summary>

Init. $n=0$ : $\frac{-3}{(-1)(1)}=3=1+\frac21$. Hérédité : $1+\frac{n+2}{2n+1}-\frac{3}{(2n+1)(2n+3)}=1+\frac{(n+2)(2n+3)-3}{(2n+1)(2n+3)}=1+\frac{2n^2+7n+3}{(2n+1)(2n+3)}=1+\frac{(2n+1)(n+3)}{(2n+1)(2n+3)}=1+\frac{n+3}{2n+3}$. ✔
</details>

---

## DS2-2021 (17/11/2021)

| Ex. | Pts | Question | Réponse | Compétence |
|---|:-:|---|---|---|
| 1 | 1 | $\lim_{-\infty}\frac{x^6+2x^5-x^2+5x+14}{-3x^3+6x^2+45x+42}$ | $+\infty$ | C8.1 |
| 2 | 3 | même fraction en $-2$ | $\frac{23}{15}$ | C8.3 |
| 3 | 1,5 | $D$ de $\ln(2-\sqrt{e^x-1})$ | $[0,\ln5[$ | C6.1 |
| 4 | 2,5 | $D$ de $\frac1{\sqrt{2-\lvert\ln(1+x)\rvert}}$ | $]e^{-2}-1,e^2-1[$ | C6.1 |
| 5 | 4 | $\ln(1+x^2)\leq\ln2+2\ln x$ puis $\lim\ln(1+x^2)-2x$ | $-\infty$ (majoration) | C8.8 |
| 6 | 3 | $3e^{2x-1}$ : $f([-2,4[)$, $f^{-1}(]3,9])$ | $[3e^{-5},3e^7[$ ; $]\frac12,\frac{1+\ln3}2]$ | C6.7, C6.8 |
| 7 | 2 | réciproque de $\frac{x^2+1}{x^2+2}$, $\mathbb R_+\to[\frac12,1[$ | $\sqrt{\frac{2y-1}{1-y}}$ | C6.10 |
| 8 | 6 | $u_0=4$, $u_{n+1}=\sqrt{3+\frac{u_n^2}4}$ : $u_n\geq2$, décroissante, limite | $\ell=2$ | C4.5–C4.7 |

---

## DS2-2020 (14/11/2020)

| Ex. | Pts | Question | Réponse | Compétence |
|---|:-:|---|---|---|
| 1 | 4 | $\frac{x^4-4x^2+3x+6}{-2x^3-3x^2+x-2}$ : factoriser par $x+2$, limite en $-2$ | $U=x^3-2x^2+3$, $V=-2x^2+x-1$, $\lim=\frac{13}{11}$ | C7.4, C8.3 |
| 2 | 3 | $E=\lbrace x\in\mathbb Q_+: x^2\leq3x+1\rbrace$ : bornes, appartenance | $\inf=0\in E$, $\sup=\frac{3+\sqrt{13}}2\notin E$ | C5.3 |
| 3 | 3,5 | $1+\frac1x$ strictement décroissante sur $\mathbb R_+^*$, non bijective | définition ; 1 sans antécédent | C8.9, C6.5 |
| 4 | 3 | $\frac1{1+x^2}$ : $f([-1,2])$, $f^{-1}([0,\frac12[)$ | $[\frac15,1]$ ; $\lvert x\rvert>1$ | C6.7, C6.8 |
| 5 | 3 | $D$ de $\sqrt{3-\lvert x^2-1\rvert}$ | $[-2,2]$ | C6.1, C6.12 |
| 6 | 3,5 | $u_{n+1}=\frac12(u_n+\frac1{u_n})$, $u_n>1$ : décroissante, converge ? | oui, vers 1 | C4.6, C4.7 |
