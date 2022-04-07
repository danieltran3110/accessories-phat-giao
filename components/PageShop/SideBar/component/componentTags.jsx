import React from 'react';
import styles from '../componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const Tags = ({ data }) => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Tags</h2>
        <div className={styles.itemTag}>
          {data.map((_data, index) =>
            <a href={_data.href} key={index}>{_data.item}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
