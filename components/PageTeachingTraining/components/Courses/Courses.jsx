import React from 'react';
import styles from './Courses.module.scss';
import Image from 'next/image';
import { dataCourses } from '../../../../utils/data-config';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const Courses = () => {
  return (
    <>
      {dataCourses.map((_data, index) =>
        <div className={stylesGlobal.backgroundColor} key={index}>
          <div className={styles.courses} >
            <figure className={styles.pic}>
              <Image src={_data.src} alt={'courses'} />
              <figcaption className={styles.btnView}>VIEW</figcaption>
            </figure>
            <div className={styles.coursesWrapper}>
              <div className={styles.infoCourse}>
                <h3 className={styles.title}>{_data.title}</h3>
                <p className={styles.content}>{_data.content}</p>
              </div>
              <div className={styles.meta}>
                <p className={styles.time}><b>BEGINNING</b> {_data.beginning}</p>
                <p className={styles.time}><b>DURATION</b> {_data.duration}</p>
                <p className={styles.time}><b>COST</b> {_data.cost}</p>
              </div>
              <div className={styles.btnLearn}>LEARN</div>
            </div>
          </div>
        </div>,
      )}
    </>);
};

export default Courses;
