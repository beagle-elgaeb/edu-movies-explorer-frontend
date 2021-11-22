import styled from "@emotion/styled";
import "./Footer.css";

function Footer() {
  return (
    <FooterContainer>
      <Title>Учебный проект Яндекс.Практикум х BeatFilm.</Title>
      <LinksAndYear>
        <Year>© 2020</Year>
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
  width: 100%;
  background: #202020;
  margin: 0;
  padding: 0 0 20px;

  @media (max-width: 400px) {
    position: relative;
    padding: 0 0 55px;
  }
`;

const Title = styled.h5`
  width: 100%;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  color: #8b8b8b;
  margin: 79px auto 20px;

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const LinksAndYear = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #424242;
  margin: 0;
  padding: 20px 0 0;

  @media (max-width: 400px) {
    flex-direction: column;
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
