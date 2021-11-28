import styled from "@emotion/styled/macro";
import { HoverButton } from "../Blocks.style";
import { ContainerPattern, NotFoundPattern } from "../Movies.style";

export const MoviesContainer = styled.div`
  ${ContainerPattern}
`;

export const NotFound = styled.span`
  ${NotFoundPattern}
`;

export const More = styled.button`
  height: 36px;
  width: 320px;
  display: block;
  background: transparent;
  border: 1px solid #626262;
  border-radius: 6px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 auto;

  ${HoverButton}

  @media (max-width: 500px) {
    width: 240px;
  }
`;
