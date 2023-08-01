import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import React, { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { value } = useLocalStorage('user', {
    email: '',
    id: '',
    userType: '',
  });
  const { localStorageData } = useLocalStorageDataContext();
  return (value.id && value.userType === 'seller') ||
    (localStorageData?.id !== '' && localStorageData?.userType === 'seller') ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
}
export default PrivateRoute;
