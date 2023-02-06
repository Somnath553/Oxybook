import React from "react";
import contactus from "./elements/contactus.png";
import {Link,useNavigate} from "react-router-dom";
function Contact(){
    return(
        <div>
        <img src={contactus} alt="topimage" class="img-fluid x"/>
        <div class="centered">Contact Us.</div>
        <div>
            <h2></h2>
        </div>

    <h3 class="drop">Drop us a line</h3>
    <form>
        <div class="form-group form" >
            <label for="exampleInputEmail1" style={{left:"auto"}}>Your Full name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="full name" size="50px"/>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted"><i>We'll never share your email with anyone
                    else.</i></small>
                    <br></br>
            <label for="exampleFormControlTextarea1">Your message for us </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="write your message..."></textarea>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <div class="text-center but">
                <button type="button" class="btn btn-primary"
                    ><b>send</b></button>
            </div>
            
        </div>
    </form>



    
    <h4 class="map">Get us through map</h4>
    <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726564801243!2d75.70295481495981!3d31.25599198145792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1656911569511!5m2!1sen!2sin" 
          width="1520" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">

          </iframe>
    </div>
    </div>
  )
}
export default Contact