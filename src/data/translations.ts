export const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "nl", label: "Nederlands" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const translations = {
  en: {
    common: {
      loading: "Loading",
      welcome: "Welcome",
    },
    nav: {
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT",
      chooseLanguage: "Choose language",
    },
    social: {
      resume: "RESUME",
      calendly: "Schedule a meeting on Calendly",
    },
    landing: {
      greeting: "Hello! I'm",
      roleLine1: "Product",
      roleLine2: "Manager",
      founder: "Founder",
      builder: "Builder",
    },
    about: {
      title: "About Me",
      body: "Product manager who took a B2B SaaS platform from first commit to live production solo in under 3 months, signed 3 gym partnerships, and sustained 68% user retention at 60 days with zero marketing spend. I combine product strategy with hands-on engineering in React, Node.js, Flutter, Laravel, Firebase, and SQL.",
    },
    what: {
      titlePrefix: "W",
      titleRest: "HAT",
      titleLine2Prefix: "I",
      titleLine2Rest: " DO",
      description: "Description",
      tools: "Skillset & tools",
      cards: [
        {
          title: "PRODUCT",
          body: "I turn ambiguous B2B problems into scoped product bets, roadmaps, MVPs, and release plans that teams can actually ship.",
          tags: [
            "Agile",
            "Scrum",
            "Roadmaps",
            "Backlogs",
            "Sprint Planning",
            "Stakeholder Reporting",
            "Risk Tracking",
            "B2B Clients",
          ],
        },
        {
          title: "BUILD",
          body: "I code directly with engineering teams, which keeps delivery tight and removes the hand-off layer between product and build.",
          tags: [
            "React",
            "Node.js",
            "Laravel",
            "Flutter",
            "Firebase",
            "SQL",
            "CI/CD",
            "DigitalOcean",
          ],
        },
        {
          title: "OPERATE",
          body: "I have founded, hired for, and managed software delivery operations, from compliance to sprint cadences and client communication.",
          tags: [
            "Hiring",
            "Team Management",
            "Tax Compliance",
            "Jira",
            "Trello",
            "Clockify",
            "Make",
            "n8n",
          ],
        },
      ],
    },
    career: {
      titleLine1: "My career",
      titleLine2: "experience",
      now: "NOW",
      items: [
        {
          role: "Software Engineer Intern",
          company: "ZEENOVI",
          year: "2023",
          body: "Built and shipped Clevory, a cross-platform e-learning app for university and corporate training, owning content delivery and authentication flows from spec to production release.",
        },
        {
          role: "IT Project Manager and CEO",
          company: "Madinah Innovators",
          year: "2024-2026",
          body: "Founded and ran a 6-person software delivery studio, serving 10+ B2B accounts across 6 countries while improving on-time delivery from 60% to 80% and reducing cycle time from 10 to 7 weeks.",
        },
        {
          role: "Founder and Product Manager",
          company: "Repset",
          year: "NOW",
          body: "Built and deployed a live B2B SaaS platform for gym management and member scheduling solo in under 3 months, signing 3 gym partnerships and reaching 50+ active users.",
        },
      ],
    },
    work: {
      titleStart: "My",
      titleAccent: "Work",
      toolsLabel: "Tools and features",
      projects: [
        {
          title: "Repset",
          category: "B2B SaaS / Gym management",
          tools: "React, Node.js, SQL, Firebase, DigitalOcean CI/CD",
        },
        {
          title: "Madinah Innovators",
          category: "Software delivery studio",
          tools: "React, Laravel, Flutter, Make, n8n, shared CI/CD pipelines",
        },
        {
          title: "Clevory",
          category: "Cross-platform e-learning app",
          tools: "Flutter, Dart, Firebase, authentication, content delivery",
        },
        {
          title: "Automation Systems",
          category: "Client operations",
          tools: "Make, n8n, workflow design, stakeholder reporting",
        },
      ],
    },
    techStack: {
      title: "My Techstack",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      social: "Social",
      locationLine1: "B2B SaaS Product Manager",
      basedIn: "based in",
      location: "Ariana, Tunis",
    },
  },
  fr: {
    common: {
      loading: "Chargement",
      welcome: "Bienvenue",
    },
    nav: {
      about: "À PROPOS",
      work: "PROJETS",
      contact: "CONTACT",
      chooseLanguage: "Choisir la langue",
    },
    social: {
      resume: "CV",
      calendly: "Planifier un rendez-vous sur Calendly",
    },
    landing: {
      greeting: "Bonjour ! Je suis",
      roleLine1: "Product",
      roleLine2: "Manager",
      founder: "Fondateur",
      builder: "Builder",
    },
    about: {
      title: "À propos",
      body: "Product manager, j'ai mené une plateforme SaaS B2B du premier commit à la production en moins de 3 mois, signé 3 partenariats avec des salles de sport et maintenu 68 % de rétention utilisateur à 60 jours sans budget marketing. Je combine stratégie produit et ingénierie pratique avec React, Node.js, Flutter, Laravel, Firebase et SQL.",
    },
    what: {
      titlePrefix: "C",
      titleRest: "E QUE",
      titleLine2Prefix: "JE",
      titleLine2Rest: " FAIS",
      description: "Description",
      tools: "Compétences & outils",
      cards: [
        {
          title: "PRODUIT",
          body: "Je transforme des problèmes B2B ambigus en paris produit cadrés, roadmaps, MVP et plans de lancement que les équipes peuvent réellement livrer.",
          tags: [
            "Agile",
            "Scrum",
            "Roadmaps",
            "Backlogs",
            "Planification sprint",
            "Reporting parties prenantes",
            "Suivi des risques",
            "Clients B2B",
          ],
        },
        {
          title: "BUILD",
          body: "Je code directement avec les équipes engineering, ce qui resserre la livraison et supprime la couche de hand-off entre produit et développement.",
          tags: [
            "React",
            "Node.js",
            "Laravel",
            "Flutter",
            "Firebase",
            "SQL",
            "CI/CD",
            "DigitalOcean",
          ],
        },
        {
          title: "OPÉRER",
          body: "J'ai fondé, recruté et piloté des opérations de livraison logicielle, de la conformité aux cadences de sprint et à la communication client.",
          tags: [
            "Recrutement",
            "Gestion d'équipe",
            "Conformité fiscale",
            "Jira",
            "Trello",
            "Clockify",
            "Make",
            "n8n",
          ],
        },
      ],
    },
    career: {
      titleLine1: "Mon parcours",
      titleLine2: "expérience",
      now: "ACTUEL",
      items: [
        {
          role: "Stagiaire ingénieur logiciel",
          company: "ZEENOVI",
          year: "2023",
          body: "Conception et livraison de Clevory, une application e-learning multiplateforme pour l'université et la formation en entreprise, avec prise en charge de la livraison de contenu et des flux d'authentification jusqu'à la production.",
        },
        {
          role: "Chef de projet IT et CEO",
          company: "Madinah Innovators",
          year: "2024-2026",
          body: "Création et gestion d'un studio logiciel de 6 personnes, au service de plus de 10 comptes B2B dans 6 pays, avec une livraison à temps passée de 60 % à 80 % et un cycle réduit de 10 à 7 semaines.",
        },
        {
          role: "Fondateur et Product Manager",
          company: "Repset",
          year: "ACTUEL",
          body: "Conception et déploiement solo d'une plateforme SaaS B2B de gestion de salles de sport et de planning membres en moins de 3 mois, avec 3 partenariats signés et plus de 50 utilisateurs actifs.",
        },
      ],
    },
    work: {
      titleStart: "Mes",
      titleAccent: "Projets",
      toolsLabel: "Outils et fonctionnalités",
      projects: [
        {
          title: "Repset",
          category: "SaaS B2B / gestion de salles de sport",
          tools: "React, Node.js, SQL, Firebase, CI/CD DigitalOcean",
        },
        {
          title: "Madinah Innovators",
          category: "Studio de livraison logicielle",
          tools: "React, Laravel, Flutter, Make, n8n, pipelines CI/CD partagés",
        },
        {
          title: "Clevory",
          category: "Application e-learning multiplateforme",
          tools: "Flutter, Dart, Firebase, authentification, livraison de contenu",
        },
        {
          title: "Automation Systems",
          category: "Opérations client",
          tools: "Make, n8n, conception de workflows, reporting parties prenantes",
        },
      ],
    },
    techStack: {
      title: "Mon stack technique",
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Téléphone",
      social: "Réseaux",
      locationLine1: "Product Manager SaaS B2B",
      basedIn: "basé à",
      location: "Ariana, Tunis",
    },
  },
  nl: {
    common: {
      loading: "Laden",
      welcome: "Welkom",
    },
    nav: {
      about: "OVER MIJ",
      work: "WERK",
      contact: "CONTACT",
      chooseLanguage: "Taal kiezen",
    },
    social: {
      resume: "CV",
      calendly: "Plan een afspraak via Calendly",
    },
    landing: {
      greeting: "Hallo! Ik ben",
      roleLine1: "Product",
      roleLine2: "Manager",
      founder: "Oprichter",
      builder: "Bouwer",
    },
    about: {
      title: "Over mij",
      body: "Productmanager die een B2B SaaS-platform van eerste commit naar live productie bracht in minder dan 3 maanden, 3 sportschoolpartnerschappen sloot en 68% gebruikersretentie na 60 dagen behield zonder marketingbudget. Ik combineer productstrategie met hands-on engineering in React, Node.js, Flutter, Laravel, Firebase en SQL.",
    },
    what: {
      titlePrefix: "W",
      titleRest: "AT",
      titleLine2Prefix: "IK",
      titleLine2Rest: " DOE",
      description: "Beschrijving",
      tools: "Vaardigheden & tools",
      cards: [
        {
          title: "PRODUCT",
          body: "Ik vertaal vage B2B-problemen naar scherpe productkeuzes, roadmaps, MVP's en releaseplannen die teams echt kunnen shippen.",
          tags: [
            "Agile",
            "Scrum",
            "Roadmaps",
            "Backlogs",
            "Sprintplanning",
            "Stakeholderrapportage",
            "Risicobeheer",
            "B2B-klanten",
          ],
        },
        {
          title: "BOUWEN",
          body: "Ik codeer direct met engineeringteams, waardoor delivery strak blijft en de hand-off tussen product en bouw verdwijnt.",
          tags: [
            "React",
            "Node.js",
            "Laravel",
            "Flutter",
            "Firebase",
            "SQL",
            "CI/CD",
            "DigitalOcean",
          ],
        },
        {
          title: "OPEREREN",
          body: "Ik heb software delivery-operaties opgericht, mensen aangenomen en teams geleid, van compliance tot sprintcadans en klantcommunicatie.",
          tags: [
            "Hiring",
            "Teammanagement",
            "Belastingcompliance",
            "Jira",
            "Trello",
            "Clockify",
            "Make",
            "n8n",
          ],
        },
      ],
    },
    career: {
      titleLine1: "Mijn carrière",
      titleLine2: "ervaring",
      now: "NU",
      items: [
        {
          role: "Software Engineer Intern",
          company: "ZEENOVI",
          year: "2023",
          body: "Bouwde en lanceerde Clevory, een cross-platform e-learningapp voor universiteiten en bedrijfstraining, met eigenaarschap over content delivery en authenticatiestromen van specificatie tot productie.",
        },
        {
          role: "IT Projectmanager en CEO",
          company: "Madinah Innovators",
          year: "2024-2026",
          body: "Richtte een softwarestudio van 6 personen op en leidde die voor meer dan 10 B2B-accounts in 6 landen, terwijl on-time delivery steeg van 60% naar 80% en de cyclustijd daalde van 10 naar 7 weken.",
        },
        {
          role: "Oprichter en Productmanager",
          company: "Repset",
          year: "NU",
          body: "Bouwde en implementeerde solo een live B2B SaaS-platform voor sportschoolbeheer en ledenplanning in minder dan 3 maanden, met 3 sportschoolpartnerschappen en meer dan 50 actieve gebruikers.",
        },
      ],
    },
    work: {
      titleStart: "Mijn",
      titleAccent: "Werk",
      toolsLabel: "Tools en functies",
      projects: [
        {
          title: "Repset",
          category: "B2B SaaS / sportschoolbeheer",
          tools: "React, Node.js, SQL, Firebase, DigitalOcean CI/CD",
        },
        {
          title: "Madinah Innovators",
          category: "Software delivery-studio",
          tools: "React, Laravel, Flutter, Make, n8n, gedeelde CI/CD-pipelines",
        },
        {
          title: "Clevory",
          category: "Cross-platform e-learningapp",
          tools: "Flutter, Dart, Firebase, authenticatie, content delivery",
        },
        {
          title: "Automation Systems",
          category: "Klantoperaties",
          tools: "Make, n8n, workflowontwerp, stakeholderrapportage",
        },
      ],
    },
    techStack: {
      title: "Mijn techstack",
    },
    contact: {
      title: "Contact",
      email: "E-mail",
      phone: "Telefoon",
      social: "Sociaal",
      locationLine1: "B2B SaaS Productmanager",
      basedIn: "gevestigd in",
      location: "Ariana, Tunis",
    },
  },
} as const;

export type Translation = (typeof translations)[LanguageCode];
