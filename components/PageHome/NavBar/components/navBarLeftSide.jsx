import React from 'react';
import styles from '../../../../styles/PageHome/NavBar/componentNavBar.module.scss';
import { dataNavbar } from '../../../../utils/data-config';
import Link from 'next/link';

const NavBarLeftSide = ({ showing }) => {
  return (
    <>
      <ul className={showing ? styles.showDefault : ''}>
        {dataNavbar.map((_data, index) => {
          return (
            <li
              className={_data.subMenu ? styles.menuHasDropDown : ''}
              key={index}
            >
              <Link href={_data.href}>
                <a>
                  {_data.title+ ' '}
                  {_data.subMenu && (
                    <label title='toggle menu' htmlFor={_data.title}>
                      <i className='fa fa-angle-down' />
                    </label>
                  )}
                </a>
              </Link>
              {_data.subMenu && (
                <>
                  <input className={styles.input2} type='checkbox' id={_data.title} />
                  <ul className={styles.menuDropdown}>
                    {_data.subMenu.map((_data2, index2) => {
                      return (
                        <li
                          className={
                            _data2.subMenu
                              ? `${styles.menuHasDropDown} ${styles.menuHasFlyOut}`
                              : ''
                          }
                          key={index2}
                        >
                          <Link href={'/'}>
                            <a>
                              {_data2.title}&nbsp;
                              {_data2.subMenu && (
                                <label title='toggle menu' htmlFor={_data2.title}>
                                  <i className={`' fa fa-angle-down ' ${styles.menuDownIcon}`} />
                                  <i className={`' fa fa-angle-right ' ${styles.menuRightIcon}`} />
                                </label>
                              )}
                            </a>
                          </Link>
                          <input className={styles.input2} type='checkbox' id={_data2.title} />
                          {_data2.subMenu && (
                            <ul className={styles.menuDropdown}>
                              {_data2.subMenu.map((_data3, index3) => {
                                return (
                                  <li key={index3}>
                                    <Link href={_data3.href}>
                                      <a>{_data3.title}</a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>

              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavBarLeftSide;
