import styled from "@emotion/styled/macro";

export const ProfileContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
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
  margin: 0 0 205px;

  @media (max-width: 800px) {
    margin: 0 0 195px;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;
