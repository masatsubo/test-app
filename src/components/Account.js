// src/components/Account.js

import React, { useState } from 'react';

function Account({ currentUser, onAddUser, stores, onAddFavorite }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedStores, setSelectedStores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: username,
      email: email,
      registrationDate: new Date().toISOString()
    };
    onAddUser(newUser);
    selectedStores.forEach(storeId => onAddFavorite(newUser.id, parseInt(storeId)));
    setUsername('');
    setEmail('');
    setSelectedStores([]);
  };

  const handleStoreSelection = (e) => {
    const storeId = e.target.value;
    setSelectedStores(prev => 
      prev.includes(storeId) 
        ? prev.filter(id => id !== storeId)
        : [...prev, storeId]
    );
  };

  if (currentUser) {
    return (
      <div className="account">
        <h2>アカウント情報</h2>
        <p>ユーザーID: {currentUser.id}</p>
        <p>ユーザー名: {currentUser.name}</p>
        <p>メールアドレス: {currentUser.email}</p>
        <p>登録日: {new Date(currentUser.registrationDate).toLocaleDateString()}</p>
      </div>
    );
  }

  return (
    <div className="account">
      <h2>アカウント登録</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          required
        />
        <h3>お気に入りの店舗を選択してください：</h3>
        {stores.map(store => (
          <label key={store.id}>
            <input
              type="checkbox"
              value={store.id}
              checked={selectedStores.includes(store.id.toString())}
              onChange={handleStoreSelection}
            />
            {store.name}
          </label>
        ))}
        <button type="submit">登録</button>
      </form>
    </div>
  );
}

export default Account;