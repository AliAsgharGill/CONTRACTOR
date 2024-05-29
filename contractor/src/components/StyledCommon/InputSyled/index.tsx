import React from "react";
import { Input as AntdInput, Form as AntdForm } from "antd";
import styled from "styled-components";

interface CustomInputProps {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  width?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem = styled(AntdForm.Item)`
  /* Add any custom styles here */
`;

const Input = styled(AntdInput)<{ error?: boolean }>`
  &.custom-input {
    border-color: ${(props) => (props.error ? "red" : "")};
    &:hover {
      border-color: ${(props) => (props.error ? "darkred" : "")};
    }
  }
`;

const ErrorMessage = styled.p`
  color: green;
  margin-top: 10px;
`;

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
  width,
  onChange,
}) => {
  return (
    <FormItem
      label={label}
      help={helperText}
      validateStatus={errorMessage ? "error" : ""}
      extra={errorMessage}
      className={className}
    >
      <Input
        width={width}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="custom-input"
        error={!!errorMessage}
        autoFocus
        // autoCapitalize="off"
        // autoCorrect="on"
        autoComplete="on"
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormItem>
  );
};

export default CustomInput;
