import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { ProtectedRoute } from './ProtectedRoute';
import NotFoundPage from '../Pages/NotFoundPage';
import LoginPage from '../Pages/Authentication/LoginPage';
import ResetPasswordPage from '../Pages/Authentication/ResetPasswordPage';
import HomePage from '../Pages/HomePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ResetPasswordPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
