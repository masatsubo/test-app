import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../utils/api';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const productData = await getProductById(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>価格: ¥{product.price}</p>
      <p>産地: {product.origin}</p>
      <p>在庫: {product.stock}</p>
      <p>{product.description}</p>
      <button>カートに追加</button>
    </div>
  );
}

export default ProductDetail;