import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../../../PageShop/PaginatedItems/PaginatedItems.module.scss';
import styles2 from './PaginatedItemsProduct.module.scss';
// import { dataAllPosts } from '../../../../utils/data-config';
import Posts from '../ComponentPosts/ComponentPosts';


export default function PaginatedItems({ itemsPerPage, posts }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(posts);
  console.log(posts);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.wrapperPaginate}>
      {/*<Posts currentItems={currentItems} />*/}
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

// export default PaginatedItems;

