export type Language = "en" | "fr" | "de";

export interface TranslationKeys {
  headerHeading: string;
  headerDescription: string;
  learnMore: string;
  register: string;
  login: string;
  account: string;
  sectionOneHeading: string;
  sectionOneParaGraph: string;
  submit: string;
  sendMessage: string;
  contactHeading: string;
  contactParaghraph: string;
  contactPageBoxOneHeading: string;
  contactBoxHeadingTwo: string;
  contactBoxParaOne: string;
  contactBoxParaTwo: string;
  numberOfEmployees: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  phone: string;
  getInTouch: string;

  home: string;
  about: string;
  contact: string;

  privacyPolicy: string;
  impressum: string;
  inbox: string;
  nextraRights: string;
  mail: string;
  settings: string;
  paymentHistory: string;
  reports: string;
  projects: string;
  notifications: string;
  dashboard: string;
  search: string;

  smile: string;
  filters: string;
  pickADate: string;
  mainRoutes: string;
  additionalLinks: string;
  revenue: string;

  analysisCardOneHeading: string;
  analysisCardOneData: string;
  analysisCardOneTrend: string;
  analysisCardOneInfo: string;

  analysisCardTwoHeading: string;
  analysisCardTwoData: string;
  analysisCardTwoTrend: string;
  analysisCardTwoInfo: string;

  analysisCardThreeHeading: string;
  analysisCardThreeData: string;
  analysisCardThreeTrend: string;
  analysisCardThreeInfo: string;

  password: string;
  changePassword: string;
  language: string;

  removeAccount: string;
  removeAccountText: string;
  draft?: string; 
  inProgress?: string; 
  archived?: string; 
  disableAccount?: string; 
  deleteAccount?: string; 
  updateEmail?: string; 
}


export interface Translations {
  [key: string]: TranslationKeys;
}

export const translations: Translations = {
  gb: {
    headerHeading: "Welcome to Nextra – Your Gateway to Cutting-Edge Innovation and Solutions",
    headerDescription: "At Nextra, we believe in pushing the boundaries of what's possible. Whether you're looking for cutting-edge solutions, expert insights, or the latest in technology, we've got you covered. Explore our world of innovation and see how Nextra can take you to the next level.",

    // navbar links
    contact: "Contact",
    about: 'About',
    home: 'Home',
    privacyPolicy: 'Privacy & Policy',
    impressum: "Impressum",
    inbox: "Inbox",
    nextraRights: 'Nextra - All Rights Reserved',
    mail: "Mail",
    settings: "Settings",
    paymentHistory: "Payment History",
    reports: "Reports",
    projects: "Projects",
    notifications: "Notifications",
    dashboard: "Dashboard",
    draft: "Draft",
    inProgress: "In Progress",
    archived: "Archived",

    // buttons
    learnMore: 'Learn More',
    register: "Register",
    login: 'Login',
    account: 'Account',
    submit: 'Submit',
    sendMessage: 'Send Message',
    getInTouch: "Get in touch",
    smile: 'Smile is Beautiful',
    filters: "Filters",
    pickADate: "Pick a Date",
    search: "Search",
    disableAccount: 'Disable Account',
    deleteAccount: "Delete Account",
    updateEmail: "Update Email",
    password: 'Password',
    changePassword: 'Change Password',
    language: 'Language',


    sectionOneHeading: 'Explore Nextra’s Key Features: Powering the Modern Web',
    sectionOneParaGraph: 'Experience a suite of robust features tailored to modern web development.',

    // contact form
    contactHeading: 'Chat with your team.',
    contactParaghraph: "We'd love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions. Feel free to reach out to us, and we'll get back to you as soon as possible.",
    contactPageBoxOneHeading: "I'm a solo creator",
    contactBoxParaOne: "I need to set up an account for myself",
    contactBoxHeadingTwo: "I'm part of a team",
    contactBoxParaTwo: "I need to set up an account for a team",
    numberOfEmployees: "Number of employees",

    // form inputs
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    jobTitle: 'Job Title',
    phone: "Phone",

    mainRoutes: "Main Routes",
    additionalLinks: "Additional Links",
    revenue: 'Your total revenue',

    // analysis cards
    analysisCardOneHeading: 'Bar Chart - Stacked + Legend',
    analysisCardOneData: 'January - June 2024',
    analysisCardOneTrend: 'Trending up by 5.2% this month',
    analysisCardOneInfo: 'Showing total visitors for the last 6 months',

    analysisCardTwoHeading: 'Area Chart - Stacked',
    analysisCardTwoData: 'Showing total visitors for the last 6 months',
    analysisCardTwoTrend: 'Trending up by 5.2% this month',
    analysisCardTwoInfo: 'January - June 2024',

    analysisCardThreeHeading: 'Radar Chart - Radius Axis',
    analysisCardThreeData: 'Showing total visitors for the last 6 months',
    analysisCardThreeTrend: 'Trending up by 5.2% this month ',
    analysisCardThreeInfo: 'January - June 2024',

    removeAccount: "Remove Account",
    removeAccountText: 'You can do "Disable Account" to take a break from Nextra.',
  },
  fr: {
    headerHeading: "Bienvenue chez Nextra – Votre Passerelle vers l'Innovation et les Solutions de Pointe",
    headerDescription: "Chez Nextra, nous croyons en la poussée des limites de ce qui est possible. Que vous recherchiez des solutions de pointe, des perspectives d'experts, ou les dernières technologies, nous sommes là pour vous. Explorez notre monde d'innovation et voyez comment Nextra peut vous emmener au niveau supérieur.",
  
    // navbar links
    contact: "Contact",
    about: 'À propos',
    home: 'Accueil',
    privacyPolicy: 'Politique de confidentialité',
    impressum: "Impressum",
    inbox: "Inbox",
    nextraRights: 'Nextra - Tous droits réservés',
    mail: "Mail",
    settings: "Paramètres",
    paymentHistory: "Historique des paiements",
    reports: "Rapports",
    projects: "Projets",
    notifications: "Notifications",
    dashboard: "Tableau de bord",
  
    // buttons
    learnMore: 'En savoir plus',
    register: "S'inscrire",
    login: 'Connexion',
    account: 'Compte',
    submit: 'Soumettre',
    sendMessage: 'Envoyer un message',
    getInTouch: "Contactez-nous",
    smile: 'Le sourire est beau',
    filters: "Filtres",
    pickADate: "Choisir une date",
    search: "Rechercher",
  
    sectionOneHeading: 'Découvrez les Principales Caractéristiques de Nextra : Propulser le Web Moderne',
    sectionOneParaGraph: "Découvrez une suite de fonctionnalités robustes adaptées au développement web moderne.",
  
    // contact form
    contactHeading: 'Discutez avec votre équipe.',
    contactParaghraph: "Nous serions ravis de vous entendre ! Que vous ayez une question sur les fonctionnalités, les tarifs, besoin d'une démonstration ou autre, notre équipe est prête à répondre à toutes vos questions. N'hésitez pas à nous contacter, et nous vous répondrons dès que possible.",
    contactPageBoxOneHeading: "Je suis un créateur solo",
    contactBoxParaOne: "J'ai besoin de créer un compte pour moi-même",
    contactBoxHeadingTwo: "Je fais partie d'une équipe",
    contactBoxParaTwo: "J'ai besoin de créer un compte pour une équipe",
    numberOfEmployees: "Nombre d'employés",
  
    // form inputs
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    email: 'E-mail',
    jobTitle: 'Titre du poste',
    phone: "Téléphone",
  
    mainRoutes: "Routes principales",
    additionalLinks: "Liens supplémentaires",
    revenue: 'Votre revenu total',
  
    // analysis cards
    analysisCardOneHeading: 'Graphique à barres - Empilé + Légende',
    analysisCardOneData: 'Janvier - Juin 2024',
    analysisCardOneTrend: 'Tendance à la hausse de 5,2% ce mois-ci',
    analysisCardOneInfo: 'Affichage du nombre total de visiteurs pour les 6 derniers mois',
  
    analysisCardTwoHeading: 'Graphique de zone - Empilé',
    analysisCardTwoData: 'Affichage du nombre total de visiteurs pour les 6 derniers mois',
    analysisCardTwoTrend: 'Tendance à la hausse de 5,2% ce mois-ci',
    analysisCardTwoInfo: 'Janvier - Juin 2024',
  
    analysisCardThreeHeading: 'Graphique radar - Axe radial',
    analysisCardThreeData: 'Affichage du nombre total de visiteurs pour les 6 derniers mois',
    analysisCardThreeTrend: 'Tendance à la hausse de 5,2% ce mois-ci',
    analysisCardThreeInfo: 'Janvier - Juin 2024',
  
    password: 'Mot de passe',
    changePassword: 'Changer le mot de passe',
    language: 'Langue',
  
    removeAccount: "Supprimer le compte",
    removeAccountText: 'Vous pouvez "désactiver le compte" pour faire une pause sur Nextra.',
  },
  de : {
    headerHeading: "Willkommen bei Nextra – Ihr Tor zu wegweisender Innovation und Lösungen",
    headerDescription: "Bei Nextra glauben wir daran, die Grenzen des Möglichen zu erweitern. Ob Sie auf der Suche nach wegweisenden Lösungen, Experteneinsichten oder der neuesten Technologie sind – wir haben, was Sie brauchen. Entdecken Sie unsere Welt der Innovation und sehen Sie, wie Nextra Sie auf die nächste Ebene bringen kann.",
  
    // navbar links
    contact: "Kontakt",
    about: 'Über uns',
    home: 'Startseite',
    privacyPolicy: 'Datenschutzbestimmungen',
    impressum: "Impressum",
    inbox: "Posteingang",
    nextraRights: 'Nextra - Alle Rechte vorbehalten',
    mail: "E-Mail",
    settings: "Einstellungen",
    paymentHistory: "Zahlungsverlauf",
    reports: "Berichte",
    projects: "Projekte",
    notifications: "Benachrichtigungen",
    dashboard: "Dashboard",
  
    // buttons
    learnMore: 'Mehr erfahren',
    register: "Registrieren",
    login: 'Anmelden',
    account: 'Konto',
    submit: 'Absenden',
    sendMessage: 'Nachricht senden',
    getInTouch: "Kontakt aufnehmen",
    smile: 'Lächeln ist schön',
    filters: "Filter",
    pickADate: "Datum auswählen",
    search: "Suche",
    disableAccount: 'Konto deaktivieren',
    deleteAccount: "Konto löschen",
    updateEmail: "E-Mail aktualisieren",
    password: 'Passwort',
    changePassword: 'Passwort ändern',
    language: 'Sprache',
  
    sectionOneHeading: 'Erkunden Sie die Hauptfunktionen von Nextra: Antrieb für das moderne Web',
    sectionOneParaGraph: 'Erleben Sie eine Suite von leistungsstarken Funktionen, die auf moderne Webentwicklung zugeschnitten sind.',
  
    // contact form
    contactHeading: 'Chatten Sie mit Ihrem Team.',
    contactParaghraph: "Wir freuen uns, von Ihnen zu hören! Ob Sie eine Frage zu Funktionen, Preisen, eine Demo benötigen oder etwas anderes – unser Team ist bereit, alle Ihre Fragen zu beantworten. Kontaktieren Sie uns gerne, und wir melden uns so schnell wie möglich bei Ihnen.",
    contactPageBoxOneHeading: "Ich bin ein Einzelunternehmer",
    contactBoxParaOne: "Ich muss ein Konto für mich selbst einrichten",
    contactBoxHeadingTwo: "Ich bin Teil eines Teams",
    contactBoxParaTwo: "Ich muss ein Konto für ein Team einrichten",
    numberOfEmployees: "Anzahl der Mitarbeiter",
  
    // form inputs
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    jobTitle: 'Berufsbezeichnung',
    phone: "Telefon",
  
    mainRoutes: "Hauptrouten",
    additionalLinks: "Zusätzliche Links",
    revenue: 'Ihr Gesamtumsatz',
  
    // analysis cards
    analysisCardOneHeading: 'Balkendiagramm - Gestapelt + Legende',
    analysisCardOneData: 'Januar - Juni 2024',
    analysisCardOneTrend: 'Diesen Monat um 5,2% gestiegen',
    analysisCardOneInfo: 'Zeigt die Gesamtzahl der Besucher der letzten 6 Monate an',
  
    analysisCardTwoHeading: 'Flächendiagramm - Gestapelt',
    analysisCardTwoData: 'Zeigt die Gesamtzahl der Besucher der letzten 6 Monate an',
    analysisCardTwoTrend: 'Diesen Monat um 5,2% gestiegen',
    analysisCardTwoInfo: 'Januar - Juni 2024',
  
    analysisCardThreeHeading: 'Radardiagramm - Radiusachse',
    analysisCardThreeData: 'Zeigt die Gesamtzahl der Besucher der letzten 6 Monate an',
    analysisCardThreeTrend: 'Diesen Monat um 5,2% gestiegen',
    analysisCardThreeInfo: 'Januar - Juni 2024',
  
    removeAccount: "Konto entfernen",
    removeAccountText: 'Sie können "Konto deaktivieren", um eine Pause von Nextra einzulegen.',
  }
};