import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Email is already registered.');
    }
    throw new Error(error.message);
  }
};
