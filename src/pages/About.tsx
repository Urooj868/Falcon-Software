import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Rocket, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">We are architects of the <span className="text-primary">digital realm</span>.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founded in 2018, Falcon Software was born out of a simple observation: most software is built to function, but very little is built to inspire. We set out to change that.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of engineers, designers, and strategists work at the intersection of technology and human experience, creating tools that don't just work—they empower.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Our Office" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-10 rounded-3xl hidden md:block">
                <div className="text-4xl font-bold mb-1">8+ Years</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Of Innovation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide every line of code we write.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Target />, title: "Precision", desc: "We believe in doing things right the first time, with meticulous attention to detail." },
                { icon: <Users />, title: "Collaboration", desc: "We work as an extension of your team, sharing goals and celebrating wins together." },
                { icon: <Rocket />, title: "Innovation", desc: "We don't just follow trends; we explore the frontiers of what's possible." },
                { icon: <Heart />, title: "Integrity", desc: "Honest communication and transparent processes are the foundation of our trust." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-8 rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold mb-12">Meet the Visionaries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: "Alex Rivera", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
                { name: "Elena Chen", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
                { name: "David Park", role: "Design Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300" }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
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

export default About;