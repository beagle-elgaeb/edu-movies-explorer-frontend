import styled from "@emotion/styled/macro";
import { HoverButton } from "../Blocks.style";

export const SearchFormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 7px 0 47px;

  @media (max-width: 800px) {
    padding-bottom: 60px;
  }

  @media (max-width: 500px) {
    padding: 6px 1% 50px;
  }
`;

export const InputContainer = styled.div`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #424242;
  margin: 0 0 32px;

  @media (max-width: 800px) {
    margin: 0 0 30px;
  }

  @media (max-width: 500px) {
    height: 52px;
    margin: 0 0 40px;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  font-size: 28px;
  line-height: 34px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding: 0;

  ::placeholder {
    color: #8b8b8b;
  }

  :focus {
    border-bottom: 1px solid #ffffff;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  height: 34px;
  width: 34px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 13px;
  background: #4285f4;
  border: none;
  border-radius: 99em;
  font-size: 30px;
  line-height: 30px;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  padding: 0 0 4px 2px;

  ${HoverButton}

  @media (max-width: 500px) {
    bottom: 9px;
  }
`;
