import React, { useState } from 'react';
import styles from './FormSubscribe.module.scss';
import { Formik, Field, Form } from 'formik';

const FormSubscribe = () => {

  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }

  function validateUsername(value) {
    let error;
    if (!value) {
      error = 'Name *';
    } else {
      error = 'Name';
    }
    return error;
  }

  function validateEmail(value) {
    let error = 'Email';
    if (!value) {
      error = 'Email *';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validatePhone(value) {
    let error = 'Phone';
    if (!value) {
      error = 'Phone *';
    } else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(value)) {
      error = 'Invalid phone number';
    }
    return error;
  }

  return (
    <div className={styles.subscribe}>
      <p className={styles.invite}>Join our mailing list to keep informed of the happenings at The Buddhist Society.</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          if (checked) {
            // Send to backend
          } else {
            // Don't send to backend
            alert('Agree term to subscribe');
          }
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form className={styles.formSubscribe}>
            {(errors.username && touched.username && <div>{errors.username}</div>)}
            <Field name='username' placeholder={'NAME'} validate={validateUsername} />
            {(errors.email && touched.email && <div>{errors.email}</div>)}
            <Field name='email' type='email' placeholder={'EMAIL'} validate={validateEmail} />
            {(errors.phone && touched.phone && <div>{errors.phone}</div>)}
            <Field name='phone' type='phone' placeholder={'PHONE'} validate={validatePhone} />
            <label className={styles.checkbox} htmlFor='agree'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND
              STORED.
              <input id='agree' type='checkbox'
                     checked={checked}
                     onChange={(e) => handleInputChange(e)}
              />
              <span className={styles.checkMark} />
            </label>
            <button className={`${styles.btnSubscribe} ${checked && styles.hover}`} id={'btnSub'}
                    type='submit'>SUBSCRIBE NOW
            </button>
          </Form>
        )}
      </Formik>
    </div>);
};

export default FormSubscribe;
