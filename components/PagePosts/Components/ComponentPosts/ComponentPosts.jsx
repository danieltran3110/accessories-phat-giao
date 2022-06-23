import React from 'react';
import styles from './ComponentPosts.module.scss';
import Link from 'next/link';
import stylesGlobal from '../../../../assets/scss/global.module.scss';
import ComponentDay from '../ComponentDay/ComponentDay';
import ComponentPicture from '../ComponentPicture/ComponentPicture';
import ComponentSlogan from '../ComponentSlogan/ComponentSlogan';
import Audio from '../../../Audio/Audio';
import ComponentVideo from '../ComponentVideo/ComponentVideo';

const Posts = ({ currentItems }) => {
  return (
    <div className={styles.listPosts}>
      {currentItems.map((_data, index) => (
        <div
          className={styles.wrapperPosts}
          key={index}
        >
          {_data.src && <ComponentPicture _data={_data} />}
          {_data.slogan && <ComponentSlogan _data={_data} />}
          {_data.audio && (
            <Audio
              _data={_data.audio}
              index={index}
            />
          )}
          {_data.video && <ComponentVideo _data={_data} />}
          <div className={_data.darkMode && styles.darkPost}>
            <Link href={`/course/${_data.slug}`}>
              <a className={styles.title}>
                {_data.titlePost}
                {!_data.src && !_data.video && (
                  <ComponentDay
                    _data={_data}
                    colorRevert={_data.darkMode}
                    padding={true}
                  />
                )}
              </a>
            </Link>
            <p className={styles.author}>
              <span>POSTED BY</span> {_data.authorPost}
            </p>
            {_data.content && <p className={styles.content}>{_data.content}</p>}
          </div>
          {!_data.darkMode && (
            <div
              className={`${stylesGlobal.button2} ${stylesGlobal.normal} ${stylesGlobal.BGCBlack}`}
            >
              LEARN MORE
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
