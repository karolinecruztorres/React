interface Props {
  addOnClick: () => void;
  onChange: (type: React.ChangeEvent<HTMLInputElement>) => void;
  removeOnClick: () => void;
  clearInput: string;
}

const Input = ({ addOnClick, onChange, removeOnClick, clearInput }: Props) => {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control border-danger"
        placeholder="Enter a task"
        aria-describedby="button-addon2"
        onChange={onChange}
        value={clearInput}
      />
      <button
        className="btn btn-outline-danger"
        type="button"
        id="add"
        onClick={addOnClick}
      >
        Add
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
