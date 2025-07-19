import { ButtonProps, Variant } from "./button.type";

const btnType: Record<Variant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

export function Button({
  onClick,
  variant = "primary",
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn ${btnType[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
