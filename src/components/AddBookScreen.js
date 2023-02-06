import React, { useState,useContext } from 'react'
// import './css/AddBookScreen.css'
import BookContext from '../context/content/BookContext'
import book from "./elements/book.png"
const AddBookScreen = () => {
    const [bname, setBname] = useState('')
    const [author, setAuthor] = useState('')
    // const [image, setImage] = useState('')
    const [genre, setGenre] = useState('Romance')
    const [coverType, setCoverType] = useState('Paperback')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [pages, setPages] = useState('')
    const [msg, setMsg] = useState('')
    const [type, setType] = useState('')
    const [epic, setEPic] = useState("");
    const [show, setShow] = useState(false);
    const [mg,setmg] = useState('');
    const  context=useContext(BookContext);
  const {getall}=context;
    const addHandler = async (e) => {
        e.preventDefault()
        
        console.log(author,bname,genre,coverType,desc,price,pages,msg,type,epic)
        const response=await fetch (`https://oxybook-backend.onrender.com/api/books/addbooks`,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('authtoken')
            },
            body: JSON.stringify({author:author,title:bname,tag:genre,description:desc,image:epic,price:price})
        });
        // const json= await response.json();
        console.log(response)
        await getall();
        setMsg('Book Added Successfully')
        setType('green')
    }

    const uploadHandler = async (e) => {
        e.preventDefault()
        setShow(true)
        let imgs = e.target.files[0]
        if (!imgs) return alert("File not exist.")
        //5242880 == 5 mb
        if (imgs.size > 1024 * 1024 * 10) { setmg("Size too large!");setShow(false); return 0}
        if (imgs.type !== 'image/jpeg' && imgs.type !== 'image/png') { setmg("fileformat incorrect");setShow(false);return 0}

        let data = new FormData()
        data.append('file', imgs)
        data.append('upload_preset', "zpn6u7rm")
        data.append('cloud_name', "somug")
        fetch(' https://api.cloudinary.com/v1_1/somug/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.url)
                setEPic(data.url)
                setmg("Upload success");
                setShow(false);
                // setPicUploadMessage("PICTURE UPLOADED")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <form onSubmit={addHandler} className="mt-20">
                <table className='addBookTable flex justify-center m-0 mt-7 px-10' style={{backgroundImage: "url(" + book + ")"}}>
                    <thead>
                        
                    </thead>
                    <tbody>
                        <tr >
                            <td colSpan='2'>
                            <div className={`messageBox ${type}`}>{msg}</div>
                            </td>
                        </tr>
                        <tr >
                            <td >
                                <label htmlFor='bk_name'>Book Name</label>
                            </td>
                            <td>
                                <input style={{backgroundColor: "black"}}
                                    type='text'
                                    value={bname}
                                    onChange={(e) => setBname(e.target.value)}
                                    id='bk_name'
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_image'>Book Image</label>
                            </td>
                            <td>
                                <input style={{backgroundColor: "black"}}
                                    className='imageInput'
                                    type='file'
                                    onChange={uploadHandler}
                                    id='bk_image'
                                />
                                {show ?<>
                                    <div class="spinner-border text-danger  " role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                    <p className="text-red-500 font-bold">Uploading...</p>
                                </>:<h1 className="text-green-500 font-bold">{mg}</h1> }

                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_author'>Author</label>
                            </td>
                            <td>
                                <input style={{backgroundColor: "black"}}
                                    type='text'
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    id='bk_author'
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_genre'>
                                    Genre
                                </label>
                            </td>
                            <td>
                                <select style={{backgroundColor: "black"}}
                                    name='genre'
                                    id='bk_genre'
                                    onChange={(e) =>
                                        setGenre(e.target.value)
                                    }
                                >
                                    <option value='Romance'>
                                        Romance
                                    </option>
                                    <option value='Sci-Fi'>Sci-Fi</option>
                                    <option value='Fiction'>Fiction</option>
                                    <option value='Novel'>Novel</option>
                                    <option value='Mystery'>Mystery</option>
                                    <option value='Fantasy'>Fantasy</option>
                                    <option value='Thriller'>Thriller</option>
                                    <option value='Biography'>Biography</option>
                                    <option value='Children Literature'>Childrens' Literature</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_cover_type'>
                                    Cover Type
                                </label>
                            </td>
                            <td>
                                <select style={{backgroundColor: "black"}}
                                    name='cover_type'
                                    id='bk_cover_type'
                                    onChange={(e) =>
                                        setCoverType(e.target.value)
                                    }
                                >
                                    <option value='Paperback'>
                                        Paperback
                                    </option>
                                    <option value='Hardcover'>Hardcover</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_description'>
                                    Book Description
                                </label>
                            </td>
                            <td>
                                <textarea style={{backgroundColor: "black"}}
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    id='bk_description'
                                    cols='30'
                                    rows='5'
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='bk_price'>
                                    Book Price(&#8377;)
                                </label>
                            </td>
                            <td>
                                <input style={{backgroundColor: "black"}}
                                    type='text'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    id='bk_price'
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label htmlFor='bk_pages'>Book Pages</label>
                            </td>
                            <td>
                                <input style={{backgroundColor: "black"}}
                                    type='text'
                                    value={pages}
                                    onChange={(e) => setPages(e.target.value)}
                                    id='bk_count'
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='2'>
                            <button class="mt-5 w-96 mb-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 disabled:bg-yellow-300 rounded" type="Submit" value="Submit" disabled={show}>
                                            ADD
                            </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default AddBookScreen
