import { Navigate, Outlet, useLocation } from 'react-router-dom';
import type { AuthState } from '../Slices/Auth/AuthSlice';

export function ProtectedRoute() {
  const { isAuthenticated, isLoading }: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  };

  const location = useLocation();

  if (isLoading) {
    return <div>Checking your session...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
