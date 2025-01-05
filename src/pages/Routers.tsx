import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './Authentication/Join/Join';
import Login from './Authentication/Login/Login';
import Booth from './Booth/Booth';
import Chatting from './Chatting/Chatting';
import Meeting22 from './Meeting22/Meeting22';
import MeetingRandom from './MeetingRandom/MeetingRandom';
import MeetingRoading from './MeetingRandom/MeetingRoading/MeetingRoading';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booth" element={<Booth />} />
      <Route path="/chatting" element={<Chatting />} />
      <Route path="/meeting22" element={<Meeting22 />} />
      <Route path="/meeting-random" element={<MeetingRandom />} />
      <Route path="/meetingRoading" element={<MeetingRoading />} />
    </Routes>
  );
};

export default Routers;
