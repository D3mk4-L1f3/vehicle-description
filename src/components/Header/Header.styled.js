import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: relative;
  height: 88px;
  margin-bottom: 20px;
  background: var(--header-base);
`;

export const Nav = styled.nav`
  max-width: 100%;
  border-radius: 10px;
  top: 15px;
  left: 20px;
  right: 20px;
  z-index: 1;
  position: fixed;
  background: var(--nav-gradient);
  opacity: 0.95;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  column-gap: 30px;
`;

export const LinkStyled = styled(NavLink)`
  padding: 15px 0;
  color: var(--orange);
  font-weight: 600;
  font-size: clamp(14px, 2vw, 22px);

  &:hover {
    color: var(--yellow);
  }

  &.active {
    color: var(--red);
  }
`;
