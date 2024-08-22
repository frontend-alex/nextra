import clsx from 'clsx';
import Link from 'next/link';

import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { sidebarItemProps } from '@constants/interfaces';

const SidebarItem = ({
    item,
    activeTab,
    setActiveTab,
    isSidebarCollapsed,
    path,
  }: sidebarItemProps) => {
    const IconComponent = item.icon;
  
    const pathname = usePathname();
  
    return (
      <Link href={path}>
        <motion.div
          layout
          className={clsx(
            "relative flex-3 h-10 px-2 py-3 cursor-pointer transition-all",
            {
              "scale-100": activeTab === item.id,
            }
          )}
          onFocus={() => setActiveTab(item.id)}
          onMouseOver={() => setActiveTab(item.id)}
          onMouseLeave={() => setActiveTab(item.id)}
        >
          {activeTab === item.id ? (
            <motion.div
              layoutId="sidebar-item-indicator"
              className="absolute text-white inset-0 rounded-sm bg-neutral-200 dark:bg-neutral-800"
            />
          ) : null}
          <span
            className={`relative flex ${
              path === pathname ? "text-black dark:text-white" : "text-stone-400"
            }`}
          >
            <IconComponent />
          </span>
          <motion.span
            className={`relative ${
              path === pathname ? "text-black dark:text-white" : "text-stone-400"
            }`}
            animate={{
              clipPath: isSidebarCollapsed
                ? "inset(0% 100% 0% 0%)"
                : "inset(0% 0% 0% 0%)",
              opacity: isSidebarCollapsed ? 0 : 1,
            }}
          >
            {item.title}
          </motion.span>
        </motion.div>
      </Link>
    );
  }
  
export default SidebarItem