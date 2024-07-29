import React from 'react';
import { Link } from 'react-router-dom';

function OrderComplete() {
  return (
    <div className="order-complete">
      <h2>ご注文ありがとうございました</h2>
      <p>ご注文の確認メールをお送りしました。</p>
      <p>商品の到着まで今しばらくお待ちください。</p>
      <Link to="/" className="back-to-home-btn">トップページに戻る</Link>
    </div>
  );
}

export default OrderComplete;