import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Star, StarHalf, StarOutline } from '@mui/icons-material';

const cuttingOptions = ['2枚おろし', '3枚おろし', '刺身', 'ドレス'];

function ProductItem({ product, category }) {
  const [selectedCutting, setSelectedCutting] = useState('');
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (category === '鮮魚' && !selectedCutting) {
      alert('捌き方を選択してください。');
      return;
    }
    addToCart({ ...product, cutting: selectedCutting, category });
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

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} />)}
        {hasHalfStar && <StarHalf />}
        {[...Array(emptyStars)].map((_, i) => <StarOutline key={`empty-${i}`} />)}
        <span>({rating})</span>
      </div>
    );
  };

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
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">¥{product.price}</p>
        <p className="description">{product.description}</p>
        {renderRating(product.rating)}
        {category === '鮮魚' && (
          <select value={selectedCutting} onChange={(e) => setSelectedCutting(e.target.value)}>
            <option value="">捌き方を選択</option>
            {cuttingOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )}
        <button onClick={handleAddToCart} className="add-to-cart-btn">カートに追加</button>
      </div>
    </div>
  );
}

export default ProductItem;