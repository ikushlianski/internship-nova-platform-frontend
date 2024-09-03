/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import dataProvider from "../mocks/dataProvider";
import Toast from "../components/Toast";
import { useState } from "react";

const App = () => {
  const [toast, setToast] = useState<{ message: string; type: string } | null>(
    null,
  );

  const showToast = (
    message: string,
    type: "success" | "error" | "warning" | "info",
  ) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // const handleError = (error: string) => {
  //   showToast(error, "error");
  // };
  const handleFetchData = async () => {
    showToast("Загрузка данных...", "info");
    try {
      const data = 1;
      // const data = await fetch('').then(res => res.json());
      setTimeout(() => showToast("Данные успешно загружены!", "success"), 3000);
      return data;
    } catch (error: any) {
      showToast(`Ошибка: ${error.message}`, "error");
    }
  };

  // useEffect(() => {
  //   showToast("This is a test message!", "warning");
  // }, []);
  return (
    <>
      <button
        className="fixed bottom-20 right-5 p-3 bg-violet-800 text-white z-20"
        onClick={handleFetchData}
      >
        Загрузить данные
      </button>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type as "success" | "error" | "warning" | "info"}
          onClose={() => setToast(null)}
        />
      )}

      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="students"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="teachers"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="paths"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="classes"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="admins"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="managers"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="spectators"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="noRoles"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
        <Resource
          name="sales"
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      </Admin>
    </>
  );
};

export default App;
