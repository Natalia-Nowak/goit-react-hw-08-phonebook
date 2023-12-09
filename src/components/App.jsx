import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Register/Register';
import Contacts from './Contacts/Contacts';
import Home from './Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/reducers/auth/operation';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from 'redux/reducers/auth/selectors';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  if (isRefreshing) return <p>loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<ProtectedRoute element={<Login />} redirect="/contacts" />}
        />
        <Route
          path="register"
          element={
            <ProtectedRoute element={<Register />} redirect="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute element={<Contacts />} redirect="/login" />}
        />
        <Route
          path="menu"
          element={<PrivateRoute element={<UserMenu />} redirect="/login" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
