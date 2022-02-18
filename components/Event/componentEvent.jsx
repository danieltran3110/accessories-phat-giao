import React from 'react';
import styles from '../../styles/Event/componentEvent.module.scss';
import EventsBox from './components/eventsBox';

const Event = () => {
  return (
    <div className={styles.container}>
      <div className={styles.event}>
        <div className={styles.titleEvent}>
          <p className={styles.comingEvent}>Upcoming Events</p>
          <p className={styles.seeComingEvent}>SEE UPCOMING EVENTS</p>
        </div>
        <EventsBox />
        <div className={styles.btnViewAllEvent}>VIEW ALL EVENT</div>
      </div>
    </div>
  );
};

export default Event;
