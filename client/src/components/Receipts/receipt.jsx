import React from "react";
import "moment/locale/es";
import moment from "moment";

const Receipt = ({ receipt, deleteData, update, setUpdate }) => {
  return (
    <div className="flex flex-col justify-between mb-3 mx-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <div className="w-full">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Status: {""}
          <span
            className={
              receipt.estado === "Compra"
                ? "normal-case font-normal text-indigo-600"
                : "normal-case font-normal text-green-600"
            }
          >
            {receipt.estado}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Name of owner: {""}
          <span className="normal-case font-normal">{receipt.titular}</span>
        </p>
        {receipt.peso ? (
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Weight: {""}
            <span className="normal-case font-normal">{receipt.peso}</span>
          </p>
        ) : null}
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Creation date: {""}
          <span className="normal-case font-normal">
            {moment(receipt.fecha_creacion).format("DD/MM/YYYY")}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Price: {""}
          <span className="normal-case font-normal">{receipt.precio}</span>
        </p>
      </div>
      {receipt.precio_unidad ? (
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Unit price: {""}
          <span className="normal-case font-normal">
            {receipt.precio_unidad}
          </span>
        </p>
      ) : null}

      {receipt.creado_por ? (
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Create by: {""}
          <span className="normal-case font-normal">{receipt.creado_por}</span>
        </p>
      ) : null}

      {receipt.direccion ? (
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Direction: {""}
          <span className="normal-case font-normal">{receipt.direccion}</span>
        </p>
      ) : null}

      <div className="flex items-center justify-between mt-5">
        <button
          type="button"
          onClick={() => {
            if (update) {
              setUpdate(false);
            } else {
              setUpdate(receipt);
            }
          }}
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
        >
          editar
        </button>
        <button
          type="button"
          onClick={() => deleteData(receipt.idProductos)}
          className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Receipt;
