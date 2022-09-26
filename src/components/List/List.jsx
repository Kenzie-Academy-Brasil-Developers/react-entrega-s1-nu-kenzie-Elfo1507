import Card from "../Card/Card";
import "./list.css";

function List({ listTransactions, setListTransactions }) {
  return (
    <div>
      <h3>Resumo financeiro</h3>
      <ul>
        {listTransactions.map((listItem, index) => {
          return (
            <Card
              setList={setListTransactions}
              list={listTransactions}
              key={index}
              chave={index}
              valor={listItem.Valor}
              desc={listItem.Descricao}
              tipo={listItem.Tipo}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
