import React from "react";
import s1 from "./elements/slider1.png"
import s2 from "./elements/slider2.png"
import s3 from "./elements/slider3.png"
function Sliderm() {


  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

    
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    

    <div className=" carousel-inner  mt-[75px]  p-[3px] border rounded-sm " >
      <div className="carousel-item active">
        <img src={s1} alt="Los Angeles" height="auto" width="100%"/>
        <div className="carousel-caption">
          {/* <h3></h3> */}
          <p></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={s2} alt="Chicago" height="auto" width="100%"/>
        <div className="carousel-caption">
          {/* <h3></h3> */}
          <p></p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={s3} alt="new york" height="auto" width="100%" />
        <div className="carousel-caption">
          {/* <h3></h3> */}
          <p></p>
        </div>
      </div>



     
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    </div>
  );
}

export default Sliderm;
