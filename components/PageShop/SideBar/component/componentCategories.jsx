import React from 'react';
import styles from '../componentSideBar.module.scss';
import Link from 'next/link';

const Categories = ({data}) => {

  return (
    <div className={styles.backgroundColorOrange}>
      <div className={styles.wrapperBox}>
        <h2 className={styles.titleWhite}>Categories</h2>
        <ul className={styles.listItem}>
          {data.map((_data, index) =>
            <li key={index}>
              <Link href={_data.href}><a>{_data.item}</a></Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
