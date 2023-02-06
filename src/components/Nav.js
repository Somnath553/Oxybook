import React,{useContext} from 'react'
import BookContext from '../context/content/BookContext'
import logo from "./elements/logo.png"
import Usermenu from './Usermenu'
import {Link,useNavigate} from "react-router-dom";
function Nav() {
  const  context=useContext(BookContext);
  const {shows}=context;

  return (
    <><nav className="navbar navbar-expand-lg  fixed-top bg-[#e3f2fd] ">
    <div className="container navi" width="100%">
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="ti-align-justify navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/"><img src={logo} alt="logo"className="img-responsive" height="auto" width="30%"/></Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
          <li className="nav-item">
            <Link to="/" className="nav-link " aria-current="page" ><b>Home</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link " aria-current="page"><b>About Us</b></Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link " aria-current="page"><b>Contact Us</b></Link>
          </li>
          <li className="nav-item">
           {shows && <Link to="admin" className="nav-link" ><b>Admin</b></Link>}
          </li>
          <li className="nav-item">
           {!shows && <Link to="/addbook" className="nav-link" ><b>Sell</b></Link>}
          </li>

        </ul>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
         {shows ? <><Link to="/signup" className="btn btn-primary me-md-2" href="./signup.html" role="button"><b>Sign Up</b></Link>
          <Link to="/login" className="btn btn-primary me-md-2"  role="button"><b>Log In</b></Link>
          </>:
           <Usermenu   />}
        </div>
      </div>
    </div>

  </nav></>
  )
}

export default Nav