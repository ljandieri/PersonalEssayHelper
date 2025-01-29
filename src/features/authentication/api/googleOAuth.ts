import { auth } from '@/lib/firebase';
import { useMutation } from '@tanstack/react-query';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const provider = new GoogleAuthProvider();

export function signInUserWithGoogleApi() {
  return signInWithPopup(auth, provider);
}

export function useSignInWithGoogle() {
  const navigate = useNavigate();

  const { isPending, mutate: signInWithGoogle } = useMutation({
    mutationFn: () => signInUserWithGoogleApi(),
    onSuccess: (user) => {
      console.log(user);
      navigate('/dashboard');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Something went wrong please try again');
    },
  });

  return { isPending, signInWithGoogle };
}
