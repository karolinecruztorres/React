interface Props {
  //children: string;
  items: string[];
}

const List = ({ items }: Props) => {
  return (
    <>
      {items.map((items, index) => (
        <li key={index} className="list-group-item border-danger">
          <input
            className="form-check-input me-2 border-danger"
            type="checkbox"
            value=""
            id="firstCheckboxStretched"
          />
          <label
            className="form-check-label stretched-link"
            htmlFor="firstCheckboxStretched"
          >
            {items}
          </label>
        </li>
      ))}
    </>
  );
};

export default List;

{
  /* <li className="list-group-item border-0 border-bottom border-danger">
  <input className="form-check-input me-2 border-muted" type="checkbox" value="" id="firstCheckboxStretched" disabled />
  <label className="form-check-label stretched-link text-muted" htmlFor="firstCheckboxStretched">{children}</label>
</li> */
}
