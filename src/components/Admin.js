import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import Userlist from './Userlist';
function Admin() {
    const nav = useNavigate();
    const logf = () => {
           localStorage.removeItem('adminauth');
           nav('/admin');
    }
    const [user, setUser] = useState([])
    const userget=async()=>{
        const response=await fetch (`https://oxybook-backend.onrender.com/api/admin/getuserdata`,{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('adminauth')
            }
        });
        const json= await response.json();
        setUser(json);
    }
    useEffect(() => {
       userget();
    })
    return (
        <>
            <div className="container mx-auto px-4 sm:px-8">
                <h1 className="text-2xl font-bold mt-10">Admin Dashboard</h1>
                <div className="py-8">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-semibold leading-tight">Admin Dashboard</h2>
                        <h2 className="text-2xl font-semibold leading-tight">Id:{localStorage.getItem('name')}</h2>
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => { logf() }}>Logout</button>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Client 
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Email
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Number
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            No. of Books
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Delete
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <Userlist/> */}
                                    {user.map((user,index) => {return <Userlist key={index} user={user} userget={userget}/>})}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin