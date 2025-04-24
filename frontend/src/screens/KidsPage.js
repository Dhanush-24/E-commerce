import React, { useState, useEffect } from 'react';
import { kidsProducts } from "../data/KidsProducts";
import KidsItem from "../components/KidsItems";
import Navbar from '../components/Navbar';

const KidsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredKidsProducts, setFilteredKidsProducts] = useState(kidsProducts);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // If search is cleared, show all products
      setFilteredKidsProducts(kidsProducts);
    } else {
      const filtered = kidsProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredKidsProducts(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="container bg-white">
      <Navbar onSearch={setSearchTerm} searchTerm={searchTerm} />

      <div className="row mt-5">
        {filteredKidsProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredKidsProducts.map((product) => (
            <KidsItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default KidsPage;
