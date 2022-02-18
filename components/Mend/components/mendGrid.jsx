import React, { useState } from 'react';
import styles from '../../../styles/Mend/componentMend.module.scss';
import { dataMend } from '../../../utils/data-config';

const MendGrid = () => {
  return (
    <div className={styles.gridMend}>
      {dataMend.map((_data, index) => {
        return (
          <div className={styles.gridItem} key={index}>
            <i class={_data.iconName}></i>
            {_data.nameMend}
          </div>
        );
      })}
    </div>
  );
};

export default MendGrid;
