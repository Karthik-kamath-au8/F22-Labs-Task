import React from 'react';
import { useFormik } from 'formik';
import './Form.css'

const validate = values => {
  const errors = {};



  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      password:'',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="forms">
        <p className="sign">Sign In</p>
        <p className="sigb">Enter your account details below</p>
    <form onSubmit={formik.handleSubmit}>
    <div className="emails">
        <div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      </div>
      <div>
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      </div>
      </div>
      <div className="passwords">
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="errors">{formik.errors.password}</div>
      ) : null}
      </div>

        <div className="butn">
        <button type="submit">Submit</button>
        </div>
        <p className="acc">Don’t have an account?<a href="">Create for free</a> </p>
      
    </form>
    </div>
  );
};

export default SigninForm;