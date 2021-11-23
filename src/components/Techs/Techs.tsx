import "./Techs.css";
import styled from "@emotion/styled/macro";

function Techs() {
  return (
    <TechsContainer>
      <div className="App">fdsafs</div>
      <div className="App">fdsafs</div>
      <div className="App">fdsafs</div>
      <div className="App">fdsafs</div>
      <div className="App">fdsafs</div>
    </TechsContainer>
  );
}

export default Techs;

const TechsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #303030;
  padding: 0 5.5%;

  @media (max-width: 700px) {
    padding: 0 4%;
  }

  @media (max-width: 400px) {
    padding: 0 3%;
  }
`;
