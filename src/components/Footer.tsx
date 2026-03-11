import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-secondary/30 border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Code2 className="text-primary" size={28} />
              <span className="text-2xl font-serif font-bold">Falcon Software</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Architecting the next generation of digital infrastructure with precision, innovation, and purpose.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Vision</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest tech insights.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-border rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none"
              />
              <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Falcon Software Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;