import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Instagram, Twitter as XIcon } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import { Logo } from './ui/logo';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link href={personalData.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
             <Button asChild variant="ghost" size="icon">
              <Link href={personalData.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
             <Button asChild variant="ghost" size="icon">
              <Link href={personalData.x} target="_blank" rel="noopener noreferrer">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
