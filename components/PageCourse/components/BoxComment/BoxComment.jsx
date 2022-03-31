import React from 'react';
import styles from './BoxComment.module.scss';
import SectionTitle from '../../../SectionTitle/componentSectionTitle';

const BoxComment = () => {
  return (
    <div>
      <SectionTitle title={'Add Your Comment'}  left={true} />
      <div className={styles.formInfo}>
        <input className={styles.input} id='name' type='text' placeholder={'NAME'} />
        <input className={styles.input} id='email' type='text' placeholder={'EMAIL'} />
        <label className={styles.checkbox} htmlFor='saveInfo'>SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT
          TIME I COMMENT.
          <input id='saveInfo' type='checkbox' />
          <span className={styles.checkMark} />
        </label>
        <textarea className={`${styles.input} ${styles.inputComment}`} rows='20' cols='50' name='comment'
                  placeholder={'COMMENT'} />
        <label className={`${styles.checkbox} ${styles.fontBold}`} htmlFor='agreePolicy'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.
          FOR FURTHER DETAILS ON HANDLING USER DATA, SEE OUR <span>PRIVACY POLICY</span>.
          <input id='agreePolicy' type='checkbox' />
          <span className={styles.checkMark} />
        </label>
        <label className={`${styles.checkbox} ${styles.fontBigger}`} htmlFor='agreeData'>I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED. <abbr title='You need to accept this checkbox.'>*</abbr>
          <input id='agreeData' type='checkbox' />
          <span className={styles.checkMark} />
        </label>
        <button id={'btnSub'} className={styles.btnSubscribe}>ADD COMMENT</button>
      </div>
    </div>
  );
};

export default BoxComment;
