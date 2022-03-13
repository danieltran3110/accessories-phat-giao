import React from 'react';
import styles from '../../../styles/PageHome/Dharma/componentDharma.module.scss';
import AudioBox from './components/audioBox';
import LinksContact from './components/linksContact';
import BeginningBox from './components/beginningBox';
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
