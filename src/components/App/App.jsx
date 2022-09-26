import { useState } from "react";
import { Form } from "../Form/Form";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import "./App.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [landing, setLanding] = useState(true);

  return landing ? (
    <>
      <Landing setLanding={setLanding} landing2={landing} />
    </>
  ) : (
    <div>
      <Header setLanding={setLanding} landing={landing} />
      <div className="container">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </div>
        <List
          className="list"
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  );
}

export default App;
