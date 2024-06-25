// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AIAssistant from './components/AIAssistant';
import StoreCrowdedness from './components/StoreCrowdedness';
import Coupons from './components/Coupons';
import Account from './components/Account';
import Navigation from './components/Navigation';

// CSSファイルのインポート
import './styles.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/" exact component={AIAssistant} />
          <Route path="/crowdedness" render={() => <StoreCrowdedness favorites={favorites} />} />
          <Route path="/coupons" component={Coupons} />
          <Route path="/account" render={() => <Account user={user} setUser={setUser} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;