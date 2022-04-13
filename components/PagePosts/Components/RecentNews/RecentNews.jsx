import React from 'react';
import styles from './RecentNews.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import News from './Components/News';

const RecentNews = () => {
  return (
    <div className={stylesGlobal.backgroundColor}>
      <div className={styles.wrapperRecentNews}>
        <p className={styles.name}>Recent News</p>
        <News />
      </div>
    </div>
  );
};

export default RecentNews;
