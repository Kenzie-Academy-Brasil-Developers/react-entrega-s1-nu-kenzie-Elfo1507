import "./totalMoney.css";

function TotalMoney({ listTransactions }) {
  const valorTotal = listTransactions.reduce((pv, cv) => {
    return cv.Tipo === "entrada"
      ? pv + parseFloat(cv.Valor)
      : pv - parseFloat(cv.Valor);
  }, 0);
  console.log(valorTotal);
  return (
    <section>
      <div>
        <h3>Valor total:</h3>
        <span className="valorT">{`R$${valorTotal}`}</span>
      </div>
      <h6>Valor referente ao saldo</h6>
    </section>
  );
}

export default TotalMoney;
