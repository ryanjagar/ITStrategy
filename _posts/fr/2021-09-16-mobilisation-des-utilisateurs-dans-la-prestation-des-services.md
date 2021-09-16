---
layout: post
title: "La mobilisation des utilisateurs dans la prestation des services"
ref: user-engagement-in-service-delivery
lang: fr
author: " Elmina Iusifova, en collaboration avec l’équipe de stratégie des TI"
date: "16-09-2021"
last_modified: "16-09-2021"
excerpt_separator: <!--more-->
---
<!-- markdownlint-disable MD033 -->
<!-- the below cSpell statement says to ignore any text between HTML tags. e.g., it will ignore "th rowspan='2'" in this string: <th rowspan='2'> -->
<!-- cSpell:ignoreRegExp /\<[^\>]+\>/ -->
<!-- The img + em {} stylecheet selector is a hack to add caption to an image in markdown without using plugin: https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll -->

<style>
table, th, td {
  border: 1px solid black;
}

th {
  background-color: #ccccff;
}

img + em { display: inline-block; }
</style>

Pourquoi créons-nous des services?
Plusieurs réponses sont possibles, mais ma préférée est la suivante : 

> Offrir aux clients une solution qui leur coûte moins cher que le coût du problème.
<!--more-->

Les services fonctionnent lorsque les gens les utilisent et si les services fonctionnent bien, un plus grand nombre de personnes les utilisent.
En général, les utilisateurs ne savent pas comment la prestation des services est modifiée si rapidement, parce qu’ils se sont habitués aux améliorations mises en place et se sont adaptés à la nouvelle norme presque immédiatement.
Par contre, ce qui n’a *pas* changé, c’est que lorsqu’ils *interagissent* avec la prestation de services, ils veulent une expérience utilisateur exceptionnelle.

Les [Normes relatives au numérique du gouvernement Canada](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html) reposent sur l’objectif suivant : fournir aux Canadiens des services publics « faciles à utiliser ».
Pour concevoir des produits « axés sur l’utilisateur », l'utilisateur doit participer à tous les aspects de la recherche afin d’optimiser le temps et les efforts consacrés à la compréhension de ses besoins et de ses problèmes.

Nous devons concevoir de meilleurs produits pour les citoyens et les collègues de la fonction publique.
*Pourquoi?* Parce que « nous » le réclamons.
Parce que « nous » voulons des relations durables et bien pensées pour faire le bonheur des utilisateurs.

### **Créer des personas**

Nous, de l’équipe de stratégie des TI, avons conçu et mis en œuvre plusieurs produits.
Heureusement, nous avons eu l’occasion de faire participer les utilisateurs tout au long du processus de conception et de tester nos prototypes avant le lancement.
Notre première étape cherchait à en savoir le plus possible sur les utilisateurs : leur contexte, objectifs et obstacles afin d’éclairer notre orientation générale. Nous avons créé des personas pour nous aider à connaître nos clients, leur comportement, leurs objectifs et leurs frustrations, ainsi qu'à comprendre pour qui nous concevons un produit et si celui-ci répond aux besoins de notre public cible.

C’est ce qui s’est produit pendant le sprint de conception de l’[outil d’auto-évaluation DevOps](https://sara-sabr.github.io/ITStrategy/devops-self-assessment.html).
À partir de recherches, nous avons créé des personnages fictifs pour nous aider à comprendre l’utilisateur pour lequel nous concevons. Nous avons découvert différents types d’utilisateurs avec leurs modèles de comportement, objectifs, compétences, attitudes et antécédents, ainsi que l’environnement dans lequel ils évoluent.
Cela nous permet de connaître les éléments exigeant notre attention et de nous améliorer pendant la conception de notre application.
Le principal utilisateur de l’outil est un fonctionnaire de la DGIIT qui souhaite continuellement améliorer et soutenir les efforts de ses pairs. En comprenant les attentes, les préoccupations et les motivations de nos utilisateurs cibles, nous avons trouvé une solution axée sur la conception.
Lorsque l’on conçoit un produit pour un fonctionnaire alors que l’on est soi-même un fonctionnaire, il est très facile de créer un produit autoréférentiel comme s’il est nous est uniquement destiné.
Or, le public cible peut être très différent de nous.
Nous avons également créé une maquette qui a récemment été présentée à une véritable équipe d’utilisateurs afin de recueillir des commentaires et d’apporter d’autres améliorations.

En pensant aux besoins de notre persona d’utilisateur final, nous avons tenté de façonner la stratégie de produits et de créer la meilleure maquette pour *ces personnes*.
Fait à noter, même si les personas d’utilisateur nous ont aidés à prioriser les fonctions, ce n’était pas le seul outil utilisé pour établir les priorités.
Nous recueillons constamment les commentaires des intervenants afin de maintenir un juste équilibre entre les besoins de l’organisation et ceux des utilisateurs afin de trouver une solution qui satisferait les deux.
Avec les commentaires que nous avons reçus, nous avons tenté de répéter l’expérience globale pour l’utilisateur.

### **Accessibilité et multilinguisme**

L’accessibilité est une partie importante de la conception des services au gouvernement, et elle doit être prise en compte tout au long du processus.
Selon la [*Loi canadienne sur l’accessibilité*](https://www.canada.ca/fr/emploi-developpement-social/programmes/canada-accessible.html), la prestation des programmes et des services est l’un des principaux domaines sur lesquels le gouvernement du Canada doit cibler ses efforts.
Un autre aspect important à considérer au gouvernement est l'exigence de servir les citoyens dans la langue officielle de leur choix.
Afin de respecter les préférences du public canadien en matière de langues officielles, nous devons concevoir des services bilingues (voir [Langues officielles dans les communications et le service au public](https://www.canada.ca/fr/secretariat-conseil-tresor/services/valeurs-ethique/langues-officielles/services-public.html)).
Afin d’obtenir des résultats de meilleure qualité, la conception de l’interface utilisateur de nos services doit respecter le cadre initial de la [Boîte à outils de l’expérience Web](https://wet-boew.github.io/wet-boew/index-fr.html) dirigé par le gouvernement du Canada.
Il s’agit d’un cadre collaboratif de source ouverte qui porte sur l’accessibilité, la convivialité et les aspects multilingues en fournissant des modèles réutilisables qui nous aident à créer un premier modèle/prototype d’échantillon pour tester des hypothèses.

### **Essais de convivialité**

Pour comprendre comment les véritables utilisateurs interagissent avec nos applications, nous avons mis l’accent sur la création d’un plan d’essais de convivialité.
Ce plan s’apparente à un plan directeur qui contient des renseignements comme la méthodologie (une brève explication du déroulement de la mise à l’essai), le script de l’animateur (un script qu’un animateur suit et qui comprend des instructions, des sujets et des questions qui seront utilisés à chaque séance d’essai, afin d’assurer l’uniformité), des cas de tâches (un résumé de l’expérience que pourraient vivre les utilisateurs typiques en utilisant le produit) et le calendrier des participants.

Pour évaluer le rendement de notre conception et de nos produits, nous avons effectué des essais de convivialité auprès de plusieurs utilisateurs.
Il s’agit d’une démarche dans laquelle les résultats ne sont pas connus à l’avance et qui peut exiger du temps et susciter de l’ambiguïté.
Mais cet exercice est AMUSANT 🙂!
L’objectif principal de ce processus est d’évaluer les idées et les solutions que nous avons trouvées et de déterminer ce qui fonctionne et ce qui ne fonctionne pas.
Nous avons testé notre application et écouté nos utilisateurs pour les comprendre.
**Écouter les utilisateurs est une chose difficile.
Souvent, les utilisateurs ne savent pas ce qu’ils veulent, et même s’ils le savent, la communication risque d’être mal interprétée par l’utilisateur et l’animateur.**
Pour recevoir des commentaires utiles des utilisateurs et corriger les renseignements, nous devions d’abord nous assurer, lors de la préparation du scénario de l’animateur, de tenir compte des éléments à tester, puis le faire comme convenu.
Dans ce cas, il y avait un grand risque que le script oriente l’utilisateur pour qu’il donne une rétroaction particulière qui ne serait pas objective.
Pour concevoir la meilleure expérience utilisateur, nous avons donc porté attention principalement à ce que les utilisateurs font, et non à ce qu’ils disent, afin d’éviter les affirmations qui ne sont pas fiables.

Dans le cas de l’[outil d’autoévaluation DevOps](https://sara-sabr.github.io/auto-evaluation-devops-self-assessment/#/), nous avons mis à l’essai les problèmes de convivialité du site Web : problèmes de mise en page, manque de rétroaction, terminologie déroutante, fonctionnalité manquante (si l’utilisateur ne peut pas effectuer une tâche particulière en raison d’une interface manquante), navigation manquante (si l’utilisateur est bloqué sur un écran pendant l’essai) et contenu d'écrans particuliers.
Au cours des essais, nous avons évalué non seulement la convivialité, mais la fonctionnalité et le contenu de l’outil, mais nous demandions également aux utilisateurs des commentaires généraux sur l’utilité de l’application et la façon dont elle peut être améliorée.
Nous nous sommes assurés que les utilisateurs connaissent la justification du prototype et de l’essai.
Toutefois, nous avons évité d’expliquer en détail le fonctionnement du prototype, ou la façon dont il devrait résoudre les problèmes des utilisateurs.
Nous avons laissé l’expérience d’utilisation du prototype par l’utilisateur parler d’elle-même et observé les réactions de celui-ci.
Nous avons rassuré les participants qu’au cours de la séance, nous testons le prototype et non l’utilisateur. Nous avons expliqué qu’il n’y a pas de bonnes ou de mauvaises réponses aux questions posées et que toute mesure prise par eux nous aidera à combler les lacunes que nous avons manquées lors de la conception de l’application.
Nous avons présenté les tâches une à la fois, et avons invité les participants à « réfléchir à haute voix », et notamment exprimer leurs préoccupations, opinions et commentaires.
Nous avons demandé aux utilisateurs de parler de leurs expériences, ce qui a été crucial lors de conception de notre produit.

Les tests de convivialité de l’outil d’auto-évaluation DevOps pendant la pandémie de COVID-19 ont été effectués à distance.
Nous avons alors perdu l’avantage du contact en personne, mais personnellement nous avons trouvé que les essais à distance étaient tout aussi efficaces que les essais traditionnels.
Les essais en ligne à distance donnent accès à un plus grand bassin de testeurs potentiels, réduisent le temps de déplacement et donnent plus de souplesse aux participants.
Et surtout, les gens accomplissent des tâches à la maison (c.-à-d. un environnement naturel) où ils utiliseront nos produits.
Par conséquent, les renseignements sur la convivialité que nous avons tirés de l’essai sont plus proches du monde réel.

### **Collecte de commentaires et mise en œuvre**

Pendant la collecte de commentaires, il est très important de ne pas perturber l’interaction de l’utilisateur avec le prototype.
Nous devions trouver un moyen de recueillir les commentaires d’une manière qui nous permettait d’observer sans entraves ce qui se passait.
Pour ce faire, avec la permission de l’utilisateur, nous avons utilisé la fonction d’enregistrement d’écran dans MS Teams et avons enregistré chaque session.
C’était le moyen le plus facile de saisir les pensées et les gestes de l’utilisateur pendant la session d’essai.
La vidéo numérique constitue un résultat important des sessions d’essai de convivialité qui montre clairement l’interaction de l’utilisateur avec les éléments à l’écran.
Nous avons discuté et mis à l’essai notre produit auprès d’environ six ou sept utilisateurs, ce qui était suffisant pour comprendre ce qui doit être amélioré et examiné avant d’apporter des changements au produit.

Pendant les essais de convivialité, nous avons reçu une vaste quantité de commentaires des utilisateurs.
Chaque utilisateur est unique, et peut donc fournir divers types de renseignements utiles.
Une tâche délicate consiste à faire la distinction entre les préférences/désirs des utilisateurs et leurs besoins.
La mise en œuvre d’une plus grande part des désirs de l’utilisateur peut tellement compliquer le produit et l’alourdir que même les utilisateurs, qui ont été invités à utiliser des fonctionnalités, n’utiliseraient pas le produit final.
Il est donc très important de faire une distinction entre les désirs et les besoins, et de ne pas réagir vivement à chaque point de rétroaction.
Certaines suggestions pourraient ne pas être avantageuses pour le produit et, par conséquent, nous devions être stratégiques à l’égard des commentaires qui méritaient un suivi.

Pour utiliser les résultats, il importe de ne pas exagérer ou d’ajouter quelque chose à ce qui a été vu ou entendu.
Afin de saisir les résultats avec exactitude, nous avons mis en correspondance les commentaires particuliers avec nos questions de recherche, déterminé quelles questions ont obtenu une réponse et celles sans réponse, de même que les nouvelles questions qui ont été posées.
Pour ce faire, nous avons établi l’ordre de priorité des commentaires des utilisateurs reçus dans un carnet d’idées avant chaque réunion de planification de l’itération pour nous assurer que l’ordre de priorité est pertinent.

### **L’expérience utilisateur ne se termine jamais**

L’expérience utilisateur ne s’arrête pas ici.
Tous les efforts consacrés à la planification, à la recherche et à la création du produit nous ont permis de passer à la phase de lancement.
Nous devons consacrer du temps à la production après le lancement pour nous assurer que nous créons des produits qui sont utiles aux utilisateurs.
Après le lancement, la phase d’optimisation commence.
Une fois que les utilisateurs auront mis la main sur le produit, nous pourrions constater – grâce aux données et au comportement des utilisateurs – que bon nombre de nos hypothèses initiales sont fausses ou que les utilisateurs utilisent notre produit de différentes façons.
Nous continuons de surveiller l’expérience utilisateur de chacun de nos produits en demandant aux utilisateurs de nous faire part de leurs commentaires.
C’est alors que commence une tout autre phase de l’expérience utilisateur.

*Ai-je mentionné que l’expérience utilisateur est un processus sans fin?*
