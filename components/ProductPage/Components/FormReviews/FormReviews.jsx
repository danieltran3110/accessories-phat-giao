import React, { useState } from 'react';
import styles from './FormReviews.module.scss';
import { Formik, Field, Form, FastField } from 'formik';
import stylesForm from '../../../PageCourse/components/BoxComment/BoxComment.module.scss';
import StarsRating from '../StarsRating/StarsRating';

const FormReviews = () => {

  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }

  return (
    <div className={styles.addReview}>
      <h3 className={styles.addAReview}>Add a review</h3>
      <p className={styles.require}>Your email address will not be published. Required fields are marked *</p>
      <Formik initialValues={{ name: '', email: '' }}
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
        <Form className={stylesForm.formInfo}>
          <label htmlFor='name'>Name</label>
          <Field className={stylesForm.input2} name={'name'}  id={'name'} />
          <label htmlFor='email'>Email</label>
          <Field className={stylesForm.input2} name={'email'} type='email' id={'email'} />
          <label className={stylesForm.checkbox} htmlFor='saveInfo'>SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER
            FOR THE NEXT
            TIME I COMMENT.
            <input id='saveInfo' type='checkbox' />
            <span className={stylesForm.checkMark} />
          </label>
          <div className={stylesForm.stars}>
            <StarsRating />
          </div>
          <label htmlFor='comment'>Your review</label>
          <Field className={`${stylesForm.input2} ${stylesForm.inputComment}`} component={'textarea'} id={'comment'} rows='20' cols='50' name='comment'
                    placeholder={'COMMENT'} />
          <label className={`${stylesForm.checkbox} ${stylesForm.fontBold}`} htmlFor='agreePolicy'>I AGREE THAT MY
            SUBMITTED DATA IS BEING COLLECTED AND STORED.
            FOR FURTHER DETAILS ON HANDLING USER DATA, SEE OUR <span>PRIVACY POLICY</span>.
            <input id='agreePolicy'
                   type='checkbox'
                   checked={checked}
                   onChange={(e) => handleInputChange(e)} />
            <span className={stylesForm.checkMark} />
          </label>
          <label className={`${stylesForm.checkbox} ${stylesForm.fontBigger}`} htmlFor='agreeData'>I AGREE THAT MY
            SUBMITTED DATA IS BEING COLLECTED AND STORED. <abbr title='You need to accept this checkbox.'>*</abbr>
            <input id='agreeData' type='checkbox' />
            <span className={stylesForm.checkMark} />
          </label>
          <button id={'btnSub'} className={`${stylesForm.btnSubscribe} ${checked && stylesForm.active}`}>
            SUBMIT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormReviews;
