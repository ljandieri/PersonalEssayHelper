import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  onClick?: () => void;
  isSubmit: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}

export function LoadingButton({
  onClick,
  isLoading,
  isSubmit = false,
  children,
}: LoadingButtonProps) {
  return (
    <Button type={isSubmit ? 'submit' : 'button'} onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" />
          Please wait
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}
