import styled from "@emotion/styled/macro";

export const MoviesListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  gap: 32px 20px;
  list-style-type: none;
  margin: 0;
  padding: 70px 0 30px;

  @media (max-width: 800px) {
    gap: 36px 30px;
  }

  @media (max-width: 500px) {
    gap: 32px 20px;
    padding: 40px 0 30px;
  }
`;
