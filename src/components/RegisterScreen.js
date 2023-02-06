import React, { useState, useContext } from 'react'
import BookContext from '../context/content/BookContext'
import logo from "./elements/logo.png"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("")
  const navigate = useNavigate();
  const context = useContext(BookContext);
  const { setshows, getall, getuser } = context;
  const submitHandler = async (e) => {
    e.preventDefault();

    if (number.length !== 10) {
      setMsg("Invalid mobile number!");
      setType("red")
    }
    else if (cpass !== pass) {
      setMsg("Password did not match!");
      setType("red")
    }

    else {
      setMsg("Registered Successfully!");
      setType("green")

      const response = await fetch(`https://oxy-book-backend.herokuapp.com/api/user/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: pass, number: number, address: address })
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('authtoken', json.authtoken);
        setshows(false);
        toast.success('Registration success', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        await getall();
        await getuser();
        navigate('/');

      }
      else {
        alert(json.message);
      }
    }
  };

  return (
    <>
      <div className="registerContainer">
        <section className="registerDescContainer">
          <h1>Welcome to explore the widest variety of books</h1>
          <img src={logo} alt="logo" />
        </section>

        <section className="registerFormContainer">
          <div className={`messageBox ${type}`}>{msg}</div>
          <form className="registerForm" onSubmit={submitHandler}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="password"
              required
            />
            <input
              type="password"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              placeholder="confirm password"
              required
            />
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="mobile number"
              required
            />
            <textarea
              cols="30"
              rows="10"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
            <input className="submitButton" type="submit" value="Register" />
          </form>
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  );
};

export default RegisterScreen;
