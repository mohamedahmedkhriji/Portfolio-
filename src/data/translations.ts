export const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
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
      body: "Product Manager and IT Consultant with a proven 0-to-1 track record across B2B SaaS, digital transformation, and technology advisory. I help companies turn ambiguous problems into shipped products and scalable systems, combining strategic product thinking with hands-on technical depth. As founder of Repset, I took a gym-management platform from zero to live in under 3 months with 3 paying partners, 68% D60 retention, and zero marketing spend. As CEO of a 6-person studio, I delivered 10+ B2B mandates across 6 countries, cutting cycle time 30% and raising on-time delivery from 60% to 80%. On the consulting side, I advise IT companies on product strategy, process automation with Make and n8n, and software delivery, whether embedded as a fractional PM or brought in for a focused engagement.",
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
      title: "À propos de moi",
      body: "Chef de Produit et Consultant IT avec un parcours prouvé de 0 à 1 en B2B SaaS, transformation digitale et conseil technologique. J'aide les entreprises à transformer des problèmes flous en produits livrés et systèmes scalables, en alliant vision stratégique et expertise technique. En tant que fondateur de Repset, j'ai lancé une plateforme de gestion de salles de sport en moins de 3 mois avec 3 partenaires payants, 68% de rétention D60 et zéro budget marketing. En tant que CEO d'un studio de 6 personnes, j'ai livré 10+ mandats B2B dans 6 pays, réduisant le cycle de 30% et faisant passer la livraison à temps de 60% à 80%. En consulting, je conseille les entreprises IT sur la stratégie produit, l'automatisation avec Make et n8n, et la livraison logicielle, en tant que PM fractionné ou pour des missions ciblées.",
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
  de: {
    common: {
      loading: "Laden",
      welcome: "Willkommen",
    },
    nav: {
      about: "ÜBER MICH",
      work: "PROJEKTE",
      contact: "CONTACT",
      chooseLanguage: "Sprache wählen",
    },
    social: {
      resume: "CV",
      calendly: "Termin über Calendly buchen",
    },
    landing: {
      greeting: "Hallo! Ich bin",
      roleLine1: "Product",
      roleLine2: "Manager",
      founder: "Gründer",
      builder: "Bouwer",
    },
    about: {
      title: "Über mich",
      body: "Product Manager und IT-Berater mit nachgewiesener 0-zu-1-Erfolgsbilanz in B2B-SaaS, digitaler Transformation und Technologieberatung. Ich helfe Unternehmen, unklare Probleme in gelieferte Produkte und skalierbare Systeme zu verwandeln, indem ich strategisches Produktdenken mit technischer Umsetzungstiefe verbinde. Als Gründer von Repset brachte ich eine Gym-Management-Plattform in unter 3 Monaten live, mit 3 zahlenden Partnern, 68% D60-Retention und null Marketingausgaben. Als CEO eines 6-köpfigen Studios lieferte ich 10+ B2B-Mandate in 6 Ländern, reduzierte die Durchlaufzeit um 30% und steigerte die pünktliche Lieferung von 60% auf 80%. Auf der Beratungsseite unterstütze ich IT-Unternehmen in Produktstrategie, Prozessautomatisierung mit Make und n8n sowie Software-Lieferung, ob als Fractional PM oder für gezielte Einsätze.",
    },
    what: {
      titlePrefix: "W",
      titleRest: "AS",
      titleLine2Prefix: "ICH",
      titleLine2Rest: " TUE",
      description: "Beschreibung",
      tools: "Kompetenzen & Tools",
      cards: [
        {
          title: "PRODUCT",
          body: "Ich bringe Produkte von null auf eins, indem ich vage Ideen in definierte MVPs, validierte Roadmaps und messbare Ergebnisse verwandle.",
          tags: [
            "Agile",
            "Scrum",
            "Roadmaps",
            "Backlogs",
            "Sprintplanung",
            "Stakeholder-Management",
            "Risikotracking",
            "B2B SaaS",
          ],
        },
        {
          title: "ENTWICKLUNG",
          body: "Ich baue und liefere Software direkt, von Full-Stack-Webanwendungen über mobile Apps bis zu Automatisierungs-Workflows.",
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
          title: "BETRIEB",
          body: "Ich berate IT-Unternehmen zu Lieferleistung, Prozessautomatisierung und Teameffizienz, damit Teams Durchlaufzeiten reduzieren und operative Reibung beseitigen.",
          tags: [
            "IT Consulting",
            "Prozessautomatisierung",
            "Fractional PM",
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
      titleLine1: "Meine Karriere",
      titleLine2: "Erfahrung",
      now: "JETZT",
      items: [
        {
          role: "Software Engineer Praktikant",
          company: "ZEENOVI",
          year: "2023",
          body: "Baute und lieferte Clevory, eine plattformübergreifende E-Learning-App für Universitäts- und Unternehmensschulung, mit Verantwortung für Content-Delivery und Authentifizierungsflüsse von der Spezifikation bis zur Produktion.",
        },
        {
          role: "IT-Projektmanager und CEO",
          company: "Madinah Innovators",
          year: "2024-2026",
          body: "Gründete und leitete ein 6-köpfiges Softwarestudio, das 10+ B2B-Mandate in 6 Ländern lieferte, die pünktliche Lieferung von 60% auf 80% steigerte und die Durchlaufzeit um 30% reduzierte.",
        },
        {
          role: "Gründer und Product Manager",
          company: "Repset",
          year: "JETZT",
          body: "Baute und veröffentlichte solo eine B2B-SaaS-Plattform für Gym-Management und Mitgliederplanung in unter 3 Monaten, mit 3 zahlenden Partnern und 50+ aktiven Nutzern.",
        },
      ],
    },
    work: {
      titleStart: "Meine",
      titleAccent: "Projekte",
      toolsLabel: "Tools und Funktionen",
      projects: [
        {
          title: "Repset",
          category: "B2B SaaS / Gym-Management",
          tools: "React, Node.js, SQL, Firebase, DigitalOcean CI/CD",
        },
        {
          title: "Madinah Innovators",
          category: "Software-Delivery-Studio",
          tools: "React, Laravel, Flutter, Make, n8n, gemeinsame CI/CD-Pipelines",
        },
        {
          title: "Clevory",
          category: "Plattformübergreifende E-Learning-App",
          tools: "Flutter, Dart, Firebase, Authentifizierung, Content-Delivery",
        },
        {
          title: "Automation Systems",
          category: "Client Operations",
          tools: "Make, n8n, Workflow-Design, Stakeholder-Management",
        },
      ],
    },
    techStack: {
      title: "Mein Techstack",
    },
    contact: {
      title: "Contact",
      email: "E-mail",
      phone: "Telefon",
      social: "Social",
      locationLine1: "B2B SaaS Product Manager",
      basedIn: "mit Sitz in",
      location: "Ariana, Tunis",
    },
  },
} as const;

export type Translation = (typeof translations)[LanguageCode];
