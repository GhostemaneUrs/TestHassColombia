import React from "react";

const Receipt = () => {
  return (
    <div className="mb-3 mx-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name of owner: {""}
        <span className="normal-case font-normal">Hass Colombia</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Weight: {""}
        <span className="normal-case font-normal">128kg</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Creation date: {""}
        <span className="normal-case font-normal">27/03/2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Price: {""}
        <span className="normal-case font-normal">500.000</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Unit price: {""}
        <span className="normal-case font-normal">10kg</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Create by: {""}
        <span className="normal-case font-normal">Andres Jaramillo</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Direction: {""}
        <span className="normal-case font-normal">Calle 41b # 45a-20</span>
      </p>
      <div className="flex items-center justify-between mt-5">
        <button
          type="button"
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
        >
          editar
        </button>
        <button
          type="button"
          className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Receipt;
