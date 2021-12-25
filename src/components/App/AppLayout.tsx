import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuPopup from "../MenuPopup/MenuPopup";

export function Layout({ isLogined }: { isLogined: boolean }) {
  const [menuPopupOpen, setMenuPopupOpen] = useState(false);

  function closeAllPopups() {
    setMenuPopupOpen(false);
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  function onKeydown({ key }: KeyboardEvent) {
    if (key === "Escape") {
      closeAllPopups();
    }
  }

  return (
    <>
      <MenuPopup
        isOpen={menuPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydown}
      />
      <div>
        <Header onMenuClick={handleMenuClick} isLogined={isLogined} />
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
