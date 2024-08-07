import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        {/* バナー画像 */}
      </div>
      <div className="content">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}

export default Home;