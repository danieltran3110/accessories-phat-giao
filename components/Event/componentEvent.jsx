import React from 'react';
import styles from '../../styles/Event/componentEvent.module.scss';
import EventsBox from './components/eventsBox';
import stylesGlobal from '../../assets/scss/global.module.scss';

const Event = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.event}>
            <div className={styles.titleEvent}>
              <p className={styles.comingEvent}>Upcoming Events</p>
              <p className={styles.seeComingEvent}>SEE UPCOMING EVENTS</p>
            </div>
            <EventsBox />
            <div className={styles.btnViewAllEvent}>VIEW ALL EVENT</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
