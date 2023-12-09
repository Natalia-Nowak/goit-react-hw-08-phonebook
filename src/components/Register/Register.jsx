import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/reducers/auth/operation';
import './Register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: username,
        email,
        password,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register-wrapper">
        <div className="register-form">
          <input
            placeholder="Username"
            type="text"
            className=""
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="register-form">
          <input
            placeholder="Email"
            type="text"
            className=""
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="register-form">
          <input
            placeholder="Password"
            className=""
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="register-button">
            Zarejestruj
          </button>
        </div>
      </form>
    </div>
  );
}
