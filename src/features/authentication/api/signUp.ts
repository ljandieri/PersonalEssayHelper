import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';

export type SignUpCredentials = {
  email: string;
  password: string;
};

export function signUpUserApi(credentials: SignUpCredentials) {
  return createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
}

export function useSignUp() {
  const navigate = useNavigate();

  const { isPending, mutate: signUp } = useMutation({
    mutationFn: (credentials: SignUpCredentials) => signUpUserApi(credentials),
    onSuccess: (user) => {
      console.log(user);
      navigate('/dashboard');
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        toast.error('Email is already in use');
        return;
      }
      toast.error('Something went wrong please try again');
    },
  });

  return { isPending, signUp };
}
