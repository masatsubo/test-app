import React, { useState, useEffect } from 'react';
import { getCartItems, placeOrder } from '../utils/api';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchCartItems() {
      const items = await getCartItems();
      setCartItems(items);
      setTotal(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }
    fetchCartItems();
  }, []);

  const handlePlaceOrder = async () => {
    await placeOrder(cartItems);
    // 注文完了後の処理（例：確認ページへのリダイレクト）
  };

  return (
    <div className="checkout">
      <h2>注文確認</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ¥{item.price} x {item.quantity}</p>
        </div>
      ))}
      <p>合計: ¥{total}</p>
      <button onClick={handlePlaceOrder}>注文を確定する</button>
    </div>
  );
}

export default Checkout;