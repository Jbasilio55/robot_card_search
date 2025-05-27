import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [robo, setRobo] = useState([]);
  const [filteredRobo, setFilteredRobo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setRobo(data);
        setFilteredRobo(data);
      });
  }, []);

  const onSearchHandler = (event) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredRobos = robo.filter((robo) =>
      robo.name.toLowerCase().includes(searchString)
    );
    setFilteredRobo(newFilteredRobos);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Robo Rolodex</h1>
      <SearchBox onChangeHandler={onSearchHandler} />
      <CardList robo={filteredRobo} />
    </div>
  );
};

export default App;
