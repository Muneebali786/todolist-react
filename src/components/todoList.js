import React from "react";
import ShowBooks from "./showBooks";
import AddBook from "./addBook";

class TodoList extends React.Component {
  
    state = {
        bookList: [
            { id: 1, bookName: 'PHP Programming', author: 'Shakil Khan'},
            { id: 2, bookName: 'Javascript Programming', author: 'Usman Khan'},
            { id: 3, bookName: 'React Native', author: 'Adnan Khan'}
        ],
        bookSuccess: "",
        bookDeleted: ""
    };

    storeBook = (bookInfo) => {
        this.setState({bookList: [...this.state.bookList, bookInfo] });
        this.setState({ bookSuccess: "Your book has been added successfully"});
        setTimeout(() => {
        this.setState({ bookSuccess: "" });
        },3000);
    };

    removeBook = (id) => {
        if(window.confirm("Are you want to delete this book?")) {
        const filteredBooks = this.state.bookList.filter((book) => book.id !== id);
        this.setState({ bookList: filteredBooks});
        this.setState({ bookDeleted: "Your book has been deleted successfully!"});
        setTimeout(() => {
            this.setState({ bookDeleted: "" });
            },3000);
        }
    };


    render() {
        return  (
            <>
               {this.state.bookSuccess ? <div className="alert alert-success mt-3">{this.state.bookSuccess}
               </div> : null}
               {this.state.bookDeleted ? <div className="alert alert-success mt-3">{this.state.bookDeleted}
               </div> : null}
               <AddBook AddBook = {this.storeBook} />
               <ShowBooks books = {this.state.bookList} delete = {this.removeBook} />
            </>
        );
    }
}

export default TodoList;