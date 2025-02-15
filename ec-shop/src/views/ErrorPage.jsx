export default function ErrorPage() {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold mb-4">404</h1>
        <p className="fs-4 text-secondary mb-4">Oops! Something went wrong.</p>
        <a
          href="/ec-shop/"
          className="btn btn-primary btn-lg mb-4"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
