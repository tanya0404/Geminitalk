import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import {assets} from '../../assets/assets'
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="nav">
          <p>GeminiTalk</p>
          {/* <img src={assets.user_icon} alt="" /> */}
        </div>
        <div className="main-content">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="card">
            <div className="card1">
              <p>Suggest beautiful places to see on upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card1">
              <p>Ideas of latest demanding skills</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card1">
              <p>Briefly summarize the urban planning concept</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card1">
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="main-bottom">
          <div className="searchbox">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
        </div>
        <p className='bottom-info'>
          Gemini may display inaccurate info, including about people, so double-click its responses. Your privacy and Gemini Apps
        </p>
        </div>
      </div>
    </div>
  )
}

export default Main


