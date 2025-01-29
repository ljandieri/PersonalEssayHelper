import { LoadingButton } from '@/components/Elements/Button/LoadingButton';
import { useSignOut } from '@/features/authentication';

export function TopBar() {
  const { isPending, signOut } = useSignOut();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className="flex">
      <LoadingButton
        variant="outline"
        isLoading={isPending}
        onClick={handleSignOut}
        className="ml-auto"
      >
        Sign Out
      </LoadingButton>
    </div>
  );
}
