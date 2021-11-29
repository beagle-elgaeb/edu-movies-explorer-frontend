import { useEffect } from "react";
import { linksMenu } from "../../utils/lists";
import Navigation from "../Navigation/Navigation";
import {
  Close,
  LinkAccount,
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
          <Navigation links={linksMenu} onClose={onClose} />
        </NavigationBlock>
        <LinkAccount to="/profile" onClick={onClose}>
          Аккаунт
        </LinkAccount>
      </MenuPopupContainer>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;
