import { useNavigate } from 'react-router-dom';
import { admin } from '../api/admin';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent form from submitting and refreshing the page, 
    // so we can handle the submission with JavaScript
    e.preventDefault();

    const formData = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };

    await admin.login(formData)
      .then(() => {
        navigate("/products");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>登入</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="username"
                required
                autoFocus
              />
              <label htmlFor="username">Email</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary" type="submit">登入</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 