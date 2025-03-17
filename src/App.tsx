import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainScreen from './components/MainScreen';
import Routers from './pages/Routers';
import * as amplitude from '@amplitude/analytics-browser';

const App: React.FC = () => {
    let vh = 0;

    useEffect(() => {
        amplitude.init('581d00580f1e4e401e93b13b39d01640', {"autocapture":true});
        amplitude.track('Sign Up222');

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