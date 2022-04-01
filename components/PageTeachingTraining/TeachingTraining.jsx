import React, { useState } from 'react';
import styles from './TeachingTraining.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SectionTitle from '../SectionTitle/componentSectionTitle';
import Courses from './components/Courses/Courses';

const TeachingTraining = () => {

  const [checked, setChecked] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    setChecked(target.checked);
  }

  return (
    <div className={`${stylesGlobal.container1}`}>
      <SectionTitle title={'Dharma School'} />
      <section className={stylesGlobal.section}>
        <div className={styles.teachingTraining}>
          <Courses />
        </div>
      </section>
      <section className={stylesGlobal.section}>
        <div className={styles.subscribe}>
          <p className={styles.invite}>Join our mailing list to keep informed of the happenings at The Buddhist
            Society.</p>
          <div className={styles.formSubscribe}>
            <input id='email' type='text' placeholder={'EMAIL'} />
            <button id={'btnSub'} className={`${styles.btnSubscribe} ${checked && styles.hover}`}>SUBSCRIBE NOW</button>
          </div>
          <label className={styles.checkbox} htmlFor='agree'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND
            STORED.
            <input id='agree' type='checkbox'
                   checked={checked}
                   onChange={(e) => handleInputChange(e)}
            />
            <span className={styles.checkMark} />
          </label>
        </div>
      </section>
    </div>
  );
};

export default TeachingTraining;
