import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  // je li provjeravanje usera safe enuff?
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;

