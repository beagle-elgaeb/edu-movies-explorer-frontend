import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";

const preloaderInsideWhite = keyframes`
  0% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
  }
  100% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
  }
`;

const preloaderInsideBlue = keyframes`
  0% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
  }
  30% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
  }
  100% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
  }
`;

export const PreloaderContainer = styled.div`
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 13px;
  padding: 0 auto;

  @media (max-width: 500px) {
    bottom: 9px;
  }
`;

export const PreloaderRound = styled.span`
  height: 34px;
  width: 34px;
  position: absolute;
  top: 0;
  left: 0;
  background: #4285f4;
  border-radius: 99em;

  ::after,
  ::before {
    content: "";
    height: 34px;
    width: 34px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px;
  }

  ::after {
    background: white;
    animation: ${preloaderInsideWhite} 1s ease-in-out infinite;
  }

  ::before {
    z-index: 10;
    background: #4285f4;
    animation: ${preloaderInsideBlue} 1s ease-in-out infinite;
  }
`;
