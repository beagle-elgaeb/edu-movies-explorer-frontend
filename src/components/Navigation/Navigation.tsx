import { Link, NavigationContainer, Item } from "./Navigation.style";
import { LinkType } from "../../utils/types";

type Props = {
  links: LinkType[];
  onClose?: () => void;
};

function Navigation({ links, onClose }: Props) {
  return (
    <NavigationContainer>
      {links.map((link, i) => (
        <Item key={i}>
          <Link
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={onClose}
          >
            {link.text}
          </Link>
        </Item>
      ))}
    </NavigationContainer>
  );
}

export default Navigation;
