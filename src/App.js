import React from 'react';
import { Link } from 'react-router';
import BookList from './BookList';

class App extends React.Component {
    render() {
        return (
          <div>
            <Link to="/">Home</Link> 
            {this.props.children}
          </div>
        );
    }
}

export default App;
