import React from "react";
import classNames from "classnames";

interface CustomLabelProps {
  text: string;
  className?: string;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ text, className }) => {
  return (
    <label className={`text-gray-700 font-medium ${className}`}>{text}</label>
  );
};

export default CustomLabel;
