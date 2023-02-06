import React,{useContext} from 'react'
import BookContext from '../context/content/BookContext'
import {useNavigate} from "react-router-dom"



function Shoppingcart() {
  const navigate = useNavigate();
  const  context=useContext(BookContext);
  const {viewbooks,data}=context;
  
    const{image,title,author,price}=viewbooks;
  return (
    <div className="App">
    <section >
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p><span class="h2 !text-black" style={{color:"black"}}>Shopping Cart </span><span class="h4">(1 item in your cart)</span></p>
  
          <div class="card mb-4">
            <div class="card-body p-4">
  
              <div class="row align-items-center">
                <div class="col-md-2">
                  <img src={image}
                    class="img-fluid" alt="Genericplaceholderimage"/>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Name</p>
                    <p class="lead fw-normal mb-0">{title}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Author</p>
                    <p class="lead fw-normal mb-0">
                    {author}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                    <p class="lead fw-normal mb-0">1</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <p class="lead fw-normal mb-0">${price}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <p class="lead fw-normal mb-0">${parseInt(price)+2.5}</p>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
  
          <div class="card mb-5">
            <div class="card-body p-4 xxx">
  
              <div class="">
                <div class="mb-0 me-5 flex justify-between">
                  <span class="small text-muted me-2">address:</span> <span
                    class="lead fw-normal">{data.address}</span>
                  <span class="small text-muted me-2">Order total:</span> <span
                    class="lead fw-normal">${parseInt(price)+2.5}</span>
                </div>
              </div>
  
            </div>
          </div>
  
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-light btn-lg me-2">Continue shopping</button>
            <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{alert("Your book will be saved"); navigate('/')}}>Buy Now</button>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Shoppingcart