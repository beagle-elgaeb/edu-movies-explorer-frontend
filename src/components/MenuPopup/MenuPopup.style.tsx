import styled from "@emotion/styled/macro";
import { Link, NavLink } from "react-router-dom";
import { HoverButton, HoverLink } from "../Blocks.style";

export const MenuPopupOverlay = styled.div<{ onened: boolean }>`
  display: none;

  @media (max-width: 800px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: end;
    position: fixed;
    top: 0;
    overflow: hidden;
    visibility: ${({ onened }) => (onened ? "visible" : "hidden")};
    opacity: ${({ onened }) => (onened ? "1" : "0")};
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in;
    z-index: ${({ onened }) => (onened ? "9" : "-1")};
  }
`;

export const MenuPopupContainer = styled.div<{ onened: boolean }>`
  display: none;

  @media (max-width: 800px) {
    height: 100vh;
    width: 68%;
    position: fixed;
    top: 0;
    right: ${({ onened }) => (onened ? "0" : "-500px")};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #202020;
    transition: all 0.3s ease-in;
    z-index: 10;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Close = styled.button`
  @media (max-width: 800px) {
    height: 17px;
    width: 17px;
    position: absolute;
    top: 30px;
    right: 30px;
    background: transparent;
    border: none;
    outline: none;

    ${HoverButton}

    background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) 10px,
        rgba(255, 255, 255, 1) 10px,
        rgba(255, 255, 255, 1) 14px,
        rgba(255, 255, 255, 0) 13px,
        rgba(255, 255, 255, 0) 23px
      ),
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) 10px,
        rgba(255, 255, 255, 1) 10px,
        rgba(255, 255, 255, 1) 14px,
        rgba(255, 255, 255, 0) 13px,
        rgba(255, 255, 255, 0) 23px
      );
  }

  @media (max-width: 500px) {
    top: 20px;
    right: 20px;
  }
`;

export const NavigationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: 800px) {
    margin: 159px 0 0;
  }

  @media (max-width: 500px) {
    margin: 145px 0 0;
  }
`;

export const Item = styled.li`
  list-style: none;

  @media (max-width: 800px) {
    margin: 0 0 28px;
  }

  @media (max-width: 500px) {
    margin: 0 0 24px;
  }
`;

export const LinkMenu = styled(NavLink)`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #ffffff;

  ${HoverLink}

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  &.active {
    font-weight: 500;

    @media (max-width: 800px) {
      text-decoration: underline;
    }
  }
`;

export const LinkAccount = styled(Link)`
  ${HoverButton}

  @media (max-width: 800px) {
    height: 32px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #313131;
    border-radius: 99em;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #ffffff;
    margin: 0 0 90px;
  }

  @media (max-width: 500px) {
    margin: 0 0 46px;
  }
`;
