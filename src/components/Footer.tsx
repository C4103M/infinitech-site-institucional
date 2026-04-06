import { Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Col 1 */}
          <div>
            <a href="#" className="font-display text-xl font-bold tracking-tight">
              <span className="text-gradient">Nexus</span>
              <span className="text-foreground">Jr</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Empresa Júnior de Tecnologia focada em tráfego pago e
              desenvolvimento web. Transformando ideias em resultados digitais.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-display font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Processo</a></li>
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-display font-semibold mb-4">Localização</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Centro Tecnológico — Universidade<br />
              Av. Universitária, s/n<br />
              Campus Principal
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                Brasil Júnior
              </span>
              <span className="px-3 py-1.5 rounded-md bg-secondary text-xs text-muted-foreground font-medium">
                Federação Estadual
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NexusJr. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
