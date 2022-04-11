import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../../../PageShop/PaginatedItems/componentPaginatedItems.module.scss';
import styles2 from './PaginatedItemsProduct.module.scss';

import { dataAllPosts, dataFirstPost } from '../../../../utils/data-config';
import Posts from '../ComponentPosts/ComponentPosts';
import ComponentDay from '../ComponentDay/ComponentDay';


function PaginatedItems({ itemsPerPage }) {

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(dataAllPosts);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(dataAllPosts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataAllPosts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % dataAllPosts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapperPaginate}>
      <Posts currentItems={currentItems} />
      <ReactPaginate
        nextLabel='→'
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel='←'
        pageClassName={`${styles.pageItem} ${styles.decoration} `}
        pageLinkClassName='page-link'
        previousClassName={`${styles.pageItem} ${styles.iconLeft}`}
        previousLinkClassName={styles.pageLink}
        nextClassName={`${styles.pageItem} ${styles.iconRight}`}
        nextLinkClassName={styles.pageLink}
        breakLabel='/'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={`${styles.pagination} ${styles2.pagination2}`}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;