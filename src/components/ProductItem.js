import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const cuttingOptions = ['2枚おろし', '3枚おろし', '刺身', 'ドレス'];

function ProductItem({ product, category }) {
  const [selectedCutting, setSelectedCutting] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (category === '鮮魚' && !selectedCutting) {
      alert('捌き方を選択してください。');
      return;
    }
    addToCart({ ...product, cutting: selectedCutting });
  };

  const getCategoryFolder = (category) => {
    switch(category) {
      case '寿司': return 'sushi';
      case '鮮魚': return 'fish';
      case '惣菜': return 'side_dish';
      default: return '';
    }
  };

  const imagePath = `${process.env.PUBLIC_URL}/images/${getCategoryFolder(category)}/${product.image}`;

  return (
    <div className="product-item">
      <img 
        src={imagePath} 
        alt={product.name} 
        onError={(e) => {
          console.error(`Failed to load image: ${imagePath}`);
          e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
        }}
      />
      <h3>{product.name}</h3>
      <p>価格: {product.price}円</p>
      {category === '鮮魚' && (
        <>
          <p>産地: {product.origin}</p>
          <select value={selectedCutting} onChange={(e) => setSelectedCutting(e.target.value)}>
            <option value="">捌き方を選択</option>
            {cuttingOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </>
      )}
      <button onClick={handleAddToCart}>カートに追加</button>
    </div>
  );
}

export default ProductItem;