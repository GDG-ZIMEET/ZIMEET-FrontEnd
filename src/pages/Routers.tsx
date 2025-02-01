import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './Authentication/Join/Join';
import Join2 from './Authentication/Join/Join2';
import SelectEmoji from './Authentication/Join/SelectEmoji';
import Join3 from './Authentication/Join/Join3';
import Login from './Authentication/Login/Login';
import MyPage from './MyPage/MyPage/MyPage';
import Booth from './Booth/Booth';
import BoothDetail from './Booth/BoothDetail/BoothDetail';
import Chatting from './Chatting/Chatting/Chatting';
import ChattingInventory from './Chatting/ChattingInventory/ChattingInventory';
import Meeting22 from './Meeting22/Meeting22';
import TeamMaking from './Meeting22/TeamMaking/TeamMaking';
import MeetingRandom from './MeetingRandom/MeetingRandom';
import MeetingRoading from './MeetingRandom/MeetingRoading/MeetingRoading';
import Help from './MeetingRandom/Help/Help';
import Meeting from './NonMember/Meeting/Meeting';
import ZimeetIntroduct from './Introduct/ZimeetIntroduct/ZimeetIntroduct';
import GdgocIntroduct from './Introduct/GdgocIntroduct/GdgocIntroduct';
import ReceiveHi from './Chatting/ReceiveHi/ReceiveHi';
import SentHi from "./Chatting/SentHi/SentHi";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Booth />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join2" element={<Join2 />} />
      <Route path="/selectemoji" element={<SelectEmoji />} />
      <Route path="/join3" element={<Join3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/booth" element={<Booth />} />
      <Route path="/boothDetail/:clubId" element={<BoothDetail />} />
      <Route path="/zimeetIntroduct" element={<ZimeetIntroduct />} />
      <Route path="/gdgocIntroduct" element={<GdgocIntroduct />} />
      <Route path="/chatting" element={<Chatting />} />
      <Route path="/chattingInventory" element={<ChattingInventory />} />
      <Route path="/receiveHi" element={<ReceiveHi />} />
      <Route path="/sentHi" element={<SentHi />} />
      <Route path="/meeting22" element={<Meeting22 />} />
      <Route path="/teamMaking" element={<TeamMaking />} />
      <Route path="/nonmember-Meeting" element={<Meeting />} />
      <Route path="/meeting-random" element={<MeetingRandom />} />
      <Route path="/meetingRoading" element={<MeetingRoading />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default Routers;
