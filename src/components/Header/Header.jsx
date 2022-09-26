import "./header.css";

function Header({ setLanding, landing }) {
  return (
    <header>
      <div>
        <h1 className="nu">Nu</h1>
        <h1 className="kenzie">Kenzie</h1>
      </div>
      <button type="button" onClick={() => setLanding(!landing)}>
        Inicio
      </button>
    </header>
  );
}

export default Header;
