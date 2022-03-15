import React from 'react';
import styles from '../../../../styles/PageShop/SideBar/componentSideBar.module.scss';
import stylesGlobal from '../../../../assets/scss/global.module.scss';

const Stars = (props) => {
  const numStars = props.numStars;

  function renderStarts() {
    const items=[];
    for (let i = 0; i < numStars; i++) {
      items.push(
        <i className='fa fa-star' aria-hidden='true' />
      )
    }
    return items;
  }

    return (
      renderStarts()
    );
  };

  export default Stars;
