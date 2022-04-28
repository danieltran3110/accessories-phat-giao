import React, { useContext } from 'react';
import styles from './ComponentPosts.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import ComponentDay from '../ComponentDay/ComponentDay';
import ComponentPicture from '../ComponentPicture/ComponentPicture';
import ComponentSlogan from '../ComponentSlogan/ComponentSlogan';
import Audio from '../../../Audio/Audio';
import { dataFirstPost } from '../../../../utils/data-config';
import ComponentVideo from '../ComponentVideo/ComponentVideo';

const Posts = ({ currentItems }) => {
  return (
    <div className={styles.listPosts}>
      {/*<div className={styles.firstPost}>*/}
      {/*  <ComponentDay*/}
      {/*    _data={dataFirstPost}*/}
      {/*    colorRevert={true}*/}
      {/*  />*/}
      {/*  <p className={styles.title}> {dataFirstPost.titlePost} </p>*/}
      {/*  <p className={styles.author}>*/}
      {/*    <span>POSTED BY</span> {dataFirstPost.authorPost}*/}
      {/*  </p>*/}
      {/*  <p className={styles.content}>{dataFirstPost.content}</p>*/}
      {/*</div>*/}
      {currentItems.map((_data, index) => (
        <div
          className={styles.wrapperPosts}
          key={index}
        >
          {_data.src && <ComponentPicture _data={_data} />}
          {_data.slogan && <ComponentSlogan _data={_data} />}
          {_data.urlAudio && (
            <Audio
              _data={_data}
              index={index}
            />
          )}
          {_data.urlVideo && <ComponentVideo _data={_data} />}
          <p className={styles.title}>
            {_data.titlePost}
            {!_data.src && !_data.urlVideo && <ComponentDay _data={_data} />}
          </p>
          <p className={styles.author}>
            <span>POSTED BY</span> {_data.authorPost}
          </p>
          {_data.content && <p className={styles.content}>{_data.content}</p>}
          <div
            className={`${stylesGlobal.button2} ${stylesGlobal.normal} ${stylesGlobal.BGCBlack}`}
          >
            LEARN MORE
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
