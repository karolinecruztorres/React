import { useState } from "react";

const List = () => {
  const [listItems, setListItems] = useState([
    { name: "a", checked: false, id: "1" },
    { name: "b", checked: false, id: "2" },
    { name: "c", checked: false, id: "3" },
  ]);

  const check = (parameter: string) => {
    const changeCheck = listItems.map((item) =>
      item.id === parameter ? { ...item, checked: true } : { ...item }
    );
    setListItems(changeCheck);
  };

  return (
    <>
      <ul className="list-group">
        {listItems.map((item, index) =>
          item.checked ? (
            <li
              key={index}
              className="list-group-item border-0 borde
              r-bottom border-danger"
            >
              <input
                className="form-check-input me-2 border-muted"
                type="checkbox"
                value=""
                id={index.toString()}
                disabled
              />
              <label
                className="form-check-label stretched-link text-muted"
                htmlFor={index.toString()}
              >
                {item.name}
              </label>
            </li>
          ) : (
            <li key={index} className="list-group-item border-danger">
              <input
                className="form-check-input me-1 border-danger"
                type="checkbox"
                value=""
                id={index.toString()}
                onClick={() => {
                  check(item.id);
                }}
              />
              <label
                className="form-check-label stretched-link"
                htmlFor={index.toString()}
              >
                {item.name}
              </label>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default List;
