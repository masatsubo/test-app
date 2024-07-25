import React, { useState } from 'react';
import ProductItem from './ProductItem';

const products = {
  寿司: [
    { id: 1, name: '寿司１', image: 'sushi_ootoro_akami_10kan.png', price: 1500, description: '新鮮な大トロと赤身の贅沢な握り', rating: 4.5 },
    { id: 2, name: '寿司２', image: 'sushi_chuutoro_10kan.png', price: 1300, description: '程よい脂がのった中トロの握り', rating: 4.3 },
    { id: 3, name: '寿司３', image: 'sushi_akami_8kan.png', price: 1000, description: '赤身の旨味が凝縮された握り', rating: 4.2 },
    { id: 4, name: '波', image: 'sushi_nami_20kan.png', price: 2800, description: '様々な種類の握りが楽しめる豪華セット', rating: 4.7 },
    { id: 5, name: '浜', image: 'sushi_hama_24kan.png', price: 3400, description: '新鮮な海の幸を贅沢に使用した特選セット', rating: 4.8 },
    { id: 6, name: '渚', image: 'sushi_nagisa_36kan.png', price: 5200, description: '贅沢な握りと巻物の豪華な饗宴', rating: 4.9 },
    { id: 7, name: '海', image: 'sushi_umi_40kan.png', price: 6000, description: '最高級ネタを使用した究極の寿司セット', rating: 5.0 },
  ],
  鮮魚: [
    { id: 8, name: '鮭', image: 'sake03.jpg', price: 1000, origin: '北海道', description: '脂がのった北海道産の新鮮な鮭', rating: 4.7 },
    { id: 9, name: 'ヤマメ', image: 'yamame01.jpg', price: 300, origin: '長野県', description: '清流で育った爽やかな風味のヤマメ', rating: 4.2 },
    { id: 10, name: 'あんこう', image: 'ankou.jpg', price: 1200, origin: '宮城県', description: '冬の味覚の王様、ふわふわの食感', rating: 4.5 },
    { id: 11, name: '赤魚', image: 'akauo.jpg', price: 300, origin: '青森県', description: '脂がのってふっくらとした身が特徴', rating: 4.0 },
    { id: 12, name: 'イワシ', image: 'urumeiwasi_1.jpg', price: 150, origin: '千葉県', description: 'たんぱく質豊富な栄養満点の魚', rating: 3.8 },
    { id: 13, name: 'カサゴ', image: 'akakasago.jpg', price: 1500, origin: '静岡県', description: '鮮やかな色と味わい深い白身魚', rating: 4.3 },
  ],
  惣菜: [
    { id: 14, name: 'タコ唐揚げ', image: 'takokara.jpg', price: 300, description: 'カリッと揚がった香ばしいタコの唐揚げ', rating: 4.0 },
    { id: 15, name: 'キスの天ぷら', image: 'kiss.jpg', price: 400, description: 'サクサク軽い衣のキスの天ぷら', rating: 4.1 },
  ],
};

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('寿司');

  return (
    <div className="product-list">
      <div className="category-buttons">
        {Object.keys(products).map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
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