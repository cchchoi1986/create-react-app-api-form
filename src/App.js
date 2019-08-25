import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addEmail, addPhoneNumber, isLoading, isReady } from './actions/form.action';
import { validatePhoneNumber, validateEmail } from './services/validate.service';
import useForm from "./hooks/form.hook";
import ResultsTable from './components/results-table';

const App = (props) => {
  const { values, handleChange, handleSubmit, resetEmail, resetPhone, select } = useForm(validate);

  async function validate() {
    if (values.phone) {
      if (props.phoneNumbers.indexOf(values.phone) < 0) {
        props.isLoading();
        const testPhone = await validatePhoneNumber(values.phone);
        if (testPhone.data.valid) {
          props.addPhoneNumber(values.phone);
        }
      }
      props.isReady();
      resetPhone();
    }
    if (values.email) {
      if (props.emails.indexOf(values.email) < 0) {
        props.isLoading();
        const testEmail = await validateEmail(values.email);
        if (testEmail.data.format_valid) {
          props.addEmail(values.email);
        }
      }
      props.isReady();
      resetEmail();
    }
  }

  return (
    <div className="App">
      <pre>{JSON.stringify(props)}</pre>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control"
            type="text"
            onChange={handleChange}
            value={values.phone}
            name="phone"
            placeholder="Enter Your Phone Number"
            />
        </div>
        <div className="form-group">
          <input className="form-control"
            type="text"
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Enter Your Email"
            />
        </div>
        <div className="form-group">
          <button className="btn btn-success" onClick={handleSubmit} disabled={props.loading}>
            Validate
          </button>
        </div>
        <div className="form-group">
          <div className="results-selection">
            <select name="phone" onChange={select} value={props.selectPhone}>
              <option value="" disabled>Select a validated phoneNumber</option>
              {props.phoneNumbers.map(n => {
                return <option key={n} value={n}>{n}</option>
              })}
            </select>
          </div>
          <div className="results-selection">
            <select name="email" onChange={select} value={props.selectEmail}>
              <option value="" disabled>Select a validated email</option>
              {props.emails.map(n => {
                return <option key={n} value={n}>{n}</option>
              })}
            </select>
          </div>
        </div>
      </form>
      <div className="results">
        <ResultsTable type="Phone Numbers" results={props.phoneNumbers} />
      </div>
      <div className="results">
        <ResultsTable type="Email" results={props.emails} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  phoneNumbers: state.formReducer.phoneNumbers,
  emails: state.formReducer.emails,
  selectPhone: state.formReducer.selectPhone,
  selectEmail: state.formReducer.selectEmail,
  loading: state.formReducer.loading,
})

const mapDispatchToProps = dispatch => ({
  isLoading: () => dispatch(isLoading()),
  isReady: () => dispatch(isReady()),
  addPhoneNumber: (n) => dispatch(addPhoneNumber(n)),
  addEmail: (e) => dispatch(addEmail(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
