import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainScreen from './components/MainScreen';
import { init } from '@amplitude/analytics-browser';
import Routers from './pages/Routers';

const App: React.FC = () => {
    const amplitudeKey =
        process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
            ? process.env.REACT_APP_AMPLITUDE_DEV_KEY || ''
            : '';
            // : process.env.REACT_APP_AMPLITUDE_PRODUCTION_KEY || ''; // TODO : 실사용자 배포할 때 Production으로 바꿔서 배포
    init(amplitudeKey);

    let vh = 0;

useEffect(() => {
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