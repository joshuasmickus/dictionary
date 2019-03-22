import { Form, Formik } from 'formik';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IDictionaryName, IDictionaryState } from 'src/models/common';
import { createDictionary } from 'src/state/dictionary/dictionaryRoutines';

import './CreateDictionary.css';

interface IDictionaryErrors {
  name?: string;
};
interface ICreateDictionaryProps {
  createDictionaryRequest: (values: IDictionaryName) => void;
};
interface ICreateDictionaryState {
  redirectToHome: boolean;
};
const validate = (values: any) => {
  const errors: IDictionaryErrors = {};

  if (values.name === '') {
    errors.name = 'Enter a name';
  }

  return errors;
};

export class CreateDictionary extends React.Component<ICreateDictionaryProps, ICreateDictionaryState> {
  public state = {
    redirectToHome: false
  };

  public render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{
          name: ''
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
            <h1>Create dictionary</h1>
            <label>
              <span>Name:</span>
              <input
                name="name"
                required={true}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (<span className="error">{errors.name}</span>)}
            </label>
            <label>
              <span>&nbsp;</span>
              <button type="submit">Create dictionary</button>
            </label>
        </Form>
        )}
      </Formik>
    )
  }

  private handleSubmit = (values: IDictionaryName) => {
     this.props.createDictionaryRequest(values);

     toast(`Dictionary '${values.name}' created!`);

     this.setState({
      redirectToHome: true
     });
  }
}

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  createDictionaryRequest: (values: IDictionaryName) => dispatch(createDictionary.request(values))
});
