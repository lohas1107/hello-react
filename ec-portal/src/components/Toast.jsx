import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { Toast as BsToast } from "bootstrap";

export default function Toast() {
  const messages = useSelector((state) => state.toast.messages);
  const toastRef = useRef({});

  useEffect(() => {
    messages.forEach((message) => {
      const messageElement = toastRef.current[message.id];
      if (messageElement) {
        const bsToast = new BsToast(messageElement);
        bsToast.show();
      }
    });
  }, [messages]);

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
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
            ></button>
          </div>
          <div className="toast-body">{message.text}</div>
        </div>
      ))}
    </div>
  );
}
