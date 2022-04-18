import styles from './Submenu.module.scss';
import { fadeIn } from 'react-animations';
import Link from 'next/link';

import { css, StyleSheet } from 'aphrodite';

const classes = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s',
  },
});

export default function Submenu(props) {
  const submenu = props.submenu;
  const classImplement = props.classImplement;

  return (
    <div
      className={`${styles.submenu} ${classImplement} ${css(classes.fadeIn)}`}
    >
      {submenu.map((data, index) => (
        <div
          className={styles.subItemWrap}
          key={index}
        >
          {data.url ? (
            <Link href={data.url}>
              <a className={styles.subItem}>{data.title}</a>
            </Link>
          ) : (
            <>
              <input
                className={styles.checkbox}
                type='checkbox'
                id={data.id}
                name={data.id}
              />
              <label
                className={styles.icon}
                htmlFor={data.id}
              >
                <i className='fa fa-angle-right' />
              </label>
              <div className={styles.subItem}>{data.title}</div>
              <Submenu
                submenu={data.submenu}
                classImplement={styles.submenu}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
