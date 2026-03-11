import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code, Smartphone, BrainCircuit, ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom enterprise-grade software solutions tailored to your unique business logic and scalability needs.",
      icon: <Code className="text-primary" size={32} />,
      link: "/services"
    },
    {
      title: "App Development",
      description: "High-performance iOS and Android applications that deliver seamless user experiences and robust functionality.",
      icon: <Smartphone className="text-primary" size={32} />,
      link: "/services"
    },
    {
      title: "AI Solutions",
      description: "Integrating cutting-edge machine learning and neural networks to automate processes and unlock data insights.",
      icon: <BrainCircuit className="text-primary" size={32} />,
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, FinTech Global",
      content: "Falcon Software transformed our legacy systems into a modern, cloud-native powerhouse. Their attention to detail is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, HealthSync",
      content: "The AI solutions provided by Falcon Software helped us reduce diagnostic time by 40%. They are true partners in innovation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                Engineering Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]">
                We Build the <span className="text-primary italic">Digital Future</span> <br /> of Your Business
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Falcon Software is a premier software development agency dedicated to crafting high-impact digital products through innovative engineering and strategic design.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/80 transition-colors">
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Team working" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-8 rounded-2xl shadow-xl border border-border hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
                      ))}
                    </div>
                    <span className="text-sm font-bold">500+ Projects Delivered</span>
                  </div>
                  <div className="flex text-yellow-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif font-bold mb-6">Our Vision: Empowering Innovation Through Code</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At Falcon Software, we believe that technology should be an enabler, not a barrier. Our vision is to bridge the gap between complex business challenges and elegant technical solutions. We don't just write code; we architect growth.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Scalable Architecture First', 'User-Centric Design Philosophy', 'Agile & Transparent Process'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChevronRight size={14} className="text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more about our story <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Core Expertise</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Specialized solutions designed to scale with your ambition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-border bg-background hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="mb-6 p-4 rounded-xl bg-primary/5 w-fit group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link} className="flex items-center gap-2 font-bold text-sm group-hover:text-primary transition-colors">
                    Explore Service <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-primary-foreground/70">Don't just take our word for it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
                >
                  <Quote className="text-white/20 mb-6" size={48} />
                  <p className="text-xl italic mb-8 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-white/60">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-secondary/50 p-12 md:p-20 rounded-[3rem] border border-border">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to build something extraordinary?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let's discuss your project and see how Falcon Software can help you achieve your digital goals.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Get a Free Consultation <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;