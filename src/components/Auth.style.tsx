import { css } from "@emotion/react";

export const ContainerPattern = css`
  height: 100vh;
  max-width: 396px;
  box-sizing: border-box;
  position: relative;
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

export const ErrorContainerPattern = css`
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 50px 0 0 0;

  @media (max-width: 800px) {
    margin: 60px 0 0 0;
  }

  @media (max-width: 500px) {
    width: 70%;
    margin: 20px 0 0 0;
  }
`;

export const ErrorPattern = ({ visible }: { visible: boolean }) => css`
  width: 100%;
  display: ${visible ? "block" : "none"};
  background: #ffffff15;
  border-radius: 4px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-align: end;
  color: #ee3465;
  margin: 0 0 10px 0;
  padding: 0 10px;
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

export const ButtonPattern = ({ disabled }: { disabled: boolean }) => css`
  height: 45px;
  width: 100%;
  background: ${disabled ? "#F8F8F8" : "#4285f4"};
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: ${disabled ? "#c2c2c2" : "#ffffff"};
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
