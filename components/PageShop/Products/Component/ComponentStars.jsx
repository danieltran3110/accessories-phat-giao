import React from 'react';

const Stars = (props) => {
  const numStars = props.numStars;

  function renderStarts() {
    const items = [];
    for (let i = 0; i < numStars; i++) {
      items.push(
        <i className='fa fa-star' aria-hidden='true' />,
      );
    }
    return items;
  }

  return (
    renderStarts()
  );
};

export default Stars;
