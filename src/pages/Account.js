import React, { useState, useEffect } from 'react';
import { getUserInfo, updateUserInfo } from '../utils/api';

function Account() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchUserInfo() {
      const userData = await getUserInfo();
      setUser(userData);
    }
    fetchUserInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserInfo(user);
    setIsEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account">
      <h2>アカウント情報</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">保存</button>
        </form>
      ) : (
        <div>
          <p>名前: {user.name}</p>
          <p>メール: {user.email}</p>
          <button onClick={() => setIsEditing(true)}>編集</button>
        </div>
      )}
    </div>
  );
}

export default Account;