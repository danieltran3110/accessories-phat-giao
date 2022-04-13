import React from 'react';
import styles from './SectionTitle.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';


const SectionTitle = (props) => {
  return (
    <section className={stylesGlobal.section}>
      <p className={props.left ? styles.title + ' ' + styles.left : styles.title}>{props.title}</p>
    </section>
  );
};

export default SectionTitle;
