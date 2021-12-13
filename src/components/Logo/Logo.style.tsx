import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { HoverButton } from "../Blocks.style";

export const LogoContainer = styled(Link)`
  height: 38px;
  width: 38px;
  display: flex;
  justify-content: center;
  background: #3ddc84;
  border-radius: 99em;

  ${HoverButton}
`;

export const LogoIcon = styled.div`
  height: 19px;
  width: 20px;
  background: #ffffff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 11px 0 0 0;
`;
