import React from 'react';
import styles from '../../../../styles/PageShop/SideBar/componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import { dataCategories } from '../../../../utils/data-config';

const Categories = () => {
  return (
    <div className={styles.backgroundColorOrange}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.titleWhite}>Categories</h2>
        <ul className={styles.listItem}>
          {dataCategories.map((_data, index) =>
            <li key={index}>
              <a href={_data.href}>{_data.item}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
