import styled from "@emotion/styled/macro";

export const SearchFormContainer = styled.div`
  width: 100%;
  padding: 70px 0 47px;

  @media (max-width: 800px) {
    padding: 80px 0 60px;
  }

  @media (max-width: 500px) {
    padding: 84px 0 50px;
  }
`;

export const InputContainer = styled.div`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #424242;
  margin: 0 0 32px;

  @media (max-width: 800px) {
    margin: 0 0 29px;
  }

  @media (max-width: 500px) {
    height: 52px;
    margin: 0 0 40px;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  font-size: 28px;
  line-height: 34px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding: 0;

  ::placeholder {
    color: #8b8b8b;
  }

  :focus {
    border-bottom: 1px solid #ffffff;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  height: 34px;
  width: 34px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 13px;
  background: #4285f4;
  border: none;
  border-radius: 99em;
  font-size: 30px;
  line-height: 30px;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  padding: 0 0 4px 2px;

  @media (max-width: 500px) {
    bottom: 9px;
  }
`;

export const CheckLabel = styled.label``;

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
