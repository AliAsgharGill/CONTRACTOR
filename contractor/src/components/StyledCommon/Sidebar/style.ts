import styled from "styled-components";

export const SidebarDiv = styled.div`
  background-color: #0a5f59;
  width: 25em;
  height: 100vh;
  padding: 2.5em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: "20rem";
`;

export const Spacer = styled.div`
  height: 5rem;
`;

export const SidebarContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: start;
  align-items: start;
`;

export const NavLinking = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 2rem;
  &:hover {
    color: aliceblue;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: #83cdc8;
  margin-bottom: 0.2rem;
  font-weight: 500;
  font-size: 1.2em;
  margin-left: 2rem;
  &:hover {
    color: aliceblue;
  }
`;
