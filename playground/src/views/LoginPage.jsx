const LoginPage = () => {
  return (
    <>
      <h1>登入</h1>
      <form>
        <div> 
          <input type="email" placeholder="example@mail.com" required/>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="password" placeholder="Password" required/>
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">登入</button>
      </form>
    </>
  );
};

export default LoginPage; 