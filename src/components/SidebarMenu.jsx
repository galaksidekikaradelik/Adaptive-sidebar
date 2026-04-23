import { memo } from "react";
import { NavLink } from "react-router-dom";

const MENU = [
  { name: "Home", path: "/", icon: "🏠" },
  {
    name: "Profile",
    icon: "👤",
    children: [
      { name: "My Profile", path: "/profile", icon: "🪪" },
      { name: "Edit Profile", path: "/profile/edit", icon: "✏️" },
    ],
  },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

const SidebarMenu = memo(function SidebarMenu({
  collapsed,
  openMenu,
  onMenuClick,
  onLinkClick,
}) {
    return (
        <ul className="menu" role="navigation" aria-label="Əsas naviqasiya">  
            {MENU.map((item, index) => {
            if (item.children) {
                return (
                <li key={index}>
                    <button
                    className="menu-item"
                    onClick={() => onMenuClick(index)}
                    aria-expanded={openMenu === index}  
                    aria-haspopup="true"  
                    >
                    <span className="icon" aria-hidden="true">{item.icon}</span>  
                    <span className="text">{item.name}</span>
                    {!collapsed && (
                        <span className="arrow" aria-hidden="true">  
                        {openMenu === index ? "▾" : "▸"}
                        </span>
                    )}
                    </button>

                    {!collapsed && openMenu === index && (
                    <ul className="submenu" role="list">  
                        {item.children.map((child, i) => (
                        <li key={i}>
                            <NavLink
                            to={child.path}
                            onClick={onLinkClick}
                            className={({ isActive }) =>
                                isActive ? "link active" : "link"
                            }
                            aria-current={({ isActive }) => isActive ? "page" : undefined}  
                            >
                            <span className="icon" aria-hidden="true">{child.icon}</span>  
                            <span className="text">{child.name}</span>
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
                );
            }

            return (
                <li key={index}>
                <NavLink
                    to={item.path}
                    onClick={onLinkClick}
                    className={({ isActive }) =>
                    isActive ? "link active" : "link"
                    }
                    aria-current={({ isActive }) => isActive ? "page" : undefined}  
                >
                    <span className="icon" aria-hidden="true">{item.icon}</span>  
                    <span className="text">{item.name}</span>
                </NavLink>
                </li>
            );
            })}
        </ul>
    );
});

export default SidebarMenu;