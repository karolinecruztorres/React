interface Props {
  addToList: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, addToList }: Props) => {
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
        id="button-addon2"
        onClick={addToList}
      >
        Add to List
      </button>
    </div>
  );
};

export default Input;
