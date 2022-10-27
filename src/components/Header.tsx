import {FC} from 'react';
import styled from '@emotion/styled';

import {ReactComponent as Logo} from '../assets/logo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #add8e6;
`;

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <section className="header__logo-container">Helo</section>
      <Logo fill="red" />
    </HeaderWrapper>
  );
};

export default Header;
