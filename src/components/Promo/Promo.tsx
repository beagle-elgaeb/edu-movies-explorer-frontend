import globe from "../../images/globe.svg";
import {
  GlobeAfter,
  GlobeBefore,
  LearnMore,
  PromoBlock,
  PromoContainer,
  Text,
  Title,
} from "./Promo.style";

function Promo() {
  return (
    <PromoContainer>
      <PromoBlock>
        <GlobeBefore src={globe}></GlobeBefore>
        <Title>Учебный проект студента факультета Веб&#8209;разработки.</Title>
        <Text>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </Text>
        <LearnMore>Узнать больше</LearnMore>
      </PromoBlock>
      <GlobeAfter src={globe}></GlobeAfter>
    </PromoContainer>
  );
}

export default Promo;
