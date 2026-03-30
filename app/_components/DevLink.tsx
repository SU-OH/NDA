import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function DevLink() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-nda-white border-t border-nda-black/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <a
            href="https://dev.naomidesigners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer"
          >
            <div>
              <p className="text-nda-muted text-xs tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                <span className="text-nda-red/40" aria-hidden="true">
                  + + +
                </span>
                <span>Development Lab</span>
              </p>
              <h3 className="font-display text-nda-black text-2xl md:text-4xl tracking-wide group-hover:text-nda-red transition-colors duration-300">
                EXPLORE OUR LATEST WORK
              </h3>
              <p className="mt-2 text-nda-muted text-sm md:text-base font-light tracking-wider">
                dev.naomidesigners.com
              </p>
            </div>

            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-nda-black/10 flex items-center justify-center group-hover:border-nda-red group-hover:bg-nda-red transition-all duration-300">
              <ArrowUpRight
                size={20}
                className="text-nda-black/40 group-hover:text-nda-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
