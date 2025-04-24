import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import ProductSection from '../components/ProductSection';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container-fluid">
      <Navbar onSearch={setSearchTerm} />
      <Carousel />
      <ProductSection searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
