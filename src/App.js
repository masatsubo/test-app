// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { db } from './utils/mockDatabase';
import './styles.css';

// コンポーネントのインポート
import AIAssistant from './components/AIAssistant';
import StoreCrowdedness from './components/StoreCrowdedness';
import Coupons from './components/Coupons';
import Account from './components/Account';

function App() {
  const [stores, setStores] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = db.getAll();
    setStores(data.stores);
  }, []);

  const handleAddUser = (user) => {
    db.addUser(user);
    setCurrentUser(user);
  };

  const handleAddFavorite = (userId, storeId) => {
    db.addFavorite(userId, storeId);
    setFavorites(db.getUserFavorites(userId));
  };

  const handleUpdateCrowdedness = (storeId, crowdedness) => {
    db.updateStoreCrowdedness(storeId, crowdedness);
    setStores(prevStores => prevStores.map(store => 
      store.id === storeId ? { ...store, crowdedness } : store
    ));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">AIアシスタント</Link></li>
            <li><Link to="/crowdedness">混雑状況</Link></li>
            <li><Link to="/coupons">クーポン</Link></li>
            <li><Link to="/account">アカウント</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AIAssistant />} />
          <Route 
            path="/crowdedness" 
            element={
              <StoreCrowdedness 
                stores={stores} 
                favorites={favorites}
                currentUser={currentUser}
                onUpdateCrowdedness={handleUpdateCrowdedness}
              />
            } 
          />
          <Route path="/coupons" element={<Coupons />} />
          <Route 
            path="/account" 
            element={
              <Account 
                currentUser={currentUser}
                onAddUser={handleAddUser}
                stores={stores}
                onAddFavorite={handleAddFavorite}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;