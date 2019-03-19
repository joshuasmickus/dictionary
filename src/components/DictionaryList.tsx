import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IDictionaries, IDictionary } from 'src/state/dictionary/dictionaryReducer';

interface IDictionaryListProps {
  list: IDictionary[];
};

interface IDictionaryState {
  dictionary: IDictionaries;
}

const DictionaryList: React.FC<IDictionaryListProps> = ({ list }) => {
  const deleteItem = (item: IDictionary['id']) => () => {
    console.log('delete: ', item); // tslint:disable-line
  };

  return (
    <ul>
      {
        list.map((dictionary: IDictionary) =>
          (
            <li key={dictionary.id}>
              <Link to={`/edit/${dictionary.id}`}>{dictionary.from}/{dictionary.to}</Link> -
              <a onClick={deleteItem(dictionary.id)} href="#">delete</a>
            </li>
          )
        )
      }
    </ul>
  )
};

const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  list: dictionary.list
});

export default connect(mapStateToProps)(DictionaryList);
