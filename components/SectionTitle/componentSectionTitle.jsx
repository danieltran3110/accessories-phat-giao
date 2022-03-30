import React, { useState } from 'react';
import styles from './componentSectionTitle.module.scss';
import { dataWelcome } from '../../utils/data-config';


const SectionTitle = (props) => {
  return (
    <p className={styles.title}>{props.title}</p>
  );
};

export default SectionTitle;
