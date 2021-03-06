import React from 'react';
import styles from './Event.module.scss';
import BoxEvents from './Components/BoxEvents';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { attributes } from '../../../content/home/event.md';

const Event = () => {
  let { title } = attributes;
  return (
    <div className={stylesGlobal.backgroundColor}>
      <section className={stylesGlobal.section}>
        <div className={stylesGlobal.container2}>
          <div className={styles.event}>
            <div className={styles.titleEvent}>
              <SectionTitle title={title} />
              <p className={styles.seeComingEvent}>SEE UPCOMING EVENTS</p>
            </div>
            <BoxEvents />
            <div className={styles.btnViewAllEvent}>VIEW ALL EVENT</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
