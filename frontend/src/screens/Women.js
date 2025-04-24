import React, { useState } from "react";
import WomensProducts from "../data/WomensProducts";
import WomensItems from "../components/WomensItems";
import Navbar from "../components/Navbar";

const WomensPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts =
    searchTerm.trim() === ""
      ? WomensProducts
      : WomensProducts.filter((product) =>
          product.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="container bg-white">
      <Navbar onSearch={handleSearch} searchTerm={searchTerm} />

      <div className="row mt-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <WomensItems key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-muted w-100">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default WomensPage;
