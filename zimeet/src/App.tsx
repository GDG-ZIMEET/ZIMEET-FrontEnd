import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
