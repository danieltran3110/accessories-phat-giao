import React, { useEffect, useState } from 'react';
import styles from '../../../PageShop/SideBar/componentSideBar.module.scss';
import Categories from '../../../PageShop/SideBar/component/componentCategories';
import { dataCategoriesPost, dataTagsPosts } from '../../../../utils/data-config';
import Search from '../Search/Search';
import Tags from '../../../PageShop/SideBar/component/componentTags';
import BoxCalendar from '../BoxCalendar/BoxCalendar';

const SideBarPosts = () => {

  return (
    <div className={styles.sideBarInner}>
      <Search />
      <Categories data={dataCategoriesPost} />
      <BoxCalendar />
      <Tags data={dataTagsPosts}/>
    </div>
  );
};

export default SideBarPosts;
