import React from 'react';
import styles from '../../../styles/NavBar/componentNavBar.module.scss';
import { dataNavbar } from '../../../utils/data-config';

const NavBarLeftSide = () => {
  return (
    <>
      {dataNavbar.map((_data, index) => {
        return (
          <div className={styles.title} key={index}>
            <span>{_data.menu}</span>
            {_data.subMenu && (
              <div className={styles.dropdownContent}>
                {_data.subMenu.map((_data2, index) => {
                  return <p key={index}>{_data2}</p>;
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NavBarLeftSide;
