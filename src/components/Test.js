//STEP 1 -- IMPORT REACT
import React, { useState } from 'react'
import axios from 'axios';
// import Navbar from './Navbar'

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function UserRegistration() {
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [epic, setEPic] = useState("");
    const [msg, setMessage] = useState("");
    const [picuploadmsg, setPicUploadMessage] = useState("");

    const UploadImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
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
                setPicUploadMessage("PICTURE UPLOADED")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        //CREATE JSON AND STORE ALL USER INPUT
        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress,
            emppicture: epic
        }

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpCountry('')
        setEmpAddress('')
        setPicUploadMessage('')
    }

    return (
        <>
            {/* <Navbar /> */}

            <br />
            <h3>REGISTRATION FORM</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ename}
                    onChange={(e) => setEmpName(e.target.value)} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={eemail}
                    onChange={(e) => setEmpEmail(e.target.value)} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={emobile}
                    onChange={(e) => setEmpmobile(e.target.value)} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input type="date" value={edob}
                    onChange={(e) => setEmpDOB(e.target.value)} />
                <br /><br />

                <input type="password" value={epass}
                    onChange={(e) => setEmpPass(e.target.value)} placeholder="Enter Password"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={(e) => setEmpGender(e.target.value)} />
                <label>Female</label>
                <br /><br />

                <select value={ecountry} onChange={(e) => setEmpCountry(e.target.value)}>
                    <option value="AF">Afghanistan</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
                    onChange={(e) => setEmpAddress(e.target.value)} rows="3" >
                </textarea>
                <br /><br />

                <input type="file" onChange={UploadImage} />
                <b style={{ color: "blue" }}> {picuploadmsg}</b>
                <br /><br />

                <input type="submit" value="REGISTER" />

            </form>
        </>)
}

//STEP 3 -- EXPORT IT TO USE IT
export default UserRegistration