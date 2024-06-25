// components/StoreCrowdedness.js
import React from 'react';

function StoreCrowdedness({ favorites }) {
  const stores = [
    { id: 1, name: '高崎店', crowdedness: '混雑' },
    { id: 2, name: '草加店', crowdedness: '普通' },
    { id: 3, name: '小平店', crowdedness: '空いている' },
  ];

  return (
    <div className="store-crowdedness">
      <h2>店舗混雑状況</h2>
      {stores.map(store => (
        <div key={store.id} className="store-item">
          <h3>{store.name}</h3>
          <p>混雑状況: {store.crowdedness}</p>
          <button>お気に入りに追加</button>
        </div>
      ))}
    </div>
  );
}

export default StoreCrowdedness;
