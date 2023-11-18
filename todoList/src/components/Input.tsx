interface Props {
  handleOnChange: (type: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick: () => void;
}

const Input = ({ handleOnChange, handleOnClick }: Props) => {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control border-danger"
        placeholder="Enter a task"
        aria-describedby="button-addon2"
        onChange={handleOnChange}
      />
      <button
        className="btn btn-outline-danger"
        type="button"
        id="button-addon2"
        onClick={handleOnClick}
      >
        Add to List
      </button>
    </div>
  );
};

export default Input;
