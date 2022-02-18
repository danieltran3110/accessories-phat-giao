import React from 'react';
import styles from '../../../styles/Event/componentEvent.module.scss';
import { dataEvent } from '../../../utils/data-config';

const EventsBox = () => {
  return (
    <>
      {dataEvent.map((_data, index) => {
        return (
          <div className={styles.dateEvent} key={index}>
            <p className={styles.dateMonth}>
              <span className={styles.date}>{_data.date}</span>
              <br /> {_data.month}
            </p>
            <figure className={styles.picEvent}>
              <img src={_data.url.src} alt='Event' />
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

export default EventsBox;
