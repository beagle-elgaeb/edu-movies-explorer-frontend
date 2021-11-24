import {
  HowMany,
  Technologies,
  TechnologiesItem,
  Technology,
  TechsContainer,
  Text,
  Title,
} from "./Techs.style";

function Techs() {
  return (
    <TechsContainer>
      <Title>Технологии</Title>
      <Technologies>
        <HowMany>7 технологий</HowMany>
        <Text>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </Text>
        <TechnologiesItem>
          <Technology>HTML</Technology>
          <Technology>CSS</Technology>
          <Technology>JS</Technology>
          <Technology>React</Technology>
          <Technology>Git</Technology>
          <Technology>Express.js</Technology>
          <Technology>mongoDB</Technology>
        </TechnologiesItem>
      </Technologies>
    </TechsContainer>
  );
}

export default Techs;
