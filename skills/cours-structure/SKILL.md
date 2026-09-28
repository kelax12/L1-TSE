---
name: cours-structure
description: Construit et met à jour progressivement, chapitre par chapitre, une note de révision structurée à partir de transcriptions de CM Plaud AI (mot à mot), de notes personnelles et de supports de cours (PDF/slides/docs), avec une section de définitions exhaustive et une banque de flashcards numérotées. Une note = un chapitre, alimentée par plusieurs CM/documents/notes perso au fil du temps, mise à jour de façon incrémentale sans jamais retraiter ce qui a déjà été intégré. Utilise ce skill dès que l'utilisateur mentionne "mettre à jour ma note/mon chapitre", "intègre ce CM/ce cours", "ajoute ce document à la note", "prépare mes flashcards", ou fournit un dossier de chapitre avec plusieurs sources — même s'il ne dit pas explicitement "utilise le skill".
---

# Cours structuré + banque de flashcards

## Vocabulaire — à ne pas confondre

- **La note** : le document produit par ce skill (le livrable). Une note = un chapitre.
- **Les notes personnelles** (ou "notes perso") : une des *sources*, écrites par l'utilisateur en `.odt` — à ne jamais confondre avec "la note".
- **Un chapitre** : l'unité de travail. Un chapitre correspond à une note, mais est alimenté par **plusieurs** CM (sessions de cours), **plusieurs** documents/supports, et **plusieurs** fichiers de notes perso, ajoutés au fil du temps.
- **Dossier de notes d'une matière** : chaque matière a, à la racine de l'espace de travail, son propre dossier dédié aux notes produites. Il n'y a pas de dossier parent commun de type `plaud/` : chaque matière est directement à la racine. Ce dossier de notes est distinct du dossier de sources de la même matière (celui qui contient les CM, supports et notes perso) — les fichiers sources n'y sont jamais déplacés ; si le nom kebab-case de la matière entre en collision avec le nom du dossier de sources existant, distingue les deux (ex: suffixe `-notes`).
- **Dossier de chapitre (notes)** : à l'intérieur du dossier de notes d'une matière, chaque chapitre a son propre sous-dossier `chapitreX-<nom-du-chapitre>/` (X = numéro du chapitre) qui contient les 3 fichiers du chapitre — voir Étape 5. Ne pas confondre avec le dossier de chapitre côté sources (celui qui contient les CM, supports et notes perso), qui est un dossier différent.

## Contexte

L'utilisateur est étudiant. Il enregistre ses cours avec un Plaud AI et un autre skill s'occupe déjà de produire une transcription mot à mot (verbatim) — ce n'est PAS le rôle de ce skill-ci de transcrire. Ce skill part de sources déjà écrites et les transforme en matériel de révision.

Trois types de sources, apportées progressivement et pas toujours toutes présentes à un instant donné :
1. **Transcriptions verbatim de CM** — un chapitre peut regrouper plusieurs CM successifs, chacun dans son propre fichier.
2. **Notes personnelles** de l'utilisateur — potentiellement plusieurs fichiers aussi (une par CM, ou en vrac).
3. **Supports de cours** (PDF, slides, polycopié) — un ou plusieurs par chapitre.

## Fonctionnement incrémental — le point le plus important

**Ce skill ne produit jamais la note en un seul coup.** L'utilisateur demandera régulièrement une mise à jour au fur et à mesure que de nouveaux CM, documents ou notes perso sont disponibles pour un chapitre. Chaque exécution doit :

1. Identifier quels fichiers sources du dossier du chapitre ont **déjà été intégrés** lors d'une exécution précédente (via le bloc de suivi, voir plus bas).
2. Ne traiter en profondeur que les fichiers **sources nouveaux ou non encore intégrés** — ne relis pas et ne retraite pas le contenu d'un CM/document/note perso déjà aspiré, sous peine de dupliquer du contenu ou de perdre du temps pour rien.
3. **Avant de fusionner quoi que ce soit, relis l'intégralité de la note existante** (Définitions, tout le plan, toutes les flashcards existantes — pas seulement le bloc de suivi en fin de fichier). C'est la seule façon de savoir où insérer le nouveau contenu et d'éviter une définition ou une flashcard qui redit ce qui existe déjà sous une autre formulation. Sauter cette relecture pour aller plus vite est la cause la plus probable de doublons.
4. **Fusionner** ce nouveau contenu dans la note existante (pas la réécrire de zéro), en complétant les sections concernées : nouvelles définitions ajoutées à la section définitions, plan étendu ou affiné, nouvelles flashcards ajoutées au bon endroit.
5. Mettre à jour le suivi des sources intégrées avant de terminer.

**Ne déplace, ne renomme (au sens de changer le nom) et ne supprime jamais un fichier source** — à une exception près, volontaire : une fois un fichier effectivement intégré à la note, ajoute `✅` à la fin de son nom (avant l'extension), comme repère visuel immédiat pour l'utilisateur qui parcourt le dossier. C'est la seule modification de nom autorisée sur un fichier source ; le reste du nom ne change jamais, le fichier reste dans le même dossier, et son contenu n'est jamais touché. En dehors de cet ajout de coche, le dossier du chapitre reste intact — CM, supports et notes perso restent là où l'utilisateur les a mis, intégrés ou non.

### Suivi des sources intégrées

À la toute fin du fichier `.md` de la note, maintiens un bloc en commentaire HTML (invisible au rendu Markdown, donc jamais poussé vers RemNote) qui liste chaque fichier source déjà intégré — avec son nom **tel qu'il est après ajout de la coche** (puisque c'est l'état réel du fichier une fois traité) :

```markdown
<!-- SOURCES INTÉGRÉES
- CM1-transcription ✅.txt
- CM2-transcription ✅.txt
- notes-perso-seance1 ✅.md
- support-diapos-ch3 ✅.pdf
-->
```

Au début de chaque exécution :
- Si la note existe déjà, lis ce bloc et compare-le à la liste réelle des fichiers présents dans le dossier du chapitre, **en ignorant la présence ou l'absence de `✅` dans la comparaison** (un fichier `CM1-transcription.txt` dans le dossier correspond au même fichier que `CM1-transcription ✅.txt` dans le bloc — c'est le même fichier, juste pas encore visuellement marqué si l'utilisateur l'a lui-même renommé entre-temps ou ajouté une nouvelle fois sans la coche).
- Les fichiers absents du bloc (une fois cette normalisation faite) sont les nouveaux à traiter.
- Si un fichier déjà listé a manifestement changé (taille très différente, contenu visiblement remplacé), retraite-le et signale-le à l'utilisateur plutôt que de l'ignorer silencieusement.
- Si aucun fichier nouveau n'est trouvé, dis-le à l'utilisateur au lieu de régénérer la note inutilement.
- Une fois un nouveau fichier traité et intégré à la note, **renomme-le pour ajouter `✅`** avant de mettre à jour le bloc `SOURCES INTÉGRÉES` avec ce nom final.

Si la note n'existe pas encore, c'est une première exécution : traite toutes les sources disponibles, ajoute `✅` à chacune une fois intégrée, et crée le bloc de suivi à la fin avec les noms ainsi mis à jour.

## Étape 1 — Repérer le dossier du chapitre et ses sources

Le déclencheur habituel est un dossier dédié à un chapitre (ex: `Cours/Biologie-Cellulaire/`). À l'intérieur, distingue les fichiers par bon sens : une transcription de CM est longue et orale, un support est souvent un PDF/pptx structuré en slides, des notes perso sont plus courtes et personnelles (`.odt`). Il peut y avoir plusieurs fichiers de chaque type, tous à la racine du dossier — aucun tri physique n'est fait, c'est le bloc `SOURCES INTÉGRÉES` de la note (voir plus haut) qui indique lesquels sont déjà traités.

**Ne bloque pas s'il manque un type de source.** Travaille avec ce qui est disponible, même une seule source pour un CM donné. Ne demande pas confirmation avant de continuer — adapte-toi silencieusement. Si vraiment aucun fichier exploitable n'est trouvé, là seulement demande à l'utilisateur où trouver les sources.

**Ignore les dossiers et fichiers audio+matière (ex: les mp3 type `audio-<matière> N.mp3`).** Ce skill n'a pas d'entrée audio et ne doit jamais essayer de traiter un fichier audio brut comme source — seule une transcription texte déjà produite (par le skill de transcription dédié) compte comme source valide. Un mp3 présent dans le dossier du chapitre n'est pas encore une source exploitable ; ignore-le silencieusement plutôt que d'échouer dessus ou de le signaler comme source manquante.

## Étape 2 — Fusionner en une note cohérente

Objectif : une note qui se lit comme si une seule personne l'avait écrite, pas un patchwork qui cite ses sources. Ne mentionne jamais "d'après la transcription" ou "selon tes notes" dans le texte — le lecteur ne doit pas voir la couture, y compris entre du contenu ajouté aujourd'hui et du contenu ajouté il y a deux semaines.

Comment arbitrer entre les sources quand elles se complètent ou se contredisent :
- La **transcription** donne le contenu le plus complet et les explications du professeur (exemples oraux, nuances, réponses à des questions d'élèves) — c'est en général la base la plus riche en substance.
- Les **supports** donnent souvent la structure/plan officiel et les définitions exactes (formules, termes techniques) — fais-leur confiance pour la formulation précise d'une définition ou d'une formule.
- Les **notes perso** signalent ce que l'utilisateur a jugé important ou une reformulation qui lui parle davantage — intègre-les, et si une note perso semble en contradiction avec le cours, garde la version du cours mais tu peux signaler l'écart brièvement si c'est pédagogiquement utile.

Ne résume pas. Le but n'est pas de raccourcir mais de **structurer et clarifier** : élimine les redites, hésitations et digressions propres à l'oral, mais conserve tous les détails, exemples, chiffres, définitions et nuances qui ont de la valeur pour réviser.

**Supprime toute information hors cours.** Anecdotes personnelles du professeur sans valeur pédagogique, blagues, banter avec la classe, digressions sur sa vie ou sa carrière, remarques sur l'organisation logistique du cours (évaluation, Moodle, horaires, dates), avis non académiques glissés au passage — rien de tout ça n'a sa place dans la note. Seul ce qui construit un savoir mobilisable pour réviser (définitions, mécanismes, exemples illustrant une notion, données, auteurs et références théoriques) est retenu. En cas de doute sur un exemple oral (est-ce une illustration d'une notion, ou juste une anecdote de couloir ?), ne le garde que s'il éclaire concrètement une notion du cours — sinon, coupe.

**Aère le texte.** Des paragraphes courts (3-5 phrases maximum), une idée par paragraphe, des sauts de ligne francs entre les idées. Préfère une liste à puces à un paragraphe qui énumère plusieurs éléments à la suite. Le but est qu'une page se parcoure visuellement d'un coup d'œil, pas qu'elle se lise comme un bloc dense.

**N'indique jamais qui parle.** La transcription mentionne peut-être des locuteurs (ex: "Professeur :", "Étudiant :", "Speaker 1 :", des questions d'élèves attribuées) — la note est un cours, pas une transcription : reformule tout au contenu lui-même, sans jamais nommer ou distinguer qui a dit quoi.

Quand tu intègres un nouveau CM à une note existante, insère son contenu à l'endroit logique du plan (une nouvelle section si le CM aborde un nouveau sujet, un enrichissement d'une section existante si le CM approfondit une notion déjà présente) — n'ajoute pas systématiquement à la fin du fichier.

## Étape 3 — Structurer la note

Le chapitre se compose de **trois fichiers distincts** (détail complet à l'étape 5) : la note complète, sa version résumée, et un fichier de flashcards. Cette étape 3 décrit la structure commune aux deux premiers — **aucun des deux ne contient de flashcards**, elles vivent exclusivement dans le troisième fichier (étape 4).

La note (et son résumé) suit toujours ce squelette, dans cet ordre :

```markdown
# [Matière] — [Sujet du chapitre]

## Définitions

- **Terme** : définition...

## [Première section du plan]

Contenu de la section...

### [Sous-section]

Contenu...

<!-- SOURCES INTÉGRÉES
...
-->
```

Le bloc `SOURCES INTÉGRÉES` ne figure que sur la note complète, jamais sur le résumé ni sur le fichier de flashcards.

Le titre en tête est déduit du contenu (matière + sujet précis du chapitre). **Ne jamais mentionner** d'informations logistiques comme la date d'enregistrement, la durée du cours, le nom du fichier audio, ou toute métadonnée Plaud — seul le contenu académique compte.

### Section Définitions (toujours en premier)

Juste après le titre, avant le plan du cours, une section `## Définitions` qui liste **absolument toutes** les définitions données dans le chapitre — chaque terme technique, chaque notion nommée par le professeur ou les supports, même si elle est réexpliquée en détail plus loin dans le corps du cours. Format :

```markdown
## Définitions

- **Enthalpie** : fonction d'état thermodynamique égale à U + PV, utilisée pour décrire les échanges de chaleur à pression constante.
- **Système isolé** : système n'échangeant ni matière ni énergie avec l'extérieur.
```

Cette section grandit à chaque mise à jour : les nouvelles définitions rencontrées dans un nouveau CM/document viennent s'ajouter à la liste existante (par ordre alphabétique ou par ordre d'apparition dans le plan — reste cohérent avec ce qui existe déjà dans la note), sans dupliquer une définition déjà présente. Si une nouvelle source affine une définition déjà listée, mets à jour la définition existante plutôt que d'en ajouter une seconde.

Si la liste dépasse une vingtaine de définitions, regroupe-les par sous-thème avec des `###` (ex: `### Grandeurs thermodynamiques`, `### Types de transformations`) plutôt que de laisser une liste plate de 40 entrées — ça reste une liste à parcourir, pas un nouveau plan narratif.

### Plan du cours

Après les définitions, le reste du plan avec des titres Markdown hiérarchiques (`##`, `###`, etc.) formant un plan point par point, pas un texte narratif continu. Chaque niveau de titre doit correspondre à un niveau réel du plan (partie → section → sous-section). Contenu en prose claire, listes à puces, ou tableaux quand c'est plus lisible (comparaisons, classifications). Mets en **gras** les termes techniques importants.

Pour toute formule mathématique, physique ou chimique, utilise la notation LaTeX (`$...$` pour une formule dans le texte, `$$...$$` pour une formule isolée) — RemNote la rend nativement, alors qu'une formule écrite en texte brut (ex: `DeltaG = DeltaH - TDeltaS`) est illisible une fois importée.

### Illustrer avec des schémas quand le contenu s'y prête

**Ne force jamais un schéma sur un contenu qui n'en a pas besoin.** Un paragraphe de prose claire reste souvent la meilleure forme. Mais certaines structures logiques classiques se lisent beaucoup mieux en schéma texte (flèches, arborescence) qu'en phrases — dès que tu repères l'une de ces structures dans le contenu, illustre-la plutôt que de la décrire uniquement en prose :

- **Cause → conséquence(s)** : un enchaînement ou une chaîne causale.
  ```
  Hausse des taux d'intérêt → Coût du crédit plus élevé → Baisse de l'investissement → Ralentissement de la croissance
  ```
- **Liste structurée** : plusieurs éléments de même nature (types, catégories, conditions) — à utiliser à la place d'un paragraphe qui les énumère à la suite (déjà couvert plus haut, mais ça reste la forme la plus fréquente).
- **Cercle vicieux / cercle vertueux** : une boucle causale qui s'auto-entretient.
  ```
  Chômage élevé → Baisse de la consommation → Baisse de la production → Nouveaux licenciements → (retour au point de départ)
  ```
- **Ordre chronologique / étapes** : une séquence temporelle ou procédurale.
  ```
  1919 (conférence de Weber) → 1933 (montée du nazisme, exil d'Elias) → années 1930 (Le processus de civilisation) → aujourd'hui (usage politique déformé du concept)
  ```

D'autres structures logiques courantes à illustrer de la même façon quand elles apparaissent dans le cours :

- **Opposition / comparaison à deux colonnes** : deux notions qu'on distingue terme à terme (déjà couvert par les tableaux Markdown — préfère un tableau à deux colonnes plutôt qu'un schéma fléché ici).
- **Arborescence / classification hiérarchique** : une notion qui se décompose en catégories puis sous-catégories.
  ```
  Sources du droit
  ├── Droit écrit
  │   ├── Constitution
  │   └── Lois et règlements
  └── Droit non écrit
      ├── Coutume
      └── Jurisprudence
  ```
- **Avant / après** : un état initial et un état final séparés par un mécanisme ou un événement déclencheur.
  ```
  Avant 1820 : stagnation du niveau de vie  →  [Révolution industrielle]  →  Après 1820 : croissance soutenue
  ```
- **Matrice 2×2 / quadrants** : une notion qui se comprend en croisant deux critères binaires — un tableau Markdown 2×2 fait généralement l'affaire.
- **Entonnoir / filtrage progressif** : une population ou un ensemble qui se réduit à chaque étape (ex: processus de sélection, étapes d'un recrutement, filtrage d'un phénomène statistique).
  ```
  Population totale → Sous-groupe exposé au phénomène → Sous-groupe qui en parle publiquement → Sous-groupe repris par les médias
  ```
- **Acteurs / relations** : plusieurs acteurs et la nature de ce qui les relie (qui influence qui, qui dépend de qui) — utile pour un jeu d'acteurs ou un rapport de force, en restant sobre (flèches simples, pas un vrai diagramme).

Reste en Markdown texte simple (flèches `→`, tirets, indentation) — pas de syntaxe d'image ou de diagramme externe (Mermaid, SVG, etc.), le fichier doit rester lisible tel quel et compatible avec un futur import RemNote.

**Chapitres qui grossissent (beaucoup de CM accumulés) :** ne laisse jamais une section `##` s'étaler sur tout un CM sans sous-titres. Découpe en `###`/`####` dès qu'une section couvre plusieurs notions distinctes, même si ça part d'un seul CM — l'objectif est qu'on puisse sauter directement à la bonne sous-section sans scroller tout le chapitre. S'il devient difficile de savoir où insérer un nouveau CM dans le plan existant, c'est le signal qu'une section doit être scindée en sous-sections avant d'y ajouter le nouveau contenu, pas après.

## Étape 4 — Fichier de flashcards, organisé par section

Toutes les flashcards du chapitre vivent dans un troisième fichier séparé, `Chp X-question-reponse.md` (voir étape 5) — ni la note complète ni le résumé n'en contiennent. Ce fichier reprend la même hiérarchie de titres que la note complète (`##`, `###`, dans le même ordre), mais chaque section n'y contient que ses flashcards, pas le texte du cours.

**Format d'une flashcard :** un numéro global (continu sur tout le fichier, pas remis à zéro par section), la question, puis un saut de ligne, puis la réponse. Entre la réponse d'une flashcard et le numéro de la suivante, laisse **3 lignes vides**. Pas de syntaxe `Question::Réponse` — chaque flashcard s'étale sur plusieurs lignes lisibles :

```markdown
# [Matière] — [Sujet du chapitre] (flashcards)

## Définitions

1. Qu'est-ce que la première loi de la thermodynamique ?

L'énergie totale d'un système isolé est constante ; elle peut changer de forme mais ne peut être ni créée ni détruite.



2. Qu'est-ce qu'un système isolé ?

Un système n'échangeant ni matière ni énergie avec l'extérieur.

## [Première section du plan]

3. Différence entre transformation isochore et isobare ?

Isochore = volume constant, isobare = pression constante.



### [Sous-section]

4. Question sur cette sous-section ?

Réponse.
```

Garder la même hiérarchie de titres que la note permet de savoir immédiatement, en lisant le fichier de flashcards seul, à quelle partie du cours chaque question se rattache — pratique pour cibler une révision sur une section précise.

Génère autant de questions/réponses que nécessaire pour couvrir tout le contenu de la note — assez pour pouvoir réviser uniquement à partir des flashcards sans jamais relire la note en entier. Vise une couverture complète : chaque définition, chaque mécanisme, chaque distinction importante entre deux notions doit avoir sa flashcard, rattachée à la section où elle apparaît dans la note complète.

Règles pour de bonnes flashcards :
- Une flashcard = une seule idée testable. Si une question a plusieurs parties, découpe-la en plusieurs flashcards.
- La réponse doit être courte et sans ambiguïté (pas un paragraphe entier) — si la réponse complète est longue, mets l'essentiel dans la flashcard ; le détail reste dans le contenu de la note complète.
- Formule les questions comme si tu ne connaissais pas déjà le cours (précises, autonomes), pas "que dit le cours à ce sujet ?" — une flashcard doit rester compréhensible même isolée de sa section.

Quand tu mets à jour un chapitre existant : ajoute les nouvelles flashcards sous le titre de section concerné dans le fichier de flashcards s'il existe déjà, ou crée ce titre (identique à celui de la note complète) s'il n'en avait pas encore. Renumérote si nécessaire pour garder une numérotation continue et sans trou sur tout le fichier. Si un nouveau CM enrichit une section déjà couverte, vérifie les flashcards déjà présentes sous cette section (relues à l'étape précédente) avant d'en ajouter, pour ne pas dupliquer une idée déjà testée.

## Étape 5 — Sauvegarder

La note ne va **jamais** dans le dossier du chapitre côté sources (celui qui contient les CM, supports et notes perso) : elle va dans un dossier dédié à la matière, **directement à la racine de l'espace de travail** — pas de dossier parent commun de type `plaud/`. Range-la dans `<matière>/` (ex: une note pour un chapitre de macro va dans `macro/` à la racine). Crée ce dossier s'il n'existe pas encore.

Si le nom kebab-case de la matière entre en collision avec un dossier de sources déjà existant au même endroit (ex: la matière `macro` a déjà un dossier `macro/` à la racine contenant les CM, PDF, etc.), ne mélange pas notes et sources dans le même dossier : distingue le dossier de notes en lui ajoutant un suffixe, par exemple `macro-notes/`. Si le nom du dossier de sources diffère naturellement (accents, espace — ex: dossier de sources `science po/` avec espace), le dossier de notes en kebab-case (`science-po/`) est déjà suffisamment distinct, pas besoin de suffixe supplémentaire.

### Un sous-dossier par chapitre

À l'intérieur du dossier de notes de la matière, chaque chapitre a son propre sous-dossier : `chapitreX-<nom-du-chapitre>/`, en kebab-case et sans accents si possible. `X` est le numéro d'ordre du chapitre dans la matière (1, 2, 3…) et `<nom-du-chapitre>` est déduit du sujet (ex: `chapitre1-premier-principe/`).

Pour déterminer `X` :
- Si le chapitre existe déjà (un sous-dossier correspondant au même sujet est déjà présent, même sous un nom légèrement différent), réutilise son numéro et son dossier tels quels — ne renumérote jamais un chapitre existant.
- Si c'est un nouveau chapitre, regarde les sous-dossiers `chapitreN-*` déjà présents dans le dossier de notes de la matière et prends `N max + 1` (le tout premier chapitre d'une matière est `chapitre1-`).

Crée ce sous-dossier s'il n'existe pas encore.

**Convention de nommage des fichiers à l'intérieur du sous-dossier :** `Chp X-<type>.md`, où `X` est le même numéro que celui du dossier et `<type>` est l'un de `cours`, `resume`, `question-reponse` (voir liste ci-dessous). Exemple complet : `macro-notes/chapitre1-premier-principe/Chp 1-cours.md`. Un chapitre = un seul jeu de fichiers dans son sous-dossier, toujours mis à jour en place — ne crée pas de nouveaux fichiers ni un nouveau sous-dossier à chaque mise à jour du même chapitre.

**Chaque exécution produit trois fichiers, toujours dans le sous-dossier `chapitreX-<nom-du-chapitre>/` :**
1. La **note complète** (type `cours`), comme décrite aux étapes précédentes (définitions exhaustives, plan détaillé) — **sans flashcards** — ex: `Chp 1-cours.md`.
2. Une **version résumée** du même chapitre (type `resume`), dans un fichier séparé nommé `Chp X-resume.md` (ex: `Chp 1-resume.md`). Cette version condense chaque section en l'essentiel (l'idée centrale, la définition en une ligne, les points à retenir en priorité) — c'est ici, contrairement à la note complète, qu'il faut raccourcir. Garde la même structure de plan (mêmes titres, même ordre) pour qu'on puisse naviguer entre les deux versions, mais sans les nuances secondaires. **Sans flashcards non plus.**
3. Un **fichier de questions-réponses / flashcards** (type `question-reponse`), nommé `Chp X-question-reponse.md` (ex: `Chp 1-question-reponse.md`), qui reprend la hiérarchie de titres de la note complète mais ne contient que les flashcards de chaque section (voir étape 4).

Le bloc `SOURCES INTÉGRÉES` ne figure que sur la note complète (fichier `cours`), jamais sur le résumé ni sur le fichier question-réponse.

Les trois fichiers sont mis à jour ensemble à chaque exécution : toute nouvelle source intégrée dans la note complète doit aussi enrichir le résumé et le fichier question-réponse correspondants.

**Mise à jour = édition ciblée, pas réécriture complète.** Quand le chapitre existe déjà, insère le nouveau contenu aux bons endroits dans chacun des trois fichiers (nouvelle entrée dans Définitions, nouvelle section ou paragraphe dans le plan pour la note et le résumé, nouvelles flashcards sous le bon titre de section dans le fichier question-réponse, bloc de suivi mis à jour dans la note complète) sans regénérer l'intégralité des fichiers depuis zéro. Régénérer tout à chaque mise à jour risque de faire disparaître ou de reformuler silencieusement du contenu déjà validé lors d'une session précédente.

**Garde-fou avant toute mise à jour d'un chapitre existant :** fais d'abord une copie de sauvegarde de chacun des trois fichiers tel qu'il est avant modification, dans le même sous-dossier `chapitreX-<nom-du-chapitre>/`, nommée `Chp X-cours.backup.md`, `Chp X-resume.backup.md` et `Chp X-question-reponse.backup.md` (écrase la sauvegarde précédente à chaque mise à jour, une seule suffit par fichier — ce n'est pas un historique, juste un filet de sécurité contre la dernière fusion). Si après édition un des fichiers a manifestement perdu du contenu par rapport à sa sauvegarde (une section, une définition ou des flashcards qui existaient avant et ont disparu sans raison), restaure depuis la sauvegarde et recommence la fusion plus prudemment plutôt que de laisser une perte de contenu passer inaperçue.

Une fois les trois fichiers écrits, indique brièvement à l'utilisateur : quelles nouvelles sources ont été intégrées, et un résumé en une phrase de ce qui a été ajouté/modifié (nouvelle section, définitions ajoutées, X nouvelles flashcards) — pas besoin de reproduire tout le contenu dans le chat.

## Note sur le format des flashcards

Le fichier question-réponse utilise un format numéroté, lisible directement (question, saut de ligne, réponse, 3 lignes vides avant la suivante) plutôt que la syntaxe compacte `Question::Réponse` — privilégie la lisibilité à la compatibilité d'import automatique avec un outil externe. Le bloc `<!-- SOURCES INTÉGRÉES -->` reste un commentaire HTML uniquement sur la note complète ; les fichiers résumé et question-réponse n'en ont pas besoin.
