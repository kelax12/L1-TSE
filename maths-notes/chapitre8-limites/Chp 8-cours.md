# Chapitre 8 · Fonctions de ℝ dans ℝ — Limites

> Mathématiques 1 · N. Blacher · TSE
>
> **Format : méthode Cornell.** Colonne de gauche = question à se poser (cache la droite pour t'interroger), droite = réponse du cours, résumé en bas. 💡 = intuition (ajout hors slides).

## 1. Définitions

| ❓ Question | 📝 Réponse |
|---|---|
| **$f\to+\infty$ en $+\infty$ ?** | ($D_f$ non majoré) $\forall M,\ \exists x_0,\ \forall x\in D_f,\ x\geq x_0\Rightarrow f(x)>M$. |
| **$f\to\ell$ en $+\infty$ ?** | $\forall\varepsilon>0,\ \exists x_0,\ \forall x\in D_f,\ x\geq x_0\Rightarrow|f(x)-\ell|<\varepsilon$. En $-\infty$ : pareil avec $x\leq x_0$ ($D_f$ non minoré). |
| **Point adhérent ?** | $a$ adhérent à $E$ si $\forall\varepsilon>0,\ \exists x\in E,\ |x-a|<\varepsilon$ ⇔ il existe une suite de $E$ qui tend vers $a$. Pour une union d'intervalles : les points + les extrémités finies. Ex. adhérence de $]-\infty,1[\cup[9,10[$ = $]-\infty,1]\cup[9,10]$. |
| **$f\to\ell$ en $a$ ?** | ($a$ adhérent à $D_f$) $\forall\varepsilon>0,\ \exists\delta>0,\ \forall x\in D_f,\ |x-a|<\delta\Rightarrow|f(x)-\ell|<\varepsilon$. Pour $+\infty$ : $f(x)>M$. |
| **Limite à gauche / à droite ?** | Limite de la restriction de $f$ à $D_f\cap]-\infty,a[$ (notée $\lim_{x\to a^-}$) ou à $D_f\cap]a,+\infty[$ ($\lim_{x\to a^+}$). |
| **Unicité ?** | Une limite, si elle existe, est **unique** ; elle peut ne pas exister ($\sin x$ en $+\infty$). |
| **Lien gauche/droite/en $a$ ?** | $a\notin D_f$ : $\lim_a f$ existe ⇔ $\lim_{a^-}=\lim_{a^+}$. $a\in D_f$ : il faut en plus que ce soit **$f(a)$**. |
| **Lien avec les suites ?** | $\lim_{x\to A}f(x)=L$ ⇔ pour **toute** suite $u_n\to A$ dans $D_f$, $f(u_n)\to L$. 💡 Pour montrer qu'une limite **n'existe pas** : deux suites qui donnent deux limites différentes. |
| **$\ell^+$, $\ell^-$ ?** | $\lim f=\ell^+$ : $f\to\ell$ **et** $f\geq\ell$ près du point. Ex. $\lim_{x\to5}|5-x|=0^+$, $\lim_{-\infty}e^x=0^+$. Sert pour les quotients. |

> [!NOTE]
> **À connaître** : $\lim_{0^+}\ln=-\infty$, $\lim_{+\infty}\ln=+\infty$, $\lim_{-\infty}e^x=0^+$, $\lim_{+\infty}e^x=+\infty$. $x^n\to+\infty$ en $+\infty$ ; en $-\infty$ : $+\infty$ si $n$ pair, $-\infty$ si impair. $\alpha>0$ : $x^\alpha\to+\infty$ en $+\infty$, $\to0^+$ en $0^+$.

## 2. Opérations

| Somme | | Produit | | Inverse | |
|---|---|---|---|---|---|
| $\ell+\ell'$ | $\ell+\ell'$ | $\ell\cdot\ell'$ | $\ell\ell'$ | $\frac1\ell$ ($\ell\neq0$) | $\frac1\ell$ |
| $+\infty+\ell'$ ou $+\infty$ | $+\infty$ | $+\infty\times(\ell'>0$ ou $+\infty)$ | $+\infty$ | $\frac1{\pm\infty}$ | $0^\pm$ |
| $-\infty+\ell'$ ou $-\infty$ | $-\infty$ | $+\infty\times(\ell'<0$ ou $-\infty)$ | $-\infty$ | $\frac1{0^+}$ | $+\infty$ |
| $+\infty-\infty$ | **FI** | $\infty\times0$ | **FI** | $\frac1{0^-}$ | $-\infty$ |
| | | | | $\frac10$ (sans signe) | **FI** |

⚠️ « FI » ne veut pas dire « pas de limite » : il faut **étudier au cas par cas**.

**Composition** : si $\lim_{x\to A}f(x)=L$ et $\lim_{y\to L}g(y)$ existe, alors $\lim_{x\to A}g(f(x))=\lim_{y\to L}g(y)$. (= le **changement de variable** $y=f(x)$.)

## 3. Polynômes et fractions rationnelles

| ❓ Question | 📝 Réponse |
|---|---|
| **Polynôme en $\pm\infty$ ?** | Limite du **terme dominant** $a_nx^n$. En $a$ réel : $P(a)$. |
| **Fraction en $\pm\infty$ ?** | $\lim\frac{a_nx^n}{b_mx^m}=\lim\frac{a_n}{b_m}x^{n-m}$ : dépend du signe de $\frac{a_n}{b_m}$ et de $n-m$ ($<0$ → 0 ; $=0$ → $\frac{a_n}{b_m}$ ; $>0$ → $\pm\infty$ selon parité). |
| **Fraction en $a$, $P_2(a)\neq0$ ?** | $\frac{P_1(a)}{P_2(a)}$. |
| **$P_2(a)=0$, $P_1(a)\neq0$ ?** | $\pm\infty$ : signe de $P_1(a)$ × signe de $P_2$ **à gauche / à droite** de $a$ ($0^+$ ou $0^-$). Souvent limites gauche ≠ droite ⇒ pas de limite en $a$. |
| **$P_1(a)=P_2(a)=0$ (FI $\frac00$) ?** | $a$ est racine des deux ⇒ $P_i=(X-a)Q_i$ (Horner) ⇒ $\lim\frac{P_1}{P_2}=\lim\frac{Q_1}{Q_2}$. Si encore $\frac00$ : rediviser. |
| **L'Hôpital (version faible) ?** | $f,g$ définies autour de $a$, $f(a)=g(a)=0$, dérivables en $a$, $g'(a)\neq0$ ⇒ $\lim_a\frac fg=\frac{f'(a)}{g'(a)}$. Ex. $\lim_0\frac{\ln(1+2x)}{e^x-1}=\frac{2}{1}=2$. ⚠️ Souvent **interdite** en DS (« sans utiliser la règle de l'Hôpital »). |

## 4. Croissances comparées

> [!IMPORTANT]
> **exp l'emporte sur les puissances, les puissances l'emportent sur ln.** Pour $a,b>0$ :
> - $\lim_{+\infty}\frac{e^{ax}}{x^b}=+\infty$ et $\lim_{+\infty}\frac{(\ln x)^a}{x^b}=0$
> - $\lim_{-\infty}e^{ax}|x|^b=0$
> - $\lim_{0^+}|\ln x|^a\,x^b=0$

## 5. Inégalités et limites

| ❓ Question | 📝 Réponse |
|---|---|
| **Passage à la limite ?** | $f\geq g$ pour $x$ assez grand (ou autour de $a$) et les limites existent ⇒ $\lim f\geq\lim g$. ⚠️ Les inégalités **strictes deviennent larges** : $5+\frac1{x^2}>5$ mais même limite. |
| **Minoration ?** | $f\geq g$ et $g\to+\infty$ ⇒ $f\to+\infty$. |
| **Majoration ?** | $f\geq g$ et $f\to-\infty$ ⇒ $g\to-\infty$. |
| **Gendarmes ?** | $m\leq f\leq M$ près du point et $m,M\to\ell$ ⇒ $f\to\ell$. |

## 6. Monotonie, bornes, limite monotone

| ❓ Question | 📝 Réponse |
|---|---|
| **Croissante / strictement ?** | $x\leq y\Rightarrow f(x)\leq f(y)$ / $x<y\Rightarrow f(x)<f(y)$. Décroissante : inégalité renversée. Monotone = l'un ou l'autre. 💡 Strictement monotone ⇒ injective. |
| **Majorée, minorée, bornée ?** | $f$ majorée si $f(D_f)$ est majoré, etc. $\sup f=\sup f(D_f)$, $\inf f=\inf f(D_f)$. |
| **Limite monotone ?** | $f$ **croissante** sur $]A,B[$ : $\lim_{B^-}f=\sup f$ (ou $+\infty$ si non majorée), $\lim_{A^+}f=\inf f$ (ou $-\infty$), et en tout $y$ : $\lim_{y^-}f\leq f(y)\leq\lim_{y^+}f$. Décroissante : symétrique. |

## 7. Continuité (TD8)

| ❓ Question | 📝 Réponse |
|---|---|
| **Continue en $a$ ?** | $\lim_{x\to a}f(x)=f(a)$ ⇔ $\lim_{a^-}f=\lim_{a^+}f=f(a)$. |
| **Prolongement par continuité ?** | $f$ non définie en $a$ mais $\lim_a f=\ell$ finie : on pose $f(a)=\ell$. |
| **Valeurs intermédiaires (TVI) ?** | $f$ continue sur $[a,b]$ : toute valeur entre $f(a)$ et $f(b)$ est atteinte. Cas typique : $f(a)<0<f(b)$ ⇒ $f$ s'annule sur $[a,b]$. |
| **Partie entière ?** | $E(x)=\max\lbrace n\in\mathbb Z: n\leq x\rbrace$, avec $\boxed{E(x)\leq x<E(x)+1}$ (sert à encadrer). |

---

## 🔁 Vrai / faux du cours

| Affirmation | | Pourquoi |
|---|:-:|---|
| Toute $f$ a une limite en $+\infty$ | ❌ | $\sin$ |
| Strictement décroissante ⇒ $\to-\infty$ | ❌ | $\frac1x\to0$ |
| $a\in E$ ⇒ $a$ adhérent à $E$ | ✅ | prendre $x=a$ |
| $\lim_A f=+\infty$ ⇒ $f$ non majorée | ✅ | |
| $f$ non majorée ⇒ $\lim f=+\infty$ quelque part | ❌ | $x\sin x$ |
| $f>g$ partout ⇒ $\lim f>\lim g$ | ❌ | $5+\frac1{x^2}$ et $5$ |
| $a_n<0$, $n$ pair ⇒ $\lim_{-\infty}P=-\infty$ | ✅ | $x^n\to+\infty$ |

<details>
<summary>✏️ Exemples corrigés du cours</summary>

- **Café** $T(t)=20+60e^{-0{,}1t}$ : $T(0)=80$, $T(11)\approx40$, $\lim_{+\infty}T=20^+$ (température de la pièce).
- $\lim_{x\to0}\frac1{|x|}=+\infty$ ; $\frac1x$ : $-\infty$ à gauche, $+\infty$ à droite → **pas de limite** en 0.
- $f=2$ si $x<0$, $x^2$ si $x>0$ : $\lim_{0^-}=2\neq\lim_{0^+}=0$.
- $f=\frac1{|x|}$ ($x\neq0$), $f(0)=5$ : $\lim_{0^\pm}=+\infty$ mais pas de limite en 0 (car $0\in D_f$ et $f(0)=5$).
- $\lim_{+\infty}\ln(\sqrt{x^2+1}-x)$ : $\sqrt{x^2+1}-x=\frac{1}{\sqrt{x^2+1}+x}\to0^+$, puis $\ln\to-\infty$.
- $\lim_{x\to2}\frac{x^2-4}{x^2-3x+2}=\lim\frac{x+2}{x-1}=4$ ; $\lim_{x\to2}\frac{x^3-x^2-8x+12}{x^3-5x^2+8x-4}=\lim\frac{(x-2)^2(x+3)}{(x-2)^2(x-1)}=5$.
- Limite monotone : $f=x$ ($x<1$), $3$ ($x=1$), $x^2+4$ ($x>1$) : $\lim_{1^-}=1\leq f(1)=3\leq\lim_{1^+}=5$.
</details>

---

> [!IMPORTANT]
> **📌 Résumé.** Cinq limites ($+\infty$, $-\infty$, $a$, $a^-$, $a^+$), uniques si elles existent. On calcule par **opérations** ; face à une FI : **terme dominant** (polynômes à l'infini), **factoriser par $x-a$** (fractions en $a$, $\frac00$), **quantité conjuguée** (racines), **croissances comparées** (exp/puissance/ln), **encadrement** (gendarmes, minoration). Gauche ≠ droite ⇒ pas de limite.
