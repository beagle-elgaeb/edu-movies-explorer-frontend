import {
  Title,
  EduWorkLink,
  PortfolioContainer,
  Link,
} from "./Portfolio.style";

function Portfolio() {
  return (
    <PortfolioContainer>
      <Title>Портфолио</Title>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.github.io/edu-how-to-learn/index.html"
          alt-text="Научиться учиться"
        >
          Статичный сайт
        </Link>
        <Link
          href="https://beagle-elgaeb.github.io/edu-how-to-learn/index.html"
          alt-text="Научиться учиться"
        >
          &#129125;
        </Link>
      </EduWorkLink>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.github.io/edu-russian-travel/index.html"
          alt-text="Путешествия по России"
        >
          Адаптивный сайт
        </Link>
        <Link
          href="https://beagle-elgaeb.github.io/edu-russian-travel/index.html"
          alt-text="Путешествия по России"
        >
          &#129125;
        </Link>
      </EduWorkLink>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.nomoredomains.rocks/"
          alt-text="Место"
        >
          Одностраничное приложение
        </Link>
        <Link
          href="https://beagle-elgaeb.nomoredomains.rocks/"
          alt-text="Место"
        >
          &#129125;
        </Link>
      </EduWorkLink>
    </PortfolioContainer>
  );
}

export default Portfolio;
