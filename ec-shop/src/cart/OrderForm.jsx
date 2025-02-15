import { useForm } from "react-hook-form";
import LoadingButton from "../components/LoadingButton";
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
    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
      <div className="form-floating mb-4">
        <input
          id="name"
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder="請輸入姓名"
          {...register("name", { required: "請輸入收件人姓名" })}
        />
        <label htmlFor="name">收件人姓名</label>
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      <div className="form-floating mb-4">
        <input
          id="email"
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="example@email.com"
          {...register("email", {
            required: "請輸入電子信箱",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "請輸入有效的電子信箱格式"
            }
          })}
        />
        <label htmlFor="email">電子信箱</label>
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="form-floating mb-4">
        <input
          id="tel"
          type="tel"
          className={`form-control ${errors.tel ? 'is-invalid' : ''}`}
          placeholder="請輸入手機號碼"
          {...register("tel", {
            required: "請輸入聯絡電話",
            minLength: {
              value: 8,
              message: "電話號碼至少需要 8 碼"
            },
            pattern: {
              value: /^\d+$/,
              message: "請輸入有效的電話號碼格式"
            }
          })}
        />
        <label htmlFor="tel">聯絡電話</label>
        {errors.tel && (
          <div className="invalid-feedback">{errors.tel.message}</div>
        )}
      </div>

      <div className="form-floating mb-4">
        <input
          id="address"
          type="text"
          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          placeholder="請輸入完整配送地址"
          {...register("address", { required: "請輸入配送地址" })}
        />
        <label htmlFor="address">配送地址</label>
        {errors.address && (
          <div className="invalid-feedback">{errors.address.message}</div>
        )}
      </div>

      <div className="form-floating mb-4">
        <textarea
          id="message"
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          placeholder="有什麼想告訴我們的嗎？"
          style={{ height: "100px" }}
          {...register("message", { required: "請輸入訂單備註" })}
        ></textarea>
        <label htmlFor="message">訂單備註</label>
        {errors.message && (
          <div className="invalid-feedback">{errors.message.message}</div>
        )}
      </div>

      <LoadingButton
        text="送出訂單"
        buttonClassName="btn btn-dark w-100 py-2"
        type="submit"
      />
    </form>
  );
}

OrderForm.propTypes = {
  onSubmitCompleted: PropTypes.func.isRequired,
};

export default OrderForm;
