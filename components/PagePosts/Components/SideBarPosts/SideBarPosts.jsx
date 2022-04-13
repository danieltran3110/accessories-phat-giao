import React from 'react';
import styles from './SideBarPosts.module.scss';
import Categories from '../../../PageShop/SideBar/Component/Categories/Categories';
import { dataCategoriesPost, dataStateComment, dataTagsPosts } from '../../../../utils/data-config';
import Search from '../Search/Search';
import Tags from '../../../PageShop/SideBar/Component/Tags/Tags';
import BoxCalendar from '../BoxCalendar/BoxCalendar';
import RecentNews from '../RecentNews/RecentNews';
import BoxComments from '../BoxComments/BoxComments';

const SideBarPosts = () => {
  return (
    <div className={styles.sideBarInner}>
      <Search />
      <Categories data={dataCategoriesPost} />
      <RecentNews />
      <BoxCalendar />
      <Tags data={dataTagsPosts} />
      <BoxComments _data={dataStateComment} />
    </div>
  );
};

export default SideBarPosts;
