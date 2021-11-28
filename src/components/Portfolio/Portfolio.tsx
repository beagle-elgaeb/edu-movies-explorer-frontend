import {
  EduWorkLink,
  Link,
  PortfolioContainer,
  Title,
} from "./Portfolio.style";

function Portfolio() {
  return (
    <PortfolioContainer>
      <Title>Портфолио</Title>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.github.io/edu-how-to-learn/index.html"
          alt-text="Научиться учиться"
          target="_blank"
        >
          Статичный сайт
        </Link>
        <Link
          href="https://beagle-elgaeb.github.io/edu-how-to-learn/index.html"
          alt-text="Научиться учиться"
          target="_blank"
        >
          &#129125;
        </Link>
      </EduWorkLink>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.github.io/edu-russian-travel/index.html"
          alt-text="Путешествия по России"
          target="_blank"
        >
          Адаптивный сайт
        </Link>
        <Link
          href="https://beagle-elgaeb.github.io/edu-russian-travel/index.html"
          alt-text="Путешествия по России"
          target="_blank"
        >
          &#129125;
        </Link>
      </EduWorkLink>
      <EduWorkLink>
        <Link
          href="https://beagle-elgaeb.nomoredomains.rocks/"
          alt-text="Место"
          target="_blank"
        >
          Одностраничное приложение
        </Link>
        <Link
          href="https://beagle-elgaeb.nomoredomains.rocks/"
          alt-text="Место"
          target="_blank"
        >
          &#129125;
        </Link>
      </EduWorkLink>
    </PortfolioContainer>
  );
}

export default Portfolio;
