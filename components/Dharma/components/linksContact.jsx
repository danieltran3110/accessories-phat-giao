import React from 'react';
import styles from '../../../styles/Dharma/componentLinksContact.module.scss';
import { dataLinksContact } from '../../../utils/data-config';

const LinksContact = () => {
  return (
    <div className={styles.linksContact}>
      {dataLinksContact.map((_data, index) => {
        return (
            <div className={styles.icon} key={index}>
                <i className={_data.iconName}></i>
                {_data.name}
            </div>
        );
      })}
    </div>
  );
};

export default LinksContact;
