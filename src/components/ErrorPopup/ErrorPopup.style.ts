import styled from "@emotion/styled/macro";

export const ErrorPopupOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #202020;
  z-index: 10;
`;

export const ErrorCodeAndText = styled.div`
  margin: 246px 0 0;

  @media (max-width: 800px) {
    margin: 408px 0 0;
  }

  @media (max-width: 500px) {
    margin: 329px 0 0;
  }
`;

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
  margin: 0 0 60px;

  @media (max-width: 800px) {
    margin: 0 0 222px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
    margin: 0 0 30px;
  }
`;
