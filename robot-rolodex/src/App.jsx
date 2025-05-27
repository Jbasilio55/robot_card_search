import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [robo, setRobo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobo(data));
  }, []);

  return (
    <>
      <CardList robo={robo} />
    </>
  );
};

export default App;
