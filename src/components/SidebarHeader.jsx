import { memo } from "react";

const SidebarHeader = memo(function SidebarHeader({ collapsed, isMobile, onToggle }) {
  return (
    <header className="sidebar-header">
      {!collapsed && <h2>Dashboard</h2>}
      <button
        onClick={onToggle}
        aria-label={isMobile ? "Menunu bağla" : collapsed ? "Menunu aç" : "Menunu bağla"} 
      >
        {isMobile ? "✕" : collapsed ? "→" : "←"}
      </button>
    </header>
  );
});
export default SidebarHeader;