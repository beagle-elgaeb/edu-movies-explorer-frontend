import styled from "@emotion/styled/macro";
import { HoverButton, HoverLink } from "../Blocks.style";

export const ProfileContainer = styled.form`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 74px 0 70px;

  @media (max-width: 800px) {
    height: calc(100vh - 74px);
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    padding: 70px 0 40px;
  }
`;

export const Greeting = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  margin: 0 0 106px;

  @media (max-width: 800px) {
    margin: 0 0 79px;
  }

  @media (max-width: 500px) {
    margin: 0 0 63px;
  }
`;

export const Inputs = styled.div`
  width: 100vw;
  margin: 0 0 205px;

  @media (max-width: 800px) {
    margin: 0 0 195px;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  height: 46px;
  width: 410px;
  position: relative;
  border-bottom: 1px solid #424242;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 85%;
    min-width: 260px;
  }

  :last-child {
    border-bottom: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 17px;
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
  color: #ffffff;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  text-align: end;
  color: #ffffff;
  margin: 0;
  padding: 0;

  :focus {
    border-bottom: 1px solid #ffffff;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  line-height: 16px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
    margin: 0;
  }
`;

export const Error = styled.span<{ visible: boolean }>`
  position: absolute;
  top: -33px;
  display: ${({ visible }) => (visible ? "inline" : "none")};
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  text-align: center;
  color: #ff004c;
`;

export const Save = styled.button<{ erroneous: boolean }>`
  height: 45px;
  width: 410px;
  background: ${({ erroneous }) => (erroneous ? "#f8f8f8" : "#3456f3")};
  border: none;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: ${({ erroneous }) => (erroneous ? "#c2c2c2" : "#ffffff")};

  @media (max-width: 500px) {
    width: 85%;
    min-width: 260px;
  }

  ${HoverButton}
`;

export const Edit = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 16px;

  ${HoverLink}
`;

export const Exit = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  color: #ee3465;

  ${HoverLink}
`;
