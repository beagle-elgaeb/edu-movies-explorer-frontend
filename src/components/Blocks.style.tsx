import { css } from "@emotion/react";

export const BlockPattern = css`
  width: 100%;
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 5.5%;
  padding-right: 5.5%;

  @media (max-width: 800px) {
    padding-left: 6.5%;
    padding-right: 6.5%;
  }

  @media (max-width: 500px) {
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 5.5%;
    padding-right: 5.5%;
  }
`;

export const TitlePattern = css`
  font-size: 22px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 23px;

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
  padding: 70px 0 0 0;

  @media (max-width: 800px) {
    padding: 70px 0 0 0;
  }

  @media (max-width: 500px) {
    padding: 60px 0 0 0;
  }
`;

export const HoverLink = css`
  transition: opacity 0.2s ease-out;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const HoverButton = css`
  transition: opacity 0.2s ease-out;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
