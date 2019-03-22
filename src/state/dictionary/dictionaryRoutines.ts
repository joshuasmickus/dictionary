import { createRoutine } from 'redux-saga-routines';

export const createDictionary = createRoutine('CREATE_DICTIONARY');
export const createDictionaryItem = createRoutine('CREATE_DICTIONARY_ITEM');
export const deleteDictionary = createRoutine('DELETE_DICTIONARY');
export const deleteDictionaryItem = createRoutine('DELETE_DICTIONARY_ITEM');
export const editDictionaryItem = createRoutine('EDIT_DICTIONARY_ITEM');
