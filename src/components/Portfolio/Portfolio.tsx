import {
  Title,
  EduWorkLink,
  PortfolioContainer,
  LinkItem,
} from "./Portfolio.style";

function Portfolio() {
  return (
    <PortfolioContainer>
      <Title>Портфолио</Title>
      <EduWorkLink>
        <LinkItem to="">Статичный сайт</LinkItem>
        <LinkItem to="">&#129125;</LinkItem>
      </EduWorkLink>
      <EduWorkLink>
        <LinkItem to="">Адаптивный сайт</LinkItem>
        <LinkItem to="">&#129125;</LinkItem>
      </EduWorkLink>
      <EduWorkLink>
        <LinkItem to="">Одностраничное приложение</LinkItem>
        <LinkItem to="">&#129125;</LinkItem>
      </EduWorkLink>
    </PortfolioContainer>
  );
}

export default Portfolio;
