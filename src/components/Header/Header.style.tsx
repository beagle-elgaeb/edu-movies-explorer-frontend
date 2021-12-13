import styled from "@emotion/styled/macro";
import burger from "../../images/icon-burger.svg";
import { Link, NavLink } from "react-router-dom";
import { BlockPattern, HoverButton, HoverLink } from "../Blocks.style";

export const HeaderContainer = styled.header<{ authorized: boolean }>`
  ${BlockPattern}
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ authorized }) => (authorized ? "transparent" : "#073042")};

  @media (max-width: 800px) {
    padding-left: 4%;
    padding-right: 4%;
  }

  @media (max-width: 500px) {
    padding: 0 4.5%;
  }
`;

export const LinksBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBlock = styled.div`
  display: flex;
  list-style-type: none;
  margin: 0 0 0 65px;
  padding: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Item = styled.li`
  margin: 0 16px 0 0;

  :last-child {
    margin: 0;
  }
`;

export const LinkMenu = styled(NavLink)`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #ffffff;

  ${HoverLink}

  &.active {
    font-weight: 500;
  }
`;

export const LinkPattern = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;

export const LinkSignin = styled(LinkPattern)`
  @media (max-width: 500px) {
    height: 26px;
    font-size: 10px;
  }

  ${HoverLink}
`;

export const LinkLogin = styled(LinkPattern)`
  height: 32px;
  width: 76px;
  background: #3ddc84;
  border-radius: 3px;
  color: #000000;
  margin-left: 30px;

  ${HoverLink}

  @media (max-width: 500px) {
    height: 26px;
    width: 54px;
    font-size: 10px;
    margin-left: 14px;
  }
`;

export const LinkAccount = styled(LinkPattern)`
  height: 32px;
  width: 100px;
  background: #313131;
  border-radius: 99em;
  font-size: 14px;
  line-height: 16px;

  ${HoverButton}

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Menu = styled.button`
  display: none;

  @media (max-width: 800px) {
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
  }

  ${HoverButton}

  @media (max-width: 500px) {
    height: 43px;
    width: 40px;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 800px) {
    height: 23px;
    width: 28px;
    display: block;
    background: url(${burger});
    margin: auto;
  }

  @media (max-width: 500px) {
    height: 24px;
    width: 22px;
  }
`;
