import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainScreen from './components/MainScreen';
import Routers from './pages/Routers';
import amplitudeTool from "./utils/Analytics/Amplitude";

const App: React.FC = () => {
    let vh = 0;

useEffect(() => {
  amplitudeTool.initialize();
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