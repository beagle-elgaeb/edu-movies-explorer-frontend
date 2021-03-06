import styled from "@emotion/styled/macro";
import { BlockPattern, HoverButton, TitlePattern } from "../Blocks.style";

export const TechsContainer = styled.div`
  ${BlockPattern}
  background: #272727;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

export const Title = styled.h3`
  ${TitlePattern}
`;

export const Technologies = styled.div`
  border-top: 1px solid #ffffff;
  padding: 90px 0 0 0;

  @media (max-width: 800px) {
    padding: 80px 0 0 0;
  }

  @media (max-width: 500px) {
    border-top: 1px solid #000000;
    padding: 60px 0 0 0;
  }
`;

export const HowMany = styled.h4`
  font-size: 50px;
  line-height: 58px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0 auto 26px;

  @media (max-width: 800px) {
    margin: 0 auto 22px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto 24px;
  }
`;

export const Text = styled.p`
  max-width: 400px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0 auto 100px;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
    margin: 0 auto 83px;
  }

  @media (max-width: 500px) {
    font-size: 11px;
    line-height: 16px;
    margin: 0 auto 50px;
  }
`;

export const TechnologiesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 90px);
  grid-template-rows: 60px;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, 84px);
    grid-template-rows: 57px;
    grid-auto-rows: 57px;
  }

  @media (max-width: 500px) {
    width: 87%;
    grid-template-columns: repeat(auto-fill, 84px);
    grid-template-rows: 57px;
    grid-auto-rows: 57px;
  }
`;

export const Technology = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #303030;
  border-radius: 10px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  text-decoration: none;
  color: #ffffff;

  ${HoverButton}

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
