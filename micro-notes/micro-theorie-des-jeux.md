# Micro — Théorie des jeux et interactions sociales

## Définitions

### Concepts fondamentaux

- **Théorie des jeux** : discipline qui étudie les situations où le résultat obtenu par un individu dépend non seulement de sa propre décision, mais aussi des décisions prises par d'autres agents (individus, entreprises, États). Elle a révolutionné la science économique depuis les années 1950.
- **Stratégie** : action ou plan d'action choisi par un joueur pour atteindre un objectif (satisfaction, profit, bien-être...).
- **Jeu simultané** : jeu dans lequel les joueurs choisissent leur stratégie en même temps, sans connaître le choix de l'autre.
- **Jeu symétrique** : jeu dans lequel les deux joueurs ont la même structure de gains (leurs matrices de gains sont équivalentes en échangeant les rôles), ce qui permet de ne raisonner que sur un seul joueur puis de transposer le raisonnement à l'autre.
- **Matrice des gains** : tableau qui représente, pour chaque combinaison de stratégies possibles des joueurs, le gain obtenu par chacun.
- **Meilleure réponse (MR)** : stratégie qui maximise le gain d'un joueur, compte tenu de la stratégie choisie par l'autre joueur.
- **Stratégie dominante** : stratégie qui constitue la meilleure réponse d'un joueur quelle que soit la stratégie suivie par l'autre joueur.
- **Équilibre en stratégie dominante** : solution du jeu dans laquelle chaque joueur joue sa stratégie dominante.
- **Rationalité** (propriété de l'équilibre) : la poursuite de l'intérêt individuel incite chaque joueur à suivre sa stratégie dominante.
- **Spontanéité** (propriété de l'équilibre) : aucune intervention extérieure n'est nécessaire pour amener les joueurs à se comporter ainsi.
- **Stabilité** (propriété de l'équilibre) : aucun joueur n'a intérêt à dévier unilatéralement de l'équilibre une fois qu'il y est.
- **Équilibre efficace / inefficace** : un équilibre est efficace s'il maximise le gain global des joueurs (du point de vue de la communauté qu'ils forment) ; il est inefficace si une autre combinaison de stratégies aurait donné un gain global supérieur.

### Le dilemme du prisonnier et ses applications

- **Dilemme du prisonnier** : jeu dans lequel chaque joueur a intérêt, individuellement, à choisir une stratégie ("avouer" / "dévier" / "ne pas coopérer") qui est sa stratégie dominante, alors que la coopération mutuelle donnerait un résultat collectif meilleur pour les deux joueurs. L'équilibre en stratégie dominante y est stable mais inefficace.
- **Passager clandestin** : joueur qui profite des efforts ou de la coopération des autres sans lui-même faire d'effort ni coopérer.
- **Cartel** : accord entre plusieurs producteurs (entreprises, pays) pour restreindre l'offre ou fixer un prix élevé ; un cartel est structurellement fragile car chaque membre a intérêt à dévier de l'accord pour capter davantage de marché.
- **Tragédie des biens communs (ou des prés communs)** : situation dans laquelle une ressource librement accessible à tous (pêche, pâturage, ressources naturelles) est surexploitée, car chaque utilisateur a intérêt à en consommer davantage plutôt qu'à la préserver.
- **Dumping fiscal / paradis fiscal** : stratégie d'un pays consistant à maintenir des impôts très faibles pour attirer les entreprises et les capitaux au détriment des autres pays, elle-même issue d'un dilemme du prisonnier entre États.

### Équilibre de Nash et stratégies mixtes

- **Équilibre de Nash** : solution d'un jeu dans laquelle chaque joueur joue sa meilleure réponse compte tenu de la stratégie suivie par les autres joueurs ; de façon équivalente, c'est une solution stable (aucun joueur n'a intérêt à en dévier unilatéralement).
- **Stratégie pure** : stratégie jouée de façon certaine, avec une probabilité de 1 (pas de randomisation).
- **Stratégie mixte** : stratégie qui consiste à randomiser (tirer au hasard) entre plusieurs stratégies pures, chacune étant jouée avec une certaine probabilité.
- **Équilibre de Nash en stratégies mixtes** : équilibre de Nash dans lequel les joueurs utilisent des stratégies mixtes ; la randomisation choisie par chaque joueur constitue sa meilleure réponse à la randomisation de l'autre. Il existe lorsqu'un jeu n'a pas d'équilibre de Nash en stratégies pures.

### Interactions sociales

- **Jeu séquentiel** : jeu dans lequel les joueurs jouent l'un après l'autre (et non simultanément), chacun observant les choix précédents avant de jouer.
- **Induction à rebours** : méthode de résolution d'un jeu séquentiel consistant à raisonner en partant de la fin du jeu : on détermine d'abord la meilleure réponse du dernier joueur à chaque situation possible, puis on en déduit la stratégie optimale du joueur précédent.
- **Jeu de l'ultimatum** : jeu séquentiel à deux joueurs (un offreur et un répondant) dans lequel l'offreur propose un partage d'une somme donnée ; le répondant peut l'accepter (le partage est appliqué) ou le refuser (les deux joueurs ne reçoivent rien).
- **Bien public** : bien dont la production par un individu profite à l'ensemble des individus, financé par des contributions volontaires individuelles (ex. irrigation, éducation, protection collective).
- **Altruisme** : préoccupation d'un joueur pour le bien-être des autres joueurs, en plus de son propre gain ; explique pourquoi les joueurs réels s'écartent parfois de l'équilibre de Nash théorique.
- **Aversion aux inégalités** : sensibilité des joueurs au caractère inégalitaire de la répartition des gains, qui peut les pousser à refuser un équilibre pourtant individuellement rationnel.
- **Normes sociales** : règles de comportement partagées au sein d'un groupe ou d'un pays, qui influencent la disposition des individus à coopérer (contribuer à un bien public, respecter un accord).

## 1. Introduction : la théorie des jeux comme outil de décision stratégique

Prendre une décision, c'est chercher à atteindre un objectif spécifique : la satisfaction pour un individu (bonheur, utilité, richesse), le profit ou la part de marché pour une entreprise, le bien-être des citoyens ou la sécurité pour un État.

Le plus souvent, le résultat obtenu par un agent ne dépend pas seulement de sa propre décision, mais aussi de la décision des autres agents. Se pose alors la question de savoir quelle stratégie les autres vont suivre, afin de déterminer sa propre stratégie optimale.

C'est l'objet de la théorie des jeux, discipline qui a révolutionné la science économique depuis les années 1950.

## 2. Le dilemme du prisonnier

### 2.1 Présentation et matrice des gains

Exemple de référence : la police est certaine que deux suspects (Sophie et Andréa) ont commis un crime, mais ne dispose pas de preuve suffisante pour les condamner. Sans aveux, la peine est limitée à un an de prison.

La police les interroge séparément et propose l'amnistie à celui qui avoue, s'il est le seul à le faire :

- si les deux avouent, chacun écope de 4 ans de prison ;
- si un seul avoue, il est amnistié (0 an) mais l'autre écope de la peine maximale (5 ans) ;
- si aucun n'avoue, chacun écope d'un an (faute de preuve suffisante).

| Andréa \ Sophie | Nier | Avouer |
|---|---|---|
| **Nier** | -1 / -1 | -5 / 0 |
| **Avouer** | 0 / -5 | -4 / -4 |

*(gains lus : Andréa / Sophie)*

### 2.2 Stratégie dominante et équilibre en stratégie dominante

Du point de vue des deux comparses, l'idéal serait que chacun nie (gain global le plus élevé). Mais :

- si Sophie pense qu'Andréa va nier, elle a intérêt à avouer pour bénéficier de l'amnistie ;
- si Sophie pense qu'Andréa va avouer, elle a aussi intérêt à avouer, pour éviter la peine maximale.

Quelle que soit la stratégie suivie par Andréa, la meilleure réponse de Sophie est donc d'avouer : avouer est une **stratégie dominante** pour Sophie, et par le même raisonnement, pour Andréa.

La solution (avouer, avouer) est un **équilibre en stratégie dominante** de ce jeu.

### 2.3 Propriétés de l'équilibre

Si le jeu n'est joué qu'une fois, les économistes prédisent que chacun va avouer, pour trois raisons :

1. **Rationalité** : la poursuite de l'intérêt individuel incite chacun à suivre sa stratégie dominante, celle qui maximise son gain quelle que soit la stratégie de l'autre.
2. **Spontanéité** : aucune intervention extérieure (hors l'institution judiciaire elle-même) n'est nécessaire pour amener les joueurs à se comporter ainsi.
3. **Stabilité** : aucun des deux joueurs ne désire dévier de l'équilibre.

Cet équilibre est pourtant loin d'être idéal : il implique 8 ans de prison au total, alors que la solution (nier, nier) n'en aurait impliqué que 2. On dit que l'équilibre est **inefficace** du point de vue de la communauté des deux joueurs.

### 2.4 Modifier la matrice des gains : l'exemple de la mafia

Un moyen de sortir du dilemme est de modifier la matrice des gains elle-même. Exemple : la mafia s'organise en promettant d'assassiner la famille de tout membre qui avouerait. Le coût d'avouer devient alors beaucoup plus élevé, ce qui peut faire basculer la stratégie dominante des deux joueurs vers "nier" — la coopération devient alors la stratégie individuellement rationnelle.

Le même principe s'applique à la régulation économique : en changeant les incitations (récompenses, sanctions), on peut transformer un dilemme du prisonnier en jeu où coopérer devient la stratégie dominante.

### 2.5 De nombreuses applications économiques

Beaucoup de contextes partagent la même structure de jeu, avec un joueur A et un joueur B qui peuvent chacun **coopérer** (faire l'effort collectivement avantageux) ou **dévier** (poursuivre son seul intérêt) :

| Joueur A \ Joueur B | Coopère | Dévie |
|---|---|---|
| **Coopère** | 2 / 2 | -1 / 3 |
| **Dévie** | 3 / -1 | 0 / 0 |

#### Équilibre de la terreur et course à l'armement

A = USA, B = URSS. Coopérer = limiter les dépenses militaires ; dévier = investir massivement dans l'armée. Le gain est la valeur des victoires militaires moins le sacrifice de la population pour financer l'armée.

Chaque pays voudrait un accord de non-course, mais chacun est tenté de dévier de cette promesse : les économistes prédisent une course à l'armement. Dans les faits, les USA ont dépensé jusqu'à 10 % de leur PIB par an dans les années 1950-60 pour leur défense, et l'URSS bien davantage.

#### Duopole et la fragilité des cartels

A et B = deux vendeurs (ex. deux vendeurs de glaces sur une plage). Coopérer = politique de prix élevé ; dévier = politique de prix faible. Le gain est le prix multiplié par la quantité vendue, moins le coût.

Les deux vendeurs voudraient former un **cartel** en se mettant d'accord sur un prix élevé, mais chacun aurait intérêt à baisser légèrement son prix pour s'emparer de tout le marché : les économistes prédisent l'instabilité des cartels.

Exemple concret : l'OPEP (Organisation des pays exportateurs de pétrole), formée dans les années 1970, a réussi un temps à maintenir des prix du pétrole élevés en réduisant les quantités produites. Mais à plus de 100 € le baril, l'exploitation offshore du pétrole (par exemple au large de la Norvège) est devenue rentable, ce qui a fait entrer de nouveaux pays producteurs, non membres du cartel, sur le marché. Un cartel ne sert à rien si des concurrents non-membres produisent le même bien : l'OPEP n'a donc pas réussi à maintenir des prix élevés sur la durée.

#### Changement climatique et l'impossible accord international

A = pays riches, B = pays en développement. Coopérer = réduction des émissions de CO2 ; dévier = ne rien faire. Le gain est calculé comme les dommages climatiques évités moins les coûts économiques de la transition (changer les centrales électriques, le parc automobile, etc.).

Si les deux joueurs coopèrent, le climat s'améliore moyennant un coût, gain élevé pour les deux. Si aucun ne fait d'effort, le climat reste dégradé mais aucun coût de transition n'est supporté. Si un seul coopère, il subit le coût de la transition sans que le climat s'améliore significativement (car l'autre continue d'émettre), tandis que celui qui dévie profite d'un léger mieux climatique sans rien avoir dépensé : c'est le problème du **passager clandestin**.

Les économistes prédisent donc le désastre écologique : chaque pays craint d'être le seul à faire un effort. Le problème de l'effet de serre est connu depuis les années 1980, et pourtant les émissions mondiales de CO2 ont augmenté de 55 % entre 1999 et 2019.

#### La tragédie des biens communs (pêche)

Deux îles se partagent une aire de pêche ; le poisson dans la mer n'appartient à personne. Coopérer = gestion soutenable de la ressource (laisser le poisson se reproduire) ; dévier = pêche intensive. Le gain est la consommation intertemporelle de poissons (aujourd'hui et dans les années à venir).

Si les deux îles pêchent raisonnablement, le gain de chacune est de 2. Si les deux surpêchent, la ressource disparaît et le gain tombe à 0 pour les deux. Si une seule surpêche pendant que l'autre se retient, celle qui surpêche gagne davantage à court terme (3), au détriment de l'autre.

L'équilibre en stratégie dominante est donc de surpêcher, alors que la pêche raisonnable serait le meilleur équilibre collectif. Les économistes prédisent que toute ressource « qui n'appartient à personne » sera surexploitée : c'est la **tragédie des biens communs**, illustrée par la disparition des bisons, la chasse aux éléphants et rhinocéros, la quasi-disparition des baleines, ou la chute du nombre de morues dans l'océan.

#### Dumping fiscal

Deux pays voudraient un impôt élevé sur les sociétés pour financer des biens publics (écoles, hôpitaux), mais les entreprises peuvent délocaliser d'un pays à l'autre. Coopérer = taux d'impôt élevé ; dévier = taux d'impôt faible.

Si un pays applique un impôt fort alors que l'autre applique un impôt faible, les entreprises quittent le premier pour le second, qui récupère la recette fiscale. Par crainte de ce scénario, les deux pays finissent par appliquer des impôts faibles, alors que la situation aurait été globalement meilleure avec des impôts élevés partout.

Cette logique explique l'existence des **paradis fiscaux** (un État qui choisit délibérément les impôts les plus bas pour attirer les capitaux), la suppression de l'impôt sur la fortune dans la plupart des pays, ou encore l'absence de taxe carbone sur le transport aérien international : un pays qui l'imposerait seul verrait les compagnies aériennes déplacer leurs vols vers des pays voisins qui ne l'appliquent pas.

#### Autres exemples du dilemme du prisonnier

- **Médias** : chaque média devrait vérifier ses informations avant publication, mais privilégie la rapidité sur ses concurrents ; si sortir une information en retard est trop pénalisant, plus personne ne vérifie, même si le mieux serait que tout le monde le fasse.
- **Échappée au Tour de France** : chaque coureur de l'échappée voudrait que l'autre prenne le relais en tête (poste le plus coûteux en effort) ; comme personne n'a intérêt à relayer un adversaire d'une autre équipe, l'échappée est souvent rattrapée par le peloton.
- **Dopage dans le sport** : chaque sportif voudrait que personne ne se dope, mais craint tellement d'être le seul non dopé face à des concurrents dopés que le dopage devient la stratégie dominante.
- **Travail en groupe** : chacun voudrait que le travail collectif soit fait sérieusement, mais chacun a intérêt à profiter de l'effort des autres (passager clandestin) ; si tout le monde raisonne ainsi, personne ne travaille.
- **Vie de couple** : chacun voudrait pouvoir faire confiance à l'autre, mais la tentation de mener une double vie existe des deux côtés ; répéter le jeu (la durée de la relation) permet de développer une confiance qui sort du dilemme.
- **Publicité non informative** : l'idéal collectif pour une industrie serait de ne pas faire de publicité (les consommateurs choisiraient sur la seule qualité du produit), mais chaque entreprise doit en faire, sous peine de ne rien vendre si elle est la seule à s'abstenir.
- **CV et centres d'intérêt** : mentionner des loisirs peu informatifs sur son CV n'apporte rien à l'employeur, mais chacun le fait par crainte d'être pénalisé s'il est le seul à ne pas le faire.

### 2.6 Sortir du dilemme du prisonnier

Il existe des mécanismes pour organiser la coopération et sortir du dilemme du prisonnier :

- **Répéter le jeu** : en jouant plusieurs fois, les joueurs finissent par comprendre l'intérêt de coopérer et peuvent développer une confiance mutuelle.
- **Effets de réputation** : un joueur connu pour ne pas coopérer (par exemple, ne rien faire dans un travail de groupe) se retrouvera exclu de futures coopérations.
- **Punir la déviation** : mettre en place des sanctions (ou des récompenses) qui modifient la matrice des gains, comme dans l'exemple de la mafia, de façon à rendre la coopération individuellement rationnelle.

### 2.7 Portée générale : les limites du laisser-faire

Ces nombreux exemples montrent que les choses ne tournent pas toujours rond lorsqu'on laisse chacun poursuivre son propre intérêt : la « main invisible » ne fonctionne pas toujours, et le libéralisme doit être régulé. Ce n'est pas parce que les gens agissent dans leur propre intérêt que l'équilibre obtenu est le meilleur possible pour la collectivité.

Ce sont les économistes qui conçoivent les régulations nécessaires (par exemple, l'obligation d'afficher la liste des ingrédients des produits alimentaires) : le dilemme du prisonnier justifie l'intervention publique dans de nombreux domaines économiques et sociaux.

## 3. Quand il n'y a pas de stratégie dominante : l'équilibre de Nash

### 3.1 La guerre des sexes

Brutus et Thérèse veulent sortir ensemble ce soir, avec le choix entre un match de boxe et une pièce de théâtre. Brutus préfère la boxe, Thérèse préfère le théâtre, mais tous deux détestent l'idée de passer la soirée séparément.

| Brutus \ Thérèse | Boxe | Théâtre |
|---|---|---|
| **Boxe** | 4 / 1 | 0 / 0 |
| **Théâtre** | 0 / 0 | 1 / 4 |

*(gains lus : Brutus / Thérèse)*

Recherche des meilleures réponses de Brutus :

- si Thérèse va à la boxe, Brutus préfère la boxe (4 plutôt que 0) ;
- si Thérèse va au théâtre, Brutus préfère le théâtre (1 plutôt que 0).

La meilleure réponse de Brutus dépend donc de ce que fait Thérèse : il n'existe pas de stratégie dominante pour ce jeu (le jeu étant symétrique, le même raisonnement vaut pour Thérèse).

### 3.2 Définition et méthode de recherche de l'équilibre de Nash

Lorsqu'il n'existe pas de stratégie dominante, il faut chercher l'**équilibre de Nash**, concept introduit par John Nash.

> Un équilibre de Nash est une solution dans laquelle chaque joueur joue sa meilleure réponse compte tenu de la stratégie suivie par les autres joueurs.

De façon équivalente, un équilibre de Nash est **stable** : si l'on demande à chaque joueur, une fois à l'équilibre, s'il a intérêt à changer de stratégie compte tenu de ce que fait l'autre, il doit répondre non.

Méthode pour trouver le ou les équilibres de Nash : tester chaque case de la matrice des gains, et se demander pour chaque joueur s'il a intérêt à dévier unilatéralement.

Dans la guerre des sexes :

- (Boxe, Boxe) : Brutus, sachant que Thérèse est à la boxe, ne veut pas dévier (4 > 0) ; Thérèse, sachant que Brutus est à la boxe, ne veut pas dévier non plus (1 > 0). C'est un équilibre de Nash.
- (Théâtre, Théâtre) : par symétrie, c'est aussi un équilibre de Nash.
- (Boxe, Théâtre) et (Théâtre, Boxe) : dans les deux cas, au moins un des deux joueurs a intérêt à changer (par exemple Brutus, s'il est au théâtre et Thérèse à la boxe, préfère rejoindre la boxe). Ce ne sont pas des équilibres de Nash.

Le jeu de la guerre des sexes a donc **deux équilibres de Nash en stratégies pures**. On peut prédire que Brutus et Thérèse finiront ensemble (à la boxe ou au théâtre), mais pas lequel des deux équilibres se réalisera — c'est un problème d'**indétermination**, typique des jeux de coordination.

### 3.3 Équilibre en stratégie dominante vs équilibre de Nash

Récapitulatif de la méthode générale de résolution d'un jeu :

1. Chercher les meilleures réponses (MR) de chaque joueur pour chaque stratégie de l'autre.
2. Si la meilleure réponse d'un joueur est identique quelle que soit la stratégie de l'autre, ce joueur a une stratégie dominante. Si c'est le cas pour tous les joueurs, on obtient un équilibre en stratégie dominante — qui est aussi un équilibre de Nash.
3. Si les meilleures réponses diffèrent selon la stratégie de l'autre joueur, il n'existe pas de stratégie dominante : il faut alors tester chaque case de la matrice pour trouver le ou les équilibres de Nash.

Un équilibre en stratégie dominante est donc toujours un équilibre de Nash (si personne n'a intérêt à dévier de sa stratégie dominante, c'est bien qu'il joue sa meilleure réponse). L'inverse n'est pas vrai : un équilibre de Nash n'est pas nécessairement un équilibre en stratégie dominante, comme le montre la guerre des sexes.

Un jeu peut n'avoir aucun équilibre de Nash en stratégies pures, ou en avoir plusieurs (auquel cas le résultat du jeu reste indéterminé sans information supplémentaire).

### 3.4 John Nash et la révolution de la théorie des jeux

John Nash, mathématicien né en 1928, a exposé le concept d'équilibre qui porte son nom dans une thèse de 28 pages soutenue à Princeton en seulement deux ans (contre 3 à 5 ans habituellement). Il a connu une carrière fulgurante de 1951 à 1958, avant d'être interné pour schizophrénie à partir de 1960. Il a reçu le prix Nobel en 1994 pour les travaux réalisés pendant sa thèse.

Les travaux de Nash ont représenté une rupture avec la vision antérieure de l'équilibre économique : les économistes pensaient jusque-là que laisser chacun poursuivre son propre intérêt (« la main invisible » du marché) conduisait nécessairement à un équilibre efficace. Grâce à l'équilibre de Nash — issu d'un mécanisme d'interaction entre joueurs et pas toujours efficace, comme le montre le dilemme du prisonnier — on sait désormais que ce n'est pas systématiquement le cas.

## 4. Stratégies mixtes

### 4.1 Jeux sans équilibre de Nash en stratégies pures : pierre-papier-ciseaux

Certains jeux n'ont pas d'équilibre de Nash en stratégies pures. Exemple : pierre-papier-ciseaux (papier-ciseaux-caillou). Si Brutus joue Papier, la meilleure réponse de Thérèse est Ciseaux ; mais alors la meilleure réponse de Brutus devient Caillou ; ce qui pousse Thérèse à jouer Papier ; et ainsi de suite : aucune case de la matrice n'est stable.

### 4.2 Notion de stratégie mixte

Une **stratégie mixte** consiste à randomiser entre plusieurs stratégies pures, chacune étant jouée avec une certaine probabilité (par exemple, tirer à pile ou face pour décider entre deux stratégies). Elle s'oppose à la **stratégie pure**, jouée avec une probabilité de 1 et donc sans aléa.

Un **équilibre de Nash en stratégies mixtes** est un équilibre de Nash dans lequel la randomisation choisie par chaque joueur est la meilleure réponse à la randomisation de l'autre. Pour qu'une stratégie mixte soit une meilleure réponse, il faut nécessairement que le joueur soit indifférent entre les différentes stratégies pures qu'il randomise — sinon il aurait intérêt à jouer systématiquement la stratégie pure la plus avantageuse. Cette propriété d'indifférence donne une méthode simple pour calculer un équilibre de Nash en stratégies mixtes : trouver la probabilité qui rend l'autre joueur indifférent entre ses stratégies pures.

### 4.3 Calcul d'un équilibre de Nash en stratégies mixtes : retour sur la guerre des sexes

On note $p_B$ la probabilité que Brutus aille à la boxe, et $p_T$ la probabilité que Thérèse aille au théâtre (donc Thérèse va à la boxe avec probabilité $1-p_T$, et Brutus va au théâtre avec probabilité $1-p_B$).

L'espérance de gain de Brutus s'écrit :

$$U_B = p_B\big[(1-p_T)\cdot 4 + p_T\cdot 0\big] + (1-p_B)\big[(1-p_T)\cdot 0 + p_T\cdot 1\big] = (4-5p_T)\,p_B + p_T$$

Si Thérèse joue $p_T=\tfrac12$ (pile ou face), $U_B = 1{,}5 + 0{,}5\,p_B$ est croissante en $p_B$ : la meilleure réponse de Brutus est alors $p_B=1$ (aller systématiquement à la boxe). Mais ce n'est pas un équilibre de Nash, car la meilleure réponse de Thérèse à $p_B=1$ est $p_T=0$ (aller systématiquement à la boxe elle aussi). Le même raisonnement s'applique tant que $p_T$ reste compris entre 0 et $\tfrac45$ : la meilleure réponse de Brutus reste $p_B=1$.

Symétriquement, quand $p_T$ dépasse $\tfrac45$, la meilleure réponse de Brutus devient $p_B=0$ (aller systématiquement au théâtre), ce qui n'est pas non plus un équilibre de Nash, puisque la meilleure réponse de Thérèse à $p_B=0$ est $p_T=1$.

Il ne peut donc exister d'équilibre de Nash en stratégies mixtes qu'au point où Brutus est **indifférent** entre boxe et théâtre, c'est-à-dire quand le coefficient de $p_B$ s'annule dans $U_B$ :

$$4-5p_T=0 \;\Longrightarrow\; p_T=\frac45$$

Par symétrie, Thérèse doit elle aussi être indifférente entre ses deux stratégies, ce qui exige $p_B=\frac45$.

**L'équilibre de Nash en stratégies mixtes de la guerre des sexes est donc $p_B=p_T=\dfrac45$** : chaque joueur va à la boxe (ou au théâtre) avec une probabilité de 4/5, et cette probabilité est précisément celle qui rend l'autre joueur indifférent entre ses deux choix.

Dans le jeu pierre-papier-ciseaux, l'équilibre de Nash en stratégies mixtes consiste, pour chaque joueur, à jouer Papier, Ciseaux et Caillou avec une probabilité de $\tfrac13$ chacun, ce qui donne un gain espéré de $\tfrac12$ pour chaque joueur (chacun est alors indifférent entre les trois stratégies pures).

### 4.4 Application : le tir au but

Le buteur est droitier : ses tirs sont plus précis et plus puissants à gauche qu'à droite, mais le gardien le sait. Le gain du buteur est mesuré par la probabilité de marquer.

| Buteur \ Gardien | Plonge à Droite | Plonge à Gauche |
|---|---|---|
| **Tire à Droite** | 0,2 | 0,9 |
| **Tire à Gauche** | 0,8 | 0,5 |

Il n'y a pas d'équilibre de Nash en stratégies pures : le gardien a toujours intérêt à ajuster son plongeon au tir du buteur, et inversement.

On note $p_B$ la probabilité que le buteur tire à gauche, et $p_G$ la probabilité que le gardien plonge à gauche.

Le gardien est indifférent entre plonger à droite ou à gauche lorsque :

$$0{,}8(1-p_B) + 0{,}2\,p_B = 0{,}1(1-p_B) + 0{,}5\,p_B \;\Longrightarrow\; p_B = 0{,}7$$

Le buteur est indifférent entre tirer à droite ou à gauche lorsque :

$$0{,}2(1-p_G) + 0{,}9\,p_G = 0{,}8(1-p_G) + 0{,}5\,p_G \;\Longrightarrow\; p_G = 0{,}6$$

À l'équilibre, le buteur tire à gauche avec une probabilité de 0,7 et le gardien plonge à gauche avec une probabilité de 0,6. La probabilité de marquer un but à cet équilibre est de 62 %.

### 4.5 Méthode générale de résolution d'un jeu

Face à un nouveau jeu, la démarche est toujours la même :

1. Chercher les meilleures réponses de chaque joueur.
2. Si les meilleures réponses sont identiques quelle que soit la stratégie de l'autre, il existe une stratégie dominante ⇒ équilibre en stratégie dominante (qui est aussi un équilibre de Nash).
3. Si les meilleures réponses diffèrent selon la stratégie de l'autre, il n'existe pas de stratégie dominante ⇒ tester chaque case de la matrice pour identifier le ou les équilibres de Nash en stratégies pures (intérêt à dévier ou non).
4. S'il n'existe aucun équilibre de Nash en stratégies pures, chercher les probabilités qui rendent chaque joueur indifférent entre ses stratégies pures ⇒ équilibre de Nash en stratégies mixtes.

## 5. Au-delà de la rationalité pure : altruisme et normes sociales

### 5.1 Altruisme et équité

Dans les études expérimentales en laboratoire, les joueurs ne jouent pas toujours l'équilibre de Nash théorique, même en l'absence de toute punition ou rétorsion contre la déviation. Une des raisons est que l'équilibre de Nash peut donner des gains très inégalitaires : les joueurs se sentent concernés par les inégalités entre eux (aversion aux inégalités).

Plus généralement, certains joueurs se préoccupent du bien-être des autres en plus du leur propre : c'est l'**altruisme**. Une question ouverte est de savoir si l'on pourrait s'appuyer sur l'altruisme des populations pour sortir de dilemmes collectifs comme le changement climatique.

### 5.2 Le jeu de l'ultimatum

Le jeu de l'ultimatum est un **jeu séquentiel** (les joueurs ne jouent pas en même temps, il n'y a donc pas de représentation matricielle simple) entre deux joueurs : l'offreur et le répondant.

L'offreur reçoit une somme (par exemple 100) et propose un partage au répondant (par exemple 80/20). Le répondant peut accepter (chacun reçoit alors la part proposée) ou refuser (les deux joueurs ne reçoivent rien).

La méthode de résolution d'un jeu séquentiel est l'**induction à rebours** : on détermine d'abord, pour chaque offre possible, la stratégie optimale du répondant (accepter toute offre strictement positive, puisque refuser donne 0), puis on en déduit la meilleure stratégie de l'offreur compte tenu de cette réponse anticipée. Dans les faits, les expériences montrent que les répondants refusent souvent des offres jugées trop inégalitaires, ce qui traduit l'aversion aux inégalités plutôt qu'une pure rationalité individuelle.

### 5.3 La fourniture d'un bien public

Un **bien public** est un bien dont la production par un individu profite à l'ensemble des individus du groupe, financé par des contributions volontaires. Exemples : un système d'irrigation, un système d'éducation, un système de protection collective.

Exemple chiffré : un système d'irrigation pour 4 agriculteurs coûte 10 € de contribution et rapporte 8 € de bénéfice à **chacun** des contributeurs. Pour un seul contributeur, le bénéfice net est de $8-10=-2$. Pour deux contributeurs, le bénéfice net de chacun devient $8\times2-10=6$.

Sans coordination, ne pas contribuer est une **stratégie dominante** pour chaque agriculteur : le gain individuel est toujours plus élevé en ne contribuant pas qu'en contribuant, quelle que soit la contribution des autres. C'est un cas typique de comportement de **passager clandestin**. Si tous les agriculteurs raisonnent ainsi, le bien public n'est pas financé.

Expérience en laboratoire à 4 joueurs : chaque joueur reçoit 20 €, peut contribuer tout ou partie de cette somme (de façon non publique) à un pot commun. Chaque euro versé dans le pot rapporte 0,40 € à **chacun** des 4 joueurs. En pratique, les participants contribuent bien au bien public, mais de moins en moins au fil des répétitions du jeu.

### 5.4 Rôle des normes sociales

La réalité est donc plus complexe que ne le prédit la seule stratégie dominante théorique :

- la disposition à contribuer à un bien public dépend fortement des **normes sociales** propres à chaque pays ou groupe ;
- la baisse des contributions dans le temps s'explique par un effet d'imitation : « si les autres participent, je participe » — les contributions sont donc davantage influencées par le comportement observé des autres joueurs que par le seul altruisme individuel ;
- ce constat éclaire par exemple la question de l'acceptabilité sociale de l'impôt, qui dépend elle aussi des normes sociales en vigueur.

<!-- SOURCES INTÉGRÉES
- Micro 1-transcript.txt
- Chapitre 1 - MICRO-Théorie des jeux.pdf
- CM-micro1.odt
-->
