import * as React from "react";
import { Container, Link, NavigationMenu, NavItem } from "./Navigation.css";
import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <Container>
      <NavigationMenu>
        <NavItem>
          <NavLink title={"Grid"} to="/grid"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink title={"Flexbox"} to="/flexbox"></NavLink>
        </NavItem>
      </NavigationMenu>
    </Container>
  );
};
export default Navigation;
