interface Props {
  onChange: (type: React.ChangeEvent<HTMLInputElement>) => void;
  addOnClick: () => void;
  removeOnClick: () => void;
}

const Input = ({ onChange, addOnClick, removeOnClick }: Props) => {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control border-danger"
        placeholder="Enter a task"
        aria-describedby="button-addon2"
        onChange={onChange}
      />
      <button
        className="btn btn-outline-danger"
        type="button"
        id="add"
        onClick={addOnClick}
      >
        Add to List
      </button>
      <button
        className="btn btn-outline-danger"
        type="button"
        id="remove"
        onClick={removeOnClick}
      >
        Remove
      </button>
    </div>
  );
};

export default Input;
