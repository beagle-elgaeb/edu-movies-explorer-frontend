import { Link, NavigationContainer, Item } from "./Navigation.style";
import { LinkType } from "../../utils/types";

type PropsType = {
  links: LinkType[];
  onClose?: () => void;
};

function Navigation({ links, onClose }: PropsType) {
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
