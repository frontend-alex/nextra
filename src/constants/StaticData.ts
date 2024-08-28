import {
  Bell,
  FolderClosed,
  History,
  Home,
  Mail,
  Settings,
  StickyNote,
} from "lucide-react";
import { Language, translations } from "./tarnslation";
import { additionalFooterLinksInterface, additionalSidebarLinksInterface, footerLanguagesInterface, footerLinksInterface, sidebarLinksInterface, testimonialsInterface, carsCardsInterface } from "./interfaces";

export const NavbarLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): footerLinksInterface[] => [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("catalog"),
      path: "/",
    },
    {
      name: t("cars"),
      path: "/",
    },
    {
      name: t("termsAndConditions"),
      path: "/",
    },
  ];

export const carsPreviewCards = (t: (ar0: keyof (typeof translations)[Language]) => any): carsCardsInterface[] => [
  {
    heading: 'Compact Cars',
    index: 0,
    underHeadingP: "Perfect for City Driving",
    p: 'Our compact cars are ideal for navigating busy streets and tight parking spaces. Enjoy fuel efficiency without sacrificing comfort, making your city travels both economical and hassle-free.',
    image: '/images/cars/car-1.png'
  },
  {
    heading: 'SUVs',
    index: 1,
    underHeadingP: "Room for Everyone",
    p: 'Travel in comfort with our spacious SUVs, designed for families and groups. With ample storage and advanced safety features, our SUVs provide the perfect balance of power and practicality for long trips.',
    image: '/images/cars/car-5.png'

  },
  {
    heading: 'Luxury Vehicles',
    index: 2,
    underHeadingP: "Drive in Style",
    p: 'Experience the ultimate in comfort and sophistication with our luxury vehicles. Whether for business or leisure, our high-end cars offer premium features and a smooth, elegant ride that turns every journey into a statement.',
    image: '/images/cars/car-3.png'

  },
]


export const testimonials: testimonialsInterface[] = [
    {
      quote:
        "Nextra's robust platform has allowed our team to focus more on innovation rather than managing complex workflows. It's been a game-changer for our product development process.",
      name: "Michael Lee",
      title: "Head of Product at FutureTech",
    },
    {
      quote:
        "The ease of use and the comprehensive features that Nextra offers have significantly improved our team's efficiency. It's the best investment we've made for our business.",
      name: "Jessica Miller",
      title: "Operations Director at Creatify",
    },
    {
      quote:
        "Nextra stands out in the crowded tech landscape with its user-friendly interface and powerful capabilities. It's become an essential tool in our day-to-day operations.",
      name: "David Brown",
      title: "CEO at Digital Dynamics",
    },
    {
      quote:
        "Nextra has completely transformed the way our team collaborates. The innovative tools and seamless experience have taken our productivity to the next level.",
      name: "Sarah Thompson",
      title: "Project Manager at TechCorp",
    },
    {
      quote:
        "As a solo developer, I needed a platform that could keep up with my fast-paced workflow. Nextra has been the perfect solution with its intuitive design and powerful features.",
      name: "James Rodriguez",
      title: "Freelance Developer",
    },
    {
      quote:
        "Implementing Nextra in our company has been a game-changer. The platform's cutting-edge technology and exceptional support have made it a vital part of our business strategy.",
      name: "Emily Wilson",
      title: "CTO at Innovate Solutions",
    },
  ];

export const additionalFooterLinks = (t: (ar0: keyof (typeof translations)[Language]) => any): additionalFooterLinksInterface[] => [
    {
      name: t("inbox"),
      path: "/",
    },
    {
      name: t("impressum"),
      path: "/",
    },
    {
      name: t("privacyPolicy"),
      path: "/",
    },
    {
      name: t("nextraRights"),
      path: "/",
    },
  ];

export const contactFormData = (
  t: (ar0: keyof (typeof translations)[Language]) => any
) => [
    {
      heading: t("contactPageBoxOneHeading"),
      paragraph: t("contactBoxParaOne"),
    },
    {
      heading: t("contactBoxHeadingTwo"),
      paragraph: t("contactBoxParaTwo"),
    },
  ];

export const footerLanguages: footerLanguagesInterface[] = [
  {
    name: "English",
    language: "gb",
  },
  {
    name: "French",
    language: "fr",
  },
  {
    name: "Dutch",
    language: "de",
  },
];

export const sidebarLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): sidebarLinksInterface[] => [
    {
      id: "dashboard",
      title: t('dashboard'),
      icon: Home,
      path: "/",
    },
    {
      id: "mail",
      title: t('mail'),
      icon: Mail,
      path: "/mail",
    },
    {
      id: "projects",
      title: t('projects'),
      icon: FolderClosed,
      path: "/projects",
    },
    {
      id: "reports",
      title: t('reports'),
      icon: StickyNote,
      path: "/reports",
    },
    {
      id: "notifications",
      title: t('notifications'),
      icon: Bell,
      path: "/notifications",
    },
  ];

export const additionalSidebarLinks = (
  t: (ar0: keyof (typeof translations)[Language]) => any
): additionalSidebarLinksInterface[] => [
    {
      title: t('settings'),
      id: "settings",
      path: "/settings",
      icon: Settings,
    },
    {
      title: t("paymentHistory"),
      id: "payment history",
      path: "/pathmen-history",
      icon: History,
    },
  ];
