import { Mail, Phone, MapPin } from 'lucide-react';
import { personalData } from '@/lib/portfolio-data';
import { AnimatedElement } from '../AnimatedElement';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Get In Touch</h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </AnimatedElement>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedElement delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-headline font-bold">Contact Information</h3>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href={`mailto:${personalData.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {personalData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">{personalData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">{personalData.location}</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={400}>
             <div className="space-y-8">
              <h3 className="text-2xl font-headline font-bold">Send Me a Message</h3>
              <ContactForm />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
