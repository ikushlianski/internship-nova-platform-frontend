import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivacyPolicy } from "./app/PrivacyPolicy/PrivacyPolicy";
import { RoutesEnum } from "./utils/RoutesEnum";
import { Main } from "./app/Main/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path={RoutesEnum.Main} element={<Main />} />
        <Route index element={<Navigate to={RoutesEnum.PrivacyPolicy} />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
