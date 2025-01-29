import { LoadingPage } from '@/components/Elements/LoadingPage';
import { useAuth } from '@/features/authentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  // Load the authenticated user
  const { isLoading, user } = useAuth();

  // If there is NO authenticated user, redirect to the /signin
  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/signin');
    }
  }, [user, isLoading, navigate]);

  // While loading a user, show a spinner
  if (isLoading) {
    return <LoadingPage />;
  }

  // If there IS an user, render the app
  if (user) return children;
}
