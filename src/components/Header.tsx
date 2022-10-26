type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header">
      <section className="header__logo-container">
        <img src="" alt="Логотип" className="header__logo" />
        <h1 className="header__title"></h1>
      </section>
      <section className="header__person-container">
        <img src="" alt="" className="header__person-icon" />
        <h2 className="header__person-name"></h2>
      </section>
    </header>
  );
}
