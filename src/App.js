import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Account from './pages/Account';
import './styles/main.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </main>
          <Navigation />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;