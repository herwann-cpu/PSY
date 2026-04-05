export type ResourceItem = {
  title: string;
  author?: string;
  host?: string;
  episode?: string;
  description: string;
  image?: string;
  link?: string;
  videoId?: string;
};

export type Theme = {
  id: string;
  title: string;
  resources: {
    books: ResourceItem[];
    comics: ResourceItem[];
    podcasts: ResourceItem[];
    videos: ResourceItem[];
  };
};

export const resourcesIntro = "La thérapie se poursuit aussi en dehors du cabinet. J'ai rassemblé ici des livres, vidéos et podcasts classés par thématiques que je vous conseille pour vous aider à mieux comprendre ce que vous traversez.";

export const themesData: Theme[] = [
  {
    id: 'trauma',
    title: 'Trauma et dissociation',
    resources: {
      books: [
        {
          title: "Le corps n'oublie rien",
          author: "Bessel van der Kolk",
          description: "Idéal pour comprendre les mécanismes du traumatisme et comment il s'inscrit dans le corps, sans jargon médical excessif.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2226393862.01.LZZZZZZZ.jpg"
        },
        {
          title: "Guérir",
          author: "David Servan-Schreiber",
          description: "Une excellente introduction à l'EMDR et à d'autres approches thérapeutiques non médicamenteuses pour soigner l'anxiété et la dépression.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2221257006.01.LZZZZZZZ.jpg"
        },
        {
          title: "Les psycho-traumatismes",
          author: "Muriel Salmona",
          description: "Un ouvrage de référence pour comprendre l'impact des traumatismes et les mécanismes de la mémoire traumatique.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2416015362.01.LZZZZZZZ.jpg"
        }
      ],
      comics: [],
      podcasts: [],
      videos: []
    }
  },
  {
    id: 'emotions',
    title: 'Émotions',
    resources: {
      books: [
        {
          title: "Émotions : enquête et mode d'emploi (Tomes 1, 2 et 3)",
          author: "Art-mella",
          description: "Une exploration visuelle et pédagogique pour comprendre le fonctionnement des émotions et de la neurodiversité.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2371760110.01.LZZZZZZZ.jpg"
        }
      ],
      comics: [
        {
          title: "La tête dans les nuages",
          author: "Emmanuelle Friedmann",
          description: "Une bande dessinée recommandée pour aborder et comprendre les émotions de manière visuelle et accessible.",
          image: "https://images-na.ssl-images-amazon.com/images/P/B0DXP2ZY8S.01.LZZZZZZZ.jpg"
        }
      ],
      podcasts: [],
      videos: []
    }
  },
  {
    id: 'inceste',
    title: 'Inceste',
    resources: {
      books: [
        {
          title: "Le bouclier de Marie",
          author: "Marie Rebour",
          description: "Un témoignage puissant et nécessaire sur le chemin de la reconstruction après l'inceste.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2848769904.01.LZZZZZZZ.jpg"
        },
        {
          title: "Ce que Cécile sait",
          author: "Cécile Céé",
          description: "Une œuvre qui aborde avec justesse et sensibilité le silence et la parole autour de l'inceste.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2501189655.01.LZZZZZZZ.jpg"
        }
      ],
      comics: [],
      podcasts: [],
      videos: []
    }
  },
  {
    id: 'tdah',
    title: 'TDAH',
    resources: {
      books: [
        {
          title: "C’est (pas) moi c’est mon cerveau",
          author: "Dr Fanny Richard",
          description: "Un livre très accessible pour expliquer le TDAH aux enfants (et aux plus grands) et déculpabiliser.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2092496964.01.LZZZZZZZ.jpg"
        },
        {
          title: "Les petites bulles de l’attention",
          author: "Jean-Philippe Lachaux",
          description: "Un ouvrage passionnant sur les mécanismes de l'attention et comment l'apprivoiser au quotidien.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2738133762.01.LZZZZZZZ.jpg"
        }
      ],
      comics: [],
      podcasts: [],
      videos: []
    }
  },
  {
    id: 'deuils',
    title: 'Deuils',
    resources: {
      books: [],
      comics: [],
      podcasts: [],
      videos: []
    }
  }
];
