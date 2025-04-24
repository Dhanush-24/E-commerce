import React, { useState } from "react";
import { LivingProducts } from "../data/LivingProducts";
import LivingItems from "../components/LivingItems";
import Navbar from '../components/Navbar';

const Living = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter the products based on the search term
  const filteredProducts = LivingProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by product name
  );

  return (
    <div className="container bg-white">
      <Navbar onSearch={handleSearch} searchTerm={searchTerm} />
      <div className="row mt-5">
        {filteredProducts.map((product) => (
          <LivingItems key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Living;
