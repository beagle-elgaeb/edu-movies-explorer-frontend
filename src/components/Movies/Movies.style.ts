import styled from "@emotion/styled/macro";
import { PaddingsPattern } from "../Blocks.style";

export const MoviesContainer = styled.div`
  ${PaddingsPattern}
  padding-top: 0;
  padding-bottom: 80px;

  @media (max-width: 800px) {
    padding-top: 0;
    padding-bottom: 80px;
  }

  @media (max-width: 500px) {
    padding-top: 0;
    padding-bottom: 80px;
  }
`;

export const More = styled.button`
  height: 36px;
  width: 320px;
  display: block;
  background: transparent;
  border: 1px solid #424242;
  border-radius: 6px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 240px;
  }
`;
