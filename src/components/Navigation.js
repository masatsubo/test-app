// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">AIアシスタント</Link></li>
        <li><Link to="/crowdedness">混雑状況</Link></li>
        <li><Link to="/coupons">クーポン</Link></li>
        <li><Link to="/account">アカウント</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;