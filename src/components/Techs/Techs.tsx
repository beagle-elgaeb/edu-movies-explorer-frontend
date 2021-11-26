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
          >
            HTML
          </Technology>
          <Technology
            href="https://html5book.ru/osnovy-css/"
            alt-text="Документация"
          >
            CSS
          </Technology>
          <Technology
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
            alt-text="Документация JavaScript"
          >
            JS
          </Technology>
          <Technology
            href="https://ru.reactjs.org/"
            alt-text="Документация React.js"
          >
            React
          </Technology>
          <Technology
            href="https://git-scm.com/book/ru/v2"
            alt-text="Документация Git"
          >
            Git
          </Technology>
          <Technology
            href="https://expressjs.com/ru/"
            alt-text="Документация Express.js"
          >
            Express.js
          </Technology>
          <Technology
            href="https://www.mongodb.com/"
            alt-text="Документация MongoDB"
          >
            mongoDB
          </Technology>
        </TechnologiesItems>
      </Technologies>
    </TechsContainer>
  );
}

export default Techs;
