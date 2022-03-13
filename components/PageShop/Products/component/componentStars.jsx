import React from 'react';
import styles from '../../../../styles/PageShop/SideBar/componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const Stars = (props) => {
  const numStars = props.numStars;

  return (
    <div>
      <i className='fa fa-star' aria-hidden='true' />
      <i className='fa fa-star' aria-hidden='true' />
      <i className='fa fa-star' aria-hidden='true' />
      <i className='fa fa-star' aria-hidden='true' />
    </div>
  )
    ;
};

export default Stars;
