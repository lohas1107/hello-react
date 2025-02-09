function OrderForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          收件人姓名
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="請輸入姓名"
        />
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
        />
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
        />
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
        />
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

export default OrderForm;
