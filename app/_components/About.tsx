import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 px-6 md:px-12 bg-nda-white"
    >
      {/* Background plus pattern */}
      <div className="absolute inset-0 plus-pattern pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <p className="text-nda-red text-sm font-body font-semibold tracking-[0.3em] uppercase mb-8">
            About
          </p>
        </ScrollReveal>

        {/* Main heading */}
        <ScrollReveal delay={1}>
          <h2 className="font-display text-nda-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-12">
            WE CREATE BRANDS
            <br />
            <span className="text-nda-red">THAT RESONATE</span>
          </h2>
        </ScrollReveal>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <ScrollReveal delay={2}>
              <div className="space-y-1 mb-8">
                <p className="font-display text-2xl md:text-3xl text-nda-black tracking-wide">
                  Lee, Nam Mi
                </p>
                <p className="text-nda-muted text-base tracking-wider font-light">
                  Brand Developer
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="space-y-1 text-sm text-nda-muted tracking-wider">
                <p className="text-nda-red font-semibold text-xs tracking-[0.2em] uppercase">
                  NAOMI DESIGN AND ASSOCIATES
                </p>
                <p>San Francisco, CA</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={2}>
              <p className="text-lg md:text-xl text-nda-black/80 leading-relaxed font-light mb-6">
                ND+A is a brand development and design studio based in San
                Francisco. We specialize in crafting distinctive brand
                identities that bridge cultures and connect with audiences
                across the globe.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="text-base text-nda-muted leading-relaxed font-light">
                With deep expertise in visual communication and cross-cultural
                design, we transform ideas into compelling brand experiences.
                Every project is approached with precision, creativity, and an
                unwavering commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Decorative line */}
        <ScrollReveal delay={4}>
          <div className="mt-16 md:mt-24 h-px bg-nda-black/10 relative">
            <div className="absolute left-0 top-0 h-px bg-nda-red animate-expand-line" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
