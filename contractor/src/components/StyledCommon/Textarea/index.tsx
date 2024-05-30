import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";

const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  &::placeholder {
    color: #bfbfbf;
  }
`;

const CustomTextArea: React.FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};

export default CustomTextArea;
