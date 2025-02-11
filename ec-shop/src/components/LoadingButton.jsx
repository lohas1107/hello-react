import { useState } from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

function LoadingButton({
  type,
  text,
  buttonClassName,
  spinnerColor,
  onClick,
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <ReactLoading
          type="spin"
          color={spinnerColor}
          height={20}
          width={20}
        />
      ) : (
        text
      )}
    </button>
  );
}

LoadingButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  buttonClassName: PropTypes.string,
  spinnerColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default LoadingButton;