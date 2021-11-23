import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import "./Portfolio.css";

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

const PortfolioContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 184px;
  padding: 0 5.5%;

  @media (max-width: 700px) {
    margin: 0 0 149px;
    padding: 0 4%;
  }

  @media (max-width: 500px) {
    margin: 0 0 130px;
    padding: 0 3%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #8b8b8b;
  margin: 0 0 30px;
`;

const EduWorkLink = styled.div`
  height: 90px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #424242;

  @media (max-width: 500px) {
    height: 67px;
  }
`;

const LinkItem = styled(Link)`
  font-size: 30px;
  line-height: 50px;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;

  @media (max-width: 700px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
