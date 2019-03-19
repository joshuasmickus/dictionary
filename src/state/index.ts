import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

export function configureStore() {
  const store: IStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  };

  store.runSagaTask();

  return store;
}
