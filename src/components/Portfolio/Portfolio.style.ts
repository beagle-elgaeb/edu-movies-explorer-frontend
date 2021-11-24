import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { ContainerPaddings } from "../components.style";

export const PortfolioContainer = styled.div`
  ${ContainerPaddings}

  padding-top: 0;
  padding-bottom: 125px;

  @media (max-width: 800px) {
    padding-top: 0;
  }

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #8b8b8b;
  margin: 0 0 30px;
`;

export const EduWorkLink = styled.div`
  height: 90px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #424242;

  :last-child {
    border-bottom: none;
  }

  @media (max-width: 800px) {
    border-bottom: 1px solid #e6e6e6;
  }

  @media (max-width: 500px) {
    height: 67px;
  }
`;

export const LinkItem = styled(Link)`
  font-size: 30px;
  line-height: 50px;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;

  @media (max-width: 800px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
