import React from 'react';
import styles from '../../styles/Dharma/componentDharma.module.scss';
import AudioBox from './components/audioBox';
import LinksContact from './components/linksContact';
import BeginningBox from './components/beginningBox';
import stylesGlobal from '../../assets/scss/global.module.scss';

const Dharma = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.titleDharma}>
          <p className={styles.comingDharma}>Dharma Talks</p>
        </div>
        <AudioBox />
        <LinksContact />
        <BeginningBox />
      </div>
    </div>
  );
};

export default Dharma;
