import { Link } from "react-router";
import { ExternalLink } from "lucide-react";
import DecorativeBackground from "@/components/ui/DecorativeBackground";

const ContactSection = () => {
  return (
    <DecorativeBackground
      elements={[
        {
          position: "bottom-right",
          size: "lg",
          opacity: "high",
          intensity: "medium",
        },
      ]}
      variant="light"
      className="bg-gradient-to-b from-neutral-100 to-neutral-200"
    >
        <section id="contact" className="bg-gradient-to-b from-neutral-100 to-neutral-200">
            <div className="w-4/5 max-w-screen-2xl mx-auto">
                <div className="relative rounded-xl overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                    e.currentTarget.style.display = "none";
                    }}
                    aria-hidden="true"
                >
                    <source src="/img/tssx/background.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                    Join Our Growing List of Satisfied Clients
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Experience the same level of exceptional service and innovative
                    solutions that have helped organizations across the globe
                    transform their IT infrastructure.
                    </p>
                    <Link
                    to="/contact"
                    className="inline-flex items-center bg-white text-amber-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-50 transition-colors shadow-lg"
                    >
                    Contact Us Today
                    <ExternalLink className="ml-2 size-4" />
                    </Link>
                </div>
                </div>
            </div>
        </section>
    </DecorativeBackground>
  );
};

export default ContactSection;