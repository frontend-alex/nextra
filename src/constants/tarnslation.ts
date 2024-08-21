import { User } from "@clerk/nextjs/server";

export type Language = "en" | "fr";

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
  numberOfEmployees:  string;
  firstName: string;
  lastName: string; 
  email:  string;
  jobTitle:  string;
  phone: string;
  getInTouch: string;

  home: string;
  about: string;
  contact: string;

  privacyPolicy: string
  impressum:  string
  inbox:  string
  nextraRights: string
  smile: string;
}

export interface Translations {
  [key: string]: TranslationKeys;
}
export const translations: Translations = {
  gb: {
    headerHeading: "Welcome to Nextra – Your Gateway to Cutting-Edge Innovation and Solutions",
    headerDescription: "At Nextra, we believe in pushing the boundaries of what's possible. Whether you're looking for cutting-edge solutions, expert insights, or the latest in technology, we've got you covered. Explore our world of innovation and see how Nextra can take you to the next level.",

    //navbar links
    contact: "Contact",
    about: 'About',
    home: 'Home',
    privacyPolicy: 'Privacy & Policy',
    impressum: "Impressum",
    inbox: "Inbox",
    nextraRights: 'Nextra - All Rights Reserved',

    //buttons
    learnMore: 'Learn More',
    register: "Register",
    login: 'Login',
    account: 'Account',
    submit: 'Submit',
    sendMessage: 'Send Message',
    getInTouch: "Get in touch",
    smile: 'Smile is Beatifull',

    sectionOneHeading: 'Explore Nextra’s Key Features: Powering the Modern Web',
    sectionOneParaGraph: 'Experience a suite of robust features tailored to modern web development.',

    //contact form
    contactHeading: 'Chat with your team.',
    contactParaghraph: "We'd love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions. Feel free to reach out to us, and we'll get back to you as soon as possible.",
    contactPageBoxOneHeading: "I'm a solo creator",
    contactBoxParaOne: "I need to set up an account for myself",
    contactBoxHeadingTwo: "I'm part of a team",
    contactBoxParaTwo: "I need to set up an account for a team",
    numberOfEmployees: "Number of employees",

    //form inputs
    firstName:'First Name',
    lastName: 'Last Name',
    email: 'Email',
    jobTitle: 'Job Title',
    phone: "Phone"

  },
  fr: {
    headerHeading: "Bienvenue chez Nextra – Votre Passerelle vers l'Innovation et les Solutions de Pointe",
    headerDescription: "Chez Nextra, nous croyons en la poussée des limites de ce qui est possible. Que vous recherchiez des solutions de pointe, des perspectives d'experts, ou les dernières technologies, nous sommes là pour vous. Explorez notre monde d'innovation et voyez comment Nextra peut vous emmener au niveau supérieur.",
    
    //navbar links
    contact: "Contact",
    about: 'À propos',
    home: 'Accueil',
    privacyPolicy: 'Privacy & Policy',
    impressum: "Impressum",
    inbox: "Inbox",
    nextraRights: 'Nextra - All Rights Reserved',
    smile: 'Smile is Beatifull',


    //buttons
    learnMore: 'En savoir plus',
    register: "S'inscrire",
    login: 'Connexion',
    account: 'Compte',
    submit: 'Soumettre',
    sendMessage: 'Envoyer un message',
    getInTouch: "Contactez-nous",

    sectionOneHeading: 'Découvrez les Principales Caractéristiques de Nextra : Propulser le Web Moderne',
    sectionOneParaGraph: "Découvrez une suite de fonctionnalités robustes adaptées au développement web moderne.",

    //contact form
    contactHeading: 'Discutez avec votre équipe.',
    contactParaghraph: "Nous serions ravis de vous entendre ! Que vous ayez une question sur les fonctionnalités, les tarifs, besoin d'une démonstration ou autre, notre équipe est prête à répondre à toutes vos questions. N'hésitez pas à nous contacter, et nous vous répondrons dès que possible.",
    contactPageBoxOneHeading: "Je suis un créateur solo",
    contactBoxParaOne: "J'ai besoin de créer un compte pour moi-même",
    contactBoxHeadingTwo: "Je fais partie d'une équipe",
    contactBoxParaTwo: "J'ai besoin de créer un compte pour une équipe",
    numberOfEmployees: "Nombre d'employés",

    //form inputs
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    email: 'E-mail',
    jobTitle: 'Titre du poste',
    phone: "Téléphone"
  },
};