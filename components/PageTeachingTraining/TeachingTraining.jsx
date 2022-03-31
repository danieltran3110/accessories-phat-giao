import React, { useState } from 'react';
import styles from './TeachingTraining.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SectionTitle from '../SectionTitle/componentSectionTitle';
import Courses from './components/Courses/Courses';

const TeachingTraining = () => {

  const [checked, setChecked] = useState(false);

  const addHover = () => {
    document.getElementById('btnSub').classList.add(styles.hover);
  };

  return (
    <div className={`${stylesGlobal.container1}`}>
      <SectionTitle title={'Dharma School'} />
      <div className={styles.teachingTraining}>
        <Courses />
      </div>
      <div className={styles.subscribe}>
        <p className={styles.invite}>Join our mailing list to keep informed of the happenings at The Buddhist
          Society.</p>
        <div className={styles.formSubscribe}>
          <input id='email' type='text' placeholder={'EMAIL'} />
          <button id={'btnSub'} className={styles.btnSubscribe}>SUBSCRIBE NOW</button>
        </div>
        <label className={styles.checkbox} htmlFor='agree'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.
          <input id='agree' type='checkbox'
                 checked={() => addHover()}
          />
          <span className={styles.checkMark} />
        </label>
      </div>
    </div>
  );
};

export default TeachingTraining;
