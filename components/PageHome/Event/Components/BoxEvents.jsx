import React from 'react';
import styles from '../Event.module.scss';
import { dataEvent } from '../../../../utils/data-config';
import Image from 'next/image';

const BoxEvents = () => {
  return (
    <>
      {dataEvent.map((_data, index) => {
        return (
          <div
            className={styles.dateEvent}
            key={index}
          >
            <p className={styles.dateMonth}>
              <span className={styles.date}>{_data.date}</span>
              <br /> {_data.month}
            </p>
            <figure className={styles.picEvent}>
              <Image
                className={styles.img}
                src={_data.url}
                alt='Event'
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
