# Micro — Théorie des jeux et interactions sociales (résumé)

## Définitions

### Concepts fondamentaux

- **Théorie des jeux** : étudie les situations où le résultat pour un agent dépend aussi des décisions des autres.
- **Matrice des gains** : tableau des gains de chaque joueur pour chaque combinaison de stratégies.
- **Meilleure réponse (MR)** : stratégie qui maximise le gain d'un joueur compte tenu de la stratégie de l'autre.
- **Stratégie dominante** : meilleure réponse quelle que soit la stratégie de l'autre joueur.
- **Équilibre en stratégie dominante** : chaque joueur joue sa stratégie dominante.
- **Rationalité / spontanéité / stabilité** : propriétés d'un équilibre — intérêt individuel, pas d'intervention extérieure, personne ne veut dévier.
- **Équilibre efficace / inefficace** : maximise ou non le gain collectif.

### Dilemme du prisonnier et applications

- **Dilemme du prisonnier** : chacun a intérêt individuel à dévier, alors que coopérer serait meilleur collectivement.
- **Passager clandestin** : profite de l'effort des autres sans en faire.
- **Cartel** : accord pour restreindre l'offre, structurellement fragile.
- **Tragédie des biens communs** : une ressource libre d'accès est surexploitée.
- **Dumping fiscal / paradis fiscal** : impôts bas pour attirer les capitaux, au détriment des autres pays.

### Équilibre de Nash et stratégies mixtes

- **Équilibre de Nash** : chaque joueur joue sa meilleure réponse compte tenu des autres ; équivalent à un équilibre stable.
- **Stratégie pure** : jouée avec certitude. **Stratégie mixte** : randomisée entre plusieurs stratégies pures.
- **Équilibre de Nash en stratégies mixtes** : chaque randomisation est meilleure réponse à celle de l'autre ; existe quand il n'y a pas d'équilibre en stratégies pures.

### Interactions sociales

- **Jeu séquentiel** : les joueurs jouent l'un après l'autre. **Induction à rebours** : résoudre en partant de la fin.
- **Jeu de l'ultimatum** : un offreur propose un partage, le répondant accepte ou refuse (tout est perdu en cas de refus).
- **Bien public** : profite à tous, financé par des contributions volontaires individuelles.
- **Altruisme / aversion aux inégalités** : préoccupation pour le bien-être des autres ou pour l'équité de la répartition.
- **Normes sociales** : règles partagées qui influencent la disposition à coopérer.

## 1. Introduction

Décider, c'est chercher un objectif (utilité, profit, bien-être) alors que le résultat dépend aussi des décisions des autres agents. C'est l'objet de la théorie des jeux, qui a transformé l'économie depuis les années 1950.

## 2. Le dilemme du prisonnier

### 2.1 Présentation et matrice des gains

Deux suspects interrogés séparément : nier tous les deux donne 1 an chacun ; avouer tous les deux donne 4 ans chacun ; un seul aveu donne l'amnistie à celui qui avoue et 5 ans à l'autre.

### 2.2 Stratégie dominante et équilibre

Avouer est la meilleure réponse quel que soit le choix de l'autre : c'est une stratégie dominante pour les deux joueurs. (Avouer, avouer) est l'équilibre en stratégie dominante.

### 2.3 Propriétés de l'équilibre

Rationalité, spontanéité, stabilité — mais l'équilibre est **inefficace** : 8 ans de prison au total contre 2 ans si les deux avaient nié.

### 2.4 Modifier la matrice des gains

Changer les incitations (ex. sanction de la mafia contre celui qui avoue) peut faire basculer la stratégie dominante vers la coopération.

### 2.5 Applications économiques

Même structure de jeu (coopérer vs dévier) retrouvée dans : la course à l'armement (USA/URSS), la fragilité des cartels (OPEP), le changement climatique (passager clandestin), la tragédie des biens communs (pêche, disparition d'espèces), le dumping fiscal (paradis fiscaux), et de nombreux autres cas (médias, cyclisme, dopage, travail de groupe, vie de couple, publicité non informative, CV).

### 2.6 Sortir du dilemme

Trois mécanismes : répéter le jeu, effets de réputation, punir la déviation (modifier la matrice des gains).

### 2.7 Portée générale

Le laisser-faire ne mène pas toujours au meilleur équilibre collectif : la main invisible échoue parfois, d'où la nécessité de régulation.

## 3. Équilibre de Nash

### 3.1 La guerre des sexes

Brutus (préfère la boxe) et Thérèse (préfère le théâtre) veulent sortir ensemble : pas de stratégie dominante, la meilleure réponse de chacun dépend du choix de l'autre.

### 3.2 Définition et méthode

Équilibre de Nash : chaque joueur joue sa meilleure réponse compte tenu des autres (= équilibre stable). Méthode : tester chaque case de la matrice. Dans la guerre des sexes, il y a **deux équilibres de Nash** : (boxe, boxe) et (théâtre, théâtre) — indétermination sur celui qui se réalisera.

### 3.3 Équilibre en stratégie dominante vs équilibre de Nash

Tout équilibre en stratégie dominante est un équilibre de Nash, mais l'inverse est faux. Méthode générale : chercher les MR ⇒ si identiques, stratégie dominante ; sinon, tester les cases pour trouver les équilibres de Nash.

### 3.4 John Nash

Mathématicien (1928-2015), thèse à Princeton en 2 ans, prix Nobel 1994. Sa contribution a montré que l'équilibre issu des interactions individuelles n'est pas toujours efficace, contrairement à ce que prédisait la « main invisible ».

## 4. Stratégies mixtes

### 4.1 Jeux sans équilibre en stratégies pures

Pierre-papier-ciseaux : aucune case n'est stable, il n'existe pas d'équilibre de Nash en stratégies pures.

### 4.2 Notion de stratégie mixte

Randomiser entre stratégies pures. À l'équilibre en stratégies mixtes, chaque joueur est indifférent entre les stratégies qu'il randomise.

### 4.3 Guerre des sexes en stratégies mixtes

Avec $p_B$ = probabilité que Brutus aille à la boxe et $p_T$ = probabilité que Thérèse aille au théâtre :

$$U_B = (4-5p_T)\,p_B + p_T$$

L'équilibre en stratégies mixtes est **$p_B = p_T = \dfrac45$** (chaque joueur rend l'autre indifférent).

### 4.4 Le tir au but

Buteur plus fort à gauche, gardien le sait. Équilibre : le buteur tire à gauche avec probabilité 0,7, le gardien plonge à gauche avec probabilité 0,6, probabilité de but = 62 %.

### 4.5 Méthode générale

MR identiques → stratégie dominante. MR différentes → tester les cases (Nash en stratégies pures) ; si aucune case stable → chercher les probabilités d'indifférence (Nash en stratégies mixtes).

## 5. Altruisme et normes sociales

### 5.1 Altruisme et équité

Les joueurs réels s'écartent parfois de l'équilibre de Nash par aversion aux inégalités ou par altruisme (souci du bien-être d'autrui).

### 5.2 Le jeu de l'ultimatum

Jeu séquentiel : l'offreur propose un partage, le répondant accepte (partage appliqué) ou refuse (0 pour les deux). Résolution par induction à rebours ; en pratique, les offres trop inégalitaires sont souvent refusées.

### 5.3 Fourniture d'un bien public

Ne pas contribuer est la stratégie dominante individuelle (passager clandestin), donc en théorie le bien public n'est pas financé. En expérience, les joueurs contribuent quand même, mais de moins en moins au fil des répétitions.

### 5.4 Rôle des normes sociales

Les contributions dépendent des normes sociales du groupe et sont surtout influencées par le comportement observé des autres (imitation), plus que par le pur altruisme.
