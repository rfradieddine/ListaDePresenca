import "./styles.css";

import { Card } from "../../Components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Rafael" time="10:10:21" />
      <Card name="Igor" time="15:12:21" />
    </div>
  );
}
