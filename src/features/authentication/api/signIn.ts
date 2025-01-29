import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';

export type SignInCredentials = {
  email: string;
  password: string;
};

export function signInUserApi(credentials: SignInCredentials) {
  return signInWithEmailAndPassword(auth, credentials.email, credentials.password);
  // const userCredential = await signInWithEmailAndPassword(
  //   auth,
  //   credentials.email,
  //   credentials.password,
  // );
  //return userCredential.user;
}

export function useSignIn() {
  const navigate = useNavigate();

  const { isPending, mutate: signIn } = useMutation({
    mutationFn: (credentials: SignInCredentials) => signInUserApi(credentials),
    onSuccess: (user) => {
      console.log(user);
      navigate('/dashboard');
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        toast.error('Invalid email or password');
        return;
      }
      toast.error('Something went wrong please try again');
    },
  });

  return { isPending, signIn };
}
