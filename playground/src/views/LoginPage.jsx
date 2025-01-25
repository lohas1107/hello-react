import { useEffect, useState } from 'react';
import ProductPage from './ProductPage';
import { admin } from '../api/admin';

const LoginPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const init = async () => {
      const isLoggedIn = await admin.checkLogin();
      setIsAuth(isLoggedIn);
    };
    init();
  }, []);

  const handleSubmit = async (e) => {
    // Prevent form from submitting and refreshing the page, 
    // so we can handle the submission with JavaScript
    e.preventDefault();

    const formData = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };

    await admin.login(formData);
    setIsAuth(true);
  }

  return (
    <>
      {isAuth
        ? <ProductPage />
        : (
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
        )
      }
    </>
  );
};

export default LoginPage; 