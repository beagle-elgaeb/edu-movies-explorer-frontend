import { useEffect, useState } from "react";
import { linksHeader } from "../../utils/lists";
import Logo from "../Logo/Logo";
import {
  HeaderContainer,
  Item,
  LinkAccount,
  LinkLogin,
  LinkMenu,
  LinksBlock,
  LinkSignin,
  Menu,
  MenuIcon,
  NavBlock,
} from "./Header.style";

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  // Временно, для наблюдения всех состояний хедера ---------------------------
  // Enter переключает залог - незалог ----------------------------------------

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

  // --------------------------------------------------------------------------

  return (
    <>
      {authorized ? (
        <HeaderContainer authorized={authorized}>
          <Logo />
          <LinksBlock>
            <NavBlock>
              {linksHeader.map((link, i) => (
                <Item key={i}>
                  <LinkMenu
                    to={link.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.text}
                  </LinkMenu>
                </Item>
              ))}
            </NavBlock>
            <Menu onClick={onMenuClick}>
              <MenuIcon></MenuIcon>
            </Menu>
          </LinksBlock>
          <LinkAccount to="/profile">Аккаунт</LinkAccount>
        </HeaderContainer>
      ) : (
        <HeaderContainer authorized={authorized}>
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
