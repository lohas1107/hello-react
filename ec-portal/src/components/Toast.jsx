import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { Toast as BsToast } from "bootstrap";
import { removeMessage } from "../redux/toastSlice";

const TOAST_DURATION = 2000;

export default function Toast() {
  const messages = useSelector((state) => state.toast.messages);
  const toastRef = useRef({});
  const dispatch = useDispatch();

  useEffect(() => {
    messages.forEach((message) => {
      const messageElement = toastRef.current[message.id];
      if (messageElement) {
        const bsToast = new BsToast(messageElement);
        bsToast.show();

        setTimeout(() => {
          dispatch(removeMessage({ id: message.id }));
        }, TOAST_DURATION);
      }
    });
  }, [messages, dispatch]);

  const handleCloseToast = (id) => {
    dispatch(removeMessage({ id }));
  };

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
      {messages.map((message) => (
        <div
          key={message.id}
          ref={(el) => { toastRef.current[message.id] = el }}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className={`toast-header ${message.status === "success" ? "bg-success" : "bg-danger"} text-white`}>
            <strong className="me-auto">{message.status === "success" ? "成功" : "失敗"}</strong>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleCloseToast(message.id)}
            ></button>
          </div>
          <div className="toast-body">{message.text}</div>
        </div>
      ))}
    </div>
  );
}
