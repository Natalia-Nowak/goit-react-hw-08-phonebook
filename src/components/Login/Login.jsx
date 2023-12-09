import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/auth/operation';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.form);
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit} className="login-wrapper">
      <div className="login-form">
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="login-form">
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="login-button">
          Zaloguj
        </button>
      </div>
    </form>
  );
}
