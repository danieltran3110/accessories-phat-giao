import React, { useState } from 'react';
import styles from './BoxCalendar.module.scss';
import Calendar from 'react-calendar';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const BoxCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={stylesGlobal.backgroundColor}>
      <Calendar className={styles.calendar} onChange={onChange} value={value} />
    </div>
  );
};

export default BoxCalendar;
