import {
  FooterContainer,
  Link,
  Links,
  LinksAndYear,
  Title,
  YearAfter,
  YearBefore,
} from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <Title>Учебный проект Яндекс.Практикум х BeatFilm.</Title>
      <LinksAndYear>
        <YearBefore>© 2021</YearBefore>
        <Links>
          <Link>Яндекс.Практикум</Link>
          <Link>Github</Link>
          <Link>Facebook</Link>
          <YearAfter>© 2021</YearAfter>
        </Links>
      </LinksAndYear>
    </FooterContainer>
  );
}

export default Footer;
