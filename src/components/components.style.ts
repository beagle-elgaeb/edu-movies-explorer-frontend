import { css } from "@emotion/react";

export const ContainerPaddings = css`
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

export const TitleBlock = css`
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

export const InformationBlock = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dadada;
  padding: 66px 0 0 0;
`;

export const InputPattern = css`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #2f2f2f;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 42px;
  padding: 0 15px;
`;

export const LabelPattern = css`
  position: absolute;
  top: -10px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #8b8b8b;
`;
