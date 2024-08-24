import useTranslation from "@hooks/useTranslation";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { additionalSidebarLinks, sidebarLinks } from "@constants/StaticData";
import { sidebarLinksInterface } from "@constants/interfaces";

const SidebarController = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const sidebarLink = useMemo(() => sidebarLinks(t), [t]);
  const additionalSidebarLink = useMemo(() => additionalSidebarLinks(t), [t]);

  const findActiveTab = (
    links: sidebarLinksInterface[]
  ) => links.find((link) => link.path === pathname)?.id;

  const activeTab =
    findActiveTab(sidebarLink) || findActiveTab(additionalSidebarLink) || "";

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [currentTab, setCurrentTab] = useState<string>(activeTab);

    useEffect(() => {
      setIsCollapsed(window.innerWidth <= 768);
  
      const handleResize = () => {
        setIsCollapsed(window.innerWidth <= 768);
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return {
    isCollapsed,
    setIsCollapsed,
    activeTab: currentTab,
    setActiveTab: setCurrentTab,
    sidebarLink,
    additionalSidebarLink,
  };
};

export default SidebarController;
