// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AIAssistant from './components/AIAssistant';
import StoreCrowdedness from './components/StoreCrowdedness';
import Coupons from './components/Coupons';
import Account from './components/Account';
import Navigation from './components/Navigation';
import './styles.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<AIAssistant />} />
          <Route path="/crowdedness" element={<StoreCrowdedness favorites={favorites} />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/account" element={<Account user={user} setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;