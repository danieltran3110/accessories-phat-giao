import React from 'react';
import styles from '../../styles/Dharma/componentDharma.module.scss';
import AudioBox from './components/audioBox';
import LinksContact from './components/linksContact';
import BeginningBox from './components/beginningBox';

const Dharma = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleDharma}>
        <p className={styles.comingDharma}>Dharma Talks</p>
      </div>
      <AudioBox />
      <LinksContact />
      <BeginningBox />
    </div>
  );
};

export default Dharma;
