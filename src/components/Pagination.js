import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pagination__item">
            <Link onClick={() => paginate(number)} to="" className="pagination-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;