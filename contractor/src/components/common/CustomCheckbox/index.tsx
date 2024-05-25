import React from "react";
import { Checkbox } from "antd";

type CustomCheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  name?: string;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
  name,
}) => {
  return (
    <Checkbox checked={checked} onChange={onChange} className={className} name={name}>
      {label}
    </Checkbox>
  );
};

export default CustomCheckbox;
