import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, user }) => {
  // if (!user) {
  //   return navigate('/');
  // }
  return !user ?  <Navigate to='/' /> : children ;
};

