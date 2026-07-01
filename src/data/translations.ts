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
      certifications: "CERTIFICATIONS",
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
      body: "I am a results-driven Project Manager with experience leading cross-functional teams and delivering projects from planning to execution. I specialize in building efficient workflows, improving team communication, and optimizing business operations for growing companies. I manage international B2B client relationships, ensuring clear communication and successful project delivery across different time zones and cultures. My expertise includes coordinating multiple departments, solving complex client challenges, hiring and onboarding top talent, and fostering high-performing teams. I adapt quickly to new industries, company cultures, and business environments, allowing me to integrate seamlessly into any organization. With a proactive mindset, strong leadership, and a focus on continuous improvement, I help businesses streamline operations, increase productivity, and achieve their strategic goals while consistently delivering high-quality results.",
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
          body: "I help businesses turn ideas into successful products by managing the product lifecycle from planning to launch. I collaborate with cross-functional teams and stakeholders to define priorities, deliver high-quality solutions, and improve user experience. My focus is on aligning product strategy with business goals while driving innovation, efficiency, and measurable results.",
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
          body: "I build scalable workflows, high-performing teams, and efficient business processes that drive growth. I develop project management systems, optimize operations, and implement collaboration frameworks that improve productivity. My goal is to create sustainable solutions that help businesses scale efficiently and deliver lasting value.",
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
          title: "OPERATION",
          body: "I operate and optimize business operations by streamlining workflows, improving team collaboration, and ensuring projects run efficiently. I coordinate cross-functional teams, manage client relationships, solve operational challenges, and drive continuous improvement to help businesses achieve their strategic goals.",
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
          status: "Live",
          summary:
            "All-in-one gym management platform covering session booking, membership tracking, and coach scheduling. Taken from first commit to live production in under 3 months with zero marketing spend.",
          metrics: [
            { value: "3", label: "paying partners" },
            { value: "68%", label: "D60 retention" },
            { value: "50+", label: "active users" },
          ],
          tools: "React, Node.js, SQL, Firebase, DigitalOcean CI/CD",
          tags: ["React", "Node.js", "Firebase", "SQL", "DigitalOcean CI/CD"],
        },
        {
          title: "Madinah Innovators",
          category: "Software delivery studio / CEO and PM",
          status: "Completed",
          summary:
            "Built and led a 6-person cross-functional studio delivering 10+ B2B mandates across 6 countries. Introduced sprint cadences, shared CI/CD pipelines, and a real-time risk dashboard with no headcount increase.",
          metrics: [
            { value: "10+", label: "B2B clients" },
            { value: "60→80%", label: "on-time delivery" },
            { value: "-30%", label: "cycle time" },
          ],
          tools: "React, Laravel, Flutter, Make, n8n, shared CI/CD pipelines",
          tags: ["Product strategy", "Sprint planning", "Stakeholder mgmt", "6 countries"],
        },
        {
          title: "Clevory",
          category: "Cross-platform e-learning app / Software engineer intern",
          status: "Completed",
          summary:
            "Built and shipped a cross-platform e-learning app for university and corporate training at ZEENOVI. Owned core content delivery and authentication flows end-to-end, from spec to production. Identified and resolved a content-loading bottleneck improving performance on low-end devices.",
          metrics: [
            { value: "2", label: "platforms" },
            { value: "5 mo", label: "delivery" },
          ],
          tools: "Flutter, Dart, Firebase, authentication, content delivery",
          tags: ["Flutter", "Dart", "Firebase", "Authentication", "Content delivery"],
        },
        {
          title: "Workflow Automation",
          category: "IT consulting / Process automation",
          status: "Ongoing",
          summary:
            "Identified recurring manual-process bottlenecks across B2B client accounts and shipped Make/n8n automation workflows to close them, removing operational friction and creating upsell opportunities without expanding engineering headcount.",
          metrics: [
            { value: "Make", label: "platform" },
            { value: "n8n", label: "platform" },
          ],
          tools: "Make, n8n, workflow design, stakeholder reporting",
          tags: ["Make (Integromat)", "n8n", "Workflow design", "Stakeholder mgmt"],
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
      certifications: "CERTIFICATIONS",
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
      body: "Je suis un Project Manager orienté résultats, avec de l'expérience dans la direction d'équipes transverses et la livraison de projets, de la planification à l'exécution. Je suis spécialisé dans la création de workflows efficaces, l'amélioration de la communication d'équipe et l'optimisation des opérations pour les entreprises en croissance. Je gère des relations clients B2B internationales en assurant une communication claire et une livraison réussie entre différents fuseaux horaires et cultures. Mon expertise inclut la coordination de plusieurs départements, la résolution de défis clients complexes, le recrutement et l'onboarding de talents, ainsi que le développement d'équipes performantes. Je m'adapte rapidement aux nouveaux secteurs, cultures d'entreprise et environnements business, ce qui me permet de m'intégrer facilement dans toute organisation. Avec un état d'esprit proactif, un leadership solide et une attention constante à l'amélioration continue, j'aide les entreprises à fluidifier leurs opérations, augmenter leur productivité et atteindre leurs objectifs stratégiques tout en livrant des résultats de haute qualité.",
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
          body: "J'aide les entreprises à transformer leurs idées en produits performants en gérant le cycle de vie produit, de la planification au lancement. Je collabore avec des équipes transverses et des parties prenantes pour définir les priorités, livrer des solutions de qualité et améliorer l'expérience utilisateur. Mon objectif est d'aligner la stratégie produit avec les objectifs business tout en stimulant l'innovation, l'efficacité et des résultats mesurables.",
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
          body: "Je construis des workflows scalables, des équipes performantes et des processus business efficaces qui soutiennent la croissance. Je développe des systèmes de gestion de projet, j'optimise les opérations et je mets en place des cadres de collaboration qui améliorent la productivité. Mon objectif est de créer des solutions durables qui aident les entreprises à scaler efficacement et à générer une valeur durable.",
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
          title: "OPÉRATION",
          body: "Je pilote et optimise les opérations business en fluidifiant les workflows, en améliorant la collaboration d'équipe et en veillant à ce que les projets avancent efficacement. Je coordonne des équipes transverses, gère les relations clients, résous les défis opérationnels et mène l'amélioration continue pour aider les entreprises à atteindre leurs objectifs stratégiques.",
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
          status: "En ligne",
          summary:
            "Plateforme tout-en-un de gestion de salle de sport couvrant la réservation de sessions, le suivi des abonnés et la planification des coachs. Lancée en production en moins de 3 mois avec zéro budget marketing.",
          metrics: [
            { value: "3", label: "partenaires payants" },
            { value: "68%", label: "rétention D60" },
            { value: "50+", label: "utilisateurs actifs" },
          ],
          tools: "React, Node.js, SQL, Firebase, CI/CD DigitalOcean",
          tags: ["React", "Node.js", "Firebase", "SQL", "CI/CD DigitalOcean"],
        },
        {
          title: "Madinah Innovators",
          category: "Studio de livraison logicielle",
          status: "Terminé",
          summary:
            "Construction et direction d'un studio cross-fonctionnel de 6 personnes livrant 10+ mandats B2B dans 6 pays. Mise en place de sprints, pipelines CI/CD partagés et tableau de bord des risques en temps réel.",
          metrics: [
            { value: "10+", label: "clients B2B" },
            { value: "60→80%", label: "livraison à temps" },
            { value: "-30%", label: "cycle" },
          ],
          tools: "React, Laravel, Flutter, Make, n8n, pipelines CI/CD partagés",
          tags: ["Stratégie produit", "Planification sprint", "Stakeholder mgmt", "6 pays"],
        },
        {
          title: "Clevory",
          category: "Application e-learning multiplateforme",
          status: "Terminé",
          summary:
            "Construction et livraison d'une application e-learning multiplateforme pour la formation universitaire et d'entreprise chez ZEENOVI. Responsable des flux de contenu et d'authentification de bout en bout.",
          metrics: [
            { value: "2", label: "plateformes" },
            { value: "5 mois", label: "livraison" },
          ],
          tools: "Flutter, Dart, Firebase, authentification, livraison de contenu",
          tags: ["Flutter", "Dart", "Firebase", "Authentification", "Livraison de contenu"],
        },
        {
          title: "Workflow Automation",
          category: "Opérations client",
          status: "En cours",
          summary:
            "Identification de goulets d'étranglement récurrents dans les processus manuels de comptes B2B et livraison de workflows Make/n8n pour réduire les frictions opérationnelles sans augmenter les effectifs.",
          metrics: [
            { value: "Make", label: "plateforme" },
            { value: "n8n", label: "plateforme" },
          ],
          tools: "Make, n8n, conception de workflows, reporting parties prenantes",
          tags: ["Make (Integromat)", "n8n", "Workflow design", "Stakeholder mgmt"],
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
      certifications: "ZERTIFIKATE",
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
      body: "Ich bin ein ergebnisorientierter Project Manager mit Erfahrung in der Führung funktionsübergreifender Teams und der Umsetzung von Projekten von der Planung bis zur Ausführung. Ich spezialisiere mich auf den Aufbau effizienter Workflows, die Verbesserung der Teamkommunikation und die Optimierung von Geschäftsprozessen für wachsende Unternehmen. Ich betreue internationale B2B-Kundenbeziehungen und sorge für klare Kommunikation sowie erfolgreiche Projektlieferung über verschiedene Zeitzonen und Kulturen hinweg. Zu meiner Expertise gehören die Koordination mehrerer Abteilungen, die Lösung komplexer Kundenherausforderungen, Recruiting und Onboarding starker Talente sowie der Aufbau leistungsfähiger Teams. Ich passe mich schnell an neue Branchen, Unternehmenskulturen und Geschäftsumfelder an und kann mich dadurch nahtlos in jede Organisation integrieren. Mit einer proaktiven Denkweise, starker Führung und Fokus auf kontinuierliche Verbesserung helfe ich Unternehmen, Abläufe zu optimieren, Produktivität zu steigern und strategische Ziele zu erreichen, während ich konstant hochwertige Ergebnisse liefere.",
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
          body: "Ich helfe Unternehmen, Ideen in erfolgreiche Produkte zu verwandeln, indem ich den Produktlebenszyklus von der Planung bis zum Launch steuere. Ich arbeite mit funktionsübergreifenden Teams und Stakeholdern zusammen, um Prioritäten zu definieren, hochwertige Lösungen zu liefern und die User Experience zu verbessern. Mein Fokus liegt darauf, Produktstrategie mit Geschäftszielen zu verbinden und gleichzeitig Innovation, Effizienz und messbare Ergebnisse voranzutreiben.",
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
          body: "Ich baue skalierbare Workflows, leistungsstarke Teams und effiziente Geschäftsprozesse auf, die Wachstum fördern. Ich entwickle Projektmanagement-Systeme, optimiere Abläufe und implementiere Kollaborationsstrukturen, die Produktivität verbessern. Mein Ziel ist es, nachhaltige Lösungen zu schaffen, mit denen Unternehmen effizient skalieren und langfristigen Mehrwert liefern können.",
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
          body: "Ich betreibe und optimiere Geschäftsabläufe, indem ich Workflows verschlanke, Teamzusammenarbeit verbessere und sicherstelle, dass Projekte effizient laufen. Ich koordiniere funktionsübergreifende Teams, betreue Kundenbeziehungen, löse operative Herausforderungen und treibe kontinuierliche Verbesserung voran, damit Unternehmen ihre strategischen Ziele erreichen.",
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
          status: "Live",
          summary:
            "Alles-in-einem Gym-Management-Plattform für Session-Buchung, Mitgliederverwaltung und Coach-Scheduling. In unter 3 Monaten von Null auf Live-Produktion gebracht, ohne Marketingbudget.",
          metrics: [
            { value: "3", label: "zahlende Partner" },
            { value: "68%", label: "D60-Retention" },
            { value: "50+", label: "aktive Nutzer" },
          ],
          tools: "React, Node.js, SQL, Firebase, DigitalOcean CI/CD",
          tags: ["React", "Node.js", "Firebase", "SQL", "DigitalOcean CI/CD"],
        },
        {
          title: "Madinah Innovators",
          category: "Software-Delivery-Studio",
          status: "Abgeschlossen",
          summary:
            "Aufbau und Leitung eines 6-köpfigen cross-funktionalen Studios, das 10+ B2B-Mandate in 6 Ländern lieferte. Einführung von Sprint-Rhythmen, gemeinsamen CI/CD-Pipelines und Echtzeit-Risikodashboard.",
          metrics: [
            { value: "10+", label: "B2B-Kunden" },
            { value: "60→80%", label: "pünktliche Lieferung" },
            { value: "-30%", label: "Durchlaufzeit" },
          ],
          tools: "React, Laravel, Flutter, Make, n8n, gemeinsame CI/CD-Pipelines",
          tags: ["Produktstrategie", "Sprintplanung", "Stakeholder mgmt", "6 Länder"],
        },
        {
          title: "Clevory",
          category: "Plattformübergreifende E-Learning-App",
          status: "Abgeschlossen",
          summary:
            "Baute und lieferte eine plattformübergreifende E-Learning-App für Universitäts- und Unternehmensschulung bei ZEENOVI. Verantwortlich für Content-Delivery und Authentifizierungsflüsse von Ende zu Ende.",
          metrics: [
            { value: "2", label: "Plattformen" },
            { value: "5 Mo", label: "Lieferung" },
          ],
          tools: "Flutter, Dart, Firebase, Authentifizierung, Content-Delivery",
          tags: ["Flutter", "Dart", "Firebase", "Authentifizierung", "Content-Delivery"],
        },
        {
          title: "Workflow Automation",
          category: "Client Operations",
          status: "Laufend",
          summary:
            "Identifizierte wiederkehrende manuelle Prozessengpässe bei B2B-Kunden und lieferte Make/n8n-Automatisierungsworkflows, um operative Reibung ohne zusätzliche Engineering-Kapazität zu reduzieren.",
          metrics: [
            { value: "Make", label: "Plattform" },
            { value: "n8n", label: "Plattform" },
          ],
          tools: "Make, n8n, Workflow-Design, Stakeholder-Management",
          tags: ["Make (Integromat)", "n8n", "Workflow-Design", "Stakeholder mgmt"],
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
