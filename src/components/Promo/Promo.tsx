import globe from "../../images/globe.svg";
import {
  GlobeAfter,
  GlobeBefore,
  LearnMore,
  PromoBlock,
  PromoContainer,
  Text,
  TitleMax,
  TitleMin,
} from "./Promo.style";

function Promo() {
  return (
    <PromoContainer>
      <PromoBlock>
        <GlobeBefore src={globe} alt="Глобус"></GlobeBefore>
        <TitleMax>
          Учебный проект студента факультета Веб&#8209;разработки.
        </TitleMax>
        <TitleMin>
          Учебный проект студента&#160;факультета Веб&#8209;разработки.
        </TitleMin>
        <Text>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </Text>
        <LearnMore
          href="https://practicum.yandex.ru/web/"
          alt-text="Яндекс.Практикум"
          target="_blank"
        >
          Узнать больше
        </LearnMore>
      </PromoBlock>
      <GlobeAfter src={globe}></GlobeAfter>
    </PromoContainer>
  );
}

export default Promo;
