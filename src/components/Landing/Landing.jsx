import landing from "../../assets/imgs/landing.svg";
import "./landing.css";

function Landing({ setLanding, landing2 }) {
  return (
    <main>
      <div className="text">
        <div className="containerTitle">
          <h1 className="nu">Nu</h1>
          <h1 className="kenzie">Kenzie</h1>
        </div>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rapida e segura</span>
        <button
          className="btn"
          type="button"
          onClick={() => setLanding(!landing2)}
        >
          Iniciar
        </button>
      </div>
      <div>
        <img className="image" src={landing} alt="imagem" />
      </div>
    </main>
  );
}

export default Landing;
