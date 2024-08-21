import { useEffect, useState } from "react";
import { url } from "./mocks/handlers";
import "./App.css";

function App() {
  async function getCards() {
    let response = await fetch(url);
    let data = await response.json();
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
