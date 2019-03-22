import { Form, Formik } from 'formik';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IDictionaryItem, IDictionaryName, IDictionaryState } from '../../models/common';
import { createDictionaryItem } from '../../state/dictionary/dictionaryRoutines';

import { validate } from './CreateDictionaryItem.validate';

export interface ICreateDictionaryItemProps {
  createDictionaryItemRequest: (values: IDictionaryItem) => void;
  items: IDictionaryItem[];
  list: IDictionaryName[];
  match: any;
};
interface ICreateDictionaryItemState {
  redirect: boolean;
};

export class CreateDictionaryItem extends React.Component<ICreateDictionaryItemProps, ICreateDictionaryItemState> {
  public state = {
    redirect: false
  };

  public render() {
    const { id: dictionaryId } = this.props.match.params;
    const filteredList = this.props.list.filter((dictionary: IDictionaryName) => dictionary.id === dictionaryId);

    if (this.state.redirect || filteredList.length === 0) {
      return <Redirect to={`/edit-dictionary/${dictionaryId}`} />;
    }

    const { name: dictionaryName } = filteredList[0];

    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{
          from: '',
          to: ''
        }}
        validate={(values) => validate(this.props.items, values)}
      >
        {({
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <Form>
            <h1>Create dictionary item for {dictionaryName}</h1>
            <label>
              <span>From:</span>
              <input
                name="from"
                required={true}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.from && errors.from && (<span className="error">{errors.from}</span>)}
            </label>
            <label>
              <span>To:</span>
              <input
                name="to"
                required={true}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.to && errors.to && (<span  className="error">{errors.to}</span>)}
            </label>
            <label>
              <span>&nbsp;</span>
              <button type="submit">Create dictionary item</button>
            </label>
        </Form>
        )}
      </Formik>
    );
  }

  private handleSubmit = (values: IDictionaryItem) => {
    const { id: dictionaryId } = this.props.match.params;

     this.props.createDictionaryItemRequest({ dictionaryId, ...values });

     toast(`Dictionary item '${values.from} / ${values.to}' created!`);

     this.setState({
      redirect: true
     });
  }
}

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  items: dictionary.items,
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  createDictionaryItemRequest: (values: IDictionaryItem) => dispatch(createDictionaryItem.request(values))
});
