import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { experiences } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="bg-card">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Professional Journey</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            A timeline of my work experience and growth as a developer.
          </p>
        </AnimatedElement>

        <div className="mt-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
          {experiences.map((exp, index) => (
            <AnimatedElement key={index} className="mb-12">
              <div className={cn(
                "flex flex-col md:flex-row items-center md:justify-between w-full",
                index % 2 !== 0 && "md:flex-row-reverse"
              )}>
                <div className="md:w-5/12 order-1 md:order-none">
                  <Card>
                    <CardHeader className={cn(
                      "text-left",
                      index % 2 !== 0 && "md:text-right"
                    )}>
                      <p className="text-sm text-primary font-semibold">{exp.period}</p>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-md text-muted-foreground">{exp.company}</p>
                      <CardDescription className="mt-2 text-foreground/80">{exp.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                
                <div className="z-10 order-0 md:order-none my-4 md:my-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center ring-8 ring-card">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="w-5/12 order-2 md:order-none hidden md:block" />
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
