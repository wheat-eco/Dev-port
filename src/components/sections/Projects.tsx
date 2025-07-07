import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Github } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';

export function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Featured Projects</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for development.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={200} className="mt-16">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col group overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="relative w-full aspect-video overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            data-ai-hint={project.imageHint}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <div className="flex items-center gap-4">
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                          </Button>
                          <Button asChild variant="secondary" size="sm">
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Source Code
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex left-2 sm:-left-12 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
            <CarouselNext className="flex right-2 sm:-right-12 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
          </Carousel>
        </AnimatedElement>
      </div>
    </section>
  );
}
