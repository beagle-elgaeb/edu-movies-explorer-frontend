import { css } from "@emotion/react";
import { PaddingsPattern } from "./Blocks.style";

export const ContainerPattern = css`
  ${PaddingsPattern}
  padding-top: 0;
  padding-bottom: 80px;

  @media (max-width: 800px) {
    padding-top: 0;
    padding-bottom: 80px;
  }

  @media (max-width: 500px) {
    padding-top: 0;
    padding-bottom: 80px;
  }
`;

export const NotFoundPattern = css`
  font-size: 22px;
  line-height: 24px;
  font-weight: 400;
  color: #b3b3b3;
`;
