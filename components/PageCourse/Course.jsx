import React, { useContext } from 'react';
import styles from './Course.module.scss';
import stylesGlobal from '../../assets/scss/global.module.scss';
import Image from 'next/image';

import { dataAlsoLike } from '../../utils/data-config';
import Reactions from './Components/Reations/Reactions';
import MayLike from './Components/MayLike/MayLike';
import BoxComment from './Components/BoxComment/BoxComment';
import { DetailPostContext } from '../../pages/course/[slug]';
import ReactMarkdown from 'react-markdown';

const Course = () => {
  const detailPost = useContext(DetailPostContext);
  return (
    <div className={`${stylesGlobal.container1}`}>
      <figure className={styles.pic}>
        <Image
          src={dataAlsoLike.src}
          alt={'may be you like'}
        />
      </figure>
      <div className={styles.meta}>
        <p className={styles.time}>
          <b>BEGINNING</b> {dataAlsoLike.beginning}
        </p>
        <p className={styles.time}>
          <b>DURATION</b> {dataAlsoLike.duration}
        </p>
        <p className={styles.time}>
          <b>COST</b> {dataAlsoLike.cost}
        </p>
      </div>
      <p className={styles.content}>
        <ReactMarkdown>
          {detailPost.markdown}
        </ReactMarkdown>
      </p>
      <Reactions />
      <MayLike />
      <BoxComment />
    </div>
  );
};

export default Course;
