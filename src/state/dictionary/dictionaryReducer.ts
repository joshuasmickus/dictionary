import produce from 'immer';
import { Action } from 'redux';

export interface IDictionary {
  from: string;
  to: string;
};

export interface IDictionaries {
  list: IDictionary[];
}

export const initialState: IDictionaries = {
  list: []
};

export const dictionaryReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        console.log('hello');
    }
  });
