import { createContext, useState } from "react";
import runChat from "../config/Gemini"

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSent = async (prompt) => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: prompt }]);
    setInput("");

    try {
      const response = await runChat(prompt);
      // Add AI response to chat history
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error("Error in chat:", error);
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    chatHistory,
    loading,
    onSent,
    clearChat
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;