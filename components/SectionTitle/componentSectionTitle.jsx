import React from 'react';
import styles from './componentSectionTitle.module.scss';


const SectionTitle = (props) => {
  return (
    <p className={props.left ? styles.title + ' ' + styles.left : styles.title}>{props.title}</p>
  );
};

export default SectionTitle;
