import React from 'react'

import o1 from "./elements/offer1.png"
import o2 from "./elements/offer2.png"
import o3 from "./elements/offer3.png"
import b1 from "./elements/1.png"
import b2 from "./elements/2.png"
import b3 from "./elements/3.png"
import b4 from "./elements/4.png"
import b5 from "./elements/5.png"
import b6 from "./elements/6.png"
import b7 from "./elements/7.png"
import b8 from "./elements/8.png"
import b9 from "./elements/9.png"
import b10 from "./elements/10.png"
import b11 from "./elements/11.png"
import b12 from "./elements/12.png"
import Sliderm from './Sliderm'
function Homemain() {
  return (
    <div>
        
  
        <Sliderm/>
    <div className="best">EXCLLUSIVE OFFERS!</div>
    
    <div className="cards">
      <a href="/"><div  ><img className="card" src={o1} alt="d"/></div></a>
      <a href="/"><div  ><img className="card" src={o2}alt="d"/></div></a>
      <a href="/"><div  ><img className="card" src={o3} alt="d"/></div></a>
    </div>

  <div className="best">OUR BESTSELLING PRODUCT</div>
  
    <div className="bestcards" >
      <a href="/"><div><img src={b1} alt="ff" className="card-a w-full" /></div></a>
      <a href="/"><div><img src={b2} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b3} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b4} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b5} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b6} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b7} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b8} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b9} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b10} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b11} alt="ff" className="card-a" /></div></a>
      <a href="/"><div><img src={b12} alt="ff" className="card-a" /></div></a>
    <br/>
    </div>
    </div>
  )
}

export default Homemain