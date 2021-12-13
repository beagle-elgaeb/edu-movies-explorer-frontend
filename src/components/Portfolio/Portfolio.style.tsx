import styled from "@emotion/styled/macro";
import { BlockPattern, HoverLink } from "../Blocks.style";
import arrow from "../../images/icon-portfolio-arrow.svg";

export const PortfolioContainer = styled.div`
  ${BlockPattern}
  padding-bottom: 75px;

  @media (max-width: 800px) {
    padding-bottom: 70px;
  }

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #8b8b8b;
  margin: 0 0 30px;

  @media (max-width: 500px) {
    font-size: 14px;
    margin: 0 0 21px;
  }
`;

export const EduWorkLink = styled.a`
  height: 90px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #424242;
  text-decoration: none;

  :last-child {
    border-bottom: none;
  }

  ${HoverLink}

  @media (max-width: 800px) {
    border-bottom: 1px solid #e6e6e6;
    font-size: 28px;
  }

  @media (max-width: 500px) {
    height: 67px;
    font-size: 18px;
    line-height: 28px;
  }

  :hover {
    background: rgba(210, 210, 210, 0.130);
    border-radius: 10px;
    padding: 0 10px;
  }
`;

export const LinkText = styled.p`
  font-size: 30px;
  line-height: 50px;
  font-weight: 400;
  color: #ffffff;
`;

export const LinkIcon = styled.div`
  height: 16px;
  width: 16px;
  background: url(${arrow});
  background-size: cover;
  margin: 0;

  @media (max-width: 800px) {
    height: 15px;
    width: 15px;
  }

  @media (max-width: 500px) {
    height: 10px;
    width: 10px;
  }
`;
