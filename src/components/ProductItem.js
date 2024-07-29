import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Add, Remove, Star, StarHalf, StarOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product, category }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <div>商品情報が見つかりません</div>;
  }

  const handleAddToCart = () => {
    if (category === '鮮魚') {
      navigate('/cutting-selection', { state: { product: { ...product, quantity, category } } });
    } else {
      addToCart({ ...product, quantity, category });
    }
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
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="star" />)}
        {hasHalfStar && <StarHalf className="star" />}
        {[...Array(emptyStars)].map((_, i) => <StarOutline key={`empty-${i}`} className="star" />)}
        <span className="rating-number">{rating.toFixed(1)}</span>
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
        <p className="price">¥{product.price.toLocaleString()}</p>
        <p className="description">{product.description}</p>
        {renderRating(product.rating)}
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Remove /></button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}><Add /></button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          {category === '鮮魚' ? '捌き方を選択' : 'カートに追加'}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;