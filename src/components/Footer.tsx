import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-scroll";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
};

const FooterLink = ({ href, children, isExternal = false }: FooterLinkProps) => {
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-500 transition-colors duration-300"
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link
      to={href.replace('#', '')}
      smooth={true}
      duration={800}
      offset={-40}
      className="hover:text-amber-500 transition-colors duration-300 cursor-pointer"
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-200 pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-4">
                <span className="text-neutral-100">TSS</span>
                <span className="text-amber-500">X</span>
              </div>
              <p className="text-neutral-400 mb-4 max-w-sm">
                We provide enterprise IT infrastructure solutions that streamline operations, 
                enhance security, and accelerate digital transformation.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Twitter size={18} className="text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Linkedin size={18} className="text-neutral-300" />
              </a>
              <a href="#" className="bg-neutral-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                <Github size={18} className="text-neutral-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100">Company</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <FooterLink href="#about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Our Solutions</FooterLink>
              </li>
              <li>
                <FooterLink href="#references">References</FooterLink>
              </li>
              <li>
                <FooterLink href="#" isExternal>Careers</FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100">Solutions</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <FooterLink href="#detailed-solutions">Hybrid Cloud Provision</FooterLink>
              </li>
              <li>
                <FooterLink href="#detailed-solutions">AIOps Observability</FooterLink>
              </li>
              <li>
                <FooterLink href="#detailed-solutions">Compliance</FooterLink>
              </li>
              <li>
                <FooterLink href="#detailed-solutions">Security</FooterLink>
              </li>
              <li>
                <FooterLink href="#detailed-solutions">Patch Management</FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-amber-500" size={18} />
                <span className="text-sm text-neutral-400">
                  Maslak, Sarıyer, 34467<br />
                  Istanbul, Turkey
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-amber-500" size={18} />
                <a href="mailto:info@tssx.com" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                  info@tssx.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-amber-500" size={18} />
                <a href="tel:+902121234567" className="text-sm text-neutral-400 hover:text-amber-500 transition-colors duration-300">
                  +90 212 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} TSS X Information Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0 text-sm text-neutral-500">
            <FooterLink href="#" isExternal>Privacy Policy</FooterLink>
            <FooterLink href="#" isExternal>Terms of Use</FooterLink>
            <FooterLink href="#" isExternal>Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
