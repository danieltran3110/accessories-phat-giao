import React from 'react';
import styles from './SideBar.module.scss';
import Cart from './Component/Cart';
import Filter from './Component/Filter';
import Categories from './Component/Categories/Categories';
import Tags from './Component/Tags/Tags';
import { dataCategories, dataTags } from '../../../utils/data-config';

const SideBar = () => {
  return (
    <div
      className={styles.sideBarInner}
      id={'boxCategories'}
    >
      <Cart />
      <Filter />
      <Categories data={dataCategories} />
      <div
        className={styles.sticky}
        id={'tags'}
      >
        <Tags data={dataTags} />
      </div>
    </div>
  );
};

export default SideBar;
