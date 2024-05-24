import React from "react";
import { Form, Button, Input, Checkbox, Select } from "antd";
import classNames from "classnames";

interface CustomInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'password' | 'select';
  options?: { label: string, value: string }[];
  className?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder, type, options, className }) => {
  const inputClasses = classNames(className);

  if (type === 'password') {
    return (
      <Form.Item label={label}>
        <Input.Password placeholder={placeholder} className={inputClasses} />
      </Form.Item>
    );
  } else if (type === 'select') {
    return (
      <Form.Item label={label}>
        <Select placeholder={placeholder} className={inputClasses}>
          {options && options.map((opt, index) => (
            <Select.Option key={index} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    );
  } else {
    return (
      <Form.Item label={label}>
        <Input placeholder={placeholder} className={inputClasses} />
      </Form.Item>
    );
  }
};

interface CustomCheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, label, checked, onChange, className }) => {
  const checkboxClasses = classNames('text-4lg', className);

  return (
    <Form.Item>
      <Checkbox id={id} className={checkboxClasses} checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} />
      <label htmlFor={id} className="ml-2 text-[13px]">
        {label}
      </label>
    </Form.Item>
  );
};

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ type, onClick, children, className }) => {
  const buttonClasses = classNames(
    'w-1/2 lg:w-60 mt-8 md:w-1/3 lg:mt-10 bg-[#F6D218] font-bold text-black hover:bg-[#d8c045]',
    className
  );

  return (
    <Button
      type={type}
      size="large"
      className={buttonClasses} 
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

interface CustomLabelProps {
  text: string;
  htmlFor: string;
  className?: string;
}

export const CustomLabel: React.FC<CustomLabelProps> = ({ text, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {text}
  </label>
);
