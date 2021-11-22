import styled from "@emotion/styled/macro";
import photoMe from "../../images/photo-me.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <AboutMeContainer>
      <Title className="App">Студент</Title>
      <AboutAndPhoto>
        <PhotoBefore src={photoMe}></PhotoBefore>
        <About>
          <div>
            <Name>Евгения</Name>
            <Description>Фронтенд-разработчик, 34 года</Description>
            <Text>
              Я родилась и живу в Москве, закончила физико-технический факультет
              МИФИ. У меня есть муж и кошка. Я люблю рисовать, а ещё занимаюсь
              настольным теннисом. Недавно начала кодить. С 2017 года работаю на
              опытном производстве АО "Красная Звезда". После того, как прошла
              курс по веб-разработке, начала заниматься фриланс-заказами и
              собираюсь уйти на другое постоянное место работы.
            </Text>
          </div>
          <Social>
            <Link>GitHub</Link>
            <Link>Instagram</Link>
          </Social>
        </About>
        <PhotoAfter src={photoMe}></PhotoAfter>
      </AboutAndPhoto>
    </AboutMeContainer>
  );
}

export default AboutMe;

const AboutMeContainer = styled.div`
  width: 100%;
  background: #202020;
  margin: 0 auto;
  padding: 0 0 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  line-height: 27px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  margin: 110px 0 23px;

  @media (max-width: 900px) {
    margin: 90px 0 23px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    line-height: 22px;
    margin: 70px 0 28px;
  }
`;

const AboutAndPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #424242;
  margin: 0 0 100px 0;
  padding: 66px 0 0 0;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0 0 0 0;
  }
`;

const About = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 364px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Name = styled.h1`
  font-size: 50px;
  line-height: 58px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 18px 0;

  @media (max-width: 900px) {
    font-size: 40px;
    line-height: 48px;
    margin: 0 0 16px 0;
  }

  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 0 20px 0;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 26px 0;

  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 20px 0;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 700px) {
    margin: 0 0 40px 0;
  }

  @media (max-width: 400px) {
    font-size: 11px;
    line-height: 16px;
    margin: 0 0 40px 0;
  }
`;

const Social = styled.div`
  display: flex;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 20px 0 0;
`;

const PhotoBefore = styled.img`
  display: none;

  @media (max-width: 700px) {
    display: block;
    height: 100%;
    width: 100%;
    max-width: 307px;
    border-radius: 99em;
    margin: 0 auto 40px;
  }
`;

const PhotoAfter = styled.img`
  height: 307px;
  width: 307px;
  border-radius: 99em;
  margin: 0 0 0 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;
