import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingCart, Person } from '@mui/icons-material';

function Navigation() {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        <Home />
        <span>ホーム</span>
      </Link>
      <Link to="/products" className="nav-item">
        <Search />
        <span>探す</span>
      </Link>
      <Link to="/cart" className="nav-item">
        <ShoppingCart />
        <span>カート</span>
      </Link>
      <Link to="/account" className="nav-item">
        <Person />
        <span>アカウント</span>
      </Link>
    </nav>
  );
}

export default Navigation;