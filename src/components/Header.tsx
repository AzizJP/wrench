import {FC} from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';

const Header: FC = () => {
  return (
    <header className="header">
      <section className="header__logo-container">Helo</section>
      <Logo fill="red" />
    </header>
  );
};

export default Header;
