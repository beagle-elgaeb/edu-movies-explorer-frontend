import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import {
  ButtonAndTextPattern,
  ButtonPattern,
  ContainerPattern,
  InputsPattern,
  LinkPattern,
  TextPattern,
  TitlePattern,
} from "../Auth.style";

export const LoginContainer = styled.form`
  ${ContainerPattern}
`;

export const Title = styled.h3`
  ${TitlePattern}
`;

export const Inputs = styled.div`
  ${InputsPattern}
`;

export const ButtonAndText = styled.div`
  ${ButtonAndTextPattern}
`;

export const Button = styled.button`
  ${ButtonPattern}
`;

export const Text = styled.p`
  ${TextPattern}
`;

export const LinkRegister = styled(Link)`
  ${LinkPattern}
`;
