import './App.css';

function App() {
  return (
    <div className="app">
      <div className="screen">
        <div className="card logo-card">
          <div className="logo">POSKARATE</div>
        </div>

        <div className="card user-card">
          <div className="avatar">👤</div>
          <div className="name">TEST KASUTAJA</div>
        </div>

        <div className="card menu-card">
          <button>Vaata valikaineid</button>
          <button>Hinda valikaineid</button>
          <button>Seadista valimisrobot</button>
          <button>Loovuta koht</button>
        </div>

        <div className="bottom-nav">
          <span>PROFIIL</span>
          <span className="active">AVALEHT</span>
          <span>MENÜÜ</span>
        </div>
      </div>
    </div>
  );
}

export default App;