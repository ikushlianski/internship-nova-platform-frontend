import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "./app/PrivacyPolicy/PrivacyPolicy";
import { RoutesEnum } from "./utils/RoutesEnum";
import { Main } from "./app/Main/Main";
import { Cards } from "./components/Cards/Cards.component";
import { url } from "./mocks/handlers";
import { getCards, colNames } from "./shared/utils/cards";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(url).then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main />} />
        <Route index element={<Navigate to={RoutesEnum.PrivacyPolicy} />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
        <Route
          path={RoutesEnum.Cards}
          element={<Cards cards={cards} colNames={colNames} />}
        />
      </Routes>
    </div>
  );
}

export default App;
