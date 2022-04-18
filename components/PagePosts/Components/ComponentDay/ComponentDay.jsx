import React from 'react';
import styles from './ComponentDay.module.scss';

const ComponentDay = ({ _data, colorRevert, padding }) => {
  return (
    <figcaption
      className={`${styles.time} ${colorRevert && styles.colorRevert} ${
        padding && styles.padding
      }`}
    >
      <p className={styles.day}>{_data.day}</p>
      <p className={styles.month}>{_data.month}</p>
    </figcaption>
  );
};

export default ComponentDay;
