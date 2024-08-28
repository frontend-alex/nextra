
export interface footerLinksInterface { 
    name: string; 
    path: string;
}

export interface carsCardsInterface{
    p: string;
    image: string;
    index: number;
    heading: string;
    underHeadingP: string;
}

export interface additionalFooterLinksInterface {
    name: string; path: string
}

export interface testimonialsInterface {
    quote: string;
    name: string;
    title: string;
}

export interface sidebarItemProps {
    item: {
      id: string;
      title: string;
      icon: any;
    };
    path: string;
    activeTab: boolean | string;
    setActiveTab: (id: string) => void;
    isSidebarCollapsed: boolean;
}

export interface footerLanguagesInterface { 
    name: string; 
    language: string 
}

export interface sidebarLinksInterface {
    id: string;
    title: string;
    icon: any;
    path: string;
}

export interface additionalSidebarLinksInterface { 
    title: string; 
    id: string; 
    path: string;
    icon: any 
}