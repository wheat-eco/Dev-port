import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Mail } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import { TypingAnimation } from '../TypingAnimation';
import { AnimatedElement } from '../AnimatedElement';

export function Hero() {
  return (
    <section id="hero" className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 bg-background bg-dot-primary/[0.2] -z-10" />
      <div className="container mx-auto px-4 text-center">
        <AnimatedElement delay={100}>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-balance">
            {personalData.name}
          </h1>
        </AnimatedElement>

        <AnimatedElement delay={300}>
          <div className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl text-primary">
            <TypingAnimation texts={['Full Stack Developer', 'Creative Coder', 'Problem Solver']} />
          </div>
        </AnimatedElement>

        <AnimatedElement delay={500}>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-foreground/80 text-balance">
            I craft elegant and efficient solutions for the web, turning complex ideas into beautiful, interactive digital experiences.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={700}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
}
