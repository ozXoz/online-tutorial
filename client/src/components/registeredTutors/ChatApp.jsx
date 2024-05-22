import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './ChatComponents/videoChatComponents/Home';
import RoomPage from './ChatComponents/videoChatComponents/Room'
import '../../App.css'

const ChatApp = () => {
  return (
    <div className="App">
    {/* <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes> */}
  </div>
  )
}

export default ChatApp