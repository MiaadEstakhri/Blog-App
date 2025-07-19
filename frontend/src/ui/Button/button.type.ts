import { ReactNode, MouseEventHandler } from "react";

export type Variant = "primary" | "secondary" | "outline" | "danger";

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}
