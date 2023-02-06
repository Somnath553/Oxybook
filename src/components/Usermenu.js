import React,{useState,useContext} from 'react'
import BookContext from '../context/content/BookContext'
import {useNavigate} from "react-router-dom"
function Usermenu() {
const [show, setshow] = useState('opacity-0');
const  context=useContext(BookContext);
const {setshows,data}=context;
const navigate = useNavigate();
  return (
    // <!-- component -->
<div className="flex justify-end ">
    <div className="relative inline-block ">
        {/* <!-- Dropdown toggle button --> */}
        <button className="relative z-10 flex items-center p-2 " onClick={()=>{show==='ani'|| show==='opacity-0'?setshow('ani2'):setshow('ani')}}>
        <div className=" w-14 h-14 relative flex justify-center items-center rounded-full bg-transparent text-xl text-white uppercase border-4 border-cyan-500 ">
        <svg className="absolute w-10 h-10 text-white stroke-cyan-500 hover:fill-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
    </div>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div className={`${show}   absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl `}>
            <div href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
                <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar"/>
                <div className="mx-1">
                    <h1 className="text-sm font-semibold text-gray-700 ">{data.name}</h1>
                    <p className="text-sm text-gray-500 ">{data.email}</p>
                </div>
            </div>

            <hr className="border-gray-200  "/>
            
            <div href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 " onClick={() => {navigate('/profile')}}>
                view profile
            </div>
            
           
            <div onClick={() =>{localStorage.removeItem("authtoken");setshows(true)}} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
                Sign Out
            </div>
        </div>
    </div>
</div>
  )
}

export default Usermenu
