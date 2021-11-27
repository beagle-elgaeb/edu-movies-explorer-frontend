import { linksMenu } from "../../utils/lists";
import Navigation from "../Navigation/Navigation";
import {
  MenuPopupOverlay,
  NavigationBlock,
  LinkAccount,
  Close,
} from "./MenuPopup.style";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function MenuPopup({ isOpen, onClose }: Props) {
  return (
    <MenuPopupOverlay isOpen={isOpen}>
      <Close onClick={onClose}></Close>
      <NavigationBlock>
        <Navigation links={linksMenu} onClose={onClose} />
      </NavigationBlock>
      <LinkAccount to="/profile" onClick={onClose}>
        Аккаунт
      </LinkAccount>
    </MenuPopupOverlay>
  );
}

export default MenuPopup;
