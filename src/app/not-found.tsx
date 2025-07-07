import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <AlertTriangle className="w-24 h-24 text-primary mb-6 animate-pulse" />
      <h1 className="text-6xl font-headline font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-balance">Oops! Page Not Found.</h2>
      <p className="max-w-md text-muted-foreground mb-8 text-balance">
        It seems you've stumbled upon a page that doesn't exist. Maybe a typo, or perhaps it's off on an adventure of its own.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
}
