import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './Authentication/Join/Join';
import Join2 from './Authentication/Join/Join2';
import Login from './Authentication/Login/Login';
import Booth from './Booth/Booth';
import BoothDetail from './Booth/BoothDetail/BoothDetail';
import Chatting from './Chatting/Chatting/Chatting';
import ChattingInventory from './Chatting/ChattingInventory/ChattingInventory';
import Meeting22 from './Meeting22/Meeting22';
import MeetingRandom from './MeetingRandom/MeetingRandom';
import MeetingRoading from './MeetingRandom/MeetingRoading/MeetingRoading';
import Help from './MeetingRandom/Help/Help';
import Meeting from './NonMember/Meeting/Meeting';
import ZimeetIntroduct from './Introduct/ZimeetIntroduct/ZimeetIntroduct';

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/join" element={<Join />} />
      <Route path="/join2" element={<Join2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booth" element={<Booth />} />
      <Route path="/boothDetail" element={<BoothDetail />} />
      <Route path="/zimeetIntroduct" element={<ZimeetIntroduct />} />
      <Route path="/chatting" element={<Chatting />} />
      <Route path="/chattingInventory" element={<ChattingInventory />} />
      <Route path="/meeting22" element={<Meeting22 />} />
      <Route path="/nonmember-Meeting" element={<Meeting />} />
      <Route path="/meeting-random" element={<MeetingRandom />} />
      <Route path="/meetingRoading" element={<MeetingRoading />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default Routers;
