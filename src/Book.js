import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';

class Book extends React.Component {
  constructor() {
    super();

    this.state = {
      book: {},
      average_rating: 0
    };
  }

  componentDidMount() {
    this.findBook();
  }

  findBook() {
    let bookId = this.props.params.bookId;
    let component = this;

    jQuery.getJSON("https://bookreviewapi.herokuapp.com/books/" + bookId, function(data) {
      component.setState({
        book: data.book,
        average_rating: data.average_rating
      });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.book.title}</h1>
        <div className="row">
          <div className="col-md-3">
            <h2>Book info</h2>
            <p><strong>Author:</strong> {this.state.book.author}</p>
            <p><strong>Publication date:</strong> {this.state.book.publication_date}</p>
            <p><strong>Average rating:</strong> {this.state.average_rating}★</p>
          </div>

          <div className="col-md-6">
            <h2>Summary</h2>
            <p> {this.state.book.summary}</p>
          </div>

          <div>
            <img src={this.state.book.image} />
          </div>
        </div>

        <ReviewList bookId={this.props.params.bookId} />
      </div>
    );
  }
}

export default Book;
