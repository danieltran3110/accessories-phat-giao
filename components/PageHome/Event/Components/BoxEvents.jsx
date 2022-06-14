import React from 'react';
import styles from '../Event.module.scss';
import Image from 'next/image';
import { attributes } from '../../../../content/home/event.md';

const BoxEvents = () => {
  let { items } = attributes;
  let day;
  let month;
  return (
    <>
      {items.map((_data, index) => {
        if (_data.date !== undefined) {
          day = _data.date.split(',')[0];
          month = _data.date.split(',')[1];
        }
        return (
          <div
            className={styles.dateEvent}
            key={index}
          >
            <p className={styles.dateMonth}>
              <span className={styles.date}>{day}</span>
              <br /> {month}
            </p>
            <figure className={styles.picEvent}>
              <Image
                className={styles.img}
                src={_data.url}
                alt='Event'
                width={16}
                height={9}
                layout='responsive'
              />
            </figure>
            <div className={styles.detailEvent}>
              <div className={styles.title}>{_data.title}</div>
              <div className={styles.timeCost}>
                <b>TIME</b> {_data.timeOpen} - {_data.timeClose}
                <p className={styles.cost}>
                  <b>COST</b> ${_data.cost}
                </p>
              </div>
              <div className={styles.intro}>{_data.content}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BoxEvents;
