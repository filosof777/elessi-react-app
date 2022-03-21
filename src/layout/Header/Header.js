import React from "react";
import classes from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderCenter from "./HeaderCenter/HeaderCenter";
import HeaderTop from "./HeaderTop/HeaderTop";

function Header() {
  return (
    <header className={classes.Header}>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </header>
  );
}

export default Header;
