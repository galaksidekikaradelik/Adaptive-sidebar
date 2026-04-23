import "./Profile.css";

export default function Profile({ profile }) { 
  return (
    <section className="profil-page">
      <h1 className="profil-title">Profil</h1>

      <article className="profil-card">
        <div className="profil-grid">
          <div>
            <p className="profil-label">Ad</p>
            <p className="profil-value">{profile.ad}</p> 
          </div>

          <div>
            <p className="profil-label">Email</p>
            <p className="profil-value">{profile.email}</p> 
          </div>
        </div>
      </article>
    </section>
  );
}