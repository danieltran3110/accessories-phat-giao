import React from 'react';
import styles from './Reactions.module.scss';
import { dataReaction } from '../../../../utils/data-config';
// import { FaLaugh } from 'react-icons/fa';


const Reactions = () => {
  return (
    <div className='container'>
      <p className={styles.reactionTitle}>What's Your Reaction?</p>
      <div className={styles.reactionWrapper}>
        {dataReaction.map((_data, index) =>
          <div className={styles.reaction} key={index}>
            <div className={styles.emotional}>
              <i className={_data.className} aria-hidden='true' />
              <p className={styles.count}>{_data.count}</p>
              <p className={styles.title}>{_data.title}</p>
            </div>
          </div>,
        )}
      </div>
    </div>);
};

export default Reactions;
