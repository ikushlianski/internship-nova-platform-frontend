import "./App.css";
import { RoutesEnum } from "./utils/RoutesEnum";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./features/SignIn/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.LOGIN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
