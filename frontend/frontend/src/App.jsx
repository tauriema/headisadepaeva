import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

export default function App() {
  const [screen, setScreen] = useState("login");

  return (
    <div className="app">
      {screen === "login" && (
        <div className="phone">
          <div className="brandCard">
            <img src={logo} alt="logo" className="logoImg" />
            <div className="brandText">POSKARATE</div>
          </div>

          <button
            className="mainBtn green"
            onClick={() => setScreen("profile")}
          >
            Logi sisse
          </button>
        </div>
      )}

      {screen === "profile" && (
        <div className="phone">
          <div className="avatar">👤</div>

          <div className="pill">TEST KASUTAJA</div>

          <button className="mainBtn orange" onClick={() => setScreen("login")}>
            LOGI VÄLJA
          </button>

          <div className="bottomNav">
            <button className="active">PROFIIL</button>
            <button onClick={() => setScreen("home")}>AVALEHT</button>
            <button onClick={() => setScreen("menu")}>MENÜÜ</button>
          </div>
        </div>
      )}

      {screen === "home" && (
        <div className="phone">
          <div className="brandCard small">
            <img src={logo} alt="logo" className="logoImg" />
            <div className="brandText">POSKARATE</div>
          </div>

          <div className="pill">Krediit: 100p</div>

          <div className="menu">
            <a
              href="https://sites.google.com/jpg.tartu.ee/2025-2026-valikkursused/kursused?authuser=0"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Vaata valikaineid
            </a>

            <button className="btn" onClick={() => setScreen("premium")}>
              Hinda valikaineid
            </button>

            <button className="btn" onClick={() => setScreen("premium")}>
              Seadista valimisrobot
            </button>

            <button className="btn" onClick={() => setScreen("premium")}>
              Loovuta koht
            </button>
          </div>

          <div className="bottomNav">
            <button onClick={() => setScreen("profile")}>PROFIIL</button>
            <button className="active">AVALEHT</button>
            <button onClick={() => setScreen("menu")}>MENÜÜ</button>
          </div>
        </div>
      )}

      {screen === "menu" && (
        <div className="phone">
          <div className="menu">
            <a
              href="https://sites.google.com/jpg.tartu.ee/2025-2026-valikkursused/kursused?authuser=0"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Vaata valikaineid
            </a>

            <button className="btn" onClick={() => setScreen("premium")}>
              Hinda valikaineid
            </button>

            <button className="btn" onClick={() => setScreen("premium")}>
              Seadista valimisrobot
            </button>

            <button className="btn" onClick={() => setScreen("premium")}>
              Loovuta koht
            </button>

            <a
              href="https://cv.ee/et/search?limit=20&offset=0"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Osta krediiti
            </a>

            <button className="btn" onClick={() => setScreen("premium")}>
              Suhtle õpetajatega
            </button>

            <button className="btn" onClick={() => setScreen("premium")}>
              Vaata valikaine gruppe
            </button>
          </div>

          <div className="bottomNav">
            <button onClick={() => setScreen("profile")}>PROFIIL</button>
            <button onClick={() => setScreen("home")}>AVALEHT</button>
            <button className="active">MENÜÜ</button>
          </div>
        </div>
      )}

      {screen === "premium" && (
        <div className="phone">
          <div className="premium">
            <p>Tegemist on premium funktsiooniga</p>

            <a
              href="https://cv.ee/et/search?limit=20&offset=0"
              target="_blank"
              rel="noreferrer"
              className="btn red"
            >
              Osta (200€/kuu)
            </a>

            <button className="btn" onClick={() => setScreen("home")}>
              Tagasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
