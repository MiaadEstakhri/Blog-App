export type BtnTypeProps = {
  primary?: string;
  secondary?: string;
  outline?: string;
  red?: string;
  danger?: string;
};

export type VariantProps =
  | "primary"
  | "secondary"
  | "outline"
  | "red"
  | "danger";

export type ButtonIconProps = {
  className: string;
  variant: VariantProps;
  children: React.ReactNode;
  onClick: () => void;
};
