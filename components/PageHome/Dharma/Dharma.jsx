import React from 'react';
import styles from './Dharma.module.scss';
import AudioBox from './Components/AudioBox/AudioBox';
import LinksContact from './Components/LinksContact/LinksContact';
import BeginningBox from './Components/BeginningBox/BeginningBox';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Dharma = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.dharmaWrapper}>
          <div className={styles.titleDharma}>
            <SectionTitle title={'Dharma Talks'} />
          </div>
          <AudioBox />
          <LinksContact />
          <BeginningBox />
        </div>
      </div>
    </div>
  );
};

export default Dharma;
