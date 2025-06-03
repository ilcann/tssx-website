import AnimatedText from "../ui/AnimatedText";
import SpecialText from "../ui/SpecialText";
import { CheckCircle2 } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8 h-full flex flex-col justify-between">
      {/* Header Section */}
      <div className="text-center lg:text-left">
        <SpecialText className="text-4xl font-bold mb-4 text-neutral-900">
          <AnimatedText text="Get In Touch" />
        </SpecialText>
        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl font-medium">
          Ready to transform your IT infrastructure? Our team of experts is here
          to help you achieve your technology goals. Reach out to us through any
          of the channels below.
        </p>
      </div>

      {/* Contact Image */}
      <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src="/img/tssx/contact-us.png"
          alt="Contact TSS-X"
          className="w-full h-full object-cover mx-auto transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Why Choose TSS-X */}
      <div className="bg-gradient-to-br from-white to-neutral-50/50 rounded-3xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent mb-8 text-center">
          Why Choose TSS-X?
        </h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 group cursor-default">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-200">
              Expert consultation and personalized solutions
            </span>
          </li>
          <li className="flex items-center gap-3 group cursor-default">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-200">
              Rapid response and implementation
            </span>
          </li>
          <li className="flex items-center gap-3 group cursor-default">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-200">
              24/7 ongoing support and monitoring
            </span>
          </li>
          <li className="flex items-center gap-3 group cursor-default">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <CheckCircle2 size={14} className="text-white" />
            </div>
            <span className="text-neutral-700 font-medium group-hover:text-neutral-900 transition-colors duration-200">
              Proven track record with enterprise clients
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
