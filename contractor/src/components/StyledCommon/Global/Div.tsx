import React, { ReactNode } from "react";
import styled from "styled-components";

interface DivProps {
  height?: string;
  width?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  wrap?: string;
  grid?: string;
  gridColumns?: string;
  gridRows?: string;
  gridAreas?: string;
  gridTemplate?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  gap?: string;
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  color?: string;
  boxShadow?: string;
  overflow?: string;
  children?: ReactNode;
  onClick?: (ev: MouseEvent) => void;
  className?: string;
  flex?: string;
}

const StyledDiv = styled.div<DivProps>`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
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
  grid: ${(props) => props.grid || "none"};
  grid-template-columns: ${(props) => props.gridColumns || "none"};
  grid-template-rows: ${(props) => props.gridRows || "none"};
  grid-template-areas: ${(props) => props.gridAreas || "none"};
  grid-template: ${(props) => props.gridTemplate || "none"};
  classname: ${(props) => props.className};
  flex: ${(props) => props.flex};
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
  onClick,
  wrap,
  gap,
  grid,
  gridColumns,
  gridRows,
  gridAreas,
  gridTemplate,
  className,
  flex,
}) => {
  return (
    <StyledDiv
      height={height}
      width={width}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      gap={gap}
      grid={grid}
      gridColumns={gridColumns}
      gridRows={gridRows}
      gridAreas={gridAreas}
      gridTemplate={gridTemplate}
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
      onClick={onClick}
      className={className}
      flex={flex}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
