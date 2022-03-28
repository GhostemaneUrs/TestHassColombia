import React, { useState } from "react";
import { addReceipt } from "../../utils/receipt";
import Message from "../Message";
const FormProducts = ({ saveReceipts }) => {
  const [newProduct, setNewProduct] = useState({
    status: "",
    owner: "",
    weight: "",
    creationDate: "",
    price: "",
    unitPrice: "",
    createBy: "",
    direction: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newProduct.owner !== "" &&
      newProduct.creationDate !== "" &&
      newProduct.price !== ""
    ) {
      addReceipt(newProduct, saveReceipts, setNewProduct);
    } else {
      setError("All fields are required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    setError("");
  };

  return (
    <div className="md:w-1/2 lg:w-3/5 xl:w-2/5 mx-5 mb-5">
      <h1 className="font-black text-center text-3xl mb-1">Receipt Tracking</h1>

      <p className="text-lg text-center mb-1">
        Add receipts and {""}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      {error && <Message type="error"> {error} </Message>}
      <form
        className="bg-white shadow-md rounded-xl py-10 px-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-1">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Status
          </label>
          <input
            id="owner"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            placeholder="Status"
            value={newProduct.status}
            onChange={(e) =>
              setNewProduct({ ...newProduct, status: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Name of owner
          </label>
          <input
            id="owner"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            placeholder="Name owner"
            value={newProduct.owner}
            onChange={(e) =>
              setNewProduct({ ...newProduct, owner: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="weight"
            className="block text-gray-700 uppercase font-bold"
          >
            Weight
          </label>
          <input
            id="weight"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            placeholder="Weight"
            value={newProduct.weight}
            onChange={(e) =>
              setNewProduct({ ...newProduct, weight: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="creationDate"
            className="block text-gray-700 uppercase font-bold"
          >
            Creation date
          </label>
          <input
            id="creationDate"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            placeholder="Creation Date"
            value={newProduct.creationDate}
            onChange={(e) =>
              setNewProduct({ ...newProduct, creationDate: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="price"
            className="block text-gray-700 uppercase font-bold"
          >
            Price
          </label>
          <input
            id="price"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="unitPrice"
            className="block text-gray-700 uppercase font-bold"
          >
            Unit Price
          </label>
          <input
            id="unitPrice"
            type="text"
            placeholder="Unit Price"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            value={newProduct.unitPrice}
            onChange={(e) =>
              setNewProduct({ ...newProduct, unitPrice: e.target.value })
            }
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="createBy"
            className="block text-gray-700 uppercase font-bold"
          >
            Create By
          </label>
          <input
            id="createBy"
            type="text"
            placeholder="Create By"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            value={newProduct.createBy}
            onChange={(e) =>
              setNewProduct({ ...newProduct, createBy: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="direction"
            className="block text-gray-700 uppercase font-bold"
          >
            Direction
          </label>
          <input
            id="direction"
            type="text"
            placeholder="Direction"
            className="border-2 w-full p-2 mt-2 placeholder:placeholder-gray-400 rounded-md"
            value={newProduct.direction}
            onChange={(e) =>
              setNewProduct({ ...newProduct, direction: e.target.value })
            }
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={"Add Receipt"}
        />
      </form>
    </div>
  );
};

export default FormProducts;
