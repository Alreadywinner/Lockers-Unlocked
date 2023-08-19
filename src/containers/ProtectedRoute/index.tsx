import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import React, { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const { value } = useLocalStorage('user', {
    email: '',
    id: '',
    userType: '',
  });
  const { localStorageData } = useLocalStorageDataContext();
  const userIsAdmin =
    value.userType === 'admin' || localStorageData?.userType === 'admin';
  const userIsSeller =
    (value.id && value.userType === 'seller') ||
    (localStorageData?.id !== '' && localStorageData?.userType === 'seller');

  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  if (isAdminRoute && !userIsSeller) {
    return <Outlet />;
  }

  return userIsSeller && !isAdminRoute && !userIsAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
}
export default PrivateRoute;
