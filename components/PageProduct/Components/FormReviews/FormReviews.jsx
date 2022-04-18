import React from 'react';
import styles from './FormReviews.module.scss';
import BoxFormik from '../../../Formik/Formik';

const FormReviews = () => {
  return (
    <div className={styles.addReview}>
      <h3 className={styles.addAReview}>Add a review</h3>
      <p className={styles.require}>
        Your email address will not be published. Required fields are marked *
      </p>
      <BoxFormik rating={true} />
    </div>
  );
};

export default FormReviews;
