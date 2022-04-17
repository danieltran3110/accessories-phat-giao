import React from 'react';
import styles from './PageShop.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SideBar from './SideBar/SideBar';
import PaginatedItems from './PaginatedItems/PaginatedItems';


const PageShop = () => {
  return (
    <div className={`${stylesGlobal.container1} ${styles.margin}`}>
      <div className={styles.shop} id='main-content'>
        <SideBar />
        <PaginatedItems itemsPerPage={8} id='content' />
      </div>
    </div>
  );
};

export default PageShop;
