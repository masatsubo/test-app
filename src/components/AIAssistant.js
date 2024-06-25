// components/AIAssistant.js
import React, { useState } from 'react';

function AIAssistant() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // AIの応答をシミュレート
    const aiResponse = "申し訳ありませんが、これはモックアプリです。実際のAI応答は実装されていません。";
    setConversation([...conversation, { user: message, ai: aiResponse }]);
    setMessage('');
  };

  return (
    <div className="ai-assistant">
      <h2>AIアシスタント</h2>
      <div className="conversation">
        {conversation.map((item, index) => (
          <div key={index}>
            <p>あなた: {item.user}</p>
            <p>AI: {item.ai}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="メッセージを入力..."
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default AIAssistant;
