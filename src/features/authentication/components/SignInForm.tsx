import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignIn } from '../api/signIn';
import { LoadingButton } from '@/components/Elements/Button/LoadingButton';

const formSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Please provide your email'),
  password: z.string().nonempty('Please provide your password'),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { isPending, signIn } = useSignIn();

  const onSignIn = async (values: z.infer<typeof formSchema>) => {
    signIn({ email: values.email, password: values.password });
    // const user = await signInUser(values.email, values.password);
    // console.log(user);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSignIn)} className="flex flex-col space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email address..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton isSubmit={true} isLoading={isPending}>
          Sign In
        </LoadingButton>
      </form>
    </Form>
  );
}
