import React from 'react';
import styles from './componentSideBar.module.scss';
import Cart from './component/componentCart';
import Filter from './component/componentFilter';
import Categories from './component/componentCategories';
import Tags from './component/componentTags';

const SideBar = () => {
  return (
    <div className={styles.sideBarInner}>
      <Cart />
      <Filter />
      <Categories />
      <Tags />
    </div>
  );
};

export default SideBar;
