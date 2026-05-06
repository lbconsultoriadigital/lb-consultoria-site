import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Serviços", href: "#servicos" },
    { label: "Para quem é", href: "#para-quem" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 lg:gap-4 min-w-0">
          <img
            src="/assets/logos/lb_monograma_header.svg"
            alt="LB Consultoria de Carreira"
            className="h-12 lg:h-16 w-auto shrink-0"
          />

          {/* Brand lockup */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            <div
              className="h-11 xl:h-12 w-px bg-[#C9A961] shrink-0"
              aria-hidden="true"
            />

            <div className="flex flex-col justify-center leading-none">
              <span
                className="whitespace-nowrap text-[0.82rem] xl:text-[0.98rem] tracking-[0.12em] text-charcoal font-medium"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                LB CONSULTORIA DE CARREIRA
              </span>

              <span className="mt-2 flex items-center gap-2 xl:gap-3 whitespace-nowrap text-[0.46rem] xl:text-[0.55rem] tracking-[0.34em] text-charcoal/65 uppercase">
                <span>PROPÓSITO</span>
                <span className="text-[#C9A961] tracking-normal" aria-hidden="true">
                  •
                </span>
                <span>DIREÇÃO</span>
                <span className="text-[#C9A961] tracking-normal" aria-hidden="true">
                  •
                </span>
                <span>TRANSFORMAÇÃO</span>
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#contato"
          onClick={(e) => handleNavClick(e, "#contato")}
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-charcoal text-offwhite text-sm font-medium tracking-wide hover:bg-charcoal/90 transition-colors"
        >
          Solicitar análise inicial
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-3 text-charcoal"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/30 py-6 px-5">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setMobileOpen(false);
                }}
                className="text-lg text-charcoal/80 hover:text-charcoal py-3 border-b border-border/20"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={(e) => {
                handleNavClick(e, "#contato");
                setMobileOpen(false);
              }}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-charcoal text-offwhite text-sm font-medium tracking-wide"
            >
              Solicitar análise inicial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
