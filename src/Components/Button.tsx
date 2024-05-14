interface Props {
  children: string;
  disabled?: boolean;
  onClickedButton?: (newChild: string) => void;
}

const Button = ({ children, onClickedButton, disabled = false }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary col-3"
      disabled={disabled}
      onClick={() => onClickedButton?.(children)}
    >
      {children}
    </button>
  );
};

export default Button;
