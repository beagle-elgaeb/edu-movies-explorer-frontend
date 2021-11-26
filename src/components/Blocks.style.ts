import { css } from "@emotion/react";

export const PaddingsPattern = css`
  width: 100%;
  box-sizing: border-box;
  padding: 100px 5.5%;

  @media (max-width: 800px) {
    padding: 90px 4%;
  }

  @media (max-width: 500px) {
    padding: 70px 3%;
  }
`;

export const TitlePattern = css`
  font-size: 22px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 23px;

  @media (max-width: 800px) {
    margin: 0 0 23px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 28px;
  }
`;

export const InformationPattern = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dadada;
  padding: 66px 0 0 0;
`;
