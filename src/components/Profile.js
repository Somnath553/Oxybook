import React,{useContext} from 'react'
import BookContext from '../context/content/BookContext'
import Userbook from './Userbook';
function Profile() { 
  const  context=useContext(BookContext);
  const {data}=context;
  return (
   <><section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-6 mb-4 mb-lg-0">
              <div class="card mb-2" style={{width:"50rem"}}>
                <div class="row g-0">
                  <div class="col-md-3 gradient-custom text-center text-white" style={{height:"23rem"}}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" class="img-fluid my-5"  />
                    <h5>{data.name}</h5>
                    <p>Web Designer</p>
                    <i class="far fa-edit mb-5"></i>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-4">
                      <h6 style={{color:"black"}}>Information</h6>
                      <hr class="mt-0 mb-4" style={{color:"black"}}></hr>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6 style={{color:"black"}}>Email</h6>
                          <p class="text-muted" style={{color:"black"}}>{data.email}</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6 style={{color:"black"}}>Phone</h6>
                          <p class="text-muted" style={{color:"black"}}>{data.number}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr class="mt-0 mb-4" style={{color:"black"}}></hr>
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6 style={{color:"black"}}>Your orders</h6>
                          <p class="text-muted">Fiction Book</p>
                          <p class="text-muted">Harry Potter</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6 style={{color:"black"}}>coupons</h6>
                          <p class="text-muted">NEW300</p>
                          <p class="text-muted">WEL800</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <div class="  border-t-4 py-4 border-black mx-12">
    <h1 className="text-left font-bold text-blue-700 ml-8 text-2xl">Your books</h1>
  </div>
  <Userbook/></>
  )
}
export default Profile