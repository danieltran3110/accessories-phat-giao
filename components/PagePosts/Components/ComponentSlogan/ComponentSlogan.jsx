import React from 'react';
import styles from './ComponentSlogan.module.scss';

const ComponentSlogan = ({_data}) => {

  return (
    <div className={styles.backgroundColor}>
      <p className={styles.content}>{_data.slogan}</p>
      <p className={styles.author}>{_data.authorSlogan}</p>
    </div>
  );
};

export default ComponentSlogan;
