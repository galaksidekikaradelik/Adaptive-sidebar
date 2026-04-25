import "./Settings.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "../constants/translations";


export default function Settings({ dark, setDark, lang, setLang, setProfile }) {
    const T = t[lang];
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();

    const handleReset = () => {
        setProfile({ ad: "Ali Həsənov", email: "ali@example.com" });
        setShowConfirm(false);
        navigate("/profile");
    };

    return (
        <section className="page">
        <h1 className="page-title">{T.settings}</h1>

        <div className="card" style={{ maxWidth: "600px" }}>

            <div className="setting-row">
            <span>{T.darkMode}</span>
            <button
                className="btn"
                onClick={() => setDark(!dark)}
                aria-pressed={dark}
            >
                {dark ? "ON" : "OFF"}
            </button>
            </div>

            <div className="setting-row">
            <span>{T.language}</span>
            <select
                className="lang-select"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                aria-label="Dil seçimi"
            >
                <option value="az">Azərbaycan</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
            </div>

            <div className="setting-row">
            <span>{T.resetProfile}</span>
            {!showConfirm ? (
                <button className="btn btn-danger" onClick={() => setShowConfirm(true)}>
                {T.reset}
                </button>
            ) : (
                <div className="confirm-btns">
                <span className="confirm-text">{T.confirm}</span>
                <button className="btn btn-danger" onClick={handleReset}>{T.yes}</button>
                <button className="btn" onClick={() => setShowConfirm(false)}>{T.no}</button>
                </div>
            )}
            </div>

        </div>
        </section>
    );
}
