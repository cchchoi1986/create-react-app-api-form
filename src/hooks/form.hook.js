import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({ phone: '', email: '' });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const resetPhone = () => {
    setValues(values => ({ ...values, phone: '' }))
  }

  const resetEmail = () => {
    setValues(values => ({ ...values, email: '' }))
  }

  const select = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    if (event.target.name === 'phone') {
      setValues(values => ({ ...values, selectPhone: '' }))
    } else if (event.target.name === 'email') {
      setValues(values => ({ ...values, selectEmail: '' }))
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    resetEmail,
    resetPhone,
    select,
  }
};

export default useForm;
