import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.form`
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

export const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  color: #ffffff;
  margin: 40px 0 62px;
`;

export const Inputs = styled.div`
  width: 100%;
  margin: 0 0 49px;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const ButtonAndText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
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

export const Text = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
`;

export const LinkLogin = styled(Link)`
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #4285f4;
  margin: 0 0 0 6px;
`;
