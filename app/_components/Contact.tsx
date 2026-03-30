import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-nda-black overflow-hidden">
      {/* Red accent bar at top */}
      <div className="h-1 bg-nda-red w-full" />

      <div className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <ScrollReveal>
            <p className="text-nda-red text-sm font-body font-semibold tracking-[0.3em] uppercase mb-8">
              Contact
            </p>
          </ScrollReveal>

          {/* CTA Heading */}
          <ScrollReveal delay={1}>
            <h2 className="font-display text-nda-white text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-16 md:mb-24">
              LET&apos;S CREATE
              <br />
              <span className="text-nda-red">TOGETHER</span>
            </h2>
          </ScrollReveal>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: Name & Role */}
            <div className="md:col-span-4">
              <ScrollReveal delay={2}>
                <div className="mb-8">
                  <p className="font-display text-2xl md:text-3xl text-nda-white tracking-wide">
                    Lee, Nam Mi
                  </p>
                  <p className="text-nda-white/50 text-base tracking-wider font-light mt-1">
                    Brand Developer
                  </p>
                </div>
                <div>
                  <p className="text-nda-red font-semibold text-xs tracking-[0.2em] uppercase">
                    NAOMI DESIGN AND ASSOCIATES
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact details */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <ScrollReveal delay={2}>
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-nda-red mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-nda-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                        Address
                      </p>
                      <p className="text-nda-white/80 text-sm leading-relaxed font-light">
                        1345 Fillmore St. #408
                        <br />
                        San Francisco, CA 94115
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={3}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone
                        size={18}
                        className="text-nda-red mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="text-nda-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                          Phone
                        </p>
                        <a
                          href="tel:+14156527068"
                          className="text-nda-white/80 text-sm font-light hover:text-nda-white transition-colors duration-300 cursor-pointer"
                        >
                          1. 415. 652. 7068
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail
                        size={18}
                        className="text-nda-red mt-1 flex-shrink-0"
                      />
                      <div>
                        <p className="text-nda-white/40 text-xs tracking-[0.2em] uppercase mb-2">
                          Email
                        </p>
                        <a
                          href="mailto:ndanaomi@gmail.com"
                          className="text-nda-white/80 text-sm font-light hover:text-nda-white transition-colors duration-300 cursor-pointer"
                        >
                          ndanaomi@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Decorative plus line */}
          <ScrollReveal delay={4}>
            <div
              className="mt-16 md:mt-24 flex items-center gap-0 text-nda-white/15 text-xs tracking-[0.2em] overflow-hidden"
              aria-hidden="true"
            >
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i} className="inline-block">
                  +
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-nda-white/10 px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-nda-white/30 text-xs tracking-wider font-light">
            &copy; {new Date().getFullYear()} NAOMI DESIGN AND ASSOCIATES. All
            rights reserved.
          </p>
          <a
            href="https://www.naomidesigners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nda-white/30 text-xs tracking-wider font-light hover:text-nda-white/60 transition-colors duration-300 cursor-pointer"
          >
            www.naomidesigners.com
          </a>
        </div>
      </footer>
    </section>
  );
}
