import {
  About,
  AboutAndPhoto,
  AboutMeContainer,
  Description,
  Link,
  Name,
  PhotoAfter,
  PhotoBefore,
  Social,
  Text,
  Title,
} from "./AboutMe.style";

function AboutMe() {
  return (
    <AboutMeContainer>
      <Title className="App">Студент</Title>
      <AboutAndPhoto>
        <About>
          <PhotoBefore></PhotoBefore>
          <div>
            <Name>Евгения</Name>
            <Description>Фронтенд-разработчик, 34 года</Description>
            <Text>
              Я родилась и живу в Москве с мужем и кошкой, закончила
              физико-технический факультет МИФИ. Я люблю рисовать и занимаюсь
              настольным теннисом. Недавно начала кодить. С 2017 года работаю на
              опытном производстве инженером-конструктором. Сейчас закончила
              курс по веб-разработке и собираюсь найти новое место работы.
            </Text>
          </div>
          <Social>
            <Link
              href="https://github.com/beagle-elgaeb"
              alt-text="Моя страница на GitHub"
              target="_blank"
            >
              GitHub
            </Link>
            <Link
              href="https://www.instagram.com/evg._.su/"
              alt-text="Я на Instagram"
              target="_blank"
            >
              Instagram
            </Link>
          </Social>
        </About>
        <PhotoAfter></PhotoAfter>
      </AboutAndPhoto>
    </AboutMeContainer>
  );
}

export default AboutMe;
