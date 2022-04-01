import React, { useEffect } from 'react';
import styles from './componentSideBar.module.scss';
import Cart from './component/componentCart';
import Filter from './component/componentFilter';
import Categories from './component/componentCategories';
import Tags from './component/componentTags';

const SideBar = () => {

  // useEffect(() => {
  //   const boxCategories = document.getElementById('boxCategories');
  //   let sticky = boxCategories.offsetTop;
  //
  //   function FuncSticky() {
  //     if ((window.pageYOffset) >= sticky) {
  //       boxCategories.classList.add(styles.sticky);
  //     } else {
  //       boxCategories.classList.remove(styles.sticky);
  //     }
  //   }
  //
  //   window.onscroll = function() {
  //     FuncSticky();
  //   };
  // });

  return (
    <div className={styles.sideBarInner} id={'boxCategories'}>
      <Cart />
      <Filter />
      <Categories />
      <Tags />
    </div>
  );
};

export default SideBar;
