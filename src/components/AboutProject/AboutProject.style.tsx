import styled from "@emotion/styled/macro";
import {
  BlockPattern,
  InformationPattern,
  TitlePattern,
} from "../Blocks.style";

export const AboutProjectContainer = styled.div`
  ${BlockPattern}
  padding-top: 110px;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    padding-top: 91px;
    padding-bottom: 82px;
  }
`;

export const Title = styled.h3`
  ${TitlePattern}
`;

export const Information = styled.div`
  ${InformationPattern}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 40px;
  margin: 0 0 110px;

  @media (max-width: 800px) {
    gap: 30px;
    margin: 0 0 92px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 56px;
    margin: 0 0 60px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 26px;

  @media (max-width: 800px) {
    margin: 0 0 22px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 16px;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

export const Infographics = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(2, 36px);
  row-gap: 4px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;

  @media (max-width: 800px) {
    grid-template-columns: 5fr 19fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 25fr 46fr;
    grid-template-rows: 35px 26px;
    row-gap: 1px;
    font-size: 11px;
    line-height: 13px;
  }
`;

export const Weeks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3ddc84;
  color: #000000;

  :nth-of-type(2) {
    background: #303030;
    color: #ffffff;
  }
`;

export const End = styled.div`
  display: flex;
  justify-content: center;
  color: #a0a0a0;
  margin: 10px 0 0;
`;
