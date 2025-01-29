import { Loader2 } from 'lucide-react';

export function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="mr-4 animate-spin" />
      <span className="font-darkerGrotesque text-lg">Loading...</span>
    </div>
  );
}
