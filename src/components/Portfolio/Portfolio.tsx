import {
  EduWorkLink,
  LinkIcon,
  LinkText,
  PortfolioContainer,
  Title,
} from "./Portfolio.style";

function Portfolio() {
  return (
    <PortfolioContainer>
      <Title>Портфолио</Title>
      <EduWorkLink
        href="https://beagle-elgaeb.github.io/edu-how-to-learn/index.html"
        alt-text="Научиться учиться"
        target="_blank"
      >
        <LinkText>Статичный сайт</LinkText>
        <LinkIcon></LinkIcon>
      </EduWorkLink>
      <EduWorkLink
        href="https://beagle-elgaeb.github.io/edu-russian-travel/index.html"
        alt-text="Путешествия по России"
        target="_blank"
      >
        <LinkText>Адаптивный сайт</LinkText>
        <LinkIcon></LinkIcon>
      </EduWorkLink>
      <EduWorkLink
        href="https://beagle-elgaeb.nomoredomains.rocks/"
        alt-text="Место"
        target="_blank"
      >
        <LinkText>Одностраничное приложение</LinkText>
        <LinkIcon></LinkIcon>
      </EduWorkLink>
      <EduWorkLink
        href="https://beagle-elgaeb.github.io/pet-clculator-calories/"
        alt-text="Минималистичный калькулятор калорий"
        target="_blank"
      >
        <LinkText>Pet-проект</LinkText>
        <LinkIcon></LinkIcon>
      </EduWorkLink>
    </PortfolioContainer>
  );
}

export default Portfolio;
