import React from 'react';
import styles from './BeginningBox.module.scss';
import { attributes } from '../../../../../content/home/instruction.md';

const BeginningBox = () => {
  let {content} = attributes;
  return (
    <div className={styles.beginningBox}>
      <p className={styles.content}>{content}</p>
      <p className={styles.btnStart}>BEGINNING INSTRUCTION</p>
    </div>
  );
};

export default BeginningBox;
