import React,{useContext} from 'react'
import BookContext from '../context/content/BookContext'
import Books from './Books'
// import Usermenu from './Usermenu'
import Sliderm from './Sliderm'
import Homemain from './Homemain'
function Home() {
  const  context=useContext(BookContext);
  const {shows}=context;
  
  return (
    <div>
      {/* <Usermenu/> */}
      { shows ?<Homemain/>:
      <div>
        
        <div >
        <Sliderm/>
        </div>
       <Books/>
      </div>

      }
    </div>
  )
}

export default Home