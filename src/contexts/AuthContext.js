import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser] = useState({
    email: 'user@example.com',
    name: 'テストユーザー',
    address: '東京都渋谷区1-1-1',
    favoriteStore: '店舗A',
    paymentMethod: 'クレジットカード'
  });

  const value = {
    currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}