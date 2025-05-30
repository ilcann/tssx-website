import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import FooterLink from "./FooterLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-200 pt-12 pb-4">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <img
                src="img/tssx/tssx-light-logo.png"
                alt="TSS-X Logo"
                width="90"
                height="25"
                className="h-7 mb-4 brightness-100"
              />
              <p className="text-neutral-300 text-sm leading-relaxed mb-4 max-w-sm">
                TSS-X focuses on IT Infrastructure management and automation
                services, offering best-fit automation solutions for specialized
                environments with end-to-end lifecycle management.
              </p>
              <p className="text-neutral-400 text-xs mb-4">
                Providing customer-specific solutions with BMC Software and
                HashiCorp products.
              </p>
            </div>
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/company/tss-x/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 p-2 rounded-md hover:bg-amber-700 transition-all duration-300 group"
                aria-label="Connect with us on LinkedIn"
                title="Connect with us on LinkedIn"
              >
                <Linkedin
                  size={16}
                  className="text-neutral-300 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Our Solutions</FooterLink>
              </li>
              <li>
                <FooterLink href="#references">References</FooterLink>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#solutions">
                  Hybrid Cloud Provisioning
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">
                  AIOps Observability Platform
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Compliance Automation</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">Security Automation</FooterLink>
              </li>
              <li>
                <FooterLink href="#solutions">
                  Patch Management Automation
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="mr-2 mt-1 text-amber-700 flex-shrink-0"
                  size={16}
                />
                <span className="text-neutral-300 text-sm leading-relaxed">
                  İçerenköy, Umut Sk. No:10 D:12
                  <br />
                  34752 Ataşehir/Istanbul, Turkey
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-amber-700 flex-shrink-0" size={16} />
                <a
                  href="mailto:info@tss-x.com"
                  className="text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  info@tss-x.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  className="mr-2 mt-1 text-amber-700 flex-shrink-0"
                  size={16}
                />
                <div className="space-y-1">
                  <a
                    href="tel:+905458522713"
                    className="block text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    +90 545 852 2713
                  </a>
                  <a
                    href="tel:+905322164040"
                    className="block text-neutral-300 text-sm hover:text-amber-400 transition-colors duration-300"
                  >
                    +90 532 216 4040
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-3 md:mb-0">
            &copy; {currentYear} TSS-X Information Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6 text-neutral-400 text-sm">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink
              href="https://www.linkedin.com/company/tss-x/"
              isExternal
            >
              LinkedIn
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
