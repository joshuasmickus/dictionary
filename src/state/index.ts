import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { dictionaryReducer } from './dictionary';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer
});

export const rootSagas = function*() {
  yield all([
  ]);
};

const sagaMiddleware = createSagaMiddleware();

interface IStore extends Store {
  runSagaTask?: any;
  sagaTask?: any;
}

const enhance = compose(
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
  persistState(),
);

export function configureStore() {
  const store: IStore = createStore(
    rootReducer,
    enhance
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  };

  store.runSagaTask();

  return store;
}
