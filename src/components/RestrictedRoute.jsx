import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggendIn } from '../redux/User/selector';

 const RestrictedRoute = ({ component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggendIn);
  return <>{isLoggedIn ? <Navigate to={redirectTo} replace /> : component}</>;
};
export default RestrictedRoute