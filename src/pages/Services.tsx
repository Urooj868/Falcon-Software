import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, BrainCircuit, CheckCircle2, Layers, Zap, ShieldCheck, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const detailedServices = [
    {
      id: "software",
      title: "Software Development",
      subtitle: "Enterprise-Grade Systems",
      description: "We build robust, scalable, and secure software systems that form the backbone of modern enterprises. From legacy modernization to greenfield development.",
      icon: <Code size={48} />,
      features: ["Custom ERP/CRM Solutions", "Microservices Architecture", "API Integration & Development", "Legacy System Migration"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "app",
      title: "App Development",
      subtitle: "Mobile-First Experiences",
      description: "Creating intuitive, high-performance mobile applications for iOS and Android. We focus on native-feel performance with cross-platform efficiency.",
      icon: <Smartphone size={48} />,
      features: ["React Native & Flutter", "Native iOS (Swift)", "Native Android (Kotlin)", "Progressive Web Apps (PWA)"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "ai",
      title: "AI Solutions",
      subtitle: "Intelligent Automation",
      description: "Leverage the power of Artificial Intelligence to gain a competitive edge. We implement practical AI that solves real business problems.",
      icon: <BrainCircuit size={48} />,
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision Systems", "Custom LLM Integration"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to solve complex challenges and drive measurable business growth.
            </p>
          </motion.div>
        </section>

        {detailedServices.map((service, index) => (
          <section key={service.id} className={`py-24 ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="text-primary mb-6">{service.icon}</div>
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{service.subtitle}</span>
                  <h2 className="text-4xl font-serif font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">The Falcon Software Advantage</h2>
              <p className="text-muted-foreground">Why leading companies choose us for their critical projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap />, title: "Rapid Delivery", desc: "Agile methodologies that ensure fast time-to-market." },
                { icon: <ShieldCheck />, title: "Security First", desc: "Built-in security protocols at every layer of development." },
                { icon: <Layers />, title: "Scalable Tech", desc: "Architectures designed to grow with your user base." },
                { icon: <Globe />, title: "Global Standards", desc: "Compliance with international coding and data standards." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-border bg-background text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;