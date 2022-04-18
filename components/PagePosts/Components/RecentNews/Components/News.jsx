import React from 'react';
import styles from './News.module.scss';
import { dataNews } from '../../../../../utils/data-config';
import ComponentPicture from '../../ComponentPicture/ComponentPicture';

const News = () => {
  return (
    <>
      {dataNews.map((_data, index) => (
        <div
          className={styles.news}
          key={index}
        >
          <ComponentPicture
            _data={_data}
            maxHeight={true}
          />
          <p className={styles.title}>{_data.title}</p>
          <p className={styles.author}>
            <span>BY</span> {_data.author}
          </p>
        </div>
      ))}
    </>
  );
};

export default News;
