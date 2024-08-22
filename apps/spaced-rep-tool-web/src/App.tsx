import { useEffect } from "react";
import { url } from "./mocks/handlers";
import "./App.css";

function App() {
  async function getCards() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getCards().then((response) => {
      console.log(response);
    });
  }, []);

  return <></>;
}

export default App;
