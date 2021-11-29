import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";
import { HoverLink } from "../Blocks.style";

export const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  list-style: none;
  margin: 12px 0;
`;

export const Link = styled(NavLink)`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #ffffff;

  @media (max-width: 800px) {
    text-decoration: solid;
  }

  ${HoverLink}

  :last-child {
    margin: 0 0 0 16px;
  }

  @media (max-width: 800px) {
    font-weight: 500;
  }

  &.active {
    font-weight: 500;

    @media (max-width: 800px) {
      text-decoration: underline;
    }
  }
`;
