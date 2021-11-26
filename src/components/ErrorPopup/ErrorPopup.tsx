import {
  Back,
  ErrorCode,
  ErrorPopupOverlay,
  ErrorCodeAndText,
  ErrorText,
} from "./ErrorPopup.style";

function ErrorPopup() {
  return (
    <ErrorPopupOverlay>
      <ErrorCodeAndText>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Страница не найдена</ErrorText>
      </ErrorCodeAndText>
      <Back>Назад</Back>
    </ErrorPopupOverlay>
  );
}

export default ErrorPopup;
