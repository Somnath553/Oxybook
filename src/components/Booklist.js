import React,{useContext} from 'react'
import BookContext from '../context/content/BookContext'
import {useNavigate} from "react-router-dom"
import Badge from './Badge'
function Booklist(props) {
  let navigate = useNavigate();
  const  context=useContext(BookContext);
  const {setviewbooks,viewbooks}=context;
  
    const {book}=props;
    const{image,title,author,price,tag,description}=book;
    
    const bookl= ()=>{
      setviewbooks(book);
      console.log(book);
      console.log(viewbooks);
      navigate('/view');
    }
  return (
   
<>

       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <Badge tag={tag}/>
            <img src={image} alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category" onClick={()=>{bookl()}} >
              <span>View</span>
            </div>
            <div className="title-product">
              <h3>{title}</h3>
            </div>
            <div className="description-prod">
              <p>{author}</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, necessitatibus.
              </p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs.{price}</span></div>
            
            </div>
          </div>
        </div>
      </div>
      {/* {show && <Viewbook book={book} togle={bookl} />} */}
</>
  )
}

export default Booklist