import React, { useState } from 'react';
import ProductItem from './ProductItem';

const products = {
  寿司: [
    { id: 1, name: '寿司１', image: 'sushi_ootoro_akami_10kan.png', price: 1500 },
    { id: 2, name: '寿司２', image: 'sushi_chuutoro_10kan.png', price: 1300 },
    { id: 3, name: '寿司３', image: 'sushi_akami_8kan.png', price: 1000 },
    { id: 4, name: '波', image: 'sushi_nami_20kan.png', price: 2800 },
    { id: 5, name: '浜', image: 'sushi_hama_24kan.png', price: 3400 },
    { id: 6, name: '渚', image: 'sushi_nagisa_36kan.png', price: 5200 },
    { id: 7, name: '海', image: 'sushi_umi_40kan.png', price: 6000 },
  ],
  鮮魚: [
    { id: 8, name: '鮭', image: 'sake03.jpg', price: 1000, origin: '北海道' },
    { id: 9, name: 'ヤマメ', image: 'yamame01.jpg', price: 300, origin: '長野県' },
    { id: 10, name: 'あんこう', image: 'ankou.jpg', price: 1200, origin: '宮城県' },
    { id: 11, name: '赤魚', image: 'akauo.jpg', price: 300, origin: '青森県' },
    { id: 12, name: 'イワシ', image: 'urumeiwasi_1.jpg', price: 150, origin: '千葉県' },
    { id: 13, name: 'カサゴ', image: 'akakasago.jpg', price: 1500, origin: '静岡県' },
  ],
  惣菜: [
    { id: 14, name: 'タコ唐揚げ', image: 'takokara.jpg', price: 300 },
    { id: 15, name: 'キスの天ぷら', image: 'kiss.jpg', price: 400 },
  ],
};

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('寿司');

  return (
    <div className="product-list">
      <div className="category-buttons">
        {Object.keys(products).map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {products[selectedCategory].map(product => (
          <ProductItem key={product.id} product={product} category={selectedCategory} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;