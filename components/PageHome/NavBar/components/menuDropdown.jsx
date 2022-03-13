import React from 'react';
import styles from '../../../../styles/PageHome/NavBar/componentNavBar.module.scss';
import { dataNavbar } from '../../../../utils/data-config';

const MenuDropdown = (props) => {
   const dataMenu = props.dataMenu;
  return (
    <ul>
      {dataMenu.map((_data, index) => {
        return (
          <>
            <input type='checkbox' id={_data.title} />
            <ul className={styles.menuDropdown}>
              {_data.subMenu.map((_data2, index2) => {
                return (
                  <>
                    <li className={_data2.subMenu ? `${styles.menuHasDropDown} ${styles.menuHasFlyOut}` : ''}
                        key={index2}>
                      <a href=''>{_data2.title}&nbsp;
                        {_data2.subMenu && <label title='toggle menu' htmlFor={_data2.title}>
                          <i className={'fa fa-caret-down' + ' ' + styles.menuDownIcon} />
                          <i className={'fa fa-caret-right' + ' ' + styles.menuRightIcon} />
                        </label>}
                      </a>
                      <input type='checkbox' id={_data2.title} />
                      {_data2.subMenu && <ul className={styles.menuDropdown}>
                        {_data2.subMenu.map((_data3, index3) => {
                          return (
                            <li key={index3}><a href={_data3.href}>{_data3.title}</a></li>
                          );
                        })}
                      </ul>}
                    </li>
                  </>
                );
              })}
            </ul>
          </>
        );
      })}
    </ul>

  );
};

export default MenuDropdown;
