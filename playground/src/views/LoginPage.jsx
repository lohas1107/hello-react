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
          <>
            <h1>登入</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input type="email" placeholder="example@mail.com" required />
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="password" placeholder="Password" required />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit">登入</button>
            </form>
          </>
        )
      }
    </>
  );
};

export default LoginPage; 