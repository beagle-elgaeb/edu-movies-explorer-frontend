import { css } from "@emotion/react";
import { BlockPattern } from "./Blocks.style";

export const ContainerPattern = css`
  ${BlockPattern}
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 800px) {
    padding: 60px 4% 82px;
  }

  @media (max-width: 500px) {
    padding-bottom: 100px;
    padding-left: 3.3%;
    padding-right: 3.3%;
  }
`;

export const NotFoundPattern = css`
  font-size: 22px;
  line-height: 24px;
  font-weight: 400;
  color: #b3b3b3;
`;
