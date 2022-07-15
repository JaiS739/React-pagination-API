import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (var i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((e) => (
          <li key={e} className="page-item">
            <a onClick={() => paginate(e)} href="!#" className="page-link">
              {e}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
