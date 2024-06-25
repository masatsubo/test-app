// src/components/Coupons.js

import React from 'react';

function Coupons() {
  const coupons = [
    { id: 1, description: '鮮魚10%オフ', expiry: '2024-07-31' },
    { id: 2, description: '刺身盛り合わせ500円引き', expiry: '2024-06-30' },
  ];

  return (
    <div className="coupons">
      <h2>クーポン</h2>
      {coupons.map(coupon => (
        <div key={coupon.id} className="coupon-item">
          <p>{coupon.description}</p>
          <p>有効期限: {coupon.expiry}</p>
        </div>
      ))}
    </div>
  );
}

export default Coupons;
