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

        <div className="row">
          {this.state.books.map(function(book, i) {
            return(
              <div key={i} className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <Link to={`/book/${book.id}`}><img src={book.image} /></Link>
                  </div>

                  <div className="col-md-8">
                    <h2><Link to={`/book/${book.id}`}>{book.title}</Link></h2>
                    <p>By <strong>{book.author}</strong></p>
                    <p>Average rating: {book.average_rating}★</p>
                    <p className="read-more"><Link to={`/book/${book.id}`}>Read more ></Link></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BookList;
