import React, { useContext, useRef, useEffect } from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent, chatHistory, loading, setInput, input, clearChat} = useContext(Context)
  const chatEndRef = useRef(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory])

  return (
    <div>
      <div className="main">
        <div className="nav">
          <p>GeminiTalk</p>
          <img onClick={clearChat} src={assets.plus_icon} alt="New Chat" style={{cursor: 'pointer'}} />
        </div>
        <div className="main-content">
          {chatHistory.length === 0 ? (
            <>
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
            </>
          ) : (
            <div className="chat-history">
              {chatHistory.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <div className="message-content">
                    <img 
                      src={message.role === 'user' ? assets.user_icon : assets.gemini_icon} 
                      alt={message.role} 
                    />
                    <div className="message-text">
                      {message.role === 'assistant' && loading && index === chatHistory.length - 1 ? (
                        <div className="loader">
                          <hr />
                          <hr />
                          <hr />
                        </div>
                      ) : (
                        <p dangerouslySetInnerHTML={{ __html: message.content }}></p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}
        </div>
        <div className="main-bottom">
          <div className="searchbox">
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              placeholder='Enter a prompt here'
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onSent(input);
                }
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent(input)} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main


