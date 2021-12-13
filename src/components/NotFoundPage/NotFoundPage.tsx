import { useNavigate } from "react-router-dom";
import {
  Back,
  ErrorCode,
  ErrorCodeAndText,
  ErrorText,
  NotFoundPageContainer,
} from "./NotFoundPage.style";

function NotFoundPage() {
  let navigate = useNavigate();

  return (
    <NotFoundPageContainer>
      <ErrorCodeAndText>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Страница не найдена</ErrorText>
      </ErrorCodeAndText>
      <Back onClick={() => navigate(-1)}>Назад</Back>
    </NotFoundPageContainer>
  );
}

export default NotFoundPage;
