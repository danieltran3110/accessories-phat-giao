import React from 'react';
import styles from './componentDharma.module.scss';
import AudioBox from './components/AudioBox/AudioBox';
import LinksContact from './components/LinksContact/LinksContact';
import BeginningBox from './components/BeginningBox/beginningBox';
import stylesGlobal from '../../../assets/scss/global.module.scss';
import SectionTitle from '../../SectionTitle/componentSectionTitle';

const Dharma = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={stylesGlobal.container2}>
        <div className={styles.dharmaWrapper}>
          <div className={styles.titleDharma}>
            <SectionTitle title={'Dharma Talks'}/>
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
