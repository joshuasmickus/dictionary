import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dictionaryReducer } from './dictionary';

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer
});

const enhance = compose(
  composeWithDevTools()
);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {
  const store = createStore(persistedReducer, enhance);
  const persistor = persistStore(store);

  return { store, persistor };
}
