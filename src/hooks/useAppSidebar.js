import { useState, useCallback } from "react";

export function useAppSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const setSidebar = useCallback((val) => setSidebarOpen(val), []);

  return { sidebarOpen, openSidebar, closeSidebar, setSidebar };
}