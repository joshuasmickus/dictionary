export interface IAction {
  type: any;
  payload?: any;
};
export interface IDictionaryItem {
  from: string;
  to: string;
  id: string;
  dictionaryId: IDictionaryName['id'];
};
export interface IDictionaryName {
  id: string;
  name: string;
}
export interface IDictionaries {
  items: IDictionaryItem[];
  list: IDictionaryName[];
}
export interface IDictionaryState {
  dictionary: IDictionaries;
}
