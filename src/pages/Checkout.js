import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Checkout() {
  const { cart, clearCart } = useCart();
  const { currentUser } = useAuth();
  const [address, setAddress] = useState(currentUser.address);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% 消費税
  const total = subtotal + tax;

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで注文処理を行う（APIに送信するなど）
    clearCart();
    navigate('/order-complete');
  };

  return (
    <div className="checkout">
      <h2>注文確認</h2>
      <div className="order-summary">
        <h3>注文内容</h3>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={`${process.env.PUBLIC_URL}/images/${item.category}/${item.image}`} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>価格: ¥{item.price.toLocaleString()} × {item.quantity}</p>
              {item.cutting && <p>捌き方: {item.cutting}</p>}
            </div>
          </div>
        ))}
        <div className="total">
          <p>小計: ¥{subtotal.toLocaleString()}</p>
          <p>消費税: ¥{tax.toLocaleString()}</p>
          <h3>合計: ¥{total.toLocaleString()}</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="delivery-form">
        <h3>配達先情報</h3>
        <div className="form-group">
          <label htmlFor="name">お名前:</label>
          <input type="text" id="name" value={currentUser.name} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="address">配達先住所:</label>
          <textarea id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <button type="submit" className="confirm-order-btn">注文を確定する</button>
      </form>
    </div>
  );
}

export default Checkout;