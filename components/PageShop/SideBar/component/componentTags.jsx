import React from 'react';
import styles from '../../../../styles/PageShop/SideBar/componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import { dataTags } from '../../../../utils/data-config';

const Tags = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.title}>Tags</h2>
        <div className={styles.itemTag}>
          {dataTags.map((_data, index) =>
            <a href={_data.href} key={index}>{_data.item}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
