import { css } from "@emotion/react";

export const ContainerPattern = css`
  height: 100vh;
  max-width: 396px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 70px 0 71px;

  @media (max-width: 800px) {
    padding: 232px 0 232px;
  }

  @media (max-width: 500px) {
    width: 80%;
    min-width: 260px;
    padding: 57px 0 30px;
  }
`;

export const FormWithoutButtonPattern = css`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitlePattern = css`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  color: #ffffff;
  margin: 40px 0 63px;

  @media (max-width: 800px) {
    margin: 40px 0 63px;
  }

  @media (max-width: 500px) {
    margin: 50px 0 101px;
  }
`;

export const InputsPattern = css`
  width: 100%;
  margin: 0;
`;

export const ButtonAndTextPattern = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorPattern = () => css`
  width: 100%;
  font-size: 10px;
  line-height: 13px;
  font-weight: 400;
  text-align: center;
  color: #ff004c;
  margin: 0 0 20px 0;
  padding: 0;
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
  margin: 0 0 14px;

  @media (max-width: 800px) {
    margin: 0 0 15px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const TextPattern = css`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const LinkPattern = css`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #4285f4;
  margin: 0 0 0 6px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
