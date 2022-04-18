import React, { useState } from 'react';
import styles from './FormSubscribe.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { dataPolicy } from '../../../../utils/data-config';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ReviewSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'The name must be more than 5 and less than 50 characters!')
    .max(50, 'The name must be more than 5 and less than 50 characters!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

const FormSubscribe = () => {
  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }

  return (
    <div className={styles.subscribe}>
      <p className={styles.invite}>
        Join our mailing list to keep informed of the happenings at The Buddhist
        Society.
      </p>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (checked) {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }
          }, 400);
        }}
      >
        <Form className={styles.formSubscribe}>
          <ErrorMessage
            name='name'
            render={msg => <div className={styles.error}>{msg}</div>}
          />
          <Field
            name='name'
            placeholder={'NAME'}
            type={'text'}
          />
          <ErrorMessage
            render={msg => <div className={styles.error}>{msg}</div>}
            name='email'
          />
          <Field
            name='email'
            type='email'
            placeholder={'EMAIL'}
          />
          <ErrorMessage
            render={msg => <div className={styles.error}>{msg}</div>}
            name='phone'
          />
          <Field
            name='phone'
            type='text'
            placeholder={'PHONE'}
          />
          <label
            className={styles.checkbox}
            htmlFor='agree'
          >
            {dataPolicy.agreeData}
            <input
              id='agree'
              type='checkbox'
              checked={checked}
              onChange={e => handleInputChange(e)}
            />
            <span className={styles.checkMark} />
          </label>
          <button
            className={`${styles.btnSubscribe} ${checked && styles.hover}`}
            id={'btnSub'}
            type='submit'
          >
            SUBSCRIBE NOW
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormSubscribe;
