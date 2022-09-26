import cinza from "../../assets/imgs/cinza.svg";
import verde from "../../assets/imgs/verde.svg";
import lixo from "../../assets/imgs/trashlixin.svg";
import "./card.css";

function Card({ chave, valor, desc, tipo, list, setList }) {
  function tirar(chave) {
    console.log(chave);
    setList(list.filter((el, elIndex) => chave !== elIndex));
  }

  return tipo === "saida" ? (
    <li className="card">
      <div>
        <img src={cinza} alt="barrinha cinza" />
      </div>
      <div className="textCard">
        <div>
          <h3>{desc}</h3>
          <span className="tipo">{tipo}</span>
        </div>
        <div className="tipoEBtn">
          <p className="valor">{`R$${valor}`}</p>
          <button
            key={chave}
            onClick={() => {
              tirar(chave);
            }}
          >
            <img src={lixo} alt="lixo" />
          </button>
        </div>
      </div>
    </li>
  ) : (
    <li className="card">
      <div>
        <img src={verde} alt="barrinha cinza" />
      </div>
      <div className="textCard">
        <div>
          <h3>{desc}</h3>
          <span className="tipo">{tipo}</span>
        </div>
        <div className="tipoEBtn">
          <p className="valor">{`R$${valor}`}</p>
          <button
            key={chave}
            onClick={() => {
              tirar(chave);
            }}
          >
            <img src={lixo} alt="lixo" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Card;
