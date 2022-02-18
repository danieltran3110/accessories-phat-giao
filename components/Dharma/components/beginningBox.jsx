import React from 'react';
import styles from '../../../styles/Dharma/componentBeginningBox.module.scss';
import { dataBeginningBox } from '../../../utils/data-config';

const BeginningBox = () => {
  return (
    <div className={styles.beginningBox}>
      <p className={styles.content}>{dataBeginningBox.content}</p>
      <p className={styles.btnStart}>{dataBeginningBox.btnName}</p>
    </div>
  );
};

export default BeginningBox;
