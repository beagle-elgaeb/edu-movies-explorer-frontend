import styled from "@emotion/styled/macro";
import "./Footer.css";

function Footer() {
  return (
    <FooterContainer>
      <Title>Учебный проект Яндекс.Практикум х BeatFilm.</Title>
      <LinksAndYear>
        <Year>© 2021</Year>
        <Links>
          <Link>Яндекс.Практикум</Link>
          <Link>Github</Link>
          <Link>Facebook</Link>
        </Links>
      </LinksAndYear>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  height: 93px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 5.5%;

  @media (max-width: 700px) {
    padding: 0 4%;
  }

  @media (max-width: 400px) {
    height: 191px;
    padding: 0 3%;
  }
`;

const Title = styled.h5`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
  margin: 0 auto 20px;

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const LinksAndYear = styled.div`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #424242;

  @media (max-width: 400px) {
    height: 154px;
    flex-direction: column;
    position: relative;
    padding: 18px 0 0;
  }
`;

const Year = styled.p`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media (max-width: 400px) {
    width: 100%;
    position: absolute;
    bottom: 10px;
    font-size: 12px;
    line-height: 15px;
    color: #8b8b8b;
  }
`;

const Links = styled.div`
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const Link = styled.a`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  margin: 0 0 0 20px;

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 15px;
    margin: 12px 0 0 0;
  }
`;
