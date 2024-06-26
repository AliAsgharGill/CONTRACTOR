import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f2f1ec; ;
        margin: 0;
        padding: 0;
    }`;

export const MainDivAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 25em;
  margin-top: 6em;
`;
