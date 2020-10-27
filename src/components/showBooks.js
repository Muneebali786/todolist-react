import React from "react";

class ShowBooks extends React.Component {
     ShowBooks = '';
        
            
     deleteBook = (id) => {
           this.props.delete(id);
            };
        
    render() {
        
        
        return(
          ShowBooks=(this.props) => {
            <table className = "table mt-4">
               {this.props.books.map(book => (
                   <tbody key= {book.id}>                       
                       <tr>
                          <td>{book.bookName}</td>
                          <td>{book.author}</td>
                           {/* <td>
                               <a href = "" className = "btn btn-danger">Delete</a>
                           </td> */}
                           <td>
                              {/* <a name="" id="" className="btn btn-danger" href="#" role="button">Delete</a> */}
                              <button type="button" className="btn btn-danger" onClick ={() => deleteBook(book.id)} >Delete</button>
                           </td>
                       </tr>
                   </tbody>

               ))}
            
            </table>
        
            }
//     );
        );
    }
}


// const ShowBooks = (props) => {

//    const deleteBook = (id) => {
//        props.delete(id);
//    }

//     return(
//         <table className = "table mt-4">
//             {props.books.map(book => (
//                 <tbody key= {book.id}>
//                     <tr>
//                         <td>{book.bookName}</td>
//                         <td>{book.author}</td>
//                         {/* <td>
//                             <a href = "" className = "btn btn-danger">Delete</a>
//                         </td> */}
//                         <td>
//                         {/* <a name="" id="" className="btn btn-danger" href="#" role="button">Delete</a> */}
//                         <button type="button" className="btn btn-danger" onClick ={() => deleteBook(book.id)} >Delete</button>
//                         </td>
//                     </tr>
//                 </tbody>

//             ))}
            
//         </table>
        

//     );
// };

export default ShowBooks;