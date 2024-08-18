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
}

export interface Translations {
  [key: string]: TranslationKeys;
}

export const translations: Translations = {
  en: {
    headerHeading: "Welcome to Nextra – Your Gateway to Cutting-Edge Innovation and Solutions",
    headerDescription: "At Nextra, we believe in pushing the boundaries of what's possible. Whether you're looking for cutting-edge solutions, expert insights, or the latest in technology, we've got you covered. Explore our world of innovation and see how Nextra can take you to the next level.",

    //buttons
    learnMore: 'Learn More',
    register: "Register",
    login: 'Login',
    account: 'Account',
    submit: 'Submit',
    sendMessage: 'Send Message',

    sectionOneHeading: 'Explore Nextra’s Key Features: Powering the Modern Web',
    sectionOneParaGraph: 'Experience a suite of robust features tailored to modern web development.',

    contactHeading: 'Get In Tocuh.',
    contactParaghraph: "We'd love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions. Feel free to reach out to us, and we'll get back to you as soon as possible.",

  },
  fr: {
    headerHeading: "Bienvenue dans notre application",
    headerDescription: "Ceci est une application multilingue",

    //buttons
    learnMore: 'Learn More',
    register: "Register",
    login: 'Login',
    account: 'Account',
    submit: 'Submit',
    sendMessage: 'Send Message',

    sectionOneHeading: 'Explore Nextra’s Key Features: Powering the Modern Web',
    sectionOneParaGraph: 'Experience a suite of robust features tailored to modern web development.',

    contactHeading: 'Get In Tocuh.',
    contactParaghraph: "We'd love to hear from you! Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions. Feel free to reach out to us, and we'll get back to you as soon as possible.",

  },
};
