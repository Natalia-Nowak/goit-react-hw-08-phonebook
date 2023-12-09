import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/reducers/auth/operation';
import { useAuth } from 'hook/useAuth';
import './Layout.css';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <Link className="layout-link" to="contacts">
        Contacts
      </Link>
      <Link className="layout-link" to="menu">
        User Menu
      </Link>
      <button className="button-layout" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};
const UnauthenticatedNav = () => (
  <>
    <Link className="layout-link" to="login">
      Login
    </Link>
    <Link className="layout-link" to="register">
      Register
    </Link>
  </>
);

export default function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav className="layout-nav">
        <Link className="layout-link" to="/">
          Home
        </Link>
        {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
      </nav>
      <Outlet />
    </div>
  );
}
