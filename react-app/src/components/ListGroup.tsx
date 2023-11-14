import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Paris", "London", "Berlin", "Hong Kong", "Tokyo"];
  //items = [];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick} 
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;