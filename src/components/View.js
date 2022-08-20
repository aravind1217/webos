import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const View = ({books,deleteBook}) => {
    
    return books.map(data=>(
        
        <tr key={data.isbn}>
            <td>{data.isbn}</td>
          
            <td>{data.Name}</td>
            <td>{data.Email}</td>
            <td>{data.PhoneNo}</td>
            <td className='delete-btn' onClick={()=>deleteBook(data.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}

export default View