import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Techs from "../Techs/Techs";
import {
  AboutProjectContainer,
  End,
  Infographics,
  Information,
  SubTitle,
  Text,
  Title,
  Weeks,
} from "./AboutProject.style";

function AboutProject() {
  return (
    <>
      <AboutProjectContainer>
        <Title>О проекте</Title>
        <Information>
          <div>
            <SubTitle>Дипломный проект включал 5 этапов</SubTitle>
            <Text>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </Text>
          </div>
          <div>
            <SubTitle>На выполнение диплома ушло 5 недель</SubTitle>
            <Text>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </Text>
          </div>
        </Information>
        <Infographics>
          <Weeks>1 неделя</Weeks>
          <Weeks>4 недели</Weeks>
          <End>Back-end</End>
          <End>Front-end</End>
        </Infographics>
      </AboutProjectContainer>
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default AboutProject;
