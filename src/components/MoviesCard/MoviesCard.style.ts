import styled from "@emotion/styled/macro";

export const MoviesCardContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #222222;
  border-radius: 10px;
  list-style: none;
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

export const NameMovieAndCheck = styled.div`
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

export const DurationMovie = styled.p`
  width: 91%;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  color: #8b8b8b;
  margin: 0 auto 14px;
`;

export const CheckLabel = styled.label``;

export const CheckInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 0 10px 0 0;

  :checked + ::after {
    background: #2be080;
  }
`;

export const Check = styled.div`
  position: relative;
  height: 16px;
  width: 16px;
  cursor: pointer;
  margin: 0;

  ::before {
    height: 16px;
    width: 16px;
    position: absolute;
    background: #ffffff;
    border-radius: 99em;
    transition: 0.2s;
    content: "";
  }

  ::after {
    height: 12px;
    width: 12px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 99em;
    background: #313131;
    transition: 0.2s;
    content: "";
  }
`;