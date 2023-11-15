interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onclick: () => void;
}

const Button = ({ children, color = "danger", onclick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
