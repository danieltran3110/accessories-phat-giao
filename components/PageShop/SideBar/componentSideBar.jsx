import React, { useEffect, useState } from 'react';
import styles from './componentSideBar.module.scss';
import Cart from './component/componentCart';
import Filter from './component/componentFilter';
import Categories from './component/ComponentCategories/ComponentCategories';
import Tags from './component/ComponentTags/ComponentTags';
import { dataCategories, dataTags } from '../../../utils/data-config';

const SideBar = () => {
  // useEffect(() => {
  //   const boxCategories = document.getElementById('boxCategories');
  //   let sticky2 = boxCategories.offsetTop;
  //
  //   function FuncSticky2() {
  //     if ((window.pageYOffset) >= sticky2) {
  //       boxCategories.classList.add(styles.sticky);
  //     } else {
  //       boxCategories.classList.remove(styles.sticky);
  //     }
  //   }
  //
  //   window.onscroll = function() {
  //     FuncSticky2();
  //   };
  // },[]);

  return (
    <div className={styles.sideBarInner} id={'boxCategories'}>
      <Cart />
      <Filter />
      <Categories data={dataCategories} />
      <Tags data={dataTags} />
    </div>
  );
};

export default SideBar;
