"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import PricingModal from "./PricingModal";

const services = [
  {
    number: "01",
    title: "BRAND IDENTITY",
    description:
      "Logo design, visual systems, and brand guidelines that define who you are.",
  },
  {
    number: "02",
    title: "BRAND STRATEGY",
    description:
      "Market positioning, brand architecture, and narrative frameworks.",
  },
  {
    number: "03",
    title: "VISUAL DESIGN",
    description:
      "Print, digital, and environmental design that communicates with clarity.",
  },
  {
    number: "04",
    title: "CREATIVE DIRECTION",
    description:
      "End-to-end creative oversight that ensures brand consistency across all touchpoints.",
  },
];

export default function Services() {
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <>
      <section
        id="services"
        className="py-24 md:py-40 px-6 md:px-12 bg-nda-surface"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <ScrollReveal>
            <p className="text-nda-red text-sm font-body font-semibold tracking-[0.3em] uppercase mb-8">
              Services
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2 className="font-display text-nda-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-16 md:mb-24">
              WHAT WE DO
            </h2>
          </ScrollReveal>

          {/* Services list */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={(index + 1) as 1 | 2 | 3 | 4}>
                <div className="group cursor-pointer border-t border-nda-black/10 py-8 md:py-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="text-nda-muted text-sm font-body tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-5">
                      <h3 className="font-display text-2xl md:text-4xl text-nda-black group-hover:text-nda-red transition-colors duration-300 tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-6">
                      <p className="text-nda-muted text-base md:text-lg font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover line */}
                  <div className="mt-6 md:mt-8 h-px bg-transparent relative">
                    <div className="service-line h-px bg-nda-red absolute left-0 top-0" />
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Bottom border */}
            <div className="border-t border-nda-black/10" />
          </div>

          {/* Pricing CTA */}
          <ScrollReveal delay={5}>
            <div className="mt-12 md:mt-16 flex justify-center">
              <button
                onClick={() => setPricingOpen(true)}
                className="group flex items-center gap-4 px-12 py-5 border border-nda-black/10 rounded-sm hover:border-nda-red hover:bg-nda-red transition-all duration-300 cursor-pointer"
              >
                <span className="text-nda-red text-base font-light tracking-wider group-hover:text-nda-white transition-colors duration-300" aria-hidden="true">
                  +
                </span>
                <span className="font-display text-2xl md:text-3xl tracking-wide text-nda-black group-hover:text-nda-white transition-colors duration-300">
                  VIEW PRICING
                </span>
                <span className="text-nda-muted text-sm tracking-wider font-light group-hover:text-nda-white/60 transition-colors duration-300">
                  가격 안내
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
    </>
  );
}
