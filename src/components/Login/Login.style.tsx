import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import {
  ButtonAndTextPattern,
  ButtonPattern,
  ContainerPattern,
  ErrorContainerPattern,
  ErrorPattern,
  FormWithoutButtonPattern,
  InputsPattern,
  LinkPattern,
  TextPattern,
  TitlePattern,
} from "../Auth.style";

export const LoginContainer = styled.form`
  ${ContainerPattern}
`;

export const ErrorContainer = styled.div`
  ${ErrorContainerPattern}
`;

export const Error = styled.span<{ visible: boolean }>`
  ${ErrorPattern}
`;

export const FormWithoutButton = styled.div`
  ${FormWithoutButtonPattern}
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

export const Button = styled.button<{ disabled: boolean }>`
  ${ButtonPattern}
`;

export const Text = styled.p`
  ${TextPattern}
`;

export const LinkRegister = styled(Link)`
  ${LinkPattern}
`;
