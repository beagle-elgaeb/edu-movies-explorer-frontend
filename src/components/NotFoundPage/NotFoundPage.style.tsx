import styled from "@emotion/styled/macro";
import { HoverLink } from "../Blocks.style";

export const NotFoundPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  padding: 246px 0 60px;

  @media (max-width: 800px) {
    padding: 408px 0 222px;
  }

  @media (max-width: 500px) {
    padding: 329px 0 30px;
  }
`;

export const ErrorCodeAndText = styled.div``;

export const ErrorCode = styled.p`
  font-size: 140px;
  line-height: 169px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0 0 5px;

  @media (max-width: 500px) {
    font-size: 80px;
    line-height: 97px;
    margin: 0 0 10px;
  }
`;

export const ErrorText = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const Back = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #4285f4;

  ${HoverLink}

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
