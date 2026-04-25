import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import ErrorBoundary from "./components/ErrorBoundary";
import { useProfile } from "./hooks/useProfile";
import { useAppSidebar } from "./hooks/useAppSidebar";
import { useState, useEffect } from "react"; // ✅ useEffect əlavə edildi
import "./App.css";

function App() {
  const { profile, updateProfile } = useProfile();
  const { sidebarOpen, openSidebar, closeSidebar, setSidebar } = useAppSidebar();
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("az");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="app-layout"> 
        {sidebarOpen && (
          <div className="overlay" onClick={closeSidebar} />
        )}

        <Sidebar open={sidebarOpen} setOpen={setSidebar} />

        <main className="app-content">
          <button
            onClick={openSidebar}
            className="mobile-btn"
            aria-label="Menunu aç"
            aria-expanded={sidebarOpen}
          >
            ☰ Menu
          </button>

          <Routes>
            <Route path="/" element={
              <ErrorBoundary><Home lang={lang} /></ErrorBoundary>
            } />
            <Route path="/profile" element={
              <ErrorBoundary><Profile profile={profile} lang={lang} /></ErrorBoundary>
            } />
            <Route path="/profile/edit" element={
              <ErrorBoundary><EditProfile profile={profile} setProfile={updateProfile} lang={lang} /></ErrorBoundary>
            } />
            <Route path="/settings" element={
              <ErrorBoundary>
                <Settings
                  dark={dark} setDark={setDark}
                  lang={lang} setLang={setLang}
                  setProfile={updateProfile}
                />
              </ErrorBoundary>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
