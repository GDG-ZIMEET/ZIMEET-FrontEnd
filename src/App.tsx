import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Join from './pages/Authentication/Join/Join';
import Login from './pages/Authentication/Login/Login';
import Booth from './pages/Booth/Booth';
import Chatting from './pages/Chatting/Chatting';
import Meeting22 from './pages/Meeting22/Meeting22';
import MeetingRandom from './pages/MeetingRandom/MeetingRandom';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/meeting22" element={<Meeting22 />} />
          <Route path="/meeting-random" element={<MeetingRandom />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;