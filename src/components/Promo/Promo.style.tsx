import styled from "@emotion/styled/macro";
import { BlockPattern, HoverLink } from "../Blocks.style";

export const PromoContainer = styled.div`
  ${BlockPattern}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #073042;
  padding-top: 75px;
  padding-bottom: 75px;

  @media (max-width: 800px) {
    padding-top: 140px;
    padding-bottom: 75px;
    padding-left: 4%;
    padding-right: 4%;
  }

  @media (max-width: 500px) {
    padding-bottom: 30px;
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const PromoBlock = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleMax = styled.h2`
  max-width: 640px;
  font-size: 50px;
  line-height: 58px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 36px;

  @media (max-width: 800px) {
    max-width: 800px;
    width: 100%;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    margin: 0 0 22px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TitleMin = styled(TitleMax)`
  display: none;

  @media (max-width: 500px) {
    display: inline;
    font-size: 30px;
    line-height: 38px;
    margin: 0 auto 24px;
  }
`;

export const Text = styled.p`
  width: 310px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 146px;

  @media (max-width: 800px) {
    width: 260px;
    text-align: center;
    margin: 0 0 92px;
  }

  @media (max-width: 500px) {
    margin: 0 0 80px;
  }
`;

export const LearnMore = styled.a`
  height: 36px;
  width: 129px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff60;
  border-radius: 3px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #ffffff;

  ${HoverLink}
`;

export const GlobeBefore = styled.img`
  display: none;

  @media (max-width: 800px) {
    width: 310px;
    display: inline;
    margin: 0 0 48px;
  }

  @media (max-width: 500px) {
    width: 210px;
    margin: 0 0 44px;
  }
`;

export const GlobeAfter = styled.img`
  max-width: 310px;
  width: 30%;

  @media (max-width: 900px) {
    width: 25%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
