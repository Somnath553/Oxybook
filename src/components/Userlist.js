import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userlist(props) {
    const { user } = props;
    const { name, email, number, _id } = user;
    const deleuser = async () => {

        if (window.confirm("Do you Want to delete this user")) {

            await fetch(`https://oxybook-backend.onrender.com/api/admin/deleteuser`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('adminauth')
                },
                body: JSON.stringify({ id: _id }),
            });
            toast.success('User Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            props.userget();
        }
    }
    return (
        <>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {name}
                            </p>
                            {/* <p className="text-gray-600 whitespace-no-wrap">000004</p> */}
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{email}</p>
                    {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{number}</p>
                    {/* <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                        <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Paid</span>
                    </span>
                </td>
                <td className="px-5 py-5 bg-white text-sm ">
                    <button className="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block" onClick={() => { deleuser() }}>DELETE</button>
                </td>

            </tr>
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
    )
}

export default Userlist