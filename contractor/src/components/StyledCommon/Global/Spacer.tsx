import React from "react";
import styled from "styled-components";

interface SpacerProps {
  height?: string;
  width?: string;
}

const StyledSpacer = styled.div<SpacerProps>`
  height: ${({ height }) => height || "1rem"};
  width: ${({ width }) => width || "1rem"};
`;

const Spacer: React.FC<SpacerProps> = ({ height, width, ...props }) => {
  return <StyledSpacer height={height} width={width} {...props} />;
};

export default Spacer;
