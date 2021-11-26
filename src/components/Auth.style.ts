import { css } from "@emotion/react";

export const ContainerPattern = css`
  height: 100vh;
  max-width: 396px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 70px 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 85%;
    min-width: 260px;
    justify-content: space-between;
    padding: 70px 0 40px;
  }
`;

export const TitlePattern = css`
  line-height: 29px;
  font-weight: 500;
  color: #ffffff;
  margin: 40px 0 62px;
`;

export const InputsPattern = css`
  width: 100%;
  margin: 0 0 49px;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const ButtonAndTextPattern = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonPattern = css`
  height: 45px;
  width: 100%;
  background: #4285f4;
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: #ffffff;
`;

export const TextPattern = css`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
`;

export const LinkPattern = css`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #4285f4;
  margin: 0 0 0 6px;
`;
