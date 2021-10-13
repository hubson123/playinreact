import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  max-height: 100px;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.spacing.xl}px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.navColor};
`;
export const NavigationMenu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  float: right;
`;
export const NavItem = styled.li`
  padding: ${({ theme }) => theme.spacing.md}px;
`;
export const Link = styled.a`
  cursor: pointer;
  text-decoration: none !important;
  font-family: "Merriweather", serif;
  color: black;
  :hover {
    color: ${({ theme }) => theme.color.hover};
  }
`;
