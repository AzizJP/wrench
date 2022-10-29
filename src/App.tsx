import styled from '@emotion/styled';
import {FC, memo} from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App: FC = memo(() => {
  return (
    <Page>
      <Header />
      <Sidebar />
    </Page>
  );
});

export default App;
