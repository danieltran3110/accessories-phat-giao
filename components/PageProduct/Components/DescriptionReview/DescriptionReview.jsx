import React, { useState } from 'react';
import styles from './DescriptionReview.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import ReviewsUser from '../ReviewsUser/ReviewsUser';

const DescriptionReview = ({ _data }) => {
  const [view, setView] = useState(false);

  return (
    <div className={styles.descriptionReviews}>
      <div className={styles.btn}>
        <div
          className={`${stylesGlobal.button2} ${styles.btnDescription} ${
            view && stylesGlobal.inActive
          }`}
          onClick={() => setView(!view)}
        >
          DESCRIPTION
        </div>
        <div
          className={`${stylesGlobal.button2} ${styles.btnReviews} ${
            !view && stylesGlobal.inActive
          }`}
          onClick={() => setView(!view)}
        >
          REVIEWS (1)
        </div>
      </div>
      {!view && (
        <p className={styles.contentDescription}>{_data}</p>
      )}
      {view && <ReviewsUser />}
    </div>
  );
};

export default DescriptionReview;
