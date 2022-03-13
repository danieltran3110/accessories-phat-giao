import React from 'react';
import styles from '../../../styles/PageHome/Event/componentEvent.module.scss';
import EventsBox from './components/eventsBox';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/componentSectionTitle';

const Event = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.event}>
            <div className={styles.titleEvent}>
              <SectionTitle title={'Upcoming Events'}/>
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
