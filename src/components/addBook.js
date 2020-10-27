import React from 'react';
import {v4 as uuid } from 'uuid';

class AddBook extends React.Component {
    state = {
        bookName: '',
        author: ''
    };

    handleInputs = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    saveData = e => {
        e.preventDefault();
        this.props.AddBook({ id: uuid(), bookName: this.state.bookName, author: this.state.author });
        this.setState({ bookName: "", author: ""});
    };

    render() {
        return(
            <form className = "mt-3" onSubmit = {this.saveData}>
                <div className = "form-group">
                    <h3>Add Book</h3>
                </div>
                <div className = "form-group">
                    <input type="text"
                    className ="form-control"
                    name="bookName"
                    placeholder="Book Name..."
                    value = {this.state.bookName}
                    onChange = {this.handleInputs}
                    required/>
                </div>

                <div className = "form-group">
                    <input type="text"
                    className="form-control"
                    name="author"
                    placeholder="Author Name..."
                    value = {this.state.author}
                    onChange = {this.handleInputs}
                    required/>
                </div>
                <div className = "form-group">
                    <input type="submit" className ="btn btn-primary" value ="Add Book" />
                </div>
            </form>
        );
    }
}
export default AddBook;