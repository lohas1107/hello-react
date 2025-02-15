import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { admin } from '../api/admin';

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await admin.login(data)
      .then(() => {
        navigate("/admin/products");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  useEffect(() => {
    (async () => {
      const isAuth = await admin.checkLogin();
      if (isAuth) {
        navigate("/admin/products");
      }
    })();
  }, [navigate]);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4">管理後台</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                id="username"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
                autoFocus
                {...register("username", { required: "請輸入電子信箱" })}
              />
              <label htmlFor="username">Email</label>
            </div>
            <div className="form-floating mb-4">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
                {...register("password", { required: "請輸入密碼" })}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 