import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <Link to="/">Logo</Link>
      <Link to="/movies">Фильмы</Link>
      <Link to="/saved-movies">Сохранённые фильмы</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Авторизация</Link>
      <Link to="/profile">Аккаунт</Link>
    </>
  );
}

export default Header;
