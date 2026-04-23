import "./Settings.css";
import { useState } from "react";

export default function Settings() {
  const [dark, setDark] = useState(true);

  return (
    <section className="setting-page">
      <h1 className="setting-title">Settings</h1>

      <div className="setting-card">
        <div className="setting-row">
          <span>Dark Mode</span>
          <button className="btn" onClick={() => setDark(!dark)}>
            {dark ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </section>
  );
}