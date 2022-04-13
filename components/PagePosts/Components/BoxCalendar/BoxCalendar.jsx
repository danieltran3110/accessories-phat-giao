import React from 'react';
import styles from './BoxCalendar.module.scss';
import Calendar from 'react-calendar';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const BoxCalendar = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <Calendar className={styles.calendar} />
    </div>
  );
};

export default BoxCalendar;
