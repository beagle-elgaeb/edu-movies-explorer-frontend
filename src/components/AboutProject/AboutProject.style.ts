import styled from "@emotion/styled/macro";
import {
  ContainerPaddings,
  InformationBlock,
  TitleBlock,
} from "../components.style";

export const AboutProjectContainer = styled.div`
  ${ContainerPaddings}
`;

export const Title = styled.h3`
  ${TitleBlock}
`;

export const Information = styled.div`
  ${InformationBlock}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 40px;
  margin: 0 0 110px;

  @media (max-width: 800px) {
    gap: 30px;
    margin: 0 0 93px;
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

  @media (max-width: 600px) {
    grid-template-rows: repeat(2, 35px);
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

  :nth-child(2) {
    background: #303030;
    color: #ffffff;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 600px) {
  }
`;

export const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a0a0a0;
`;
