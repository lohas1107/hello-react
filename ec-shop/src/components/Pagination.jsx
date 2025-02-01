import PropTypes from 'prop-types';

function Pagination({
  pagination,
  onPageChange
}) {
  const handlePageChange = (event, page) => {
    event.preventDefault();
    onPageChange(page);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a
            href="/"
            aria-label="Previous"
            className={`page-link ${pagination.has_pre ? '' : 'disabled'}`}
            onClick={(event) => handlePageChange(event, pagination.current_page - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {[...new Array(pagination.total_pages)].map((_, i) => (
          <li className="page-item" key={`${i}_page`}>
            <a
              href="/"
              className={`page-link ${i + 1 === pagination.current_page && 'active'}`}
              onClick={(event) => handlePageChange(event, i + 1)}
            >
              {i + 1}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            href="/"
            aria-label="Next"
            className={`page-link ${pagination.has_next ? '' : 'disabled'}`}
            onClick={(event) => handlePageChange(event, pagination.current_page + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination