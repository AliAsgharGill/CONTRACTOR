import React from "react";
import { Button } from "antd";

type CustomButtonProps = {
  text: string;
  onClick: () => void;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  type = "default",
  className,
}) => {
  return (
    <Button type={type} onClick={onClick} className={className}>
      {text}
    </Button>
  );
};

export default CustomButton;
