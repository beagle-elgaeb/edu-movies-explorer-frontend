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

function Header({
  onMenuClick,
  isLogined,
}: {
  onMenuClick: () => void;
  isLogined: boolean;
}) {
  return (
    <>
      {isLogined ? (
        <HeaderContainer authorized={isLogined}>
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
        <HeaderContainer authorized={isLogined}>
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
