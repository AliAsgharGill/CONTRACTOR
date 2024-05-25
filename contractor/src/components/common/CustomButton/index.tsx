import React from "react";
import { Button } from "antd";

type CustomButtonProps = {
  text: string;
  onClick: () => void;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  className?: string;
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset"; 
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  type = "default",
  className,
  disabled = false,
  htmlType,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      htmlType={htmlType || "button"}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
