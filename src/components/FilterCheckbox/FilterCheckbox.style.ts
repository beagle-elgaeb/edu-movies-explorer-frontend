import styled from "@emotion/styled/macro";

export const CheckContainer = styled.label`
`;

export const CheckInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 0 10px 0 0;

  :checked + ::before {
    background: #2be080;
  }

  :checked + ::after {
    left: 18px;
    background: #ffffff;

    @media (max-width: 800px) {
      left: auto;
      right: 18px;
    }
  }
`;

export const Check = styled.div`
  height: 20px;
  position: relative;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  padding: 0 0 0 50px;

  @media (max-width: 800px) {
    text-align: end;
    padding: 0 50px 0 0;
  }

  @media (max-width: 500px) {
    width: fit-content;
    margin: 0 auto;
  }

  ::before {
    height: 20px;
    width: 36px;
    position: absolute;
    top: 0;
    left: 0;
    background: #343434;
    border-radius: 99em;
    transition: 0.2s;
    content: "";

    @media (max-width: 800px) {
      left: auto;
      right: 0;
    }
  }

  ::after {
    height: 16px;
    width: 16px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 99em;
    background: #a0a0a0;
    transition: 0.2s;
    content: "";

    @media (max-width: 800px) {
      left: auto;
      right: 2px;
    }
  }
`;
