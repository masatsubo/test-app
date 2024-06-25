// components/Account.js
import React, { useState } from 'react';

function Account({ user, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // ログイン処理をシミュレート
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="account">
        <h2>アカウント</h2>
        <p>ログイン中: {user.username}</p>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }

  return (
    <div className="account">
      <h2>ログイン</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ユーザー名"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワード"
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default Account;