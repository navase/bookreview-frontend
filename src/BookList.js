import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class BookList extends React.Component {
  constructor() {
    super();

    this.state = {
      books: []
    };
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
            <p key={i}>
              <Link to={`/book/${book.id}`}>{book.title} ({book.average_rating}★)</Link>
            </p>
          );
        })}
      </div>
    );
  }
}

export default BookList;
