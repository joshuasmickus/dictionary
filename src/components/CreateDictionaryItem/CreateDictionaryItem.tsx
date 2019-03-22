import { Form, Formik } from 'formik';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IDictionaryItem, IDictionaryName, IDictionaryState } from 'src/models/common';
import { createDictionaryItem } from 'src/state/dictionary/dictionaryRoutines';

import './CreateDictionaryItem.css';

interface IDictionaryErrors {
  from?: string;
  to?: string;
};
export interface ICreateDictionaryItemProps {
  createDictionaryItemRequest: (values: IDictionaryItem) => void;
  list: IDictionaryName[];
  match: any;
};
interface ICreateDictionaryItemState {
  redirectToHome: boolean;
};
const validate = (values: any) => {
  const errors: IDictionaryErrors = {};

  if (values.from === '') {
    errors.from = 'Enter a from value';
  }

  if (values.to === '') {
    errors.to = 'Enter a to value';
  }

  console.log({ errors }); // tslint:disable-line
  return errors;
};

export class CreateDictionaryItem extends React.Component<ICreateDictionaryItemProps, ICreateDictionaryItemState> {
  public state = {
    redirectToHome: false
  };

  public render() {
    const { id: dictionaryId } = this.props.match.params;
    const filteredDictionary = this.props.list.filter((dictionary: IDictionaryName) => dictionary.id === dictionaryId);

    if (this.state.redirectToHome || filteredDictionary.length === 0) {
      return <Redirect to="/" />;
    }

    const { name: dictionaryName } = filteredDictionary[0];

    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{
          from: '',
          to: ''
        }}
        validate={validate}
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
      redirectToHome: true
     });
  }
}

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  createDictionaryItemRequest: (values: IDictionaryItem) => dispatch(createDictionaryItem.request(values))
});
