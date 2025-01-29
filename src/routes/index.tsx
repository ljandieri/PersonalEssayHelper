import { Navigate, useRoutes } from 'react-router-dom';
import { AppLayout } from '@/components/Layout';
import { Dashboard } from '@/features/dashboard';
import { MyCourses } from '@/features/my-courses';
import { Tools } from '@/features/tools';
import { Shop } from '@/features/shop';
import { Account } from '@/features/account';
import { Help } from '@/features/help';
import { SignUp } from '@/features/authentication';
import { SignIn } from '@/features/authentication/routes/SignIn';
import { ProtectedRoute } from './ProtectedRoute';

export function AppRoutes() {
  const routes = [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Navigate replace to="/dashboard" />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/my-courses',
          element: <MyCourses />,
        },
        {
          path: '/tools',
          element: <Tools />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/account',
          element: <Account />,
        },
        {
          path: '/help',
          element: <Help />,
        },
      ],
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}
