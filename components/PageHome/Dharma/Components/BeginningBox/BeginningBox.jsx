import React from 'react';
import styles from './BeginningBox.module.scss';
import { dataBeginningBox } from '../../../../../utils/data-config';
import stylesGlobal from '../../../../../assets/scss/global.module.scss';

const BeginningBox = () => {
  return (
      <div className={styles.beginningBox}>
        <p className={styles.content}>{dataBeginningBox.content}</p>
        <p className={styles.btnStart}>{dataBeginningBox.btnName}</p>
      </div>
  );
};

export default BeginningBox;
