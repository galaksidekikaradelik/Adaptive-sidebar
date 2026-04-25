import "./Home.css";
import { t } from "../constants/translations";

export default function Home({lang}) {

    const T = t[lang];
    const stats = [
    { label: "Total Users", value: "12,480", change: "+8.2%", up: true },
    { label: "Revenue", value: "$84,320", change: "+4.1%", up: true },
    { label: "Bounce Rate", value: "23.4%", change: "-1.3%", up: false },
    { label: "Sessions", value: "91,250", change: "+12%", up: true },
  ];

  return (
    <section className="home-page">
      <h1 className="home-title">{T.welcome}</h1>

      <div className="home-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="home-card">
            <p className="home-card-label">{stat.label}</p>
            <p className="home-card-value">{stat.value}</p>
            <p className={stat.up ? "up" : "down"}>
              {stat.change}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
