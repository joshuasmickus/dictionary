import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { configureStore } from './state';

import { App } from './components/App';

import '../node_modules/react-toastify/dist/ReactToastify.min.css';
import './index.css';

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
