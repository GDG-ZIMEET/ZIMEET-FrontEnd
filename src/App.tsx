import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainScreen from './components/MainScreen';
import { ThemeProvider } from 'styled-components';
import Routers from './pages/Routers';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
            <Routers />
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
};

export default App;