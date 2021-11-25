import {
  Back,
  ErrorCode,
  ErrorPopupOverlay,
  ErrorText,
} from "./ErrorPopup.style";

function ErrorPopup() {
  return (
    <ErrorPopupOverlay>
      <div>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Страница не найдена</ErrorText>
      </div>
      <Back>Назад</Back>
    </ErrorPopupOverlay>
  );
}

export default ErrorPopup;
