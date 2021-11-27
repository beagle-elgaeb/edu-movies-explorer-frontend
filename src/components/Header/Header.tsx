import { useEffect, useState } from "react";
import { linksHeader } from "../../utils/lists";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import {
  HeaderContainer,
  LinkAccount,
  LinkLogin,
  LinksBlock,
  LinkSignin,
  Menu,
  MenuIcon,
  NavBlock,
} from "./Header.style";

function Header({ onMenuClick }: { onMenuClick: () => void }) {
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
    if ((evt.ctrlKey && evt.key === "x") || (evt.ctrlKey && evt.key === "ч")) {
      setVisible((visible) => !visible);
    }
  }

  // --------------------------------------------------------------------------

  return (
    <>
      {authorized ? (
        <HeaderContainer authorized={authorized} visible={visible}>
          <Logo />
          <LinksBlock>
            <NavBlock>
              <Navigation links={linksHeader} />
            </NavBlock>
            <Menu onClick={onMenuClick}>
              <MenuIcon></MenuIcon>
            </Menu>
          </LinksBlock>
          <LinkAccount to="/profile">Аккаунт</LinkAccount>
        </HeaderContainer>
      ) : (
        <HeaderContainer authorized={authorized} visible={visible}>
          <Logo />
          <LinksBlock>
            <LinkSignin to="/signup">Регистрация</LinkSignin>
            <LinkLogin to="/signin">Войти</LinkLogin>
          </LinksBlock>
        </HeaderContainer>
      )}
    </>
  );
}

export default Header;
