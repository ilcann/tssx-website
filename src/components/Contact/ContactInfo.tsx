import SpecialText from "../ui/SpecialText";
import AnimatedText from "../ui/AnimatedText";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center lg:text-left">
        <SpecialText className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          <AnimatedText text="Get In Touch" />
        </SpecialText>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          Ready to transform your IT infrastructure? Our team of experts is here
          to help you achieve your technology goals. Reach out to us through any
          of the channels below.
        </p>
      </div>

      {/* Contact Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/img/tssx/contact-us.png"
          alt="Contact TSS-X"
          className="w-full h-full object-cover mx-auto"
        />
      </div>

      {/* Why Choose TSS-X */}
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Why Choose TSS-X?
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            Expert consultation and personalized solutions
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            Rapid response and implementation
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            24/7 ongoing support and monitoring
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            Proven track record with enterprise clients
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
