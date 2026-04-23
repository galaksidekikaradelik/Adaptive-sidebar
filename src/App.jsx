import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import { useProfile } from "./hooks/useProfile";       
import { useAppSidebar } from "./hooks/useAppSidebar";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary"; 

function App() {
  const { profile, updateProfile } = useProfile();
  const { sidebarOpen, openSidebar, closeSidebar, setSidebar } = useAppSidebar();

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
            aria-expanded={sidebarOpen}>
              ☰ Menu
          </button>

          <Routes>
            <Route path="/" element={
              <ErrorBoundary><Home /></ErrorBoundary>
            } />
            <Route path="/profile" element={
              <ErrorBoundary><Profile profile={profile} /></ErrorBoundary>
            } />
            <Route path="/profile/edit" element={
              <ErrorBoundary><EditProfile profile={profile} setProfile={updateProfile} /></ErrorBoundary>
            } />
            <Route path="/settings" element={
              <ErrorBoundary><Settings /></ErrorBoundary>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;