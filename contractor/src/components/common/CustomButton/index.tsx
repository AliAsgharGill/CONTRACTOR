import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface CustomButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

const VARIANTS: Record<string, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-700",
  secondary: "flex items-center justify-center text-black",
  success: "bg-green-500 text-white hover:bg-green-700",
  danger: "bg-red-500 text-white hover:bg-red-700",
  outlined: "border border-[#0A5F59] hover:bg-[#0A5F59] hover:text-white",
};

const SIZES: Record<string, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const CustomButton: FC<CustomButtonProps> = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...props
}) => {
  const variantClasses = VARIANTS[variant];
  const sizeClasses = SIZES[size];

  return (
    <button
      className={classNames(
        "rounded focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
