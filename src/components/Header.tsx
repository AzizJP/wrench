import React from "react";
import logo from "../assets/logo.svg";

type Props = {
  logo: string,
  icon: string,
};

export default function Header({ logo, icon }: Props) {
  return (
    <header className="header">
      <section className="header__logo-container">
        <img src={logo} alt="Логотип" className="header__logo" />
        <h1 className="header__title"></h1>
      </section>
      <section className="header__person-container">
        <img src={icon} alt="" className="header__person-icon" />
        <h2 className="header__person-name"></h2>
      </section>
    </header>
  );
}
