import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/reducers/auth/operation';
import { selectUserMenu } from 'redux/reducers/auth/selectors';
import './UserMenu.css';

export default function UserMenu() {
  const user = useSelector(selectUserMenu);
  console.log(user);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="usermenu-wrapper">
      <p className="usermenu-hello">Witaj {user.email}</p>
      <button className="usermenu-button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
