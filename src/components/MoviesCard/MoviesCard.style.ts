import styled from "@emotion/styled/macro";

export const MoviesCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #222222;
  border-radius: 10px;
`;

export const FrameFromMovie = styled.div<{ frame: string }>`
  height: 151px;
  width: 100%;
  background: url(${({ frame }) => frame});
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media (max-width: 800px) {
    height: 190px;
  }

  @media (max-width: 500px) {
    height: 168px;
  }
`;

export const NameMovieAndRadio = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px auto 10px;
`;

export const NameMovie = styled.h2`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;

export const Radio = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 99em;
  background: #ffffff;
`;

export const DurationMovie = styled.p`
  width: 91%;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  color: #8b8b8b;
  margin: 0 auto 14px;
`;
