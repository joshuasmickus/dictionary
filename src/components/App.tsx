import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import CreateDictionary from './CreateDictionary';
import DictionaryList from './DictionaryList';

export const App: React.FC = () => (
  <Router>
    <h1>Dictionary</h1>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/create">Create Dictionary</Link>
    <Route path="/" exact={true} component={DictionaryList} />
    <Route path="/create" component={CreateDictionary} />
  </Router>
);
