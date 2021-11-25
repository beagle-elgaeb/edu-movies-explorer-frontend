import styled from "@emotion/styled/macro";

export const ProfileInputContainer = styled.div`
  height: 46px;
  width: 410px;
  position: relative;
  border-bottom: 1px solid #424242;

  @media (max-width: 500px) {
    width: 85%;
    min-width: 260px;
  }

  :last-child {
    border-bottom: none;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  font-size: 11px;
  line-height: 13px;
  font-weight: 400;
  text-align: end;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  position: absolute;
  top: 17px;
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
  color: #ffffff;
`;