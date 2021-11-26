import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import {
  HeaderContainer,
  LinkAccount,
  LinkLogin,
  LinkMovies,
  Links,
  LinkSavedMovies,
  LinkSignin,
  Menu,
  MenuIcon,
} from "./Header.style";

function Header() {
  // Временно, для наблюдения всех состояний хедера ---------------------------
  // (залог, незалог, страницы аввторизации и регистрации) --------------------
  // (Enter переключает залог - незалог) --------------------------------------
  // (Ctrl + Enter скрывает хедер) --------------------------------------------

  const [authorized, setAuthorized] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  function onKeydown(evt: KeyboardEvent) {
    if (evt.key === "Enter") {
      setAuthorized((authorized) => !authorized);
    }
    if (evt.ctrlKey && evt.key === "x") {
      setVisible((visible) => !visible);
    }
  }
  // --------------------------------------------------------------------------

  return (
    <>
      {authorized ? (
        <HeaderContainer authorized={authorized} visible={visible}>
          <Logo />
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
        <HeaderContainer authorized={authorized} visible={visible}>
          <Logo />
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
