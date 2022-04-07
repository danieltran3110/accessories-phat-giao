import React, { useState } from 'react';
import styles from './TeachingTraining.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SectionTitle from '../SectionTitle/componentSectionTitle';
import Courses from './components/Courses/Courses';
import FormSubscribe from './components/FormSubscribe/FormSubscribe';

const TeachingTraining = () => {


  return (
    <div className={`${stylesGlobal.container1}`}>
      <SectionTitle title={'Dharma School'} />
      <section className={stylesGlobal.section}>
        <div className={styles.teachingTraining}>
          <Courses />
        </div>
      </section>
      <section className={stylesGlobal.section}>
        <FormSubscribe />
      </section>
    </div>
  );
};

export default TeachingTraining;
