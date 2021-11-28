import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuPopup from "../MenuPopup/MenuPopup";

export function Layout() {
  const [menuPopupOpen, setMenuPopupOpen] = useState(false);

  function closeAllPopups() {
    setMenuPopupOpen(false);
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  return (
    <>
      <MenuPopup isOpen={menuPopupOpen} onClose={closeAllPopups} />
      <div>
        <Header onMenuClick={handleMenuClick} />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export function LayoutWithoutHeader() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
