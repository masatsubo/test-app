import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import CuttingSelection from './pages/CuttingSelection';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import Account from './pages/Account';
import './styles/main.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename="/test-app">
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cutting-selection" element={<CuttingSelection />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-complete" element={<OrderComplete />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Navigation />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;