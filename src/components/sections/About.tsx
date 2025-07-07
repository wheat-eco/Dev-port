import Image from 'next/image';
import { AnimatedElement } from '../AnimatedElement';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import Link from 'next/link';

export function About() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">About Me</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            A little bit about my journey and what drives me.
          </p>
        </AnimatedElement>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <AnimatedElement className="md:col-span-2">
            <div className="relative aspect-square w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-primary/20 z-10"></div>
                <Image
                  src="/profile-2.jpg"
                  alt="Muiz Adesope"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="developer portrait"
                />
            </div>
          </AnimatedElement>
          <AnimatedElement delay={200} className="md:col-span-3">
            <div className="space-y-6 text-lg text-foreground/90 text-balance">
              <p>
                Hello! I&apos;m Muiz, a passionate Full Stack Developer with a knack for turning ideas into reality through code. My journey in technology began with a curiosity for how things work, which led me to the world of mechatronics and software engineering.
              </p>
              <p>
                I thrive on building custom, user-centric web applications. From designing intuitive interfaces with <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">Next.js</span> to engineering robust backend systems with technologies like <span className="text-primary font-semibold">PHP</span> and <span className="text-primary font-semibold">PostgreSQL</span>, I enjoy every aspect of the development process.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and managing online communities. I believe in continuous learning and collaboration to create impactful and innovative digital solutions.
              </p>
               <div className="mt-8">
                <Button asChild size="lg">
                  <Link href={personalData.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download My CV
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
