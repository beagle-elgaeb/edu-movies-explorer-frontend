import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import {
  ButtonAndTextPattern,
  ButtonPattern,
  ContainerPattern,
  ErrorContainerPattern,
  ErrorPattern,
  InputsPattern,
  LinkPattern,
  TextPattern,
  TitlePattern,
} from "../Auth.style";
import { HoverButton, HoverLink } from "../Blocks.style";

export const RegisterContainer = styled.form`
  ${ContainerPattern}
`;

export const ErrorContainer = styled.div`
  ${ErrorContainerPattern}
`;

export const Error = styled.span<{ visible: boolean }>`
  ${ErrorPattern}
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

export const Button = styled.button<{ disabled?: boolean }>`
  ${ButtonPattern}

  ${HoverButton}
`;

export const Text = styled.p`
  ${TextPattern}
`;

export const LinkLogin = styled(Link)`
  ${LinkPattern}

  ${HoverLink}
`;
