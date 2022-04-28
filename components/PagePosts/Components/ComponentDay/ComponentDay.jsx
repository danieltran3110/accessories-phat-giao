import React, { useEffect, useState } from 'react';
import styles from './ComponentDay.module.scss';

const ComponentDay = ({ _data, colorRevert, padding }) => {

  // const month = _data.date.split(',')[1];
  // const [day, setDay] = useState(_data);
  useEffect(() => {
  // //   console.log(_data.date.split(','));
  //   setDay(day.date.split(',')[0]);
  //   const day = _data.date.split(',')[0];
  //   console.log(_data.date)

  }, [])
  return (
    <div
      className={`${styles.time} ${colorRevert && styles.colorRevert} ${
        padding && styles.padding
      }`}
    >
      <p className={styles.day}>{_data.date}</p>
      <p className={styles.month}>{_data.date}</p>
    </div>
  );
};

export default ComponentDay;
