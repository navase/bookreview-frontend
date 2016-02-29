import React from 'react';
import jQuery from 'jquery';

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
        <h2>Reviews</h2>

        {this.state.reviews.map(function(review, i) {
          return(
            <div>
              <p key={i}><strong>{review.name}</strong> rated it {review.rating}</p>
              <p>"{review.description}"</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewList;
