import React, { useState } from 'react';
import styles from '../Mend.module.scss';
import { dataMend } from '../../../../utils/data-config';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const MendGrid = () => {
  return (
    <section className={stylesGlobal.section}>
      <div className={styles.gridMend}>
        {dataMend.map((_data, index) => {
          return (
            <div className={styles.gridItem} key={index}>
              <i aria-hidden className={_data.iconName} />
              {_data.nameMend}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MendGrid;
