import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import BookList from './BookList';
import Book from './Book';
import PageNotFound from './PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookList} />
      <Route path="/book/:bookId" component={Book} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
), document.getElementById('root'));
