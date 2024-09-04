import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "./app/PrivacyPolicy/PrivacyPolicy";
import { RoutesEnum } from "./utils/RoutesEnum";
import { Main } from "./app/Main/Main";
import { Cards } from "../../../packages/ui/src/Cards";
import { url } from "./mocks/handlers";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  async function getCards() {
    const response = await fetch(`${url}/cards`);
    console.log(response);
    setCards(await response.json());
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main />} />
        <Route index element={<Navigate to={RoutesEnum.PrivacyPolicy} />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
        <Route path={RoutesEnum.Cards} element={<Cards cards={cards} />} />
      </Routes>
    </div>
  );
}

export default App;
