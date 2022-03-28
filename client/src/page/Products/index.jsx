import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import FormProducts from "../../components/Form";
import Receipts from "../../components/Receipts/index";
import { deleteRecet, listReceipts } from "../../utils/receipt";
import FormEditProducts from "../../components/FormEdit";

const Products = () => {
  const [update, setUpdate] = useState(false);
  const [receipts, saveReceipts] = useState([]);

  useEffect(() => {
    listReceipts(saveReceipts);
  }, []);

  const deleteData = (id) => {
    const receiptsFilter = receipts.filter(
      (receipt) => receipt.idProductos !== id
    );
    saveReceipts(receiptsFilter);
    deleteRecet(id);
  };

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-5 md:flex justify-center">
        {update ? (
          <FormEditProducts update={update} setUpdate={setUpdate} />
        ) : (
          <FormProducts saveReceipts={saveReceipts} />
        )}
        <Receipts
          update={update}
          receipts={receipts}
          setUpdate={setUpdate}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
};

export default Products;
