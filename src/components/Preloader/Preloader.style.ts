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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 20px;
`;

export const PreloaderBlock = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

export const PreloaderRound = styled.span`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: #4285f4;
  border-radius: 50px;

  ::after,
  ::before {
    content: "";
    width: 100px;
    height: 100px;
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
