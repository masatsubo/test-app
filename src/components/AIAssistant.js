// src/components/AIAssistant.js

import React, { useState } from 'react';

function AIAssistant() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const aiResponse = generateAIResponse(message);
    setConversation([...conversation, { user: message, ai: aiResponse }]);
    setMessage('');
  };

  const generateAIResponse = (userMessage) => {
    // 簡単なキーワードベースの応答生成
    if (userMessage.includes('魚')) {
      return '角上魚類では、新鮮な魚を豊富に取り揃えています。本日のおすすめは季節の旬の魚です。';
    } else if (userMessage.includes('営業時間')) {
      return '通常の営業時間は午前9時から午後8時までです。詳細は各店舗にお問い合わせください。';
    } else if (userMessage.includes('特売')) {
      return '毎週水曜日は特売日です。その日の朝に特売情報をお知らせしています。';
    } else {
      return 'ご質問ありがとうございます。具体的な情報については、お近くの角上魚類の店舗にお問い合わせください。';
    }
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