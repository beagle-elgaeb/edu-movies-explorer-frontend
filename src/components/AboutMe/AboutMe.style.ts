import styled from "@emotion/styled/macro";
import photoMe from "../../images/photo-me.jpeg";

export const AboutMeContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 100px;
  padding: 0 5.5%;

  @media (max-width: 800px) {
    margin: 0 0 90px;
    padding: 0 4%;
  }

  @media (max-width: 500px) {
    margin: 0 0 70px;
    padding: 0 3%;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
  margin: 110px 0 23px 0;

  @media (max-width: 800px) {
    margin: 90px 0 23px 0;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
    margin: 70px 0 28px 0;
  }
`;

export const AboutAndPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dadada;
  padding: 66px 0 0 0;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

export const Name = styled.h1`
  font-size: 50px;
  line-height: 58px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 18px 0;

  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 40px;
    margin: 0 0 16px 0;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 0 20px 0;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 26px 0;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 20px 0;
  }

  @media (max-width: 500px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

export const Text = styled.p`
  max-width: 600px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #ffffff;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 20px 0;
  }

  @media (max-width: 500px) {
    font-size: 11px;
    line-height: 16px;
    margin: 0 0 40px 0;
  }
`;

export const Social = styled.div``;

export const Link = styled.a`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin: 0 20px 0 0;

  @media (max-width: 500px) {
    margin: 0 26px 0 0;
  }
`;

export const PhotoBefore = styled.div`
  display: none;

  @media (max-width: 600px) {
    height: 450px;
    width: 375px;
    display: block;
    background: url(${photoMe});
    background-size: cover;
    border-radius: 10px;
    margin: 0 auto 40px auto;
  }

  @media (max-width: 400px) {
    height: 0;
    width: 100%;
    padding-bottom: 120%;
  }
`;

export const PhotoAfter = styled.div`
  height: 327px;
  width: 270px;
  flex-shrink: 0;
  background: url(${photoMe});
  background-size: cover;
  border-radius: 10px;
  margin: 0 0 0 40px;

  @media (max-width: 800px) {
    height: 307px;
    width: 255px;
    margin: 0 0 0 40px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
