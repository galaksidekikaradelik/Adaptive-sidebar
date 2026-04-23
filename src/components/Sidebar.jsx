import { memo } from "react";
import { useSidebar } from "../hooks/useSidebar";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";

const Sidebar = memo(function Sidebar({ open, setOpen }) {
  const {
    collapsed,
    openMenu,
    isMobile,
    handleCloseMobile,
    handleToggle,
    handleMenuClick,
  } = useSidebar(open, setOpen);

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""} ${open ? "open" : ""}`}>
      <SidebarHeader
        collapsed={collapsed}
        isMobile={isMobile}
        onToggle={handleToggle}
      />
      <SidebarMenu
        collapsed={collapsed}
        openMenu={openMenu}
        onMenuClick={handleMenuClick}
        onLinkClick={handleCloseMobile}
      />
    </nav>
  );
});

export default Sidebar;