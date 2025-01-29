import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignInForm } from '../components/SignInForm';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { LoadingPage } from '@/components/Elements/LoadingPage';
import { GoogleAuthButton } from '../components/GoogleAuthButton';

export function SignIn() {
  const navigate = useNavigate();

  // Load the authenticated user
  const { isLoading, user } = useAuth();

  // If user is logged in redirect to dashboard automatically
  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard');
    }
  }, [isLoading, user, navigate]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="absolute left-1/2 top-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2 transform">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Please provide necessary information to sign in</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <GoogleAuthButton />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
