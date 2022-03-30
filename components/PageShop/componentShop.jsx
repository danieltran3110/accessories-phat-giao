import React from 'react';
import styles from './componentShop.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import SideBar from './SideBar/componentSideBar';
import PaginatedItems from './PaginatedItems/componentPaginatedItems';

const Shop = () => {
  return (
    <div className={`${stylesGlobal.container1} ${styles.margin}`}>
      <div className={styles.shop}>
        <SideBar />
        <PaginatedItems itemsPerPage={8} />
      </div>
    </div>
  );
};

export default Shop;
