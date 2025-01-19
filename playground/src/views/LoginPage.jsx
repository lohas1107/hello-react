import ProductPage from './ProductPage';
import { admin } from '../api/admin';
import axios from 'axios';

const LoginPage = () => {

  const checkLogin = () => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];

    return token ? true : false;
  }

  const handleSubmit = async (e) => {
    // Prevent form from submitting and refreshing the page, so we can handle the submission with JavaScript
    e.preventDefault();

    const formData = {
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
    };

    try {
      const response = await admin.signIn(formData);
      const { token, expired } = response.data;
      document.cookie = `accessToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common.Authorization = `${token}`;
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
      {checkLogin()
      ? ( <ProductPage /> ) 
      : (<>
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
        </>)
      }
    </>
  );
};

export default LoginPage; 