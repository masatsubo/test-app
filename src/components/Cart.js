import React from 'react';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>カート</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/images/${item.image}`} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>価格: {item.price}円</p>
            {item.cutting && <p>捌き方: {item.cutting}</p>}
            <button onClick={() => removeFromCart(item.id)}>削除</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>合計: {totalPrice}円</h3>
      </div>
    </div>
  );
}

export default Cart;