import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
  const {firstStepCompleted} = useSelector((state) => state.form);

  return firstStepCompleted ? children : <Navigate to='/firstStep' />;
};

