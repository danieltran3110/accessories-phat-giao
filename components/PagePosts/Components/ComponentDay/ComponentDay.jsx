import React from 'react';
import styles from './ComponentDay.module.scss';

const ComponentDay = ({ _data, colorRevert, padding }) => {
  let day;
  let month;
  if (_data.date !== undefined) {
    day = _data.date.split(',')[0];
    month = _data.date.split(',')[1];
  }

  return (
    <div
      className={`${styles.time} ${colorRevert && styles.colorRevert} ${
        padding && styles.padding
      }`}
    >
      <p className={styles.day}>{day}</p>
      <p className={styles.month}>{month}</p>
    </div>
  );
};

export default ComponentDay;
