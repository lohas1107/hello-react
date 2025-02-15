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
      <ul className="pagination justify-content-center">
        <li className={`page-item ${!pagination.has_pre ? 'disabled' : ''}`}>
          <a
            href="/"
            aria-label="Previous"
            className="page-link"
            onClick={(event) => handlePageChange(event, pagination.current_page - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {[...Array(pagination.total_pages)].map((_, i) => (
          <li className={`page-item ${i + 1 === pagination.current_page ? 'active' : ''}`} key={`${i}_page`}>
            <a
              href="/"
              className="page-link"
              onClick={(event) => handlePageChange(event, i + 1)}
            >
              {i + 1}
            </a>
          </li>
        ))}

        <li className={`page-item ${!pagination.has_next ? 'disabled' : ''}`}>
          <a
            href="/"
            aria-label="Next"
            className="page-link"
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