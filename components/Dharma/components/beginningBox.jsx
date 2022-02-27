import React from 'react';
import styles from '../../../styles/Dharma/componentBeginningBox.module.scss';
import { dataBeginningBox } from '../../../utils/data-config';
import stylesGlobal from '../../../assets/scss/global.module.scss';

const BeginningBox = () => {
  return (
    <div className={stylesGlobal.container2}>
      <div className={styles.beginningBox}>
        <p className={styles.content}>{dataBeginningBox.content}</p>
        <p className={styles.btnStart}>{dataBeginningBox.btnName}</p>
      </div>
    </div>
  );
};

export default BeginningBox;
