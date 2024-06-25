// src/components/StoreCrowdedness.js

import React from 'react';

function StoreCrowdedness({ stores, favorites, currentUser, onUpdateCrowdedness }) {
  const favoriteStores = stores.filter(store => favorites.includes(store.id));

  return (
    <div className="store-crowdedness">
      <h2>お気に入り店舗の混雑状況</h2>
      {favoriteStores.map(store => (
        <div key={store.id} className="store-item">
          <h3>{store.name}</h3>
          <p>混雑状況: {store.crowdedness}</p>
          {currentUser && (
            <div>
              <button onClick={() => onUpdateCrowdedness(store.id, '混雑')}>混雑</button>
              <button onClick={() => onUpdateCrowdedness(store.id, '普通')}>普通</button>
              <button onClick={() => onUpdateCrowdedness(store.id, '空いている')}>空いている</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StoreCrowdedness;
