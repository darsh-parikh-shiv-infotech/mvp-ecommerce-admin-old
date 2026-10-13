import { Navigate, Outlet, useLocation } from 'react-router-dom';
import type { AuthState } from '../Slices/Auth/AuthSlice';
import { useAppSelector } from '../Components/Hook/Common/hooks';
import FullLoader from '../Components/Common/FullLoader';
import { useEffect } from 'react';
export function ProtectedRoute() {
  const { isAuthenticated, loading }: AuthState = useAppSelector((state) => state.auth);
  const location = useLocation();
  useEffect(()=>{
    
  })

  if (loading) {
    return (
      <FullLoader SpinnerTitle='Loading...' />
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
