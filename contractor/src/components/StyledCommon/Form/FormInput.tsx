import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  /* Customizable styles */
`;

const Input: React.FC<InputProps> = ({ type, ...rest }) => {
  return <StyledInput type={type} {...rest} />;
};

export default Input;
