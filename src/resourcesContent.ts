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
      books: [],
      comics: [
        {
          title: "La tête dans les nuages",
          author: "Emmanuelle Friedmann",
          description: "Une bande dessinée recommandée pour aborder et comprendre les émotions de manière visuelle et accessible.",
          image: "https://images-na.ssl-images-amazon.com/images/P/B0DXP2ZY8S.01.LZZZZZZZ.jpg"
        },
        {
          title: "Goupil ou face",
          author: "Lou Lubie",
          description: "Une bande dessinée très accessible et déculpabilisante pour comprendre la cyclothymie et les troubles de l'humeur.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2413041516.01.LZZZZZZZ.jpg"
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
      books: [],
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
          title: "Émotions : enquête et mode d'emploi (Tomes 1, 2 et 3)",
          author: "Art-mella",
          description: "Une exploration visuelle et pédagogique pour comprendre le fonctionnement des émotions et de la neurodiversité.",
          image: "https://images-na.ssl-images-amazon.com/images/P/2371760110.01.LZZZZZZZ.jpg"
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
