import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CreateDictionary from '../CreateDictionary';
import CreateDictionaryItem from '../CreateDictionaryItem';
import DictionaryItemList from '../DictionaryItemList';
import DictionaryList from '../DictionaryList';
// import EditDictionaryItem from '../EditDictionaryItem';

export const App: React.FC = () => (
  <Router>
    <h1>Dictionary</h1>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/create-dictionary">Create Dictionary</Link>
    <Route path="/" exact={true} component={DictionaryList} />
    <Route path="/create-dictionary" component={CreateDictionary} />
    <Route path="/edit-dictionary/:id" component={DictionaryItemList} exact={false} />
    <Route path="/edit-dictionary/:id/add-item" component={CreateDictionaryItem} exact={true} />
    {/* <Route path="/edit-dictionary/:id/edit-item/:itemId" component={EditDictionaryItem} exact={true} /> */}
    <ToastContainer />
  </Router>
);
