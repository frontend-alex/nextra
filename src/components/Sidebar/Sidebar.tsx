import SidebarItem from "./SidebarItem";
import Circle from "@components/ui/circle";
import useTranslation from "@hooks/useTranslation";
import SidebarController from "@controllers/SidebarController";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const { t } = useTranslation();

  const {
    isCollapsed,
    activeTab,
    sidebarLink,
    additionalSidebarLink,
    setIsCollapsed,
    setActiveTab,
  } = SidebarController();

  return (
    <motion.div
      className="flex min-h-screen relative flex-col-5 px-5 py-10 bg-neutral-100 dark:bg-neutral-900"
      animate={{ width: isCollapsed ? 80 : 280 }}
      layout
    >
      <div className="relative flex">
        <h3 className="font-bold text-center flex-center px-1">
          {isCollapsed ? "N." : "Nextra."}
        </h3>
        <Circle show={true} className="w-[40px] h-[40px] blur-[25px] -top-5" />
      </div>
      <button
        className="cursor-pointer absolute flex-center w-6 h-6 rounded-2xl bg-neutral-200 border border-neutral-300 dark:border-neutral-800 right-[-10px] top-[16px] z-[10] dark:bg-neutral-900"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
      </button>
      <div className="flex-col-3">
        {!isCollapsed && <p className="px-2">{t("mainRoutes")}</p>}
        {sidebarLink.map((item) => (
          <SidebarItem
            path={item.path}
            isSidebarCollapsed={isCollapsed}
            key={item.id}
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div className="flex-col-3 mt-5">
        {!isCollapsed && <p className="px-2">{t("additionalLinks")}</p>}
        {additionalSidebarLink.map((item) => (
          <SidebarItem
            path={item.path}
            isSidebarCollapsed={isCollapsed}
            key={item.id}
            item={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
