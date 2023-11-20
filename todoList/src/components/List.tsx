interface ListProps {
  name: string;
  checked: boolean;
  id: number;
}

interface Props {
  items: ListProps[];
  onCheck: (type: number) => void;
}

const List = ({ items, onCheck }: Props) => {
  console.log(items);
  return (
    <ul className="list-group">
      {items.map((item) =>
        item.checked ? (
          <li
            key={item.id.toString()}
            className="list-group-item border-0 border-bottom border-danger"
          >
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id={item.id.toString()}
              disabled
            />
            <label
              className="form-check-label stretched-link"
              htmlFor={item.id.toString()}
            >
              {item.name}
            </label>
          </li>
        ) : (
          <li
            key={item.id.toString()}
            className="list-group-item border-danger"
          >
            <input
              className="form-check-input me-1 border-danger"
              type="checkbox"
              value=""
              id={item.id.toString()}
              onClick={() => {
                onCheck(item.id);
              }}
            />
            <label
              className="form-check-label stretched-link"
              htmlFor={item.id.toString()}
            >
              {item.name}
            </label>
          </li>
        )
      )}
    </ul>
  );
};

export default List;
