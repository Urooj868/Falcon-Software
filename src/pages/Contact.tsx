import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Fill out the form below and our team will reach out within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-secondary/30 p-8 rounded-3xl border border-border">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email us at</p>
                      <p className="font-bold">hello@falcon-solutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Call us at</p>
                      <p className="font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Visit us</p>
                      <p className="font-bold">123 Tech Plaza, San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                      <a key={social} href="#" className="text-sm font-medium text-primary hover:underline">{social}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground p-8 rounded-3xl">
                <MessageSquare className="mb-4" size={32} />
                <h4 className="text-xl font-bold mb-2">Live Chat</h4>
                <p className="text-primary-foreground/80 mb-6">Need immediate assistance? Our support team is online.</p>
                <button className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-white/90 transition-colors">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background p-8 md:p-12 rounded-3xl border border-border shadow-xl"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Full Name</label>
                      <input
                        {...register('name')}
                        className={`w-full bg-secondary/20 border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-destructive font-medium">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Email Address</label>
                      <input
                        {...register('email')}
                        className={`w-full bg-secondary/20 border ${errors.email ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-destructive font-medium">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Subject</label>
                    <input
                      {...register('subject')}
                      className={`w-full bg-secondary/20 border ${errors.subject ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <p className="text-xs text-destructive font-medium">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Message</label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      className={`w-full bg-secondary/20 border ${errors.message ? 'border-destructive' : 'border-border'} rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-xs text-destructive font-medium">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;