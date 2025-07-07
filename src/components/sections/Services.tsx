import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">What I Do</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            I offer a range of services to bring your digital projects to life.
          </p>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <Card className="h-full group hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                       <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                  </div>
                   <CardDescription className="pt-4">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
