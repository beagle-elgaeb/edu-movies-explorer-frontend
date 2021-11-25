import styled from "@emotion/styled/macro";

export const PromoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #073042;
  padding: 75px 5.5%;

  @media (max-width: 800px) {
    padding: 140px 4% 75px;
  }

  @media (max-width: 500px) {
    padding: 70px 2% 30px;
  }
`;

export const PromoBlock = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
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

export const LearnMore = styled.button`
  height: 36px;
  width: 129px;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #ffffff60;
  border-radius: 3px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
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