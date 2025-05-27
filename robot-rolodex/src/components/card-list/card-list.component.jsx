import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ robo }) => {
  return (
    <div className="card-list-container">
      {robo.map(({ name, email, id }, idx) => {
        return (
          <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>
        );
      })}
    </div>
  );
};

export default CardList;
