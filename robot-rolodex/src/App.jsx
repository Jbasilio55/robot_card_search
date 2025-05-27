import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ name, email, id }) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

const App = () => {
  const [robo, setRobo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobo(data));
  }, []);

  return (
    <>
      {robo.map(({ name, email, id }, idx) => {
        return (
          <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>
        );
      })}
    </>
  );
};

export default App;
