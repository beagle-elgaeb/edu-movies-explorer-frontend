import { useEffect } from "react";
import { linksMenu } from "../../utils/lists";
import {
  Close,
  Item,
  LinkAccount,
  LinkMenu,
  MenuPopupContainer,
  MenuPopupOverlay,
  NavigationBlock,
} from "./MenuPopup.style";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

function MenuPopup({ isOpen, onClose, onKeydown }: PropsType) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <MenuPopupOverlay onened={isOpen} onClick={onClose}>
      <MenuPopupContainer onened={isOpen} onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}></Close>
        <NavigationBlock>
          {linksMenu.map((link, i) => (
            <Item key={i}>
              <LinkMenu
                to={link.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={onClose}
              >
                {link.text}
              </LinkMenu>
            </Item>
          ))}
        </NavigationBlock>
        <LinkAccount to="/profile" onClick={onClose}>
          Аккаунт
        </LinkAccount>
      </MenuPopupContainer>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;
