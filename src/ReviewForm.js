import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
  constructor() {
    super();
  }

  createReview(event) {
    event.preventDefault();

    let component = this;
    let bookId = this.props.bookId;
    let name = this.refs.inputName.value;
    let rating = this.refs.inputRating.value;
    let description = this.refs.inputDescription.value;
    let newReview = {
      id: null,
      name: name,
      rating: rating,
      description: description
    };

    jQuery.ajax({
      type: "POST",
      url: "https://bookreviewapi.herokuapp.com/books/" + bookId + "/reviews",
      data: JSON.stringify({
          review: newReview
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      component.props.onChange();
      component.refs.inputName.value = "";
      component.refs.inputRating.value = "";
      component.refs.inputDescription.value = "";
    })

    // .fail(function(error) {
    //   console.log(error);
    // });
  }

  render() {
    return(
      <div>
        <h2>Add review</h2>

        <form role="form" onSubmit={this.createReview.bind(this)}>
          <div className="row">
            <div className="form-group col-md-4">
              <label for="name">Name:</label>
              <input id="name" ref="inputName" className="form-control" />
            </div>

            <div className="form-group col-md-1">
              <label for="rating">Rating:</label>
              <select id="rating" ref="inputRating" className="form-control">
                <option>1★</option>
                <option>2★</option>
                <option>3★</option>
                <option>4★</option>
                <option>5★</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-5">
              <label for="description">Description:</label>
              <textarea id="description" ref="inputDescription" className="form-control" />
            </div>
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
