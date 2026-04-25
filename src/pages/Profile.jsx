import "./Profile.css";
import { t } from "../constants/translations";

export default function Profile({ profile, lang }) {
  const T = t[lang];
  return (
    <section className="profil-page">
      <h1 className="profil-title">{T.profile}</h1>

      <article className="profil-card">
        <div className="profil-grid">
          <div>
            <p className="profil-label">{T.name}</p>
            <p className="profil-value">{profile.ad}</p> 
          </div>

          <div>
            <p className="profil-label">{T.email}</p>
            <p className="profil-value">{profile.email}</p> 
          </div>
        </div>
      </article>
    </section>
  );
}
