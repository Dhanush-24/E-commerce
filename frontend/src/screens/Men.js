import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductSection from '../components/ProductSection';

const Men = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Navbar onSearch={setSearchTerm} /> 
      <ProductSection searchTerm={searchTerm} />
    </div>
  );
};

export default Men;
