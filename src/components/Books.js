import React,{useState,useContext,useEffect} from 'react'
import BookContext from '../context/content/BookContext'
// import Badge from './Badge';
import Booklist from './Booklist';
import Booklists from './Booklists';

function Books() {
    const  context=useContext(BookContext);
  const {books,getall,getallbytag,setbooks}=context;
  const [no,setno] = useState(4);
  const [nbook,setnbook] = useState(books);
  const update=()=>{
    if(books.length >4)
    {
      setnbook(books.filter((v,i,books)=>{return i <no}))
    }
  }
  useEffect(() => {
    update();
   },[books])
  const [genre, setGenre] = useState('Romance')
  const load=async ()=>{
    setno(no+2);
    setnbook(books.filter((v,i,books)=>{return i <no+2}));
  }
  
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        {/* <div className="w-24 h-full bg-indigo-500"></div> */}
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 best">Exclusive Product</h1>
        
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {/* {books.map((book,index) => {return <Booklists key={index} book={book}/>})} */}
      
     <Booklists/>
    </div>
  </div>
</section>
    <section className="text-gray-600 body-font px-14">
  <div className="h-1 bg-gray-400 rounded overflow-hidden"> </div>
  <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 mt-5">All Product</h1>
  <div className="float-left">
  <select
                                    name='genre'
                                    id='bk_genre'
                                    onChange={async (e) =>
                                      {
                                        setGenre(e.target.value);
                                        if(e.target.value==='All'){
                                          console.log('All   '+e.target.value)
                                          setnbook(await getall());
                                          update()
                                        }
                                        else
                                        {
                                          update();
                                          setnbook(await getallbytag(e.target.value));
                                          // setbooks(await getallbytag(e.target.value));
                                          console.log(e.target.value)
                                          update();
                                        }
                                    }
                                  }
                                >
                                    <option value='All'>
                                        All
                                    </option>
                                    <option value='Romance'>
                                        Romance
                                    </option>
                                    <option value='Sci-Fi'>Sci-Fi</option>
                                    <option value='Fiction'>Fiction</option>
                                    <option value='Novel'>Novel</option>
                                    <option value='Mystery'>Mystery</option>
                                    <option value='Fantasy'>Fantasy</option>
                                    <option value='Thriller'>Thriller</option>
                                    <option value='Biography'>Biography</option>
                                    <option value='Children Literature'>Childrens' Literature</option>
                                </select>
  </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {nbook.length>0 ?  nbook.map((book,index) => {return <Booklist key={index} book={book}/>}) :<h1>No book</h1>}
    </div>
    <div className="flex justify-center ">

  {nbook.length < books.length && <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded animate-bounce-slow" onClick={()=>{load()}}>
  Load-More
</button>}
    </div>
  </div>
</section>
    </>
  )
}
Books.defaultProps={
    books: []
  }

export default Books
