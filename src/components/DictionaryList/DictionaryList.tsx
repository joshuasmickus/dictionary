import * as React from 'react';
import { Link } from 'react-router-dom';

import { IDictionaryName, IDictionaryState } from 'src/models/common';
import { deleteDictionary } from 'src/state/dictionary/dictionaryRoutines';

interface IDictionaryListProps {
  list: IDictionaryName[];
  deleteDictionaryRequest: (id: string) => void;
};

export const DictionaryList: React.FC<IDictionaryListProps> = ({
  list,
  deleteDictionaryRequest
}) => {
  const deleteItem = (id: IDictionaryName['id']) => (event: React.MouseEvent) => {
    event.preventDefault();

    deleteDictionaryRequest(id);
  };

  return (
    <ul>
      {
        list.length > 0 && list.map((dictionary: IDictionaryName) =>
          (
            <li key={dictionary.id}>
              {dictionary.name}&nbsp;
              <Link to={`/edit-dictionary/${dictionary.id}`}>edit</Link> -&nbsp;
              <a onClick={deleteItem(dictionary.id)} href={`/delete-dictionary/${dictionary.id}`}>delete</a>
            </li>
          )
        )
      }
      { list.length === 0 && <li>There are no dictionaries.</li> }
    </ul>
  )
};

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  deleteDictionaryRequest: (id: IDictionaryName['id']) => dispatch(deleteDictionary.request(id))
});
