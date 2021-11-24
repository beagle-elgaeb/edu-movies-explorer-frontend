import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { ContainerPaddings } from "../components.style";

export const HeaderContainer = styled.div<{ authorized: boolean }>`
  ${ContainerPaddings}
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ authorized }) => (authorized ? "transparent" : "#073042")};
  padding-top: 0;
  padding-bottom: 0;
`;

export const Logo = styled(Link)`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  background: #3ddc84;
  border-radius: 99em;
`;

export const LogoIcon = styled.div`
  height: 19px;
  width: 20px;
  background: #ffffff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 11px 0 0 0;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
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
`;

export const LinkLogin = styled(LinkPattern)`
  height: 32px;
  width: 76px;
  background: #3ddc84;
  border-radius: 3px;
  color: #000000;
  margin-left: 30px;

  @media (max-width: 500px) {
    height: 26px;
    width: 54px;
    font-size: 10px;
    margin-left: 14px;
  }
`;

export const LinkMovies = styled(LinkPattern)`
  font-size: 13px;
  line-height: 18px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LinkSavedMovies = styled(LinkPattern)`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  margin-left: 16px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LinkAccount = styled(LinkPattern)`
  height: 32px;
  width: 100px;
  background: #313131;
  border-radius: 99em;
  font-size: 14px;
  line-height: 16px;

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
    cursor: pointer;
  }

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
    background: repeating-linear-gradient(
      0deg,
      #ffffff,
      #ffffff 3px,
      #ffffff00 3px,
      #ffffff00 10px,
      #ffffff 10px
    );
    margin: auto;
  }

  @media (max-width: 500px) {
    height: 22px;
    width: 20px;
    background: repeating-linear-gradient(
      0deg,
      #ffffff,
      #ffffff 2px,
      #ffffff00 2px,
      #ffffff00 10px,
      #ffffff 10px
    );
  }
`;
