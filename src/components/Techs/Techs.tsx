import {
  HowMany,
  Technologies,
  TechnologiesItems,
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
        <TechnologiesItems>
          <Technology
            href="https://html5book.ru/osnovy-html/"
            alt-text="Документация HTML"
            target="_blank"
          >
            HTML
          </Technology>
          <Technology
            href="https://html5book.ru/osnovy-css/"
            alt-text="Документация"
            target="_blank"
          >
            CSS
          </Technology>
          <Technology
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
            alt-text="Документация JavaScript"
            target="_blank"
          >
            JS
          </Technology>
          <Technology
            href="https://ru.reactjs.org/"
            alt-text="Документация React.js"
            target="_blank"
          >
            React
          </Technology>
          <Technology
            href="https://git-scm.com/book/ru/v2"
            alt-text="Документация Git"
            target="_blank"
          >
            Git
          </Technology>
          <Technology
            href="https://expressjs.com/ru/"
            alt-text="Документация Express.js"
            target="_blank"
          >
            Express.js
          </Technology>
          <Technology
            href="https://www.mongodb.com/"
            alt-text="Документация MongoDB"
            target="_blank"
          >
            mongoDB
          </Technology>
        </TechnologiesItems>
      </Technologies>
    </TechsContainer>
  );
}

export default Techs;
