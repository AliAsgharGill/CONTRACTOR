import React from "react";
import { Typography } from "antd";

type CustomLabelProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const CustomLabel: React.FC<CustomLabelProps> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <Typography.Text className={className} onClick={onClick}>
      {text}
    </Typography.Text>
  );
};

export default CustomLabel;
