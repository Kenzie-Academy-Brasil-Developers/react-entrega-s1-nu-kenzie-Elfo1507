import { useState } from "react";
import "./form.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("entrada");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setListTransactions([
          ...listTransactions,
          {
            Valor: valor,
            Descricao: descricao,
            Tipo: tipo,
          },
        ]);
      }}
    >
      <input
        className="desc"
        onChange={(event) => setDescricao(event.target.value)}
        type="text"
        name="descrição"
        id="descricao"
        placeholder="Insira a descrição"
      />
      <div className="tipoValor">
        <div className="valor">
          <label htmlFor="valor">Valor</label>
          <input
            onChange={(event) => setValor(event.target.value)}
            type="number"
            name="valor"
            id="valor"
            placeholder="1"
          />
        </div>
        <select
          className="tipo"
          name="tipo"
          id="tipo"
          onChange={(event) => setTipo(event.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </div>
      <button className="enviar" type="submit">
        Enviar
      </button>
    </form>
  );
};
