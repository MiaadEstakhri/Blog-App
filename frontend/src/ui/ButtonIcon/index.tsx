import React from "react";
import { BtnTypeProps, ButtonIconProps } from "./buttonIcon.type";

const btnType: BtnTypeProps = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

export function ButtonIcon({
  className,
  variant,
  children,
  onClick,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      className={`${btnType[variant]} ${className} flex items-center justify-center gap-x-1 rounded-md p-1 
        [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-inherit text-xs lg:text-sm
         transition-all duration-300 ease-out `}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
