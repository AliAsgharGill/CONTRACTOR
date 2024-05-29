import styled from "styled-components";

export const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 6em;
  padding: 1em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: "20rem";
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 3em;
  padding: 2.5em;
  margin-left: 28em;
`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 1em;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 1.5em;
  font-weight: 500;
  line-height: 19.36px;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const SmallTitle = styled.h5`
  font-family: "Inter", sans-serif;
  font-weight: 100;
  font-size: 1em;
  color: #8c8c8c;
`;

