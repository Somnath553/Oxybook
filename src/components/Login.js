import React, { useState, useContext } from 'react'
import BookContext from '../context/content/BookContext'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const context = useContext(BookContext);
  const { setshows, getall, getuser, bookforsell } = context;
  const submitHandler = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`https://oxybook-backend.onrender.com/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: pass })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('authtoken', json.authtoken);
      setshows(false);
      await getall();
      await getuser();
      await bookforsell();
      navigate('/');

    }
    else {
      toast.error(json.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <section class="section-login">
      <div class="container">
        <div class="form-container">

          <form class="form" onSubmit={submitHandler} >
            <div class="form-control">
              <input type="text" class="input username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
            </div>
            <div class="form-control">
              <input type="password" class="input password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" />
            </div>
            <button class="btn btn-login">Log In</button>
          </form>

          <div class="sign-up">
            <h2 class="text">Don't have an Account?</h2>
            <button class="btn btn-sign-up" onClick={() => { navigate('/signup'); }}>Sign Up</button>
          </div>

        </div>
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
    </section>
  )
}

export default Login



