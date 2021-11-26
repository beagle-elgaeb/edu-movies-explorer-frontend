import styled from "@emotion/styled/macro";
import { PaddingsPattern } from "../Blocks.style";

export const FooterContainer = styled.footer`
  ${PaddingsPattern}

  padding-top: 79px;
  padding-bottom: 0;

  @media (max-width: 800px) {
    padding-top: 79px;
    padding-bottom: 0;
  }

  @media (max-width: 500px) {
    padding-top: 79px;
    padding-bottom: 0;
  }
`;

export const Title = styled.h5`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
  margin: 0 auto 20px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const LinksAndYear = styled.div`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #424242;

  @media (max-width: 500px) {
    height: 154px;
    flex-direction: column;
    padding: 18px 0 0;
  }
`;

export const YearBefore = styled.p`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const YearAfter = styled.p`
  display: none;

  @media (max-width: 500px) {
    display: inline;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #8b8b8b;
    margin: 30px 0 10px 0;
  }
`;

export const Links = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  margin: 0 0 0 20px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
    margin: 12px 0 0 0;
  }
`;
