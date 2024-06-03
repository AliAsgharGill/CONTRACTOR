import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.div`
  position: relative;
  font-size: 12px;
  color: #333;
  &:nth-child(1) {
    margin-right: auto;
  }
  &:nth-child(2) {
    margin: 0 auto;
  }
  &:nth-child(3) {
    margin-left: auto;
  }
`;

const BarContainer = styled.div`
  position: relative;
  flex-grow: 1;
  height: 10px;
  background: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
`;

const FilledBar = styled.div`
  height: 100%;
  background: #00695c;
  width: ${({ width }) => width};
`;

const ProgressBar = ({ percentage }) => {
  let width = "0%";
  if (percentage <= 50) {
    width = "50%";
  } else {
    width = "100%";
  }

  return (
    <ProgressBarContainer>
      <Label>EMPTY</Label>
      <BarContainer>
        <FilledBar width={width} />
      </BarContainer>
      <Label>HALF BOOKED</Label>
      <Label>FULLY BOOKED</Label>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
