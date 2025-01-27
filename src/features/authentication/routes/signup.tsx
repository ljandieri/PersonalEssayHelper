import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignUpForm } from '../components/SignUpForm';

export function SignUp() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2 transform">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Please provide necessary information to sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
