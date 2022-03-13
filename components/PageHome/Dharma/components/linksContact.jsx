import React from 'react';
import styles from '../../../../styles/PageHome/Dharma/componentLinksContact.module.scss';
import { dataLinksContact } from '../../../../utils/data-config';

const LinksContact = () => {
  return (
    <div className={styles.linksContact}>
      {dataLinksContact.map((_data, index) => {
        return (
          <div className={styles.icon} key={index}>
            <i aria-hidden className={_data.iconName}/>
            {_data.name}
          </div>
        );
      })}
    </div>
  );
};

export default LinksContact;
