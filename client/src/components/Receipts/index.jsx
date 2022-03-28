import React from "react";
import Receipt from "./receipt";

const index = ({ receipts, update, setUpdate, deleteData }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center mb-1">List of Receipts</h2>
      <p className="text-xl text-center mb-1 ">
        Manage your {""}
        <span className="text-indigo-600 font-bold"> Receipts</span>
      </p>
      <div className="scroll">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
          {receipts.map((receipt) => (
            <Receipt
              key={receipt.idProductos}
              update={update}
              receipt={receipt}
              setUpdate={setUpdate}
              deleteData={deleteData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
