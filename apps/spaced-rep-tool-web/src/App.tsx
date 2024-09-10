import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivacyPolicy } from "./app/PrivacyPolicy/PrivacyPolicy";
import { RoutesEnum } from "./utils/RoutesEnum";
import { Main } from "./app/Main/Main";
import Toast from "./components/Toast/Toast";
import { useEffect, useState } from "react";
import { setToastFunction } from "./utils/ShowToast";
import NotFound from "./not-found";
import SignIn from './features/SignIn/SignIn';

function App() {
  const [toast, setToast] = useState<{ message: string; type: string } | null>(
    null,
  );

  useEffect(() => {
    setToastFunction(setToast);
  }, []);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type as "success" | "error" | "warning" | "info"}
          onClose={() => setToast(null)}
        />
      )}
      <div>
        <Routes>
          <Route index path={RoutesEnum.Main} element={<Main />} />

          <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
          <Route path={RoutesEnum.Login} element={<SignIn />} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </>
  );
}

export default App;
