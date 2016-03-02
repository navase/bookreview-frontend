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
      console.log(data);

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
        <h2>Author: {this.state.book.author}</h2>
        <p><strong>Summary:</strong> {this.state.book.summary}</p>
        <p><strong>Publication date:</strong> {this.state.book.publication_date}</p>
        <p><strong>Average rating:</strong> {this.state.average_rating}★</p>

        <ReviewList bookId={this.props.params.bookId} />
      </div>
    );
  }
}

export default Book;
