import React from 'react';
import styles from './ComponentDay.module.scss';

const ComponentDay = ({ _data, colorRevert, padding }) => {
  let day;
  let month;
  if (_data.date !== undefined) {
    const withoutCommas = _data.date.replace(/,/g, '');
    day = withoutCommas.split(' ')[0];
    month = withoutCommas.split(' ')[1];
  }

  return (
    <div
      className={`${styles.time} ${colorRevert && styles.colorRevert} ${
        padding && styles.padding
      }`}
    >
      <p className={styles.day}>{month}</p>
      <p className={styles.month}>{day}</p>
    </div>
  );
};

export default ComponentDay;
