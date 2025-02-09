import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { api } from "../api/api";

function OrderForm({ onSubmitCompleted }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await api
      .createOrder(data)
      .then(() => {
        onSubmitCompleted();
        reset();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          收件人姓名
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="請輸入姓名"
          {...register("name", { required: "請輸入收件人姓名。" })}
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          收件人 Email
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="請輸入 Email"
          {...register("email", { required: "請輸入收件人 Email。" })}
        />
        {errors.email && (
          <p className="text-danger">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="tel" className="form-label">
          收件人電話
        </label>
        <input
          id="tel"
          type="tel"
          className="form-control"
          placeholder="請輸入電話"
          {...register("tel", { 
            required: "請輸入收件人電話。",
            minLength: {
              value: 8,
              message: "電話號碼至少需要 8 碼。",
            },
            pattern: {
              value: /^\d+$/,
              message: "電話號碼格式不正確，僅限數字。",
            },
          })}
        />
        {errors.tel && (
          <p className="text-danger">{errors.tel.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          收件人地址
        </label>
        <input
          id="address"
          type="text"
          className="form-control"
          placeholder="請輸入地址"
          {...register("address", { required: "請輸入收件人地址。" })}
        />
        {errors.address && (
          <p className="text-danger">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          留言
        </label>
        <textarea
          id="message"
          className="form-control"
          placeholder="留言"
          rows="3"
          {...register("message")}
        />
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-danger">
          送出訂單
        </button>
      </div>
    </form>
  );
}

OrderForm.propTypes = {
  onSubmitCompleted: PropTypes.func.isRequired,
};

export default OrderForm;
