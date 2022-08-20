import React,{useState, useEffect} from 'react'
import View from './View';
// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const AddData = () => {

  const [books, setbooks]=useState(getDatafromLS());

  const [Name, setName]=useState('');
  const [Email, setEmail]=useState('');
  const [PhoneNo, setPhoneNon]=useState('');
  const [photo,setPhoto]= useState('')
  const [isbn, setIsbn]=useState('');

  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    let book={
      Name,
      Email,
      PhoneNo,
     
      isbn
    }
    setbooks([...books,book]);
    setName('');
    setEmail('');
    setPhoneNon('');
   
    setIsbn('')
  }

  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }
  const handleClick=()=>{
    let { history } = this.props

    localStorage.clear();
    history.push({ pathname: "/" });
}
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
    <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Contact Add</a>
  <form class="form-inline">
   
    <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Logout</button>
  </form>
</nav>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={Name}></input>
            <br></br>
            <label>Email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={Email}></input>
            <br></br>
            <label>Phone NO</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPhoneNon(e.target.value)} value={PhoneNo}></input>
            <br></br>
            {/* <label>Photo</label> */}
            {/* <input type="file" className='form-control' required
            onChange={(e)=>setPhoto(e.target.files[0])} value={photo}></input>
            <br></br> */}
            <label>ISBN#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                 
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No contacts are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default AddData