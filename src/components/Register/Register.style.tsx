import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import {
  ButtonAndTextPattern,
  ButtonPattern,
  ContainerPattern,
  ErrorPattern,
  FormWithoutButtonPattern,
  InputsPattern,
  LinkPattern,
  TextPattern,
  TitlePattern,
} from "../Auth.style";
import { HoverButton, HoverLink } from "../Blocks.style";

export const RegisterContainer = styled.form`
  ${ContainerPattern}
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

export const Error = styled.span`
  ${ErrorPattern};
`;

export const Button = styled.button<{ disabled: boolean }>`
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
