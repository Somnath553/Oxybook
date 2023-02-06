import BookContext from "./BookContext";
import { useState } from "react";
 const BookState=(props)=>{
    
    const [books,setbooks]=useState([]);
    const getall=async()=>{
        const response=await fetch (`https://oxybook-backend.onrender.com/api/books/getallbooks`,{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            }
        });
        const json= await response.json();
        setbooks(json);
        return json;
    }
    const getallbytag=async(tag)=>{
        const response=await fetch (`https://oxybook-backend.onrender.com/api/books/getbytag`,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            }, 
            body: JSON.stringify({tag:tag})
        });
        const json= await response.json();
        console.log(json);
        setbooks(json);
        return json;
    }

    const [viewbooks,setviewbooks]=useState("");
    // const [show,setshow]=useState(false);
    const [shows, setshows] = useState(true);
    const [data, setdata] = useState(true);
    const getuser=async()=>{
        const response=await fetch (`https://oxybook-backend.onrender.com/api/user/getuser`,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            }, 
        
        });
        const json= await response.json();
        setdata(json);
    }
    const [sbook,setsbook] = useState([])
   const bookforsell=async()=>{
    const response=await fetch (`https://oxybook-backend.onrender.com/api/books/getbooksbyuser`,{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            }, 
        
        });
        const json= await response.json();
        setsbook(json);
        return json;
   }
   const deletebook =async (id)=>{
    const response=await fetch (`https://oxybook-backend.onrender.com/api/books/delete`,{
            method: 'DELETE',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            }, 
            body: JSON.stringify({id:id})
        });
        const json= await response.json();
        await bookforsell();
        console.log(json);
   }
    return (
        <BookContext.Provider value={{books,setbooks,viewbooks,setviewbooks,shows,setshows,getall,getallbytag,data,getuser,bookforsell,sbook,setsbook,deletebook}}>
            {props.children}
        </BookContext.Provider>
       )
 } 
 export default BookState;