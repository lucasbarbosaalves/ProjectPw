import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`); // teste
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">E-mail:</label>
        <input
          className="login__input"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="login__label" htmlFor="password">Senha:</label>
        <input
          className="login__input"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login__button" type="submit">Entrar</button>
      </form>
    </div>
  );
};
export default Login;
