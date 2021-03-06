import styled from "@emotion/styled/macro";

export const InputAuthContainer = styled.div`
  height: 46px;
  width: 396px;
  position: relative;
  margin: 0 auto 42px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -22px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #8b8b8b;
`;

export const Input = styled.input<{ erroneous: boolean }>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: #2f2f2f;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: ${({ erroneous }) => (erroneous ? "#ee3465" : "#ffffff")};
  padding: 0 15px;

  :focus {
    background: #3f3f3f;
  }
`;

export const Error = styled.span<{ erroneous: boolean }>`
  display: ${({ erroneous }) => (erroneous ? "inline" : "none")};
  position: absolute;
  bottom: -17px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  color: #ee3465;
  padding: -12 0 0 0;
`;
