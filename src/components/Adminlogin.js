import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
function Adminlogin() {
    const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const submitHandler=async (e)=>{
             e.preventDefault();
             const response=await fetch (`https://oxybook-backend.onrender.com/api/admin/login`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:email,password:pass})
  });
  const json=await response.json();
  // console.log(json.success);
  if(json.success)
  {
     localStorage.setItem('adminauth',json.authtoken);
    localStorage.setItem('name',email);
    navigate('/adminal'); 
  }
  else{
    alert(json.error);
  }
  }
  return (
    <div class="containers mt-20">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={submitHandler}>
        <h1 className="font-bold text-purple-500  text-2xl ">Admin Login</h1>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input w-full" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="User name / Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password"/>
				</div>
				<button class="button login__submit" >
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}
export default Adminlogin