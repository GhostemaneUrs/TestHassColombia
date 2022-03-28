import axios from "axios";
import Swal from "sweetalert2";
const route = "http://localhost:9000/receipt/";

export const addReceipt = async (receipt, saveReceipts, setNewProduct) => {
  await axios
    .post(route + "create", receipt)
    .then((res) => {
      return axios
        .get(route + "get")
        .then((res) => {
          setNewProduct({
            status: "",
            owner: "",
            weight: "",
            creationDate: "",
            price: "",
            unitPrice: "",
            createBy: "",
            direction: "",
          });
          saveReceipts(res.data);
          Swal.fire({
            icon: "success",
            text: "Successful save",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      if (err.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error creating receipt",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
};

export const listReceipts = async (saveReceipts) => {
  await axios
    .get(route + "get")
    .then((res) => {
      saveReceipts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteRecet = async (id) => {
  console.log("id", id);
  return await axios
    .delete(route + "delete/" + id)
    .then((res) => {
      Swal.fire({
        icon: "success",
        text: "Successful delete",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

export const editReceipt = async (receipt, saveReceipts) => {
  await axios
    .put(route + "edit", receipt)
    .then((res) => {
      return axios
        .get(route + "get")
        .then((res) => {
          saveReceipts(res.data);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error editing receipt",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
