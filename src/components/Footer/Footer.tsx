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
          <Link
            href="https://practicum.yandex.ru/web/"
            alt-text="Яндекс.Практикум"
            target="_blank"
          >
            Яндекс.Практикум
          </Link>
          <Link
            href="https://github.com/beagle-elgaeb"
            alt-text="Моя страница на GitHub"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href="https://www.instagram.com/evg._.su/"
            alt-text="Я на Instagram"
            target="_blank"
          >
            Instagram
          </Link>
          <YearAfter>© 2021</YearAfter>
        </Links>
      </LinksAndYear>
    </FooterContainer>
  );
}

export default Footer;
