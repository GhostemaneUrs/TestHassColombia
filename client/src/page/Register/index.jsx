import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../../assets/img/register.svg";
import { signUp } from "../../utils/user";
import Message from "../../components/Message/Message";
const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onSubmitRegister = (e) => {
    e.preventDefault();
    if (
      newUser.name !== "" ||
      newUser.email !== "" ||
      newUser.password !== ""
    ) {
      signUp(newUser, setNewUser);
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
    <div className="container-1400 h-screen m-auto flex justify-center items-center">
      <div className="lg:w-2/5 hidden lg:block">
        <img src={register} alt="register-img" />
      </div>
      <div className="h-full md:xl:lg:w-6/12 flex justify-center items-center">
        <div className="m-auto py-10 px-10 sm:p-20 xl:w-10/12 bg-white shadow">
          <div className="space-y-4 text-center">
            <p className="font-medium text-lg text-gray-600">Sign Up!</p>
          </div>

          {error && <Message type="error"> {error} </Message>}
          <div role="hidden" className="mt-12 border-t" />

          <form
            action=""
            onSubmit={onSubmitRegister}
            className="space-y-6 py-6"
          >
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Full Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div className="space-y-6">
              <input
                type="password"
                placeholder="Your Password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
            </div>

            <div>
              <button className="w-full px-6 py-3 rounded-xl bg-indigo-600 transition hover:bg-indigo-700 mb-5">
                <span className="font-semibold text-white text-lg">
                  Register
                </span>
              </button>
              <Link to="/" className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide text-blue-600 hover:text-blue-700">
                  Do you already have an account with us?
                </span>
              </Link>
            </div>
            <div role="hidden" className="mt-12 border-t" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
