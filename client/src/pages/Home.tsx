import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ForWhom from "@/components/ForWhom";
import Differentiator from "@/components/Differentiator";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = sectionsRef.current?.querySelectorAll(".fade-section");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Services />
      <ForWhom />
      <Differentiator />
      <CtaFinal />
      <Footer />
    </div>
  );
}
