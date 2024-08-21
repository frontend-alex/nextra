import { Language, translations } from "./tarnslation";

interface NavbarLinks {
  name: string;
  path: string;
}

export const NavbarLinks = (t: (ar0: keyof typeof translations[Language]) => any): NavbarLinks[] => [
  {
    name: t('home'),
    path: "/",
  },
  {
    name: t('about'),
    path: "/",
  },
  {
    name: t('contact'),
    path: "/",
  },
];

interface testimonials {
  quote: string;
  name: string;
  title: string;
}

export const testimonials = [
  {
    quote: "Nextra's robust platform has allowed our team to focus more on innovation rather than managing complex workflows. It's been a game-changer for our product development process.",
    name: "Michael Lee",
    title: "Head of Product at FutureTech"
  },
  {
    quote: "The ease of use and the comprehensive features that Nextra offers have significantly improved our team's efficiency. It's the best investment we've made for our business.",
    name: "Jessica Miller",
    title: "Operations Director at Creatify"
  },
  {
    quote: "Nextra stands out in the crowded tech landscape with its user-friendly interface and powerful capabilities. It's become an essential tool in our day-to-day operations.",
    name: "David Brown",
    title: "CEO at Digital Dynamics"
  },
  {
    quote: "Nextra has completely transformed the way our team collaborates. The innovative tools and seamless experience have taken our productivity to the next level.",
    name: "Sarah Thompson",
    title: "Project Manager at TechCorp"
  },
  {
    quote: "As a solo developer, I needed a platform that could keep up with my fast-paced workflow. Nextra has been the perfect solution with its intuitive design and powerful features.",
    name: "James Rodriguez",
    title: "Freelance Developer"
  },
  {
    quote: "Implementing Nextra in our company has been a game-changer. The platform's cutting-edge technology and exceptional support have made it a vital part of our business strategy.",
    name: "Emily Wilson",
    title: "CTO at Innovate Solutions"
}
];

interface additionalFooterLinks {
  name: string;
  path: string;
}

export const additionalFooterLinks = (t: (ar0: keyof typeof translations[Language]) => any): additionalFooterLinks[] => [
  {
    name: t("inbox"),
    path: "/",
  },
  {
    name: t('impressum'),
    path: "/",
  },
  {
    name: t('privacyPolicy'),
    path: "/",
  },
  {
    name: t('nextraRights'),
    path: "/",
  },
];


export const contactFormData = (t: (ar0: keyof typeof translations[Language]) => any) => [
  {
    heading: t("contactPageBoxOneHeading"),
    paragraph : t("contactBoxParaOne"),
  },
  {
    heading: t("contactBoxHeadingTwo"),
    paragraph : t("contactBoxParaTwo"),
  },
];


export const footerLanguages: {name: string; language: string}[] = [
  {
    name: 'English',
    language: 'gb'
  },
  {
    name: 'French',
    language: 'fr'
  },
  {
    name: 'Dutch',
    language: 'de'
  }
]