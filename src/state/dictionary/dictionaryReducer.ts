import produce from 'immer';
import { Action } from 'redux';

export interface IDictionary {
  from: string;
  to: string;
  id: number;
};

export interface IDictionaries {
  list: IDictionary[];
}

export const initialState: IDictionaries = {
  list: [{ from: 'some value', to: 'some other value', id: 1 }]
};

export const dictionaryReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        console.log('hello'); // tslint:disable-line
    }
  });
