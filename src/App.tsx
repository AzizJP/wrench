import styled from '@emotion/styled';
import {FC, memo} from 'react';

import Header from './components/Header';

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
`;

const App: FC = memo(() => {
  return (
    <Page>
      <Header />
    </Page>
  );
});

export default App;
