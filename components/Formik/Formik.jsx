import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './Formik.module.scss';
import { dataPolicy } from '../../utils/data-config';
import React, { useState } from 'react';
import * as Yup from 'yup';
import StarsRating from '../PageProduct/Components/StarsRating/StarsRating';

const ReviewSchema =
  Yup.object().shape({
                       name: Yup.string()
                         .min(5, 'The name must be more than 5 and less than 50 characters!')
                         .max(50, 'The name must be more than 5 and less than 50 characters!')
                         .required('Required'),
                       email: Yup.string().email('Invalid email').required('Required'),
                       comment: Yup.string()
                         .min(10, 'The comment must be more than 10 and less than 50 characters!')
                         .max(50, 'The comment must be more than 10 and less than 50 characters!')
                         .required('Required'),
                     });

export default function BoxFormik({rating}) {
  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }
  return (
    <Formik
      initialValues={{ name: '', email: '', comment: '' }}
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
      <Form className={styles.formInfo}>
        <div className={`${styles.displayGrid}`}>
          <div className={`${styles.fieldWrapper} ${rating && styles.gridColumn}`}>
            <ErrorMessage name='name' render={msg => <div className={styles.error}>{msg}</div>} />
            <Field className={`${styles.input}`} id='name' type='text' placeholder={'NAME'} name={'name'} />
          </div>
          <div className={`${styles.fieldWrapper} ${rating && styles.gridColumn}`}>
            <ErrorMessage render={msg => <div className={styles.error}>{msg}</div>} name='email' />
            <Field className={`${styles.input} `} id='email' type='text' placeholder={'EMAIL'} name={'email'} />
          </div>
        </div>
        <label className={styles.checkbox} htmlFor='saveInfo'> {dataPolicy.saveInfo}
          <input id='saveInfo' type='checkbox' />
          <span className={styles.checkMark} />
        </label>
        {rating && <StarsRating />}
        <div className={styles.fieldWrapper}>
          <ErrorMessage render={msg => <div className={styles.error}>{msg}</div>} name='comment' />
          <Field className={`${styles.input} ${styles.inputComment}`} rows='20' cols='50' name='comment'
                 placeholder={'COMMENT'} component={'textarea'} />
        </div>
        <label className={`${styles.checkbox} ${styles.fontBold}`} htmlFor='agreePolicy'>{dataPolicy.agreePolicy}
          <span>PRIVACY POLICY</span>.
          <input id='agreePolicy'
                 type='checkbox'
                 checked={checked}
                 onChange={(e) => handleInputChange(e)} />
          <span className={styles.checkMark} />
        </label>
        <label className={`${styles.checkbox} ${styles.fontBigger}`} htmlFor='agreeData'>{dataPolicy.agreeData} <abbr
          title='You need to accept this checkbox.'>*</abbr>
          <input id='agreeData' type='checkbox' />
          <span className={styles.checkMark} />
        </label>
        <button id={'btnSub'} className={`${styles.btnSubscribe} ${checked && styles.hover}`}>{rating ? 'SUBMIT' : 'ADD COMMENT'}</button>
      </Form>
    </Formik>
  );
}