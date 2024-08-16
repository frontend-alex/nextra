export type Language = "en" | "fr";

export interface TranslationKeys {
  headerHeading: string;
  headerDescription: string;
  learnMore: string,
  register: string,
  login: string
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
    login: 'Login'
  },
  fr: {
    headerHeading: "Bienvenue dans notre application",
    headerDescription: "Ceci est une application multilingue",

    //buttons
    learnMore: 'Learn More',
    register: "Register",
    login: 'Login'
  },
};
