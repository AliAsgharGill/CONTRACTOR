import React from "react";
import { Input, Form } from "antd";
import classNames from "classnames";

interface CustomInputProps {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  name,
  id,
  label,
  helperText,
  placeholder,
  errorMessage,
  className,
  value,
  onChange,
}) => {
  return (
    <Form.Item
      label={label}
      help={helperText}
      validateStatus={errorMessage ? "error" : ""}
      extra={errorMessage}
      className={className}
    >
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames("custom-input", className)}
      />
      <p className="text-green-500 mt-10" >{errorMessage}</p>
    </Form.Item>
  );
};

export default CustomInput;
