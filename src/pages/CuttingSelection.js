import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const cuttingOptions = [
  { id: 'nimai', name: '二枚下ろし', image: 'nimai.jpg', description: '魚を、半身に背骨がついたままの状態のものと、もう一方の半身の2枚の状態にすること。焼き魚や煮魚に' },
  { id: 'sanmai', name: '三枚おろし', image: 'sanmai.jpg', description: '魚を右身・左身・中骨の3つに切り分けること。骨のない料理用' },
  { id: 'sashimi', name: '刺身', image: 'sashimi.jpg', description: '刺身用のサクにします。' },
  { id: 'dress', name: 'ドレス', image: 'dress.jpg', description: '魚の内臓と頭を取り除き下ごしらえしたもの' }
];

function CuttingSelection() {
  const [selectedCutting, setSelectedCutting] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const { product } = location.state || {};

  const handleCuttingSelect = (cuttingOption) => {
    setSelectedCutting(cuttingOption);
  };

  const handleAddToCart = () => {
    if (selectedCutting && product) {
      addToCart({ ...product, cutting: selectedCutting.name });
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/products');
      }, 2000);
    }
  };

  return (
    <div className="cutting-selection">
      <h2>捌き方を選択してください</h2>
      <div className="cutting-options">
        {cuttingOptions.map(option => (
          <div key={option.id} className="cutting-option">
            <label>
              <input 
                type="radio" 
                name="cutting" 
                value={option.id}
                checked={selectedCutting?.id === option.id}
                onChange={() => handleCuttingSelect(option)}
              />
              <img 
                src={`${process.env.PUBLIC_URL}/images/cutting/${option.image}`} 
                alt={option.name}
                onError={(e) => {
                  console.error(`Failed to load image: ${e.target.src}`);
                  e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
                }}
              />
              <h3>{option.name}</h3>
              <p>{option.description}</p>
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-btn" disabled={!selectedCutting}>
        カートに入れる
      </button>
      {showPopup && (
        <div className="popup">
          <p>商品がカートに入りました</p>
        </div>
      )}
    </div>
  );
}

export default CuttingSelection;