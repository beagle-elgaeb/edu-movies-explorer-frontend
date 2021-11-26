import styled from "@emotion/styled/macro";
import { PaddingsPattern } from "../Blocks.style";

export const MoviesListContainer = styled.div`
  ${PaddingsPattern}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  gap: 32px 20px;
  padding-top: 70px;
  padding-bottom: 30px;

  @media (max-width: 1050px) {
  }

  @media (max-width: 800px) {
    padding-top: 70px;
    padding-bottom: 30px;
  }

  @media (max-width: 500px) {
    padding-top: 40px;
    padding-bottom: 30px;
  }
`;
