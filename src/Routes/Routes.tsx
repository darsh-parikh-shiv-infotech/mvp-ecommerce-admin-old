import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ProductHomePage from '../Pages/Products/ProductHomePage';
import Login from '../Pages/Authentication/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import NotFoundPage from '../Pages/NotFoundPage';
import ResetPasswordPage from '../Pages/Authentication/ResetPasswordPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ResetPasswordPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/products" element={<MainLayout />}>
          <Route index element={<ProductHomePage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
