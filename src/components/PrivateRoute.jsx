import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggendIn } from '../redux/User/selector';

 const PrivateRoute = ({ component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggendIn);
  return <>{isLoggedIn ? component : <Navigate to={redirectTo} replace />}</>;
};
export default PrivateRoute