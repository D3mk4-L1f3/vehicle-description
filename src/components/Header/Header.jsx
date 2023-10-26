import React from "react";
import { useLocation } from "react-router-dom";

import { HeaderContainer, Nav, NavList, LinkStyled } from "./Header.styled";

export const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <li>
            <LinkStyled to="/" className={isActive("/") ? "active" : ""}>
              Home
            </LinkStyled>
          </li>
          {isHomePage && null}
          <li>
            <LinkStyled
              to="/catalog"
              className={isActive("/catalog") ? "active" : ""}
            >
              Catalog
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              to="/favorites"
              className={isActive("/favorites") ? "active" : ""}
            >
              Favorites
            </LinkStyled>
          </li>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};
