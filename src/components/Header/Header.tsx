import { useEffect, useState } from "react";
import {
  HeaderContainer,
  LinkAccount,
  LinkLogin,
  LinkMovies,
  Links,
  LinkSavedMovies,
  LinkSignin,
  Logo,
  LogoIcon,
  Menu,
  MenuIcon,
} from "./Header.style";

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
