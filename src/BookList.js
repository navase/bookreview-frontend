import React from 'react';
import jQuery from 'jquery';

class BookList extends React.Component {
  constructor() {
    super();

    this.state = {
      books: []
    };

    console.log(this.state.books);
  }

  reloadList(event) {
    let component = this;

    jQuery.getJSON("https://bookreviewapi.herokuapp.com/books", function(data){
      component.setState({
        books: data.books
      });
    });
  }

  componentDidMount() {
    this.reloadList();
  }

  render() {
    return(
      <div>
        <h1>BookList</h1>

        {this.state.books.map(function(book, i) {
          return(
            <p>{book.title}</p>
          );
        })}
      </div>
    );
  }
}

export default BookList;
