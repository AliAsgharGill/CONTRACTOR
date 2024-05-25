import React from "react";
import { Typography } from "antd";

type CustomLabelProps = {
  text: string;
  className?: string;
};

const CustomLabel: React.FC<CustomLabelProps> = ({ text, className }) => {
  return <Typography.Text className={className}>{text}</Typography.Text>;
};

export default CustomLabel;
