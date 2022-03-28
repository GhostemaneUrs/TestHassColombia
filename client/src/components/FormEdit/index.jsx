import React, { useState } from "react";
import { editReceipt } from "../../utils/receipt";
import Message from "../Message";
const FormEditProducts = ({ update, setUpdate, saveReceipts }) => {
  const [error, setError] = useState("");

  const {
    titular,
    peso,
    fecha_creacion,
    precio,
    precio_unidad,
    creado_por,
    direccion,
  } = update;

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (
      update.titular !== "" &&
      update.fecha_creacion !== "" &&
      update.precio !== ""
    ) {
      editReceipt(update, saveReceipts);
      setUpdate(false);
      window.location.reload();
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

      <p className="text-lg text-center mb-5">
        Edit receipts and {""}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      {error && <Message type="error"> {error} </Message>}
      <form
        className="bg-white shadow-md rounded-xl py-10 px-5"
        onSubmit={handleSubmitEdit}
      >
        <div className="mb-3">
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
            value={titular}
            onChange={(e) => setUpdate({ ...update, titular: e.target.value })}
          />
        </div>
        <div className="mb-3">
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
            value={peso}
            onChange={(e) => setUpdate({ ...update, peso: e.target.value })}
          />
        </div>
        <div className="mb-3">
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
            value={fecha_creacion}
            onChange={(e) =>
              setUpdate({ ...update, fecha_creacion: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
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
            value={precio}
            onChange={(e) => setUpdate({ ...update, precio: e.target.value })}
          />
        </div>
        <div className="mb-3">
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
            value={precio_unidad}
            onChange={(e) =>
              setUpdate({ ...update, precio_unidad: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
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
            value={creado_por}
            onChange={(e) =>
              setUpdate({ ...update, creado_por: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
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
            value={direccion}
            onChange={(e) =>
              setUpdate({ ...update, direccion: e.target.value })
            }
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={"Edit Receipt"}
        />
      </form>
    </div>
  );
};

export default FormEditProducts;
