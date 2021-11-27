import {
  PreloaderBlock,
  PreloaderContainer,
  PreloaderRound,
} from "./Preloader.style";

function Preloader() {
  return (
    <PreloaderContainer>
      <PreloaderBlock>
        <PreloaderRound></PreloaderRound>
      </PreloaderBlock>
    </PreloaderContainer>
  );
}

export default Preloader;
