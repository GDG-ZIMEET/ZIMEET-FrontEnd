import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainScreen from './components/MainScreen';
import Routers from './pages/Routers';
import * as amplitude from '@amplitude/analytics-browser';

const App: React.FC = () => {
    let vh = 0;

    useEffect(() => {
        amplitude.init(process.env.REACT_APP_AMPLITUDE_PRODUCTION_KEY || '', {"autocapture":true});
        amplitude.track('[접속]ZIMEET_실행');

      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
}, []);

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