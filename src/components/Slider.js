import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Slider() {
  return (
    <div className='my-2'>
      <Carousel showArrows={true} emulateTouch={true} showThumbs={false}  autoplay={true}>
                <div>
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8X4_gR2KPr6Xn4fxCCo5iDmS08ydhzLKdIA&usqp=CAU" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTNFa9HFQcmJDexhAtXYcT_mFRgPQ40sP-g&usqp=CAU" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Ov64LtrQY33keU-clUmQ9aQllhyLi4yghA&usqp=CAU" alt=""/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gci3r43sXgITUfp_KTfDN3wrHNuiLSE8ww&usqp=CAU" alt=""/>
                    <p className="legend">Legend 5</p>
                </div>
                
            </Carousel>
    </div>
  )
}

export default Slider
