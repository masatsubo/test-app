import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <ProductList />
    </div>
  );
}

export default Home;