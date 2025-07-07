import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';

export function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">My Tech Arsenal</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            The tools and technologies I use to build modern web experiences.
          </p>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <AnimatedElement key={skill.name} delay={index * 50}>
              <Card className="group h-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:bg-primary/10 hover:-translate-y-2">
                <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={64}
                      height={64}
                      className="transition-all duration-300"
                    />
                  </div>
                  <p className="font-semibold text-sm">{skill.name}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
