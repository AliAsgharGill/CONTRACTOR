import React, { ReactNode } from "react";
import styled from "styled-components";

interface TitleProps {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  fontStyle?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  width?: string;
  children: ReactNode;
}

const StyledTitle = styled.h1<TitleProps>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-style: ${(props) => props.fontStyle};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.padding};
`;

const Title: React.FC<TitleProps> = ({
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  color,
  lineHeight,
  letterSpacing,
  textAlign,
  margin,
  padding,
  children,
  width,
}) => {
  return (
    <StyledTitle
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      color={color}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      margin={margin}
      padding={padding}
      width={width}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
