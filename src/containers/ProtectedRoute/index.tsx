import useLocalStorage from '@hooks';
import { useLocalStorageDataContext } from '@context';
import React, { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { value } = useLocalStorage('user', {
    email: '',
    id: '',
  });
  const { localStorageData } = useLocalStorageDataContext();
  return value.id || localStorageData?.id ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
}
export default PrivateRoute;
