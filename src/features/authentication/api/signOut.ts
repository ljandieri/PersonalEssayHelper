import { signOut } from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { auth } from '@/lib/firebase';

export function signOutUserApi() {
  return signOut(auth);
}

export function useSignOut() {
  const navigate = useNavigate();

  const { isPending, mutate: signOut } = useMutation({
    mutationFn: () => signOutUserApi(),
    onSuccess: () => {
      navigate('/signin');
    },
    onError: (error) => {
      toast.error('Something went wrong please try again');
    },
  });

  return { isPending, signOut };
}
