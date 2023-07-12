import React, { Component } from 'react'
import _ from "lodash"
import { paginate } from './paginate';

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    const pageCount = Math.ceil(itemsCount/pageSize);

    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
        <React.Fragment>
            <nav>
                <ul className='pagination'>
                    {pages.map(page => (
                        <li key={page} className={page === currentPage ? 'page-item active': "page-item"}>
                            <a className='page-link' onClick={() => onPageChange(page)}>
                                {page}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    );
}
 
export default Pagination;