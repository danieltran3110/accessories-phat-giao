import React, { useEffect, useState } from 'react';
import styles from './componentSideBar.module.scss';
import Cart from './component/componentCart';
import Filter from './component/componentFilter';
import Categories from './component/ComponentCategories/ComponentCategories';
import Tags from './component/ComponentTags/ComponentTags';
import { dataCategories, dataTags } from '../../../utils/data-config';

const SideBar = () => {
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.intersectionRatio === 1 ) {
  //         // entry.target.classList.add(styles.sticky);
  //         // document.querySelector('#boxCategories').classList.add(styles.sticky);
  //         document.getElementById('boxCategories').classList.add(styles.sticky);
  //       } else {
  //         // entry.target.classList.remove(styles.sticky);
  //       }
  //     });
  //   }, {
  //     threshold: 1,
  //   });
  //
  //   const target = document.querySelector('#tags');
  //   // const target2 = document.querySelector('#boxCategories');
  //   observer.observe(target);
  // });

  return (
    <div className={styles.sideBarInner} id={'boxCategories'}>
      <Cart />
      <Filter />
      <Categories data={dataCategories} />
      <div className={styles.sticky} id={'tags'}>
        <Tags data={dataTags} />
      </div>
    </div>
  );
};

export default SideBar;
