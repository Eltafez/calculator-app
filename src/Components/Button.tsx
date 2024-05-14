interface Props {
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary col-3"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
