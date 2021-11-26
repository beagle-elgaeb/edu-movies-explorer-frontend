import styled from "@emotion/styled/macro";
import { PaddingsPattern } from "../Blocks.style";

export const SavedMoviesContainer = styled.div`
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
