import { Navigate, Route, Routes } from "react-router-dom";
import { PrivacyPolicy } from "./app/PrivacyPolicy/PrivacyPolicy";
import { RoutesEnum } from "./utils/RoutesEnum";
import { Main } from "./app/Main/Main";
import "./App.css";
import { CardsPage } from "./app/CardsPage/CardsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main />} />
        <Route index element={<Navigate to={RoutesEnum.PrivacyPolicy} />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
        <Route path={RoutesEnum.Cards} element={<CardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
