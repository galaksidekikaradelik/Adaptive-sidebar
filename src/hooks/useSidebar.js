import { useState, useCallback } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function useSidebar(open, setOpen) {
  const [collapsedDesktop, setCollapsedDesktop] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const collapsed = isMobile ? false : collapsedDesktop;

  const handleCloseMobile = useCallback(() => {
    if (isMobile) setOpen(false);
  }, [isMobile, setOpen]);

  const handleToggle = useCallback(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setCollapsedDesktop((prev) => {
        if (!prev) setOpenMenu(null);
        return !prev;
      });
    }
  }, [isMobile, setOpen]);

  const handleMenuClick = useCallback((index) => {
    if (!collapsed) setOpenMenu((prev) => (prev === index ? null : index));
  }, [collapsed]);

  return {
    collapsed,
    openMenu,
    isMobile,
    handleCloseMobile,
    handleToggle,
    handleMenuClick,
  };
}