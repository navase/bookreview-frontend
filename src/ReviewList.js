import React from 'react';
import jQuery from 'jquery';
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  reloadList(event) {
    let component = this;
    let bookId = this.props.bookId;

    jQuery.getJSON("https://bookreviewapi.herokuapp.com/books/" + bookId + "/reviews", function(data){
      component.setState({
        reviews: data.reviews
      });
    });
  }

  componentDidMount() {
    this.reloadList();
  }

  render() {
    return(
      <div>
        <ReviewForm bookId={this.props.bookId} onChange={this.reloadList.bind(this)} />

        <h2>Reviews</h2>
        {this.state.reviews.map(function(review, i) {
          return(
            <div key={i}>
              <p><strong>{review.name}</strong> rated it {review.rating}</p>
              <p>"{review.description}"</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewList;
