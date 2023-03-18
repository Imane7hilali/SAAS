
const dataQuestions = [
    {
      id: 0,
      question: "Je finis toujours ma liste des choses à faire car :",
      reponse1: "Je me donne à fond pour en venir à bout même si elle est interminable.",
      reponse2: "Il y a peu de chose dessus.",
      reponse3: "Je n'aime pas faire des listes.",
      type: 0
    },
    {
      id: 1,
      question: "J'adore faire des plans pour de nombreuses années dans le futur : ",
      reponse1: "Vrai, je sais où je serai dans 10 ans !",
      reponse2: "Vrai, mais jamais plus de 1 ou 2 ans.",
      reponse3: "Faux, j'aime vivre au jour le jour.",
      type: 4

    },
    {
      id: 2,
      question: "Quand je perds ou j'abîme un vêtement auquel je tiens, je me sens : ",
      reponse1: "Très triste, c'est une situation que je déteste.",
      reponse2: "Un peu triste, mais je me dis que ce n'est qu'un vêtement.",
      reponse3: "Je m'en fiche, ce n'est vraiment pas grave.",
      type: 0
    },
    {
      id: 3,
      question: "Je n'aime pas les gens qui perturbent les choses en enfreignant les règles : ",
      reponse1: "Vrai, je déteste que l'on transgresse les règles.",
      reponse2: "Ça dépend si la personne a une raison valable.",
      reponse3: "Faux, les gens qui enfreignent les règles m'amusent.",
      type: 7
    },
    {
      id: 4,
      question: "Pour moi la sécurité est ce qu'il y a de plus important : ",
      reponse1: "Vrai, c'est ma priorité n°1 !",
      reponse2: "Vrai, même si parfois j'aime prendre des risques.",
      reponse3: "Non, je trouve la sécurité ennuyante.",
      type: 7
    },
    {
      id: 5,
      question: "J'ai le sentiment que les autres ne me comprendront jamais vraiment : ",
      reponse1: "Souvent, je me sens à part.",
      reponse2: "Quelque fois, mais c'est assez rare.",
      reponse3: "Jamais !",
      type: 5
    },
    {
      id: 6,
      question: "Je vois le positif dans chaque situation :",
      reponse1: "Vrai, on dit souvent que je suis très optimiste.",
      reponse2: "Ça dépend, seulement si la situation n'est pas trop grave.",
      reponse3: "Faux, je vois plus souvent le côté négatif .",
      type: 8
    },
    {
      id: 7,
      question: "Je pense beaucoup à ce qui va se passer dans le futur :",
      reponse1: "Vrai, je sais tout savoir à l'avance.",
      reponse2: "Vrai, mais seulement quelques événements.",
      reponse3: "Faux, je n'aime pas ce qui est prévisible.",
      type: 4
    },
    {
      id: 8,
      question: "Quand je laisse les autres prendre les décisions je me sens : ",
      reponse1: "Calme et heureux (se), ça me permet de profiter à 100%.",
      reponse2: "Heureux (se) mais un peu stressé(e), j'aime tout contrôler.",
      reponse3: "Inutile, je déteste laisser les autres choisir à ma place.",
      type: 8
    },
    {
      id: 9,
      question: "J'aime être entouré(e) de gens à qui je peux apprendre quelque chose : ",
      reponse1: "Vrai, j'adore aider les gens qui m'entourent même ceux que je ne connais pas.",
      reponse2: "Vrai, mais j'ai de la patience seulement pour les personnes très proches de moi.",
      reponse3: "Pas vraiment, je n'ai pas de patience pour aider les gens.",
      type: 4
    },
    {
      id: 10,
      question: "Il est important pour moi de réaliser de grandes choses : ",
      reponse1: "Vrai, j'aimerai faire quelque chose qui change le monde.",
      reponse2: "Vrai, mais si je n'y arrive pas ce n'est pas grave.",
      reponse3: "Pas vraiment, j'aime les choses simples.",
      type: 2
    },
    {
      id: 11,
      question: "Faire les choses de manière traditionnelle est la meilleure façon de les faire : .",
      reponse1: "Vrai, j'adore faire les choses de la même manière.",
      reponse2: "Ça dépend, parfois il m'arrive d'essayer de nouvelles méthodes.",
      reponse3: "Faux, je déteste faire les choses de la même manière ça m'ennuie.",
      type: 3
    },
    {
      id: 12,
      question: "Je suis une personne responsable et fiable : ",
      reponse1: "Vrai, tout le monde a confiance en moi.",
      reponse2: "Ça dépend, si je m'aperçois que je ne suis pas à la hauteur je préfère déléguer en court de route.",
      reponse3: "Faux, je préfère être libre sans responsabilité.",
      type: 5
    },
    {
      id: 13,
      question: "Je suis doué(e) pour voir le bon côté des choses quand les autres se plaignent : ",
      reponse1: "Vrai, j'arrive à remonter facilement le moral des gens.",
      reponse2: "Vrai, si la situation n'est pas trop compliquée.",
      reponse3: "Faux, j'ai du mal à voir le bon côté.",
      type: 8
    },
    {
      id: 14,
      question: "Je m'assure que même les petits détails soient corrects : ",
      reponse1: "Toujours, même s'ils ne se voient pas (moi je les vois).",
      reponse2: "Ça dépend, si ce n'est pas très voyant je ne perds pas mon temps.",
      reponse3: "Pas vraiment, ce qui compte c'est pourquoi on fait les choses.",
      type: 0
    },
    {
      id: 15,
      question: "Les gens devraient suivre les règles au lieu de faire ce qu'ils ont envie de faire : ",
      reponse1: "Vrai, les lois existent pour nous protéger.",
      reponse2: "Vrai, même si toutes les lois ne sont pas toutes utiles.",
      reponse3: "Faux, les règles ne servent qu'à nous gâcher la vie.",
      type: 7
    },
    {
      id: 16,
      question: "J'ai une bonne idée de ce que mon avenir me réserve : ",
      reponse1: "Je sais exactement à quoi ressemblera mon avenir.",
      reponse2: "J'ai une vague idée de ce qui m'attend.",
      reponse3: "Je n'en sais rien et ça me va.",
      type: 3
    },
    {
      id: 17,
      question: "J'aime prendre soin des autres et de leurs besoins : ",
      reponse1: "J'adore ça, je suis quelqu'un de très attentif aux autres.",
      reponse2: "dépend, j'accorde du temps uniquement à ma famille.",
      reponse3: "Je ne sais jamais vraiment comment aider mon entourage.",
      type: 1
    },
    {
      id: 18,
      question: "Dans une relation amoureuse idéale, que ferait votre partenaire pour que vous vous sentiez aimé(e) ? ",
      reponse1: "Il passe du temps avec vous.",
      reponse2: "Il vous donne des conseils avisés.",
      reponse3: "Il s'occupe des tâches ménagères.",
      type: 1
    },
    {
      id: 19,
      question: "L'amélioration de soi est un de mes intérêts majeurs : ",
      reponse1: "Vrai, il y a beaucoup de choses que je voudrais changer chez moi .",
      reponse2: "Un peu, je veux seulement améliorer certains points.",
      reponse3: "Faux, je m'accepte comme je suis avec mes qualités et mes défauts.",
      type: 2
    },
    {
      id: 20,
      question: "J'ai souvent des émotions fortes : ",
      reponse1: "Vrai, je ressens souvent des très grandes joies comme des grandes tristesses.",
      reponse2: "Ça dépend, il m'arrive de ressentir des émotions fortes mais pas très souvent.",
      reponse3: "Faux, je suis calme et mes émotions sont plutôt stables et peu intenses.",
      type: 5
    },
    {
      id: 21,
      question: "J'apporte d'importantes contributions à ma communauté : ",
      reponse1: "Vrai, j'adore m'investir dans des groupes ou des associations.",
      reponse2: "Vrai, mais pas de manière régulière.",
      reponse3: "Faux, cela ne m'intéresse pas.",
      type: 1
    },
    {
      id: 22,
      question: "Je suis une personne optimiste : ",
      reponse1: "Vrai, je vois du positif partout.",
      reponse2: "Ça dépend des situations.",
      reponse3: "Faux, je suis plutôt pessimiste.",
      type: 6
    },
    {
      id: 23,
      question: "j'ai souvent des goûts différents de la plupart des gens : ",
      reponse1: "Vrai, je choisis souvent des choses différentes.",
      reponse2: "Pas toujours, mais il m'arrive d'avoir des goûts surprenants.",
      reponse3: "Faux, j'ai des goûts normaux.",
      type: 3
    },
    {
      id: 24,
      question: "J'ai beaucoup de volonté : ",
      reponse1: "Vrai, quand j'ai une idée en tête rien ne peux m'arrêter.",
      reponse2: "Vrai, même si je peux me laisser décourager par une personne importante à mes yeux.",
      reponse3: "Faux, j'ai du mal à finir ce que j'ai commencé.",
      type: 2
    },
    {
      id: 25,
      question: "Je cherche l'excitation dans mes activités de tous les jours :",
      reponse1: "Toujours, j'aime faire les choses différemment des autres.",
      reponse2: "Parfois, je suis plutôt calme.",
      reponse3: "Jamais, je préfère la sécurité et le confort.",
      type: 6
    },
    {
      id: 26,
      question: "J'ai toujours un plan de secours si les choses tournent mal :",
      reponse1: "Vrai, je ne me lance jamais dans un projet sans 2 ou 3 plans de secours.",
      reponse2: "Ça dépend des fois, j'aime parfois avoir un plan B.",
      reponse3: "Faux, il faut vivre dangereusement c'est plus marrant.",
      type: 6
    },


  ];
  export default dataQuestions;
