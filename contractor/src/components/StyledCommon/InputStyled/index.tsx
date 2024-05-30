import styled from "styled-components";
import { Input as AntInput } from "antd";
import { InputProps as AntInputProps } from "antd/lib/input";

interface CustomInputProps extends AntInputProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  radius?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  height?: string;
  width?: string;
  margin?: string;
  transitionDuration?: string;
}

const StyledInput = styled(AntInput)<CustomInputProps>`
  background-color: ${({ bgColor }) => bgColor || "initial"};
  color: ${({ textColor }) => textColor || "initial"};
  border-color: ${({ borderColor }) => borderColor || "initial"};
  padding: ${({ padding }) => padding || "initial"};
  font-size: ${({ fontSize }) => fontSize || "initial"};
  font-weight: ${({ fontWeight }) => fontWeight || "initial"};
  border-radius: ${({ radius }) => radius || "initial"};
  height: ${({ height }) => height || "initial"};
  width: ${({ width }) => width || "initial"};
  margin: ${({ margin }) => margin || "initial"};
  transition: all ${({ transitionDuration }) => transitionDuration || "0.3s"}
    ease;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "initial"};
    color: ${({ hoverTextColor }) => hoverTextColor || "initial"};
    border-color: ${({ hoverBorderColor }) => hoverBorderColor || "initial"};
    outline: none;
  }
`;

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default CustomInput;
