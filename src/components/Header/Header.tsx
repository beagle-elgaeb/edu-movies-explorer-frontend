import styled from "@emotion/styled/macro";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  // Временно, для наблюдения обоих состояний хедера --------------------------
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  function onKeydown({ key }: { key: string }) {
    if (key === "Enter") {
      setAuthorized((authorized) => !authorized);
    }
  }
  // Временно, для наблюдения обоих состояний хедера --------------------------

  return (
    <>
      {authorized ? (
        <HeaderContainer authorized={authorized}>
          <Logo to="/">
            <LogoIcon></LogoIcon>
          </Logo>
          <Links>
            <LinkMovies to="/movies">Фильмы</LinkMovies>
            <LinkSavedMovies to="/saved-movies">
              Сохранённые фильмы
            </LinkSavedMovies>
            <Menu>
              <MenuIcon></MenuIcon>
            </Menu>
          </Links>
          <LinkAccount to="/profile">Аккаунт</LinkAccount>
        </HeaderContainer>
      ) : (
        <HeaderContainer authorized={authorized}>
          <Logo to="/">
            <LogoIcon></LogoIcon>
          </Logo>
          <Links>
            <LinkSignin to="/signup">Регистрация</LinkSignin>
            <LinkLogin to="/signin">Войти</LinkLogin>
          </Links>
        </HeaderContainer>
      )}
    </>
  );
}

export default Header;

const HeaderContainer = styled.div<{ authorized: boolean }>`
  height: 74px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: ${({ authorized }) => (authorized ? "transparent" : "#073042")};
  padding: 0 5.5%;

  @media (max-width: 700px) {
    padding: 0 4%;
  }

  @media (max-width: 400px) {
    padding: 0 3%;
  }
`;

const Logo = styled(Link)`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  background: #3ddc84;
  border-radius: 99em;
  margin: auto 0;
`;

const LogoIcon = styled.div`
  height: 19px;
  width: 20px;
  background: #ffffff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 11px 0 0 0;
`;

const Links = styled.div`
  display: flex;
`;

const LinkPattern = styled(Link)`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  margin: auto 0;
`;

const LinkSignin = styled(LinkPattern)`
  @media (max-width: 400px) {
    height: 26px;
    font-size: 10px;
  }
`;

const LinkLogin = styled(LinkPattern)`
  width: 76px;
  background: #3ddc84;
  border-radius: 3px;
  color: #000000;
  margin-left: 30px;

  @media (max-width: 400px) {
    height: 26px;
    width: 54px;
    font-size: 10px;
    margin-left: 14px;
  }
`;

const LinkMovies = styled(LinkPattern)`
  font-size: 13px;
  line-height: 18px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const LinkSavedMovies = styled(LinkPattern)`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  margin-left: 16px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const LinkAccount = styled(LinkPattern)`
  width: 100px;
  background: #313131;
  border-radius: 99em;
  font-size: 14px;
  line-height: 16px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Menu = styled.button`
  display: none;

  @media (max-width: 700px) {
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: auto 0;
  }

  @media (max-width: 400px) {
    height: 43px;
    width: 40px;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 700px) {
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

  @media (max-width: 400px) {
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
