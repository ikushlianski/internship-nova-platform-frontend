import { useEffect, useState } from "react";
import { checkJWT } from "./shared/utils/checkJWT";
import "./App.css";

function App() {
  const [isUserAcquired, setIsUserAcquired] = useState(false);

  useEffect(() => {
    setIsUserAcquired(checkJWT(document.cookie));
  }, []);

  return <>{isUserAcquired ? <h2>Got /me</h2> : <h2>User unauthorized</h2>}</>;
}

export default App;
