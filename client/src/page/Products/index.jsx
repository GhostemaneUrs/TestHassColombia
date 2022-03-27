import React from "react";
import Header from "../../components/Header";
import FormProducts from "../../components/Form";
import Receipts from "../../components/Receipts/index";

const Products = () => {
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-10 md:flex justify-center">
        <FormProducts />
        <Receipts />
      </div>
    </div>
  );
};

export default Products;
