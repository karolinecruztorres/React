import { useState } from "react";

interface Props {
  items: string[];
}

const List = ({ items }: Props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
    console.log(isDisabled);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index.toString()}
            className={
              isDisabled
                ? "list-group-item border-0 border-bottom border-danger"
                : "list-group-item border-danger"
            }
          >
            <input
              className={
                isDisabled
                  ? "form-check-input me-2 border-muted disabled"
                  : "form-check-input me-2 border-danger"
              }
              type="checkbox"
              value=""
              id={`checkbox-${index.toString()}`}
              onClick={handleClick}
            />
            <label
              className={
                isDisabled
                  ? "form-check-label stretched-link text-muted"
                  : "form-check-label stretched-link"
              }
              htmlFor={`checkbox-${index.toString()}`}
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
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

{
  /* <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul> */
}
