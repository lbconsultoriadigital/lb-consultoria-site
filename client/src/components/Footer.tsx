export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <img
              src="/assets/logos/lb_logo_horizontal.svg"
              alt="LB Consultoria de Carreira"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-foreground/50 tracking-wide">
              Propósito · Direção · Transformação
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-foreground/60 mb-1">
              <a href="https://www.lbconsultoriadigital.com" className="hover:text-charcoal transition-colors">
                www.lbconsultoriadigital.com
              </a>
            </p>
            <p className="text-sm text-foreground/50">
              Felipe Leone · Fundador
            </p>
          </div>
        </div>

        <div className="gold-line w-full mt-10 mb-6"></div>

        <p className="text-xs text-foreground/40 text-center">
          © {new Date().getFullYear()} LB Consultoria de Carreira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
