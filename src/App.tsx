import {Global, css} from '@emotion/react';
import styled from '@emotion/styled';
import {FC, memo} from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const globalStyle = css`
  body {
    margin: 0;
  }
`;
const Page = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App: FC = memo(() => {
  return (
    <Page>
      <Global styles={globalStyle} />
      <Header />
      <Sidebar />
    </Page>
  );
});

export default App;
