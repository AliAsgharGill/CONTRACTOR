import React, { ReactNode } from "react";
import styled from "styled-components";

interface DivProps {
  height?: string;
  width?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  color?: string;
  boxShadow?: string;
  overflow?: string;
  children?: ReactNode;
}

const StyledDiv = styled.div<DivProps>`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  border-color: ${(props) => props.borderColor || "transparent"};
  border-width: ${(props) => props.borderWidth || "0"};
  border-style: ${(props) => props.borderStyle || "none"};
  color: ${(props) => props.color || "inherit"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  overflow: ${(props) => props.overflow || "visible"};
`;

const Div: React.FC<DivProps> = ({
  height,
  width,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  padding,
  margin,
  backgroundColor,
  border,
  borderRadius,
  borderColor,
  borderWidth,
  borderStyle,
  color,
  boxShadow,
  overflow,
  children,
}) => {
  return (
    <StyledDiv
      height={height}
      width={width}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      color={color}
      boxShadow={boxShadow}
      overflow={overflow}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
