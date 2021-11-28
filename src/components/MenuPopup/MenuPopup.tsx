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
};

function MenuPopup({ isOpen, onClose }: PropsType) {
  return (
    <MenuPopupOverlay onened={isOpen}>
      <MenuPopupContainer onened={isOpen}>
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
