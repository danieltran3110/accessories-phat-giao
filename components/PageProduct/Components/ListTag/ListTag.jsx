import React from 'react';
import Link from 'next/link';
import styles from './ListTag.module.scss';

export default function ListTag({ _data }) {
  return (
    <>
      {_data.map((_data, index) => (
        <Link
          href='/shop'
          key={index}
        >
          <a className={styles.item}>{_data.item}</a>
        </Link>
      ))}
    </>
  );
}
