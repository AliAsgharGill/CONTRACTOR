import React from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled.select`
  /* Customizable styles */
`;

const Select: React.FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <StyledSelect {...rest}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
