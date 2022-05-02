import styles from './BoxCalendar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import range from 'lodash-es/range';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const todayObj = dayjs();

const BoxCalendar = () => {
  const [dayObj, setDayObj] = useState(dayjs());

  const thisYear = dayObj.year();
  const thisMonth = dayObj.month(); // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth();

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day(); // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();

  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperBox}>
        <div className={styles['calendar']}>
          <div className={styles['header']}>
            <div className={styles['datetime']}>{dayObj.format('MMM YYYY')}</div>
          </div>
          <div className={styles['week-container']}>
            {weekDays.map(d => (
              <div className={styles['week-cell']} key={d}>
                {d}
              </div>
            ))}
          </div>
          <div className={styles['day-container']}>
            {range(weekDayOf1).map(i => (
              <div className={`${styles.dayCell} ${styles['day-cell--faded']}`} key={i}>
                {dayObjOf1.subtract(weekDayOf1 - i, 'day').date()}
              </div>
            ))}

            {range(daysInMonth).map(i => (
              <div
                className={`${styles['dayCell']} ${styles['day-cell--in-month']} ${
                  i + 1 === todayObj.date() &&
                  thisMonth === todayObj.month() &&
                  thisYear === todayObj.year()
                    ? styles['day-cell--today']
                    : ' '
                }`}
                key={i}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxCalendar;