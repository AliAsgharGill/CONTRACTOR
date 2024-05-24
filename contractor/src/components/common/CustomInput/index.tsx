import React, { useState } from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import classNames from "classnames";

interface CustomProps {
  variant?: "default" | "filled" | "outlined";
  size?: "small" | "medium" | "large";
  options?: string[]; // Add options for the dropdown
}

type CustomInputProps = CustomProps & AntInputProps;

const variantClasses = {
  default: "border border-gray-200",
  filled: "bg-gray-100 border border-gray-200",
  outlined: "border border-gray-400",
};

const sizeClasses = {
  small: "p-1 text-sm",
  medium: "p-2 text-base",
  large: "p-3 text-lg",
};

const CustomInput: React.FC<CustomInputProps> = ({
  variant = "default",
  size = "medium",
  className,
  type,
  options,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const variantClass = variantClasses[variant!];
  const sizeClass = sizeClasses[size!];

  const classes = classNames(variantClass, sizeClass, className);

  const handleToggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      {type === "dropdown" ? (
        <select className={classes} {...props}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <AntInput
          type={type === "password" && visible ? "text" : type}
          className={classes}
          {...props}
        />
      )}
      {type === "password" && (
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleToggleVisibility}
        >
          {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
