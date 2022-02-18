import React from 'react';
import styles from '../../styles/Feature/componentFeature.module.scss';
import { dataFeature } from '../../utils/data-config';

const Feature = () => {
  return (
    <div className={styles.feature}>
      {dataFeature.map((_data, index) => {
        return (
          <figure className={styles.picFeature} key={index}>
            <img src={_data.url.src} alt='Feature' />
            <figcaption className={styles.titleFeature}>
              {_data.title}
            </figcaption>
            <figcaption className={styles.contentFeature}>
              {_data.content}
            </figcaption>
            <figcaption className={styles.btnView}>VIEW</figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default Feature;
