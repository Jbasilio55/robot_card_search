import "./search-box.style.css";

const searchBox = ({ onChangeHandler }) => {
  return (
    <input
      className="search-box-container"
      typr="search"
      onChange={onChangeHandler}
    />
  );
};

export default searchBox;
