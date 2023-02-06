import React,{useState,useContext,useEffect} from 'react'
import BookContext from '../context/content/BookContext';
function Userbook() {
  const context = useContext(BookContext);
  const {bookforsell,sbook,deletebook}=context;
  const [ubook, setubook] = useState(sbook);
  const update = async ()=>{
        setubook(await bookforsell());
  }
  useEffect(() => {
    update();
  })
  

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 pb-24 mx-auto mt-0">
    <div className="flex flex-wrap -m-4">
      {ubook.length>0?ubook.map((book,index) => {return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={book.image}/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book.author}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{book.title}</h2>
          <p className="mt-1">{book.price}</p>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() =>{deletebook(book._id);update()}}>
  Delete
</button>
        </div>
      </div> }):<h1 className='font-bold text-2xl'>No Books !!</h1>}
      
    </div>
  </div>
</section>
  )
}
/*
<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
<Booklist key={index} book={book}/>
*/
export default Userbook
