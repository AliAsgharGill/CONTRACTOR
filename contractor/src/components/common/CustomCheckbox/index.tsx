import React, { useState } from "react";
import { Checkbox, Alert } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

type CustomCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
  name?: string;
  errorMessage?: string;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
  name,
  errorMessage,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <>
      <Checkbox checked={isChecked} onChange={handleChange} className={className} name={name}>
        {label}
      </Checkbox>
      {errorMessage && <Alert type="error" message={errorMessage} />}
    </>
  );
};

export default CustomCheckbox;
