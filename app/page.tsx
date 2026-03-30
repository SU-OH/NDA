import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import DevLink from "./_components/DevLink";
import Contact from "./_components/Contact";
import CursorFollower from "./_components/CursorFollower";

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <Hero />
      <About />
      <Services />
      <DevLink />
      <Contact />
    </main>
  );
}
