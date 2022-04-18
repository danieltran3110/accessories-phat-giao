import React from 'react';
import styles from './BoxComments.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const BoxComments = ({ _data }) => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.comment}>
        <p className={styles.titleBox}>Recent Comments</p>
        {_data.map((_data, index) => (
          <div
            className={styles.wrapperComment}
            key={index}
          >
            <p className={styles.adminState}>
              ADMIN <span>{_data.state}</span>
            </p>
            <p className={styles.name}>{_data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxComments;
