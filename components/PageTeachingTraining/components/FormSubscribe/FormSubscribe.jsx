import React, { useState } from 'react';
import styles from './FormSubscribe.module.scss';
import { Formik, Field, Form } from 'formik';

const FormSubscribe = () => {

  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }

  return (
    <div className={styles.subscribe}>
      <p className={styles.invite}>Join our mailing list to keep informed of the happenings at The Buddhist Society.</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          if(checked) {
            // Send to backend
          }
          else {
            // Don't send to backend
            alert('Agree term to subscribe');
          }
        }}
      >
        <Form className={styles.formSubscribe}>
          <Field name='email' type='email' placeholder={'EMAIL'} />
          <button className={`${styles.btnSubscribe} ${checked && styles.hover}`} id={'btnSub'} type='submit'>SUBSCRIBE NOW</button>
          <label className={styles.checkbox} htmlFor='agree'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.
            <input id='agree' type='checkbox'
                   checked={checked}
                   onChange={(e) => handleInputChange(e)}
            />
            <span className={styles.checkMark} />
          </label>
        </Form>
      </Formik>
    </div>);
};

export default FormSubscribe;
