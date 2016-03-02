import React from 'react';
import { Link } from 'react-router';
import './stylesheets/components.scss';
import BookList from './BookList';

class App extends React.Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-default">
              <div className="container">
                <div className="navbar-header">
                  <Link to="/" className="navbar-brand">BookReview</Link>
                </div>
              </div>

            </nav>
            <div className="container">
              {this.props.children}
            </div>
          </div>
        );
    }
}

export default App;
