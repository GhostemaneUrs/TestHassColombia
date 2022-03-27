import axios from "axios";
import Swal from "sweetalert2";
const route = "http://localhost:9000/user/";

export const logIn = async (user, setUser, setLoginStatus) => {
  await axios
    .post(route + "login", user)
    .then((res) => {
      setUser({
        name: "",
        email: "",
        password: "",
      });
      setLoginStatus(true);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 2000,
        showConfirmButton: false,
        text: "Invalid credentials",
      });
    });
};

export const signUp = async (newUser, setNewUser) => {
  await axios
    .post(route + "register", newUser)
    .then((res) => {
      setNewUser({
        name: "",
        email: "",
        password: "",
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 2000,
        showConfirmButton: false,
        text: "Error creating user",
      });
    });
};
