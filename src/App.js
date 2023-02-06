import React from 'react'

import RegisterScreen from "./components/RegisterScreen"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About2 from "./components/About2"
import './App.css';
import Admin from './components/Admin';
import Viewbook from './components/Viewbook';
import Home from './components/Home';
import BookState from './context/content/BookState';
import Homemain from './components/Homemain'
import AddBookScreen from './components/AddBookScreen'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Adminlogin from './components/Adminlogin'
import Shoppingcart from './components/Shoppingcart'
import Profile from './components/Profile'
import Login from './components/Login'
function App() {
 
  // const {shows}=context;
  // const [show, setshow] = useState(true);
  //  useEffect(() => {setshow(localStorage.getItem('authtoken'));console.log('fff')},[setshow])
  return (
    <div className="App">
     <BookState>
     <Router>
     <Nav/>
     <Routes>
       <Route path="/" element={<Home/>} /> 
      <Route path="/landing" element={<Homemain/>} />
      <Route path="/admin" element={<Adminlogin/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/adminal" element={<Admin/>} />
      <Route path="/signup" element={<RegisterScreen/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About2/>} />
      <Route path="/view" element={<Viewbook/>} />
      <Route path="/addbook" element={<AddBookScreen/>} />
      <Route path="/cart" element={<Shoppingcart/>} />
      <Route path="/profile" element={<Profile/>} />
      
     
      
    </Routes>
     
     <Footer/>
     </Router>
    </BookState>
     
    </div>
  );
}

export default App;
