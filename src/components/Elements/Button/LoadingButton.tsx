import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
  className?: string;
  onClick?: () => void;
  isSubmit?: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}

export function LoadingButton({
  variant = 'default',
  className,
  onClick,
  isLoading,
  isSubmit = false,
  children,
}: LoadingButtonProps) {
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      variant={variant}
      onClick={onClick}
      disabled={isLoading}
      className={className}
    >
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
