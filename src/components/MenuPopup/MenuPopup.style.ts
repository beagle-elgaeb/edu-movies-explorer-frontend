import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { HoverButton } from "../Blocks.style";

export const MenuPopupOverlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 800px) {
    height: 100vh;
    width: 68%;
    position: fixed;
    top: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #202020;
    z-index: 10;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Close = styled.button`
  @media (max-width: 800px) {
    height: 19px;
    width: 19px;
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
        rgba(255, 255, 255, 0) 12px,
        rgba(255, 255, 255, 1) 12px,
        rgba(255, 255, 255, 1) 15px,
        rgba(255, 255, 255, 0) 15px,
        rgba(255, 255, 255, 0) 27px
      ),
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0) 12px,
        rgba(255, 255, 255, 1) 12px,
        rgba(255, 255, 255, 1) 15px,
        rgba(255, 255, 255, 0) 15px,
        rgba(255, 255, 255, 0) 27px
      );
  }

  @media (max-width: 500px) {
    top: 20px;
    right: 20px;
  }
`;

export const NavigationBlock = styled.div`
  @media (max-width: 800px) {
    margin: 159px 0 0;
  }

  @media (max-width: 500px) {
    margin: 144px 0 0;
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
