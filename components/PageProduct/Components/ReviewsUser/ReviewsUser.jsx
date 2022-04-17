import React from 'react';
import styles from './ReviewsUser.module.scss';
import Image from 'next/image';
import Stars from '../../../PageShop/Products/Component/ComponentStars';
import { dataReview } from '../../../../utils/data-config';
import FormReviews from '../FormReviews/FormReviews';

const ReviewsUser = () => {
  const _data = dataReview;

  return (
    <div className={styles.displayFlex}>
      <div className={styles.userReview}>
        <p className={styles.countView}>{`1 review for The Buddha’s Way of Happiness`}</p>
        <div className={styles.userComment}>
          <figure className={styles.pic}>
            <Image src={_data.src} alt={_data.alt} />
          </figure>
          <p className={styles.content}>{_data.person} – <span className={styles.time}>{_data.time}</span>
            <span className={styles.comment}> {_data.comment}</span></p>
          <div className={styles.stars}>{<Stars numStars={5} />}</div>
        </div>
      </div>
      <FormReviews />
    </div>);
};

export default ReviewsUser;
