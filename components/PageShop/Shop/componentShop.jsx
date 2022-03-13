import React from 'react';
import styles from '../../../styles/PageShop/Shop/componentShop.module.scss';
import Products from '../Products/componentProduct';
import SideBar from '../SideBar/componentSideBar';

const Shop = () => {
  return (
    <div className={styles.shop}>
      <SideBar />
      <Products />
    </div>
  );
};

export default Shop;
