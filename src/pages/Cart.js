import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getCategoryFolder = (category) => {
    switch(category) {
      case '寿司': return 'sushi';
      case '鮮魚': return 'fish';
      case '惣菜': return 'side_dish';
      default: return '';
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% 消費税
  const total = subtotal + tax;

  const handleCheckout = () => {
    const hasFreshFish = cart.some(item => item.category === '鮮魚');
    if (hasFreshFish) {
      navigate('/cutting-selection');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="cart">
      <h2>カート</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img 
            src={`${process.env.PUBLIC_URL}/images/${getCategoryFolder(item.category)}/${item.image}`} 
            alt={item.name}
            onError={(e) => {
              console.error(`Failed to load image: ${e.target.src}`);
              e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
            }}
          />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p className="item-price">¥{item.price.toLocaleString()} × {item.quantity}</p>
            {item.cutting && <p className="item-cutting">捌き方: {item.cutting}</p>}
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">削除</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <p>小計: ¥{subtotal.toLocaleString()}</p>
        <p>消費税: ¥{tax.toLocaleString()}</p>
        <h3>合計: ¥{total.toLocaleString()}</h3>
      </div>
      <button onClick={handleCheckout} className="checkout-btn">
        レジに進む
      </button>
    </div>
  );
}

export default Cart;